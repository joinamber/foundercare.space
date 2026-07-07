
import { cn } from "@/lib/utils";

/**
 * The one card component used everywhere — feature cards and the
 * Early/Solo/Any Founder cards all share this surface so styling stays unified:
 * soft rounded corners, warm-tinted shadow, cream border, gentle hover lift.
 */
type FounderCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Accent colour used for the icon tile / left rule, from the natural palette. */
  as?: "div" | "li";
};

const FounderCard = ({ children, className, as = "div" }: FounderCardProps) => {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "founder-card p-7 md:p-8 card-hover",
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default FounderCard;
