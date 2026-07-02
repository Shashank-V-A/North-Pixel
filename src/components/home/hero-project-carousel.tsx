"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 3000;

export function HeroProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <div
      className="relative w-full min-w-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="absolute -inset-4 rounded-3xl bg-foreground/5 blur-2xl" />
      <div className="relative w-full min-w-0 overflow-hidden rounded-2xl bg-foreground p-2 shadow-elevated md:p-3">
        <div className="w-full min-w-0 overflow-hidden">
          {prefersReducedMotion ? (
            <BrowserMockup project={activeProject} size="large" />
          ) : (
            <motion.div
              className="flex"
              style={{ width: `${projects.length * 100}%` }}
              animate={{
                x: `-${activeIndex * (100 / projects.length)}%`,
              }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="shrink-0"
                  style={{ width: `${100 / projects.length}%` }}
                >
                  <BrowserMockup project={project} size="large" />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeProject.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-center font-mono text-xs text-ink-subtle"
          >
            {activeProject.title} — {activeProject.category}
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/25 hover:bg-foreground/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
