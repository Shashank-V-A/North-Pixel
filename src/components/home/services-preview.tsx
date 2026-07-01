import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";

export function ServicesPreview() {
  return (
    <Section className="border-t border-border bg-white">
      <FadeIn>
        <SectionHeader
          label="Services"
          title="Everything your business needs to succeed online"
          description="From your first website to ongoing maintenance — I handle the technical details so you can focus on running your business."
        />
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.05}>
            <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-accent/8 p-2.5 text-accent">
                <service.icon className="size-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
