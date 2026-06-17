// Browser Supabase client (singleton). The app is local-first by default; this
// is only used when NEXT_PUBLIC_USE_SUPABASE=true and credentials are present.
//
// The persistence sync layer (writing the Zustand store through to these tables)
// is intentionally left as a thin, well-typed seam: wire `recordAnswer` /
// `finalizeSession` to upserts here when you turn Supabase on.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True when Supabase is configured and explicitly enabled. */
export function isSupabaseEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_USE_SUPABASE === "true" && Boolean(url) && Boolean(anonKey)
  );
}

let client: SupabaseClient<Database> | null = null;

/**
 * Returns the shared browser client, or null when Supabase isn't configured —
 * callers should fall back to the local store in that case.
 */
export function getSupabaseClient(): SupabaseClient<Database> | null {
  if (!url || !anonKey) return null;
  if (!client) {
    client = createClient<Database>(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });
  }
  return client;
}
