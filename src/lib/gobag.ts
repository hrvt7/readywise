/**
 * Vészcsomag-összerakó tételei.
 * Hivatalos alap: BM OKF – legfeljebb 20 kg, hátizsákban; irat, készpénz, bankkártya, 2–3 napi élelem,
 * 1 liter víz, gyógyszer (allergialista), takaró, rádió, gyereknek a kedvenc játéka (hu-okf-arviz, hu-okf-kitelepites).
 * Kiegészítők: BBK Notgepäck-lista (de-bbk-ratgeber). A súlyok átlagos termékek alapján becsültek.
 */
export type BagGroup = "iratok" | "ellatas" | "egeszseg" | "ruha" | "eszkoz" | "csalad";

export interface BagItem {
  id: string;
  name: string;
  group: BagGroup;
  /** kg – fix vagy fejenként */
  kg: number;
  perPerson?: boolean;
  /** a magyar katasztrófavédelem listáján szerepel */
  okf?: boolean;
  /** csak gyerekkel / állattal */
  only?: "kids" | "pets";
  hint?: string;
  source: string;
  icon: "passport" | "wallet" | "soup" | "droplet" | "heart" | "home" | "radio" | "paw" | "flame" | "bag" | "phone" | "users" | "sparkles" | "shield" | "clock" | "bell";
}

export const BAG_LIMIT_KG = 20;

export const BAG_GROUPS: Record<BagGroup, { name: string; accent: string }> = {
  iratok: { name: "Iratok és pénz", accent: "#fb923c" },
  ellatas: { name: "Víz és étel", accent: "#34d399" },
  egeszseg: { name: "Egészség", accent: "#a78bfa" },
  ruha: { name: "Ruha és melegedés", accent: "#38bdf8" },
  eszkoz: { name: "Eszközök", accent: "#fbbf24" },
  csalad: { name: "Család és állat", accent: "#f472b6" },
};

export const BAG_ITEMS: BagItem[] = [
  { id: "docs", name: "Iratok (igazolvány, TAJ, lakcím) + másolatok", group: "iratok", kg: 0.3, okf: true, source: "hu-okf-arviz", icon: "passport", hint: "Vízhatlan tasakban. Másolat USB-n vagy a telefonon is." },
  { id: "cash", name: "Készpénz kis címletekben + bankkártya", group: "iratok", kg: 0.1, okf: true, source: "hu-okf-arviz", icon: "wallet" },
  { id: "keys", name: "Kulcsok (lakás, autó, tartalék)", group: "iratok", kg: 0.1, source: "de-bbk-ratgeber", icon: "home" },
  { id: "notes", name: "Toll, papír, fontos telefonszámok leírva", group: "iratok", kg: 0.1, source: "de-bbk-ratgeber", icon: "passport", hint: "Ha lemerül a telefon, fejből nem tudod a számokat." },

  { id: "food", name: "Tartós élelem 2–3 napra", group: "ellatas", kg: 1.5, perPerson: true, okf: true, source: "hu-okf-arviz", icon: "soup", hint: "Konzerv, kétszersült, müzliszelet, szárított gyümölcs – főzés nélkül ehető." },
  { id: "water", name: "Ivóvíz, 1 liter", group: "ellatas", kg: 1.05, perPerson: true, okf: true, source: "hu-okf-arviz", icon: "droplet", hint: "Az OKF 1 litert ír a csomagba; a többi víz otthon marad." },
  { id: "cup", name: "Kulacs, bögre, evőeszköz, konzervnyitó", group: "ellatas", kg: 0.3, source: "de-bbk-ratgeber", icon: "soup" },

  { id: "meds", name: "Saját gyógyszerek + allergialista", group: "egeszseg", kg: 0.3, okf: true, source: "hu-okf-arviz", icon: "heart", hint: "Legalább néhány napi adag, a gyógyszerallergiát is írd fel." },
  { id: "firstaid", name: "Elsősegélycsomag", group: "egeszseg", kg: 0.5, source: "de-bbk-ratgeber", icon: "heart" },
  { id: "hygiene", name: "Tisztálkodószerek, fogkefe, nedves törlő, WC-papír", group: "egeszseg", kg: 0.6, source: "de-bbk-ratgeber", icon: "sparkles" },
  { id: "mask", name: "Szájmaszk, kézfertőtlenítő", group: "egeszseg", kg: 0.1, source: "de-bbk-ratgeber", icon: "shield" },
  { id: "glasses", name: "Tartalék szemüveg / kontaktlencse", group: "egeszseg", kg: 0.1, source: "de-bbk-ratgeber", icon: "heart" },

  { id: "blanket", name: "Takaró vagy hálózsák", group: "ruha", kg: 1.2, perPerson: true, okf: true, source: "hu-okf-arviz", icon: "home" },
  { id: "clothes", name: "Váltóruha, zokni, fehérnemű", group: "ruha", kg: 1.0, perPerson: true, source: "de-bbk-ratgeber", icon: "users", hint: "Időjárásnak megfelelően; télen sapka, kesztyű." },
  { id: "rain", name: "Esőkabát / poncsó", group: "ruha", kg: 0.4, perPerson: true, source: "de-bbk-ratgeber", icon: "shield" },

  { id: "radio", name: "Elemes vagy tekerős rádió", group: "eszkoz", kg: 0.3, okf: true, source: "hu-okf-arviz", icon: "radio", hint: "A hatósági tájékoztatást a rádió mondja el akkor is, ha nincs net." },
  { id: "torch", name: "Zseblámpa / fejlámpa + tartalék elem", group: "eszkoz", kg: 0.3, source: "de-bbk-ratgeber", icon: "flame" },
  { id: "phone", name: "Telefon, töltő, powerbank", group: "eszkoz", kg: 0.5, source: "de-bbk-ratgeber", icon: "phone" },
  { id: "fire", name: "Gyufa vagy öngyújtó (vízhatlan tokban)", group: "eszkoz", kg: 0.05, source: "de-bbk-ratgeber", icon: "flame" },
  { id: "knife", name: "Zsebkés / multiszerszám", group: "eszkoz", kg: 0.2, source: "de-bbk-ratgeber", icon: "bag" },
  { id: "whistle", name: "Síp", group: "eszkoz", kg: 0.02, source: "de-bbk-ratgeber", icon: "bell", hint: "Segélykérésre: hallható akkor is, amikor a hangod már nem." },
  { id: "tape", name: "Ragasztószalag, zsineg, nejlonzsák", group: "eszkoz", kg: 0.3, source: "de-bbk-ratgeber", icon: "bag" },

  { id: "toy", name: "A gyerek kedvenc játéka", group: "csalad", kg: 0.3, okf: true, only: "kids", source: "hu-okf-arviz", icon: "sparkles", hint: "Az OKF listáján is rajta van: biztonságérzetet ad." },
  { id: "baby", name: "Bébiétel, pelenka, cumisüveg", group: "csalad", kg: 1.5, only: "kids", source: "de-bbk-ratgeber", icon: "users" },
  { id: "nametag", name: "Névcímke a csomagon és a gyerek ruháján", group: "csalad", kg: 0.01, only: "kids", source: "hu-okf-nuklearis", icon: "passport" },
  { id: "photos", name: "Családi fotó (ha elszakadtok, ezzel kerestek)", group: "csalad", kg: 0.02, source: "de-bbk-ratgeber", icon: "users" },
  { id: "pet", name: "Állateledel, póráz, oltási könyv", group: "csalad", kg: 1.0, only: "pets", source: "de-bbk-ratgeber", icon: "paw" },
];

export function itemKg(it: BagItem, people: number) {
  return it.perPerson ? it.kg * people : it.kg;
}
