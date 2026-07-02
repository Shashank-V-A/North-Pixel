import { Logo } from "@/components/shared/logo";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-5 md:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Logo />
            <p className="hidden text-xs text-ink-subtle lg:block">
              &copy; {currentYear} {siteConfig.name}
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-1"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteConfig.links.email}
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <p className="mt-4 text-xs text-ink-subtle lg:hidden">
          &copy; {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
