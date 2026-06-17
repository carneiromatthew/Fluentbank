import type { Category } from "@/types";
import { CATEGORY_META } from "@/lib/categories";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export function CategoryChip({
  category,
  className,
  iconOnly = false,
}: {
  category: Category;
  className?: string;
  iconOnly?: boolean;
}) {
  const meta = CATEGORY_META[category];
  if (!meta) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
        meta.chip,
        className,
      )}
    >
      <Icon name={meta.icon} className="h-3 w-3" />
      {!iconOnly && <span>{category}</span>}
    </span>
  );
}
