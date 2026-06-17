import type { CefrLevel } from "@/types";
import { CEFR_META } from "@/lib/cefr";
import { cn } from "@/lib/utils";

const RING: Record<CefrLevel, string> = {
  B1: "bg-cefr-b1/12 text-cefr-b1 ring-cefr-b1/25",
  B2: "bg-cefr-b2/12 text-cefr-b2 ring-cefr-b2/25",
  C1: "bg-cefr-c1/12 text-cefr-c1 ring-cefr-c1/25",
  C2: "bg-cefr-c2/12 text-cefr-c2 ring-cefr-c2/25",
};

export function CefrBadge({
  level,
  className,
  showName = false,
}: {
  level: CefrLevel;
  className?: string;
  showName?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ring-1 ring-inset",
        RING[level],
        className,
      )}
    >
      {level}
      {showName && <span className="font-medium opacity-80">· {CEFR_META[level].name}</span>}
    </span>
  );
}
