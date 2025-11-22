## Ankit Tiwary · Portfolio 2025

A premium, animation-forward portfolio built with Next.js App Router, Tailwind, and Framer Motion. It ships fully responsive UI, light/dark mode with persistence, scroll-triggered reveals, lazy-loaded media, a modal case study gallery, optional content sections, and an email-ready contact form powered by Resend.

### 🧱 Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS with custom tokens + glassmorphism flourishes
- Framer Motion, React Type Animation, `next-themes`
- React Hook Form + Zod validation
- Resend transactional email API for the contact form

### 📁 File Structure (abridged)

```
src/
 ├─ app/
 │   ├─ api/contact/route.ts       # Resend email endpoint
 │   ├─ layout.tsx                 # Metadata + ThemeProvider
 │   └─ page.tsx                   # Section composition
 ├─ components/
 │   ├─ layout/                    # Navbar, Footer
 │   ├─ providers/theme-provider.tsx
 │   ├─ sections/                  # Hero, About, Projects, Skills, Blog, Testimonials, Certifications, Contact
 │   ├─ section-heading.tsx        # Shared heading atom
 │   └─ theme-toggle.tsx
 └─ lib/
     ├─ data.ts                    # Content, timelines, projects, testimonials
     └─ utils.ts                   # cn helper
public/
 ├─ media/                         # SVG placeholders for projects & people
 ├─ resume.pdf                     # Replace with your resume
 └─ og-image.svg                   # Social preview
```

### ⚙️ Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the site.

### 📨 Environment Variables

Create `.env.local` and add your Resend key (or leave unset to log payloads):

```
RESEND_API_KEY=your_resend_key
```

### 🚀 Deployment Guide

**Vercel**
1. Push this repo to GitHub.
2. Import into Vercel, set `RESEND_API_KEY`, deploy.

**Netlify**
1. Run `npm run build` in CI, publish `.next`.
2. Use Netlify’s Next.js support or `@netlify/plugin-nextjs`.

**GitHub Pages**
1. Run `npm run build`.
2. Export static assets with `next export` (add script) if you don’t need the contact API.
3. Deploy the generated `out` folder to Pages. (Note: serverless contact route won’t work without a backend; use EmailJS or Netlify Forms as alternatives.)

### ✨ Feature Checklist

- Modern hero with animated copy + stats
- Interactive About with timeline + resume CTA
- Project grid with modal deep dives & lazy media
- Skills visualized via animated progress bars
- Blog, testimonials, certifications, achievements
- Contact form (React Hook Form + Zod + Resend) + embedded map
- Smooth scrolling, reveal animations, light/dark theme persistence
- SEO metadata + OG image

### 🧪 Testing & Quality

- `npm run lint` — ESLint (Next.js config)
- Visual QA recommended on Chrome, Safari, Firefox + responsive breakpoints

### 📎 Customization Tips

- Update `src/lib/data.ts` with your actual copy, links, and media.
- Replace `public/resume.pdf` with your real résumé.
- Swap placeholder SVGs in `public/media` with real images/video.
- Update metadata in `src/app/layout.tsx` with your production domain.
