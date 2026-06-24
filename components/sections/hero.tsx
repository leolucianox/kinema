"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckerGrid } from "@/components/ui/checker-grid";
import { PillButton } from "@/components/ui/pill-button";
import { EASE_EXPO } from "@/lib/motion";

// Hero as thesis: a giant specimen line whose weight grows in on load, framed
// by the registration grid (left) and a vermilion band + diagonal (right).
export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative">
      <div className="grid min-h-[92vh] grid-cols-1 border-b border-grid md:grid-cols-[1fr_2.4fr_1fr]">
        {/* Left — registration grid */}
        <div className="relative hidden border-r border-grid md:block">
          <CheckerGrid
            cols={5}
            rows={9}
            filled={[
              { col: 3, row: 2, color: "proof-blue" },
              { col: 2, row: 5, color: "vermilion" },
              { col: 4, row: 7, color: "proof-yellow" },
            ]}
            className="absolute inset-0"
          />
        </div>

        {/* Center — kicker + animated display headline + body + CTA */}
        <div className="flex flex-col justify-center gap-8 px-global py-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            {t("heroKicker")}
          </motion.span>

          <motion.h1
            initial={{ fontWeight: 100, opacity: 0 }}
            animate={{ fontWeight: 500, opacity: 1 }}
            transition={{ duration: 1.3, ease: EASE_EXPO }}
            className="font-display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.92] tracking-tightest text-ink"
          >
            {t("heroLine1")}
            <br />
            <span className="text-vermilion">{t("heroLine2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_EXPO }}
            className="max-w-md text-base leading-relaxed tracking-body text-muted"
          >
            {t("heroBody")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE_EXPO }}
          >
            <Link href="/typefaces">
              <PillButton variant="solid">{t("heroCta")}</PillButton>
            </Link>
          </motion.div>
        </div>

        {/* Right — diagonal + vermilion band */}
        <div className="relative hidden border-l border-grid md:block">
          <svg
            className="absolute inset-0 h-full w-full text-grid"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="100"
              x2="100"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="absolute inset-y-0 right-0 w-8 bg-vermilion" />
        </div>
      </div>
    </section>
  );
}
