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

/* ── Helyzet-ikonok ───────────────────────────────────────── */
function mk(from: string, to: string, draw: (id: string) => React.ReactNode) {
  return function Icon(p: P) {
    const id = useId().replace(/:/g, "");
    return (
      <Frame id={id} from={from} to={to} {...p}>
        {draw(id)}
      </Frame>
    );
  };
}

export const SirenIcon = mk("#fca5a5", "#dc2626", (id) => (
  <>
    <path d="M22 44V34a10 10 0 0 1 20 0v10Z" fill={`url(#${id}g)`} />
    <rect x="18" y="44" width="28" height="6" rx="2" fill="#fecaca" />
    <path d="M32 14v5M18 19l3.5 3.5M46 19l-3.5 3.5M12 31h5M47 31h5" stroke="#fecaca" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M27 34a5 5 0 0 1 5-5" stroke={`url(#${id}s)`} strokeWidth="3" strokeLinecap="round" />
  </>
));
export const BlackoutIcon = mk("#fde68a", "#d97706", (id) => (
  <>
    <path d="M32 12a13 13 0 0 0-7 24v5h14v-5a13 13 0 0 0-7-24Z" fill={`url(#${id}g)`} />
    <rect x="25" y="43" width="14" height="4" rx="2" fill="#fef3c7" />
    <rect x="27" y="49" width="10" height="3" rx="1.5" fill="#fef3c7" opacity=".7" />
    <path d="M14 14l36 36" stroke="#fff7ed" strokeWidth="3" strokeLinecap="round" />
  </>
));
export const RadiationIcon = mk("#bef264", "#65a30d", (id) => (
  <>
    <circle cx="32" cy="32" r="20" fill={`url(#${id}g)`} />
    <circle cx="32" cy="32" r="4" fill="#1a2e05" />
    {[0, 120, 240].map((r) => (
      <path key={r} d="M32 26 L26 15.6 A17 17 0 0 1 38 15.6 Z" fill="#1a2e05" transform={`rotate(${r} 32 32)`} />
    ))}
  </>
));
export const FloodIcon = mk("#93c5fd", "#1d4ed8", (id) => (
  <>
    <path d="M18 34 32 22l14 12v6H18Z" fill="#dbeafe" opacity=".9" />
    <path d="M10 40c4 3 8 3 11 0s7-3 11 0 7 3 11 0 7-3 11 0v12H10Z" fill={`url(#${id}g)`} />
    <path d="M10 48c4 3 8 3 11 0s7-3 11 0 7 3 11 0 7-3 11 0" stroke="#eff6ff" strokeWidth="2" strokeLinecap="round" opacity=".8" />
  </>
));
export const HeatIcon = mk("#fdba74", "#ea580c", (id) => (
  <>
    <circle cx="32" cy="32" r="10" fill={`url(#${id}g)`} />
    {Array.from({ length: 8 }).map((_, i) => (
      <path key={i} d="M32 12v6" stroke="#ffedd5" strokeWidth="3" strokeLinecap="round" transform={`rotate(${i * 45} 32 32)`} />
    ))}
  </>
));
export const ColdIcon = mk("#bae6fd", "#0284c7", (id) => (
  <>
    {[0, 60, 120].map((r) => (
      <g key={r} transform={`rotate(${r} 32 32)`}>
        <path d="M32 12v40" stroke={`url(#${id}g)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M26 16l6 5 6-5M26 48l6-5 6 5" stroke="#e0f2fe" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ))}
  </>
));
export const FireIcon = mk("#fda4af", "#e11d48", (id) => (
  <>
    <path d="M32 12c2 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 1 4 3 6 5 6-1-6 0-12 2-18Z" fill={`url(#${id}g)`} />
    <path d="M32 34c3 3 5 5 5 8a5 5 0 0 1-10 0c0-3 2-5 5-8Z" fill="#ffe4e6" />
  </>
));
export const RunIcon = mk("#67e8f9", "#0891b2", (id) => (
  <>
    <circle cx="35" cy="15" r="4.5" fill="#cffafe" />
    <path d="M33 22 26 30l6 4-3 14M33 22l7 8 6 1M30 34l-9 6" stroke={`url(#${id}g)`} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 44h8m0 0-3-3m3 3-3 3" stroke="#cffafe" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </>
));
export const SignalIcon = mk("#c4b5fd", "#7c3aed", (id) => (
  <>
    <rect x="14" y="38" width="7" height="12" rx="2" fill={`url(#${id}g)`} />
    <rect x="25" y="30" width="7" height="20" rx="2" fill={`url(#${id}g)`} />
    <rect x="36" y="22" width="7" height="28" rx="2" fill={`url(#${id}g)`} opacity=".35" />
    <path d="M46 14l8 8m0-8-8 8" stroke="#ede9fe" strokeWidth="3" strokeLinecap="round" />
  </>
));
export const VirusIcon = mk("#f9a8d4", "#db2777", (id) => (
  <>
    <circle cx="32" cy="32" r="12" fill={`url(#${id}g)`} />
    {Array.from({ length: 8 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 45} 32 32)`}>
        <path d="M32 20v-6" stroke="#fce7f3" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="32" cy="12.5" r="2.5" fill="#fce7f3" />
      </g>
    ))}
    <circle cx="28" cy="29" r="2.5" fill="#fce7f3" opacity=".7" />
  </>
));
export const BulbIcon = mk("#fef08a", "#22d3ee", (id) => (
  <>
    <path d="M32 12a13 13 0 0 0-7 24v5h14v-5a13 13 0 0 0-7-24Z" fill={`url(#${id}g)`} />
    <rect x="25" y="43" width="14" height="4" rx="2" fill="#ecfeff" />
    <path d="M28 22a7 7 0 0 1 4-2" stroke={`url(#${id}s)`} strokeWidth="3" strokeLinecap="round" />
  </>
));

export const GUIDE_ICONS: Record<string, (p: P) => React.ReactElement> = {
  war_airraid: SirenIcon,
  blackout: BlackoutIcon,
  nuclear: RadiationIcon,
  flood: FloodIcon,
  heat: HeatIcon,
  cold: ColdIcon,
  fire: FireIcon,
  evacuation: RunIcon,
  cyber: SignalIcon,
  pandemic: VirusIcon,
};
export function GuideIcon({ id, ...p }: P & { id: string }) {
  const I = GUIDE_ICONS[id] ?? BulbIcon;
  return <I {...p} />;
}
