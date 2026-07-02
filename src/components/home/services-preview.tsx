import { services } from "@/lib/data/services";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { TextLink } from "@/components/shared/text-link";

export function ServicesPreview() {
  return (
    <Section tone="dark" className="relative overflow-hidden border-t border-background/15">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />

      <div className="relative">
        <FadeIn>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              index="01"
              label="Services"
              title="What I help you with"
              description="From your first website to ongoing maintenance — focused services for businesses that need to look credible and convert online."
              variant="dark"
              className="mb-0"
            />
            <TextLink
              href="/services"
              className="shrink-0 text-background hover:text-background/80 md:mb-1"
            >
              All services
            </TextLink>
          </div>
        </FadeIn>

        <div className="relative mt-12 grid gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const index = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={service.title} delay={i * 0.04}>
                <div className="group flex h-full flex-col bg-foreground p-6 transition-colors hover:bg-background/[0.06] md:p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-background">{index}</span>
                    <Icon
                      className="size-5 text-background/35 transition-colors group-hover:text-background"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-background">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-background/60">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
