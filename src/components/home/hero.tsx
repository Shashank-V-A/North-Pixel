import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { SectionLabel } from "@/components/shared/section-label";
import { projects } from "@/lib/data/projects";

const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-foreground/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <FadeIn>
            <SectionLabel index="00">North Pixel Studio</SectionLabel>
            <h1 className="mt-8 text-display font-semibold text-balance text-foreground">
              Websites that make{" "}
              <span className="accent-word">local businesses</span> impossible
              to ignore.
            </h1>
            <p className="mt-7 max-w-lg text-[1.0625rem] leading-[1.7] text-muted-foreground">
              I design and build fast, distinctive websites that help businesses
              build trust, attract customers, and convert visitors into leads.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-12 px-7">
                <Link href="/work">
                  View my work
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7">
                <Link href="/contact">Book a free consultation</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-border pt-8">
              <p className="text-sm text-ink-subtle">
                Based in India · Working with local businesses nationwide
              </p>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <Link
                href="/pricing"
                className="group hidden items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-brand sm:flex"
              >
                Packages from ₹9,999
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-foreground/5 blur-2xl" />
              <div className="relative rounded-2xl bg-foreground p-2 shadow-elevated md:p-3">
                <BrowserMockup project={featuredProject} size="large" />
              </div>
              <p className="mt-4 text-center font-mono text-xs text-ink-subtle">
                {featuredProject.title} — {featuredProject.category}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
