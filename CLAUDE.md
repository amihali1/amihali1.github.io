# Portfolio Site

## Tech Stack
- Framework: Next.js 15 with App Router
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Fonts: Instrument Serif (headings), DM Sans (body), DM Mono (labels/code)
- Deployment: Docker Compose + Cloudflare Tunnel
- Contact form backend: Next.js API route with Resend (email delivery)

## Architecture
- Static generation (SSG) for all pages except contact form API route
- All content lives in local data files (no CMS, no database)
- Projects defined in src/data/projects.ts as typed arrays
- Experience/resume data in src/data/experience.ts
- Dark/light theme via CSS variables and React context
- Contact form submits to /api/contact with Zod validation and rate limiting

## Code Standards
- Strict TypeScript — no `any`, no `as` casts unless unavoidable
- Components are functional with hooks only
- One component per file, named export matching filename
- Tailwind for all styling — no inline styles, no CSS modules
- All public-facing text content extracted to data files (not hardcoded in components)
- Imports ordered: react, next, third-party libs, local modules, types

## File Structure
- src/app/ — Next.js App Router pages and layouts
- src/app/api/ — API routes (contact form)
- src/components/ — Reusable React components
- src/components/ui/ — Small UI primitives (buttons, cards, toggles)
- src/components/sections/ — Page sections (Hero, Projects, Experience, Contact)
- src/data/ — Static content (projects, experience, skills)
- src/lib/ — Utilities, theme config, types
- public/ — Static assets (resume PDF, images)

## Common Commands
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — ESLint + type check
- `docker compose up -d` — run production containers

## Design System
- Color accent: lime green (#C4F042) on dark, forest green (#2D5016) on light
- Border radius: 6px (inputs/buttons), 8-10px (cards)
- Spacing scale: 4/8/12/16/20/24/32/48/64/80/120px
- Animations: scroll-triggered reveals with cubic-bezier(0.16, 1, 0.3, 1)
- Subtle grain texture overlay on all pages

## Anti-Patterns (DO NOT)
- Never use generic fonts (Inter, Roboto, Arial)
- Never hardcode content strings directly in components
- Never use inline styles — use Tailwind classes
- Never commit without running pnpm lint
- Never add dependencies without confirming they're necessary
bash: line 1: save: command not found
