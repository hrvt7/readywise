import type { Metadata } from "next";
import Link from "next/link";
import { GlobeIcon } from "@/components/Icons";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";
import { COUNTRIES, effectiveRule } from "@/lib/countries";

export const metadata: Metadata = { title: "Országok", description: "Hivatalos vészhelyzeti felkészülési ajánlások országonként." };

export default function Page() {
  return (
    <>
      <PageHead kicker="Országok" title={<>Hivatalos ajánlások, <span className="text-grad">egymás mellett</span></>} sub="Minden ország más időtávval és mennyiségekkel számol. Itt látod, mit mondanak a hatóságok – forrással." />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {COUNTRIES.map((c, i) => {
          const e = effectiveRule(c);
          return (
            <Reveal key={c.code} delay={(i % 3) * 0.08}>
              <Link href={`/orszagok/${c.code.toLowerCase()}`} className="glass group block h-full rounded-3xl p-6 transition duration-500 hover:-translate-y-1.5">
                <div className="flex items-start justify-between">
                  <div className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/25 to-emerald-400/20 text-lg font-bold ring-1 ring-white/10">{c.code}</div>
                  <span className={`rounded-full px-2.5 py-1 text-xs ${c.status === "official" ? "bg-emerald-400/10 text-emerald-300" : "bg-amber-400/10 text-amber-300"}`}>{c.status === "official" ? "hivatalos számok" : "részleges"}</span>
                </div>
                <h2 className="font-display mt-5 text-2xl font-semibold">{c.name}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-mute">{c.headline}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/[.04] p-3 ring-1 ring-white/8">
                    <div className="font-display text-2xl font-bold">{e.days}<span className="ml-1 text-sm text-mute">nap</span></div>
                    <div className="text-[11px] text-mute">{e.daysIsFallback ? "EU-alap" : "hivatalos"}</div>
                  </div>
                  <div className="rounded-xl bg-white/[.04] p-3 ring-1 ring-white/8">
                    <div className="font-display text-2xl font-bold">{e.water}<span className="ml-1 text-sm text-mute">l/fő/nap</span></div>
                    <div className="text-[11px] text-mute">{e.waterIsFallback ? "tartalékérték" : "hivatalos"}</div>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
        <Reveal delay={0.1}>
          <div className="glass flex h-full flex-col items-start justify-center rounded-3xl p-6">
            <GlobeIcon size={56} />
            <h2 className="font-display mt-4 text-xl font-semibold">Hamarosan</h2>
            <p className="mt-2 text-sm text-mute">Lengyelország, Szlovákia, Románia, Franciaország – az eredeti kiadványok ellenőrzése után kerülnek fel.</p>
          </div>
        </Reveal>
      </div>
    </>
  );
}
