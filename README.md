# North Pixel

Marketing site for North Pixel — freelance web design and development.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form + Zod
- Web3Forms (contact form)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes (production) | Web3Forms access key for the contact form |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public site URL for SEO, sitemap, and Open Graph |

## Deploy to Vercel

This project is ready for Vercel with zero extra config — Next.js is auto-detected.

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `Shashank-V-A/North-Pixel` from GitHub
3. Framework preset: **Next.js** (auto-detected)
4. Build command: `npm run build` (default)
5. Output directory: `.next` (default)

### 3. Add environment variables

In **Project Settings → Environment Variables**, add:

| Name | Value | Environments |
|------|-------|--------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Your Web3Forms key | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Production only |

For preview deployments, the site URL falls back to the Vercel deployment URL automatically.

### 4. Deploy

Click **Deploy**. Vercel will build and host the site. Connect a custom domain under **Project Settings → Domains** when ready.

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/
│   ├── contact/      # Contact form
│   ├── home/         # Home page sections
│   ├── layout/       # Header, footer, Jotform agent
│   ├── pricing/      # Pricing components
│   ├── shared/       # Reusable UI blocks
│   └── ui/           # shadcn/ui primitives
└── lib/
    ├── data/         # Content data
    ├── metadata.ts   # SEO helpers
    └── site-config.ts
```

## Customization

- **Branding & links**: `src/lib/site-config.ts`
- **Services, projects, pricing, FAQ**: `src/lib/data/`
- **Colors & typography**: `src/app/globals.css`
