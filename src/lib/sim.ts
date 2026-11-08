/**
 * Áramszünet-szimulátor modellje.
 * Hivatalos adat: hűtő 4 óra, tele fagyasztó 48 óra / félig tele 24 óra (USDA FSIS, us-fsis-outage).
 * A többi görbe (lakás hűlése, telefon-akku, vízfogyás) egyszerű, jelölt becslés – a méretarányok
 * érzékeltetésére, nem előrejelzésre.
 */
export type Season = "winter" | "summer";

export interface SimInput {
  people: number;
  season: Season;
  /** Tárolt ivóvíz literben */
  waterL: number;
  /** Napi fejadag liter */
  waterPerDay: number;
  /** Tartós élelem napokban */
  foodDays: number;
  freezerFull: boolean;
  has: { powerbank: boolean; radio: boolean; flashlight: boolean; candles: boolean; water: boolean };
  /** Folyik-e a csapvíz áramszünetben (földszint/alacsony ház: általában igen; emeletes ház szivattyúval: nem) */
  tapWorks: boolean;
}

export const OUTSIDE = { winter: -5, summer: 29 } as const;
/** Kezdés: télen 17:00 (hamar sötétedik), nyáron 14:00 */
export const START_HOUR = { winter: 17, summer: 14 } as const;

/** Beltéri hőmérséklet t óra után (Newton-hűlés, időállandó ~60 h egy átlagos, zárt lakásra – becslés). */
export function indoorTemp(t: number, season: Season) {
  const out = OUTSIDE[season];
  const start = 21;
  const tau = season === "winter" ? 60 : 40;
  return out + (start - out) * Math.exp(-t / tau);
}

/** Telefon akku % – alapjáraton kb. 2,5 %/óra; powerbankkal (≈2 feltöltés) tovább. Becslés. */
export function phoneBattery(t: number, powerbank: boolean) {
  const drainPerHour = 2.5;
  const total = 100 + (powerbank ? 200 : 0);
  return Math.max(0, total - t * drainPerHour);
}
export function phoneHours(powerbank: boolean) {
  return (100 + (powerbank ? 200 : 0)) / 2.5;
}

/** Hűtő és fagyasztó: USDA FSIS */
export const FRIDGE_SAFE_H = 4;
export const freezerSafeH = (full: boolean) => (full ? 48 : 24);

/** Víz: tárolt készlet + (ha folyik a csap) korlátlan. */
export function waterLeft(t: number, inp: SimInput) {
  if (inp.tapWorks) return Infinity;
  const use = (inp.people * inp.waterPerDay) / 24;
  return Math.max(0, inp.waterL - t * use);
}
export function waterHours(inp: SimInput) {
  if (inp.tapWorks) return Infinity;
  const use = (inp.people * inp.waterPerDay) / 24;
  return use ? inp.waterL / use : 0;
}

/** Világos van-e odakint az adott órában (0–72 h a kezdéstől). */
export function isDaylight(t: number, season: Season) {
  const h = (START_HOUR[season] + t) % 24;
  return season === "winter" ? h >= 7.5 && h < 16.5 : h >= 5.5 && h < 20.5;
}
export function clockAt(t: number, season: Season) {
  const h = (START_HOUR[season] + t) % 24;
  const d = Math.floor((START_HOUR[season] + t) / 24);
  return { h: Math.floor(h), m: Math.round((h % 1) * 60), day: d };
}

export interface SimEvent {
  at: number;
  kind: "info" | "warn" | "bad" | "good";
  title: string;
  text: string;
  source?: string;
}

/** A 72 óra eseményei az adott terv alapján. */
export function events(inp: SimInput): SimEvent[] {
  const ev: SimEvent[] = [];
  const dark = (() => { for (let t = 0; t <= 72; t += 0.25) if (!isDaylight(t, inp.season)) return t; return 72; })();
  ev.push({ at: 0, kind: "info", title: "Elment az áram", text: "Nincs fény, fűtésvezérlés, router, lift. A mobilhálózat még megy, a cellák akkumulátoráról." });
  if (dark <= 72) {
    ev.push(inp.has.flashlight || inp.has.candles
      ? { at: dark, kind: "good", title: "Besötétedik, de van fény", text: inp.has.flashlight ? "Zseblámpa és fejlámpa – biztonságosabb, mint a gyertya." : "Gyertya: csak felügyelettel, stabil alátéten." }
      : { at: dark, kind: "warn", title: "Besötétedik, és nincs lámpa", text: "A telefon vakuja marad – ami gyorsan meríti az akkut." });
  }
  ev.push({ at: FRIDGE_SAFE_H, kind: "warn", title: "A hűtő már nem biztonságos", text: "Zárt ajtó mellett kb. 4 óráig tart. Hús, tej, tojás, maradék innentől kockázatos.", source: "us-fsis-outage" });
  if (!inp.tapWorks) ev.push({ at: 0.5, kind: "warn", title: "A csap nem ad vizet", text: "Emeletes házban a nyomásfokozó szivattyú áram nélkül leáll." });
  const ph = phoneHours(inp.has.powerbank);
  if (ph <= 72) ev.push({ at: ph, kind: inp.has.radio ? "warn" : "bad", title: "Lemerült a telefon", text: inp.has.radio ? "A kézi rádión továbbra is hallod a hatósági tájékoztatást." : "Nincs rádió: innentől nem hallod a hatósági közleményeket." });
  else ev.push({ at: 24, kind: "good", title: "A powerbank kitart", text: "A telefon a 3. napon is működik, ha takarékosan használod." });
  if (inp.season === "winter") {
    const t16 = tAtTemp(16, inp.season), t12 = tAtTemp(12, inp.season);
    if (t16 <= 72) ev.push({ at: t16, kind: "warn", title: "16 °C alatt a lakás", text: "Egy szobába húzódjatok össze, csukjátok be a többi ajtót; réteges ruha, sapka, takaró." });
    if (t12 <= 72) ev.push({ at: t12, kind: "bad", title: "12 °C: hideg otthon", text: "Kisgyereknek, idősnek, betegnek már veszélyes. Fontold meg a melegedőhelyet." });
  } else {
    ev.push({ at: 20, kind: "warn", title: "Nincs légkondi, nincs ventilátor", text: "Nappal sötétíts, éjjel szellőztess; több folyadék, kevesebb mozgás a hőségben." });
  }
  const fz = freezerSafeH(inp.freezerFull);
  ev.push({ at: fz, kind: "warn", title: "A fagyasztó felenged", text: `${inp.freezerFull ? "Tele" : "Félig tele"} fagyasztó kb. ${fz} óráig tart. Ami még jégkristályos, újrafagyasztható.`, source: "us-fsis-outage" });
  const wh = waterHours(inp);
  if (wh <= 72) ev.push({ at: wh, kind: "bad", title: "Elfogyott a tárolt víz", text: `${inp.people} főre napi ${inp.waterPerDay} literrel számolva. Hiányzik még kb. ${Math.ceil((72 - wh) / 24 * inp.people * inp.waterPerDay)} liter a 72 órához.` });
  if (inp.foodDays * 24 <= 72) ev.push({ at: inp.foodDays * 24, kind: "bad", title: "Elfogyott a tartós élelem", text: "Hideg konyhán is ehető tartós ételre van szükség: konzerv, kétszersült, olajos magvak." });
  ev.push({ at: 72, kind: "info", title: "72 óra", text: "Az EU szerint ennyi ideig számolj azzal, hogy magadra vagy utalva. A hatósági segítség tipikusan ekkorra ér el mindenhova.", source: "eu-preparedness-2025" });
  return ev.filter((e) => e.at <= 72).sort((a, b) => a.at - b.at);
}

function tAtTemp(target: number, season: Season) {
  const out = OUTSIDE[season];
  if (target <= out) return Infinity;
  const tau = season === "winter" ? 60 : 40;
  return -tau * Math.log((target - out) / (21 - out));
}

/** Hány órát bírna ki a háztartás komolyabb gond nélkül (víz, étel, hideg a korlát). */
export function holdoutHours(inp: SimInput) {
  const limits = [waterHours(inp), inp.foodDays * 24, inp.season === "winter" ? tAtTemp(12, inp.season) : Infinity];
  return Math.min(72, ...limits);
}
