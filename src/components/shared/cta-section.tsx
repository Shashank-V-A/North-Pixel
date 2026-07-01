import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to grow your business online?",
  description = "Book a free consultation and let's discuss how a premium website can help you attract more customers.",
}: CTASectionProps) {
  return (
    <Section className="border-t border-border">
      <FadeIn>
        <div className="rounded-2xl border border-border bg-white px-8 py-12 text-center md:px-16 md:py-16">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/work">View My Work</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
