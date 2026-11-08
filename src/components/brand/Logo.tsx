"use client";
import { useId } from "react";

/**
 * Haven72 márkajel.
 * Koncepció: ház és pajzs egyben (menedék). Benne három sáv = három nap (72 óra),
 * a legfelső sáv helyén egy fénypont: az otthon, ami világít.
 */

import { BRAND } from "./tokens";
export { BRAND };

type MarkProps = { size?: number; mono?: "light" | "dark" | false; className?: string; glow?: boolean };

export function Mark({ size = 32, mono = false, className, glow = false }: MarkProps) {
  const id = useId().replace(/:/g, "");
  const stroke = mono === "light" ? "#ffffff" : mono === "dark" ? BRAND.ink : `url(#${id}g)`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}g`} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={BRAND.gradient[0]} />
          <stop offset=".55" stopColor={BRAND.gradient[1]} />
          <stop offset="1" stopColor={BRAND.gradient[2]} />
        </linearGradient>
        <filter id={`${id}f`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      {glow && !mono && (
        <path d="M32 6 L56 22 V46 Q56 58 44 58 H20 Q8 58 8 46 V22 Z" stroke={stroke} strokeWidth="5" strokeLinejoin="round" filter={`url(#${id}f)`} opacity=".6" />
      )}
      {/* ház-pajzs körvonal */}
      <path d="M32 6 L56 22 V46 Q56 58 44 58 H20 Q8 58 8 46 V22 Z" stroke={stroke} strokeWidth="4.5" strokeLinejoin="round" />
      {/* 3 nap: két sáv + fénypont */}
      <rect x="20" y="42" width="24" height="5" rx="2.5" fill={stroke} />
      <rect x="24" y="32" width="16" height="5" rx="2.5" fill={stroke} />
      <circle cx="32" cy="24" r="3.5" fill={stroke} />
    </svg>
  );
}

export function Wordmark({ size = 20, mono = false, className }: { size?: number; mono?: "light" | "dark" | false; className?: string }) {
  const color = mono === "dark" ? BRAND.ink : "#fff";
  return (
    <span className={`font-display inline-flex items-baseline font-bold tracking-[-0.03em] ${className ?? ""}`} style={{ fontSize: size, lineHeight: 1, color }}>
      Haven
      <span className={mono ? "" : "text-grad"} style={{ fontWeight: 800 }}>72</span>
    </span>
  );
}

export function Lockup({ size = 20, mono = false, className }: { size?: number; mono?: "light" | "dark" | false; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark size={size * 1.55} mono={mono} />
      <Wordmark size={size} mono={mono} />
    </span>
  );
}
