
import { cn } from "@/lib/utils";
import { Sparkle } from "./Doodles";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

type JoinButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
};

/**
 * The single, consistent primary call-to-action. Every "Join the network" button
 * across the page routes through this component so the label, styling, and the
 * gentle hover surprise (soft bounce + colour bloom + a tiny sprouting sparkle)
 * stay identical everywhere.
 */
const JoinButton = ({
  children = "Join the network",
  className,
  variant = "primary",
  onClick = scrollToContact,
}: JoinButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold",
        "transition-all duration-300 ease-in-out will-change-transform",
        "hover:-translate-y-0.5 active:translate-y-0 motion-safe:hover:scale-[1.03]",
        variant === "primary"
          ? "bg-founder-coral text-white shadow-soft-sm hover:bg-founder-coral-dark hover:shadow-bloom"
          : "bg-white text-founder-ink border border-founder-cream-deep shadow-soft-sm hover:border-founder-coral/40 hover:text-founder-coral-dark",
        className
      )}
    >
      <span>{children}</span>
      {/* Tiny sparkle that pops on hover — the reward for attention. */}
      <Sparkle
        aria-hidden
        className="h-4 w-4 -mr-1 opacity-0 -translate-y-0.5 transition-all duration-300 ease-in-out motion-safe:group-hover:opacity-100 motion-safe:group-hover:translate-y-0 motion-safe:group-hover:animate-sparkle-pop"
      />
    </button>
  );
};

export default JoinButton;
