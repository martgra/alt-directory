import { Handler } from "@netlify/functions";
import { and, count, eq, gte } from "drizzle-orm";

import { createDbClient } from "../../src/db/client";
import { suggestions } from "../../src/db/schema";

interface SuggestionPayload {
  establishedPlatform: string;
  alternativeName: string;
  url: string;
  description: string;
  tag: string;
  submitterEmail?: string;
}

export const handler: Handler = async (event) => {
  // Initialize DB client (PGlite for local, Neon for production)
  const db = await createDbClient(process.env.DATABASE_URL);

  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data: SuggestionPayload = JSON.parse(event.body || "{}");

    // Validation
    if (
      !data.establishedPlatform ||
      !data.alternativeName ||
      !data.url ||
      !data.description ||
      !data.tag
    ) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
      };
    }

    // URL validation
    try {
      new URL(data.url);
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Invalid URL format",
        }),
      };
    }

    // Get IP for rate limiting
    const ip = event.headers["x-forwarded-for"] || event.headers["client-ip"] || "unknown";

    // Check rate limit: 5 submissions per IP per day
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    try {
      const [result] = await db
        .select({ count: count() })
        .from(suggestions)
        .where(and(gte(suggestions.createdAt, oneDayAgo), eq(suggestions.submitterIp, ip)));

      if (result && result.count >= 5) {
        return {
          statusCode: 429,
          headers,
          body: JSON.stringify({
            success: false,
            message: "Too many submissions. Please try again tomorrow.",
          }),
        };
      }
    } catch (countError) {
      console.error("Rate limit check error:", countError);
    }

    // Insert suggestion
    let suggestion;
    try {
      [suggestion] = await db
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
    } catch (insertError) {
      console.error("Database error:", insertError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Failed to submit suggestion. Please try again.",
        }),
      };
    }

    // Optional: Send webhook notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                title: "🎯 New Alternative Suggestion",
                color: 0x3b82f6,
                fields: [
                  {
                    name: "Platform",
                    value: data.establishedPlatform,
                    inline: true,
                  },
                  {
                    name: "Alternative",
                    value: data.alternativeName,
                    inline: true,
                  },
                  { name: "Category", value: data.tag, inline: true },
                  { name: "URL", value: data.url },
                  {
                    name: "Description",
                    value:
                      data.description.substring(0, 200) +
                      (data.description.length > 200 ? "..." : ""),
                  },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Thank you! Your suggestion will be reviewed shortly.",
        suggestionId: suggestion.id,
      }),
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      }),
    };
  }
};
