"use client";
import { useEffect, useState } from "react";
import { Mark } from "@/components/brand/Logo";
import { COUNTRIES, effectiveRule, type CountryCode } from "@/lib/countries";

interface Card { country: CountryCode; meeting: string; meeting2: string; contacts: { name: string; phone: string }[]; notes: string; people: number }
const KEY = "haven72:card:v1";
const DEF: Card = { country: "HU", meeting: "", meeting2: "", contacts: [{ name: "", phone: "" }, { name: "", phone: "" }, { name: "", phone: "" }], notes: "", people: 2 };

export function FridgeCard() {
  const [c, setC] = useState<Card>(DEF);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { try { const r = localStorage.getItem(KEY); if (r) setC({ ...DEF, ...JSON.parse(r) }); const p = localStorage.getItem("haven72:plan:v1"); if (p) { const j = JSON.parse(p); setC((x) => ({ ...x, country: j.country ?? x.country, people: (j.adults ?? 2) + (j.kids ?? 0) })); } } catch {} setLoaded(true); }, []);
  useEffect(() => { if (loaded) try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {} }, [c, loaded]);
  const country = COUNTRIES.find((x) => x.code === c.country)!;
  const rule = effectiveRule(country);
  const inp = "w-full rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan/40 print:border-0 print:border-b print:border-black print:bg-transparent print:rounded-none";

  return (
    <div className="mx-auto max-w-4xl px-5 pt-28 md:px-8 md:pt-36 print:pt-0">
      <div className="no-print flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Hűtőkártya</p>
          <h1 className="font-display mt-3 text-4xl font-bold md:text-[44px]">Egy oldal, ami a hűtőn lóg.</h1>
          <p className="mt-3 max-w-xl text-mute">Töltsd ki, nyomtasd ki. Áramszünetben a telefon lemerül, a papír nem. Az adatok csak ebben a böngészőben maradnak.</p>
        </div>
        <button onClick={() => window.print()} className="btn-primary rounded-xl px-5 py-3 text-sm font-bold">Nyomtatás / PDF</button>
      </div>

      <div className="surface mt-10 rounded-3xl p-8 print:mt-0 print:rounded-none print:p-6">
        <div className="flex items-center justify-between border-b border-line pb-5 print:border-black">
          <div className="flex items-center gap-3">
            <Mark size={36} />
            <div>
              <div className="font-display text-xl font-bold">Családi vészhelyzeti kártya</div>
              <div className="text-xs text-mute">{country.name} · {rule.days} nap · {c.people} fő · víz: {Math.ceil(c.people * rule.water * rule.days)} liter</div>
            </div>
          </div>
          <select value={c.country} onChange={(e) => setC({ ...c, country: e.target.value as CountryCode })} className="no-print rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm">
            {COUNTRIES.map((x) => <option key={x.code} value={x.code}>{x.name}</option>)}
          </select>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-3">Segélyhívók</div>
            <div className="grid grid-cols-2 gap-2">
              {country.emergency.map((e) => (
                <div key={e.number + e.label} className="keycap px-3 py-2.5 print:border print:border-black print:bg-transparent print:shadow-none">
                  <div className="font-display text-2xl font-bold">{e.number}</div>
                  <div className="text-[11px] text-mute">{e.label}</div>
                </div>
              ))}
            </div>
            <div className="eyebrow mt-6 mb-3">Találkozópontok</div>
            <label className="block text-xs text-mute">Ha nem tudunk hazamenni
              <input className={`${inp} mt-1`} value={c.meeting} onChange={(e) => setC({ ...c, meeting: e.target.value })} placeholder="pl. a sarki iskola bejárata" />
            </label>
            <label className="mt-3 block text-xs text-mute">Ha el kell hagynunk a várost
              <input className={`${inp} mt-1`} value={c.meeting2} onChange={(e) => setC({ ...c, meeting2: e.target.value })} placeholder="pl. nagymama, Szombathely" />
            </label>
          </div>
          <div>
            <div className="eyebrow mb-3">Kontaktok (papíron is!)</div>
            <div className="space-y-2">
              {c.contacts.map((k, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr] gap-2">
                  <input className={inp} value={k.name} placeholder="Név" onChange={(e) => { const n = [...c.contacts]; n[i] = { ...n[i], name: e.target.value }; setC({ ...c, contacts: n }); }} />
                  <input className={inp} value={k.phone} placeholder="Telefon" onChange={(e) => { const n = [...c.contacts]; n[i] = { ...n[i], phone: e.target.value }; setC({ ...c, contacts: n }); }} />
                </div>
              ))}
              <button onClick={() => setC({ ...c, contacts: [...c.contacts, { name: "", phone: "" }] })} className="no-print text-xs text-cyan hover:underline">+ további kontakt</button>
            </div>
            <div className="eyebrow mt-6 mb-3">Gyógyszerek, allergiák, egyéb</div>
            <textarea className={`${inp} min-h-[96px]`} value={c.notes} onChange={(e) => setC({ ...c, notes: e.target.value })} placeholder="pl. vérnyomáscsökkentő reggel; kutya oltási könyve a fiókban" />
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-line pt-5 text-xs text-mute md:grid-cols-3 print:border-black">
          <div><b className="text-fg">Áramszünet:</b> rádió be, telefon takarékra, hűtőt ne nyitogasd.</div>
          <div><b className="text-fg">Vízkimaradás:</b> csak palackozott vizet igyál, kannát a vízosztáshoz.</div>
          <div><b className="text-fg">Kitelepítés:</b> víz, gáz el, ablak csuk, csomag fel, találkozópont.</div>
        </div>
        <div className="mt-4 text-[10px] text-dim">haven72.vercel.app · Tájékoztató segédlet. Valós helyzetben a hatósági utasítás az elsődleges. Életveszélyben: 112.</div>
      </div>
    </div>
  );
}
