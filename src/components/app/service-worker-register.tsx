"use client";

import { useEffect } from "react";

/**
 * Registers the offline service worker (`app/sw.js/route.ts`) in production.
 * Skipped in dev, where cached chunks would fight hot reload. Also asks the
 * browser to keep this origin's storage, since progress lives in localStorage.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
    void navigator.storage?.persist?.().catch(() => {});
  }, []);
  return null;
}
