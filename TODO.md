# Your To-Do List

Everything is ready to go! Follow this checklist to get your submission system live.

## ✅ Done (By Me)

- [x] Created submission form UI
- [x] Built Netlify Functions (submit + admin)
- [x] Configured Supabase integration
- [x] Added rate limiting
- [x] Set up CORS
- [x] Created all documentation
- [x] Added dependencies to package.json
- [x] Configured netlify.toml
- [x] Created .env.example
- [x] Verified build succeeds

## 📋 Your Checklist (15 minutes)

### 1. Set Up Supabase (5 min)

- [ ] Go to https://supabase.com and sign up
- [ ] Click "New Project"
- [ ] Wait for project to be ready (2-3 min)
- [ ] Go to SQL Editor
- [ ] Copy SQL from `QUICK_START.md` → Run it
- [ ] Go to Project Settings → API
- [ ] Copy: Project URL, anon key, service_role key

### 2. Configure Environment (2 min)

- [ ] Copy `.env.example` to `.env`
- [ ] Paste your Supabase URL
- [ ] Paste your Supabase keys
- [ ] Generate admin token: `openssl rand -hex 32`
- [ ] Save `.env` file

### 3. Test Locally (5 min)

Terminal 1:

```bash
bun run dev
```

Terminal 2:

```bash
netlify dev
```

- [ ] Open http://localhost:8888
- [ ] Click "Suggest Alternative"
- [ ] Fill form and submit
- [ ] Check Supabase Table Editor → should see your submission!

### 4. Deploy (3 min)

- [ ] Commit changes: `git add . && git commit -m "Add submission system"`
- [ ] Push to GitHub: `git push`
- [ ] Go to https://netlify.com
- [ ] Click "Add new site" → Import from GitHub
- [ ] Select your repo
- [ ] Go to Site configuration → Environment variables
- [ ] Add all variables from your `.env` file
- [ ] Click "Deploy site"

### 5. Test Production (1 min)

- [ ] Visit your Netlify URL
- [ ] Click "Suggest Alternative"
- [ ] Submit test suggestion
- [ ] Check Supabase → should see it!

## 🎉 Done!

Your submission system is live!

---

## 📖 Need Help?

- **Quick Start**: See `QUICK_START.md`
- **Detailed Setup**: See `SETUP.md`
- **Technical Details**: See `IMPLEMENTATION_SUMMARY.md`

## 🔜 Optional Next Steps

When you're ready:

- [ ] Build admin dashboard (see `backend-examples/admin-review-component.tsx`)
- [ ] Set up Discord webhook (add `DISCORD_WEBHOOK_URL` to env)
- [ ] Add custom domain to Netlify
- [ ] Set up monitoring/alerts

---

## 💰 Cost

Current setup: **$0/month** (free tiers)

Limits:

- Supabase: 500MB DB, 5GB bandwidth/month
- Netlify: 100GB bandwidth, 125K function calls/month

You'll likely stay free indefinitely unless you go viral! 🚀
