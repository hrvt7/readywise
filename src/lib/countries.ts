import { EXTRA_COUNTRIES } from "./countries-extra";

export type CountryCode = "HU" | "AT" | "DE" | "CZ" | "NL" | "BE" | "SK" | "PL" | "RO" | "FR" | "CH" | "SE" | "FI" | "NO" | "DK" | "EE";

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

const BASE_COUNTRIES: CountryRule[] = [
  {
    code: "HU",
    name: "Magyarország",
    officialDays: null,
    waterLPerDay: 3,
    status: "partial",
    headline:
      "Egységes országos „ennyi napra készülj” ajánlás nincs, de a katasztrófavédelem egy hétre elegendő élelmiszert javasol az egész családnak, elzárkózáshoz pedig fejenként napi 3–4 liter ivóvizet.",
    points: [
      "Élelmiszer: egy hétre elegendő az egész családnak (téli, energiakiesési ajánlás).",
      "Ivóvíz elzárkózáshoz: fejenként napi 3–4 liter – a tervező az alsó, 3 literes értékkel számol.",
      "Veszélyhelyzeti csomag: legfeljebb 20 kg, 2–3 napi élelem, 1 liter ivóvíz.",
      "Időtávként az EU 72 órás ajánlása az alap; a tervezőben 10 vagy 14 napra is állíthatod.",
    ],
    sources: ["hu-okf-hideg", "hu-okf-nuklearis", "hu-okf-kitelepites", "eu-preparedness-2025"],
    emergency: [
      { label: "Általános segélyhívó (magyarul, angolul, németül; SMS-ben is)", number: "112" },
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
    emergency: [{"label": "Tűzoltóság (Feuerwehr)", "number": "122"}, {"label": "Rendőrség (Polizei)", "number": "133"}, {"label": "Mentők (Rettung)", "number": "144"}, {"label": "Európai segélyhívó", "number": "112"}, {"label": "Ügyeletes orvos (Ärztenotdienst)", "number": "141"}, {"label": "Gázügyelet", "number": "128"}, {"label": "Hegyimentés", "number": "140"}, {"label": "Tartományi riasztási központ (nem minden tartományban)", "number": "130"}, {"label": "Méregközpont (Vergiftungsinformationszentrale)", "number": "01 406 43 43"}],
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
    emergency: [{"label": "Tűzoltóság és mentők", "number": "112"}, {"label": "Rendőrség", "number": "110"}, {"label": "Hatósági ügyfélvonal (Behördenrufnummer)", "number": "115"}, {"label": "Orvosi ügyelet (rendelési időn kívül)", "number": "116117"}, {"label": "Telefonos lelkisegély (Telefonseelsorge)", "number": "0800 111 0 111 / 0800 111 0 222 / 116 123"}],
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
    emergency: [{"label": "Egységes európai segélyhívó", "number": "112"}, {"label": "Tűzoltóság", "number": "150"}, {"label": "Mentők", "number": "155"}, {"label": "Rendőrség", "number": "158"}, {"label": "Lelki elsősegély-vonal (non-stop, ingyenes)", "number": "+420 116 123"}, {"label": "Biztonsági vonal gyerekeknek, diákoknak 26 éves korig (non-stop, ingyenes)", "number": "+420 116 111"}, {"label": "Idősek segélyvonala (non-stop, ingyenes)", "number": "+420 800 157 157"}],
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
    emergency: [{"label": "Segélyhívó (csak életveszély, sürgős eset)", "number": "112"}, {"label": "Országos gáz- és áramhiba-bejelentő", "number": "0800-9009"}, {"label": "Tűzoltóság, nem sürgős (viharkár, elöntés)", "number": "0900-0904"}],
  },
  {
    code: "BE",
    name: "Belgium",
    officialDays: 3,
    waterLPerDay: 3,
    status: "official",
    headline: "Belgium – az egész EU-hoz hasonlóan – legalább 3 napra (72 órára) elegendő otthoni vészcsomagot javasol.",
    points: ["Önellátás: legalább 3 nap (72 óra).", "Víz: fejenként naponta 3–10 liter; egy felnőtt 1,5–2 litert iszik naponta.", "Készpénz: kb. 72 órára elegendő, de nagy összeget ne tarts otthon.", "Menekülőcsomag: fejenként 1 liter víz és legalább 3 napi alapvető gyógyszer."],
    sources: ["be-cc-kit", "be-nccn-2026", "eu-preparedness-2025"],
    emergency: [{"label": "Mentők vagy tűzoltóság (segélyhívó központ)", "number": "112"}, {"label": "Rendőrség, sürgős", "number": "101"}, {"label": "Tűzoltóság, nem sürgős (ha aktív; 1722.be is)", "number": "1722"}, {"label": "Ügyeletes háziorvos (nem sürgős orvosi eset)", "number": "1733"}, {"label": "BE-Alert küldőszámai (SMS/hanghívás)", "number": "1789 / 0477 77 77 55"}],
  },
];

export const COUNTRIES: CountryRule[] = [
  ...BASE_COUNTRIES,
  ...([...EXTRA_COUNTRIES] as unknown as CountryRule[]).sort((a, b) => a.name.localeCompare(b.name, "hu")),
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
export const num = (n: number) => n.toLocaleString("hu-HU");
