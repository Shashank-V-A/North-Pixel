import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionLabel } from "@/components/shared/section-label";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to grow your business online?",
  description = "Book a free consultation and let's discuss how a premium website can help you attract more customers.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-background/15 bg-foreground text-background">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute -left-24 bottom-0 size-64 rounded-full bg-background/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <FadeIn>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel index="05" variant="dark">
                Get started
              </SectionLabel>
              <h2 className="mt-6 font-heading text-display-sm font-semibold text-balance text-background">
                {title}
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-background/60">
                {description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 bg-background px-7 text-foreground hover:bg-background/90"
              >
                <Link href="/contact">
                  Book a consultation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-background/25 bg-transparent px-7 text-background hover:bg-background/10 hover:text-background"
              >
                <Link href="/work">View work</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
