import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Kit, Accent } from "@/lib/kits";

const accentText: Record<Accent, string> = {
  spark: "text-spark",
  volt: "text-volt",
  glow: "text-glow",
};

const accentBg: Record<Accent, string> = {
  spark: "bg-spark/10",
  volt: "bg-volt/10",
  glow: "bg-glow/10",
};

export function CollectionGrid({ items }: { items: Kit[] }) {
  const t = useTranslations("kits");

  return (
    <div className="grid grid-cols-1 border-t border-edge sm:grid-cols-2 lg:grid-cols-3">
      {items.map((kit) => (
        <Link
          key={kit.slug}
          href={`/kits/${kit.slug}`}
          className="group relative flex aspect-[4/5] flex-col justify-between rounded-none border-b border-r border-edge p-7 transition-colors hover:bg-light/[0.02]"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs uppercase tracking-wide text-dim">
              {kit.category}
            </span>
            <ArrowUpRight className="h-5 w-5 text-dim opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div
            className={`flex h-24 w-24 items-center justify-center rounded-2xl text-5xl font-bold ${accentBg[kit.accent]} ${accentText[kit.accent]}`}
            aria-hidden="true"
          >
            {kit.display}
          </div>

          <div className="flex items-end justify-between">
            <h3 className="font-display text-2xl font-bold tracking-tightest text-light">
              {kit.name}
            </h3>
            <span className="font-mono text-xs text-dim">
              {t("presets", { count: kit.presets })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
