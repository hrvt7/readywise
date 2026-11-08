/**
 * Helyzetenkénti hivatalos útmutatók és gyakorlati tippek országonként.
 * Szabály: minden lépés és tipp egy hivatalos forrás saját megfogalmazású
 * összefoglalása – a `source` mező a SOURCES regiszter azonosítója.
 */
import type { CountryCode } from "./countries";
import { GUIDE_DATA } from "./guides-data";

export type GuideType =
  | "war_airraid"
  | "blackout"
  | "nuclear"
  | "flood"
  | "heat"
  | "cold"
  | "fire"
  | "evacuation"
  | "cyber"
  | "pandemic";

export const GUIDE_TYPES: { id: GuideType; name: string; short: string; accent: string; lead: string }[] = [
  { id: "war_airraid", name: "Fegyveres konfliktus, légiriadó", short: "Háború / légiriadó", accent: "#f87171", lead: "Mit kell tenni, ha megszólal a sziréna vagy fegyveres konfliktus fenyeget." },
  { id: "blackout", name: "Hosszabb áramszünet", short: "Áramszünet", accent: "#fbbf24", lead: "Fény, fűtés, víz és kommunikáció, amikor napokig nincs áram." },
  { id: "nuclear", name: "Sugárzás, vegyi szennyezés", short: "Sugárzás / vegyi", accent: "#a3e635", lead: "Elzárkózás odabent, jódtabletta csak hatósági utasításra." },
  { id: "flood", name: "Árvíz, hirtelen áradás", short: "Árvíz", accent: "#60a5fa", lead: "Felkészülés, viselkedés áradáskor, teendők utána." },
  { id: "heat", name: "Hőség", short: "Hőség", accent: "#fb923c", lead: "Hűtés, folyadék, a veszélyeztetettek figyelése." },
  { id: "cold", name: "Hideg, téli vihar", short: "Hideg", accent: "#38bdf8", lead: "Melegen maradni fűtés nélkül, biztonságosan." },
  { id: "fire", name: "Tűz", short: "Tűz", accent: "#fb7185", lead: "Megelőzés és menekülés tűz esetén." },
  { id: "evacuation", name: "Kitelepítés", short: "Kitelepítés", accent: "#22d3ee", lead: "Ha percek alatt el kell hagyni az otthont." },
  { id: "cyber", name: "Kommunikáció kiesése, dezinformáció", short: "Kommunikáció", accent: "#a78bfa", lead: "Ha nincs net és térerő, és ha hamis hírek terjednek." },
  { id: "pandemic", name: "Járvány", short: "Járvány", accent: "#f472b6", lead: "Fertőzés elleni védekezés és otthoni elkülönülés." },
];

export const guideType = (id: string) => GUIDE_TYPES.find((g) => g.id === id);

export type TipTag = "viz" | "etel" | "energia" | "egeszseg" | "csalad" | "otthon" | "info" | "penz";

export const TIP_TAGS: { id: TipTag; name: string; accent: string; icon: "droplet" | "soup" | "battery" | "heart" | "users" | "home" | "radio" | "wallet" }[] = [
  { id: "viz", name: "Víz", accent: "#38bdf8", icon: "droplet" },
  { id: "etel", name: "Étel", accent: "#34d399", icon: "soup" },
  { id: "energia", name: "Áram és hő", accent: "#fbbf24", icon: "battery" },
  { id: "egeszseg", name: "Egészség", accent: "#a78bfa", icon: "heart" },
  { id: "csalad", name: "Család", accent: "#f472b6", icon: "users" },
  { id: "otthon", name: "Otthon", accent: "#22d3ee", icon: "home" },
  { id: "info", name: "Információ", accent: "#818cf8", icon: "radio" },
  { id: "penz", name: "Pénz és iratok", accent: "#fb923c", icon: "wallet" },
];

export interface Guide {
  type: GuideType;
  /** Alcím, ha egy országnak ugyanarra a helyzetre több útmutatója van */
  title?: string;
  steps: string[];
  source: string;
}
export interface Tip {
  title: string;
  text: string;
  tag: TipTag;
  source: string;
}
export interface CountryGuides {
  alerts?: { text: string; source: string };
  guides: Guide[];
  tips: Tip[];
}

export const GUIDES: Partial<Record<CountryCode, CountryGuides>> = GUIDE_DATA;

export function guidesFor(code: CountryCode): CountryGuides {
  return GUIDES[code] ?? { guides: [], tips: [] };
}

/** Az adott helyzetről mely országok adtak ki útmutatót. */
export function guidesByType(type: GuideType) {
  return (Object.entries(GUIDES) as [CountryCode, CountryGuides][])
    .flatMap(([code, g]) => g.guides.filter((x) => x.type === type).map((x, i) => ({ code, key: `${code}-${i}`, ...x })));
}

export function allTips() {
  return (Object.entries(GUIDES) as [CountryCode, CountryGuides][]).flatMap(([code, g]) => g.tips.map((t) => ({ code, ...t })));
}
