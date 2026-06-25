import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { AnimationPlayground } from "@/components/animation-playground/animation-playground";
import { EasingGrid } from "@/components/animation-playground/easing-grid";
import { StaggerCascade } from "@/components/animation-playground/stagger-cascade";
import { kits, getKit } from "@/lib/kits";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    kits.map((k) => ({ locale, slug: k.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kit = getKit(slug);
  return { title: kit?.name ?? "Kit" };
}

export default async function KitPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const kit = getKit(slug);
  if (!kit) notFound();

  const t = await getTranslations("kit");

  const meta = [
    { label: t("director"), value: kit.director },
    { label: t("released"), value: String(kit.year) },
    { label: t("presets"), value: String(kit.presets) },
    { label: t("formats"), value: kit.formats.join(" · ") },
  ];

  return (
    <main className="w-full pt-nav">
      {/* Header */}
      <header className="px-global py-16">
        <Link
          href="/kits"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-dim transition-colors hover:text-light"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          {t("back")}
        </Link>

        <h1 className="mt-8 font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.9] tracking-tightest text-light">
          {kit.name}
        </h1>

        <div className="mt-6 flex flex-wrap items-start gap-x-12 gap-y-4">
          <p className="max-w-md text-sm leading-relaxed tracking-body text-dim">
            {kit.description}
          </p>
          <dl className="grid grid-cols-2 gap-x-10 gap-y-3 font-mono text-xs sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="uppercase tracking-wide text-dim">{m.label}</dt>
                <dd className="mt-1 text-light">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Animation Playground */}
      <section aria-label={t("playgroundTitle")}>
        <h2 className="px-global pb-4 font-mono text-xs uppercase tracking-[0.2em] text-dim">
          {t("playgroundTitle")}
        </h2>
        <AnimationPlayground kit={kit} />
      </section>

      {/* Stagger Cascade */}
      <section className="mt-24">
        <h2 className="px-global pb-4 font-mono text-xs uppercase tracking-[0.2em] text-dim">
          {t("cascadeTitle")}
        </h2>
        <StaggerCascade preset={kit.animationPreset} accent={kit.accent} />
      </section>

      {/* Easing Grid */}
      <section className="mt-24 px-global pb-24">
        <h2 className="pb-4 font-mono text-xs uppercase tracking-[0.2em] text-dim">
          {t("easingGridTitle")}
        </h2>
        <EasingGrid />
      </section>
    </main>
  );
}
