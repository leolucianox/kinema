import {
  Newsreader,
  Hanken_Grotesk,
  Bricolage_Grotesque,
} from "next/font/google";

// Extra catalog families, loaded only on routes that import this module
// (the catalog + specimen pages) so the rest of the site stays light.
// Fraunces / Space Grotesk / JetBrains Mono are already loaded globally.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--tf-text",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--tf-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--tf-bricolage",
  display: "swap",
});

// Apply on a wrapping element to expose the --tf-* variables to its subtree.
export const catalogFontVars = `${newsreader.variable} ${hanken.variable} ${bricolage.variable}`;
