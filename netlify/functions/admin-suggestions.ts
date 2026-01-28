import { Handler } from "@netlify/functions";
import { desc, eq } from "drizzle-orm";

import { createDbClient } from "../../src/db/client";
import { suggestions } from "../../src/db/schema";

// Simple admin authentication - replace with your auth system
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "change-me-in-production";

function isAuthenticated(token: string | undefined): boolean {
  return token === `Bearer ${ADMIN_TOKEN}`;
}

export const handler: Handler = async (event) => {
  // Initialize DB client (PGlite for local, Neon for production)
  const db = await createDbClient(process.env.DATABASE_URL);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, PATCH, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  // Check authentication
  const authHeader = event.headers.authorization;
  if (!isAuthenticated(authHeader)) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }

  // GET /admin-suggestions?status=pending
  if (event.httpMethod === "GET") {
    try {
      const status = event.queryStringParameters?.status || "all";

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

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ suggestions: data }),
      };
    } catch (error) {
      console.error("Unexpected error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Internal server error" }),
      };
    }
  }

  // PATCH /admin-suggestions?id=xxx
  if (event.httpMethod === "PATCH") {
    try {
      const id = event.queryStringParameters?.id;
      if (!id) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "Missing suggestion ID" }),
        };
      }

      const { status, reviewedBy } = JSON.parse(event.body || "{}");

      if (!status || !["approved", "rejected"].includes(status)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            error: 'Invalid status. Must be "approved" or "rejected"',
          }),
        };
      }

      await db
        .update(suggestions)
        .set({
          status,
          reviewedAt: new Date(),
          reviewedBy: reviewedBy || null,
        })
        .where(eq(suggestions.id, id));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: `Suggestion ${status}`,
        }),
      };
    } catch (error) {
      console.error("Unexpected error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Internal server error" }),
      };
    }
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
};
