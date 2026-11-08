"use client";
import { useId } from "react";

type P = { size?: number; className?: string };

function Defs({ id, from, to }: { id: string; from: string; to: string }) {
  return (
    <defs>
      <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
      <linearGradient id={`${id}s`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity=".55" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <filter id={`${id}f`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>
  );
}

function Frame({ id, from, to, size = 56, className, children }: P & { id: string; from: string; to: string; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <Defs id={id} from={from} to={to} />
      <rect x="2" y="2" width="60" height="60" rx="18" fill={`url(#${id}g)`} opacity=".14" />
      <rect x="2.5" y="2.5" width="59" height="59" rx="17.5" stroke={`url(#${id}g)`} strokeOpacity=".45" />
      <g filter={`url(#${id}f)`} opacity=".55">{children}</g>
      <g>{children}</g>
    </svg>
  );
}

export function WaterIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#7dd3fc" to="#2563eb" {...p}>
      <path d="M32 12c7 9 13 16 13 24a13 13 0 0 1-26 0c0-8 6-15 13-24Z" fill={`url(#${id}g)`} />
      <path d="M22 37c3 2 6 2 10 0s7-2 10 0" stroke="#e0f2fe" strokeWidth="2.4" strokeLinecap="round" opacity=".9" />
      <path d="M27 24c-2 3-3 5-3 8" stroke={`url(#${id}s)`} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  );
}

export function FoodIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#6ee7b7" to="#059669" {...p}>
      <ellipse cx="32" cy="18" rx="12" ry="4" fill="#a7f3d0" />
      <path d="M20 18v26c0 2.2 5.4 4 12 4s12-1.8 12-4V18c0 2.2-5.4 4-12 4s-12-1.8-12-4Z" fill={`url(#${id}g)`} />
      <rect x="20" y="27" width="24" height="10" fill="#ecfdf5" opacity=".85" />
      <path d="M28 32h8" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M23 21v20" stroke={`url(#${id}s)`} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  );
}

export function EnergyIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#fde68a" to="#f59e0b" {...p}>
      <rect x="18" y="16" width="28" height="36" rx="6" fill={`url(#${id}g)`} />
      <rect x="27" y="11" width="10" height="6" rx="2" fill="#fde68a" />
      <path d="M34 21l-8 13h7l-3 11 9-14h-7l2-10Z" fill="#451a03" />
      <path d="M21 20v26" stroke={`url(#${id}s)`} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  );
}

export function HealthIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#c4b5fd" to="#7c3aed" {...p}>
      <path d="M32 10l18 7v13c0 11-8 19-18 23-10-4-18-12-18-23V17l18-7Z" fill={`url(#${id}g)`} />
      <path d="M29 22h6v7h7v6h-7v7h-6v-7h-7v-6h7v-7Z" fill="#f5f3ff" />
      <path d="M18 19v11c0 5 2 9 5 13" stroke={`url(#${id}s)`} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  );
}

export function FamilyIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#f9a8d4" to="#db2777" {...p}>
      <circle cx="23" cy="22" r="6" fill={`url(#${id}g)`} />
      <circle cx="41" cy="22" r="6" fill={`url(#${id}g)`} />
      <circle cx="32" cy="32" r="4.5" fill="#fce7f3" />
      <path d="M12 47c0-8 5-13 11-13 3 0 5 1 7 3-3 2-5 6-5 10H12Z" fill={`url(#${id}g)`} />
      <path d="M52 47c0-8-5-13-11-13-3 0-5 1-7 3 3 2 5 6 5 10h13Z" fill={`url(#${id}g)`} />
      <path d="M24 49c0-6 3-10 8-10s8 4 8 10H24Z" fill="#fce7f3" />
    </Frame>
  );
}

export function EvacIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#67e8f9" to="#0e7490" {...p}>
      <path d="M26 16a6 6 0 0 1 12 0v3h-3v-3a3 3 0 0 0-6 0v3h-3v-3Z" fill="#a5f3fc" />
      <rect x="17" y="19" width="30" height="33" rx="9" fill={`url(#${id}g)`} />
      <rect x="23" y="33" width="18" height="12" rx="3" fill="#ecfeff" opacity=".9" />
      <path d="M23 38h18" stroke="#0e7490" strokeWidth="2" />
      <path d="M21 25v20" stroke={`url(#${id}s)`} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  );
}

export function GlobeIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#a5b4fc" to="#4f46e5" {...p}>
      <circle cx="32" cy="32" r="18" fill={`url(#${id}g)`} />
      <path d="M14 32h36M32 14c6 6 6 30 0 36M32 14c-6 6-6 30 0 36" stroke="#e0e7ff" strokeWidth="2" opacity=".85" />
      <path d="M18 24c7 3 21 3 28 0M18 40c7-3 21-3 28 0" stroke="#e0e7ff" strokeWidth="1.6" opacity=".6" />
    </Frame>
  );
}

export function PrintIcon(p: P) {
  const id = useId().replace(/:/g, "");
  return (
    <Frame id={id} from="#e2e8f0" to="#64748b" {...p}>
      <rect x="21" y="12" width="22" height="14" rx="2" fill="#f8fafc" />
      <rect x="13" y="24" width="38" height="20" rx="6" fill={`url(#${id}g)`} />
      <rect x="21" y="36" width="22" height="16" rx="2" fill="#f8fafc" />
      <path d="M25 41h14M25 46h10" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="30" r="2" fill="#34d399" />
    </Frame>
  );
}

export function ShieldLogo({ size = 30 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset=".6" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <path d="M16 2l12 5v8c0 7.5-5.2 12.8-12 15C9.2 27.8 4 22.5 4 15V7l12-5Z" fill={`url(#${id})`} />
      <path d="M10.5 16l4 4 7-8" stroke="#05231b" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const CategoryIcon = ({ id, size }: { id: string; size?: number }) => {
  const map: Record<string, (p: P) => React.ReactElement> = {
    water: WaterIcon,
    food: FoodIcon,
    energy: EnergyIcon,
    health: HealthIcon,
    family: FamilyIcon,
    evac: EvacIcon,
    globe: GlobeIcon,
    print: PrintIcon,
  };
  const C = map[id] ?? GlobeIcon;
  return <C size={size} />;
};
