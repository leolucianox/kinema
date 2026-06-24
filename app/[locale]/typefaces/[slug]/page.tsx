import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TypeTester } from "@/components/type-tester/type-tester";
import { Waterfall } from "@/components/type-tester/waterfall";
import { GlyphGrid } from "@/components/type-tester/glyph-grid";
import { typefaces, getTypeface } from "@/lib/typefaces";
import { catalogFontVars } from "@/lib/catalog-fonts";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    typefaces.map((tf) => ({ locale, slug: tf.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tf = getTypeface(slug);
  return { title: tf?.name ?? "Typeface" };
}

const DEFAULT_TEXT = "Tipos que carregam intenção.";

export default async function SpecimenPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tf = getTypeface(slug);
  if (!tf) notFound();

  const t = await getTranslations("specimen");

  const meta = [
    { label: t("designer"), value: tf.designer },
    { label: t("released"), value: String(tf.year) },
    { label: t("styles"), value: String(tf.styles) },
    { label: t("formats"), value: tf.formats.join(" · ") },
  ];

  return (
    <main className={`w-full pt-nav ${catalogFontVars}`}>
      {/* Header */}
      <header className="px-global py-16">
        <Link
          href="/typefaces"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          {t("back")}
        </Link>

        <h1
          className="mt-8 text-[clamp(3rem,14vw,11rem)] leading-[0.9] tracking-tightest text-ink"
          style={{ fontFamily: tf.cssVar }}
        >
          {tf.name}
        </h1>

        <div className="mt-6 flex flex-wrap items-start gap-x-12 gap-y-4">
          <p className="max-w-md text-sm leading-relaxed tracking-body text-muted">
            {tf.description}
          </p>
          <dl className="grid grid-cols-2 gap-x-10 gap-y-3 font-mono text-xs sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="uppercase tracking-wide text-muted">{m.label}</dt>
                <dd className="mt-1 text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Live tester — the signature feature */}
      <section aria-label={t("testerTitle")}>
        <TypeTester typeface={tf} defaultText={DEFAULT_TEXT} />
      </section>

      {/* Waterfall */}
      <section className="mt-24">
        <h2 className="px-global pb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t("waterfallTitle")}
        </h2>
        <Waterfall cssVar={tf.cssVar} text={DEFAULT_TEXT} />
      </section>

      {/* Glyph set */}
      <section className="mt-24 px-global pb-24">
        <h2 className="pb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t("glyphsTitle")}
        </h2>
        <GlyphGrid cssVar={tf.cssVar} />
      </section>
    </main>
  );
}
