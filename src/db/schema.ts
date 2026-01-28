import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const suggestions = pgTable("suggestions", {
  id: uuid("id").defaultRandom().primaryKey(),
  establishedPlatform: text("established_platform").notNull(),
  alternativeName: text("alternative_name").notNull(),
  url: text("url").notNull(),
  description: text("description").notNull(),
  tag: text("tag").notNull(),
  submitterEmail: text("submitter_email"),
  submitterIp: text("submitter_ip").notNull(),
  status: text("status").notNull().default("pending"),
  reviewedAt: timestamp("reviewed_at"),
  reviewedBy: text("reviewed_by"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Suggestion = typeof suggestions.$inferSelect;
export type NewSuggestion = typeof suggestions.$inferInsert;
