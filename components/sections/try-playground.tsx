import { useTranslations } from "next-intl";
import { AnimationPlayground } from "@/components/animation-playground/animation-playground";
import { getKit } from "@/lib/kits";

export function TryPlayground() {
  const t = useTranslations("home");
  const kit = getKit("identity-motion")!;

  return (
    <section className="border-t border-edge">
      <div className="px-global pb-2 pt-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
          {t("playgroundKicker")}
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest text-light">
          {t("playgroundTitle")}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed tracking-body text-dim">
          {t("playgroundBody")}
        </p>
      </div>

      <div className="mt-8">
        <AnimationPlayground kit={kit} compact />
      </div>
    </section>
  );
}
