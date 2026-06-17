import { cn } from "@/lib/utils";

export function StatTile({
  label,
  value,
  sublabel,
  icon,
  accent = "primary",
  className,
}: {
  label: string;
  value: React.ReactNode;
  sublabel?: React.ReactNode;
  icon?: React.ReactNode;
  accent?: "primary" | "warning" | "success" | "cefr-c1";
  className?: string;
}) {
  const accentMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    warning: "bg-warning/15 text-warning",
    success: "bg-success/15 text-success",
    "cefr-c1": "bg-cefr-c1/12 text-cefr-c1",
  };
  return (
    <div className={cn("rounded-2xl border bg-card p-4 shadow-sm sm:p-5", className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        {icon && (
          <span className={cn("grid h-8 w-8 place-items-center rounded-lg", accentMap[accent])}>
            {icon}
          </span>
        )}
      </div>
      <p className="mt-2 text-3xl font-bold tnum">{value}</p>
      {sublabel && <p className="mt-0.5 text-xs text-muted-foreground">{sublabel}</p>}
    </div>
  );
}
