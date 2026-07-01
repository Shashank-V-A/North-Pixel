import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { FeaturedWork } from "@/components/home/featured-work";
import { Process } from "@/components/home/process";
import { FAQ } from "@/components/home/faq";
import { CTASection } from "@/components/shared/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <FAQ />
      <CTASection />
    </>
  );
}
