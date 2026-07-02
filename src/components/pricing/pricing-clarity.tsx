import { pricingClarity } from "@/lib/data/pricing";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section";

export function PricingClarity() {
  return (
    <div className="mt-20 border-t border-border pt-16">
      <FadeIn>
        <SectionHeader
          index="04"
          label="Good to know"
          title="What's included — and what isn't"
          description="No surprises. Here's exactly what you're paying for and what costs extra."
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <FadeIn delay={0.05}>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-7">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Included in every package
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pricingClarity.includedInAll.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-7">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Not included (you pay separately)
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pricingClarity.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-muted p-6 md:p-7">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Optional add-ons
            </h3>
            <ul className="mt-4 divide-y divide-border">
              {pricingClarity.addOns.map((addon) => (
                <li
                  key={addon.name}
                  className="flex items-center justify-between gap-4 py-3 text-sm first:pt-0 last:pb-0"
                >
                  <span className="text-foreground/90">{addon.name}</span>
                  <span className="shrink-0 font-medium text-foreground">
                    {addon.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface-muted p-6 md:p-7">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Payment & location
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              {pricingClarity.payment.summary}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              <span className="font-medium text-foreground">Payment methods: </span>
              {pricingClarity.payment.methods}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              {pricingClarity.location}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
