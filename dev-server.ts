import { and, count, desc, eq, gte } from "drizzle-orm";

import { createDbClient } from "./src/db/client";
import { suggestions } from "./src/db/schema";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "dev-admin-token-change-in-production";

// Utility to handle CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
};

// Submit suggestion handler
async function handleSubmitSuggestion(req: Request) {
  if (req.method === "OPTIONS") {
    return new Response("", { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const db = await createDbClient(process.env.DATABASE_URL);
    const data = await req.json();

    // Validation
    if (
      !data.establishedPlatform ||
      !data.alternativeName ||
      !data.url ||
      !data.description ||
      !data.tag
    ) {
      return new Response(JSON.stringify({ success: false, message: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // URL validation
    try {
      new URL(data.url);
    } catch {
      return new Response(JSON.stringify({ success: false, message: "Invalid URL format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const ip = req.headers.get("x-forwarded-for") || "localhost";

    // Rate limiting
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [result] = await db
      .select({ count: count() })
      .from(suggestions)
      .where(and(gte(suggestions.createdAt, oneDayAgo), eq(suggestions.submitterIp, ip)));

    if (result && result.count >= 5) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Too many submissions. Please try again tomorrow.",
        }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert suggestion
    const [suggestion] = await db
      .insert(suggestions)
      .values({
        establishedPlatform: data.establishedPlatform,
        alternativeName: data.alternativeName,
        url: data.url,
        description: data.description,
        tag: data.tag,
        submitterEmail: data.submitterEmail || null,
        submitterIp: ip,
        status: "pending",
      })
      .returning();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your suggestion will be reviewed shortly.",
        suggestionId: suggestion.id,
      }),
      { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ success: false, message: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}

// Admin suggestions handler
async function handleAdminSuggestions(req: Request) {
  if (req.method === "OPTIONS") {
    return new Response("", { status: 204, headers: corsHeaders });
  }

  // Check authentication
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${ADMIN_TOKEN}`) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const db = await createDbClient(process.env.DATABASE_URL);
  const url = new URL(req.url);

  // GET - Fetch suggestions
  if (req.method === "GET") {
    try {
      const status = url.searchParams.get("status") || "all";

      let data;
      if (status === "all") {
        data = await db.select().from(suggestions).orderBy(desc(suggestions.createdAt));
      } else {
        data = await db
          .select()
          .from(suggestions)
          .where(eq(suggestions.status, status))
          .orderBy(desc(suggestions.createdAt));
      }

      return new Response(JSON.stringify({ suggestions: data }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error:", error);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  // PATCH - Update suggestion
  if (req.method === "PATCH") {
    try {
      const id = url.searchParams.get("id");
      if (!id) {
        return new Response(JSON.stringify({ error: "Missing suggestion ID" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const body = await req.json();
      const { status, reviewedBy } = body;

      if (!status || !["approved", "rejected"].includes(status)) {
        return new Response(
          JSON.stringify({ error: 'Invalid status. Must be "approved" or "rejected"' }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      await db
        .update(suggestions)
        .set({
          status,
          reviewedAt: new Date(),
          reviewedBy: reviewedBy || null,
        })
        .where(eq(suggestions.id, id));

      return new Response(JSON.stringify({ success: true, message: `Suggestion ${status}` }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error:", error);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// Main server
const server = Bun.serve({
  port: 3001,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);

    // API routes
    if (url.pathname === "/api/submit-suggestion") {
      return handleSubmitSuggestion(req);
    }

    if (url.pathname === "/api/admin-suggestions") {
      return handleAdminSuggestions(req);
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`🚀 Dev API server running at http://localhost:${server.port}`);
console.log(`📡 Submit suggestions: POST http://localhost:${server.port}/api/submit-suggestion`);
console.log(`🔐 Admin panel: GET/PATCH http://localhost:${server.port}/api/admin-suggestions`);
