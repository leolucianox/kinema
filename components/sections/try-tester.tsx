import { useTranslations } from "next-intl";
import { TypeTester } from "@/components/type-tester/type-tester";
import { getTypeface } from "@/lib/typefaces";

// Homepage embed of the signature tester, compact, on a core face.
export function TryTester() {
  const t = useTranslations("home");
  const tf = getTypeface("grafema-display")!;

  return (
    <section className="border-t border-grid">
      <div className="px-global pb-2 pt-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t("tryKicker")}
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tightest text-ink">
          {t("tryTitle")}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed tracking-body text-muted">
          {t("tryBody")}
        </p>
      </div>

      <div className="mt-8">
        <TypeTester typeface={tf} defaultText={t("tryPlaceholder")} compact />
      </div>
    </section>
  );
}
