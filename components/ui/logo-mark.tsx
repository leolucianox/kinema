import { brand } from "@/lib/brand";

interface LogoMarkProps {
  withDot?: boolean;
  className?: string;
}

export function LogoMark({ withDot = true, className = "" }: LogoMarkProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-display text-[1.5rem] font-bold leading-none tracking-tightest text-light">
        {brand.name}
        {withDot && <span className="text-spark">.</span>}
      </span>
    </div>
  );
}
