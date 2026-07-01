import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { projects } from "@/lib/data/projects";

const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="mb-4 text-sm font-medium tracking-wide text-accent uppercase">
                Web Design & Development Studio
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                Premium websites that help local businesses grow.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                I design and build fast, modern websites that help businesses
                build trust, attract customers, and convert visitors into leads.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <Link href="/work">
                    View My Work
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
                <div>
                  <p className="font-heading text-2xl font-semibold text-foreground">
                    50+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Projects delivered
                  </p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <p className="font-heading text-2xl font-semibold text-foreground">
                    7–14
                  </p>
                  <p className="text-sm text-muted-foreground">Day turnaround</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <p className="font-heading text-2xl font-semibold text-foreground">
                    100%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Client satisfaction
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="up">
            <div className="relative">
              <BrowserMockup project={featuredProject} size="large" />
              <div className="absolute -bottom-4 -left-4 -z-10 size-full rounded-3xl bg-accent/5" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
