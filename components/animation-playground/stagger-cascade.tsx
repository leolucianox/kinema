"use client";

import { motion } from "framer-motion";
import type { AnimationPreset, Accent } from "@/lib/kits";

const DELAYS = [0, 0.08, 0.16, 0.24, 0.32, 0.40];

const COLOR_MAP: Record<Accent, string> = {
  spark: "#00e5a0",
  volt: "#a855f7",
  glow: "#f59e0b",
};

// Shows the same animation element 6 times with increasing stagger delay,
// making the cascade timing visible.
export function StaggerCascade({
  preset,
  accent,
}: {
  preset: AnimationPreset;
  accent: Accent;
}) {
  const color = COLOR_MAP[accent];

  return (
    <div className="divide-y divide-edge border-y border-edge">
      {DELAYS.map((delay, i) => (
        <div key={delay} className="flex items-center gap-6 px-global py-4">
          <span className="w-16 shrink-0 font-mono text-xs text-dim">
            +{delay.toFixed(2)}s
          </span>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.05,
              ease: [0.87, 0, 0.13, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="h-6 rounded-full"
            style={{
              width: `${80 + i * 20}px`,
              backgroundColor: color,
              opacity: 0.4 + i * 0.12,
            }}
          />
        </div>
      ))}
    </div>
  );
}
