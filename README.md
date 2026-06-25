# Kinema — Motion Design Studio

Site fictício de um **estúdio de motion design**, construído como peça de portfólio de frontend / design engineering. Feature interativa central: Animation Playground com controles em tempo real via Framer Motion.

> Fictional **motion design studio** website built as a frontend / design-engineering portfolio piece. Core interactive feature: a live Animation Playground with real-time speed, easing, scale, and color controls.

## Destaques / Highlights

- **Animation Playground** (peça central): 6 animações ao vivo com controles de velocidade, easing (linear/expo/spring/bounce), escala, cor e loop.
- **Motion Kits**: catálogo de 6 kits (Identity Motion, Scroll Reveal, UI Micro, Editorial, Data Viz, Generative) com páginas de detalhe e specimens interativos.
- **Dark mode** como padrão, com tokens via CSS vars (`next-themes`, sem flash).
- **i18n PT/EN** com `next-intl` (`app/[locale]`, middleware, troca de idioma preservando a rota).
- **Diário em MDX** (`next-mdx-remote` + `gray-matter`, frontmatter).
- **SEO**: Metadata API, OG dinâmico (`next/og`), `sitemap.ts`, `robots.ts`.
- **Design System**: palette escura com accent teal (`--spark`), violet (`--volt`), amber (`--glow`). Fonte display: Syne. UI: DM Sans. Specs: JetBrains Mono.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v3 · Framer Motion v11 · next-intl · next-themes · next-mdx-remote · Lucide.

Tipografia (Google Fonts): **Syne** (display), **DM Sans** (UI), **JetBrains Mono** (specs).

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000 → redireciona para /pt
npm run build    # build de produção (pare o dev server antes no Windows)
```

## Estrutura

```
app/[locale]/             layout (fontes + providers) + páginas (home, kits, studio, work, journal)
components/
  animation-playground/   playground ao vivo, easing grid, stagger cascade
  sections/               seções da home + grid de kits
  layout/                 navbar flutuante, menu overlay, footer
  ui/                     logo, botão, theme-toggle, locale-switch, MDX
i18n/                     routing, request, navigation (next-intl)
lib/                      brand, kits (catálogo), journal, motion
messages/                 pt.json, en.json
content/journal/          posts MDX
```

## Deploy

Pronto para a **Vercel** (zero config). Após conectar o repositório, ajuste o domínio em `app/sitemap.ts`, `app/robots.ts` e `metadataBase` em `app/[locale]/layout.tsx`.

---

*Conteúdo, nomes e equipe são fictícios.*
