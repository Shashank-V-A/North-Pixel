import { Logo } from "@/components/shared/logo";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="border-b border-border bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-12 md:px-8 md:py-16">
          <Logo variant="large" href="/" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Premium web design and development for local businesses.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
