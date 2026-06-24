import { brand } from "@/lib/brand";

interface LogoMarkProps {
  /** Show the registration-mark square block next to the wordmark. */
  withSquares?: boolean;
  className?: string;
}

// "Grafema" wordmark + a block of registration-mark squares (the foundry's
// nod to offset printing). Reused in the nav and footer.
export function LogoMark({ withSquares = true, className = "" }: LogoMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-display text-[1.6rem] font-medium leading-none tracking-tightest text-ink">
        {brand.name}
        <span className="text-vermilion">.</span>
      </span>
      {withSquares && (
        <span className="grid grid-cols-3 gap-px" aria-hidden="true">
          <span className="h-3.5 w-3.5 bg-vermilion" />
          <span className="h-3.5 w-3.5 bg-proof-blue" />
          <span className="h-3.5 w-3.5 bg-proof-yellow" />
        </span>
      )}
    </div>
  );
}
