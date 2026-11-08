import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";
import { COUNTRIES, countryByCode, effectiveRule, num } from "@/lib/countries";
import { sourceById } from "@/lib/sources";
import { guideType, guidesFor, TIP_TAGS } from "@/lib/guides";
import { GuideIcon } from "@/components/Icons";
import SirenSignals from "@/components/SirenSignals";

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
  const g = guidesFor(c.code);
  return (
    <>
      <PageHead kicker={`Ország · ${c.code}`} title={c.name} sub={c.headline} />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-6">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="surface rounded-3xl p-6">
              <div className="font-display text-5xl font-bold tabular-nums">{e.days}<span className="ml-2 text-xl text-mute">nap</span></div>
              <div className="mt-2 text-sm text-mute">{e.daysIsFallback ? "Nincs hivatalos szám – EU 72 órás alap" : "Hivatalosan ajánlott önellátás"}</div>
            </div>
            <div className="surface rounded-3xl p-6">
              <div className="font-display text-5xl font-bold tabular-nums">{num(e.water)}<span className="ml-2 text-xl text-mute">liter</span></div>
              <div className="mt-2 text-sm text-mute">{e.waterIsFallback ? "víz/fő/nap – tartalékérték (NL)" : "víz fejenként naponta – hivatalos"}</div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface rounded-3xl p-6">
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
          {g.alerts && (
            <Reveal delay={0.1}>
              <div className="surface relative overflow-hidden rounded-3xl p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/15 blur-[70px]" />
                <div className="relative flex items-start gap-4">
                  <GuideIcon id="war_airraid" size={48} className="shrink-0" />
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-semibold">Riasztási rendszer</h2>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{g.alerts.text}</p>
                  </div>
                </div>
                {c.code === "HU" && <div className="relative mt-5"><SirenSignals /></div>}
              </div>
            </Reveal>
          )}
          {g.guides.length > 0 && (
            <Reveal delay={0.1}>
              <div className="surface rounded-3xl p-6">
                <h2 className="font-display text-xl font-semibold">Mit tegyél, ha…</h2>
                <div className="mt-4 space-y-2">
                  {g.guides.map((x, i) => {
                    const t = guideType(x.type)!;
                    return (
                      <details key={x.type + i} open={i === 0} className="group rounded-2xl bg-white/[.03] ring-1 ring-white/8 open:bg-white/[.05]">
                        <summary className="flex cursor-pointer list-none items-center gap-3 p-3 pr-4">
                          <GuideIcon id={x.type} size={38} className="shrink-0" />
                          <span className="flex-1 font-semibold">{x.title ? `${t.name} · ${x.title}` : t.name}</span>
                          <span className="text-mute transition group-open:rotate-45">+</span>
                        </summary>
                        <ol className="space-y-2 px-4 pb-4 pl-[60px]">
                          {x.steps.map((st, k) => (
                            <li key={k} className="relative text-[14.5px] leading-relaxed text-white/85">
                              <span className="absolute -left-7 top-0.5 font-mono text-xs" style={{ color: t.accent }}>{String(k + 1).padStart(2, "0")}</span>
                              {st}
                            </li>
                          ))}
                          <li className="pt-1 text-xs text-mute">Forrás: <a className="hover:text-cyan" href={sourceById(x.source)?.url} target="_blank" rel="noopener">{sourceById(x.source)?.publisher} ↗</a></li>
                        </ol>
                      </details>
                    );
                  })}
                </div>
                <Link href="/helyzetek" className="mt-5 inline-block text-sm text-cyan hover:underline">Összes helyzet, más országok ajánlásaival →</Link>
              </div>
            </Reveal>
          )}
          {g.tips.length > 0 && (
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display px-1 text-xl font-semibold">Tippek és praktikák · {c.name}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {g.tips.map((t) => {
                    const tg = TIP_TAGS.find((x) => x.id === t.tag)!;
                    return (
                      <div key={t.title} className="surface surface-hover relative overflow-hidden rounded-2xl p-4">
                        <span className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${tg.accent}, transparent)` }} />
                        <div className="text-[10.5px] font-semibold uppercase tracking-wider" style={{ color: tg.accent }}>{tg.name}</div>
                        <div className="mt-1.5 font-semibold leading-snug">{t.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-mute">{t.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.12}>
            <div className="surface rounded-3xl p-6">
              <h2 className="font-display text-xl font-semibold">Források</h2>
              <ul className="mt-4 space-y-3">
                {[...new Set([...c.sources, ...(g.alerts ? [g.alerts.source] : []), ...g.guides.map((x) => x.source), ...g.tips.map((x) => x.source)])].map((id) => {
                  const s = sourceById(id);
                  if (!s) return null;
                  return (
                    <li key={id} className="rounded-2xl bg-white/[.03] p-4 ring-1 ring-white/8">
                      <a href={s.url} target="_blank" rel="noopener" className="font-semibold hover:text-cyan">{s.title} ↗</a>
                      <div className="mt-1 text-xs text-mute">{s.publisher}{s.year !== "–" ? ` · ${s.year}` : ""} · ellenőrizve: {s.checked}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <aside className="surface rounded-3xl p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-xl font-semibold">Segélyhívó számok</h2>
            <div className="mt-4 space-y-2">
              {c.emergency.map((x) => (
                <a key={x.number + x.label} href={`tel:${x.number}`} className="flex items-center justify-between rounded-2xl bg-white/[.04] px-4 py-3 ring-1 ring-white/8 transition hover:bg-white/[.07]">
                  <span className="text-sm text-mute">{x.label}</span>
                  <span className="font-display shrink-0 whitespace-nowrap text-2xl font-bold">{x.number}</span>
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
