import { icons, type LucideProps } from "lucide-react";
import { HelpCircle } from "lucide-react";

interface IconProps extends LucideProps {
  /** A lucide-react icon name, e.g. "Plane", "TrendingUp". */
  name: string;
}

/** Render a lucide icon by name, with a graceful fallback. */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? HelpCircle;
  return <Cmp {...props} />;
}
