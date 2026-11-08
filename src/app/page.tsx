import Link from "next/link";
import { HeroCard } from "@/components/HeroCard";
import { CategoryIcon } from "@/components/Icons";
import { CountUp, Reveal } from "@/components/Motion";
import { Subscribe } from "@/components/Subscribe";
import { CATEGORIES } from "@/lib/checklist";
import { COUNTRIES, effectiveRule } from "@/lib/countries";
import { SOURCES } from "@/lib/sources";

const stats = [
  { n: 72, unit: "óra", l: "EU-ajánlás az önellátásra", s: "Európai Bizottság, 2025" },
  { n: 10, unit: "nap", l: "Németország ajánlása", s: "BBK" },
  { n: 14, unit: "nap", l: "Ausztria ajánlása", s: "Zivilschutzverband" },
  { n: 3, unit: "liter", l: "víz fejenként naponta", s: "Hollandia, Denk vooruit" },
];

const steps = [
  { t: "Pár kérdés", d: "Hányan vagytok, van-e gyerek vagy háziállat, melyik országban éltek, hány napra készültök." },
  { t: "Pontos mennyiségek", d: "Víz, étel és eszközök a hivatalos ajánlásokból kiszámolva – nem tippre." },
  { t: "Pontszám és hiánylista", d: "Kipipálod, ami megvan, és azonnal látod, hány napig bírnátok." },
  { t: "Nyomtatható terv", d: "Egy oldalon, a hűtőre. Az adataid a saját eszközödön maradnak." },
];

const faq = [
  { q: "Ez pánikkeltés?", a: "Nem. Az EU és több tagállam is a nyugodt, előre végiggondolt felkészülést ajánlja: áramszünetre, vízkimaradásra, árvízre, téli rendkívüli időjárásra. A háború egy a sok kockázat közül." },
  { q: "Honnan vannak a számok?", a: "Kizárólag hivatalos kiadványokból (EU, BBK, osztrák polgári védelem, holland és cseh kormány, magyar önkormányzatok). Minden tételnél ott a forrás, és a Forrásregiszterben az ellenőrzés dátuma is." },
  { q: "Van hivatalos magyar lista?", a: "Országos, mennyiségekkel megadott háztartási listát nem találtunk. Ezért az EU 72 órás ajánlásából és a vizsgált hivatalos ajánlások közül a legóvatosabb vízmennyiségből (3 l/fő/nap) indulunk – ezt mindenhol jelezzük." },
  { q: "Pénzt kerestek rajta?", a: "A bevásárlólistában lehetnek partnerlinkek, ezeket mindig jelöljük. A partnerség nem befolyásolja a listát: a sorrendet a hiány és a fontosság adja." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
        <div className="aurora" />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-400/10 px-3.5 py-1.5 text-xs text-indigo-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                Hivatalos EU-s és nemzeti források alapján
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl font-bold leading-[1.04] tracking-[-0.04em] md:text-7xl">
                Készülj fel nyugodtan.
                <br />
                <span className="text-grad">Percek alatt.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
                Személyre szabott felkészülési terv a háztartásodra: víz, étel, áram, gyógyszer, menekülés. Pontos mennyiségekkel, forrásokkal, félelemkeltés nélkül.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/terv" className="btn-primary rounded-xl px-6 py-3.5 font-bold">Terv készítése →</Link>
                <Link href="/forrasok" className="rounded-xl border border-white/12 px-6 py-3.5 font-semibold transition hover:bg-white/5">Források megtekintése</Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute">
                <span>✓ Nincs regisztráció</span>
                <span>✓ Adataid az eszközödön maradnak</span>
                <span>✓ Nyomtatható</span>
              </div>
            </Reveal>
          </div>
          <HeroCard />
        </div>
      </section>

      {/* STATS */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="bg-ink/40 p-7">
              <div className="font-display text-4xl font-bold md:text-5xl">
                <CountUp to={s.n} />
                <span className="text-grad ml-1.5 text-2xl md:text-3xl">{s.unit}</span>
              </div>
              <div className="mt-2 text-sm">{s.l}</div>
              <div className="mt-1 text-xs text-mute">{s.s}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-mint">Mire készülünk?</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">Hat terület. Mindegyiknél egyszerű, ellenőrzött lépések.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[...CATEGORIES, { id: "globe", name: "Országok", blurb: "HU, AT, DE, CZ, NL, BE hivatalos ajánlásai egymás mellett.", accent: "#818cf8" }, { id: "print", name: "Nyomtatható terv", blurb: "Egyoldalas lista a hűtőre, családi kontaktlappal.", accent: "#cbd5e1" }].map((c, i) => (
            <Reveal key={c.id} delay={(i % 4) * 0.07}>
              <Link
                href={c.id === "globe" ? "/orszagok" : "/terv"}
                className="glass group relative block h-full overflow-hidden rounded-3xl p-6 transition duration-500 hover:-translate-y-1.5"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition duration-700 group-hover:opacity-60" style={{ background: c.accent }} />
                <div className="transition duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <CategoryIcon id={c.id} size={60} />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{c.blurb}</p>
                <span className="mt-5 inline-block text-sm font-semibold transition group-hover:translate-x-1" style={{ color: c.accent }}>
                  Megnyitás →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan">Így működik</p>
            <h2 className="font-display mt-3 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">10 perc, és tudod, hol tartasz.</h2>
            <p className="mt-5 max-w-md text-mute">Nem egy újabb hosszú lista. A tervező a te háztartásodra számol, és megmutatja, mi hiányzik a legjobban.</p>
            <Link href="/terv" className="btn-primary mt-8 inline-block rounded-xl px-6 py-3.5 font-bold">Indítsd el a tervezőt</Link>
          </Reveal>
          <div className="relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-400 via-cyan-400 to-indigo-400 opacity-40" />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1} className="relative mb-6 flex gap-5 last:mb-0">
                <div className="font-display relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-indigo-400/20 text-lg font-bold ring-1 ring-white/10 backdrop-blur">
                  {i + 1}
                </div>
                <div className="glass flex-1 rounded-2xl p-5">
                  <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-mute">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="mx-auto mt-32 max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-indigo">Országok összehasonlítása</p>
          <h2 className="font-display mt-3 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">Mit ajánlanak a hatóságok?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass mt-10 overflow-x-auto rounded-3xl">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wider text-mute">
                <tr className="border-b border-line">
                  <th className="p-5">Ország</th>
                  <th className="p-5">Időtáv</th>
                  <th className="p-5">Víz / fő / nap</th>
                  <th className="p-5">Státusz</th>
                  <th className="p-5"></th>
                </tr>
              </thead>
              <tbody>
                {COUNTRIES.map((c) => {
                  const e = effectiveRule(c);
                  return (
                    <tr key={c.code} className="border-b border-line/60 last:border-0 transition hover:bg-white/[.03]">
                      <td className="p-5 font-semibold">{c.name}</td>
                      <td className="p-5">{c.officialDays ? `${c.officialDays} nap` : <span className="text-mute">nincs hivatalos szám · {e.days} nap (EU)</span>}</td>
                      <td className="p-5">{c.waterLPerDay ? `${c.waterLPerDay} liter` : <span className="text-mute">nincs ellenőrzött szám · {e.water} l</span>}</td>
                      <td className="p-5">
                        <span className={`rounded-full px-2.5 py-1 text-xs ${c.status === "official" ? "bg-emerald-400/10 text-emerald-300" : "bg-amber-400/10 text-amber-300"}`}>
                          {c.status === "official" ? "hivatalos" : "részleges"}
                        </span>
                      </td>
                      <td className="p-5 text-right">
                        <Link href={`/orszagok/${c.code.toLowerCase()}`} className="text-cyan hover:underline">Részletek →</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* SOURCES MARQUEE */}
      <section className="mt-32 overflow-hidden border-y border-line py-8">
        <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm text-mute">
          {[...SOURCES, ...SOURCES].map((s, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {s.publisher}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-32 max-w-4xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">Gyakori kérdések</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <details className="glass group rounded-2xl p-5 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <span className="ml-4 text-xl text-mute transition group-open:rotate-45">+</span>
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
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-16">
            <div className="aurora opacity-80" />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">Havonta 10 perc. Ennyi kell, hogy készen állj.</h2>
                <p className="mt-4 max-w-lg text-mute">Rövid havi emlékeztető: mi jár le, mit tölts fel, mit ellenőrizz. Spam nélkül.</p>
              </div>
              <Subscribe />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
