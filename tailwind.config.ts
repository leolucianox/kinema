import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // tokens — resolve to CSS vars so dark mode swaps automatically
        paper: "var(--paper)",
        ink: "var(--ink)",
        grid: "var(--grid)",
        muted: "var(--muted)",
        vermilion: "var(--vermilion)",
        "proof-blue": "var(--proof-blue)",
        "proof-yellow": "var(--proof-yellow)",
      },
      fontFamily: {
        // grotesque UI (≈ Space Grotesk), display serif (Fraunces, variable),
        // and mono for specimen specs (JetBrains Mono)
        sans: ["var(--font-grotesk)", "Arial", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        body: "-0.01em",
      },
      spacing: {
        global: "1.875rem", // 30px padding-global
        rect: "2.5rem", // 40px grid square
        nav: "69px",
      },
      maxWidth: {
        container: "1660px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.87, 0, 0.13, 1)",
        smooth: "cubic-bezier(0.76, 0, 0.24, 1)",
        ease: "cubic-bezier(0.84, 0, 0.16, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
