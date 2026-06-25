# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**Kinema** — a fictional independent **motion design studio** website, built as a frontend / design-engineering portfolio piece. All content, kit names and people are fictitious. The signature feature is a **live Animation Playground**.

The visual system is "dark studio": deep near-black background (`--void`), electric teal accent (`--spark`), violet (`--volt`), amber (`--glow`). All corners are rounded. Fonts: Syne (display, geometric), DM Sans (UI), JetBrains Mono (specs).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v3** (do NOT upgrade to v4 — it breaks the JS config in `tailwind.config.ts`)
- **next-intl** (i18n PT/EN), **next-themes** (dark mode default), **next-mdx-remote** + **gray-matter** (journal)
- **Framer Motion v11**, **Lucide** icons
- Fonts via `next/font/google`: Syne (display), DM Sans (UI), JetBrains Mono (specs)

## Commands

```bash
npm run dev      # dev server → http://localhost:3000 (redirects to /pt)
npm run build    # production build (SSG)
npm run lint
npx tsc --noEmit # type-check
```

**Windows gotcha:** the dev server locks `.next`. Stop all `node` processes (and ideally delete `.next`) before running `npm run build`, otherwise it throws `EPERM` on `.next/trace`.

## Architecture

- Routing is locale-prefixed: every page lives under `app/[locale]/` (`pt` default, `en`). There is no `app/layout.tsx` — `app/[locale]/layout.tsx` is the root layout.
- i18n config in `i18n/` (`routing.ts`, `request.ts`, `navigation.ts`) + `middleware.ts`. UI strings in `messages/{pt,en}.json`.
  - Use `Link`, `useRouter`, `usePathname` from `@/i18n/navigation` (NOT `next/link` / `next/navigation`) so locale is preserved.
  - Pages are `async`, `await params`, then call `setRequestLocale(locale)`. Use `getTranslations` in async components and `useTranslations` in sync server/client components.
- Design tokens are CSS vars in `app/globals.css` (dark default + `.light` override), surfaced to Tailwind as `bg-void`, `text-light`, `border-edge`, `text-dim`, `bg-spark`, `bg-volt`, `bg-glow`. Add new colors via vars, not hardcoded hex.
- The kit catalog (`lib/kits.ts`) defines 6 motion kits with metadata. Each kit has an `animationPreset` field that maps to an animation component in `components/animation-playground/`.
- The signature feature is `components/animation-playground/` (playground + easing-grid + stagger-cascade). The playground shows live Framer Motion animations controlled by speed/easing/scale/loop/color sliders.
- Journal posts are MDX in `content/journal/*.mdx` (frontmatter: title/date/author/excerpt), read by `lib/journal.ts`, rendered with `next-mdx-remote/rsc` and `components/ui/mdx.tsx`.

## Conventions

- Brand name lives only in `lib/brand.ts` — rename there to rebrand.
- Default theme is **dark** (`defaultTheme="dark"` in ThemeProvider). CSS vars in `:root` are the dark values; `.light` class overrides to light values.
- Reuse `components/ui/*` (logo-mark, pill-button, theme-toggle, locale-switch) and `lib/motion.ts` easings.
- Floating nav: rounded pill card (top-left, logo + menu trigger) + rounded pill (top-right, locale + theme).
- Color accents: `spark` (#00e5a0 teal) = primary, `volt` (#a855f7 purple) = secondary, `glow` (#f59e0b amber) = tertiary.
- `next/og` (Satori): every `<div>` with more than one child MUST have `display: flex`.

## Routes

- `/` → home
- `/kits` → all 6 motion kits
- `/kits/[slug]` → kit detail with full playground + stagger cascade + easing grid
- `/studio` → about + team
- `/work` → selected projects
- `/journal` → MDX articles
- `/journal/[slug]` → single article

## Deploy

Vercel, zero config (Next.js auto-detected). After deploy, update the origin in `app/sitemap.ts` and `app/robots.ts` and `metadataBase` in `app/[locale]/layout.tsx`.
