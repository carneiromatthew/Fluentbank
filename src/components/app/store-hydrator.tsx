"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

/**
 * Triggers Zustand persist rehydration on the client after mount. Paired with
 * `skipHydration: true`, this guarantees the first client render matches the
 * server output before localStorage is applied.
 */
export function StoreHydrator() {
  useEffect(() => {
    void useStore.persist.rehydrate();
  }, []);
  return null;
}
