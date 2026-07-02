import Link from "next/link";
import { websitePackages, maintenancePlans } from "@/lib/data/pricing";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <>
      <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
        {websitePackages.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.06}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-6 transition-[border-color,box-shadow,transform] duration-300 md:p-8",
                tier.popular
                  ? "z-10 border-foreground bg-foreground text-background shadow-elevated lg:-my-4 lg:scale-[1.03] lg:p-10"
                  : "border-border bg-background hover:border-foreground/20 hover:shadow-subtle"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-background px-3 py-1 text-[0.6875rem] font-medium text-foreground">
                  Most popular
                </span>
              )}
              <div className="flex items-baseline justify-between gap-2">
                <h3
                  className={cn(
                    "font-heading text-lg font-semibold",
                    tier.popular ? "text-background" : "text-foreground"
                  )}
                >
                  {tier.name}
                </h3>
                <span
                  className={cn(
                    "font-mono text-xs",
                    tier.popular ? "text-background/40" : "text-ink-subtle"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p
                className={cn(
                  "mt-5 font-heading text-[2rem] font-semibold tracking-[-0.03em] md:text-[2.25rem]",
                  tier.popular ? "text-background" : "text-foreground"
                )}
              >
                {tier.price}
              </p>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  tier.popular ? "text-background/60" : "text-muted-foreground"
                )}
              >
                {tier.description}
              </p>
              <ul
                className={cn(
                  "mt-8 flex-1 space-y-3 border-t pt-8",
                  tier.popular ? "border-background/15" : "border-border"
                )}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex gap-3 text-sm leading-snug",
                      tier.popular ? "text-background/70" : "text-muted-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-2 size-1.5 shrink-0 rounded-full",
                        tier.popular ? "bg-background" : "bg-foreground"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn(
                  "mt-8 h-11",
                  tier.popular &&
                    "bg-background text-foreground hover:bg-background/90"
                )}
                variant={tier.popular ? "default" : "outline"}
              >
                <Link href="/contact">{tier.cta}</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-20">
        <FadeIn>
          <SectionHeader
            index="05"
            label="Maintenance"
            title="Ongoing support"
            description="Optional monthly plans for updates, security, and peace of mind."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {maintenancePlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-[border-color,box-shadow] hover:border-foreground/20 hover:shadow-subtle md:p-7">
                <span className="font-mono text-xs text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 font-heading text-xl font-semibold tracking-[-0.02em] text-foreground">
                  {plan.price}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
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
