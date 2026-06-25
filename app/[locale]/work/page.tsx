import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { WorkMarquee } from "@/components/sections/work-marquee";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("work");
  return { title: t("title") };
}

const projects = [
  { name: "Nova Brand", category: "Brand Motion", year: 2024, accent: "text-spark", symbol: "→" },
  { name: "Orbit App", category: "UI Micro", year: 2024, accent: "text-volt", symbol: "○" },
  { name: "Flux Editorial", category: "Editorial", year: 2023, accent: "text-spark", symbol: "//" },
  { name: "Metric Dashboard", category: "Data Viz", year: 2024, accent: "text-volt", symbol: "%" },
  { name: "Pulse Identity", category: "Brand Motion", year: 2023, accent: "text-glow", symbol: "~" },
  { name: "Grid Scroll", category: "Scroll Reveal", year: 2024, accent: "text-glow", symbol: "↓" },
];

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");

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

      <div className="grid grid-cols-1 border-t border-edge sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group flex aspect-[4/3] flex-col justify-between border-b border-r border-edge p-8 transition-colors hover:bg-light/[0.02]"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-wide text-dim">{p.category}</span>
              <span className="font-mono text-xs text-dim">{p.year}</span>
            </div>
            <span className={`text-6xl font-bold ${p.accent}`} aria-hidden="true">{p.symbol}</span>
            <h2 className="font-display text-2xl font-bold tracking-tightest text-light">{p.name}</h2>
          </div>
        ))}
      </div>

      <WorkMarquee />
    </main>
  );
}
