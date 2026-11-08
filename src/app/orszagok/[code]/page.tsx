import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";
import { COUNTRIES, countryByCode, effectiveRule } from "@/lib/countries";
import { sourceById } from "@/lib/sources";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ code: c.code.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const c = countryByCode(code);
  return c ? { title: `${c.name} – vészhelyzeti felkészülés`, description: c.headline } : {};
}

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const c = countryByCode(code);
  if (!c) notFound();
  const e = effectiveRule(c);
  return (
    <>
      <PageHead kicker={`Ország · ${c.code}`} title={c.name} sub={c.headline} />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-6">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="glass rounded-3xl p-6">
              <div className="font-display text-5xl font-bold">{e.days}<span className="ml-2 text-xl text-mute">nap</span></div>
              <div className="mt-2 text-sm text-mute">{e.daysIsFallback ? "Nincs hivatalos szám – EU 72 órás alap" : "Hivatalosan ajánlott önellátás"}</div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="font-display text-5xl font-bold">{e.water}<span className="ml-2 text-xl text-mute">liter</span></div>
              <div className="mt-2 text-sm text-mute">{e.waterIsFallback ? "víz/fő/nap – tartalékérték (NL)" : "víz fejenként naponta – hivatalos"}</div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass rounded-3xl p-6">
              <h2 className="font-display text-xl font-semibold">A lényeg</h2>
              <ul className="mt-4 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/terv" className="btn-primary mt-6 inline-block rounded-xl px-5 py-3 text-sm font-bold">Terv készítése erre az országra →</Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="glass rounded-3xl p-6">
              <h2 className="font-display text-xl font-semibold">Források</h2>
              <ul className="mt-4 space-y-3">
                {c.sources.map((id) => {
                  const s = sourceById(id);
                  if (!s) return null;
                  return (
                    <li key={id} className="rounded-2xl bg-white/[.03] p-4 ring-1 ring-white/8">
                      <a href={s.url} target="_blank" rel="noopener" className="font-semibold hover:text-cyan">{s.title} ↗</a>
                      <div className="mt-1 text-xs text-mute">{s.publisher} · {s.year} · ellenőrizve: {s.checked}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <aside className="glass rounded-3xl p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-xl font-semibold">Segélyhívó számok</h2>
            <div className="mt-4 space-y-2">
              {c.emergency.map((x) => (
                <a key={x.number + x.label} href={`tel:${x.number}`} className="flex items-center justify-between rounded-2xl bg-white/[.04] px-4 py-3 ring-1 ring-white/8 transition hover:bg-white/[.07]">
                  <span className="text-sm text-mute">{x.label}</span>
                  <span className="font-display text-2xl font-bold">{x.number}</span>
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-mute">Életveszélyben ne a listát nézd – hívd a 112-t.</p>
          </aside>
        </Reveal>
      </div>
    </>
  );
}
