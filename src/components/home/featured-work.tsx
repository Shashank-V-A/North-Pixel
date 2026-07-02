import { projects } from "@/lib/data/projects";
import { FadeIn } from "@/components/shared/fade-in";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { Section, SectionHeader } from "@/components/shared/section";
import { TextLink } from "@/components/shared/text-link";
import { cn } from "@/lib/utils";

const featuredProjects = projects.filter((p) => p.featured);

export function FeaturedWork() {
  return (
    <Section tone="surface" className="border-t border-border">
      <FadeIn>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="02"
            label="Selected work"
            title="Recent projects"
            description="Sample builds across industries — each tailored to how that business wins customers."
            className="mb-0"
          />
          <TextLink href="/work" className="shrink-0 md:mb-1">
            View all work
          </TextLink>
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-background p-4 transition-[border-color,box-shadow] duration-300 hover:border-foreground/20 hover:shadow-elevated md:p-5",
                index === 0 && "md:col-span-2 lg:col-span-7 lg:row-span-2",
                index === 1 && "lg:col-span-5",
                index === 2 && "lg:col-span-5"
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.6875rem] font-medium text-ink-subtle">
                  {project.category}
                </span>
              </div>
              <BrowserMockup
                project={project}
                size={index === 0 ? "large" : "default"}
              />
              <div className="mt-5">
                <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-foreground md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
