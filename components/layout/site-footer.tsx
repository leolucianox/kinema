import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/ui/logo-mark";
import { PillButton } from "@/components/ui/pill-button";
import { brand } from "@/lib/brand";

const columns = [
  {
    titleKey: "columnsExplore",
    links: [
      { label: "Kits", href: "/kits" },
      { label: "Work", href: "/work" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    titleKey: "columnsStudio",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Team", href: "/studio" },
      { label: "Contact", href: "/studio" },
    ],
  },
  {
    titleKey: "columnsLegal",
    links: [
      { label: "License", href: "/studio" },
      { label: "Terms", href: "/studio" },
      { label: "Privacy", href: "/studio" },
    ],
  },
] as const;

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-edge">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
        {/* Brand + newsletter */}
        <div className="flex flex-col justify-between gap-12 border-edge px-global py-14 md:border-r">
          <div>
            <LogoMark />
            <p className="mt-4 max-w-xs text-sm tracking-body text-dim">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold tracking-tightest text-light">
              {t("newsletterTitle")}
            </h3>
            <form className="mt-4 flex max-w-md items-stretch gap-2" action="#">
              <input
                type="email"
                required
                placeholder={t("newsletterPlaceholder")}
                aria-label={t("newsletterTitle")}
                className="min-w-0 flex-1 rounded-full border border-edge bg-transparent px-4 py-3 text-sm tracking-body text-light outline-none placeholder:text-dim focus:border-spark"
              />
              <PillButton type="submit" variant="accent">
                {t("subscribe")}
              </PillButton>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="px-global py-14">
          <div className="grid grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.titleKey}>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-dim">
                  {t(col.titleKey)}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={`${link.label}-${i}`}>
                      <Link
                        href={link.href}
                        className="text-sm tracking-body text-light transition-colors hover:text-spark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-edge px-global py-6 font-mono text-xs text-dim">
        <span>
          &copy; {new Date().getFullYear()} {brand.name}. {t("rights")}
        </span>
        <span className="text-spark">{brand.domain}</span>
      </div>
    </footer>
  );
}
