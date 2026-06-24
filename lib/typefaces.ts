// Fictitious foundry catalog. Each entry maps an invented family name to a real
// (free) Google font via its CSS variable, plus specimen metadata used by the
// catalog cards and the live tester.

export type Accent = "vermilion" | "proof-blue" | "proof-yellow";

export interface Typeface {
  slug: string;
  name: string;
  /** CSS variable that carries the actual font-family. */
  cssVar: string;
  category: string;
  designer: string;
  year: number;
  styles: number;
  formats: string[];
  variable: boolean;
  wght: { min: number; max: number; default: number };
  accent: Accent;
  /** Short word/phrase shown big on the catalog card. */
  display: string;
  description: string;
}

export const typefaces: Typeface[] = [
  {
    slug: "grafema-display",
    name: "Grafema Display",
    cssVar: "var(--font-fraunces)",
    category: "Serif · Display",
    designer: "Iara Fontes",
    year: 2021,
    styles: 18,
    formats: ["WOFF2", "OTF", "Variable"],
    variable: true,
    wght: { min: 100, max: 900, default: 460 },
    accent: "vermilion",
    display: "Aa",
    description:
      "Um serif de alto contraste com optical sizing. Brilha em manchetes e capas, mantém a voz em corpo de texto.",
  },
  {
    slug: "grafema-grotesk",
    name: "Grafema Grotesk",
    cssVar: "var(--font-grotesk)",
    category: "Sans · Grotesque",
    designer: "Téo Marília",
    year: 2022,
    styles: 12,
    formats: ["WOFF2", "OTF", "Variable"],
    variable: true,
    wght: { min: 300, max: 700, default: 400 },
    accent: "proof-blue",
    display: "Gg",
    description:
      "Uma grotesca neutra de espinha firme, desenhada para interfaces e sinalização. Métricas amplas, ritmo estável.",
  },
  {
    slug: "grafema-text",
    name: "Grafema Text",
    cssVar: "var(--tf-text)",
    category: "Serif · Texto",
    designer: "Iara Fontes",
    year: 2023,
    styles: 14,
    formats: ["WOFF2", "OTF", "Variable"],
    variable: true,
    wght: { min: 200, max: 800, default: 400 },
    accent: "proof-yellow",
    display: "Tt",
    description:
      "Serif de leitura para editoriais longos. Contraste moderado e altura-x generosa para conforto em tela.",
  },
  {
    slug: "grafema-sans",
    name: "Grafema Sans",
    cssVar: "var(--tf-sans)",
    category: "Sans · Humanista",
    designer: "Noé Albuquerque",
    year: 2023,
    styles: 16,
    formats: ["WOFF2", "OTF", "Variable"],
    variable: true,
    wght: { min: 100, max: 900, default: 400 },
    accent: "vermilion",
    display: "Ss",
    description:
      "Sans humanista com calor e legibilidade. Do peso fino ao black, conversa bem com qualquer serif da coleção.",
  },
  {
    slug: "grafema-bricolage",
    name: "Grafema Bricolage",
    cssVar: "var(--tf-bricolage)",
    category: "Sans · Display",
    designer: "Téo Marília",
    year: 2024,
    styles: 8,
    formats: ["WOFF2", "OTF", "Variable"],
    variable: true,
    wght: { min: 200, max: 800, default: 500 },
    accent: "proof-blue",
    display: "Bb",
    description:
      "Uma display expressiva e levemente irregular. Feita para pôsteres, capas e momentos de voz alta.",
  },
  {
    slug: "grafema-mono",
    name: "Grafema Mono",
    cssVar: "var(--font-mono)",
    category: "Mono · Código",
    designer: "Noé Albuquerque",
    year: 2022,
    styles: 10,
    formats: ["WOFF2", "OTF", "Variable"],
    variable: true,
    wght: { min: 100, max: 800, default: 400 },
    accent: "proof-yellow",
    display: "{ }",
    description:
      "Monoespaçada para código e dados, com formas abertas e ligaduras opcionais para o terminal.",
  },
];

export function getTypeface(slug: string): Typeface | undefined {
  return typefaces.find((t) => t.slug === slug);
}
