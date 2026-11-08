"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { HoverIcon } from "@/components/hover";
import { huf, shopLink } from "@/lib/checklist";
import { DEVICES, DEV_CATS, SOURCES_POWER, SOLAR_100W, hoursFor, recommendWh, summarize, usableWh, type DevCat } from "@/lib/power";

const KEY = "haven72:power:v1";
type State = { on: Record<string, boolean>; hours: Record<string, number>; src: string; days: number; solar: 0 | 100 | 200; season: "winter" | "summer" };
const DEFAULT: State = { on: { phone: true, radio: true, led: true }, hours: {}, src: "pb20", days: 3, solar: 0, season: "winter" };

const fmtH = (h: number) => (!isFinite(h) ? "folyamatosan" : h >= 48 ? `${(h / 24).toFixed(1).replace(".", ",")} nap` : `${Math.round(h)} óra`);

export default function PowerCalc() {
  const [s, setS] = useState<State>(DEFAULT);
  useEffect(() => { try { const r = localStorage.getItem(KEY); if (r) setS({ ...DEFAULT, ...JSON.parse(r) }); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }, [s]);

  const sel = DEVICES.filter((d) => s.on[d.id]).map((dev) => ({ dev, hours: s.hours[dev.id] ?? dev.hours }));
  const sum = useMemo(() => summarize(sel), [sel]);
  const src = SOURCES_POWER.find((x) => x.id === s.src)!;
  const solarWh = (s.solar / 100) * SOLAR_100W[s.season];
  const hrs = hoursFor(src, sum.total, sum.acShare, solarWh);
  const need = recommendWh(sum.total, s.days, sum.acShare, solarWh);
  const rec = SOURCES_POWER.filter((x) => x.kind !== "car").find((x) => x.wh >= need) ?? SOURCES_POWER[6];
  const enough = hrs >= s.days * 24;
  const usable = usableWh(src, sum.acShare);

  // mire elég: fontossági sorrendben töltjük fel a kapacitást
  const ranked = [...sum.items].sort((a, b) => (a.dev.essential ?? 3) - (b.dev.essential ?? 3) || a.wh - b.wh);
  let budget = (usable + solarWh * s.days) / s.days;
  const covered = new Set<string>();
  for (const it of ranked) { if (it.wh <= budget) { budget -= it.wh; covered.add(it.dev.id); } }

  const toggle = (id: string) => setS((x) => ({ ...x, on: { ...x.on, [id]: !x.on[id] } }));
  const cats = Object.keys(DEV_CATS) as DevCat[];
  const link = shopLink(rec.search);

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        {/* eszközök */}
        <div className="min-w-0 space-y-6">
          {cats.map((c) => {
            const list = DEVICES.filter((d) => d.cat === c);
            return (
              <section key={c}>
                <h2 className="eyebrow mb-3" style={{ color: DEV_CATS[c].accent }}>{DEV_CATS[c].name}</h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {list.map((d) => {
                    const on = !!s.on[d.id];
                    const h = s.hours[d.id] ?? d.hours;
                    const wh = d.watts * h;
                    return (
                      <motion.div layout key={d.id} data-hover className={`surface relative overflow-hidden rounded-2xl p-4 transition ${on ? "ring-1 ring-white/20" : ""}`}>
                        {on && <span className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${DEV_CATS[c].accent}, transparent)` }} />}
                        <button onClick={() => toggle(d.id)} className="flex w-full items-start justify-between gap-3 text-left">
                          <div className="min-w-0">
                            <div className="font-semibold leading-snug">{d.name}</div>
                            <div className="mt-0.5 font-mono text-[11px] text-mute">{d.perCharge ? `${d.watts} Wh/töltés` : `${d.watts} W`}{d.essential === 1 && <span className="ml-2 rounded bg-red-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-red-300">létfontosságú lehet</span>}</div>
                          </div>
                          <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ring-1 transition ${on ? "bg-emerald-400 text-ink ring-emerald-400" : "ring-white/20"}`}>{on && <HoverIcon name="checked" size={14} />}</span>
                        </button>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="mt-3 flex items-center gap-3 text-sm">
                                <input type="range" min={d.perCharge ? 0.5 : 0.25} max={d.perCharge ? 4 : 24} step={d.perCharge ? 0.5 : 0.25} value={h} onChange={(e) => setS((x) => ({ ...x, hours: { ...x.hours, [d.id]: Number(e.target.value) } }))} className="sim-range flex-1" style={{ ["--p" as string]: `${((h - (d.perCharge ? 0.5 : 0.25)) / ((d.perCharge ? 4 : 24) - (d.perCharge ? 0.5 : 0.25))) * 100}%` }} aria-label={`${d.name} napi használat`} />
                                <span className="w-28 shrink-0 text-right font-mono text-xs text-mute">{d.perCharge ? `${h}× töltés` : `${h} óra`}/nap</span>
                              </div>
                              <div className="mt-1.5 flex items-center justify-between text-xs">
                                <span className="text-mute">{d.note}</span>
                                <b className="font-mono">{Math.round(wh)} Wh/nap</b>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* eredmény */}
        <aside className="min-w-0 space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface relative overflow-hidden rounded-3xl p-5">
            <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[70px] ${enough ? "bg-emerald-400/25" : "bg-amber-400/25"}`} />
            <div className="relative">
              <div className="eyebrow">Napi fogyasztás</div>
              <div className="font-display mt-1 text-3xl font-bold tabular-nums"><span className="text-grad">{Math.round(sum.total)}</span> Wh</div>
              <div className="mt-4 flex gap-1 overflow-hidden rounded-full bg-white/[.06]" style={{ height: 10 }}>
                {sum.items.map((it) => (
                  <motion.span key={it.dev.id} layout animate={{ width: `${(it.wh / Math.max(1, sum.total)) * 100}%` }} className="h-full" style={{ background: DEV_CATS[it.dev.cat].accent }} title={`${it.dev.name}: ${Math.round(it.wh)} Wh`} />
                ))}
              </div>
              <div className="mt-5 eyebrow">Ezzel a forrással</div>
              <select value={s.src} onChange={(e) => setS((x) => ({ ...x, src: e.target.value }))} className="mt-2 w-full rounded-xl border border-white/10 bg-panel px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-cyan/40">
                {SOURCES_POWER.map((x) => <option key={x.id} value={x.id}>{x.name} · {x.wh} Wh</option>)}
              </select>
              {src.note && <p className="mt-1.5 text-xs text-mute">{src.note}</p>}
              <div className="mt-4 flex items-end gap-2">
                <div className="font-display text-5xl font-bold leading-none tabular-nums">{fmtH(hrs)}</div>
              </div>
              <p className="mt-1 text-xs text-mute">használható ≈{Math.round(usable)} Wh (veszteségekkel){solarWh ? ` + napi ≈${Math.round(solarWh)} Wh napelemről` : ""}</p>
              <div className={`mt-3 rounded-xl px-3 py-2 text-sm ring-1 ${enough ? "bg-emerald-400/10 ring-emerald-400/30" : "bg-amber-400/10 ring-amber-400/30"}`}>
                {enough ? `Kitart a ${s.days} napra.` : `Nem elég ${s.days} napra: ennyi kellene ≈ ${Math.round(need)} Wh.`}
              </div>
            </div>
          </div>

          <div className="surface rounded-3xl p-5">
            <div className="eyebrow">Mire elég naponta?</div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {ranked.map((it) => (
                <li key={it.dev.id} className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${covered.has(it.dev.id) ? "bg-emerald-400" : "bg-red-400"}`} />
                  <span className={covered.has(it.dev.id) ? "" : "text-mute line-through"}>{it.dev.name}</span>
                  <span className="ml-auto font-mono text-xs text-mute">{Math.round(it.wh)} Wh</span>
                </li>
              ))}
              {ranked.length === 0 && <li className="text-mute">Válassz eszközöket balra.</li>}
            </ul>
            <p className="mt-3 text-[11px] text-mute">A létfontosságú eszközök kapják először az energiát.</p>
          </div>

          <div className="surface rounded-3xl p-5">
            <div className="eyebrow">Beállítások</div>
            <div className="mt-3 text-sm">Ennyi napra tervezek</div>
            <div className="mt-1.5 flex gap-2">{[1, 3, 7].map((d) => <button key={d} onClick={() => setS((x) => ({ ...x, days: d }))} className={`flex-1 rounded-xl px-3 py-2 font-semibold ring-1 transition ${s.days === d ? "bg-white/[.1] ring-white/25" : "text-mute ring-white/10"}`}>{d} nap</button>)}</div>
            <div className="mt-3 text-sm">Napelem</div>
            <div className="mt-1.5 flex gap-2">{([0, 100, 200] as const).map((w) => <button key={w} onClick={() => setS((x) => ({ ...x, solar: w }))} className={`flex-1 rounded-xl px-3 py-2 font-semibold ring-1 transition ${s.solar === w ? "bg-white/[.1] ring-white/25" : "text-mute ring-white/10"}`}>{w ? `${w} W` : "nincs"}</button>)}</div>
            {s.solar > 0 && <div className="mt-1.5 flex gap-2 text-sm">{(["winter", "summer"] as const).map((se) => <button key={se} onClick={() => setS((x) => ({ ...x, season: se }))} className={`flex-1 rounded-xl px-3 py-1.5 ring-1 ${s.season === se ? "bg-white/[.1] ring-white/25" : "text-mute ring-white/10"}`}>{se === "winter" ? "tél ≈1,5 csúcsóra" : "nyár ≈5 csúcsóra"}</button>)}</div>}
          </div>

          <div data-hover className="surface relative overflow-hidden rounded-3xl p-5">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-[60px]" />
            <div className="relative">
              <div className="eyebrow">Ajánlott kapacitás {s.days} napra</div>
              <div className="font-display mt-1 text-2xl font-bold">{rec.name}</div>
              <p className="mt-1 text-sm text-mute">Szükséglet ≈{Math.round(need)} Wh 20 % tartalékkal{rec.priceHuf ? ` · jellemző ár ${huf(rec.priceHuf[0])} – ${huf(rec.priceHuf[1])}` : ""}</p>
              <a href={link.href} target="_blank" rel={link.partner ? "sponsored noopener" : "noopener"} className="btn-primary mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold">
                Árak megnézése <HoverIcon name="external" size={14} />{link.partner && <span className="rounded bg-ink/20 px-1.5 text-[10px]">partnerlink</span>}
              </a>
              <p className="mt-3 text-[11px] leading-relaxed text-mute">Az árak tájékoztató becslések. Gázkazánt, hálózati berendezést csak szakember által bekötött átkapcsolóval táplálj erőműről.</p>
            </div>
          </div>
        </aside>
      </div>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-mute">
        A fogyasztási értékek tipikus gyártói adatlapok alapján kerekített becslések – a saját készüléked címkéjén lévő érték az irányadó, ezért minden érték átírható. Veszteségek: USB-ről 10 %, inverteren 15 %. A napelem hozama magyarországi, átlagos téli és nyári napra becsült.
      </p>
    </div>
  );
}
