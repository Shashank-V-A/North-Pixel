import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
  wide?: boolean;
};

export function PageHeader({
  label,
  title,
  description,
  className,
  wide = false,
}: PageHeaderProps) {
  return (
    <Section size="lg" className={cn("border-b border-border", className)}>
      <FadeIn>
        <div className={cn("max-w-2xl", wide && "max-w-3xl")}>
          <p className="text-[0.8125rem] font-medium tracking-[0.06em] text-ink-subtle">
            {label}
          </p>
          <h1 className="mt-4 font-heading text-[2.125rem] font-semibold leading-[1.12] tracking-[-0.025em] text-foreground md:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-muted-foreground">
            {description}
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
