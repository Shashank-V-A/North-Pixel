import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-32">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Logo variant="full" href={null} />
        </div>
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
