import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { FAQ } from "@/components/home/faq";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent website packages starting at ₹9,999. Professional and premium options available with optional maintenance plans.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Section size="lg" className="border-b border-border">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
              Pricing
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              No hidden fees. Choose the package that fits your business, or
              book a call to discuss a custom solution.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <PricingCards />
      </Section>

      <FAQ />

      <CTASection />
    </>
  );
}
