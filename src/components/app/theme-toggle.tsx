"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Applies the persisted theme before paint; injected once in <head>. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('fluentbank-theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("fluentbank-theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className={className}
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
