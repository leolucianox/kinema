import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark, :root:not(.light)"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        light: "var(--light)",
        surface: "var(--surface)",
        edge: "var(--edge)",
        dim: "var(--dim)",
        spark: "var(--spark)",
        volt: "var(--volt)",
        glow: "var(--glow)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Arial", "sans-serif"],
        display: ["var(--font-syne)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      letterSpacing: {
        tightest: "-0.03em",
        body: "-0.01em",
      },
      spacing: {
        global: "1.875rem",
        rect: "2.5rem",
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
