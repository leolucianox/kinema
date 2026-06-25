import type { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "accent";

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-body transition-colors duration-300 ease-[cubic-bezier(0.84,0,0.16,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spark focus-visible:ring-offset-2 focus-visible:ring-offset-void";

const variants: Record<Variant, string> = {
  solid: "bg-light text-void hover:bg-spark hover:text-void",
  outline: "border border-edge text-light hover:border-light",
  accent: "bg-spark text-void hover:opacity-90",
};

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
