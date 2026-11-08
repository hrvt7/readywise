import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";
import { COUNTRIES } from "@/lib/countries";
import { SOURCES, type Source } from "@/lib/sources";

export const metadata: Metadata = { title: "Forrásregiszter", description: "Minden szám mögött hivatalos forrás – dátummal, linkkel." };

const kindLabel = { official: "hivatalos", "official-mirror": "hivatalos (önkormányzati tükör)", press: "sajtó – kiegészítő" };

const regionName = (c: string) => (c === "EU" ? "Európai Unió" : COUNTRIES.find((x) => x.code === c)?.name ?? c);
const order = ["EU", ...COUNTRIES.map((c) => c.code)];
const rank = (c: string) => (order.indexOf(c) < 0 ? 999 : order.indexOf(c));
const groups = Object.entries(
  SOURCES.reduce<Record<string, Source[]>>((acc, s) => {
    (acc[s.region] ??= []).push(s);
    return acc;
  }, {}),
).sort((a, b) => rank(a[0]) - rank(b[0]));

export default function Page() {
  return (
    <>
      <PageHead kicker="Forrásregiszter" title={<>Minden szám mögött <span className="text-grad">hivatalos forrás</span></>} sub={`${SOURCES.length} hivatalos kiadvány ${groups.length} régióból. Csak állami, hatósági vagy EU-s kiadványokból dolgozunk. A tartalmat saját szavainkkal foglaljuk össze, és feltüntetjük az utolsó ellenőrzés dátumát.`} />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <nav className="-mx-5 mb-8 overflow-x-auto px-5 md:mx-0 md:px-0 [scrollbar-width:none]">
          <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
            {groups.map(([code, list]) => (
              <a key={code} href={`#r-${code}`} className="whitespace-nowrap rounded-full bg-white/[.04] px-3.5 py-1.5 text-sm text-mute ring-1 ring-white/10 transition hover:text-white">
                {regionName(code)} <span className="font-mono text-xs opacity-60">{list.length}</span>
              </a>
            ))}
          </div>
        </nav>
        <div className="space-y-14">
          {groups.map(([code, list]) => (
            <section key={code} id={`r-${code}`} className="scroll-mt-28">
              <h2 className="font-display mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="keycap px-2 py-0.5 font-mono text-xs text-mute">{code}</span>
                {regionName(code)}
              </h2>
              <div className="space-y-3">
                {list.map((s, i) => (
                  <Reveal key={s.id} delay={(i % 4) * 0.04}>
                    <article id={s.id} className="surface scroll-mt-28 rounded-3xl p-5 target:ring-2 target:ring-cyan md:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className={`rounded-full px-2.5 py-1 ${s.kind === "press" ? "bg-amber-400/10 text-amber-300" : "bg-emerald-400/10 text-emerald-300"}`}>{kindLabel[s.kind]}</span>
                        <span className="text-mute">{s.year !== "–" ? `${s.year} · ` : ""}ellenőrizve: {s.checked}</span>
                      </div>
                      <h3 className="font-display mt-3 break-words text-lg font-semibold">
                        <a href={s.url} target="_blank" rel="noopener" className="hover:text-cyan">{s.title} ↗</a>
                      </h3>
                      <div className="text-sm text-mute">{s.publisher}</div>
                      {s.facts.length > 0 && (
                        <ul className="mt-3 space-y-1.5 text-sm">
                          {s.facts.map((f) => (
                            <li key={f} className="flex gap-2.5"><span className="text-emerald-400">›</span>{f}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
