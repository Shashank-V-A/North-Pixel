import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { processSteps } from "@/lib/data/process";
import { createMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Business websites, landing pages, redesigns, maintenance, Google Business Profile setup, and SEO-ready development for local businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section size="lg" className="border-b border-border">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
              Services
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Web solutions built for local businesses
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From your first online presence to a complete digital overhaul — I
              offer focused services designed to help your business stand out and
              convert visitors into customers.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <div className="flex gap-5 rounded-2xl border border-border bg-white p-6 md:p-8">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent">
                  <service.icon className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-white">
        <FadeIn>
          <SectionHeader
            label="How it works"
            title="A process you can trust"
            description="Every project follows the same proven framework — transparent, collaborative, and focused on results."
            align="center"
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.06}>
              <div>
                <span className="text-sm font-semibold text-accent">
                  {step.step}
                </span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
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

      <CTASection />
    </>
  );
}
