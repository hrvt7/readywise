/**
 * Áramtartalék-kalkulátor adatai.
 * A fogyasztási értékek tipikus gyártói adatlapokból származó, kerekített becslések (W, óra/nap).
 * A saját készüléked adatlapján lévő érték az irányadó – ezért minden érték átírható.
 */
export type DevCat = "info" | "feny" | "egeszseg" | "ho" | "konyha" | "egyeb";

export interface Device {
  id: string;
  name: string;
  cat: DevCat;
  /** tipikus teljesítmény W (vagy töltésenkénti Wh, ha `perCharge`) */
  watts: number;
  /** órák naponta (vagy töltések száma naponta, ha `perCharge`) */
  hours: number;
  perCharge?: boolean;
  /** USB-ről tölthető (kisebb veszteség) */
  usb?: boolean;
  note?: string;
  essential?: 1 | 2 | 3;
}

export const DEVICES: Device[] = [
  { id: "phone", name: "Okostelefon", cat: "info", watts: 15, hours: 1.5, perCharge: true, usb: true, essential: 1, note: "≈15 Wh / teljes töltés" },
  { id: "radio", name: "Kézi rádió (elemes/USB)", cat: "info", watts: 2, hours: 8, usb: true, essential: 1 },
  { id: "led", name: "LED lámpa / fejlámpa", cat: "feny", watts: 5, hours: 6, usb: true, essential: 1 },
  { id: "tablet", name: "Tablet / e-könyv", cat: "info", watts: 30, hours: 0.5, perCharge: true, usb: true, essential: 3 },
  { id: "laptop", name: "Laptop", cat: "info", watts: 60, hours: 1, perCharge: true, essential: 3 },
  { id: "router", name: "Router + modem", cat: "info", watts: 12, hours: 24, essential: 3, note: "Áramszünetben a szolgáltató hálózata is kieshet." },
  { id: "babymon", name: "Bébiőr", cat: "egyeb", watts: 5, hours: 24, usb: true, essential: 2 },
  { id: "cpap", name: "CPAP légzésterápiás készülék", cat: "egeszseg", watts: 40, hours: 8, essential: 1, note: "Párásító nélkül; párásítóval akár a duplája." },
  { id: "medfridge", name: "Gyógyszerhűtő (inzulin, mini)", cat: "egeszseg", watts: 25, hours: 24, essential: 1 },
  { id: "wheelchair", name: "Elektromos kerekesszék töltése", cat: "egeszseg", watts: 350, hours: 1, perCharge: true, essential: 1 },
  { id: "boiler", name: "Gázkazán vezérlése + szivattyú", cat: "ho", watts: 120, hours: 10, essential: 1, note: "Áram nélkül a gázkazán sem fűt. Csak szakember által bekötött átkapcsolóval!" },
  { id: "blanket", name: "Elektromos takaró", cat: "ho", watts: 60, hours: 8, essential: 2 },
  { id: "fan", name: "Ventilátor", cat: "ho", watts: 40, hours: 8, essential: 3 },
  { id: "fridge", name: "Hűtőszekrény", cat: "konyha", watts: 45, hours: 24, essential: 2, note: "Átlagos fogyasztás ≈1 kWh/nap; zárt ajtóval 4 óráig áram nélkül is bírja." },
  { id: "freezer", name: "Fagyasztóláda", cat: "konyha", watts: 35, hours: 24, essential: 2, note: "Tele fagyasztó 48 órát bír áram nélkül – lehet, hogy nem is kell rákötni." },
  { id: "kettle", name: "Vízforraló (1 kanna)", cat: "konyha", watts: 2000, hours: 0.15, essential: 3, note: "Egy forralás ≈100 Wh. Gázon vagy kempingfőzőn jobban megéri." },
  { id: "induction", name: "Indukciós főzőlap", cat: "konyha", watts: 1500, hours: 0.5, essential: 3 },
  { id: "microwave", name: "Mikró", cat: "konyha", watts: 1000, hours: 0.25, essential: 3 },
  { id: "aquarium", name: "Akvárium (szűrő, fűtés)", cat: "egyeb", watts: 50, hours: 24, essential: 3 },
];

export const DEV_CATS: Record<DevCat, { name: string; accent: string }> = {
  info: { name: "Információ", accent: "#818cf8" },
  feny: { name: "Fény", accent: "#fbbf24" },
  egeszseg: { name: "Egészség", accent: "#a78bfa" },
  ho: { name: "Hő", accent: "#fb923c" },
  konyha: { name: "Konyha", accent: "#34d399" },
  egyeb: { name: "Egyéb", accent: "#22d3ee" },
};

export interface PowerSource {
  id: string;
  name: string;
  /** névleges kapacitás Wh */
  wh: number;
  kind: "powerbank" | "station" | "car";
  note?: string;
  search: string;
  priceHuf?: [number, number];
}

export const SOURCES_POWER: PowerSource[] = [
  { id: "pb10", name: "Powerbank 10 000 mAh", wh: 37, kind: "powerbank", search: "powerbank 10000mAh", priceHuf: [5000, 12000] },
  { id: "pb20", name: "Powerbank 20 000 mAh", wh: 74, kind: "powerbank", search: "powerbank 20000mAh", priceHuf: [8000, 20000] },
  { id: "pb27", name: "Powerbank 27 000 mAh", wh: 100, kind: "powerbank", note: "Repülőn még vihető (100 Wh).", search: "powerbank 27000mAh 100Wh", priceHuf: [15000, 35000] },
  { id: "st300", name: "Hordozható erőmű 300 Wh", wh: 300, kind: "station", search: "hordozható erőmű 300Wh", priceHuf: [80000, 150000] },
  { id: "st500", name: "Hordozható erőmű 500 Wh", wh: 500, kind: "station", search: "hordozható erőmű 500Wh", priceHuf: [120000, 220000] },
  { id: "st1000", name: "Hordozható erőmű 1 kWh", wh: 1000, kind: "station", search: "hordozható erőmű 1000Wh", priceHuf: [200000, 400000] },
  { id: "st2000", name: "Hordozható erőmű 2 kWh", wh: 2000, kind: "station", search: "hordozható erőmű 2000Wh", priceHuf: [350000, 700000] },
  { id: "car", name: "Autó akkumulátor + inverter", wh: 720, kind: "car", note: "60 Ah · 12 V. Csak kb. a harmada használható úgy, hogy az autó még elinduljon.", search: "inverter 12V 230V 300W", priceHuf: [10000, 30000] },
];

/** Használható energia: DC veszteség 10 %, inverter 15 %, autóakkunál csak 1/3 vehető ki. */
export function usableWh(src: PowerSource, acShare: number) {
  const base = src.kind === "car" ? src.wh / 3 : src.wh;
  const eff = 0.9 * (1 - acShare) + 0.85 * acShare;
  return base * eff;
}

export function dailyWh(dev: Device, hours = dev.hours) {
  return dev.watts * hours;
}

/** Napi fogyasztás és AC-arány a kiválasztott eszközökre. */
export function summarize(sel: { dev: Device; hours: number }[]) {
  const items = sel.map(({ dev, hours }) => ({ dev, hours, wh: dailyWh(dev, hours) }));
  const total = items.reduce((a, x) => a + x.wh, 0);
  const ac = items.filter((x) => !x.dev.usb).reduce((a, x) => a + x.wh, 0);
  return { items, total, acShare: total ? ac / total : 0 };
}

/** Hány órát bír a forrás a napi fogyasztással. */
export function hoursFor(src: PowerSource, total: number, acShare: number, solarWhPerDay = 0) {
  const net = total - solarWhPerDay;
  if (net <= 0) return Infinity;
  return (usableWh(src, acShare) / net) * 24;
}

/** Ajánlott kapacitás adott napokra, 20 % tartalékkal. */
export function recommendWh(total: number, days: number, acShare: number, solarWhPerDay = 0) {
  const need = Math.max(0, total - solarWhPerDay) * days;
  const eff = 0.9 * (1 - acShare) + 0.85 * acShare;
  return (need / eff) * 1.2;
}

/** 100 W-os napelem napi hozama: tél ≈ 1,5, nyár ≈ 5 csúcsóra (becslés, Magyarország). */
export const SOLAR_100W = { winter: 150, summer: 500 } as const;
