import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("nav");
  return { title: t("foundry") };
}

const team = [
  { name: "Iara Fontes", role: "Type design · Latin", initials: "IF", cssVar: "var(--font-fraunces)" },
  { name: "Téo Marília", role: "Type design · Display", initials: "TM", cssVar: "var(--font-grotesk)" },
  { name: "Noé Albuquerque", role: "Engineering · Mono", initials: "Na", cssVar: "var(--font-mono)" },
];

const accents = ["text-vermilion", "text-proof-blue", "text-proof-yellow"];

export default async function FoundryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("foundry");

  return (
    <main className="w-full pt-nav">
      <header className="px-global py-24">
        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tightest text-ink">
          {t("title1")}
          <br />
          <span className="text-vermilion">{t("title2")}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed tracking-body text-muted">
          {t("body")}
        </p>
      </header>

      <section className="border-t border-grid px-global py-16">
        <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t("teamTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-px bg-grid sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="flex flex-col gap-8 bg-paper p-8"
            >
              <span
                className={`text-7xl leading-none ${accents[i % accents.length]}`}
                style={{ fontFamily: m.cssVar }}
                aria-hidden="true"
              >
                {m.initials}
              </span>
              <div>
                <h3 className="font-display text-2xl tracking-tightest text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
