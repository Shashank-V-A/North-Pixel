import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  variant?: "default" | "large";
  className?: string;
  href?: string | null;
  priority?: boolean;
};

const LOGO_WIDTH = 242;
const LOGO_HEIGHT = 67;

export function Logo({
  variant = "default",
  className,
  href = "/",
  priority = false,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn(
          "h-auto w-auto select-none object-contain",
          variant === "large" ? "max-h-16 md:max-h-20" : "max-h-8 md:max-h-9"
        )}
      />
    </span>
  );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="inline-flex transition-opacity hover:opacity-90"
      aria-label={`${siteConfig.name} home`}
    >
      {content}
    </Link>
  );
}
