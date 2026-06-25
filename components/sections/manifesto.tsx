import { useTranslations } from "next-intl";

// Motion principles — three rows, each with a symbol, label, and body.
// Visual motif: large symbols in accent colors instead of letterforms.
const rows = [
  { labelKey: "principle1Label", bodyKey: "principle1Body", symbol: "→", color: "text-spark" },
  { labelKey: "principle2Label", bodyKey: "principle2Body", symbol: "○", color: "text-volt" },
  { labelKey: "principle3Label", bodyKey: "principle3Body", symbol: "~", color: "text-glow" },
] as const;

export function Manifesto() {
  const t = useTranslations("home");

  return (
    <section className="px-global py-24">
      <div className="h-0.5 w-full max-w-[560px] bg-gradient-to-r from-spark via-volt to-glow" />
      <span className="mt-8 block font-mono text-xs uppercase tracking-[0.2em] text-dim">
        {t("principlesKicker")}
      </span>
      <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-tightest text-light">
        {t("principlesTitle1")}
        <br />
        {t("principlesTitle2")}
      </h2>

      <div className="mt-16 border-t border-edge">
        {rows.map((row) => (
          <div
            key={row.labelKey}
            className="grid grid-cols-1 items-stretch gap-6 border-b border-edge md:grid-cols-[1fr_2fr_1.2fr] md:gap-10"
          >
            <h3 className="self-center py-8 text-base font-semibold tracking-body text-light">
              {t(row.labelKey)}
            </h3>
            <p className="max-w-md self-center py-8 text-sm leading-relaxed tracking-body text-dim">
              {t(row.bodyKey)}
            </p>
            <div
              className={`flex min-h-[160px] items-center justify-center border-edge text-8xl font-bold md:border-l ${row.color}`}
              aria-hidden="true"
            >
              {row.symbol}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
