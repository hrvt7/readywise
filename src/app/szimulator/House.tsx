"use client";
import { motion } from "motion/react";
import { indoorTemp, isDaylight, phoneBattery, waterHours, FRIDGE_SAFE_H, freezerSafeH, type SimInput, clockAt } from "@/lib/sim";

const lerp = (a: number, b: number, k: number) => a + (b - a) * Math.min(1, Math.max(0, k));
function mix(c1: [number, number, number], c2: [number, number, number], k: number) {
  return `rgb(${c1.map((v, i) => Math.round(lerp(v, c2[i], k))).join(",")})`;
}

/** Lakás-keresztmetszet: az idő előrehaladtával sötétedik, hűl, lemerül, felenged. */
export default function House({ t, inp }: { t: number; inp: SimInput }) {
  const day = isDaylight(t, inp.season);
  const temp = indoorTemp(t, inp.season);
  const batt = phoneBattery(t, inp.has.powerbank);
  const fridgeBad = t >= FRIDGE_SAFE_H;
  const freezerBad = t >= freezerSafeH(inp.freezerFull);
  const wh = waterHours(inp);
  const waterFrac = inp.tapWorks ? 1 : wh ? Math.max(0, 1 - t / wh) : 0;
  const hasLight = inp.has.flashlight || inp.has.candles;
  const cold = inp.season === "winter" ? Math.min(1, Math.max(0, (21 - temp) / 14)) : 0;
  const hot = inp.season === "summer" ? Math.min(1, Math.max(0, (temp - 21) / 8)) : 0;
  const clk = clockAt(t, inp.season);
  const huddle = inp.season === "winter" && temp < 16;

  // égbolt: nappal / éjszaka, évszak szerint
  const skyTop = day ? (inp.season === "winter" ? "#8fb3d9" : "#4aa3e8") : "#070a18";
  const skyBot = day ? (inp.season === "winter" ? "#dbe7f3" : "#bfe3ff") : "#141a33";
  const darkness = day ? 0 : hasLight ? 0.55 : 0.82;
  const roomTint = inp.season === "winter" ? mix([255, 243, 214], [168, 199, 235], cold) : mix([255, 243, 214], [255, 196, 160], hot);

  return (
    <svg viewBox="0 0 800 520" className="h-auto w-full" role="img" aria-label="A lakás állapota az áramszünet adott órájában">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <motion.stop offset="0" animate={{ stopColor: skyTop }} transition={{ duration: 0.6 }} />
          <motion.stop offset="1" animate={{ stopColor: skyBot }} transition={{ duration: 0.6 }} />
        </linearGradient>
        <radialGradient id="lamp" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd27a" stopOpacity=".85" />
          <stop offset="1" stopColor="#ffd27a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="candle" cx="0.5" cy="0.6" r="0.5">
          <stop offset="0" stopColor="#ffb257" stopOpacity=".7" />
          <stop offset="1" stopColor="#ffb257" stopOpacity="0" />
        </radialGradient>
        <clipPath id="houseClip"><rect x="110" y="150" width="580" height="300" rx="6" /></clipPath>
        <clipPath id="jug"><path d="M560 372h28v46a6 6 0 0 1-6 6h-16a6 6 0 0 1-6-6z" /></clipPath>
      </defs>

      {/* ég + föld */}
      <rect width="800" height="520" fill="url(#sky)" />
      {!day && [...Array(28)].map((_, i) => <circle key={i} cx={(i * 137) % 800} cy={(i * 71) % 140 + 10} r={i % 3 ? 1 : 1.6} fill="#fff" opacity=".7" />)}
      {inp.season === "winter" && day && <circle cx="700" cy="70" r="26" fill="#fff6d5" opacity=".9" />}
      {inp.season === "summer" && day && <circle cx="690" cy="70" r="34" fill="#ffe28a" />}
      {!day && <circle cx="110" cy="70" r="22" fill="#f4f1e6" opacity=".9" />}
      <rect y="450" width="800" height="70" fill={inp.season === "winter" ? "#e9eef5" : "#2f6b3a"} />
      {inp.season === "winter" && <rect y="450" width="800" height="6" fill="#fff" opacity=".8" />}
      {/* szomszéd házak sötétben */}
      <g opacity={day ? 0.55 : 0.9} fill={day ? "#9fb0c7" : "#0e1326"}>
        <rect x="10" y="300" width="80" height="150" />
        <rect x="710" y="320" width="80" height="130" />
      </g>

      {/* a ház */}
      <path d="M100 150 L400 40 L700 150 Z" fill="#1d2433" />
      <rect x="110" y="150" width="580" height="300" fill="#f4efe6" />
      <g clipPath="url(#houseClip)">
        <motion.rect x="110" y="150" width="580" height="300" animate={{ fill: roomTint }} transition={{ duration: 0.6 }} />
        {/* falak */}
        <rect x="300" y="150" width="8" height="300" fill="#d9d2c5" />
        <rect x="500" y="150" width="8" height="300" fill="#d9d2c5" />
        {/* ablakok: ég */}
        {[160, 360, 560].map((x) => <rect key={x} x={x} y="200" width="80" height="90" rx="4" fill="url(#sky)" stroke="#c8c0b1" strokeWidth="4" />)}

        {/* KONYHA: hűtő */}
        <g>
          <rect x="130" y="300" width="60" height="150" rx="6" fill="#dfe6ee" stroke="#aeb9c7" strokeWidth="3" />
          <line x1="130" y1="350" x2="190" y2="350" stroke="#aeb9c7" strokeWidth="3" />
          <motion.circle cx="160" cy="325" r="9" animate={{ fill: freezerBad ? "#ef4444" : t > 0 ? "#f59e0b" : "#22c55e" }} />
          <motion.circle cx="160" cy="400" r="9" animate={{ fill: fridgeBad ? "#ef4444" : t > 0 ? "#f59e0b" : "#22c55e" }} />
          <text x="160" y="470" textAnchor="middle" fontSize="12" fill="#6b7280" fontFamily="var(--font-jet)">fagyasztó · hűtő</text>
          {/* tűzhely */}
          <rect x="210" y="380" width="70" height="70" fill="#cfd6df" />
          <rect x="215" y="372" width="60" height="8" rx="2" fill="#9aa6b5" />
        </g>

        {/* NAPPALI: kanapé, asztal, telefon, emberek */}
        <g>
          <rect x="330" y="395" width="150" height="55" rx="10" fill="#8b6f5e" />
          <rect x="330" y="380" width="150" height="25" rx="8" fill="#a3826f" />
          <rect x="330" y="340" width="12" height="60" rx="4" fill="#8b6f5e" />
          <rect x="468" y="340" width="12" height="60" rx="4" fill="#8b6f5e" />
          {/* asztalka + telefon */}
          <rect x="400" y="430" width="60" height="6" rx="2" fill="#5b4636" />
          <rect x="415" y="414" width="30" height="16" rx="3" fill="#111827" />
          <rect x="418" y="417" width={24 * Math.min(1, batt / 100)} height="10" rx="1.5" fill={batt > 20 ? "#22c55e" : batt > 0 ? "#f59e0b" : "#ef4444"} />
          {/* emberek */}
          {Array.from({ length: Math.min(4, inp.people) }).map((_, i) => {
            const baseX = huddle ? 385 + i * 22 : 340 + i * 38;
            return (
              <motion.g key={i} animate={{ x: baseX, y: huddle ? 4 : 0 }} transition={{ type: "spring", stiffness: 60, damping: 16 }}>
                <circle cx="0" cy="362" r="9" fill="#e7c6a5" />
                <rect x="-9" y="372" width="18" height="24" rx="6" fill={i % 2 ? "#5b8def" : "#e86a7a"} />
              </motion.g>
            );
          })}
          {huddle && <motion.rect initial={{ opacity: 0 }} animate={{ opacity: 1 }} x="372" y="370" width={Math.min(4, inp.people) * 22 + 20} height="30" rx="10" fill="#b65c3c" opacity=".9" />}
        </g>

        {/* HÁLÓ / FÜRDŐ: vizeskanna + ágy */}
        <g>
          <rect x="600" y="400" width="80" height="50" rx="6" fill="#7b8fa6" />
          <rect x="600" y="388" width="80" height="16" rx="5" fill="#e5e7eb" />
          <path d="M560 372h28v46a6 6 0 0 1-6 6h-16a6 6 0 0 1-6-6z" fill="#e8f1fb" stroke="#93b4d6" strokeWidth="2" />
          <motion.rect clipPath="url(#jug)" x="560" y="372" width="28" height="52" animate={{ y: 372 + 52 * (1 - waterFrac) }} fill="#38bdf8" />
          <text x="574" y="440" textAnchor="middle" fontSize="12" fill="#6b7280" fontFamily="var(--font-jet)">{inp.tapWorks ? "csap folyik" : "víz"}</text>
        </g>

        {/* hőmérő a falon */}
        <g>
          <rect x="520" y="200" width="14" height="70" rx="7" fill="#fff" stroke="#c8c0b1" strokeWidth="2" />
          <motion.rect x="524" width="6" rx="3" animate={{ y: 204 + 60 * (1 - Math.min(1, Math.max(0, (temp + 5) / 35))), height: 62 - 60 * (1 - Math.min(1, Math.max(0, (temp + 5) / 35))) }} fill={temp < 16 ? "#38bdf8" : temp > 27 ? "#f97316" : "#ef4444"} />
          <circle cx="527" cy="268" r="8" fill={temp < 16 ? "#38bdf8" : temp > 27 ? "#f97316" : "#ef4444"} />
          <text x="545" y="240" fontSize="14" fontWeight="700" fill="#374151" fontFamily="var(--font-jet)">{temp.toFixed(0)}°</text>
        </g>

        {/* sötétség + fényforrás */}
        <motion.rect x="110" y="150" width="580" height="300" fill="#05070f" animate={{ opacity: darkness }} transition={{ duration: 0.6 }} />
        {!day && hasLight && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {inp.has.flashlight ? <ellipse cx="405" cy="330" rx="150" ry="120" fill="url(#lamp)" /> : <ellipse cx="405" cy="360" rx="110" ry="90" fill="url(#candle)" />}
            {!inp.has.flashlight && <motion.circle cx="430" cy="425" r="3" fill="#ffd27a" animate={{ r: [3, 4, 3], opacity: [1, 0.7, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} />}
          </motion.g>
        )}
        {!day && !hasLight && batt > 0 && <circle cx="430" cy="420" r="26" fill="#cfe3ff" opacity=".18" />}
        {/* lehelet a hidegben */}
        {huddle && [0, 1].map((i) => <motion.circle key={i} cx={395 + i * 44} cy="352" r="4" fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0], y: [0, -14], x: [0, 8] }} transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.9 }} />)}
      </g>
      {/* óra */}
      <rect x="110" y="458" width="150" height="34" rx="8" fill="#06080f" opacity=".85" />
      <text x="185" y="481" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="var(--font-jet)">
        {clk.day + 1}. nap · {String(clk.h).padStart(2, "0")}:{String(clk.m).padStart(2, "0")}
      </text>
      <text x="690" y="481" textAnchor="end" fontSize="13" fill={day ? "#1f2937" : "#cbd5e1"} fontFamily="var(--font-jet)">kint {inp.season === "winter" ? "−5" : "29"} °C</text>
    </svg>
  );
}
