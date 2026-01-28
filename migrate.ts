import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("❌ DATABASE_URL environment variable is required");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function migrate() {
  console.log("🔄 Creating suggestions table...");

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS suggestions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        established_platform TEXT NOT NULL,
        alternative_name TEXT NOT NULL,
        url TEXT NOT NULL,
        description TEXT NOT NULL,
        tag TEXT NOT NULL,
        submitter_email TEXT,
        submitter_ip TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        reviewed_at TIMESTAMP,
        reviewed_by TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    console.log("✅ Table created successfully!");

    // Verify table exists
    const result = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name = 'suggestions'
    `;

    if (result.length > 0) {
      console.log("✅ Verified: suggestions table exists");
    } else {
      console.log("⚠️  Warning: Could not verify table creation");
    }
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

migrate();
