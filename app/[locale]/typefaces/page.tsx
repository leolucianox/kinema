import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CollectionGrid } from "@/components/sections/collection-grid";
import { typefaces } from "@/lib/typefaces";
import { catalogFontVars } from "@/lib/catalog-fonts";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("typefaces");
  return { title: t("title") };
}

export default async function TypefacesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("typefaces");

  return (
    <main className={`w-full pt-nav ${catalogFontVars}`}>
      <header className="px-global py-24">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tightest text-ink">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed tracking-body text-muted">
          {t("subtitle")}
        </p>
      </header>

      <CollectionGrid items={typefaces} />
    </main>
  );
}
