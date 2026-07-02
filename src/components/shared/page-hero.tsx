import { FadeIn } from "@/components/shared/fade-in";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  description: string;
  variant?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  index,
  label,
  title,
  description,
  variant = "dark",
  className,
  children,
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        isDark
          ? "border-background/15 bg-foreground text-background"
          : "border-border bg-background",
        className
      )}
    >
      {isDark && <div className="absolute inset-0 bg-grid-dark opacity-60" />}
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <FadeIn>
          <SectionLabel index={index} variant={isDark ? "dark" : "light"}>
            {label}
          </SectionLabel>
          <h1
            className={cn(
              "mt-8 max-w-4xl text-display-sm font-semibold text-balance",
              isDark ? "text-background" : "text-foreground"
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-xl text-[1.0625rem] leading-[1.7]",
              isDark ? "text-background/90" : "text-foreground/90"
            )}
          >
            {description}
          </p>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
