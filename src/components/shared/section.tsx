import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "sm" | "lg";
};

const sizeClasses = {
  sm: "py-16 md:py-20",
  default: "py-20 md:py-28",
  lg: "py-24 md:py-32",
};

export function Section({
  children,
  className,
  id,
  size = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(sizeClasses[size], className)}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
