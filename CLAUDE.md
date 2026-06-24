# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**Grafema** — a fictional independent **type foundry** website, built as a frontend / design-engineering portfolio piece. All content, typeface names and people are fictitious. The signature feature is a **live type tester**.

The visual system is "Swiss / Bauhaus editorial": a registration/baseline grid, CMYK registration-mark color blocks, a high-contrast display serif, a grotesque for UI and a mono for specs.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3** (do NOT upgrade to v4 — it breaks the JS config in `tailwind.config.ts`)
- **next-intl** (i18n PT/EN), **next-themes** (dark mode), **next-mdx-remote** + **gray-matter** (journal)
- **Framer Motion** (keep on v11), **Lucide** icons
- Fonts via `next/font/google`: Fraunces (display, variable), Space Grotesk (UI), JetBrains Mono (specs)

## Commands

```bash
npm run dev      # dev server → http://localhost:3000 (redirects to /pt)
npm run build    # production build (SSG)
npm run lint
npx tsc --noEmit # type-check
```

**Windows gotcha:** the dev server locks `.next`. Stop all `node` processes (and ideally delete `.next`) before running `npm run build`, otherwise it throws `EPERM` on `.next/trace`.

## Architecture

- Routing is locale-prefixed: every page lives under `app/[locale]/` (`pt` default, `en`). There is no `app/layout.tsx` — `app/[locale]/layout.tsx` is the root layout (renders `<html>`, fonts, providers, nav, footer).
- i18n config in `i18n/` (`routing.ts`, `request.ts`, `navigation.ts`) + `middleware.ts`. UI strings in `messages/{pt,en}.json`.
  - Use `Link`, `useRouter`, `usePathname` from `@/i18n/navigation` (NOT `next/link` / `next/navigation`) so locale is preserved.
  - Pages are `async`, `await params`, then call `setRequestLocale(locale)`. Use `getTranslations` in async components and `useTranslations` in sync server/client components.
- Design tokens are CSS vars in `app/globals.css` (light + `.dark`), surfaced to Tailwind as `bg-paper`, `text-ink`, `border-grid`, `bg-vermilion`, `bg-proof-blue`, `bg-proof-yellow`. Add new colors via vars, not hardcoded hex.
- The catalog (`lib/typefaces.ts`) maps fictional family names → real Google fonts via a CSS variable. Core faces (Fraunces/Grotesk/Mono) load globally; extra catalog faces load only on `/typefaces` routes via `lib/catalog-fonts.ts` (`catalogFontVars`) to keep other pages light.
- The signature feature is `components/type-tester/` (tester + glyph grid + waterfall). The tester specimen is an **uncontrolled `contentEditable`** surface; controls drive inline style only.
- Journal posts are MDX in `content/journal/*.mdx` (frontmatter: title/date/author/excerpt), read by `lib/journal.ts`, rendered with `next-mdx-remote/rsc` and `components/ui/mdx.tsx`.

## Conventions

- Brand name lives only in `lib/brand.ts` — rename there to rebrand.
- Reuse `components/ui/*` (logo, pill-button, checker-grid, theme-toggle, locale-switch) and `lib/motion.ts` easings.
- Floating nav: brand card (top-left, also the menu trigger) + theme/locale controls (top-right, `md:` only; on mobile they live inside the menu overlay).
- `next/og` (Satori): every `<div>` with more than one child MUST have `display: flex`.

## Deploy

Vercel, zero config (Next.js auto-detected). After deploy, update the origin in `app/sitemap.ts` and `app/robots.ts` and `metadataBase` in `app/[locale]/layout.tsx`.
