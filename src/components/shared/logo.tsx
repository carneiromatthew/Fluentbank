import { cn } from "@/lib/utils";

/** FluentBank wordmark: a stylised vault/coin glyph + name. */
export function Logo({
  className,
  iconOnly = false,
  size = 32,
}: {
  className?: string;
  iconOnly?: boolean;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className="gradient-vault relative grid place-items-center rounded-xl text-white shadow-sm"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" fill="none" style={{ width: size * 0.62, height: size * 0.62 }}>
          {/* Upward "growth" arc + deposit slot */}
          <path
            d="M5 16.5c2.2-4.8 5-7.2 8.4-7.2 1.6 0 2.9.5 3.9 1.4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M14.5 9.6h3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9" y="17.6" width="6" height="1.8" rx="0.9" fill="currentColor" />
        </svg>
      </span>
      {!iconOnly && (
        <span className="text-lg font-bold tracking-tight">
          Fluent<span className="text-primary">Bank</span>
        </span>
      )}
    </span>
  );
}
