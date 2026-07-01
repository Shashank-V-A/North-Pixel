import { processSteps } from "@/lib/data/process";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";

export function Process() {
  return (
    <Section className="border-t border-border bg-white">
      <FadeIn>
        <SectionHeader
          label="Process"
          title="A clear path from idea to launch"
          description="No surprises, no jargon. Just a straightforward process designed to deliver results."
          align="center"
        />
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <FadeIn key={step.step} delay={index * 0.06}>
            <div className="relative">
              <span className="font-heading text-sm font-semibold text-accent">
                {step.step}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
