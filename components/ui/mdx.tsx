import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 font-display text-3xl font-bold tracking-tightest text-light"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-display text-2xl font-bold tracking-tightest text-light"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-5 text-base leading-relaxed tracking-body text-dim"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-dim" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-dim" {...props} />
  ),
  li: (props) => <li className="leading-relaxed tracking-body" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-spark pl-6 font-display text-2xl font-bold leading-snug tracking-tightest text-light"
      {...props}
    />
  ),
  a: (props) => (
    <a className="text-spark underline underline-offset-4" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded-sm bg-light/[0.06] px-1.5 py-0.5 font-mono text-sm text-light"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-edge" />,
};
