import { processSteps } from "@/lib/data/process";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";

export function Process() {
  return (
    <Section className="border-t border-border">
      <FadeIn>
        <SectionHeader
          index="03"
          label="Process"
          title="How we work together"
          description="A clear, collaborative process — no jargon, no surprises."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {processSteps.map((step, i) => (
              <li key={step.step} className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-border bg-surface font-mono text-lg font-medium text-brand shadow-subtle">
                    {step.step}
                  </span>
                  {i < processSteps.length - 1 && (
                    <span className="hidden flex-1 border-t border-dashed border-border lg:block" />
                  )}
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </FadeIn>
    </Section>
  );
}
