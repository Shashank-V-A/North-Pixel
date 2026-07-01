import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { LogoMark } from "@/components/shared/logo-mark";

type LogoProps = {
  variant?: "full" | "icon" | "header";
  className?: string;
  href?: string | null;
  priority?: boolean;
};

function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading text-[15px] font-semibold tracking-[0.18em]",
        className
      )}
    >
      <span className="text-foreground">NORTH</span>
      <span className="mx-1.5 text-muted-foreground/50">—</span>
      <span className="text-accent">PIXEL</span>
    </span>
  );
}

export function Logo({
  variant = "icon",
  className,
  href = "/",
  priority = false,
}: LogoProps) {
  const content =
    variant === "full" ? (
      <span className={cn("inline-flex shrink-0", className)}>
        <Image
          src="/logo.png"
          alt={`${siteConfig.name} — ${siteConfig.tagline}`}
          width={240}
          height={300}
          priority={priority}
          className="h-auto w-[200px] select-none md:w-[240px]"
        />
      </span>
    ) : variant === "header" ? (
      <span className={cn("inline-flex items-center gap-3", className)}>
        <span className="size-9 shrink-0 md:size-10">
          <LogoMark />
        </span>
        <LogoWordmark />
      </span>
    ) : (
      <span
        className={cn("inline-flex size-9 shrink-0 md:size-10", className)}
      >
        <LogoMark />
      </span>
    );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="inline-flex transition-opacity hover:opacity-85"
      aria-label={`${siteConfig.name} home`}
    >
      {content}
    </Link>
  );
}
