import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { CollectionGrid } from "./collection-grid";
import { typefaces } from "@/lib/typefaces";

// Homepage collection teaser — only the core faces (already loaded globally),
// with a link out to the full catalog.
const CORE = ["grafema-display", "grafema-grotesk", "grafema-mono"];

export function CollectionHome() {
  const t = useTranslations("typefaces");
  const items = typefaces.filter((tf) => CORE.includes(tf.slug));

  return (
    <section className="border-t border-grid">
      <div className="flex flex-wrap items-end justify-between gap-4 px-global pb-8 pt-24">
        <div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tightest text-ink">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed tracking-body text-muted">
            {t("subtitle")}
          </p>
        </div>
        <Link
          href="/typefaces"
          className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:text-vermilion"
        >
          {t("view")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <CollectionGrid items={items} />
    </section>
  );
}
