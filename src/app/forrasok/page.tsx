import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";
import { SOURCES } from "@/lib/sources";

export const metadata: Metadata = { title: "Forrásregiszter", description: "Minden szám mögött hivatalos forrás – dátummal, linkkel." };

const kindLabel = { official: "hivatalos", "official-mirror": "hivatalos (önkormányzati tükör)", press: "sajtó – kiegészítő" };

export default function Page() {
  return (
    <>
      <PageHead kicker="Forrásregiszter" title={<>Minden szám mögött <span className="text-grad">hivatalos forrás</span></>} sub="Csak állami, hatósági vagy EU-s kiadványokból dolgozunk. A tartalmat saját szavainkkal foglaljuk össze, és feltüntetjük az utolsó ellenőrzés dátumát." />
      <div className="mx-auto max-w-5xl space-y-4 px-5 md:px-8">
        {SOURCES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 4) * 0.05}>
            <article id={s.id} className="glass scroll-mt-28 rounded-3xl p-6 target:ring-2 target:ring-cyan">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-display rounded-lg bg-white/8 px-2 py-1 font-bold">{s.region}</span>
                <span className={`rounded-full px-2.5 py-1 ${s.kind === "press" ? "bg-amber-400/10 text-amber-300" : "bg-emerald-400/10 text-emerald-300"}`}>{kindLabel[s.kind]}</span>
                <span className="text-mute">{s.year} · ellenőrizve: {s.checked}</span>
              </div>
              <h2 className="font-display mt-3 text-lg font-semibold">
                <a href={s.url} target="_blank" rel="noopener" className="hover:text-cyan">{s.title} ↗</a>
              </h2>
              <div className="text-sm text-mute">{s.publisher}</div>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.facts.map((f) => (
                  <li key={f} className="flex gap-2.5"><span className="text-emerald-400">›</span>{f}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
