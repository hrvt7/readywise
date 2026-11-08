export type CountryCode = "HU" | "AT" | "DE" | "CZ" | "NL" | "BE";

export interface CountryRule {
  code: CountryCode;
  name: string;
  /** Hivatalosan ajánlott önellátási időtáv napban (null = nincs hivatalos szám) */
  officialDays: number | null;
  /** Hivatalos vízmennyiség liter/fő/nap (null = nincs hivatalos szám) */
  waterLPerDay: number | null;
  status: "official" | "partial" | "none";
  headline: string;
  points: string[];
  sources: string[];
  emergency: { label: string; number: string }[];
}

/**
 * Ha egy országnak nincs hivatalos mennyiségi ajánlása, ezt használjuk:
 * időtáv: EU 72 óra; víz: a vizsgált hivatalos ajánlások közül a legmagasabb
 * (NL, 3 l/fő/nap), mert az ivás mellett főzést és alap higiéniát is fedez.
 */
export const FALLBACK = {
  days: 3,
  waterLPerDay: 3,
  daysSource: "eu-preparedness-2025",
  waterSource: "nl-denkvooruit",
};

export const COUNTRIES: CountryRule[] = [
  {
    code: "HU",
    name: "Magyarország",
    officialDays: null,
    waterLPerDay: null,
    status: "partial",
    headline:
      "Országos, mennyiségekkel megadott háztartási készletlistát nem találtunk. Az önkormányzatok és a katasztrófavédelem helyzetspecifikus (árvíz, tél) tájékoztatókat adnak ki.",
    points: [
      "Időtávként az EU 72 órás ajánlását használjuk alapnak.",
      "Vízből a vizsgált hivatalos ajánlások közül a legmagasabbal (3 l/fő/nap, Hollandia) számolunk.",
      "Kitelepítéskor a veszélyhelyzeti csomag könnyen szállítható, legfeljebb 20 kg (önkormányzati tájékoztató).",
      "Fűtési idényben kiemelt veszély a szén-monoxid – a CO-érzékelő életet ment.",
    ],
    sources: ["eu-preparedness-2025", "hu-nkke-2024", "hu-koszeg-arviz", "hu-ebes-tel-2026"],
    emergency: [
      { label: "Általános segélyhívó", number: "112" },
      { label: "Mentők", number: "104" },
      { label: "Tűzoltóság", number: "105" },
      { label: "Rendőrség", number: "107" },
    ],
  },
  {
    code: "AT",
    name: "Ausztria",
    officialDays: 14,
    waterLPerDay: 2.5,
    status: "official",
    headline: "Ausztriában a polgári védelem legalább 14 napos háztartási készletet ajánl.",
    points: [
      "Ital: legalább 2,5 liter fejenként naponta (Tirol tartomány).",
      "14 napos alapkészlet fejenként: 4,5 kg gabona, 2 kg hús/hal, 0,5 kg zsiradék, 4,5 kg tejtermék, 6 kg zöldség/gyümölcs.",
      "Külön figyelem: babák, kisgyerekek, betegek, háziállatok.",
    ],
    sources: ["at-zsv-bevorraten", "at-tirol-blackout"],
    emergency: [
      { label: "Általános segélyhívó", number: "112" },
      { label: "Tűzoltóság", number: "122" },
      { label: "Rendőrség", number: "133" },
      { label: "Mentők", number: "144" },
    ],
  },
  {
    code: "DE",
    name: "Németország",
    officialDays: 10,
    waterLPerDay: 2,
    status: "official",
    headline: "A német BBK azt ajánlja, hogy a háztartások lehetőleg 10 napig ellássák magukat.",
    points: [
      "Víz: 2 liter fejenként naponta, ebből 0,5 liter főzésre – 10 napra 20 liter.",
      "Az alapkészlet kb. napi 2200 kcal-ra van méretezve.",
      "Hivatalos online készletkalkulátor is elérhető.",
    ],
    sources: ["de-bbk-ratgeber", "de-bbk-checkliste", "de-ble-kalkulator"],
    emergency: [
      { label: "Mentők / tűzoltóság", number: "112" },
      { label: "Rendőrség", number: "110" },
    ],
  },
  {
    code: "CZ",
    name: "Csehország",
    officialDays: 3,
    waterLPerDay: 2,
    status: "official",
    headline: "A cseh kormány 72h.gov.cz kampánya az első három nap önálló kezelésére készít fel.",
    points: [
      "Vészhelyzetben egy felnőtt napi 2 liter vízzel is boldogul.",
      "Tarts zárható kannákat a lajtoskocsis vízosztáshoz.",
      "Életveszélyben a 72 órás elv nem érvényes – azonnal hívj segítséget.",
    ],
    sources: ["cz-72h", "cz-72h-water"],
    emergency: [
      { label: "Általános segélyhívó", number: "112" },
      { label: "Tűzoltóság", number: "150" },
      { label: "Mentők", number: "155" },
      { label: "Rendőrség", number: "158" },
    ],
  },
  {
    code: "NL",
    name: "Hollandia",
    officialDays: 3,
    waterLPerDay: 3,
    status: "official",
    headline: "A holland kormány „Denk vooruit” kampánya 72 órás vészhelyzeti csomagot ajánl.",
    points: [
      "Víz: legalább 3 liter fejenként naponta.",
      "Készpénz: kb. 70 € felnőttenként, 30 € gyerekenként.",
      "Elemes rádió, zseblámpa, powerbank, iratmásolatok.",
    ],
    sources: ["nl-denkvooruit", "nl-noodpakket"],
    emergency: [{ label: "Általános segélyhívó", number: "112" }],
  },
  {
    code: "BE",
    name: "Belgium",
    officialDays: 3,
    waterLPerDay: null,
    status: "partial",
    headline: "Belgium 2026-ban négyéves kampányt indított 72 órás vészhelyzeti csomaggal.",
    points: [
      "Időtáv: 72 óra.",
      "Pontos vízmennyiséget a forrásainkban nem ellenőriztünk – itt a 3 l/fő/nap tartalékértékkel számolunk.",
    ],
    sources: ["be-nccn-2026", "eu-preparedness-2025"],
    emergency: [{ label: "Általános segélyhívó", number: "112" }],
  },
];

export const countryByCode = (c: string) =>
  COUNTRIES.find((x) => x.code.toLowerCase() === c.toLowerCase());

export function effectiveRule(c: CountryRule) {
  return {
    days: c.officialDays ?? FALLBACK.days,
    water: c.waterLPerDay ?? FALLBACK.waterLPerDay,
    waterIsFallback: c.waterLPerDay == null,
    daysIsFallback: c.officialDays == null,
  };
}
