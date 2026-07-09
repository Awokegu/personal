# Personal Portfolio — Next.js

The Node.js/Next.js version of the portfolio, matching the Laravel version's design and
content: hero, about, categorized skills, projects, experience timeline, a working
contact form (sends real email via SMTP), a resume view/download button, and a
light/dark theme toggle.

Built with Next.js 14 (App Router) + Tailwind CSS. No database needed — content lives in
`data/portfolio.js`, and the contact form sends email directly via Nodemailer, which is
perfect for Vercel's free tier (serverless functions, no server to manage).

---

## 1. Install Node.js (if you don't have it)

Download the LTS version from **nodejs.org** and install it (default options are fine).
Verify it worked:
```powershell
node -v
npm -v
```

## 2. Install project dependencies

Open a terminal in this folder:
```powershell
cd portfolio-nextjs
npm install
```

## 3. Set up your contact form's email sending

Copy `.env.example` to `.env.local`:
```powershell
copy .env.example .env.local
```

Edit `.env.local` with real values. **If using Gmail:**
1. Turn on 2-Step Verification on your Google account (myaccount.google.com/security)
2. Go to myaccount.google.com/apppasswords, generate an "App Password" for Mail
3. Use that 16-character password (not your normal Gmail password) as `SMTP_PASS`

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=youraddress@gmail.com
SMTP_PASS=xxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=youraddress@gmail.com
```

## 4. Add your photo and resume

- Put your photo at `public/images/me.jpg` (referenced in `data/portfolio.js` as `profile.photo`)
- Put your resume PDF at `public/resume.pdf`
- Put project screenshots at `public/images/projects/*.jpg` (filenames referenced in `data/portfolio.js`)

## 5. Run it locally

```powershell
npm run dev
```

Visit **http://localhost:3000**

---

## Customizing content

Everything text-based (name, bio, skills, projects, experience, social links) lives in
one file: **`data/portfolio.js`**. Edit it directly — no database, no seeding, just save
and refresh.

---

## Deploying to Vercel (free)

**Vercel is built for Next.js** — this is the easiest deploy of anything we've done so far.

### Option A: Deploy via GitHub (recommended — auto-deploys on every push)

1. Push this project to a GitHub repository:
```powershell
cd portfolio-nextjs
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio-nextjs.git
git push -u origin main
```
   (`.env.local` is already excluded via `.gitignore` — your SMTP password never gets pushed)

2. Go to **vercel.com** → sign up/log in with your GitHub account
3. Click **Add New → Project**
4. Select your `portfolio-nextjs` repository → click **Import**
5. Vercel auto-detects Next.js — no configuration needed
6. **Before clicking Deploy**, expand **Environment Variables** and add the same four
   variables from your `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO_EMAIL`
7. Click **Deploy**

Done — Vercel gives you a live URL immediately (e.g. `portfolio-nextjs.vercel.app`), and
every future `git push` automatically redeploys.

### Option B: Deploy without GitHub, using Vercel CLI directly

```powershell
npm install -g vercel
cd portfolio-nextjs
vercel
```
Follow the prompts (log in, confirm project settings). Then set your environment
variables:
```powershell
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add CONTACT_TO_EMAIL
```
Then deploy to production:
```powershell
vercel --prod
```

---

## Updating your live site later

- **With GitHub connected (Option A):** just `git push` — Vercel redeploys automatically, no manual steps
- **With CLI only (Option B):** run `vercel --prod` again after making changes

This is dramatically simpler than the InfinityFree/FTP workflow, since Vercel is
designed around Git-based (or CLI-based) deploys with zero manual file management.

---

## Why no database?

Since this portfolio's content (skills, projects, experience) rarely changes and isn't
user-generated, storing it in `data/portfolio.js` avoids needing a database entirely —
one less free-tier service to manage, and instant edits without migrations or seeding.
If you later want a database (e.g. to manage projects through an admin UI), free options
that pair well with Vercel include **Vercel Postgres** (free tier) or **MongoDB Atlas**
(free forever tier).
