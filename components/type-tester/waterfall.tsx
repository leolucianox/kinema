const SIZES = [18, 24, 32, 44, 60, 84];

// The same line set at increasing sizes — the classic specimen "waterfall".
export function Waterfall({
  cssVar,
  text,
}: {
  cssVar: string;
  text: string;
}) {
  return (
    <div className="divide-y divide-grid border-y border-grid">
      {SIZES.map((size) => (
        <div key={size} className="flex items-baseline gap-6 px-global py-4">
          <span className="w-10 shrink-0 font-mono text-xs text-muted">
            {size}
          </span>
          <span
            className="truncate text-ink"
            style={{ fontFamily: cssVar, fontSize: `${size}px`, lineHeight: 1.1 }}
          >
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
