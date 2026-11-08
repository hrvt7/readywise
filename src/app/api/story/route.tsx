import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import { CATEGORIES } from "@/lib/checklist";

export const runtime = "nodejs";

const W = 1080;
const H = 1920;

const fontFiles = [
  ["Unbounded", 800, "unbounded-latin-800-normal.woff"],
  ["Unbounded", 800, "unbounded-latin-ext-800-normal.woff"],
  ["Manrope", 500, "manrope-latin-500-normal.woff"],
  ["Manrope", 500, "manrope-latin-ext-500-normal.woff"],
  ["Manrope", 700, "manrope-latin-700-normal.woff"],
  ["Manrope", 700, "manrope-latin-ext-700-normal.woff"],
  ["Mono", 500, "jetbrains-mono-latin-500-normal.woff"],
  ["Mono", 500, "jetbrains-mono-latin-ext-500-normal.woff"],
] as const;

let fontCache: Promise<{ name: string; data: Buffer; weight: 500 | 700 | 800; style: "normal" }[]> | null = null;
function fonts() {
  fontCache ??= Promise.all(
    fontFiles.map(async ([name, weight, file]) => ({
      name,
      weight,
      style: "normal" as const,
      data: await readFile(new URL(`./fonts/${file}`, import.meta.url)),
    })),
  );
  return fontCache;
}

const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, Number.isFinite(n) ? n : a));

function tier(s: number) {
  if (s >= 85) return "Teljesen felkészült";
  if (s >= 60) return "Felkészült";
  if (s >= 30) return "Jó úton";
  return "Az első lépéseknél";
}

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  const score = Math.round(clamp(Number(q.get("s")), 0, 100));
  const days = clamp(Number(q.get("d")), 0, 365);
  const adults = clamp(Number(q.get("a") ?? 1), 1, 20);
  const kids = clamp(Number(q.get("k") ?? 0), 0, 20);
  const plan = clamp(Number(q.get("p") ?? 3), 1, 30);
  const cats = (q.get("c") ?? "").split(",").map((x) => clamp(Number(x), 0, 100));

  const big = days >= 1 ? String(Math.floor(days)) : String(Math.round(days * 24));
  const unit = days >= 1 ? "nap" : "óra";
  const household = [`${adults} felnőtt`, kids ? `${kids} gyerek` : null, `${plan} napos terv`].filter(Boolean).join(" · ");

  const R = 255;
  const C = 2 * Math.PI * R;
  const dash = (score / 100) * C;

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: "flex", flexDirection: "column", position: "relative", background: "#06080f", color: "#f2f4f9", fontFamily: "Manrope" }}>
        {/* háttér */}
        <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div style={{ position: "absolute", right: -260, top: 120, width: 900, height: 900, borderRadius: 999, display: "flex", background: "radial-gradient(circle, rgba(129,140,248,.30), transparent 62%)" }} />
        <div style={{ position: "absolute", left: -320, top: 760, width: 1000, height: 1000, borderRadius: 999, display: "flex", background: "radial-gradient(circle, rgba(52,211,153,.22), transparent 62%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 520, display: "flex", background: "linear-gradient(180deg, transparent, rgba(6,8,15,.9))" }} />

        <div style={{ display: "flex", flexDirection: "column", padding: "170px 90px 190px", height: "100%", position: "relative" }}>
          {/* fejléc */}
          <div style={{ display: "flex", flexShrink: 0, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <svg width="76" height="76" viewBox="0 0 64 64" fill="none">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#34d399" />
                    <stop offset=".5" stopColor="#22d3ee" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <path d="M32 6 L56 22 V46 Q56 58 44 58 H20 Q8 58 8 46 V22 Z" stroke="url(#g)" strokeWidth="4.5" strokeLinejoin="round" />
                <rect x="20" y="42" width="24" height="5" rx="2.5" fill="#34d399" />
                <rect x="24" y="32" width="16" height="5" rx="2.5" fill="#22d3ee" />
                <circle cx="32" cy="24" r="3.5" fill="#818cf8" />
              </svg>
              <div style={{ display: "flex", fontFamily: "Unbounded", fontSize: 46, letterSpacing: -1.5 }}>
                Haven<span style={{ color: "#22d3ee" }}>72</span>
              </div>
            </div>
            <div style={{ display: "flex", fontFamily: "Mono", fontSize: 22, letterSpacing: 3, color: "#9aa6bf", padding: "14px 22px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.04)" }}>
              FELKÉSZÜLTSÉG
            </div>
          </div>

          {/* gyűrű */}
          <div style={{ display: "flex", flexShrink: 0, justifyContent: "center", marginTop: 56, position: "relative" }}>
            <svg width={2 * R + 80} height={2 * R + 80} viewBox={`0 0 ${2 * R + 80} ${2 * R + 80}`}>
              <defs>
                <linearGradient id="r" x1="0" y1="0" x2={2 * R + 80} y2={2 * R + 80} gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#34d399" />
                  <stop offset=".5" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle cx={R + 40} cy={R + 40} r={R} stroke="rgba(255,255,255,.07)" strokeWidth="34" fill="none" />
              <circle cx={R + 40} cy={R + 40} r={R + 26} stroke="rgba(255,255,255,.05)" strokeWidth="2" fill="none" strokeDasharray="2 14" />
              {score > 0 && (
                <circle cx={R + 40} cy={R + 40} r={R} stroke="url(#r)" strokeWidth="34" fill="none" strokeLinecap="round" strokeDasharray={`${dash} ${C}`} transform={`rotate(-90 ${R + 40} ${R + 40})`} />
              )}
            </svg>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "flex", fontFamily: "Mono", fontSize: 24, letterSpacing: 4, color: "#9aa6bf" }}>PONTSZÁM</div>
              <div style={{ display: "flex", alignItems: "flex-end", marginTop: 6 }}>
                <span style={{ fontFamily: "Unbounded", fontSize: score >= 100 ? 132 : 200, lineHeight: 1, letterSpacing: score >= 100 ? -8 : -10 }}>{score}</span>
                <span style={{ fontFamily: "Unbounded", fontSize: 44, color: "#5d6880", marginBottom: score >= 100 ? 18 : 26, marginLeft: 8 }}>/100</span>
              </div>
              <div style={{ display: "flex", marginTop: 10, fontFamily: "Manrope", fontWeight: 700, fontSize: 36, backgroundImage: "linear-gradient(90deg, #34d399, #22d3ee, #818cf8)", backgroundClip: "text", color: "transparent" }}>
                {tier(score)}
              </div>
            </div>
          </div>

          {/* kitartás kártya */}
          <div style={{ display: "flex", flexShrink: 0, alignItems: "center", gap: 36, marginTop: 50, padding: "34px 42px", borderRadius: 40, background: "linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.025))", border: "1.5px solid rgba(255,255,255,.10)" }}>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <span style={{ fontFamily: "Unbounded", fontSize: 110, lineHeight: 1, letterSpacing: -5 }}>{big}</span>
              <span style={{ fontFamily: "Unbounded", fontSize: 40, color: "#22d3ee", marginLeft: 12, marginBottom: 14 }}>{unit}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ display: "flex", fontSize: 32, fontWeight: 700, lineHeight: 1.25 }}>ennyi ideig bírnánk külső segítség nélkül</div>
              <div style={{ display: "flex", fontSize: 26, color: "#9aa6bf", marginTop: 10 }}>{household}</div>
            </div>
          </div>

          {/* kategóriák */}
          <div style={{ display: "flex", flexShrink: 0, flexWrap: "wrap", justifyContent: "space-between", marginTop: 44, rowGap: 28 }}>
            {CATEGORIES.map((c, i) => {
              const pct = cats[i] ?? 0;
              return (
                <div key={c.id} style={{ display: "flex", flexDirection: "column", width: 430 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, marginBottom: 12 }}>
                    <span style={{ color: "#c9d1e3" }}>{c.name}</span>
                    <span style={{ fontFamily: "Mono", color: "#9aa6bf" }}>{Math.round(pct)}%</span>
                  </div>
                  <div style={{ display: "flex", height: 14, borderRadius: 99, background: "rgba(255,255,255,.07)" }}>
                    {pct > 0 && <div style={{ display: "flex", width: `${Math.max(pct, 4)}%`, height: 14, borderRadius: 99, background: c.accent, boxShadow: `0 0 18px ${c.accent}` }} />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", flexShrink: 0, flexDirection: "column", alignItems: "center", marginTop: "auto" }}>
            <div style={{ display: "flex", fontFamily: "Unbounded", fontSize: 66, letterSpacing: -3 }}>Te hogy állsz?</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 26, padding: "20px 38px", borderRadius: 999, backgroundImage: "linear-gradient(90deg, #34d399, #22d3ee)", color: "#06080f", fontSize: 34, fontWeight: 700 }}>
              haven72.vercel.app/terv
            </div>
            <div style={{ display: "flex", marginTop: 26, fontSize: 24, color: "#6f7a93" }}>Ingyenes 72 órás terv · hivatalos ajánlások alapján</div>
          </div>
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: await fonts(),
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    },
  );
}
