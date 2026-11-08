"use client";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { COUNTRIES, type CountryCode } from "@/lib/countries";
import { allTips, TIP_TAGS, type TipTag } from "@/lib/guides";
import { sourceById } from "@/lib/sources";

const cname = (c: CountryCode) => COUNTRIES.find((x) => x.code === c)?.name ?? c;
const tagOf = (t: TipTag) => TIP_TAGS.find((x) => x.id === t)!;

export default function Tips() {
  const tips = useMemo(() => {
    // körforgásos sorrend országonként (magyar elöl), hogy változatos legyen a fal
    const all = allTips();
    const by = new Map<string, typeof all>();
    for (const t of all) by.set(t.code, [...(by.get(t.code) ?? []), t]);
    const keys = [...by.keys()].sort((a, b) => (a === "HU" ? -1 : b === "HU" ? 1 : 0));
    const out: typeof all = [];
    for (let r = 0; out.length < all.length; r++) for (const k of keys) { const x = by.get(k)![r]; if (x) out.push(x); }
    return out;
  }, []);
  const [limit, setLimit] = useState(18);
  const [tag, setTag] = useState<TipTag | "all">("all");
  const [country, setCountry] = useState<CountryCode | "all">("all");
  const [i, setI] = useState(0);
  const filtered = tips.filter((t) => (tag === "all" || t.tag === tag) && (country === "all" || t.code === country));
  const shown = filtered.slice(0, limit);
  const countries = [...new Set(tips.map((t) => t.code))];
  const feat = tips[i % Math.max(1, tips.length)];

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {feat && (
        <div className="surface relative overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="pointer-events-none absolute -left-20 -top-28 h-80 w-80 rounded-full blur-[100px]" style={{ background: `${tagOf(feat.tag).accent}30` }} />
          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <span className="eyebrow">Véletlen tipp · {tips.length} hivatalos praktikából</span>
            <button onClick={() => setI((x) => x + 1 + Math.floor(Math.random() * Math.max(1, tips.length - 1)))} className="btn-ghost rounded-xl px-4 py-2 text-sm font-semibold">
              Következő ↻
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 16, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -12, filter: "blur(6px)" }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative mt-6">
              <h2 className="font-display max-w-3xl text-2xl font-bold leading-tight md:text-4xl">{feat.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-mute">{feat.text}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full px-3 py-1 font-semibold" style={{ background: `${tagOf(feat.tag).accent}22`, color: tagOf(feat.tag).accent }}>{tagOf(feat.tag).name}</span>
                <span className="rounded-full bg-white/[.06] px-3 py-1 text-mute">{cname(feat.code)} · {sourceById(feat.source)?.publisher}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0 [scrollbar-width:none]">
          <div className="flex w-max gap-2">
            {[{ id: "all" as const, name: "Mind", accent: "#e5e7eb" }, ...TIP_TAGS].map((t) => {
              const on = tag === t.id;
              return (
                <button key={t.id} onClick={() => { setTag(t.id); setLimit(18); }} className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ring-1 transition ${on ? "text-ink ring-transparent" : "text-mute ring-white/10 hover:text-white"}`}>
                  {on && <motion.span layoutId="tagpill" className="absolute inset-0 rounded-full" style={{ background: t.accent }} transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                  <span className="relative">{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <select value={country} onChange={(e) => { setCountry(e.target.value as CountryCode | "all"); setLimit(18); }} className="rounded-xl border border-white/10 bg-panel px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-cyan/40">
          <option value="all">Minden ország</option>
          {countries.map((c) => <option key={c} value={c}>{cname(c)}</option>)}
        </select>
      </div>

      <motion.div layout className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {shown.map((t, k) => {
            const tg = tagOf(t.tag);
            const s = sourceById(t.source);
            return (
              <motion.article layout key={t.code + t.title} initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, delay: Math.min(k, 12) * 0.025 }} className="surface surface-hover group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl p-5">
                <span className="absolute inset-x-0 top-0 h-px opacity-70" style={{ background: `linear-gradient(90deg, transparent, ${tg.accent}, transparent)` }} />
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold uppercase tracking-wider" style={{ color: tg.accent }}>{tg.name}</span>
                  <span className="rounded-md bg-white/[.06] px-1.5 py-0.5 font-mono text-mute">{t.code}</span>
                </div>
                <h3 className="font-display mt-3 text-[17px] font-semibold leading-snug">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{t.text}</p>
                {s && (
                  <a href={s.url} target="_blank" rel="noopener" className="mt-4 block truncate text-[11px] text-mute/80 transition hover:text-cyan">
                    {s.publisher} ↗
                  </a>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
      {filtered.length > limit && (
        <div className="mt-6 text-center">
          <button onClick={() => setLimit((l) => l + 18)} className="btn-ghost rounded-xl px-6 py-3 text-sm font-semibold">
            Mutass többet <span className="text-mute">({filtered.length - limit} további)</span>
          </button>
        </div>
      )}
      {filtered.length === 0 && <p className="mt-10 text-center text-mute">Ehhez a szűréshez nincs tipp.</p>}
    </div>
  );
}
