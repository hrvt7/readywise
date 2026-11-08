"use client";
import { HoverIcon } from "@/components/hover";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Magyar MoLaRi szirénajelek (forrás: BM OKF, hu-okf-molari).
 * Légiriadó: 3 × 30 mp váltakozó hang, 30 mp szünetekkel.
 * Katasztrófariadó: 120 mp folyamatos, váltakozó hang.
 * Riadó elmúlt: 2 × 30 mp egyenletes hang, 30 mp szünettel.
 * A lejátszás tízszeresen rövidített szemléltetés.
 */
type Seg = { on: boolean; sec: number; wail: boolean };
const SIGNALS: { id: string; name: string; desc: string; color: string; segs: Seg[] }[] = [
  { id: "legi", name: "Légiriadó", desc: "3 × 30 mp hullámzó hang, 30 mp szünetekkel", color: "#f87171", segs: [{ on: true, sec: 30, wail: true }, { on: false, sec: 30, wail: true }, { on: true, sec: 30, wail: true }, { on: false, sec: 30, wail: true }, { on: true, sec: 30, wail: true }] },
  { id: "kat", name: "Katasztrófariadó", desc: "120 mp folyamatos, hullámzó hang", color: "#fbbf24", segs: [{ on: true, sec: 120, wail: true }] },
  { id: "vege", name: "Riadó elmúlt", desc: "2 × 30 mp egyenletes hang, 30 mp szünettel", color: "#34d399", segs: [{ on: true, sec: 30, wail: false }, { on: false, sec: 30, wail: false }, { on: true, sec: 30, wail: false }] },
];
const TOTAL = 150; // a leghosszabb jel (légiriadó) hossza mp-ben
const SPEED = 10; // szemléltetés: tízszeres gyorsítás

function Wave({ segs, color, progress }: { segs: Seg[]; color: string; progress: number | null }) {
  const W = 600, H = 56;
  let x = 0;
  const paths: string[] = [];
  for (const s of segs) {
    const w = (s.sec / TOTAL) * W;
    if (s.on) {
      let d = `M${x},${H / 2}`;
      const steps = Math.max(8, Math.round(w / 3));
      for (let i = 0; i <= steps; i++) {
        const px = x + (w * i) / steps;
        const env = s.wail ? 0.55 + 0.45 * Math.sin((i / steps) * Math.PI * 2 * (s.sec / 10)) : 1;
        const y = H / 2 + Math.sin(i * 1.7) * (H / 2 - 6) * env;
        d += ` L${px.toFixed(1)},${y.toFixed(1)}`;
      }
      paths.push(d);
    } else {
      paths.push(`M${x},${H / 2} L${x + w},${H / 2}`);
    }
    x += w;
  }
  const used = (x / W) * 100;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-14 w-full" preserveAspectRatio="none">
      {paths.map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke={segs[i].on ? color : "rgba(255,255,255,.15)"} strokeWidth={segs[i].on ? 1.6 : 1.2} strokeDasharray={segs[i].on ? undefined : "3 5"} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15 }} vectorEffect="non-scaling-stroke" />
      ))}
      {progress != null && <rect x={(progress / 100) * W * (used / 100)} y="0" width="2" height={H} fill="#fff" />}
    </svg>
  );
}

export default function SirenSignals() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [prog, setProg] = useState(0);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<() => void>(() => {});

  useEffect(() => () => stopRef.current(), []);

  const play = (id: string) => {
    stopRef.current();
    if (playing === id) return setPlaying(null);
    const sig = SIGNALS.find((s) => s.id === id)!;
    const ctx = ctxRef.current ?? new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    ctxRef.current = ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 1800;
    osc.connect(lp).connect(gain).connect(ctx.destination);
    gain.gain.value = 0;
    const t0 = ctx.currentTime + 0.05;
    let t = t0;
    for (const s of sig.segs) {
      const dur = s.sec / SPEED;
      if (s.on) {
        gain.gain.setTargetAtTime(0.12, t, 0.15);
        if (s.wail) {
          const cycles = Math.max(1, Math.round(dur / 1.5));
          for (let c = 0; c < cycles; c++) {
            const a = t + (c * dur) / cycles;
            osc.frequency.setValueAtTime(420, a);
            osc.frequency.linearRampToValueAtTime(820, a + dur / cycles / 2);
            osc.frequency.linearRampToValueAtTime(420, a + dur / cycles);
          }
        } else {
          osc.frequency.setValueAtTime(620, t);
        }
        gain.gain.setTargetAtTime(0, t + dur - 0.2, 0.08);
      }
      t += dur;
    }
    osc.start(t0);
    osc.stop(t + 0.3);
    const total = t - t0;
    let raf = 0;
    const tick = () => {
      const p = Math.min(100, ((ctx.currentTime - t0) / total) * 100);
      setProg(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setPlaying(null);
    };
    raf = requestAnimationFrame(tick);
    stopRef.current = () => {
      cancelAnimationFrame(raf);
      try { osc.stop(); } catch {}
      setPlaying(null);
    };
    setPlaying(id);
  };

  return (
    <div className="space-y-3">
      {SIGNALS.map((s) => (
        <div key={s.id} className="rounded-2xl bg-white/[.035] p-4 ring-1 ring-white/8">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold" style={{ color: s.color }}>{s.name}</div>
              <div className="text-xs text-mute">{s.desc}</div>
            </div>
            <button onClick={() => play(s.id)} aria-label={`${s.name} meghallgatása`} className="flex shrink-0 items-center gap-2 rounded-full bg-white/[.07] px-3.5 py-2 text-xs font-semibold ring-1 ring-white/10 transition hover:bg-white/[.12]">
              {playing === s.id ? (
                <><span className="flex h-3 items-end gap-0.5">{[0, 1, 2].map((i) => <motion.span key={i} className="w-0.5 rounded bg-white" animate={{ height: [3, 12, 5, 10, 3] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.12 }} />)}</span> Leállít</>
              ) : (
                <><HoverIcon name="volume" size={15} /> Hallgasd meg</>
              )}
            </button>
          </div>
          <div className="mt-3">
            <Wave segs={s.segs} color={s.color} progress={playing === s.id ? prog : null} />
          </div>
        </div>
      ))}
      <p className="text-[11px] leading-relaxed text-mute">A lejátszás tízszeresen rövidített, böngészőben szintetizált szemléltetés, nem a valódi szirénahang. Próbariasztáskor elhangzik a „Figyelem, ez próba” szöveg – valós riasztásban soha.</p>
    </div>
  );
}
