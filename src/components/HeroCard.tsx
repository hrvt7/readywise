"use client";
import { motion } from "motion/react";
import { ScoreRing } from "./Motion";

const bars = [
  { l: "Víz", v: 0.66, t: "2 / 3 nap", c: "#38bdf8" },
  { l: "Étel", v: 1, t: "3 / 3 nap", c: "#34d399" },
  { l: "Áram és információ", v: 0.25, t: "hiányos", c: "#fbbf24" },
  { l: "Egészség", v: 0.8, t: "majdnem kész", c: "#a78bfa" },
];

export function HeroCard() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative surface rounded-[26px] p-7 md:p-8"
        style={{ transformPerspective: 1200 }}
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow">Példa · 2 felnőtt, 1 gyerek</span>
          <span className="keycap px-2.5 py-1 text-[11px] text-mute">72h</span>
        </div>
        <div className="mt-4 flex justify-center">
          <ScoreRing value={62} label="felkészültség" sub="kb. 2 napig bírnátok" />
        </div>
        <div className="mt-6 space-y-3.5">
          {bars.map((b, i) => (
            <div key={b.l}>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="text-mute">{b.l}</span>
                <span className="font-mono text-[11px] text-fg">{b.t}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[.05]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: b.c, boxShadow: `0 0 14px ${b.c}99` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${b.v * 100}%` }}
                  transition={{ duration: 1.3, delay: 0.8 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.8 }} className="surface float absolute -left-10 top-14 z-10 hidden rounded-2xl px-4 py-3 lg:block">
        <div className="eyebrow">Szükséges víz</div>
        <div className="font-display mt-1 text-xl font-bold text-sky-300">27 liter</div>
        <div className="font-mono text-[10px] text-dim">3 fő × 3 l × 3 nap</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.8 }} className="surface float absolute -right-8 -bottom-7 z-10 hidden rounded-2xl px-4 py-3 lg:block" style={{ animationDelay: "-3s" }}>
        <div className="flex items-center gap-2 text-sm">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" /></span>
          <span className="font-semibold">Hiányzik: elemes rádió</span>
        </div>
        <div className="mt-0.5 text-[11px] text-mute">Áramszünetben ez az egyetlen hírforrás</div>
      </motion.div>
      </motion.div>
    </div>
  );
}
