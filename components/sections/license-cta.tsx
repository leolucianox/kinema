import { useTranslations } from "next-intl";
import { PillButton } from "@/components/ui/pill-button";
import { CheckerGrid } from "@/components/ui/checker-grid";

// Inverted hero motif: band + diagonal on the LEFT, registration grid on the
// RIGHT, CTA centred.
export function LicenseCta() {
  const t = useTranslations("home");

  return (
    <section className="relative grid grid-cols-1 border-t border-grid md:grid-cols-[1fr_2fr_1fr]">
      {/* Left — vermilion band + diagonal */}
      <div className="relative hidden border-r border-grid md:block">
        <div className="absolute inset-y-0 left-0 w-6 bg-vermilion" />
        <svg
          className="absolute inset-0 h-full w-full text-grid"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <line
            x1="14"
            y1="0"
            x2="100"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Center — headline + CTA */}
      <div className="flex flex-col items-center justify-center gap-8 px-global py-28 text-center">
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.0] tracking-tightest text-ink">
          {t("ctaTitle1")}
          <br />
          {t("ctaTitle2")}
        </h2>
        <p className="max-w-sm text-sm leading-relaxed tracking-body text-muted">
          {t("ctaBody")}
        </p>
        <PillButton variant="accent" className="px-10 py-4">
          {t("ctaButton")}
        </PillButton>
      </div>

      {/* Right — registration grid + ink band */}
      <div className="relative hidden border-l border-grid md:block">
        <CheckerGrid
          cols={6}
          rows={8}
          filled={[
            { col: 2, row: 2, color: "proof-yellow" },
            { col: 3, row: 2, color: "proof-yellow" },
            { col: 3, row: 5, color: "vermilion" },
            { col: 5, row: 6, color: "proof-blue" },
          ]}
          className="absolute inset-0"
        />
      </div>
    </section>
  );
}
