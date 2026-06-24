"use client";

import { motion } from "framer-motion";

// Type-in-use marquee built from typographic tiles (no external images). Tiles
// repeat 4× so a travelled half always exceeds the viewport — seamless loop.
const tiles = [
  { word: "Aa", bg: "bg-vermilion", fg: "text-paper", cssVar: "var(--font-fraunces)" },
  { word: "Tipos", bg: "bg-ink", fg: "text-paper", cssVar: "var(--font-grotesk)" },
  { word: "{ }", bg: "bg-proof-yellow", fg: "text-ink", cssVar: "var(--font-mono)" },
  { word: "Grafema", bg: "bg-proof-blue", fg: "text-paper", cssVar: "var(--font-fraunces)" },
  { word: "Rg", bg: "bg-paper", fg: "text-ink", cssVar: "var(--font-fraunces)", border: true },
  { word: "&", bg: "bg-vermilion", fg: "text-paper", cssVar: "var(--font-grotesk)" },
] as const;

const loop = [...tiles, ...tiles, ...tiles, ...tiles];

export function InUseMarquee() {
  return (
    <section className="overflow-hidden border-t border-grid py-20">
      <h2 className="px-global text-center font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-tightest text-ink">
        100% tipos da casa. 0% genérico.
        <br />
        Veja a coleção viva.
      </h2>

      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {loop.map((tile, i) => (
            <div
              key={i}
              className={`mr-3 flex h-56 w-56 shrink-0 items-center justify-center ${tile.bg} ${tile.fg} ${
                "border" in tile && tile.border ? "border border-grid" : ""
              }`}
            >
              <span
                className="text-6xl leading-none"
                style={{ fontFamily: tile.cssVar }}
                aria-hidden="true"
              >
                {tile.word}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
