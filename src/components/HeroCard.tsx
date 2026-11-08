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
        initial={{ opacity: 0, y: 40, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative rounded-[28px] p-7 md:p-8"
        style={{ transformPerspective: 1200 }}
      >
        <div className="flex items-center justify-between text-xs text-mute">
          <span>Példa háztartás · 2 felnőtt, 1 gyerek</span>
          <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">72 óra</span>
        </div>
        <div className="mt-4 flex justify-center">
          <ScoreRing value={62} label="felkészültség / 100" sub="kb. 2 napig bírnátok" />
        </div>
        <div className="mt-6 space-y-3.5">
          {bars.map((b, i) => (
            <div key={b.l}>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="text-mute">{b.l}</span>
                <span className="font-semibold">{b.t}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/6">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${b.c}, ${b.c}aa)`, boxShadow: `0 0 16px ${b.c}88` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${b.v * 100}%` }}
                  transition={{ duration: 1.2, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="glass float absolute -left-8 top-16 hidden rounded-2xl px-4 py-3 text-sm lg:block"
      >
        <div className="text-xs text-mute">Szükséges víz</div>
        <div className="font-display text-xl font-bold text-sky-300">27 liter</div>
        <div className="text-[11px] text-mute">3 fő × 3 l × 3 nap</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="glass float absolute -right-6 -bottom-8 hidden rounded-2xl px-4 py-3 text-sm lg:block"
        style={{ animationDelay: "-3s" }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
          </span>
          <span className="font-semibold">Hiányzik: elemes rádió</span>
        </div>
        <div className="mt-0.5 text-[11px] text-mute">Áramszünetben ez lehet az egyetlen hírforrás</div>
      </motion.div>
    </div>
  );
}
