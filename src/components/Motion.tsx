"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, className, y = 24 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Szavanként beúszó cím */
export function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
          {i < text.split(" ").length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/** Kurzor-követő spotlight kártya */
export function Spot({ children, className = "", as: Tag = "div", ...rest }: React.HTMLAttributes<HTMLElement> & { as?: "div" | "article" | "a" | "li"; href?: string }) {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = Tag as any;
  return (
    <T onMouseMove={onMove} className={`relative surface surface-hover spot ${className}`} {...rest}>
      {children}
    </T>
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
    return () => { c.stop(); u(); };
  }, [inView, to, decimals, mv]);
  return <span ref={ref} className={className}>{v}</span>;
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
    return () => { c.stop(); u(); };
  }, [value, inView, mv]);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg ref={ref} viewBox="0 0 100 100" width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#34d399" /><stop offset=".55" stopColor="#22d3ee" /><stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <filter id="ringglow"><feGaussianBlur stdDeviation="2.2" /></filter>
        </defs>
        {Array.from({ length: 60 }).map((_, i) => (
          <line key={i} x1="50" y1="3" x2="50" y2={i % 5 === 0 ? "7" : "5"} stroke="rgba(255,255,255,.12)" strokeWidth=".6" transform={`rotate(${i * 6} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r={r} stroke="rgba(255,255,255,.06)" strokeWidth="6" fill="none" />
        <motion.circle cx="50" cy="50" r={r} stroke="url(#ringg)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={C} style={{ strokeDashoffset: dash }} filter="url(#ringglow)" opacity=".7" />
        <motion.circle cx="50" cy="50" r={r} stroke="url(#ringg)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={C} style={{ strokeDashoffset: dash }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-6xl font-bold tabular-nums">{shown}</span>
        {label && <span className="eyebrow mt-1.5">{label}</span>}
        {sub && <span className="mt-1 text-[11px] text-mute">{sub}</span>}
      </div>
    </div>
  );
}
