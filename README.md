# Grafema — Type Foundry

Site fictício de uma **fundição tipográfica**, construído como peça de portfólio de frontend / design engineering. A fundação visual nasceu de um clone de landing page e foi transformada num produto próprio, multi-página, com uma feature interativa de destaque.

> Fictional **type foundry** website, built as a frontend / design-engineering portfolio piece. Originally a landing-page clone, rebranded into an original multi-page product with a signature interactive feature.

## Destaques / Highlights

- **Testador de fontes ao vivo** (peça central): texto editável + controles de tamanho, peso (eixo variável), entreletra, entrelinha, alinhamento, caixa e ligaduras, com glyph grid e waterfall.
- **Multi-página**: Home, Catálogo, Specimen, Fundição, Diário (Journal) e Em uso.
- **Dark mode** com tokens via CSS vars (`next-themes`, sem flash).
- **i18n PT/EN** com `next-intl` (`app/[locale]`, middleware, troca de idioma preservando a rota).
- **Diário em MDX** (`next-mdx-remote` + `gray-matter`, frontmatter).
- **SEO**: Metadata API, OG dinâmico (`next/og`), `sitemap.ts`, `robots.ts`.
- **Sistema de design** reutilizável: grade de registro, marcas CMYK, serif display + grotesca + mono.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · next-intl · next-themes · next-mdx-remote · Lucide.

Tipografia (Google Fonts): **Fraunces** (display, variável), **Space Grotesk** (UI), **JetBrains Mono** (specs); famílias do catálogo carregadas sob demanda.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000 → redireciona para /pt
npm run build    # build de produção (pare o dev server antes no Windows)
```

## Estrutura

```
app/[locale]/        layout (fontes + providers) + páginas (home, typefaces, foundry, journal, in-use)
components/
  type-tester/       testador ao vivo, glyph grid, waterfall
  sections/          seções da home + grid do catálogo
  layout/            navbar flutuante, menu overlay, footer
  ui/                logo, botão, grade, theme-toggle, locale-switch, MDX
i18n/                routing, request, navigation (next-intl)
lib/                 brand, typefaces (catálogo), catalog-fonts, journal, motion
messages/            pt.json, en.json
content/journal/     posts MDX
```

## Deploy

Pronto para a **Vercel** (zero config). Após conectar o repositório, ajuste o domínio em `app/sitemap.ts` / `app/robots.ts`.

---

*Conteúdo, nomes e tipos do catálogo são fictícios.*
