import type { Metadata } from "next";
import { Lockup, Mark, Wordmark } from "@/components/brand/Logo";
import { BRAND } from "@/components/brand/tokens";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";

export const metadata: Metadata = { title: "Márka", description: "Haven72 arculati elemek: jel, szóvédjegy, színek, tipográfia, letölthető fájlok." };

const colors = [
  { n: "Mint", v: "#34d399", r: "Siker, kész, elsődleges gomb kezdőszíne" },
  { n: "Cián", v: "#22d3ee", r: "Linkek, fókusz, gomb végszíne" },
  { n: "Indigó", v: "#818cf8", r: "Gradiens vége, dekoratív fény" },
  { n: "Ink", v: "#06080f", r: "Alap háttér (kékes majdnem-fekete)" },
  { n: "Ink 2", v: "#0b0e18", r: "Emelt felületek" },
  { n: "Mute", v: "#9aa6bf", r: "Másodlagos szöveg" },
  { n: "Borostyán", v: "#fbbf24", r: "Hiány, figyelem" },
  { n: "Rózsa", v: "#fb7185", r: "Alap tétel jelölése, hiba" },
];

const files = ["haven72-mark-gradient.svg", "haven72-mark-white.svg", "haven72-mark-black.svg", "haven72-appicon.svg", "haven72-lockup-dark.svg", "haven72-lockup-light.svg", "haven72-lockup-stacked.svg"];

export default function Page() {
  return (
    <>
      <PageHead kicker="Márka" title={<>Haven<span className="text-grad">72</span> arculat</>} sub="Menedék három napra. A jel egy ház és egy pajzs egyben; a benne lévő három elem a három nap, a legfelső fénypont az otthon, ami világít." />
      <div className="mx-auto max-w-6xl space-y-6 px-5 md:px-8">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface flex aspect-square flex-col items-center justify-center gap-5 rounded-3xl"><Mark size={120} glow /><span className="eyebrow">Jel · gradiens</span></div>
            <div className="surface flex aspect-square flex-col items-center justify-center gap-5 rounded-3xl" style={{ background: "#f4f6fb" }}><Mark size={120} mono="dark" /><span className="eyebrow !text-neutral-500">Jel · mono sötét</span></div>
            <div className="surface flex aspect-square flex-col items-center justify-center gap-5 rounded-3xl"><Mark size={120} mono="light" /><span className="eyebrow">Jel · mono fehér</span></div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface flex min-h-[200px] flex-col items-center justify-center gap-6 rounded-3xl p-8"><Lockup size={34} /><Wordmark size={30} /><span className="eyebrow">Lockup és szóvédjegy</span></div>
            <div className="surface flex min-h-[200px] flex-col items-center justify-center gap-6 rounded-3xl p-8" style={{ background: "#f4f6fb" }}><Lockup size={34} mono="dark" /><span className="eyebrow !text-neutral-500">Világos háttéren</span></div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="surface rounded-3xl p-8">
            <p className="eyebrow">Színek</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {colors.map((c) => (
                <div key={c.v} className="flex items-center gap-3 rounded-2xl bg-white/[.03] p-3 ring-1 ring-white/8">
                  <span className="h-12 w-12 shrink-0 rounded-xl ring-1 ring-white/10" style={{ background: c.v }} />
                  <div><div className="font-semibold">{c.n} <span className="font-mono text-xs text-dim">{c.v}</span></div><div className="text-xs text-mute">{c.r}</div></div>
                </div>
              ))}
            </div>
            <div className="mt-5 h-3 rounded-full" style={{ background: `linear-gradient(90deg, ${BRAND.gradient.join(",")})` }} />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface rounded-3xl p-7"><p className="eyebrow">Címek · Sora</p><div className="font-display mt-3 text-4xl font-bold leading-none">Aa Áá Őő</div><p className="mt-3 text-xs text-mute">700–800, −3% betűköz, 1.05 sormagasság.</p></div>
            <div className="surface rounded-3xl p-7"><p className="eyebrow">Szöveg · Manrope</p><div className="mt-3 text-4xl leading-none">Aa Áá Őő</div><p className="mt-3 text-xs text-mute">400–600, +0.2px betűköz, 1.6 sormagasság.</p></div>
            <div className="surface rounded-3xl p-7"><p className="eyebrow">Címkék · JetBrains Mono</p><div className="mt-3 font-mono text-3xl leading-none">72H 112</div><p className="mt-3 text-xs text-mute">Számok, kódok, eyebrow: 11px, nagybetű, +14% betűköz.</p></div>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="surface rounded-3xl p-8">
            <p className="eyebrow">Hangnem</p>
            <ul className="mt-4 grid gap-3 text-sm text-mute md:grid-cols-2">
              <li><b className="text-fg">Nyugodt, nem riasztó.</b> Rutin, nem riadó. Nincs visszaszámláló, nincs vörös-fekete.</li>
              <li><b className="text-fg">Konkrét.</b> Liter, kiló, darab, forrással. Nem „sok víz”, hanem „27 liter”.</li>
              <li><b className="text-fg">Egy kiemelő szín egyszerre.</b> A gradiens csak a márkajelen és egy-egy szón, nem mindenhol.</li>
              <li><b className="text-fg">Mindig forrás.</b> Ahol szám van, ott hivatkozás is.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="surface rounded-3xl p-8">
            <p className="eyebrow">Letölthető fájlok (SVG)</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {files.map((f) => <a key={f} href={`/brand/${f}`} download className="btn-ghost rounded-lg px-3 py-2 font-mono text-xs">{f}</a>)}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
