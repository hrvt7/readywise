"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ to, decimals = 0, className }: { to: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [v, setV] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    const u = mv.on("change", (x) => setV(x.toFixed(decimals)));
    return () => {
      c.stop();
      u();
    };
  }, [inView, to, decimals, mv]);
  return (
    <span ref={ref} className={className}>
      {v}
    </span>
  );
}

export function ScoreRing({ value, size = 220, label, sub }: { value: number; size?: number; label?: string; sub?: string }) {
  const r = 44;
  const C = 2 * Math.PI * r;
  const mv = useMotionValue(0);
  const dash = useTransform(mv, (v) => C - (v / 100) * C);
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    const u = mv.on("change", (x) => setShown(Math.round(x)));
    return () => {
      c.stop();
      u();
    };
  }, [value, inView, mv]);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg ref={ref} viewBox="0 0 100 100" width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset=".55" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <filter id="ringglow">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r={r} stroke="rgba(255,255,255,.07)" strokeWidth="7" fill="none" />
        <motion.circle cx="50" cy="50" r={r} stroke="url(#ringg)" strokeWidth="7" fill="none" strokeLinecap="round" strokeDasharray={C} style={{ strokeDashoffset: dash }} filter="url(#ringglow)" opacity=".7" />
        <motion.circle cx="50" cy="50" r={r} stroke="url(#ringg)" strokeWidth="7" fill="none" strokeLinecap="round" strokeDasharray={C} style={{ strokeDashoffset: dash }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-6xl font-bold tracking-tight">{shown}</span>
        {label && <span className="text-xs text-mute mt-1">{label}</span>}
        {sub && <span className="text-[11px] text-mute/80">{sub}</span>}
      </div>
    </div>
  );
}
