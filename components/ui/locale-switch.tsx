"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  return (
    <div
      className="flex h-8 items-center overflow-hidden rounded-full border border-edge font-mono text-xs"
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
            className={`h-full px-3 uppercase transition-colors ${
              active ? "bg-spark text-void" : "text-dim hover:text-light"
            }`}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
