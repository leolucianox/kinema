import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { kits } from "@/lib/kits";
import { CollectionGrid } from "@/components/sections/collection-grid";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("kits");
  return { title: t("title") };
}

export default async function KitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("kits");

  return (
    <main className="w-full pt-nav">
      <header className="px-global py-24">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-light">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-body text-dim">
          {t("subtitle")}
        </p>
      </header>

      <CollectionGrid items={kits} />
    </main>
  );
}
