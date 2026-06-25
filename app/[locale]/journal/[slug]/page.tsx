import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { mdxComponents } from "@/components/ui/mdx";
import { getAllPosts, getPost } from "@/lib/journal";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllPosts().map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.meta.title ?? "Journal" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPost(slug);
  if (!post) notFound();

  const t = await getTranslations("journal");

  return (
    <main className="w-full pt-nav">
      <article className="mx-auto max-w-2xl px-global py-20">
        <Link
          href="/journal"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-dim transition-colors hover:text-light"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          {t("backToJournal")}
        </Link>

        <header className="mt-10 border-b border-edge pb-10">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wide text-dim">
            <span>{post.meta.date}</span>
            <span className="text-spark">/</span>
            <span>
              {t("by")} {post.meta.author}
            </span>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[0.98] tracking-tightest text-light">
            {post.meta.title}
          </h1>
        </header>

        <div className="pb-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
