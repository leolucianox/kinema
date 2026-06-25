import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getAllPosts } from "@/lib/journal";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("journal");
  return { title: t("title") };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("journal");
  const posts = getAllPosts();

  return (
    <main className="w-full pt-nav">
      <header className="px-global py-24">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-light">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed tracking-body text-dim">
          {t("subtitle")}
        </p>
      </header>

      <div className="border-t border-edge">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group grid grid-cols-1 items-baseline gap-4 border-b border-edge px-global py-10 transition-colors hover:bg-light/[0.02] md:grid-cols-[160px_1fr_auto]"
          >
            <span className="font-mono text-xs uppercase tracking-wide text-dim">
              {post.date}
            </span>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tightest text-light transition-colors group-hover:text-spark">
                {post.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed tracking-body text-dim">
                {post.excerpt}
              </p>
              <span className="mt-2 block font-mono text-xs text-dim">
                {t("by")} {post.author}
              </span>
            </div>
            <ArrowUpRight className="hidden h-6 w-6 text-dim transition-all group-hover:text-spark md:block" />
          </Link>
        ))}
      </div>
    </main>
  );
}
