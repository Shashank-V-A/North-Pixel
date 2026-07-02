import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-32">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-ink-subtle">404</p>
        <h1 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.02em] text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
