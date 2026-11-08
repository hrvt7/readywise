import { ImageResponse } from "next/og";


export const alt = "Haven72 – Három nap nyugalom. Előre.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#06080f", color: "#f2f4f9", fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", right: -120, top: -160, width: 520, height: 520, borderRadius: 999, background: "radial-gradient(circle, rgba(129,140,248,.35), transparent 65%)" }} />
        <div style={{ position: "absolute", left: -140, bottom: -200, width: 560, height: 560, borderRadius: 999, background: "radial-gradient(circle, rgba(52,211,153,.28), transparent 65%)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M32 6 L56 22 V46 Q56 58 44 58 H20 Q8 58 8 46 V22 Z" stroke="#22d3ee" strokeWidth="4.5" strokeLinejoin="round" />
              <rect x="20" y="42" width="24" height="5" rx="2.5" fill="#34d399" />
              <rect x="24" y="32" width="16" height="5" rx="2.5" fill="#22d3ee" />
              <circle cx="32" cy="24" r="3.5" fill="#818cf8" />
            </svg>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, display: "flex" }}>Haven<span style={{ color: "#22d3ee" }}>72</span></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Három nap nyugalom.</div>
            <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -4, lineHeight: 1, color: "#34d399" }}>Előre.</div>
            <div style={{ fontSize: 28, color: "#9aa6bf", marginTop: 10 }}>72 órás felkészülési terv a háztartásodra · hivatalos források · 10 perc</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
