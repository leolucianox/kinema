"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Switches between the two locales while preserving the current path.
export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  return (
    <div
      className="flex h-9 items-center border border-grid bg-paper font-mono text-xs"
      aria-label={t("language")}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={active ? "true" : undefined}
            className={`h-full px-2.5 uppercase transition-colors ${
              active ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
