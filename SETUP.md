# Setup Guide - Netlify + Supabase

This guide will walk you through setting up the suggestion submission system using Netlify Functions and Supabase (PostgreSQL).

## Prerequisites

- GitHub account
- Netlify account (free)
- Supabase account (free)

---

## Step 1: Set Up Supabase Database

### 1.1 Create Supabase Project

1. Go to https://supabase.com
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name**: alt-directory (or your choice)
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free
5. Click "Create new project"
6. Wait 2-3 minutes for setup

### 1.2 Create Database Table

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click "New query"
3. Paste this SQL:

```sql
-- Create suggestions table
CREATE TABLE suggestions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  established_platform VARCHAR(100) NOT NULL,
  alternative_name VARCHAR(100) NOT NULL,
  url VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  tag VARCHAR(50) NOT NULL,
  submitter_email VARCHAR(255),
  submitter_ip VARCHAR(45),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by VARCHAR(100)
);

-- Create indexes for better performance
CREATE INDEX idx_suggestions_status ON suggestions(status);
CREATE INDEX idx_suggestions_created_at ON suggestions(created_at DESC);
CREATE INDEX idx_suggestions_ip_created ON suggestions(submitter_ip, created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

-- Create policy: Anyone can insert (submit suggestions)
CREATE POLICY "Anyone can submit suggestions"
  ON suggestions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy: Only service role can read/update
CREATE POLICY "Service role can do everything"
  ON suggestions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
```

4. Click "Run" (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

### 1.3 Get API Keys

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click **API** in the left menu
3. You'll need these values:
   - **Project URL** - looks like `https://xxxxx.supabase.co`
   - **anon public** key - for frontend (if needed)
   - **service_role** key - for admin operations (keep secret!)

**Copy these values - you'll need them in Step 2.**

---

## Step 2: Install Dependencies

```bash
bun install
```

This will install:

- `@supabase/supabase-js` - Supabase client
- `@netlify/functions` - Netlify Functions types

---

## Step 3: Configure Environment Variables

### 3.1 Create `.env` file (for local development)

```bash
# Create .env file in project root
cat > .env << 'EOF'
# Supabase
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_KEY=your-service-role-key-here

# Admin authentication (change this!)
ADMIN_TOKEN=your-secret-admin-token-here

# Optional: Discord webhook for notifications
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
EOF
```

Replace:

- `SUPABASE_URL` with your Project URL from Step 1.3
- `SUPABASE_ANON_KEY` with your anon public key
- `SUPABASE_SERVICE_KEY` with your service_role key
- `ADMIN_TOKEN` with a strong random token (generate with `openssl rand -hex 32`)

### 3.2 Add to `.gitignore`

Make sure `.env` is in your `.gitignore`:

```bash
echo ".env" >> .gitignore
```

---

## Step 4: Test Locally

### 4.1 Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 4.2 Run Development Server

```bash
# Terminal 1: Start Vite dev server
bun run dev

# Terminal 2: Start Netlify Functions
netlify dev
```

This will:

- Run Vite on `http://localhost:5173`
- Run Netlify Functions on `http://localhost:8888`
- Proxy API requests to functions

### 4.3 Test Submission

1. Open `http://localhost:8888` in browser
2. Click "Suggest Alternative"
3. Fill out the form
4. Submit
5. Check your Supabase dashboard:
   - Go to **Table Editor**
   - Select `suggestions` table
   - You should see your submission!

---

## Step 5: Deploy to Netlify

### 5.1 Push to GitHub

```bash
git add .
git commit -m "Add suggestion submission system"
git push origin main
```

### 5.2 Connect to Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose **GitHub**
4. Select your repository
5. Configure build settings:
   - **Build command**: `bun run build` (should auto-detect)
   - **Publish directory**: `dist` (should auto-detect)
   - **Functions directory**: `netlify/functions` (should auto-detect)
6. Click "Deploy site"

### 5.3 Add Environment Variables on Netlify

1. In your Netlify site dashboard, go to **Site configuration** → **Environment variables**
2. Click "Add a variable"
3. Add each variable:

```
SUPABASE_URL = https://xxxxx.supabase.co
SUPABASE_ANON_KEY = your-anon-key
SUPABASE_SERVICE_KEY = your-service-role-key
ADMIN_TOKEN = your-secret-token
DISCORD_WEBHOOK_URL = (optional)
```

4. Click "Save"

### 5.4 Redeploy

After adding environment variables:

1. Go to **Deploys**
2. Click "Trigger deploy" → "Deploy site"
3. Wait for deployment to complete

---

## Step 6: Test Production

1. Visit your Netlify URL (e.g., `https://your-site.netlify.app`)
2. Click "Suggest Alternative"
3. Submit a test suggestion
4. Check Supabase dashboard to confirm it was saved

---

## Step 7: Set Up Admin Dashboard (Optional)

### 7.1 Create Protected Route

Create a simple admin page to review submissions:

```bash
# Add admin route (example using React Router)
# Or create a separate admin subdomain
```

### 7.2 Test Admin API

```bash
# List all pending suggestions
curl https://your-site.netlify.app/api/admin-suggestions?status=pending \
  -H "Authorization: Bearer your-admin-token"

# Approve a suggestion
curl https://your-site.netlify.app/api/admin-suggestions?id=xxx \
  -X PATCH \
  -H "Authorization: Bearer your-admin-token" \
  -H "Content-Type: application/json" \
  -d '{"status": "approved", "reviewedBy": "Admin Name"}'
```

---

## Free Tier Limits

### Supabase (Free Tier)

- **Database**: 500MB storage
- **Bandwidth**: 5GB/month
- **API Requests**: Unlimited
- **File Storage**: 1GB
- **Edge Functions**: 500K invocations/month

### Netlify (Free Tier)

- **Bandwidth**: 100GB/month
- **Build minutes**: 300/month
- **Functions**: 125K invocations/month
- **Sites**: Unlimited

**These limits are more than enough for most use cases!**

---

## Monitoring

### View Submissions in Supabase

1. Go to **Table Editor**
2. Select `suggestions` table
3. Filter by status: `pending`, `approved`, `rejected`

### View Function Logs in Netlify

1. Go to **Functions** tab
2. Click on a function name
3. View recent invocations and logs

### Set Up Alerts

**Supabase:**

- Enable email notifications for errors in Project Settings

**Netlify:**

- Enable deploy notifications in Site Settings → Build & deploy

---

## Troubleshooting

### "Failed to submit suggestion"

1. Check Netlify function logs
2. Verify environment variables are set correctly
3. Check Supabase connection in SQL Editor

### "Too many submissions"

- Rate limit is 5 per IP per 24 hours
- Clear old submissions or increase limit in code

### "Unauthorized" on admin endpoint

- Check `ADMIN_TOKEN` matches in `.env` and Netlify
- Include `Authorization: Bearer <token>` header

### CORS errors

- Check `netlify.toml` has correct headers
- Verify function returns CORS headers

---

## Security Checklist

- [ ] Changed `ADMIN_TOKEN` to a strong random value
- [ ] `.env` file is in `.gitignore`
- [ ] Environment variables set in Netlify (not in code)
- [ ] Supabase RLS policies enabled
- [ ] Rate limiting enabled
- [ ] Input validation working
- [ ] HTTPS enabled (Netlify does this automatically)

---

## Next Steps

1. **Set up Discord webhook** - Get notifications for new submissions
2. **Build admin dashboard** - Use `backend-examples/admin-review-component.tsx`
3. **Customize rate limits** - Adjust in `submit-suggestion.ts`
4. **Add email notifications** - Notify submitters about status
5. **Set up custom domain** - Point your domain to Netlify

---

## Support

- Supabase docs: https://supabase.com/docs
- Netlify docs: https://docs.netlify.com
- Issues: Create an issue in the repo

---

## Cost Estimate

For a small to medium site (< 10K submissions/month):

- **Supabase**: Free (stays within limits)
- **Netlify**: Free (stays within limits)
- **Total**: $0/month

For larger sites:

- Supabase Pro: $25/month (8GB database, 250GB bandwidth)
- Netlify Pro: $19/month (unlimited bandwidth, faster builds)
- **Total**: $44/month
