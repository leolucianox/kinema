import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PillButton } from "@/components/ui/pill-button";
import { getKit } from "@/lib/kits";

export function Spotlight() {
  const t = useTranslations("home");
  const kit = getKit("editorial")!;

  return (
    <section className="border-t border-edge">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 border-edge px-global py-16 md:border-r">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
              {t("spotlightKicker")}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.02] tracking-tightest text-light">
              {kit.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed tracking-body text-dim">
              {kit.description}
            </p>
          </div>
          <Link href={`/kits/${kit.slug}`} className="self-start">
            <PillButton variant="outline">{t("spotlightCta")}</PillButton>
          </Link>
        </div>

        {/* Right — large symbol with gradient glow */}
        <div className="relative flex items-center justify-center overflow-hidden px-global py-16">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-spark/10 blur-3xl" />
          </div>
          <span
            className="relative text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-spark"
            aria-hidden="true"
          >
            {kit.display}
          </span>
        </div>
      </div>
    </section>
  );
}
