import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandIconBadge } from "@/components/shared/brand-icons";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionLabel } from "@/components/shared/section-label";
import { FadeIn } from "@/components/shared/fade-in";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch to book a free consultation. Reach out via WhatsApp, email, X, or Instagram.",
  path: "/contact",
});

const contactMethods = [
  {
    key: "email" as const,
    label: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.links.email,
    external: false,
  },
  {
    key: "x" as const,
    label: "X",
    value: siteConfig.contact.x,
    href: siteConfig.links.x,
    external: true,
  },
  {
    key: "instagram" as const,
    label: "Instagram",
    value: "@northpixel",
    href: siteConfig.links.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="grid min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
      <section className="relative overflow-hidden border-b border-background/15 bg-foreground text-background lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative flex h-full flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <FadeIn>
            <div>
              <SectionLabel index="04" variant="dark">
                Contact
              </SectionLabel>
              <h1 className="mt-8 text-display-sm font-semibold text-balance text-background">
                Let&apos;s start a{" "}
                <span className="accent-word">conversation</span>
              </h1>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-background/60">
                Tell me about your business and what you&apos;re looking for. I
                typically respond within 24 hours.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-12 space-y-2 lg:mt-0">
              <div className="flex items-center gap-3.5 rounded-lg border border-background/15 bg-background/[0.06] px-4 py-3.5 transition-colors hover:border-background/25">
                <BrandIconBadge brand="whatsapp" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-background/50">WhatsApp</p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {siteConfig.contact.whatsapp.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between text-sm font-medium text-background transition-colors hover:text-[#25D366]"
                      >
                        {item.display}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {contactMethods.map((method) => (
                <Link
                  key={method.key}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3.5 rounded-lg border border-background/15 bg-background/[0.06] px-4 py-3.5 transition-colors hover:border-background/25"
                >
                  <BrandIconBadge brand={method.key} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-background/50">{method.label}</p>
                    <p className="mt-0.5 truncate text-sm font-medium text-background">
                      {method.value}
                    </p>
                  </div>
                  <ArrowUpRight className="size-3.5 shrink-0 text-background/30 transition-all group-hover:text-background/70" />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="flex items-center bg-background px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="w-full max-w-lg">
          <FadeIn delay={0.05}>
            <p className="mb-8 font-mono text-xs text-ink-subtle">
              Or send a message directly
            </p>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
