# Quick Start Guide

Get the suggestion system running in 15 minutes.

## 1. Install Dependencies

```bash
bun install
```

## 2. Set Up Supabase (5 minutes)

1. Go to https://supabase.com and create account
2. Create new project (wait 2-3 min)
3. Go to SQL Editor → Run this:

```sql
CREATE TABLE suggestions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  established_platform VARCHAR(100) NOT NULL,
  alternative_name VARCHAR(100) NOT NULL,
  url VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  tag VARCHAR(50) NOT NULL,
  submitter_email VARCHAR(255),
  submitter_ip VARCHAR(45),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by VARCHAR(100)
);

CREATE INDEX idx_suggestions_status ON suggestions(status);
CREATE INDEX idx_suggestions_created_at ON suggestions(created_at DESC);

ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit" ON suggestions FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Service role full access" ON suggestions FOR ALL TO service_role USING (true);
```

4. Go to Project Settings → API → Copy these:
   - Project URL
   - anon public key
   - service_role key

## 3. Configure Environment

```bash
# Copy example
cp .env.example .env

# Edit .env with your values
nano .env
```

Fill in:

```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_KEY=eyJ...
ADMIN_TOKEN=$(openssl rand -hex 32)
```

## 4. Test Locally

```bash
# Terminal 1
bun run dev

# Terminal 2
netlify dev
```

Visit http://localhost:8888 → Click "Suggest Alternative" → Submit

## 5. Deploy to Netlify

```bash
# Push to GitHub
git add .
git commit -m "Setup complete"
git push

# Then on Netlify:
# 1. Import from GitHub
# 2. Add environment variables
# 3. Deploy
```

## Done! 🎉

Your submission system is live.

---

## Common Commands

```bash
# Development
bun run dev              # Start Vite
netlify dev              # Start functions + Vite

# Build
bun run build            # Production build

# View submissions in Supabase
# → Table Editor → suggestions table

# Test admin API
curl http://localhost:8888/api/admin-suggestions?status=pending \
  -H "Authorization: Bearer $ADMIN_TOKEN"
```

---

## Need Help?

See detailed guide: [SETUP.md](./SETUP.md)
