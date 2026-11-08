"use client";
import { HoverIcon } from "@/components/hover";
import Link from "next/link";
import { motion } from "motion/react";
import { AsciiHero, EyebrowPill, WordRoll } from "performative-ui";
import { HeroCard } from "./HeroCard";
import { SplitWords } from "./Motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <AsciiHero
        variant="bare"
        className="absolute inset-0 -z-0 opacity-70"
        palette={["#34d399", "#22d3ee", "#818cf8"]}
        baseOpacity={0.3}
        reactive
        spotlightOpacity={0.55}
        spotlightRadius={10}
        rippleStrength={0.8}
        fontSize={12}
        charRamp=" .:-=+*#%@"
        frameMs={60}
      />
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <EyebrowPill statusColor="#34d399">Hivatalos EU-s és nemzeti források · 2026</EyebrowPill>
          </motion.div>

          <h1 className="font-display mt-7 text-[38px] font-bold leading-[1.06] md:text-[58px]">
            <SplitWords text="Három nap nyugalom." delay={0.15} />
            <span className="block whitespace-nowrap"><span className="text-mute">Ha nincs </span>
            <WordRoll words={["áram.", "víz.", "bolt.", "térerő.", "fűtés."]} gradient intervalMs={1900} className="font-display inline-block min-w-[3.6em] pr-[0.15em] text-left align-bottom font-bold" /></span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="mt-7 max-w-xl text-[17px] leading-relaxed text-mute">
            A Haven72 kiszámolja, mennyi víz, étel és milyen eszköz kell pont a te háztartásodnak, hogy 72 órát külső segítség nélkül, nyugodtan átvészeljetek. Pontos mennyiségek, hivatalos források, tíz perc.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/terv" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold">Tervet készítek <HoverIcon name="arrow" size={18} /></Link>
            <Link href="/forgatokonyvek" className="btn-ghost rounded-xl px-6 py-3.5 font-semibold">Mi történik 72 óra alatt?</Link>
          </motion.div>

          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.8 }} className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[.12em] text-dim">
            <li>✓ Nincs regisztráció</li>
            <li>✓ Adataid az eszközödön</li>
            <li>✓ Nyomtatható</li>
            <li>✓ Offline is olvasható</li>
          </motion.ul>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}
