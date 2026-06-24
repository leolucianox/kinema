import { useTranslations } from "next-intl";

// Foundry manifesto: an accent bar, a serif statement, and three principle rows
// where the "image" is a letterform tile set in a different core face.
const rows = [
  {
    labelKey: "principle1Label",
    bodyKey: "principle1Body",
    glyph: "Aa",
    cssVar: "var(--font-fraunces)",
    accent: "text-vermilion",
  },
  {
    labelKey: "principle2Label",
    bodyKey: "principle2Body",
    glyph: "Gg",
    cssVar: "var(--font-grotesk)",
    accent: "text-proof-blue",
  },
  {
    labelKey: "principle3Label",
    bodyKey: "principle3Body",
    glyph: "{ }",
    cssVar: "var(--font-mono)",
    accent: "text-ink",
  },
] as const;

export function Manifesto() {
  const t = useTranslations("home");

  return (
    <section className="px-global py-24">
      <div className="h-2.5 w-full max-w-[560px] bg-proof-blue" />
      <span className="mt-8 block font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {t("manifestoKicker")}
      </span>
      <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] tracking-tightest text-ink">
        {t("manifestoTitle1")}
        <br />
        {t("manifestoTitle2")}
      </h2>

      <div className="mt-16 border-t border-grid">
        {rows.map((row) => (
          <div
            key={row.labelKey}
            className="grid grid-cols-1 items-stretch gap-6 border-b border-grid md:grid-cols-[1fr_2fr_1.2fr] md:gap-10"
          >
            <h3 className="self-center py-8 text-base font-semibold tracking-body text-ink">
              {t(row.labelKey)}
            </h3>
            <p className="max-w-md self-center py-8 text-sm leading-relaxed tracking-body text-muted">
              {t(row.bodyKey)}
            </p>
            <div
              className={`flex min-h-[160px] items-center justify-center border-grid text-7xl md:border-l ${row.accent}`}
              style={{ fontFamily: row.cssVar }}
              aria-hidden="true"
            >
              {row.glyph}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
