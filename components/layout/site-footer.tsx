import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/ui/logo-mark";
import { PillButton } from "@/components/ui/pill-button";
import { CheckerGrid } from "@/components/ui/checker-grid";
import { brand } from "@/lib/brand";

const columns = [
  {
    titleKey: "columnsExplore",
    links: [
      { label: "Typefaces", href: "/typefaces" },
      { label: "In use", href: "/in-use" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    titleKey: "columnsFoundry",
    links: [
      { label: "About", href: "/foundry" },
      { label: "Designers", href: "/foundry" },
      { label: "Contact", href: "/foundry" },
    ],
  },
  {
    titleKey: "columnsLegal",
    links: [
      { label: "License", href: "/foundry" },
      { label: "Terms", href: "/foundry" },
      { label: "Privacy", href: "/foundry" },
    ],
  },
] as const;

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-grid">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
        {/* Brand + newsletter */}
        <div className="flex flex-col justify-between gap-12 border-grid px-global py-14 md:border-r">
          <div>
            <LogoMark withSquares />
            <p className="mt-4 max-w-xs text-sm tracking-body text-muted">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl tracking-tightest text-ink">
              {t("newsletterTitle")}
            </h3>
            <form
              className="mt-4 flex max-w-md items-stretch gap-2"
              action="#"
            >
              <input
                type="email"
                required
                placeholder={t("newsletterPlaceholder")}
                aria-label={t("newsletterTitle")}
                className="min-w-0 flex-1 border border-grid bg-transparent px-4 py-3 text-sm tracking-body text-ink outline-none placeholder:text-muted focus:border-ink"
              />
              <PillButton type="submit" variant="solid">
                {t("subscribe")}
              </PillButton>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="relative px-global py-14">
          <CheckerGrid
            cols={6}
            rows={6}
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
          />
          <div className="relative grid grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.titleKey}>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
                  {t(col.titleKey)}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={`${link.label}-${i}`}>
                      <Link
                        href={link.href}
                        className="text-sm tracking-body text-ink transition-colors hover:text-vermilion"
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

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-grid px-global py-6 font-mono text-xs text-muted">
        <span>
          &copy; {new Date().getFullYear()} {brand.name}. {t("rights")}
        </span>
        <span className="text-vermilion">{brand.domain}</span>
      </div>
    </footer>
  );
}
