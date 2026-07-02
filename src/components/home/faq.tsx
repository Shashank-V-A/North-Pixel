import { faqItems } from "@/lib/data/faq";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Section tone="muted" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <FadeIn>
          <SectionHeader
            index="04"
            label="FAQ"
            title="Common questions"
            description="Everything you need to know before we start working together."
            className="mb-0 lg:sticky lg:top-28"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="py-5 text-left text-[0.9375rem] font-medium hover:no-underline [&[data-state=open]]:text-brand">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 font-mono text-xs text-ink-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </Section>
  );
}
