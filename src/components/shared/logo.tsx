import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  variant?: "default" | "large";
  className?: string;
  href?: string | null;
};

export function Logo({
  variant = "default",
  className,
  href = "/",
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-heading font-semibold tracking-[-0.02em] text-foreground",
          variant === "large" ? "text-xl" : "text-base"
        )}
      >
        {siteConfig.name}
      </span>
      {variant === "large" && (
        <span className="mt-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-subtle">
          Studio
        </span>
      )}
    </span>
  );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="inline-flex transition-opacity hover:opacity-80"
      aria-label={`${siteConfig.name} home`}
    >
      {content}
    </Link>
  );
}
