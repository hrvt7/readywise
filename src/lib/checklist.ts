export type CategoryId = "water" | "food" | "energy" | "health" | "family" | "evac";

export interface Category {
  id: CategoryId;
  name: string;
  blurb: string;
  accent: string; // tailwind-hez független hex
}

export const CATEGORIES: Category[] = [
  { id: "water", name: "Víz", blurb: "Ivóvíz palackban, tárolás, vízosztásra kannák.", accent: "#38bdf8" },
  { id: "food", name: "Étel", blurb: "Tartós élelmiszer a hivatalos mennyiségek alapján.", accent: "#34d399" },
  { id: "energy", name: "Áram és információ", blurb: "Fény, rádió, töltés áramszünetben.", accent: "#fbbf24" },
  { id: "health", name: "Egészség", blurb: "Elsősegély, saját gyógyszerek, higiénia.", accent: "#a78bfa" },
  { id: "family", name: "Család és pénz", blurb: "Készpénz, iratmásolatok, családi terv.", accent: "#f472b6" },
  { id: "evac", name: "Menekülés", blurb: "Gyorsan felkapható csomag, biztonságos távozás.", accent: "#22d3ee" },
];

export interface Household {
  adults: number;
  kids: number;
  pets: number;
  days: number;
  water: number; // l/fő/nap
}

export interface Item {
  id: string;
  cat: CategoryId;
  label: string;
  /** 1 = létfontosságú, 2 = fontos, 3 = hasznos */
  priority: 1 | 2 | 3;
  qty?: (h: Household) => { value: number; unit: string } | null;
  hint?: string;
  sources: string[];
  when?: (h: Household) => boolean;
  /** Becsült egységár HUF-ban – csak tájékoztató becslés */
  estPrice?: (h: Household) => number;
  search?: string;
}

const people = (h: Household) => h.adults + h.kids;
const round1 = (n: number) => Math.round(n * 10) / 10;

// Osztrák ZSV 14 napos lista → napi fejadag (kg)
const ZSV = { grain: 4.5 / 14, protein: 2 / 14, fat: 0.5 / 14, dairy: 4.5 / 14, vegfruit: 6 / 14 };

export const ITEMS: Item[] = [
  {
    id: "water",
    cat: "water",
    label: "Palackozott ivóvíz",
    priority: 1,
    qty: (h) => ({ value: Math.ceil(people(h) * h.water * h.days), unit: "liter" }),
    hint: "Forgasd: a régit használd el, az újat tedd hátra. Szénsavas ásványvíz tovább eltartható.",
    sources: ["nl-denkvooruit", "de-bbk-ratgeber", "cz-72h-water"],
    estPrice: (h) => Math.ceil(people(h) * h.water * h.days) * 120,
    search: "ásványvíz 6x1,5 l",
  },
  {
    id: "water-cans",
    cat: "water",
    label: "Zárható kannák vízosztáshoz",
    priority: 2,
    qty: () => ({ value: 2, unit: "db" }),
    hint: "Ha a vezetékes víz leáll, lajtoskocsiból vagy vízosztó pontról kell hazavinni.",
    sources: ["cz-72h-water"],
    estPrice: () => 2 * 2500,
    search: "vizes kanna 10 literes csappal",
  },
  {
    id: "food-grain",
    cat: "food",
    label: "Gabonatermék (rizs, tészta, keksz, kétszersült)",
    priority: 1,
    qty: (h) => ({ value: round1(people(h) * ZSV.grain * h.days), unit: "kg" }),
    hint: "Válassz olyat is, ami főzés nélkül ehető (keksz, kétszersült).",
    sources: ["at-zsv-bevorraten"],
    estPrice: (h) => Math.round(people(h) * ZSV.grain * h.days * 900),
    search: "kétszersült",
  },
  {
    id: "food-protein",
    cat: "food",
    label: "Hús- vagy halkonzerv, hüvelyesek",
    priority: 1,
    qty: (h) => ({ value: round1(people(h) * ZSV.protein * h.days), unit: "kg" }),
    sources: ["at-zsv-bevorraten"],
    estPrice: (h) => Math.round(people(h) * ZSV.protein * h.days * 4000),
    search: "halkonzerv",
  },
  {
    id: "food-vegfruit",
    cat: "food",
    label: "Zöldség- és gyümölcskonzerv, aszalt gyümölcs",
    priority: 2,
    qty: (h) => ({ value: round1(people(h) * ZSV.vegfruit * h.days), unit: "kg" }),
    sources: ["at-zsv-bevorraten"],
    estPrice: (h) => Math.round(people(h) * ZSV.vegfruit * h.days * 1500),
    search: "zöldségkonzerv",
  },
  {
    id: "food-dairy",
    cat: "food",
    label: "Tartós tejtermék (UHT tej, tartós sajt)",
    priority: 2,
    qty: (h) => ({ value: round1(people(h) * ZSV.dairy * h.days), unit: "kg" }),
    sources: ["at-zsv-bevorraten"],
    estPrice: (h) => Math.round(people(h) * ZSV.dairy * h.days * 600),
    search: "UHT tej",
  },
  {
    id: "food-fat",
    cat: "food",
    label: "Étolaj, zsiradék",
    priority: 3,
    qty: (h) => ({ value: round1(Math.max(0.1, people(h) * ZSV.fat * h.days)), unit: "kg" }),
    sources: ["at-zsv-bevorraten"],
    estPrice: () => 900,
    search: "étolaj 1 l",
  },
  {
    id: "pet-food",
    cat: "food",
    label: "Állateledel és víz a háziállatoknak",
    priority: 2,
    when: (h) => h.pets > 0,
    qty: (h) => ({ value: h.days, unit: "napra" }),
    sources: ["de-bbk-ratgeber", "at-tirol-blackout"],
    search: "állateledel",
  },
  {
    id: "flashlight",
    cat: "energy",
    label: "Zseblámpa vagy fejlámpa + tartalék elem",
    priority: 1,
    qty: (h) => ({ value: Math.max(1, h.adults), unit: "db" }),
    sources: ["nl-denkvooruit"],
    estPrice: (h) => Math.max(1, h.adults) * 3500,
    search: "fejlámpa",
  },
  {
    id: "radio",
    cat: "energy",
    label: "Elemes vagy tekerős rádió",
    priority: 1,
    qty: () => ({ value: 1, unit: "db" }),
    hint: "Áramszünetben ez lehet az egyetlen hírforrásod.",
    sources: ["nl-denkvooruit", "eu-preparedness-2025"],
    estPrice: () => 8000,
    search: "tekerős rádió",
  },
  {
    id: "powerbank",
    cat: "energy",
    label: "Feltöltött powerbank",
    priority: 1,
    qty: (h) => ({ value: Math.max(1, h.adults), unit: "db" }),
    hint: "Havonta töltsd fel.",
    sources: ["nl-denkvooruit", "eu-preparedness-2025"],
    estPrice: (h) => Math.max(1, h.adults) * 8000,
    search: "powerbank 20000 mah",
  },
  {
    id: "candles",
    cat: "energy",
    label: "Gyertya és gyufa",
    priority: 3,
    hint: "Soha ne hagyd felügyelet nélkül.",
    sources: ["nl-denkvooruit"],
    estPrice: () => 1500,
    search: "mécses gyufa",
  },
  {
    id: "co-alarm",
    cat: "energy",
    label: "Szén-monoxid-érzékelő",
    priority: 2,
    hint: "Ha alternatív fűtéssel vagy főzéssel készülsz, ez kötelező tartozék.",
    sources: ["hu-ebes-tel-2026"],
    estPrice: () => 7000,
    search: "szén-monoxid érzékelő",
  },
  {
    id: "firstaid",
    cat: "health",
    label: "Elsősegélycsomag",
    priority: 1,
    sources: ["nl-denkvooruit"],
    estPrice: () => 6000,
    search: "elsősegély csomag",
  },
  {
    id: "meds",
    cat: "health",
    label: "Rendszeresen szedett gyógyszerek tartaléka",
    priority: 1,
    qty: (h) => ({ value: h.days, unit: "napra" }),
    hint: "Az adagolásról mindig az orvosod vagy gyógyszerészed dönt.",
    sources: ["eu-preparedness-2025"],
  },
  {
    id: "hygiene",
    cat: "health",
    label: "Higiéniai alapcikkek (szappan, nedves törlőkendő, szemeteszsák)",
    priority: 2,
    sources: ["de-bbk-ratgeber"],
    estPrice: () => 4000,
    search: "nedves törlőkendő",
  },
  {
    id: "cash",
    cat: "family",
    label: "Kis címletű készpénz",
    priority: 1,
    qty: (h) => ({ value: 70 * h.adults + 30 * h.kids, unit: "€ értékben (NL ajánlás, 72 órára)" }),
    hint: "Áramszünetben a kártyás fizetés és az ATM is leállhat.",
    sources: ["nl-noodpakket"],
  },
  {
    id: "docs",
    cat: "family",
    label: "Fontos iratok másolata vízálló tasakban",
    priority: 1,
    sources: ["nl-denkvooruit"],
    estPrice: () => 1500,
    search: "vízálló irattartó",
  },
  {
    id: "plan",
    cat: "family",
    label: "Családi terv: találkozópont + papíron a telefonszámok",
    priority: 1,
    hint: "A Readywise nyomtatható kártyát ad hozzá.",
    sources: ["nl-denkvooruit"],
  },
  {
    id: "kids-kit",
    cat: "family",
    label: "Gyerekeknek: kedvenc étel, játék, pelenka/tápszer ha kell",
    priority: 2,
    when: (h) => h.kids > 0,
    sources: ["at-tirol-blackout"],
  },
  {
    id: "gobag",
    cat: "evac",
    label: "Veszélyhelyzeti csomag (max. 20 kg, könnyen vihető)",
    priority: 1,
    hint: "Felkapható hátizsák: víz, étel 1–2 napra, gyógyszer, iratok, lámpa, ruha.",
    sources: ["hu-koszeg-arviz"],
    estPrice: () => 12000,
    search: "túrahátizsák 40 l",
  },
  {
    id: "shutoff",
    cat: "evac",
    label: "Tudod, hol zárod el a vizet, gázt, és hol kapcsolod le az áramot",
    priority: 1,
    sources: ["hu-koszeg-arviz"],
  },
];

export const activeItems = (h: Household) => ITEMS.filter((i) => !i.when || i.when(h));

export function score(h: Household, checked: Record<string, boolean>) {
  const items = activeItems(h);
  const w = (p: number) => (p === 1 ? 3 : p === 2 ? 2 : 1);
  const total = items.reduce((s, i) => s + w(i.priority), 0);
  const got = items.reduce((s, i) => s + (checked[i.id] ? w(i.priority) : 0), 0);
  const byCat = CATEGORIES.map((c) => {
    const ci = items.filter((i) => i.cat === c.id);
    const t = ci.reduce((s, i) => s + w(i.priority), 0);
    const g = ci.reduce((s, i) => s + (checked[i.id] ? w(i.priority) : 0), 0);
    return { ...c, pct: t ? g / t : 0, done: ci.filter((i) => checked[i.id]).length, total: ci.length };
  });
  return { pct: total ? got / total : 0, byCat };
}

/** Hány napig elég a meglévő víz/étel? */
export function endurance(h: Household, waterHaveL: number, foodDaysHave: number) {
  const perDay = (h.adults + h.kids) * h.water;
  const waterDays = perDay ? waterHaveL / perDay : 0;
  return { waterDays, foodDays: foodDaysHave, days: Math.min(waterDays, foodDaysHave) };
}

export const huf = (n: number) =>
  new Intl.NumberFormat("hu-HU", { maximumFractionDigits: 0 }).format(Math.round(n / 10) * 10) + " Ft";

/** Bolti kereső link. Ha AFFILIATE_TEMPLATE be van állítva, partnerlinket adunk vissza. */
export function shopLink(q: string) {
  const tpl = process.env.NEXT_PUBLIC_AFFILIATE_TEMPLATE; // pl. https://partner.example/?url={url}
  const target = `https://www.arukereso.hu/CategorySearch.php?st=${encodeURIComponent(q)}`;
  if (tpl) return { href: tpl.replace("{url}", encodeURIComponent(target)), partner: true };
  return { href: target, partner: false };
}
