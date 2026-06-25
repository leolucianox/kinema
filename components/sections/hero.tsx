"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PillButton } from "@/components/ui/pill-button";
import { EASE_EXPO } from "@/lib/motion";

// Full-viewport centered hero with animated orbs in the background.
export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-edge">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-spark/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-volt/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-glow/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-global py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-edge bg-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-dim backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-spark" />
          {t("heroKicker")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE_EXPO }}
          className="max-w-4xl font-display text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.92] tracking-tightest text-light"
        >
          {t("heroLine1")}
          <br />
          <span className="text-spark">{t("heroLine2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_EXPO }}
          className="mt-8 max-w-md text-base leading-relaxed tracking-body text-dim"
        >
          {t("heroBody")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE_EXPO }}
          className="mt-10"
        >
          <Link href="/kits">
            <PillButton variant="accent">{t("heroCta")}</PillButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
