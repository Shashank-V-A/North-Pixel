import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { createMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/shared/fade-in";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { Section } from "@/components/shared/section";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Explore showcase projects for restaurants, salons, dental clinics, fitness studios, interior designers, and real estate consultants.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section size="lg" className="border-b border-border">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
              Work
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Websites crafted for real industries
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Each project is designed around the unique needs of the business —
              from building trust to driving bookings and enquiries.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.06}>
              <article>
                <BrowserMockup project={project} />
                <div className="mt-5">
                  <p className="text-xs font-medium tracking-wide text-accent uppercase">
                    {project.category}
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
                    {project.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want a website like these?"
        description="Let's discuss your business and create something tailored to your brand and goals."
      />
    </>
  );
}
