import Link from "next/link";
import { Check } from "lucide-react";
import { websitePackages, maintenancePlans } from "@/lib/data/pricing";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {websitePackages.map((tier, index) => (
          <FadeIn key={tier.name} delay={index * 0.08}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm md:p-8",
                tier.popular ? "border-accent shadow-sm" : "border-border"
              )}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-6 bg-accent text-white">
                  Most Popular
                </Badge>
              )}
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {tier.name}
              </h3>
              <p className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8"
                variant={tier.popular ? "default" : "outline"}
              >
                <Link href="/contact">{tier.cta}</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-20">
        <FadeIn>
          <SectionHeader
            label="Maintenance"
            title="Keep your website running smoothly"
            description="Optional monthly plans to handle updates, security, and ongoing support."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {maintenancePlans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.06}>
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 font-heading text-xl font-semibold text-foreground">
                  {plan.price}
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
