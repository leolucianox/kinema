"use client";

// Visual display of the 4 easing curves available in the playground.
// Each card shows the SVG bezier path and its label.

const CURVES = [
  {
    id: "linear",
    label: "Linear",
    path: "M 0 100 L 100 0",
    values: "[0, 0, 1, 1]",
  },
  {
    id: "expo",
    label: "Expo",
    path: "M 0 100 C 87 100 13 0 100 0",
    values: "[0.87, 0, 0.13, 1]",
  },
  {
    id: "spring",
    label: "Spring",
    path: "M 0 100 C 20 100 0 0 100 0",
    values: "type: spring",
  },
  {
    id: "bounce",
    label: "Bounce",
    path: "M 0 100 C 40 100 0 -20 100 0",
    values: "stiffness: 400",
  },
];

export function EasingGrid() {
  return (
    <div className="grid grid-cols-2 border-l border-t border-edge lg:grid-cols-4">
      {CURVES.map((curve) => (
        <div
          key={curve.id}
          className="flex flex-col gap-4 border-b border-r border-edge p-6"
        >
          <svg
            viewBox="0 0 100 100"
            className="h-20 w-20 text-spark"
            aria-hidden="true"
          >
            <path
              d={curve.path}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="0" cy="100" r="3" fill="var(--dim)" />
            <circle cx="100" cy="0" r="3" fill="var(--dim)" />
          </svg>
          <div>
            <p className="font-display text-base font-semibold text-light">
              {curve.label}
            </p>
            <p className="mt-0.5 font-mono text-xs text-dim">{curve.values}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
