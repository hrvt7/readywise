"use client";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { HoverIcon } from "@/components/hover";
import { BAG_GROUPS, BAG_ITEMS, BAG_LIMIT_KG, itemKg, type BagGroup, type BagItem } from "@/lib/gobag";
import { sourceById } from "@/lib/sources";

const KEY = "haven72:bag:v1";
const PLAN_KEY = "haven72:plan:v1";
const kg = (n: number) => (n > 0 && n < 0.05 ? "<0,1" : n.toLocaleString("hu-HU", { maximumFractionDigits: 1, minimumFractionDigits: n % 1 ? 1 : 0 }));

function Backpack({ fill, over, shake }: { fill: number; over: boolean; shake: number }) {
  const [scope, animate] = useAnimate();
  useEffect(() => { if (shake) animate(scope.current, { x: [0, -6, 6, -4, 4, 0], rotate: [0, -1.5, 1.5, -1, 1, 0] }, { duration: 0.5 }); }, [shake, animate, scope]);
  const H = 220, top = 70;
  const level = top + H * (1 - Math.min(1, fill));
  return (
    <motion.svg ref={scope} viewBox="0 0 300 340" className="mx-auto h-auto w-full max-w-[200px] lg:max-w-[300px]" role="img" aria-label="Hátizsák telítettsége">
      <defs>
        <linearGradient id="bagFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={over ? "#f87171" : "#22d3ee"} /><stop offset="1" stopColor={over ? "#b91c1c" : "#34d399"} /></linearGradient>
        <clipPath id="bagBody"><path d="M60 90 Q60 50 150 50 Q240 50 240 90 V270 Q240 300 210 300 H90 Q60 300 60 270 Z" /></clipPath>
      </defs>
      {/* pántok */}
      <path d="M105 60 Q100 20 150 20 Q200 20 195 60" fill="none" stroke="#2b3447" strokeWidth="14" strokeLinecap="round" />
      {/* test */}
      <path d="M60 90 Q60 50 150 50 Q240 50 240 90 V270 Q240 300 210 300 H90 Q60 300 60 270 Z" fill="#1a2130" stroke="#3a455c" strokeWidth="3" />
      <g clipPath="url(#bagBody)">
        <motion.rect x="60" width="180" height={H + 40} animate={{ y: level }} transition={{ type: "spring", stiffness: 90, damping: 18 }} fill="url(#bagFill)" opacity=".85" />
        <motion.path d={`M60 0 Q90 -8 120 0 T180 0 T240 0 V40 H60Z`} animate={{ y: level - 4 }} transition={{ type: "spring", stiffness: 90, damping: 18 }} fill="#fff" opacity=".18" />
        {/* zseb */}
        <rect x="95" y="200" width="110" height="70" rx="14" fill="#0f141f" opacity=".55" stroke="#3a455c" strokeWidth="2" />
        <rect x="95" y="200" width="110" height="14" rx="7" fill="#3a455c" opacity=".7" />
      </g>
      {/* fogantyú, csat */}
      <rect x="130" y="40" width="40" height="12" rx="6" fill="#3a455c" />
      <rect x="135" y="120" width="30" height="10" rx="5" fill="#fbbf24" opacity=".9" />
      {/* skála */}
      {[0.25, 0.5, 0.75, 1].map((p) => <g key={p}><line x1="246" x2="254" y1={top + H * (1 - p)} y2={top + H * (1 - p)} stroke="#6f7a93" strokeWidth="2" /><text x="260" y={top + H * (1 - p) + 4} fontSize="11" fill="#6f7a93" fontFamily="var(--font-jet)">{Math.round(BAG_LIMIT_KG * p)}</text></g>)}
    </motion.svg>
  );
}

export default function Packer() {
  const [inBag, setInBag] = useState<string[]>([]);
  const [people, setPeople] = useState(2);
  const [kids, setKids] = useState(0);
  const [pets, setPets] = useState(0);
  const [shake, setShake] = useState(0);
  const [group, setGroup] = useState<BagGroup | "all">("all");
  const [dragging, setDragging] = useState<string | null>(null);
  const bagRef = useRef<HTMLDivElement>(null);
  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    setCanDrag(matchMedia("(hover: hover) and (pointer: fine)").matches);
    try {
      const p = JSON.parse(localStorage.getItem(PLAN_KEY) ?? "null");
      if (p) { setPeople((p.adults ?? 2) + (p.kids ?? 0)); setKids(p.kids ?? 0); setPets(p.pets ?? 0); }
      const b = JSON.parse(localStorage.getItem(KEY) ?? "null");
      if (Array.isArray(b)) setInBag(b);
    } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(inBag)); } catch {} }, [inBag]);

  const avail = BAG_ITEMS.filter((i) => !i.only || (i.only === "kids" ? kids > 0 : pets > 0));
  const shelf = avail.filter((i) => !inBag.includes(i.id) && (group === "all" || i.group === group));
  const packed = avail.filter((i) => inBag.includes(i.id));
  const total = packed.reduce((a, i) => a + itemKg(i, people), 0);
  const over = total > BAG_LIMIT_KG;
  const okfAll = avail.filter((i) => i.okf);
  const okfMissing = okfAll.filter((i) => !inBag.includes(i.id));
  const score = Math.round(((okfAll.length - okfMissing.length) / okfAll.length) * 100);

  const add = (id: string) => {
    const it = BAG_ITEMS.find((x) => x.id === id)!;
    if (total + itemKg(it, people) > BAG_LIMIT_KG) setShake((s) => s + 1);
    setInBag((b) => (b.includes(id) ? b : [...b, id]));
  };
  const remove = (id: string) => setInBag((b) => b.filter((x) => x !== id));

  const onDragEnd = (id: string, e: PointerEvent | MouseEvent | TouchEvent) => {
    setDragging(null);
    const r = bagRef.current?.getBoundingClientRect();
    const pt = "changedTouches" in e ? e.changedTouches[0] : (e as PointerEvent);
    if (r && pt && pt.clientX >= r.left && pt.clientX <= r.right && pt.clientY >= r.top && pt.clientY <= r.bottom) add(id);
  };

  const share = async () => {
    const text = `Összeállt a vészcsomagom: ${packed.length} tétel, ${kg(total)} kg (max. 20 kg az OKF szerint), a hivatalos lista ${score}%-a megvan. Rakd össze te is: haven72.vercel.app/csomag`;
    if (navigator.share) await navigator.share({ text }).catch(() => {});
    else await navigator.clipboard?.writeText(text);
  };

  const Card = ({ it, packedView }: { it: BagItem; packedView?: boolean }) => {
    const g = BAG_GROUPS[it.group];
    return (
      <motion.div layout layoutId={`bag-${it.id}`} drag={!packedView && canDrag} dragSnapToOrigin dragElastic={0.2} whileDrag={{ scale: 1.04, zIndex: 50, boxShadow: "0 20px 50px rgba(0,0,0,.5)" }} onDragStart={() => setDragging(it.id)} onDragEnd={(e) => onDragEnd(it.id, e)}
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, pointerEvents: "none" }} transition={{ type: "spring", stiffness: 300, damping: 26 }}
        data-hover className={`surface group relative flex items-center gap-3 rounded-2xl p-3 ${packedView || !canDrag ? "" : "cursor-grab active:cursor-grabbing"}`}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: `${g.accent}1f`, color: g.accent, boxShadow: `inset 0 0 0 1px ${g.accent}33` }}><HoverIcon name={it.icon} size={20} /></span>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold leading-snug">{it.name}{it.okf && <span className="ml-1.5 align-middle rounded bg-emerald-400/15 px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-emerald-300">OKF</span>}</div>
          <div className="mt-0.5 font-mono text-[11px] text-mute">{kg(itemKg(it, people))} kg{it.perPerson ? ` · ${people} fő` : ""}</div>
        </div>
        {packedView ? (
          <button onClick={() => remove(it.id)} aria-label="Kivétel" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[.06] text-mute transition hover:bg-red-400/20 hover:text-red-300">×</button>
        ) : (
          <button onClick={() => add(it.id)} aria-label="Betesz" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[.06] transition hover:bg-emerald-400/20 hover:text-emerald-300">+</button>
        )}
      </motion.div>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
        {/* mobilon a hátizsák felül */}
        {/* polc */}
        <div className="min-w-0">
          <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0 [scrollbar-width:none]">
            <div className="flex w-max gap-2">
              {([["all", "Mind"], ...Object.entries(BAG_GROUPS).map(([k, v]) => [k, v.name])] as [BagGroup | "all", string][]).map(([k, n]) => (
                <button key={k} onClick={() => setGroup(k)} className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1 transition ${group === k ? "bg-white text-ink ring-white" : "text-mute ring-white/10 hover:text-white"}`}>{n}</button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-mute">
            <span>Háztartás:</span>
            {([["fő", people, setPeople, 1], ["gyerek", kids, setKids, 0], ["állat", pets, setPets, 0]] as const).map(([l, v, set, min]) => (
              <span key={l} className="inline-flex items-center gap-1 rounded-full bg-white/[.05] px-2 py-1 ring-1 ring-white/10">
                <button onClick={() => set(Math.max(min, v - 1))} className="h-6 w-6 rounded-full hover:bg-white/10">−</button><b className="w-4 text-center text-white">{v}</b><button onClick={() => set(Math.min(12, v + 1))} className="h-6 w-6 rounded-full hover:bg-white/10">+</button><span className="ml-1">{l}</span>
              </span>
            ))}
          </div>
          <motion.div layout className="mt-4 grid gap-2 sm:grid-cols-2">
            <AnimatePresence>
              {shelf.map((it) => <Card key={it.id} it={it} />)}
            </AnimatePresence>
          </motion.div>
          {shelf.length === 0 && <p className="mt-6 text-center text-sm text-mute">Minden tétel a csomagban van ebből a csoportból.</p>}
          <p className="mt-6 text-xs text-mute">{canDrag ? "Húzd a tételt a hátizsákra, vagy kattints a + gombra." : "Koppints a + gombra, és a tétel a hátizsákba kerül."} A súlyok átlagos termékek alapján becsültek.</p>
        </div>

        {/* hátizsák */}
        <aside className="order-first min-w-0 lg:order-none lg:sticky lg:top-24 lg:h-fit">
          <motion.div ref={bagRef} animate={{ scale: dragging ? 1.02 : 1, boxShadow: dragging ? "0 0 0 2px #22d3ee, 0 0 60px rgba(34,211,238,.25)" : "0 0 0 0px transparent" }} className="surface relative overflow-hidden rounded-3xl p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="eyebrow">Hátizsák</div>
                <div className="font-display mt-1 text-3xl font-bold tabular-nums"><span className={over ? "text-red-400" : "text-grad"}>{kg(total)}</span> <span className="text-lg text-mute">/ {BAG_LIMIT_KG} kg</span></div>
              </div>
              <div className="text-right">
                <div className="eyebrow">OKF-lista</div>
                <div className="font-display mt-1 text-3xl font-bold tabular-nums">{score}<span className="text-lg text-mute">%</span></div>
              </div>
            </div>
            <Backpack fill={total / BAG_LIMIT_KG} over={over} shake={shake} />
            <AnimatePresence mode="wait">
              {over ? (
                <motion.div key="over" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl bg-red-400/10 px-3 py-2 text-sm ring-1 ring-red-400/30">Túl nehéz: {kg(total - BAG_LIMIT_KG)} kg-mal a 20 kg-os határ fölött. Ezzel nem tudsz gyalog, gyerekkel menni.</motion.div>
              ) : okfMissing.length ? (
                <motion.div key="miss" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl bg-amber-400/10 px-3 py-2 text-sm ring-1 ring-amber-400/30">
                  Hiányzik a hivatalos listáról: {okfMissing.map((i) => i.name.split(" (")[0].split(",")[0]).join(", ")}.
                </motion.div>
              ) : (
                <motion.div key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl bg-emerald-400/10 px-3 py-2 text-sm ring-1 ring-emerald-400/30">Minden OKF-tétel benne van, és felkapható. Írd rá a neved és a címed.</motion.div>
              )}
            </AnimatePresence>
            <div className="mt-3 flex gap-2">
              <button onClick={share} className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold"><HoverIcon name="instagram" size={15} /> Megosztás</button>
              <button onClick={() => setInBag([])} className="btn-ghost rounded-xl px-4 py-2.5 text-sm font-semibold">Kipakol</button>
            </div>
          </motion.div>

          <div className="mt-4 hidden space-y-2 lg:block">
            <AnimatePresence>
              {packed.map((it) => <Card key={it.id} it={it} packedView />)}
            </AnimatePresence>
            {packed.length === 0 && <div className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-mute">Üres a hátizsák. Kezdd az iratokkal és a vízzel.</div>}
          </div>
          <div className="-mx-5 mt-3 overflow-x-auto px-5 lg:hidden [scrollbar-width:none]">
            <div className="flex w-max gap-2">
              {packed.map((it) => (
                <button key={it.id} onClick={() => remove(it.id)} className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/[.06] py-1.5 pl-3 pr-2 text-xs ring-1 ring-white/10">
                  {it.name.split(" (")[0].split(",")[0]} <span className="text-mute">{kg(itemKg(it, people))} kg</span><span className="ml-1 grid h-4 w-4 place-items-center rounded-full bg-white/10 text-[10px]">×</span>
                </button>
              ))}
              {packed.length === 0 && <span className="text-xs text-mute">Üres a hátizsák. Koppints lent a + gombokra.</span>}
            </div>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-mute">
            Forrás: <a className="text-cyan/80 hover:underline" href={sourceById("hu-okf-arviz")?.url} target="_blank" rel="noopener">BM OKF</a> (20 kg, kötelező tételek) és <a className="text-cyan/80 hover:underline" href={sourceById("de-bbk-ratgeber")?.url} target="_blank" rel="noopener">BBK</a> (kiegészítők). <Link href="/terv" className="text-cyan hover:underline">A tervezőben</Link> a teljes otthoni készletet is végignézheted.
          </p>
        </aside>
      </div>
    </div>
  );
}
