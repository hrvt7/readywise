"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { GuideIcon } from "@/components/Icons";
import SirenSignals from "@/components/SirenSignals";
import { COUNTRIES, type CountryCode } from "@/lib/countries";
import { GUIDE_TYPES, guidesByType, type GuideType } from "@/lib/guides";
import { sourceById } from "@/lib/sources";

const cname = (c: CountryCode) => COUNTRIES.find((x) => x.code === c)?.name ?? c;

export default function Situations() {
  const available = useMemo(() => GUIDE_TYPES.filter((g) => guidesByType(g.id).length > 0), []);
  const [type, setType] = useState<GuideType>(available[0]?.id ?? "war_airraid");
  const list = useMemo(() => guidesByType(type), [type]);
  const [sel, setSel] = useState<string>("HU-0");

  useEffect(() => {
    const h = window.location.hash.slice(1) as GuideType;
    if (available.some((a) => a.id === h)) setType(h);
  }, [available]);

  const current = list.find((g) => g.key === sel) ?? list.find((g) => g.code === sel.split("-")[0]) ?? list.find((g) => g.code === "HU") ?? list[0];
  const meta = GUIDE_TYPES.find((g) => g.id === type)!;
  const src = current ? sourceById(current.source) : undefined;

  const pick = (id: GuideType) => {
    setType(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {/* helyzetválasztó */}
      <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0 [scrollbar-width:none]">
        <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
          {available.map((g) => {
            const on = g.id === type;
            return (
              <button key={g.id} onClick={() => pick(g.id)} className={`relative flex items-center gap-2.5 rounded-2xl py-2 pl-2 pr-4 text-sm font-semibold ring-1 transition ${on ? "ring-white/20" : "text-mute ring-white/8 hover:text-white hover:ring-white/15"}`}>
                {on && <motion.span layoutId="sitpill" className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(135deg, ${g.accent}26, transparent 70%)` }} transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative"><GuideIcon id={g.id} size={30} /></span>
                <span className="relative whitespace-nowrap">{g.short}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="-mx-5 mt-5 overflow-x-auto px-5 lg:hidden [scrollbar-width:none]">
        <div className="flex w-max gap-2">
          {list.map((g) => {
            const on = g.key === current?.key;
            return (
              <button key={g.key} onClick={() => setSel(g.key)} className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-sm ring-1 transition ${on ? "bg-white text-ink ring-white" : "text-mute ring-white/10"}`}>
                <span className="font-mono text-[10px] opacity-70">{g.code}</span>
                {cname(g.code)}{g.title ? ` · ${g.title}` : ""}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <AnimatePresence mode="wait">
          <motion.section key={type + (current?.key ?? "")} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="surface relative min-w-0 overflow-hidden rounded-3xl p-6 md:p-9">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px]" style={{ background: `${meta.accent}33` }} />
            <div className="relative flex flex-wrap items-start gap-5">
              <motion.div initial={{ scale: 0.6, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
                <GuideIcon id={type} size={68} />
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow" style={{ color: meta.accent }}>{current ? `${cname(current.code)} hivatalos útmutatója` : "Útmutató"}</p>
                <h2 className="font-display mt-2 text-2xl font-bold leading-tight md:text-4xl">{current?.title ?? meta.name}</h2>
                <p className="mt-2 text-mute">{meta.lead}</p>
              </div>
            </div>

            {current && (
              <ol className="relative mt-8 space-y-3">
                <span className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                {current.steps.map((s, i) => (
                  <motion.li key={s} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4">
                    <span className="keycap relative z-10 grid h-10 w-10 shrink-0 place-items-center font-mono text-sm font-semibold" style={{ color: meta.accent }}>{String(i + 1).padStart(2, "0")}</span>
                    <p className="min-w-0 rounded-2xl bg-white/[.035] px-4 py-3 text-[15px] leading-relaxed ring-1 ring-white/8">{s}</p>
                  </motion.li>
                ))}
              </ol>
            )}

            {type === "war_airraid" && current?.code === "HU" && (
              <div className="relative mt-8">
                <h3 className="font-display mb-3 text-lg font-semibold">Ismerd fel a szirénajeleket</h3>
                <SirenSignals />
              </div>
            )}

            {src && (
              <a href={src.url} target="_blank" rel="noopener" className="relative mt-7 inline-flex max-w-full items-center gap-2 rounded-full bg-white/[.05] px-4 py-2 text-xs text-mute ring-1 ring-white/10 transition hover:text-white">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="truncate">Forrás: {src.publisher} – {src.title}</span> ↗
              </a>
            )}
          </motion.section>
        </AnimatePresence>

        <aside className="min-w-0 space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface hidden rounded-3xl p-5 lg:block">
            <div className="eyebrow">Melyik ország ajánlása?</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {list.map((g) => {
                const on = g.key === current?.key;
                return (
                  <button key={g.key} onClick={() => setSel(g.key)} className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm ring-1 transition ${on ? "bg-white/[.08] text-white ring-white/20" : "text-mute ring-white/8 hover:text-white"}`}>
                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[10px]">{g.code}</span>
                    <span className="truncate">{cname(g.code)}{g.title ? ` · ${g.title}` : ""}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-mute">Az országok ajánlásai sokszor ugyanazt mondják más szavakkal. Valós helyzetben mindig a helyi hatóság aktuális utasítása az irányadó.</p>
          </div>
          <Link href="/forgatokonyvek" className="surface surface-hover block rounded-3xl p-5">
            <div className="eyebrow">Óráról órára</div>
            <div className="font-display mt-2 text-lg font-semibold">Forgatókönyvek idővonallal →</div>
            <p className="mt-1 text-sm text-mute">Mi áll le először egy téli áramszünetben, vízhiányban vagy kitelepítéskor.</p>
          </Link>
          <Link href="/tippek" className="surface surface-hover block rounded-3xl p-5">
            <div className="eyebrow">Praktikák</div>
            <div className="font-display mt-2 text-lg font-semibold">Hivatalos tippek és trükkök →</div>
          </Link>
        </aside>
      </div>
    </div>
  );
}
