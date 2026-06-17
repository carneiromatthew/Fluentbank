import { AppShell } from "@/components/app/app-shell";
import { HydrationGate } from "@/components/shared/hydration-gate";

export default function AppGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <HydrationGate>
      <AppShell>{children}</AppShell>
    </HydrationGate>
  );
}
