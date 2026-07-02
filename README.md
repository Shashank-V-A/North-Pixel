# North Pixel

Premium agency website for a freelance web design and development studio.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form + Zod
- Lenis smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and add your Web3Forms access key:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

For Vercel, add the same variable in **Project Settings → Environment Variables**.

## Deploy to Vercel

1. Push to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in environment variables
4. Deploy

Update `src/lib/site-config.ts` with your real URLs, email, phone, and social links before going live.

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/
│   ├── contact/      # Contact form
│   ├── home/         # Home page sections
│   ├── layout/       # Header, footer, smooth scroll
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
