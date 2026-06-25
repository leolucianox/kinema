import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { CollectionGrid } from "./collection-grid";
import { kits } from "@/lib/kits";

const FEATURED = ["identity-motion", "editorial", "ui-micro"];

export function CollectionHome() {
  const t = useTranslations("home");
  const items = kits.filter((k) => FEATURED.includes(k.slug));

  return (
    <section className="border-t border-edge">
      <div className="flex flex-wrap items-end justify-between gap-4 px-global pb-8 pt-24">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
            {t("kitsKicker")}
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tightest text-light">
            {t("kitsTitle")}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed tracking-body text-dim">
            {t("kitsSubtitle")}
          </p>
        </div>
        <Link
          href="/kits"
          className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-light transition-colors hover:text-spark"
        >
          {t("kitsView")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <CollectionGrid items={items} />
    </section>
  );
}
