"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { HoverIcon } from "@/components/hover";
import { ITEMS } from "@/lib/checklist";
import { countryByCode, effectiveRule, type CountryCode } from "@/lib/countries";
import { events, holdoutHours, indoorTemp, phoneBattery, waterHours, FRIDGE_SAFE_H, freezerSafeH, type SimInput, type Season } from "@/lib/sim";
import { sourceById } from "@/lib/sources";
import House from "./House";

interface Plan { country: CountryCode; adults: number; kids: number; days: number; waterHave: number; foodDaysHave: number; checked: Record<string, boolean> }
const PLAN_KEY = "haven72:plan:v1";

const fmtH = (h: number) => (h >= 72 ? "72+ óra" : h >= 24 ? `${Math.floor(h / 24)} nap ${Math.round(h % 24)} óra` : `${Math.round(h)} óra`);

export default function Simulator() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [season, setSeason] = useState<Season>("winter");
  const [tapWorks, setTapWorks] = useState(true);
  const [freezerFull, setFreezerFull] = useState(true);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [has, setHas] = useState({ powerbank: false, radio: false, flashlight: false, candles: false, water: false });
  const raf = useRef(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PLAN_KEY);
      if (raw) {
        const p = JSON.parse(raw) as Plan;
        setPlan(p);
        setHas({ powerbank: !!p.checked.powerbank, radio: !!p.checked.radio, flashlight: !!p.checked.flashlight, candles: !!p.checked.candles, water: !!p.checked.water });
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const step = (now: number) => {
      const dt = (now - last) / 1000; last = now;
      setT((x) => { const n = x + dt * 4.5; if (n >= 72) { setPlaying(false); return 72; } return n; });
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [playing]);

  const people = plan ? plan.adults + plan.kids : 2;
  const rule = plan ? effectiveRule(countryByCode(plan.country) ?? countryByCode("HU")!) : { water: 3, days: 3, waterIsFallback: true, daysIsFallback: true };
  const waterNeedItem = ITEMS.find((i) => i.id === "water");
  const waterNeedL = plan && waterNeedItem?.qty ? waterNeedItem.qty({ adults: plan.adults, kids: plan.kids, pets: 0, days: plan.days, water: rule.water })?.value ?? 0 : people * 3 * 3;
  const inp: SimInput = useMemo(() => ({
    people, season, tapWorks, freezerFull,
    waterL: plan ? (has.water ? Math.max(plan.waterHave, waterNeedL) : plan.waterHave) : 0,
    waterPerDay: rule.water,
    foodDays: plan ? (plan.checked["food-grain"] && plan.checked["food-protein"] ? Math.max(plan.foodDaysHave, plan.days) : plan.foodDaysHave) : 1,
    has,
  }), [people, season, tapWorks, freezerFull, plan, has, waterNeedL, rule.water]);

  const evs = useMemo(() => events(inp), [inp]);
  const hold = holdoutHours(inp);
  const temp = indoorTemp(t, season);
  const batt = phoneBattery(t, has.powerbank);
  const wh = waterHours(inp);
  const passed = evs.filter((e) => e.at <= t);
  const latest = passed[passed.length - 1];

  const share = async () => {
    const text = `Haven72 áramszünet-szimulátor: a mi háztartásunk kb. ${fmtH(hold)} bírna ki komolyabb gond nélkül egy ${season === "winter" ? "téli" : "nyári"} áramszünetben. Te meddig bírnád? haven72.vercel.app/szimulator`;
    if (navigator.share) await navigator.share({ text }).catch(() => {});
    else await navigator.clipboard?.writeText(text);
  };

  const Tile = ({ icon, label, value, sub, tone }: { icon: Parameters<typeof HoverIcon>[0]["name"]; label: string; value: string; sub?: string; tone: "ok" | "warn" | "bad" }) => (
    <div data-hover className="surface flex items-center gap-3 rounded-2xl p-3.5">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone === "ok" ? "bg-emerald-400/15 text-emerald-300" : tone === "warn" ? "bg-amber-400/15 text-amber-300" : "bg-red-400/15 text-red-300"}`}><HoverIcon name={icon} size={20} /></span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-mute">{label}</div>
        <div className="font-display text-lg font-bold leading-tight">{value}</div>
        {sub && <div className="truncate text-xs text-mute">{sub}</div>}
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {!plan && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm">
          <span>Még nincs terved, ezért egy átlagos, felkészületlen háztartást mutatunk (2 fő, készlet nélkül).</span>
          <Link href="/terv" className="btn-primary rounded-lg px-3.5 py-2 text-xs font-bold">Készítsd el a terved →</Link>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <div className="surface overflow-hidden rounded-3xl p-2">
            <House t={t} inp={inp} />
          </div>

          {/* idő-csúszka */}
          <div className="surface mt-4 rounded-3xl p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="eyebrow">Eltelt idő</div>
                <div className="font-display text-3xl font-bold tabular-nums"><span className="text-grad">{Math.floor(t)}</span> óra <span className="text-base font-semibold text-mute">{Math.round((t % 1) * 60).toString().padStart(2, "0")} perc</span></div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setT(0); setPlaying(false); }} className="btn-ghost rounded-xl px-3.5 py-2.5 text-sm font-semibold">Újra</button>
                <button onClick={() => { if (t >= 72) setT(0); setPlaying((p) => !p); }} className="btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold">
                  {playing ? "Szünet" : <><HoverIcon name="clock" size={16} /> Lejátszás</>}
                </button>
              </div>
            </div>
            <div className="relative mt-5">
              <input type="range" min={0} max={72} step={0.25} value={t} onChange={(e) => { setPlaying(false); setT(Number(e.target.value)); }} aria-label="Eltelt órák" className="sim-range w-full" style={{ ["--p" as string]: `${(t / 72) * 100}%` }} />
              <div className="pointer-events-none absolute inset-x-0 top-[22px] h-2">
                {evs.filter((e) => e.at > 0 && e.at < 72).map((e) => (
                  <span key={e.title + e.at} className={`absolute top-0 h-2 w-0.5 ${e.kind === "bad" ? "bg-red-400" : e.kind === "warn" ? "bg-amber-400" : "bg-emerald-400"}`} style={{ left: `${(e.at / 72) * 100}%` }} />
                ))}
              </div>
              <div className="mt-3 flex justify-between font-mono text-[11px] text-mute"><span>0 h</span><span>1. nap</span><span>2. nap</span><span>3. nap</span></div>
            </div>
            <AnimatePresence mode="wait">
              {latest && (
                <motion.div key={latest.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className={`mt-4 rounded-2xl px-4 py-3 text-sm ring-1 ${latest.kind === "bad" ? "bg-red-400/10 ring-red-400/30" : latest.kind === "warn" ? "bg-amber-400/10 ring-amber-400/30" : latest.kind === "good" ? "bg-emerald-400/10 ring-emerald-400/30" : "bg-white/[.04] ring-white/10"}`}>
                  <span className="font-mono text-xs text-mute">+{Math.round(latest.at)} h · </span><b>{latest.title}</b> – {latest.text}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <aside className="min-w-0 space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface relative overflow-hidden rounded-3xl p-5">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan/20 blur-[70px]" />
            <div className="eyebrow">Ennyit bírna a háztartás</div>
            <div className="font-display mt-1 text-4xl font-bold">{fmtH(hold)}</div>
            <p className="mt-1 text-xs text-mute">komolyabb gond nélkül, {people} fővel, {season === "winter" ? "télen" : "nyáron"}</p>
            <button onClick={share} className="btn-primary mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold"><HoverIcon name="instagram" size={16} /> Meddig bírnád te?</button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Tile icon="flame" label="Bent" value={`${temp.toFixed(0)} °C`} tone={season === "winter" ? (temp < 12 ? "bad" : temp < 16 ? "warn" : "ok") : temp > 28 ? "warn" : "ok"} />
            <Tile icon="battery" label="Telefon" value={`${Math.round(Math.min(100, batt))} %`} sub={has.powerbank ? "+ powerbank" : "powerbank nélkül"} tone={batt <= 0 ? "bad" : batt < 25 ? "warn" : "ok"} />
            <Tile icon="soup" label="Hűtő · fagyasztó" value={t >= freezerSafeH(freezerFull) ? "felengedett" : t >= FRIDGE_SAFE_H ? "hűtő romlik" : "rendben"} tone={t >= freezerSafeH(freezerFull) ? "bad" : t >= FRIDGE_SAFE_H ? "warn" : "ok"} />
            <Tile icon="droplet" label="Víz" value={tapWorks ? "folyik" : wh <= t ? "elfogyott" : fmtH(wh - t)} sub={tapWorks ? "a csap még ad vizet" : `${inp.waterL.toFixed(0)} l tárolva`} tone={tapWorks ? "ok" : wh <= t ? "bad" : wh - t < 12 ? "warn" : "ok"} />
          </div>

          <div className="surface rounded-3xl p-5">
            <div className="eyebrow">Beállítások</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {(["winter", "summer"] as Season[]).map((s) => (
                <button key={s} onClick={() => setSeason(s)} className={`rounded-xl px-3 py-2.5 font-semibold ring-1 transition ${season === s ? "bg-white/[.1] ring-white/25" : "text-mute ring-white/10"}`}>{s === "winter" ? "Tél, −5 °C" : "Nyár, 29 °C"}</button>
              ))}
            </div>
            <label className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-white/[.04] px-3 py-2.5 text-sm ring-1 ring-white/8">
              <span>Emeletes ház, szivattyús víz <span className="block text-xs text-mute">áram nélkül nem folyik a csap</span></span>
              <input type="checkbox" checked={!tapWorks} onChange={(e) => setTapWorks(!e.target.checked)} className="h-5 w-5 accent-cyan-400" />
            </label>
            <label className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-white/[.04] px-3 py-2.5 text-sm ring-1 ring-white/8">
              <span>Tele a fagyasztó <span className="block text-xs text-mute">tele: 48 h · félig: 24 h</span></span>
              <input type="checkbox" checked={freezerFull} onChange={(e) => setFreezerFull(e.target.checked)} className="h-5 w-5 accent-cyan-400" />
            </label>
            <div className="mt-4 text-[11px] uppercase tracking-wider text-mute">Mi van otthon?</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              {([["flashlight", "Zseblámpa"], ["candles", "Gyertya"], ["powerbank", "Powerbank"], ["radio", "Kézi rádió"], ["water", "Tárolt víz"]] as const).map(([k, l]) => (
                <button key={k} onClick={() => setHas((h) => ({ ...h, [k]: !h[k] }))} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-left ring-1 transition ${has[k] ? "bg-emerald-400/10 text-white ring-emerald-400/30" : "text-mute ring-white/10"}`}>
                  <span className={`h-2 w-2 rounded-full ${has[k] ? "bg-emerald-400" : "bg-white/20"}`} />{l}
                </button>
              ))}
            </div>
            {plan && <p className="mt-3 text-xs text-mute">A pipák a tervedből jönnek. <Link href="/terv" className="text-cyan hover:underline">Módosítás a tervezőben →</Link></p>}
          </div>
        </aside>
      </div>

      {/* idővonal */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">Mi történik, és mikor</h2>
        <ol className="relative mt-6 space-y-2 border-l border-white/10 pl-6">
          {evs.map((e) => {
            const done = e.at <= t;
            const src = e.source ? sourceById(e.source) : undefined;
            return (
              <motion.li key={e.title + e.at} layout animate={{ opacity: done ? 1 : 0.45 }} className="relative">
                <span className={`absolute -left-[31px] top-2 h-3 w-3 rounded-full ring-4 ring-ink ${e.kind === "bad" ? "bg-red-400" : e.kind === "warn" ? "bg-amber-400" : e.kind === "good" ? "bg-emerald-400" : "bg-white/50"}`} />
                <button onClick={() => { setPlaying(false); setT(e.at); }} className="w-full rounded-2xl px-4 py-3 text-left transition hover:bg-white/[.04]">
                  <div className="flex flex-wrap items-baseline gap-x-3"><span className="font-mono text-xs text-mute">+{e.at < 1 ? `${Math.round(e.at * 60)} perc` : `${Math.round(e.at)} óra`}</span><b>{e.title}</b></div>
                  <p className="mt-0.5 text-sm text-mute">{e.text}{src && <> · <a href={src.url} target="_blank" rel="noopener" className="text-cyan/80 hover:underline" onClick={(ev) => ev.stopPropagation()}>{src.publisher}</a></>}</p>
                </button>
              </motion.li>
            );
          })}
        </ol>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-mute">
        A hűtő és a fagyasztó időtartama hivatalos adat (USDA FSIS). A lakás hűlése, a telefon merülése és a vízfogyás egyszerűsített becslés egy átlagos lakásra, a nagyságrendek érzékeltetésére – a valóság a szigeteléstől, a használattól és az időjárástól függ. Nem előrejelzés.
      </p>
    </div>
  );
}
