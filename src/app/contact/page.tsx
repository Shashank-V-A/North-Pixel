import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { XIcon, InstagramIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch to book a free consultation. Reach out via WhatsApp, email, X, or Instagram.",
  path: "/contact",
});

const contactMethods = [
  {
    key: "email",
    label: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.links.email,
    icon: Mail,
    external: false,
  },
  {
    key: "x",
    label: "X (Twitter)",
    value: "@northpixel",
    href: siteConfig.links.x,
    icon: XIcon,
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    value: "@northpixel",
    href: siteConfig.links.instagram,
    icon: InstagramIcon,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <Section size="lg" className="border-b border-border">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
              Contact
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tell me about your business and what you&apos;re looking for. I
              typically respond within 24 hours.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
                  <div className="inline-flex rounded-xl bg-accent/8 p-2.5 text-accent">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <div className="mt-1 flex flex-col gap-1">
                      {siteConfig.contact.whatsapp.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {item.display}
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
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="inline-flex rounded-xl bg-accent/8 p-2.5 text-accent">
                      <method.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {method.label}
                      </p>
                      <p className="mt-0.5 font-medium text-foreground group-hover:text-accent">
                        {method.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
