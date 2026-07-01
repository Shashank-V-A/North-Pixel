import { cn } from "@/lib/utils";
import { logoMarkSvgElement } from "@/lib/logo-mark-svg";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span className={cn("inline-flex size-full", className)}>
      {logoMarkSvgElement({ className: "size-full" })}
    </span>
  );
}
