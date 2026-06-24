import type { MDXComponents } from "mdx/types";

// Styled element mapping for MDX journal posts.
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 font-display text-3xl tracking-tightest text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-display text-2xl tracking-tightest text-ink"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-5 text-base leading-relaxed tracking-body text-ink"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-ink" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-ink" {...props} />
  ),
  li: (props) => <li className="leading-relaxed tracking-body" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-vermilion pl-6 font-display text-2xl leading-snug tracking-tightest text-ink"
      {...props}
    />
  ),
  a: (props) => (
    <a className="text-vermilion underline underline-offset-4" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-sm text-ink"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-grid" />,
};
