// Example Backend Implementation for Suggestion Submissions
// Choose the approach that fits your stack

// ============================================================================
// OPTION 1: Node.js + Express + PostgreSQL
// ============================================================================

import express from "express";
import { Pool } from "pg";

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

// POST /api/suggestions
app.post("/api/suggestions", async (req, res) => {
  const { establishedPlatform, alternativeName, url, description, tag, submitterEmail } = req.body;

  // Validation
  if (!establishedPlatform || !alternativeName || !url || !description || !tag) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  // URL validation
  try {
    new URL(url);
  } catch {
    return res.status(400).json({
      success: false,
      message: "Invalid URL format",
    });
  }

  // Rate limiting check (simple IP-based)
  const ip = req.ip;
  const recentSubmissions = await pool.query(
    "SELECT COUNT(*) FROM suggestions WHERE submitter_ip = $1 AND created_at > NOW() - INTERVAL '1 day'",
    [ip]
  );

  if (parseInt(recentSubmissions.rows[0].count) >= 5) {
    return res.status(429).json({
      success: false,
      message: "Too many submissions. Please try again tomorrow.",
    });
  }

  try {
    // Insert into database
    const result = await pool.query(
      `INSERT INTO suggestions
       (established_platform, alternative_name, url, description, tag, submitter_email, submitter_ip, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
       RETURNING id`,
      [establishedPlatform, alternativeName, url, description, tag, submitterEmail, ip]
    );

    // Optional: Send notification to admin
    // await sendNotificationEmail(result.rows[0].id);

    res.status(201).json({
      success: true,
      message: "Thank you! Your suggestion will be reviewed shortly.",
      suggestionId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit suggestion. Please try again.",
    });
  }
});

// ============================================================================
// OPTION 2: Serverless Function (Vercel/Netlify) + Airtable
// ============================================================================

import Airtable from "airtable";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  const { establishedPlatform, alternativeName, url, description, tag, submitterEmail } = req.body;

  try {
    await base("Suggestions").create([
      {
        fields: {
          "Established Platform": establishedPlatform,
          "Alternative Name": alternativeName,
          URL: url,
          Description: description,
          Tag: tag,
          "Submitter Email": submitterEmail,
          Status: "Pending Review",
          "Submitted At": new Date().toISOString(),
        },
      },
    ]);

    res.status(201).json({
      success: true,
      message: "Suggestion submitted successfully!",
    });
  } catch (error) {
    console.error("Airtable error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit suggestion",
    });
  }
}

// ============================================================================
// OPTION 3: Firebase Functions + Firestore
// ============================================================================

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();

export const submitSuggestion = functions.https.onRequest(async (req, res) => {
  // CORS headers
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).send("");
  }

  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { establishedPlatform, alternativeName, url, description, tag, submitterEmail } = req.body;

  try {
    const docRef = await admin
      .firestore()
      .collection("suggestions")
      .add({
        establishedPlatform,
        alternativeName,
        url,
        description,
        tag,
        submitterEmail: submitterEmail || null,
        status: "pending",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        ip: req.ip,
      });

    res.status(201).json({
      success: true,
      message: "Suggestion submitted!",
      suggestionId: docRef.id,
    });
  } catch (error) {
    console.error("Firestore error:", error);
    res.status(500).json({
      success: false,
      message: "Submission failed",
    });
  }
});

// ============================================================================
// OPTION 4: Simple File-Based Storage (Development/Small Scale)
// ============================================================================

import fs from "fs/promises";
import path from "path";

app.post("/api/suggestions", async (req, res) => {
  const { establishedPlatform, alternativeName, url, description, tag, submitterEmail } = req.body;

  const suggestion = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    establishedPlatform,
    alternativeName,
    url,
    description,
    tag,
    submitterEmail,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };

  try {
    const filePath = path.join(process.cwd(), "data", "suggestions.json");

    // Read existing suggestions
    let suggestions = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      suggestions = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    // Add new suggestion
    suggestions.push(suggestion);

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(suggestions, null, 2));

    res.status(201).json({
      success: true,
      message: "Suggestion submitted!",
      suggestionId: suggestion.id,
    });
  } catch (error) {
    console.error("File system error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save suggestion",
    });
  }
});

// ============================================================================
// BONUS: Email Notification Example (using Nodemailer)
// ============================================================================

import nodemailer from "nodemailer";

async function sendNotificationEmail(suggestionId: string, data: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Alternative Suggestions" <noreply@yoursite.com>',
    to: "admin@yoursite.com",
    subject: `New Alternative Suggestion: ${data.alternativeName}`,
    html: `
      <h2>New Alternative Suggestion Received</h2>
      <p><strong>ID:</strong> ${suggestionId}</p>
      <p><strong>Platform:</strong> ${data.establishedPlatform}</p>
      <p><strong>Alternative:</strong> ${data.alternativeName}</p>
      <p><strong>URL:</strong> <a href="${data.url}">${data.url}</a></p>
      <p><strong>Category:</strong> ${data.tag}</p>
      <p><strong>Description:</strong> ${data.description}</p>
      ${data.submitterEmail ? `<p><strong>Email:</strong> ${data.submitterEmail}</p>` : ""}
      <p><a href="https://yoursite.com/admin/suggestions/${suggestionId}">Review Suggestion</a></p>
    `,
  });
}

// ============================================================================
// BONUS: Webhook Integration (Discord/Slack)
// ============================================================================

async function sendDiscordWebhook(data: any) {
  await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [
        {
          title: "🎯 New Alternative Suggestion",
          color: 0x3b82f6, // blue
          fields: [
            { name: "Platform", value: data.establishedPlatform, inline: true },
            { name: "Alternative", value: data.alternativeName, inline: true },
            { name: "Category", value: data.tag, inline: true },
            { name: "URL", value: data.url },
            { name: "Description", value: data.description.substring(0, 200) },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
}
