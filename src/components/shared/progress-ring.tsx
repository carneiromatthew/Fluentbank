import { cn } from "@/lib/utils";

export function ProgressRing({
  value,
  size = 72,
  strokeWidth = 7,
  className,
  trackClassName,
  indicatorClassName,
  children,
}: {
  /** 0–100. */
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  trackClassName?: string;
  indicatorClassName?: string;
  children?: React.ReactNode;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className={cn("stroke-muted", trackClassName)}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn("stroke-primary transition-[stroke-dashoffset] duration-700 ease-out", indicatorClassName)}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
}
