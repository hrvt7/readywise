import Link from "next/link";
import { SlippyWords } from "@/components/Pui";
import { Hero } from "@/components/Hero";
import { CategoryIcon } from "@/components/Icons";
import { CountUp, Reveal, Spot } from "@/components/Motion";
import { Subscribe } from "@/components/Subscribe";
import { CATEGORIES } from "@/lib/checklist";
import { COUNTRIES, effectiveRule } from "@/lib/countries";
import { MONTHLY, SCENARIOS } from "@/lib/scenarios";
import { SOURCES } from "@/lib/sources";

const stats = [
  { n: 72, unit: "óra", l: "amire az EU minden háztartást felkészítene", s: "Európai Bizottság, 2025" },
  { n: 10, unit: "nap", l: "a német polgári védelem ajánlása", s: "BBK" },
  { n: 14, unit: "nap", l: "az osztrák polgári védelem ajánlása", s: "Zivilschutzverband" },
  { n: 3, unit: "liter", l: "víz fejenként, naponta", s: "Hollandia, Denk vooruit" },
];

const steps = [
  { t: "Pár kérdés a háztartásról", d: "Hányan vagytok, van-e gyerek vagy háziállat, melyik országban éltek, hány napra készültök." },
  { t: "Mennyiségek, nem tippek", d: "Víz literben, étel kilóban, eszközök darabra, a kiválasztott ország hivatalos ajánlásából számolva." },
  { t: "Pontszám és hiánylista", d: "Kipipálod, ami megvan. Látod, hány napig bírnátok, és mi hiányzik a legjobban." },
  { t: "Hűtőkártya és rutin", d: "Egyoldalas nyomtatható terv, segélyhívókkal. Havonta egy tízperces feladat, hogy készen is maradj." },
];

const faq = [
  { q: "Ez pánikkeltés?", a: "Nem. Az EU és több tagállam a nyugodt, előre végiggondolt felkészülést ajánlja: áramszünetre, vízkimaradásra, árvízre, rendkívüli időjárásra. A háború egy a kockázatok közül, nem a kiindulópont." },
  { q: "Honnan vannak a számok?", a: "Kizárólag hivatalos kiadványokból: EU, német BBK, osztrák polgári védelem, holland és cseh kormány. Minden tételnél ott a forrás, a Forrásregiszterben az ellenőrzés dátuma is." },
  { q: "Van hivatalos magyar lista?", a: "Országos, mennyiségekkel megadott háztartási listát nem találtunk. Ezért az EU 72 órás ajánlásából és a vizsgált hivatalos ajánlások közül a legóvatosabb vízmennyiségből (3 l/fő/nap) indulunk, és ezt jelezzük is." },
  { q: "Pénzt kerestek rajta?", a: "A bevásárlólistában lehetnek partnerlinkek, mindig jelölve. A sorrendet a hiány és a fontosság adja, nem a jutalék." },
];

export default function Home() {
  const month = new Date().getMonth() + 1;
  const task = MONTHLY.find((m) => m.m === month)!;

  return (
    <>
      <Hero />

      {/* STATS */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="surface grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.l} className={`p-7 ${i > 0 ? "border-l border-line" : ""} ${i > 1 ? "max-md:border-t max-md:border-line" : ""} ${i === 2 ? "max-md:border-l-0" : ""}`}>
                <div className="font-display text-4xl font-bold tabular-nums md:text-[44px]">
                  <CountUp to={s.n} />
                  <span className="text-grad ml-1.5 text-xl md:text-2xl">{s.unit}</span>
                </div>
                <div className="mt-2.5 text-sm leading-snug">{s.l}</div>
                <div className="eyebrow mt-2">{s.s}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SCENARIOS teaser */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow">Forgatókönyvek</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold leading-[1.08] md:text-[44px]">Mi áll le először, és mikor?</h2>
          <p className="mt-4 max-w-xl text-mute">Óráról órára, három valószínű helyzetben. Minden lépésnél látod, melyik tétel számít.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SCENARIOS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <Spot as="a" href={`/forgatokonyvek#${s.id}`} className="group block h-full rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{s.season}</span>
                  <span className="font-mono text-[11px] text-dim">{s.beats.length} lépés</span>
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-mute">{s.tagline}</p>
                <div className="mt-5 flex gap-1.5">
                  {s.beats.map((b, j) => (
                    <span key={j} className="h-1 flex-1 rounded-full bg-white/10 transition-all duration-500 group-hover:bg-cyan/70" style={{ transitionDelay: `${j * 40}ms` }} />
                  ))}
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] text-dim"><span>{s.beats[0].at}</span><span>{s.beats[s.beats.length - 1].at}</span></div>
              </Spot>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow">Hat terület</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold leading-[1.08] md:text-[44px]">Minden, ami egy háztartást három napig tart.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.07}>
              <Spot as="a" href="/terv" className="group flex h-full items-start gap-5 rounded-3xl p-6">
                <div className="shrink-0 transition duration-500 group-hover:scale-110 group-hover:-rotate-3"><CategoryIcon id={c.id} size={56} /></div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{c.blurb}</p>
                  <span className="mt-3 inline-block text-sm font-semibold transition group-hover:translate-x-1" style={{ color: c.accent }}>Tételek →</span>
                </div>
              </Spot>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Így működik</p>
            <h2 className="font-display mt-3 text-4xl font-bold leading-[1.08] md:text-[44px]">Tíz perc, és tudod, hol tartasz.</h2>
            <p className="mt-5 max-w-md text-mute">Nem egy újabb hosszú lista. A tervező a te háztartásodra számol, és megmutatja, mi hiányzik a legjobban.</p>
            <Link href="/terv" className="btn-primary mt-8 inline-block rounded-xl px-6 py-3.5 font-bold">Indítsd el a tervezőt</Link>
          </Reveal>
          <div className="relative">
            <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-mint via-cyan to-indigo opacity-30" />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1} className="relative mb-4 flex gap-5 last:mb-0">
                <div className="keycap relative z-10 flex h-14 w-14 shrink-0 items-center justify-center text-base font-medium text-fg">0{i + 1}</div>
                <div className="surface flex-1 rounded-2xl p-5">
                  <h3 className="font-display text-[17px] font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative surface overflow-hidden rounded-[28px] p-8 md:p-12">
            <div className="shimmer pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow">E havi tízperces · {task.m}. hónap</p>
                <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">{task.title}</h2>
                <p className="mt-3 max-w-xl text-mute">{task.task}</p>
              </div>
              <Link href="/terv" className="btn-ghost rounded-xl px-6 py-3.5 font-semibold">Pipáld ki a tervezőben →</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* COUNTRIES */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow">Országok</p>
          <h2 className="font-display mt-3 text-4xl font-bold leading-[1.08] md:text-[44px]">Mit ajánlanak a hatóságok?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="surface mt-10 overflow-x-auto rounded-3xl">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  {["Ország", "Időtáv", "Víz / fő / nap", "Státusz", ""].map((h) => <th key={h} className="eyebrow p-5 font-medium">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {COUNTRIES.map((c) => {
                  const e = effectiveRule(c);
                  return (
                    <tr key={c.code} className="border-b border-line/60 transition last:border-0 hover:bg-white/[.025]">
                      <td className="p-5 font-semibold"><span className="keycap mr-3 px-2 py-0.5 text-[11px] text-mute">{c.code}</span>{c.name}</td>
                      <td className="p-5 tabular-nums">{c.officialDays ? `${c.officialDays} nap` : <span className="text-mute">nincs hivatalos · {e.days} nap (EU)</span>}</td>
                      <td className="p-5 tabular-nums">{c.waterLPerDay ? `${c.waterLPerDay} liter` : <span className="text-mute">nincs ellenőrzött · {e.water} l</span>}</td>
                      <td className="p-5"><span className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${c.status === "official" ? "bg-mint/10 text-mint" : "bg-amber/10 text-amber"}`}>{c.status === "official" ? "hivatalos" : "részleges"}</span></td>
                      <td className="p-5 text-right"><Link href={`/orszagok/${c.code.toLowerCase()}`} className="text-cyan hover:underline">Részletek →</Link></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* SOURCES slippy */}
      <section className="mt-32 border-y border-line py-10">
        <p className="eyebrow mb-6 text-center">Forrásaink</p>
        <SlippyWords
          fade
          intensity={160}
          rows={[
            SOURCES.slice(0, 6).map((s) => ({ label: s.publisher.split("–")[0].split("(")[0].trim() })),
            SOURCES.slice(5).map((s) => ({ label: s.title.length > 42 ? s.title.slice(0, 40) + "…" : s.title })),
          ]}
        />
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-32 max-w-4xl px-5 md:px-8">
        <Reveal><h2 className="font-display text-center text-4xl font-bold leading-[1.08] md:text-[44px]">Gyakori kérdések</h2></Reveal>
        <div className="mt-10 space-y-3">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <details className="surface group rounded-2xl p-5 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <span className="ml-4 font-mono text-lg text-dim transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-mute">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative surface overflow-hidden rounded-[32px] p-10 md:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mint/15 blur-3xl" />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Havi emlékeztető</p>
                <h2 className="font-display mt-3 max-w-xl text-4xl font-bold leading-[1.08] md:text-[44px]">Tíz perc havonta. Ennyi kell, hogy készen is maradj.</h2>
                <p className="mt-4 max-w-lg text-mute">Egy rövid e-mail: mi jár le, mit tölts fel, mit ellenőrizz. Spam nélkül, bármikor leiratkozhatsz.</p>
              </div>
              <Subscribe />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
