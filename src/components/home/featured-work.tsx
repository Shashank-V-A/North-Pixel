import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { FadeIn } from "@/components/shared/fade-in";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { Section, SectionHeader } from "@/components/shared/section";

const featuredProjects = projects.filter((p) => p.featured);

export function FeaturedWork() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          label="Selected Work"
          title="Websites built for real businesses"
          description="Every project is crafted to reflect the unique identity of the business it represents."
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <div>
              <BrowserMockup project={project} />
              <div className="mt-4">
                <p className="text-xs font-medium tracking-wide text-accent uppercase">
                  {project.category}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
