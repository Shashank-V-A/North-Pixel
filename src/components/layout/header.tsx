"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { navLinks } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-subtle backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            const index = String(i + 1).padStart(2, "0");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors duration-200",
                  active
                    ? "font-semibold text-foreground"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[0.6875rem] tabular-nums transition-colors",
                    active
                      ? "text-foreground"
                      : "text-foreground/70 group-hover:text-foreground"
                  )}
                >
                  {index}
                </span>
                {link.label}
                {active && (
                  <span className="absolute -bottom-[1.125rem] left-3 right-3 h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/contact">Book a call</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="mb-6 border-b border-border pb-6">
            <Logo variant="large" href={null} />
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link, i) => {
              const index = String(i + 1).padStart(2, "0");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors",
                    pathname === link.href
                      ? "bg-foreground text-background"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span className="font-mono text-xs tabular-nums text-foreground/70">
                    {index}
                  </span>
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-4 w-full" size="lg">
              <Link href="/contact" onClick={closeMobile}>
                Book a call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
