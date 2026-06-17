"use client";

import { useStore } from "@/store/useStore";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Blocks rendering of persistence-dependent UI until the Zustand store has
 * rehydrated from localStorage — avoids React hydration mismatches between the
 * server-rendered shell and the client's stored state.
 */
export function HydrationGate({ children }: { children: React.ReactNode }) {
  const hydrated = useStore((s) => s.hydrated);
  if (!hydrated) {
    return (
      <div className="mx-auto w-full max-w-6xl space-y-4 p-4 sm:p-6">
        <Skeleton className="h-9 w-48" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28" />
          ))}
        </div>
        <Skeleton className="h-64" />
      </div>
    );
  }
  return <>{children}</>;
}
