import type { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "accent";

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-body transition-colors duration-300 ease-[cubic-bezier(0.84,0,0.16,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-vermilion",
  outline: "border border-grid text-ink hover:border-ink",
  accent: "bg-vermilion text-paper hover:opacity-90",
};

// Shared pill-shaped button used for CTAs across the site.
export function PillButton({
  variant = "solid",
  className = "",
  children,
  ...props
}: PillButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
