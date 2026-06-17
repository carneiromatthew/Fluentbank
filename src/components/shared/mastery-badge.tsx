import type { MasteryStatus } from "@/types";
import { Sprout, BookOpen, ShieldCheck, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

export const MASTERY_META: Record<
  MasteryStatus,
  { label: string; icon: typeof Sprout; className: string; dot: string }
> = {
  new: {
    label: "New",
    icon: Sprout,
    className: "bg-muted text-muted-foreground",
    dot: "bg-muted-foreground",
  },
  learning: {
    label: "Learning",
    icon: BookOpen,
    className: "bg-cefr-b1/12 text-cefr-b1",
    dot: "bg-cefr-b1",
  },
  known: {
    label: "Known",
    icon: ShieldCheck,
    className: "bg-cefr-b2/12 text-cefr-b2",
    dot: "bg-cefr-b2",
  },
  mastered: {
    label: "Mastered",
    icon: Gem,
    className: "bg-success/15 text-success",
    dot: "bg-success",
  },
};

export function MasteryBadge({
  status,
  className,
  withIcon = true,
}: {
  status: MasteryStatus;
  className?: string;
  withIcon?: boolean;
}) {
  const meta = MASTERY_META[status];
  const IconCmp = meta.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
        meta.className,
        className,
      )}
    >
      {withIcon ? (
        <IconCmp className="h-3 w-3" />
      ) : (
        <span className={cn("h-1.5 w-1.5 rounded-full", meta.dot)} />
      )}
      {meta.label}
    </span>
  );
}
