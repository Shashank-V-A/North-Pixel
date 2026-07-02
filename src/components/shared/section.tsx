import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/shared/section-label";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "sm" | "lg";
  tone?: "default" | "muted" | "surface" | "dark";
  fullWidth?: boolean;
};

const sizeClasses = {
  sm: "py-16 md:py-20",
  default: "py-20 md:py-28",
  lg: "py-24 md:py-32",
};

const toneClasses = {
  default: "",
  muted: "bg-surface-muted",
  surface: "bg-surface",
  dark: "bg-foreground text-background",
};

export function Section({
  children,
  className,
  id,
  size = "default",
  tone = "default",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sizeClasses[size], toneClasses[tone], className)}
    >
      <div
        className={cn(
          "mx-auto w-full px-6 md:px-8",
          fullWidth ? "max-w-[90rem]" : "max-w-6xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  index?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {label && (
        <SectionLabel index={index} variant={variant}>
          {label}
        </SectionLabel>
      )}
      <h2
        className={cn(
          "mt-6 font-heading text-[1.875rem] font-semibold leading-[1.12] tracking-[-0.025em] md:text-[2.375rem]",
          isDark ? "text-background" : "text-foreground",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[1.0625rem] leading-[1.65]",
            isDark ? "text-background/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
