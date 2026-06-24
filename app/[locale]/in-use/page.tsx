import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InUseMarquee } from "@/components/sections/in-use-marquee";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("nav");
  return { title: t("inUse") };
}

// Typographic poster tiles — no external images, all set in house faces.
const posters = [
  { word: "Manchete", bg: "bg-ink", fg: "text-paper", cssVar: "var(--font-fraunces)", size: "text-6xl" },
  { word: "01 / 24", bg: "bg-proof-yellow", fg: "text-ink", cssVar: "var(--font-mono)", size: "text-7xl" },
  { word: "Aa Bb Cc", bg: "bg-vermilion", fg: "text-paper", cssVar: "var(--font-fraunces)", size: "text-5xl" },
  { word: "Sinalização", bg: "bg-proof-blue", fg: "text-paper", cssVar: "var(--font-grotesk)", size: "text-4xl" },
  { word: "&", bg: "bg-paper", fg: "text-ink", cssVar: "var(--font-fraunces)", size: "text-8xl", border: true },
  { word: "Editorial", bg: "bg-ink", fg: "text-paper", cssVar: "var(--font-grotesk)", size: "text-5xl" },
];

export default async function InUsePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("nav");

  return (
    <main className="w-full pt-nav">
      <header className="px-global py-24">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tightest text-ink">
          {t("inUse")}
        </h1>
      </header>

      <div className="grid grid-cols-1 border-t border-grid sm:grid-cols-2 lg:grid-cols-3">
        {posters.map((p, i) => (
          <div
            key={i}
            className={`flex aspect-[4/3] items-center justify-center border-b border-r border-grid ${p.bg} ${p.fg} ${
              p.border ? "border" : ""
            }`}
          >
            <span
              className={`leading-none ${p.size}`}
              style={{ fontFamily: p.cssVar }}
            >
              {p.word}
            </span>
          </div>
        ))}
      </div>

      <InUseMarquee />
    </main>
  );
}
