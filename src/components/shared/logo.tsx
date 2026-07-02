import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { LogoMark } from "@/components/shared/logo-mark";

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
  const markSize = variant === "large" ? 36 : 28;

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={markSize} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-semibold tracking-[-0.03em] text-foreground",
            variant === "large" ? "text-lg" : "text-[0.9375rem]"
          )}
        >
          North
        </span>
        <span
          className={cn(
            "font-mono uppercase tracking-[0.2em] text-foreground/80",
            variant === "large" ? "mt-1 text-[0.6875rem]" : "mt-0.5 text-[0.5625rem]"
          )}
        >
          Pixel
        </span>
      </span>
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
