
import { cn } from "@/lib/utils";

/**
 * Hand-drawn-feeling SVG doodle set — one coherent illustration language used as
 * hero art, section accents, and low-opacity backgrounds. All strokes use
 * `currentColor` so colour is controlled by the surrounding text colour.
 */

type DoodleProps = {
  className?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
};

const base = "pointer-events-none select-none";

/** A little sprouting seedling — the core growth motif. */
export const Sprout = ({ className, strokeWidth = 2.4 }: DoodleProps) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden className={cn(base, className)}>
    <path
      d="M32 58c0-10 0-20 0-27"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M32 34c-2-9-9-13-18-13 0 9 6 15 18 15Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32 30c1.5-8 8-12 17-11 0 8-6 13-17 13Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/** A four-point sparkle / twinkle. */
export const Sparkle = ({ className, strokeWidth = 2.2 }: DoodleProps) => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden className={cn(base, className)}>
    <path
      d="M20 4c1.5 9 5.5 13 15 14-9.5 1-13.5 5-15 14-1.5-9-5.5-13-15-14 9.5-1 13.5-5 15-14Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/** A gentle speech bubble — for the "honest chats" motif. */
export const SpeechBubble = ({ className, strokeWidth = 2.2 }: DoodleProps) => (
  <svg viewBox="0 0 64 56" fill="none" aria-hidden className={cn(base, className)}>
    <path
      d="M8 10c0-3 2-5 6-5h36c4 0 6 2 6 5v22c0 3-2 5-6 5H26l-11 9 1-9h-2c-4 0-6-2-6-5V10Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="24" cy="21" r="1.8" fill="currentColor" />
    <circle cx="32" cy="21" r="1.8" fill="currentColor" />
    <circle cx="40" cy="21" r="1.8" fill="currentColor" />
  </svg>
);

/** A tiny five-point hand-drawn star. */
export const Star = ({ className, strokeWidth = 2.2 }: DoodleProps) => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden className={cn(base, className)}>
    <path
      d="M20 5l4.2 9.4 10.3 1-7.7 6.9 2.2 10.1L20 27.8l-9 4.6 2.2-10.1-7.7-6.9 10.3-1L20 5Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/** A loose, hand-drawn underline squiggle for emphasising a word. */
export const Squiggle = ({ className, strokeWidth = 3 }: DoodleProps) => (
  <svg viewBox="0 0 220 20" fill="none" aria-hidden className={cn(base, className)}>
    <path
      d="M3 12c26-9 52-9 78-2s52 9 78 2 40-8 58-6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/** Concentric hand-drawn arcs — a little "growth ring" / signal motif. */
export const Arcs = ({ className, strokeWidth = 2.2 }: DoodleProps) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden className={cn(base, className)}>
    <path d="M24 40c0-8 0-8 0-8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M14 30a14 14 0 0 1 20 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
    <path d="M8 24a24 24 0 0 1 32 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
  </svg>
);

/** A little heart doodle. */
export const Heart = ({ className, strokeWidth = 2.2 }: DoodleProps) => (
  <svg viewBox="0 0 48 44" fill="none" aria-hidden className={cn(base, className)}>
    <path
      d="M24 40C10 31 4 24 4 15.5 4 9 9 5 14.5 5 18.5 5 22 7 24 11c2-4 5.5-6 9.5-6C39 5 44 9 44 15.5 44 24 38 31 24 40Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/** A soft organic blob — used as a low-opacity background shape behind content. */
export const Blob = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" aria-hidden className={cn(base, className)}>
    <path
      fill="currentColor"
      d="M42.8 -63.8C55.3 -55.3 64.6 -42.9 70.4 -28.7C76.2 -14.5 78.5 1.6 74.4 15.9C70.3 30.2 59.9 42.7 47.2 52.9C34.5 63.1 19.6 71 3.2 66.6C-13.1 62.2 -30.9 45.5 -44.7 28.5C-58.5 11.5 -68.3 -5.9 -66.5 -22.2C-64.7 -38.5 -51.3 -53.7 -36 -61.7C-20.7 -69.7 -3.5 -70.5 11.8 -70.7C27.1 -70.9 30.3 -72.3 42.8 -63.8Z"
      transform="translate(100 100)"
    />
  </svg>
);

/**
 * An organic hand-drawn section divider — a soft wave that lets one section's
 * colour flow into the next instead of snapping on a hard rectangle.
 * `fill` should be the colour of the section that follows.
 */
export const WaveDivider = ({
  className,
  fill = "#FCFBF8",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) => (
  <div
    aria-hidden
    className={cn("w-full overflow-hidden leading-[0]", flip && "rotate-180", className)}
  >
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="w-full h-[60px] md:h-[90px]"
    >
      <path
        fill={fill}
        d="M0,48 C180,86 340,84 520,58 C700,32 860,16 1040,34 C1200,50 1320,74 1440,58 L1440,90 L0,90 Z"
      />
    </svg>
  </div>
);
