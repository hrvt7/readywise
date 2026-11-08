"use client";
import { HoverIcon } from "@/components/hover";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { CategoryIcon } from "@/components/Icons";
import { ScoreRing } from "@/components/Motion";
import { activeItems, CATEGORIES, endurance, huf, score, shopLink, type Household } from "@/lib/checklist";
import { COUNTRIES, effectiveRule, type CountryCode } from "@/lib/countries";
import { sourceById } from "@/lib/sources";

interface State {
  country: CountryCode;
  adults: number;
  kids: number;
  pets: number;
  days: number;
  waterHave: number;
  foodDaysHave: number;
  budget: number;
  checked: Record<string, boolean>;
}

const DEFAULT: State = { country: "HU", adults: 2, kids: 0, pets: 0, days: 3, waterHave: 0, foodDaysHave: 0, budget: 30000, checked: {} };
const KEY = "haven72:plan:v1";

function Stepper({ label, value, set, min = 0, max = 12 }: { label: string; value: number; set: (n: number) => void; min?: number; max?: number }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/[.04] px-4 py-3 ring-1 ring-white/8">
      <span className="text-sm">{label}</span>
      <div className="flex items-center gap-3">
        <button aria-label={`${label} csökkentése`} onClick={() => set(Math.max(min, value - 1))} className="h-8 w-8 rounded-lg bg-white/8 text-lg transition hover:bg-white/15">−</button>
        <motion.span key={value} initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display w-6 text-center text-lg font-bold">{value}</motion.span>
        <button aria-label={`${label} növelése`} onClick={() => set(Math.min(max, value + 1))} className="h-8 w-8 rounded-lg bg-white/8 text-lg transition hover:bg-white/15">+</button>
      </div>
    </div>
  );
}

export default function Planner() {
  const [s, setS] = useState<State>(DEFAULT);
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setS({ ...DEFAULT, ...JSON.parse(raw) });
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch {}
  }, [s, loaded]);

  const up = <K extends keyof State>(k: K, v: State[K]) => setS((p) => ({ ...p, [k]: v }));
  const country = COUNTRIES.find((c) => c.code === s.country)!;
  const rule = effectiveRule(country);
  const h: Household = useMemo(() => ({ adults: s.adults, kids: s.kids, pets: s.pets, days: s.days, water: rule.water }), [s.adults, s.kids, s.pets, s.days, rule.water]);
  const items = useMemo(() => activeItems(h), [h]);
  const sc = score(h, s.checked);
  const end = endurance(h, s.waterHave, s.foodDaysHave);
  const [storyBusy, setStoryBusy] = useState(false);
  const scorePct = Math.round(sc.pct * 100);
  const shareText = `Haven72 felkészültség: ${scorePct}/100 – kb. ${end.days >= 1 ? Math.floor(end.days) + " napig" : Math.round(end.days * 24) + " óráig"} bírnánk külső segítség nélkül. Te hogy állsz?`;
  const copyText = () => {
    navigator.clipboard?.writeText(`${shareText} haven72.vercel.app/terv`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const shareStory = async () => {
    setStoryBusy(true);
    try {
      const qs = new URLSearchParams({ s: String(scorePct), d: end.days.toFixed(2), a: String(s.adults), k: String(s.kids), p: String(s.days), c: sc.byCat.map((c) => Math.round(c.pct * 100)).join(",") });
      const blob = await (await fetch(`/api/story?${qs}`)).blob();
      const file = new File([blob], `haven72-${scorePct}.png`, { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: `${shareText} haven72.vercel.app/terv` }).catch(() => {});
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }
    } finally {
      setStoryBusy(false);
    }
  };
  const waterNeed = Math.ceil((s.adults + s.kids) * rule.water * s.days);

  const shopping = useMemo(() => {
    const missing = items.filter((i) => !s.checked[i.id] && i.estPrice && i.search).sort((a, b) => a.priority - b.priority);
    let left = s.budget;
    return missing.map((i) => {
      const price = i.estPrice!(h);
      const fits = price <= left;
      if (fits) left -= price;
      return { item: i, price, fits };
    });
  }, [items, s.checked, s.budget, h]);
  const inBudget = shopping.filter((x) => x.fits).reduce((a, x) => a + x.price, 0);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-36 lg:pb-0">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="no-print eyebrow">Tervező</p>
          <h1 className="font-display mt-3 text-4xl font-bold leading-[1.08] tracking-tight md:text-[52px]">A te felkészülési terved</h1>
          <p className="mt-3 max-w-2xl text-mute">Minden mennyiség hivatalos ajánlásból számolt. Az adatok csak ebben a böngészőben tárolódnak.</p>
        </div>
        <div className="no-print flex flex-wrap gap-2 sm:gap-3">
          <Link href="/terv/kartya" className="btn-ghost rounded-xl px-5 py-3 text-sm font-semibold">Hűtőkártya</Link>
          <button onClick={() => window.print()} className="btn-ghost rounded-xl px-5 py-3 text-sm font-semibold">Nyomtatás / PDF</button>
          <button onClick={() => confirm("Biztosan törlöd a tervet?") && setS(DEFAULT)} className="rounded-xl px-4 py-3 text-sm text-mute transition hover:text-white">Újrakezdés</button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="min-w-0 space-y-6">
          {/* Háztartás */}
          <section className="surface no-print rounded-3xl p-6">
            <h2 className="font-display text-xl font-semibold">1 · Háztartás</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Stepper label="Felnőtt" value={s.adults} set={(n) => up("adults", Math.max(1, n))} min={1} />
              <Stepper label="Gyerek" value={s.kids} set={(n) => up("kids", n)} />
              <Stepper label="Háziállat" value={s.pets} set={(n) => up("pets", n)} />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="text-mute">Ország</span>
                <select value={s.country} onChange={(e) => up("country", e.target.value as CountryCode)} className="mt-1.5 w-full rounded-xl border border-white/10 bg-panel px-4 py-3 outline-none focus:ring-2 focus:ring-cyan/40">
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
              </label>
              <div className="text-sm">
                <span className="text-mute">Időtáv</span>
                <div className="mt-1.5 flex gap-2">
                  {[...new Set([3, 10, 14, ...(country.officialDays ? [country.officialDays] : [])])].sort((a, b) => a - b).map((d) => (
                    <button key={d} onClick={() => up("days", d)} className={`relative flex-1 rounded-xl px-2 py-3 font-semibold ring-1 transition ${s.days === d ? "text-ink ring-transparent" : "ring-white/10 hover:bg-white/5"}`}>
                      {s.days === d && <motion.span layoutId="daypill" className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400" />}
                      <span className="relative">{d} nap</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-indigo-400/[.07] p-4 text-sm ring-1 ring-indigo-300/20">
              <b>{country.name}:</b>{" "}
              {country.officialDays ? `hivatalos ajánlás ${country.officialDays} nap` : "nincs hivatalos időtáv – az EU 72 órás ajánlása az alap"}
              {" · "}
              víz {rule.water.toLocaleString("hu-HU")} l/fő/nap{rule.waterIsFallback && " (tartalékérték: a legóvatosabb vizsgált hivatalos ajánlás, NL)"}.
              {country.officialDays && country.officialDays !== s.days && (
                <button onClick={() => up("days", country.officialDays!)} className="ml-2 text-cyan underline-offset-2 hover:underline">
                  Állítsd {country.officialDays} napra
                </button>
              )}
            </div>
          </section>

          {/* Készlet */}
          <section className="surface no-print rounded-3xl p-6">
            <h2 className="font-display text-xl font-semibold">2 · Mi van már otthon?</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <label className="text-sm">
                <div className="flex justify-between"><span className="text-mute">Palackozott víz</span><b>{s.waterHave} l</b></div>
                <input type="range" min={0} max={Math.max(60, waterNeed * 2)} value={s.waterHave} onChange={(e) => up("waterHave", +e.target.value)} className="mt-3 w-full accent-sky-400" />
                <div className="mt-1 text-xs text-mute">Szükséges: {waterNeed} l</div>
              </label>
              <label className="text-sm">
                <div className="flex justify-between"><span className="text-mute">Tartós élelmiszer</span><b>{s.foodDaysHave} napra</b></div>
                <input type="range" min={0} max={21} value={s.foodDaysHave} onChange={(e) => up("foodDaysHave", +e.target.value)} className="mt-3 w-full accent-emerald-400" />
                <div className="mt-1 text-xs text-mute">Becsüld meg: hány napig ennétek a kamrából?</div>
              </label>
            </div>
          </section>

          {/* Checklist */}
          <section className="space-y-5">
            <h2 className="font-display px-1 text-xl font-semibold">3 · Ellenőrzőlista</h2>
            {CATEGORIES.map((c) => {
              const ci = items.filter((i) => i.cat === c.id);
              if (!ci.length) return null;
              return (
                <div key={c.id} className="surface rounded-3xl p-6">
                  <div className="flex items-center gap-4">
                    <CategoryIcon id={c.id} size={48} />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                      <p className="text-xs text-mute">{c.blurb}</p>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: c.accent }}>
                      {ci.filter((i) => s.checked[i.id]).length}/{ci.length}
                    </span>
                  </div>
                  <ul className="mt-4 divide-y divide-white/6">
                    {ci.map((i) => {
                      const q = i.qty?.(h);
                      const on = !!s.checked[i.id];
                      return (
                        <li key={i.id} className="py-3.5">
                          <label className="flex cursor-pointer items-start gap-4">
                            <input type="checkbox" checked={on} onChange={() => up("checked", { ...s.checked, [i.id]: !on })} className="peer sr-only" />
                            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ring-1 transition ${on ? "ring-transparent" : "ring-white/20"}`} style={on ? { background: c.accent, boxShadow: `0 0 18px ${c.accent}88` } : {}}>
                              <AnimatePresence>
                                {on && (
                                  <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#05070f" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12l5 5L20 7" />
                                  </motion.svg>
                                )}
                              </AnimatePresence>
                            </span>
                            <span className="flex-1">
                              <span className={`block text-[15px] transition ${on ? "text-mute line-through decoration-white/30" : ""}`}>
                                {i.label}
                                {i.priority === 1 && <span className="ml-2 rounded-md bg-rose-400/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rose-300">alap</span>}
                              </span>
                              {i.hint && <span className="mt-1 block text-xs text-mute">{i.hint}</span>}
                              <span className="mt-1.5 flex flex-wrap gap-1.5">
                                {i.sources.map((id) => {
                                  const src = sourceById(id);
                                  return src ? (
                                    <Link key={id} href={`/forrasok#${id}`} className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-mute ring-1 ring-white/8 hover:text-white">
                                      {src.region} · {src.publisher.split("–")[0].split("(")[0].trim()}
                                    </Link>
                                  ) : null;
                                })}
                              </span>
                            </span>
                            {q && (
                              <span className="shrink-0 text-right">
                                <span className="font-display block text-lg font-bold">{q.value.toLocaleString("hu-HU")}</span>
                                <span className="block max-w-[120px] text-[11px] leading-tight text-mute">{q.unit}</span>
                              </span>
                            )}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>

          {/* Shopping */}
          <section className="surface no-print rounded-3xl p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-semibold">4 · Bevásárlólista költségkerettel</h2>
                <p className="mt-1 text-xs text-mute">A hiányzó tételek fontossági sorrendben. Az árak tájékoztató becslések, nem napi árak.</p>
              </div>
              <label className="text-sm">
                <span className="text-mute">Keret</span>
                <div className="mt-1 flex items-center gap-2">
                  <input type="number" step={5000} min={0} value={s.budget} onChange={(e) => up("budget", Math.max(0, +e.target.value))} className="w-32 rounded-xl border border-white/10 bg-panel px-3 py-2 outline-none" />
                  <span className="text-mute">Ft</span>
                </div>
              </label>
            </div>
            {shopping.length === 0 ? (
              <p className="mt-6 text-sm text-emerald-300">Minden megvásárolható tétel megvan. 🎉</p>
            ) : (
              <ul className="mt-5 space-y-2">
                {shopping.map(({ item, price, fits }) => {
                  const link = shopLink(item.search!);
                  const cat = CATEGORIES.find((c) => c.id === item.cat)!;
                  return (
                    <motion.li layout key={item.id} className={`flex items-center gap-3 rounded-2xl px-3 py-3 ring-1 transition sm:gap-4 sm:px-4 ${fits ? "bg-white/[.04] ring-white/8" : "opacity-45 ring-transparent"}`}>
                      <CategoryIcon id={cat.id} size={32} />
                      <div className="min-w-0 flex-1 text-sm">
                        <div className="font-semibold leading-snug">
                          {item.label}
                          {link.partner && <span className="ml-2 rounded-md border border-amber-400/40 px-1.5 py-0.5 text-[10px] text-amber-300">partnerlink</span>}
                        </div>
                        <div className="mt-0.5 text-xs text-mute">
                          <span className="font-semibold text-white/85">~{huf(price)}</span> · becslés · {fits ? "belefér a keretbe" : "kereten kívül"}
                        </div>
                      </div>
                      <a href={link.href} target="_blank" rel={link.partner ? "sponsored noopener" : "noopener"} className="shrink-0 rounded-lg bg-white/8 px-3 py-2 text-xs font-semibold transition hover:bg-white/15">
                        Árak →
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            )}
            <div className="mt-5 flex justify-between border-t border-line pt-4 text-sm">
              <span className="text-mute">Keretbe férő tételek összesen (becslés)</span>
              <b>{huf(inBudget)}</b>
            </div>
          </section>
        </div>

        {/* Sticky summary */}
        <aside className="min-w-0 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface rounded-3xl p-6">
            <div className="flex justify-center">
              <ScoreRing value={Math.round(sc.pct * 100)} label="felkészültség / 100" size={200} />
            </div>
            <div className="mt-5 rounded-2xl bg-white/[.04] p-4 text-center ring-1 ring-white/8">
              <div className="text-xs text-mute">Ennyi ideig bírnátok külső segítség nélkül</div>
              <div className="font-display mt-1 text-3xl font-bold">
                {end.days >= 1 ? `${Math.floor(end.days)} nap` : end.days > 0 ? `${Math.round(end.days * 24)} óra` : "0 nap"}
              </div>
              <div className="mt-1 text-[11px] text-mute">
                víz alapján {end.waterDays.toFixed(1)} nap · étel alapján {end.foodDays} nap
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {sc.byCat.map((c) => (
                <div key={c.id}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-mute">{c.name}</span>
                    <span>{c.done}/{c.total}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
                    <motion.div className="h-full rounded-full" style={{ background: c.accent, boxShadow: `0 0 12px ${c.accent}` }} animate={{ width: `${c.pct * 100}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-mute">Segélyhívók · {country.name}</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {country.emergency.map((e) => (
                  <a key={e.number + e.label} href={`tel:${e.number}`} className="keycap px-3 py-2">
                    <div className="font-display text-lg font-bold">{e.number}</div>
                    <div className="text-[11px] text-mute">{e.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
            <button onClick={shareStory} disabled={storyBusy} className="btn-primary flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold disabled:opacity-60">
              <HoverIcon name="instagram" size={17} />
              {storyBusy ? "Kép készül…" : "Story kép megosztása"}
            </button>
            <button onClick={copyText} title="Szöveg másolása" className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"><HoverIcon name={copied ? "checked" : "copy"} size={16} />{copied ? "Kész" : "Szöveg"}</button>
          </div>
          <p className="mt-4 px-2 text-xs leading-relaxed text-mute">
            Tájékoztató jellegű segédlet. Gyógyszerekről orvosod dönt; valós helyzetben a hatósági utasítás az elsődleges.
          </p>
        </aside>
      </div>
      <div className="no-print fixed inset-x-3 bottom-3 z-40 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/85 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,.5)] backdrop-blur-xl">
          <div className="relative h-11 w-11 shrink-0">
            <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90">
              <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,.1)" strokeWidth="4" fill="none" />
              <motion.circle cx="22" cy="22" r="18" stroke="url(#mbar)" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray={113.1} animate={{ strokeDashoffset: 113.1 * (1 - sc.pct) }} transition={{ type: "spring", stiffness: 90, damping: 18 }} />
              <defs><linearGradient id="mbar"><stop stopColor="#34d399" /><stop offset="1" stopColor="#818cf8" /></linearGradient></defs>
            </svg>
            <span className="font-display absolute inset-0 grid place-items-center text-xs font-bold">{scorePct}</span>
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-mute">Felkészültség</div>
            <div className="text-sm font-semibold">{end.days >= 1 ? `kb. ${Math.floor(end.days)} nap` : `kb. ${Math.round(end.days * 24)} óra`} kitartás</div>
          </div>
          <button onClick={shareStory} disabled={storyBusy} className="btn-primary inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-xs font-bold"><HoverIcon name="instagram" size={14} />{storyBusy ? "…" : "Story"}</button>
        </div>
      </div>
    </div>
  );
}
