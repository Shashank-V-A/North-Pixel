import { cn } from "@/lib/utils";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * North-arrow pixel mark — three cream squares on dark teal.
 * Reads as "north" + "pixel" without generic lettermark clichés.
 */
export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-foreground" />
      <rect
        x="13"
        y="6"
        width="6"
        height="6"
        rx="1.25"
        className="fill-background"
      />
      <rect
        x="7"
        y="18"
        width="6"
        height="6"
        rx="1.25"
        className="fill-background"
      />
      <rect
        x="19"
        y="18"
        width="6"
        height="6"
        rx="1.25"
        className="fill-background"
      />
    </svg>
  );
}
