import { Logo } from "@/components/shared/logo";
import {
  EmailIcon,
  WhatsAppIcon,
  XIcon,
  InstagramIcon,
} from "@/components/shared/brand-icons";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  {
    key: "whatsapp",
    href: siteConfig.contact.whatsapp[0].href,
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    key: "x",
    href: siteConfig.links.x,
    label: "X",
    icon: XIcon,
  },
  {
    key: "instagram",
    href: siteConfig.links.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-5 md:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Logo />
            <p className="hidden text-xs font-medium text-foreground lg:block">
              &copy; {currentYear} {siteConfig.name}
            </p>
          </div>

          <nav className="flex items-center gap-2" aria-label="Social links">
            {socialLinks.map(({ key, href, label, icon: Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-lg transition-opacity hover:opacity-70"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </nav>

          <p className="flex items-center gap-2 text-xs font-medium text-foreground">
            <EmailIcon className="size-4 shrink-0" aria-hidden="true" />
            <span>{siteConfig.contact.email}</span>
          </p>
        </div>

        <p className="mt-4 text-xs font-medium text-foreground lg:hidden">
          &copy; {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
