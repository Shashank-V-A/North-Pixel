import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
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
      <PageHero
        index="03"
        label="Pricing"
        title={
          <>
            Simple, <span className="accent-word">transparent</span> pricing
          </>
        }
        description="No hidden fees. Every package lists what's included, what's extra, and how long delivery takes. Based in Bangalore, serving businesses across India."
      />

      <Section tone="surface" className="border-t border-border">
        <PricingCards />
      </Section>

      <FAQ />

      <CTASection />
    </>
  );
}
