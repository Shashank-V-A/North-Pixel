"use client";

import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

type BrowserMockupProps = {
  project: Pick<Project, "title" | "category" | "accent" | "accentLight">;
  className?: string;
  size?: "default" | "large";
};

export function BrowserMockup({
  project,
  className,
  size = "default",
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-surface shadow-subtle transition-[border-color,box-shadow] duration-200 hover:border-foreground/15",
        size === "large" && "rounded-2xl",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-surface px-3">
          <span className="truncate text-[10px] text-muted-foreground">
            {project.title.toLowerCase().replace(/\s+/g, "")}.com
          </span>
        </div>
        <div className="w-12" />
      </div>

      {/* Site preview */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ backgroundColor: project.accentLight }}
      >
        {/* Nav bar */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: project.accent }}
        >
          <div className="h-2 w-16 rounded-full bg-white/20" />
          <div className="hidden gap-4 sm:flex">
            <div className="h-1.5 w-10 rounded-full bg-white/15" />
            <div className="h-1.5 w-10 rounded-full bg-white/15" />
            <div className="h-1.5 w-10 rounded-full bg-white/15" />
            <div className="h-1.5 w-10 rounded-full bg-white/15" />
          </div>
          <div className="h-6 w-16 rounded-md bg-white/20" />
        </div>

        {/* Hero area */}
        <div className="flex flex-col items-center justify-center px-8 py-10 text-center">
          <div
            className="mb-3 h-2 w-24 rounded-full opacity-30"
            style={{ backgroundColor: project.accent }}
          />
          <div
            className="mb-2 h-3 w-48 max-w-full rounded-full"
            style={{ backgroundColor: project.accent }}
          />
          <div
            className="mb-6 h-2 w-32 rounded-full opacity-40"
            style={{ backgroundColor: project.accent }}
          />
          <div
            className="h-7 w-28 rounded-lg"
            style={{ backgroundColor: project.accent }}
          />
        </div>

        {/* Content blocks */}
        <div className="grid grid-cols-3 gap-3 px-6 pb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl p-3"
              style={{ backgroundColor: `${project.accent}08` }}
            >
              <div
                className="mb-2 aspect-[4/3] rounded-lg"
                style={{ backgroundColor: `${project.accent}15` }}
              />
              <div
                className="mb-1.5 h-1.5 w-3/4 rounded-full"
                style={{ backgroundColor: `${project.accent}25` }}
              />
              <div
                className="h-1 w-1/2 rounded-full opacity-60"
                style={{ backgroundColor: `${project.accent}20` }}
              />
            </div>
          ))}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="w-full p-4">
            <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
