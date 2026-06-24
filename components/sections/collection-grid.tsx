import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Typeface, Accent } from "@/lib/typefaces";

const accentText: Record<Accent, string> = {
  vermilion: "text-vermilion",
  "proof-blue": "text-proof-blue",
  "proof-yellow": "text-proof-yellow",
};

// Reusable grid of typeface cards. Each card previews the family in its own
// font. Used on the homepage (core faces) and the full catalog page.
export function CollectionGrid({ items }: { items: Typeface[] }) {
  const t = useTranslations("typefaces");

  return (
    <div className="grid grid-cols-1 border-t border-grid sm:grid-cols-2 lg:grid-cols-3">
      {items.map((tf) => (
        <Link
          key={tf.slug}
          href={`/typefaces/${tf.slug}`}
          className="group relative flex aspect-[4/5] flex-col justify-between border-b border-r border-grid p-7 transition-colors hover:bg-ink/[0.02]"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs uppercase tracking-wide text-muted">
              {tf.category}
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div
            className={`text-[clamp(4rem,9vw,7rem)] leading-none ${accentText[tf.accent]}`}
            style={{ fontFamily: tf.cssVar }}
            aria-hidden="true"
          >
            {tf.display}
          </div>

          <div className="flex items-end justify-between">
            <h3
              className="font-display text-2xl tracking-tightest text-ink"
              style={{ fontFamily: tf.cssVar }}
            >
              {tf.name}
            </h3>
            <span className="font-mono text-xs text-muted">
              {t("styles", { count: tf.styles })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
