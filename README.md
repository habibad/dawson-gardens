# Dawson Landscaping & Maintenance — Next.js

A production-ready Next.js 15 (App Router) port of the original [`habibad/dawson-gardens`](https://github.com/habibad/dawson-gardens)
TanStack Start project. Same design, same content, same components — rebuilt on Next.js conventions.

## What changed from the original

The source project was a **TanStack Start** app (Vite + TanStack Router + React 19 + Tailwind v4 +
shadcn/ui), essentially a single-page marketing site. That made it a clean fit for Next.js:

- **Routing** — TanStack's file-based router (`src/routes/__root.tsx`, `src/routes/index.tsx`) replaced
  by the App Router (`src/app/layout.tsx`, `src/app/page.tsx`).
- **Images** — every `<img src={import}>` converted to `next/image`, so images get automatic
  optimization, lazy-loading, and responsive `srcset` generation for free. Fixed/absolute images use
  `fill`; the rest use their static import's intrinsic size.
- **Metadata & SEO** — the TanStack `head()` config replaced by Next's typed `Metadata` API
  (`export const metadata`), plus the `LandscapingBusiness` JSON-LD schema is now emitted directly in
  `app/page.tsx`.
- **Client/Server split** — components with no interactivity (`TrustBar`, `Testimonials`, `About`,
  `Impact`) are plain **Server Components**. Anything with `onClick`, `useState`, or `useEffect`
  (`Header`, `Hero`, `QuoteSection`, `BeforeAfter`, etc.) is marked `"use client"`. All shadcn `ui/`
  primitives are marked `"use client"` too, per standard shadcn/Next.js convention.
- **Error/404 pages** — TanStack's `notFoundComponent`/`errorComponent` replaced by
  `app/not-found.tsx` and `app/error.tsx`.
- **Fonts** — kept as Google Fonts CDN `<link>` tags (matching the original) for portability. See
  [Optional: self-hosted fonts](#optional-self-hosted-fonts) below to switch to `next/font` instead.
- **Removed**: `router.tsx`, `server.ts`, `start.ts`, `routeTree.gen.ts` — all TanStack Start–specific
  and unneeded under Next.js, which handles routing/SSR itself.
- **Content model unchanged** — `src/content/site.ts` is untouched (only the `Service`/`Project` image
  field types were updated from `string` to Next's `StaticImageData`, since static image imports are
  typed objects in Next.js, not plain URL strings).

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

This has been verified to build cleanly with `next build` (static prerendering, passing lint + type
checks).

## Project structure

```
src/
  app/
    layout.tsx        # root layout, global metadata, fonts
    page.tsx           # home page — composes all sections + JSON-LD
    not-found.tsx       # 404
    error.tsx           # error boundary
    globals.css         # Tailwind v4 theme (unchanged design tokens)
  components/
    ui/                 # shadcn/ui primitives ("use client")
    Header.tsx, Hero.tsx, ...  # page sections
  content/
    site.ts              # all copy/content — swap for a CMS later without touching components
  lib/
    analytics.ts          # lightweight dataLayer/gtag event tracking
    utils.ts               # cn() helper
  hooks/
    use-mobile.tsx          # responsive breakpoint hook
  assets/                    # source images (statically imported, optimized by next/image)
```

## Deploying

Works out of the box on Vercel (`vercel deploy`) or any Node host that supports `next start`. No
environment variables are required for the base site.

## Optional: self-hosted fonts

The sandbox this was built in couldn't reach `fonts.googleapis.com` at build time, so fonts are
loaded via CDN `<link>` tags in `app/layout.tsx` (identical to the original site's approach). On a
host with normal internet access, you can switch to self-hosted, zero-layout-shift fonts:

```tsx
// src/app/layout.tsx
import { Archivo, Manrope } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["600","700","800","900"], variable: "--font-archivo" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-manrope" });
```

Apply `${archivo.variable} ${manrope.variable}` as a className on `<html>`, remove the CDN `<link>`
tags, and update `--font-display` / `--font-sans` in `globals.css` to reference `var(--font-archivo)`
/ `var(--font-manrope)` instead of the literal font names.

## Analytics

`src/lib/analytics.ts` pushes events to `window.dataLayer` (GA4/GTM-ready) — no vendor script is
loaded by default. Wire up GTM or `gtag.js` whenever you're ready.

## Quote form

`src/components/QuoteSection.tsx` renders a demo form that only sets local `submitted` state — it
isn't wired to a backend. Connect it to your form handler / CRM of choice (a Next.js API route,
Formspree, etc.) before launch.
