import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { Section } from "@/components/shared/section";
import { CTASection } from "@/components/shared/cta-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Explore showcase projects for furniture stores, fitness centres, dental clinics, salons, interior designers, and real estate consultants.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        index="02"
        label="Work"
        title={
          <>
            Websites crafted for{" "}
            <span className="accent-word">real industries</span>
          </>
        }
        description="Each project is designed around the unique needs of the business — from building trust to driving bookings and enquiries."
      />

      <Section className="border-t border-border">
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => {
            const index = String(i + 1).padStart(2, "0");
            const reversed = i % 2 === 1;
            return (
              <FadeIn key={project.slug}>
                <article
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative">
                    <span className="absolute -left-2 -top-6 font-mono text-6xl font-medium text-border md:-left-4 md:-top-8 md:text-8xl">
                      {index}
                    </span>
                    <div className="relative rounded-2xl border border-border bg-surface p-3 shadow-subtle">
                      <BrowserMockup
                        project={project}
                        size={i === 0 ? "large" : "default"}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-ink-subtle">
                      {project.category}
                    </span>
                    <h2 className="mt-4 font-heading text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                      {project.title}
                    </h2>
                    <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
                      >
                        View live site
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    )}
                    <div className="mt-6 flex items-center gap-3">
                      <div
                        className="size-3 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      <span className="font-mono text-xs text-ink-subtle">
                        Brand palette
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <CTASection
        title="Want a website like these?"
        description="Let's discuss your business and create something tailored to your brand and goals."
      />
    </>
  );
}
