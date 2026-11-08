import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
import { PageHead } from "@/components/PageHead";

export const metadata: Metadata = { title: "Módszertan", description: "Hogyan számolunk, honnan jönnek az adatok, és hogyan működnek a partnerlinkek." };

const blocks = [
  {
    id: "szamitas",
    t: "Hogyan számolunk?",
    p: [
      "Víz: fő × liter/fő/nap × napok. A literérték a kiválasztott ország hivatalos ajánlása; Magyarországon a katasztrófavédelem elzárkózásra adott 3–4 literes ajánlásának alsó értékét (3 l); ahol nincs hivatalos szám, a vizsgált hivatalos ajánlások közül a legmagasabbat (3 l, Hollandia).",
      "Étel: az osztrák polgári védelem 14 napos fejadag-listáját (gabona 4,5 kg, hús/hal 2 kg, zsiradék 0,5 kg, tejtermék 4,5 kg, zöldség/gyümölcs 6 kg) napra bontjuk, és a háztartás méretével, időtávval szorozzuk.",
      "Időtáv: az ország hivatalos ajánlása, ennek hiányában az EU 72 órás ajánlása. A tervezőben 3, 10 vagy 14 nap választható.",
      "Pontszám: a tételek fontosság szerint súlyozva (alap ×3, fontos ×2, hasznos ×1). A „hány napig bírnátok” a víz- és élelmiszerkészlet közül a kisebbik.",
    ],
  },
  {
    id: "elvek",
    t: "Szerkesztési elvek",
    p: [
      "Csak hivatalos forrás: EU, állami hatóság, polgári védelem, önkormányzat. Sajtót legfeljebb kiegészítő kontextusként.",
      "Nem adunk orvosi adagolást, nem javaslunk házi vegyszeres víztisztítást, nem adunk taktikai tanácsot.",
      "Minden forrásnál feltüntetjük az utolsó ellenőrzés dátumát; a változásokat rendszeresen átnézzük.",
      "Nyugodt hangnem: a felkészülés nem félelem, hanem rutin.",
    ],
  },
  {
    id: "partnerlinkek",
    t: "Partnerlinkek és pénz",
    p: [
      "A bevásárlólistában egyes linkek partnerlinkek lehetnek: ha rajtuk keresztül vásárolsz, jutalékot kaphatunk. Ezt mindig „partnerlink” címkével jelöljük.",
      "A partnerség nem befolyásolja, mi kerül a listára és milyen sorrendben – azt a hiány és a fontosság határozza meg.",
      "Az árak tájékoztató becslések, nem napi árak.",
    ],
  },
  {
    id: "korlatok",
    t: "Korlátok",
    p: [
      "A Haven72 tájékoztató segédlet, nem hatósági kiadvány. Valós vészhelyzetben mindig a helyi hatóság utasítása az elsődleges.",
      "Különleges igényeknél (krónikus betegség, csecsemő, mozgáskorlátozottság) kérd orvos vagy szakember tanácsát.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHead kicker="Módszertan" title={<>Átlátható <span className="text-grad">számítás</span>, ellenőrizhető források</>} />
      <div className="mx-auto max-w-4xl space-y-5 px-5 md:px-8">
        {blocks.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.06}>
            <section id={b.id} className="surface scroll-mt-28 rounded-3xl p-7">
              <h2 className="font-display text-2xl font-semibold">{b.t}</h2>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-mute">
                {b.p.map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{x}</li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}
