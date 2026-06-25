"use client";

import { motion } from "framer-motion";

const tiles = [
  { word: "→", bg: "bg-spark", fg: "text-void" },
  { word: "Brand", bg: "bg-surface", fg: "text-light", border: true },
  { word: "○", bg: "bg-volt", fg: "text-void" },
  { word: "Motion", bg: "bg-surface", fg: "text-spark", border: true },
  { word: "~", bg: "bg-glow", fg: "text-void" },
  { word: "System", bg: "bg-surface", fg: "text-light", border: true },
  { word: "%", bg: "bg-spark", fg: "text-void" },
  { word: "Kinema", bg: "bg-surface", fg: "text-dim", border: true },
] as const;

const loop = [...tiles, ...tiles, ...tiles, ...tiles];

export function WorkMarquee() {
  return (
    <section className="overflow-hidden border-t border-edge py-20">
      <h2 className="px-global text-center font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-tightest text-light">
        Motion for the in-between.
        <br />
        <span className="text-spark">Every frame, intentional.</span>
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
              className={`mr-3 flex h-56 w-56 shrink-0 items-center justify-center rounded-2xl ${tile.bg} ${tile.fg} ${
                "border" in tile && tile.border ? "border border-edge" : ""
              }`}
            >
              <span className="text-5xl font-bold leading-none">{tile.word}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
