import type { Category } from "@/types";

export interface CategoryMeta {
  name: Category;
  /** lucide-react icon name. */
  icon: string;
  /** Tailwind utility for a soft tinted chip. */
  chip: string;
}

// Soft, on-brand tints. Kept intentionally calm — categories are wayfinding,
// not the star of the show.
export const CATEGORY_META: Record<Category, CategoryMeta> = {
  Travel: { name: "Travel", icon: "Plane", chip: "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300" },
  Business: { name: "Business", icon: "Briefcase", chip: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300" },
  Education: { name: "Education", icon: "GraduationCap", chip: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300" },
  Politics: { name: "Politics", icon: "Landmark", chip: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300" },
  Culture: { name: "Culture", icon: "Palette", chip: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950/50 dark:text-fuchsia-300" },
  "Daily Life": { name: "Daily Life", icon: "Coffee", chip: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300" },
  Technology: { name: "Technology", icon: "Cpu", chip: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300" },
  Academic: { name: "Academic", icon: "BookOpen", chip: "bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300" },
  Health: { name: "Health", icon: "HeartPulse", chip: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300" },
  Finance: { name: "Finance", icon: "TrendingUp", chip: "bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300" },
  Environment: { name: "Environment", icon: "Leaf", chip: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300" },
  Society: { name: "Society", icon: "Users", chip: "bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300" },
  Emotions: { name: "Emotions", icon: "Smile", chip: "bg-pink-50 text-pink-700 dark:bg-pink-950/50 dark:text-pink-300" },
  Law: { name: "Law", icon: "Scale", chip: "bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300" },
  Science: { name: "Science", icon: "FlaskConical", chip: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300" },
  Arts: { name: "Arts", icon: "Brush", chip: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300" },
};
