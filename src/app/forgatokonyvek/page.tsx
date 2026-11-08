import type { Metadata } from "next";
import Link from "next/link";
import { CategoryIcon } from "@/components/Icons";
import { Reveal, Spot } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";
import { CATEGORIES, ITEMS } from "@/lib/checklist";
import { SCENARIOS } from "@/lib/scenarios";
import { sourceById } from "@/lib/sources";

export const metadata: Metadata = { title: "Forgatókönyvek", description: "Óráról órára: mi áll le egy 72 órás áramszünetben, vízkimaradásban vagy kitelepítéskor, és mi kell hozzá." };

export default function Page() {
  return (
    <>
      <PageHead kicker="Forgatókönyvek" title={<>Mi áll le először, <span className="text-grad">és mikor?</span></>} sub="Három valószínű helyzet, óráról órára. Nem jóslat, hanem tapasztalati sorrend: segít eldönteni, mi kell tényleg a kamrába." />
      <div className="mx-auto max-w-5xl space-y-16 px-5 md:px-8">
        {SCENARIOS.map((s, si) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">{String(si + 1).padStart(2, "0")} · {s.season}</p>
                  <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">{s.name}</h2>
                  <p className="mt-3 max-w-2xl text-mute">{s.intro}</p>
                </div>
                <div className="flex gap-2">{s.cats.map((c) => <CategoryIcon key={c} id={c} size={40} />)}</div>
              </div>
            </Reveal>
            <div className="relative mt-8">
              <div className="absolute left-[68px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-mint via-cyan to-indigo opacity-30 md:block" />
              <div className="space-y-3">
                {s.beats.map((b, i) => (
                  <Reveal key={b.at} delay={i * 0.05}>
                    <div className="grid gap-3 md:grid-cols-[120px_1fr]">
                      <div className="keycap relative z-10 flex h-fit items-center justify-center self-start px-3 py-2 text-sm text-fg md:mt-4">{b.at}</div>
                      <Spot className="rounded-2xl p-5">
                        <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-mute">{b.what}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {b.need.map((id) => {
                            const it = ITEMS.find((x) => x.id === id);
                            if (!it) return null;
                            const cat = CATEGORIES.find((c) => c.id === it.cat)!;
                            return (
                              <Link key={id} href="/terv" className="inline-flex items-center gap-1.5 rounded-lg bg-white/[.04] px-2.5 py-1.5 text-xs ring-1 ring-white/8 transition hover:bg-white/[.08]">
                                <span className="h-1.5 w-1.5 rounded-full" style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }} />
                                {it.label.length > 40 ? it.label.slice(0, 38) + "…" : it.label}
                              </Link>
                            );
                          })}
                        </div>
                      </Spot>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-dim">
                <span className="eyebrow">Keret</span>
                {s.sources.map((id) => { const src = sourceById(id); return src ? <Link key={id} href={`/forrasok#${id}`} className="hover:text-white">{src.publisher.split("–")[0].split("(")[0].trim()} ↗</Link> : null; })}
              </div>
            </Reveal>
          </section>
        ))}
        <Reveal>
          <div className="surface flex flex-col items-start justify-between gap-5 rounded-3xl p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold">Nézd meg, hogy állnál.</h2>
              <p className="mt-2 text-mute">A tervező a te háztartásodra számol: hány napig bírnátok, és mi hiányzik.</p>
            </div>
            <Link href="/terv" className="btn-primary rounded-xl px-6 py-3.5 font-bold">Tervet készítek →</Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
