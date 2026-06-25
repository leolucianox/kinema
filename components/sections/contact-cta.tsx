import { useTranslations } from "next-intl";
import { PillButton } from "@/components/ui/pill-button";

export function ContactCta() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden border-t border-edge">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="h-[600px] w-[600px] rounded-full bg-spark/5 blur-3xl" />
        <div className="absolute h-[400px] w-[400px] rounded-full bg-volt/5 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-8 px-global py-36 text-center">
        <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.0] tracking-tightest text-light">
          {t("ctaTitle1")}
          <br />
          <span className="text-spark">{t("ctaTitle2")}</span>
        </h2>
        <p className="max-w-sm text-sm leading-relaxed tracking-body text-dim">
          {t("ctaBody")}
        </p>
        <PillButton variant="accent" className="px-10 py-4">
          {t("ctaButton")}
        </PillButton>
      </div>
    </section>
  );
}
