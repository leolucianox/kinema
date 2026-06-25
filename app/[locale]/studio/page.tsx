import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("nav");
  return { title: t("studio") };
}

const team = [
  { name: "Lucas Verne", role: "Motion Direction · Brand", initials: "LV", accent: "text-spark" },
  { name: "Maya Kosta", role: "Motion Direction · Editorial", initials: "MK", accent: "text-volt" },
  { name: "Ren Moto", role: "Creative Code · Generative", initials: "RM", accent: "text-glow" },
];

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("studio");

  return (
    <main className="w-full pt-nav">
      <header className="px-global py-24">
        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-light">
          {t("title1")}
          <br />
          <span className="text-spark">{t("title2")}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed tracking-body text-dim">
          {t("body")}
        </p>
      </header>

      <section className="border-t border-edge px-global py-16">
        <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-dim">
          {t("teamTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-px bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-8 rounded-none bg-void p-8">
              <span className={`font-display text-7xl font-bold leading-none ${m.accent}`} aria-hidden="true">
                {m.initials}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tightest text-light">
                  {m.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-dim">
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
