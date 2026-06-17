import {
  LayoutDashboard,
  Sparkles,
  Wallet,
  Dumbbell,
  LineChart,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Shown in the mobile bottom bar (kept to 5 primary items). */
  primary: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, primary: true },
  { href: "/discover", label: "Discover", icon: Sparkles, primary: true },
  { href: "/portfolio", label: "Portfolio", icon: Wallet, primary: true },
  { href: "/practice", label: "Practice", icon: Dumbbell, primary: true },
  { href: "/analytics", label: "Analytics", icon: LineChart, primary: false },
  { href: "/achievements", label: "Achievements", icon: Trophy, primary: true },
];
