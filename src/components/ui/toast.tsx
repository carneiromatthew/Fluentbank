"use client";

import * as React from "react";
import { create } from "zustand";
import { CheckCircle2, Trophy, Sparkles, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastKind = "deposit" | "achievement" | "levelup" | "info";

interface Toast {
  id: string;
  kind: ToastKind;
  title: string;
  description?: string;
}

interface ToastStore {
  toasts: Toast[];
  push: (t: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
}

export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  push: (t) => {
    const id = Math.random().toString(36).slice(2);
    set((s) => ({ toasts: [...s.toasts, { ...t, id }] }));
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })), 3800);
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })),
}));

const ICONS: Record<ToastKind, React.ReactNode> = {
  deposit: <CheckCircle2 className="h-5 w-5 text-success" />,
  achievement: <Trophy className="h-5 w-5 text-warning" />,
  levelup: <Sparkles className="h-5 w-5 text-cefr-c1" />,
  info: <Info className="h-5 w-5 text-primary" />,
};

export function Toaster() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-[100] flex flex-col items-center gap-2 px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:top-auto sm:items-end">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto flex w-full max-w-sm animate-fade-in-up items-start gap-3 rounded-2xl border bg-card/95 p-4 shadow-lg backdrop-blur"
          role="status"
        >
          <div className="mt-0.5 shrink-0">{ICONS[t.kind]}</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-tight">{t.title}</p>
            {t.description && (
              <p className="mt-0.5 text-xs text-muted-foreground">{t.description}</p>
            )}
          </div>
          <button
            onClick={() => dismiss(t.id)}
            className="shrink-0 rounded-md p-0.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
