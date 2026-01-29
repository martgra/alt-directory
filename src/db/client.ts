import { PGlite } from "@electric-sql/pglite";
import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePglite } from "drizzle-orm/pglite";

import * as schema from "./schema";

// Singleton for PGlite instance
let pgliteInstance: PGlite | null = null;

async function getPgliteClient() {
  if (!pgliteInstance) {
    pgliteInstance = new PGlite();
    const db = drizzlePglite(pgliteInstance, { schema });

    // Auto-migrate on startup
    await initializeLocalDb(db);
  }
  return drizzlePglite(pgliteInstance, { schema });
}

async function initializeLocalDb(db: ReturnType<typeof drizzlePglite>) {
  // Create the suggestions table
  await db.execute(`
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
  `);

  console.log("📦 Local PGlite database initialized");
}

// Create database client - uses PGlite for local dev, Neon for production
export async function createDbClient(databaseUrl?: string) {
  // Use PGlite if no DATABASE_URL or explicitly in development
  const isLocal = !databaseUrl || databaseUrl === "local";

  if (isLocal) {
    console.log("🔧 Using PGlite (in-memory) for local development");
    return await getPgliteClient();
  }

  // Production: use Neon
  const sql = neon(databaseUrl);
  return drizzleNeon(sql, { schema });
}
