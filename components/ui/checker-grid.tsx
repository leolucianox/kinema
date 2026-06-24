export interface FilledCell {
  col: number; // 1-based
  row: number; // 1-based
  color: "vermilion" | "proof-blue" | "proof-yellow";
}

interface CheckerGridProps {
  cols: number;
  rows: number;
  filled?: FilledCell[];
  className?: string;
}

const colorMap: Record<FilledCell["color"], string> = {
  vermilion: "bg-vermilion",
  "proof-blue": "bg-proof-blue",
  "proof-yellow": "bg-proof-yellow",
};

// Baseline / registration grid with selectively filled cells. The signature
// structural motif, reused across the hero and the inverted CTA.
export function CheckerGrid({
  cols,
  rows,
  filled = [],
  className = "",
}: CheckerGridProps) {
  const cells = Array.from({ length: cols * rows }, (_, i) => {
    const col = (i % cols) + 1;
    const row = Math.floor(i / cols) + 1;
    const fill = filled.find((f) => f.col === col && f.row === row);
    return { col, row, fill };
  });

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      aria-hidden="true"
    >
      {cells.map(({ col, row, fill }) => (
        <div
          key={`${col}-${row}`}
          className={`border-r border-t border-grid ${
            fill ? colorMap[fill.color] : ""
          }`}
        />
      ))}
    </div>
  );
}
