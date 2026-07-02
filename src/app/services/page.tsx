import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { processSteps } from "@/lib/data/process";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
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
      <PageHero
        index="01"
        label="Services"
        title={
          <>
            Web solutions built for{" "}
            <span className="accent-word">local businesses</span>
          </>
        }
        description="From your first online presence to a complete digital overhaul — focused services designed to help your business stand out and convert visitors into customers."
      />

      <Section tone="surface" className="border-t border-border">
        <div className="space-y-0">
          {services.map((service, i) => {
            const Icon = service.icon;
            const index = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={service.title}>
                <div className="group grid gap-6 border-b border-border py-10 last:border-b-0 md:grid-cols-[5rem_1fr_2fr] md:items-start md:gap-10 md:py-12">
                  <span className="font-mono text-2xl font-medium text-brand md:text-3xl">
                    {index}
                  </span>
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:border-brand/30 group-hover:bg-brand/5">
                      <Icon className="size-5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground md:pt-2">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section tone="dark" className="relative overflow-hidden border-t border-background/15">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="relative">
          <FadeIn>
            <SectionHeader
              index="02"
              label="How it works"
              title="A process you can trust"
              description="Every project follows the same proven framework — transparent, collaborative, and focused on results."
              variant="dark"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <ol className="grid gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/10 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <li
                  key={step.step}
                  className="bg-foreground p-6 transition-colors hover:bg-background/[0.06] md:p-7"
                >
                  <span className="font-mono text-sm text-background">{step.step}</span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-background">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/60">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
