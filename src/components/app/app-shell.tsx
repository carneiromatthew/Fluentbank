"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Flame, Coins, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/components/app/nav-config";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/app/theme-toggle";
import { useStore, useLevelInfo } from "@/store/useStore";
import { rankTitle } from "@/lib/xp";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const profile = useStore((s) => s.profile);
  const hydrated = useStore((s) => s.hydrated);

  // Gate the app behind onboarding once we know there's no profile.
  React.useEffect(() => {
    if (hydrated && !profile) router.replace("/onboarding");
  }, [hydrated, profile, router]);

  return (
    <div className="min-h-dvh lg:flex">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r bg-card/40 px-4 py-5 lg:flex">
        <Link href="/dashboard" className="px-2">
          <Logo />
        </Link>
        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            const IconCmp = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <IconCmp className="h-[18px] w-[18px]" />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/settings"
            className={cn(
              "mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              pathname.startsWith("/settings")
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Settings className="h-[18px] w-[18px]" />
            Settings
          </Link>
        </nav>
        <SidebarFooter />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
          <Link href="/dashboard">
            <Logo size={28} />
          </Link>
          <div className="flex items-center gap-1">
            <HeaderStats />
            <Button asChild variant="ghost" size="icon" aria-label="Settings">
              <Link href="/settings">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        {/* Desktop top bar */}
        <header className="sticky top-0 z-30 hidden items-center justify-end gap-3 border-b bg-background/80 px-6 py-3 backdrop-blur lg:flex">
          <HeaderStats />
          <ThemeToggle />
        </header>

        <main className="flex-1 pb-24 lg:pb-10">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t bg-background/95 backdrop-blur lg:hidden">
        {NAV_ITEMS.filter((i) => i.primary).map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const IconCmp = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <IconCmp className={cn("h-5 w-5", active && "scale-110")} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function HeaderStats() {
  const xp = useStore((s) => s.xp);
  const streak = useStore((s) => s.currentStreak);
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center gap-1 rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold text-warning-foreground">
        <Flame className="h-3.5 w-3.5 text-warning" />
        <span className="tnum">{streak}</span>
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
        <Coins className="h-3.5 w-3.5" />
        <span className="tnum">{formatNumber(xp)}</span>
        <span className="hidden sm:inline">XP</span>
      </span>
    </div>
  );
}

function SidebarFooter() {
  const profile = useStore((s) => s.profile);
  const level = useLevelInfo();
  return (
    <div className="mt-2 rounded-2xl border bg-background/60 p-3">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-vault text-sm font-bold text-white">
          {level.level}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{profile?.displayName ?? "Investor"}</p>
          <p className="truncate text-xs text-muted-foreground">{rankTitle(level.level)}</p>
        </div>
      </div>
      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${Math.round(level.progress * 100)}%` }}
        />
      </div>
      <p className="mt-1.5 text-[11px] text-muted-foreground tnum">
        {level.intoLevel} / {level.levelSpan} XP to level {level.level + 1}
      </p>
    </div>
  );
}
