const GLYPHS = (
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "abcdefghijklmnopqrstuvwxyz" +
  "0123456789" +
  "&@#?!*()/—…"
).split("");

// Full character set rendered as a uniform grid of cells.
export function GlyphGrid({ cssVar }: { cssVar: string }) {
  return (
    <div className="grid grid-cols-6 border-l border-t border-grid sm:grid-cols-9 md:grid-cols-12">
      {GLYPHS.map((g, i) => (
        <div
          key={`${g}-${i}`}
          className="flex aspect-square items-center justify-center border-b border-r border-grid text-2xl text-ink"
          style={{ fontFamily: cssVar }}
        >
          {g}
        </div>
      ))}
    </div>
  );
}
