import type { CategoryId } from "./checklist";

export interface Beat {
  at: string; // pl. "+2 óra"
  title: string;
  what: string;
  need: string[]; // checklist item id-k
}

export interface Scenario {
  id: string;
  name: string;
  tagline: string;
  season: string;
  cats: CategoryId[];
  intro: string;
  beats: Beat[];
  sources: string[];
}

/**
 * A forgatókönyvek az EU és a nemzeti kampányok 72 órás keretére épülnek.
 * Az időrend általános tapasztalati sorrend (mi áll le először), nem hatósági előrejelzés.
 */
export const SCENARIOS: Scenario[] = [
  {
    id: "aramszunet-tel",
    name: "72 órás áramszünet télen",
    tagline: "Mínusz 5 fok, és leáll a hálózat.",
    season: "tél",
    cats: ["energy", "water", "food", "health"],
    intro: "A legvalószínűbb nagyobb zavar. Nem a sötétség a baj, hanem minden, ami az áramtól függ: fűtésvezérlés, víznyomás, kártyás fizetés, mobilhálózat.",
    beats: [
      { at: "+0 óra", title: "Sötét, csend", what: "Leáll a világítás, a hűtő, a router. A telefon még megy, de a hírek gyorsan elapadnak.", need: ["flashlight", "radio"] },
      { at: "+2 óra", title: "Kihűl a lakás", what: "A gázkazán is leáll, mert az elektronikája és a keringető szivattyúja áramot kér. Emeletes házban a víznyomás gyengül.", need: ["water", "water-cans"] },
      { at: "+6 óra", title: "Nincs kártya, nincs ATM", what: "A boltok zárnak vagy csak készpénzt fogadnak el. A benzinkutak szivattyúi nem működnek.", need: ["cash"] },
      { at: "+12 óra", title: "Lemerül a telefon", what: "A mobilcellák tartalék akkui is fogynak. Aki nem töltött előre, az elszigetelődik.", need: ["powerbank", "radio"] },
      { at: "+24 óra", title: "Hűtő, fagyasztó", what: "A hűtő tartalma romlani kezd. Meleg étel csak gáz- vagy spiritusz-főzővel, jól szellőztetve.", need: ["food-grain", "food-protein"] },
      { at: "+48 óra", title: "Gyógyszer, higiénia", what: "Elfogy a rendszeres gyógyszer, ha nem volt tartalék. Mosakodás, WC-öblítés tárolt vízből.", need: ["meds", "hygiene"] },
      { at: "+72 óra", title: "Visszatér az áram", what: "A legtöbb forgatókönyvben ekkorra helyreáll az ellátás. Aki felkészült, végig nyugodt maradt.", need: ["plan"] },
    ],
    sources: ["eu-preparedness-2025", "nl-denkvooruit", "at-tirol-blackout"],
  },
  {
    id: "vizhiany",
    name: "Vízkimaradás 3 napig",
    tagline: "Csőtörés vagy szennyezés: a csapból semmi.",
    season: "bármikor",
    cats: ["water", "health", "food"],
    intro: "Rövidebb, mint gondolnád, de a víz nélküli első nap már komoly. A tárolt víz és a vízosztáshoz való kannák döntik el, mennyire fáj.",
    beats: [
      { at: "+0 óra", title: "Elapad a csap", what: "Ami a tartályokban és a palackokban van, azzal kell gazdálkodni. Ivásra csak palackozott vagy a hatóság által jelzett biztonságos víz.", need: ["water"] },
      { at: "+6 óra", title: "Vízosztás indul", what: "Lajtoskocsik, vízosztó pontok. Kanna nélkül nem tudsz hazavinni semmit.", need: ["water-cans"] },
      { at: "+24 óra", title: "Főzés, mosogatás", what: "Minden liter számít: főzés nélküli ételek, eldobható eszközök, nedves törlőkendő.", need: ["food-grain", "hygiene"] },
      { at: "+72 óra", title: "Forralási utasítás", what: "A szolgáltatás visszatérése után gyakran forralni kell a vizet pár napig, amíg a hatóság fel nem oldja.", need: ["radio"] },
    ],
    sources: ["cz-72h-water", "nl-denkvooruit"],
  },
  {
    id: "kitelepites",
    name: "Kitelepítés 1 órán belül",
    tagline: "Árvíz, vegyi baleset, gázszivárgás: menni kell.",
    season: "bármikor",
    cats: ["evac", "family", "health"],
    intro: "Itt nem a készlet mérete számít, hanem az, hogy 10 perc alatt el tudsz-e indulni mindennel, ami fontos.",
    beats: [
      { at: "+0 perc", title: "Riasztás", what: "Hatósági utasítás jön: el kell hagyni a területet. Pánik helyett a kész csomagért nyúlsz.", need: ["gobag"] },
      { at: "+5 perc", title: "Iratok, gyógyszer, pénz", what: "Személyi, lakcím, TAJ másolat, receptek, kis címletű készpénz: ezek nélkül napokig el lehet akadni.", need: ["docs", "meds", "cash"] },
      { at: "+10 perc", title: "Indulás", what: "Víz, gáz elzárva, ablakok csukva. A család tudja, hol a találkozópont, ha nem vagytok együtt.", need: ["plan", "kids-kit"] },
      { at: "+24 óra", title: "Befogadóhely", what: "Rokon, ismerős vagy hatósági szálláshely. A saját takaró, töltő és gyógyszer kényelmet és biztonságot ad.", need: ["powerbank", "firstaid"] },
    ],
    sources: ["nl-denkvooruit", "eu-preparedness-2025"],
  },
];

export const scenarioById = (id: string) => SCENARIOS.find((s) => s.id === id);

/** Havi 10 perces feladatok – rutin, nem riadó. */
export const MONTHLY: { m: number; title: string; task: string }[] = [
  { m: 1, title: "Powerbank-nap", task: "Töltsd fel az összes powerbankot, cseréld a lámpák elemeit." },
  { m: 2, title: "Gyógyszertartalék", task: "Nézd át a házipatikát és a rendszeres gyógyszerek tartalékát." },
  { m: 3, title: "Vízforgatás", task: "A tárolt vizet használd el, vegyél frisset. Ellenőrizd a kannákat." },
  { m: 4, title: "Iratmásolatok", task: "Frissítsd az iratmásolatokat és a kontaktlistát a hűtőkártyán." },
  { m: 5, title: "Konzervnap", task: "Ami fél éven belül lejár, kerüljön a heti menübe, és pótold." },
  { m: 6, title: "Hőség-ellenőrzés", task: "Árnyékolás, extra víz, idős rokonok elérhetősége a nyárra." },
  { m: 7, title: "Rádió-teszt", task: "Működik az elemes rádió? Tudod, melyik frekvencián jön a közszolgálati adó?" },
  { m: 8, title: "Családi terv", task: "Beszéljétek át a találkozópontot és ki miért felel." },
  { m: 9, title: "Fűtés előtt", task: "Kazán-ellenőrzés, CO-érzékelő elemcsere, alternatív fűtés biztonsága." },
  { m: 10, title: "Menekülőcsomag", task: "Pakold ki, nézd át, pakold vissza: évszaknak megfelelő ruha." },
  { m: 11, title: "Készpénz", task: "Van kis címletű készpénz a csomagban? Pótold, ha elköltötted." },
  { m: 12, title: "Évi nagy átnézés", task: "Futtasd le újra a tervezőt, és nézd meg, nőtt-e a pontszámod." },
];
