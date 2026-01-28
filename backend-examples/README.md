# Backend Examples for Suggestion System

This directory contains example backend implementations for handling user-submitted alternative suggestions.

## Files

- **`api-endpoint.ts`** - Multiple backend implementation examples (Express, Serverless, Firebase, etc.)
- **`admin-review-component.tsx`** - React component for admin review dashboard
- **`schema.sql`** - Database schema for PostgreSQL (see below)

## Quick Start

### 1. Choose Your Backend

Pick the implementation that matches your stack:

- **Express + PostgreSQL** - Traditional server setup
- **Serverless (Vercel/Netlify) + Airtable** - No server management
- **Firebase Functions + Firestore** - Google Cloud Platform
- **File-based Storage** - Simple, for development/small scale

### 2. Set Up Database

If using PostgreSQL:

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  established_platform VARCHAR(100) NOT NULL,
  alternative_name VARCHAR(100) NOT NULL,
  url VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  tag VARCHAR(50) NOT NULL,
  submitter_email VARCHAR(255),
  submitter_ip VARCHAR(45),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  reviewed_by VARCHAR(100)
);

CREATE INDEX idx_suggestions_status ON suggestions(status);
CREATE INDEX idx_suggestions_created_at ON suggestions(created_at);
```

### 3. Set Environment Variables

```env
# PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/alternatives

# Airtable
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id

# Firebase
FIREBASE_PROJECT_ID=your_project_id

# Email (optional)
SMTP_HOST=smtp.example.com
SMTP_USER=user@example.com
SMTP_PASS=password

# Webhooks (optional)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

### 4. Update Frontend

In `suggest-alternative-form.tsx`, replace the simulated API call:

```ts
// Replace this:
await new Promise((resolve) => setTimeout(resolve, 1500));
console.log("Suggestion submitted:", formData);

// With this:
const response = await fetch("/api/suggestions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

if (!response.ok) throw new Error("Submission failed");
```

## Deployment Options

### Vercel

1. Add API route: `pages/api/suggestions.ts`
2. Deploy: `vercel deploy`
3. Environment variables in Vercel dashboard

### Netlify

1. Add function: `netlify/functions/suggestions.ts`
2. Deploy: `netlify deploy`
3. Environment variables in Netlify dashboard

### Railway/Render

1. Deploy as Express app
2. Connect PostgreSQL database
3. Add environment variables

### Firebase

1. Initialize: `firebase init functions`
2. Deploy: `firebase deploy --only functions`
3. Set config: `firebase functions:config:set`

## Admin Dashboard

### Setup

1. Create protected route (e.g., `/admin/suggestions`)
2. Add authentication (e.g., Firebase Auth, Auth0)
3. Use `admin-review-component.tsx` as starting point
4. Deploy admin dashboard separately or as part of main app

### Authentication

Example with basic auth:

```ts
// Middleware
function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token || !verifyAdminToken(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

app.get("/api/admin/suggestions", requireAdmin, async (req, res) => {
  // ... handle request
});
```

## Testing

### Manual Testing

```bash
curl -X POST http://localhost:3000/api/suggestions \
  -H "Content-Type: application/json" \
  -d '{
    "establishedPlatform": "twitter",
    "alternativeName": "Mastodon",
    "url": "https://joinmastodon.org",
    "description": "Decentralized social network",
    "tag": "Federated",
    "submitterEmail": "test@example.com"
  }'
```

### Automated Tests

```ts
// Jest example
describe("POST /api/suggestions", () => {
  it("should accept valid suggestion", async () => {
    const response = await request(app).post("/api/suggestions").send({
      establishedPlatform: "twitter",
      alternativeName: "Mastodon",
      url: "https://joinmastodon.org",
      description: "Great alternative",
      tag: "Federated",
    });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });

  it("should reject missing fields", async () => {
    const response = await request(app).post("/api/suggestions").send({
      alternativeName: "Mastodon",
    });

    expect(response.status).toBe(400);
  });
});
```

## Rate Limiting

Implement rate limiting to prevent spam:

```ts
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 5, // 5 requests per day
  message: "Too many submissions from this IP",
});

app.post("/api/suggestions", limiter, async (req, res) => {
  // ... handle request
});
```

## Monitoring

Track key metrics:

```ts
// Example with logging
app.post("/api/suggestions", async (req, res) => {
  const startTime = Date.now();

  try {
    // ... process suggestion

    // Log success
    console.log({
      event: "suggestion_submitted",
      platform: req.body.establishedPlatform,
      alternative: req.body.alternativeName,
      duration: Date.now() - startTime,
    });
  } catch (error) {
    // Log error
    console.error({
      event: "suggestion_error",
      error: error.message,
      duration: Date.now() - startTime,
    });
  }
});
```

## Notifications

### Email Notification

```ts
// When suggestion submitted
await sendEmail({
  to: "admin@yoursite.com",
  subject: "New Alternative Suggestion",
  body: `New suggestion for ${data.establishedPlatform}...`,
});
```

### Discord/Slack Webhook

```ts
// Post to Discord channel
await fetch(process.env.DISCORD_WEBHOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    content: `🎯 New suggestion: ${data.alternativeName}`,
  }),
});
```

## Security Checklist

- [ ] Input validation on all fields
- [ ] SQL injection prevention (use parameterized queries)
- [ ] XSS prevention (sanitize HTML)
- [ ] Rate limiting enabled
- [ ] CAPTCHA for public submissions (optional)
- [ ] Admin routes protected with authentication
- [ ] HTTPS enabled in production
- [ ] CORS configured properly
- [ ] Environment variables secured
- [ ] Database credentials not in code

## Maintenance

### Regular Tasks

1. **Review pending suggestions** - Daily or weekly
2. **Check for duplicates** - Before approving
3. **Verify URLs** - Ensure they're still active
4. **Update categories** - Add new tags as needed
5. **Backup database** - Regular backups
6. **Monitor spam** - Check for abuse

### Database Cleanup

```sql
-- Remove old rejected suggestions (older than 90 days)
DELETE FROM suggestions
WHERE status = 'rejected'
AND created_at < NOW() - INTERVAL '90 days';

-- Archive old approved suggestions
INSERT INTO suggestions_archive
SELECT * FROM suggestions
WHERE status = 'approved'
AND reviewed_at < NOW() - INTERVAL '1 year';
```

## Support

Questions or issues? Check:

1. Main documentation: `/SUBMISSION_FLOW.md`
2. Frontend component: `/src/features/suggestions/components/suggest-alternative-form.tsx`
3. Create an issue in the repo

## License

Same as main project
