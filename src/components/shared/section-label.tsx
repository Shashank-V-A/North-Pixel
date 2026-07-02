import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

export function SectionLabel({
  index,
  children,
  variant = "light",
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index && (
        <span
          className={cn(
            "font-mono text-xs tabular-nums",
            variant === "dark" ? "text-background/50" : "text-ink-subtle"
          )}
        >
          {index}
        </span>
      )}
        <span
          className={cn(
            "h-px w-8",
            variant === "dark" ? "bg-background" : "bg-brand"
          )}
        />
      <span
        className={cn(
          "text-xs font-medium uppercase tracking-[0.14em]",
          variant === "dark" ? "text-background/60" : "text-ink-subtle"
        )}
      >
        {children}
      </span>
    </div>
  );
}
