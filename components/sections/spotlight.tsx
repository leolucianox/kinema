import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PillButton } from "@/components/ui/pill-button";
import { getTypeface } from "@/lib/typefaces";

// A single featured family shown large. Uses a core face so the homepage stays
// light on font payload.
export function Spotlight() {
  const t = useTranslations("home");
  const tf = getTypeface("grafema-display")!;

  return (
    <section className="border-t border-grid">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 border-grid px-global py-16 md:border-r">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t("spotlightKicker")}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] tracking-tightest text-ink">
              {tf.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed tracking-body text-muted">
              {tf.description}
            </p>
          </div>
          <Link href={`/typefaces/${tf.slug}`} className="self-start">
            <PillButton variant="outline">{t("spotlightCta")}</PillButton>
          </Link>
        </div>

        <div className="flex items-center justify-center overflow-hidden px-global py-16">
          <span
            className="text-[clamp(7rem,20vw,16rem)] leading-none text-vermilion"
            style={{ fontFamily: tf.cssVar }}
            aria-hidden="true"
          >
            Aa
          </span>
        </div>
      </div>
    </section>
  );
}
