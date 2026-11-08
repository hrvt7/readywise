/**
 * Forrásregiszter – minden számszerű állítás az oldalon ide hivatkozik.
 * Szabály: csak hivatalos (állami / hatósági / EU) kiadvány, vagy annak
 * önkormányzati tükörpéldánya. Sajtóforrás csak kiegészítő kontextusnak.
 * "checked" = az utolsó kézi ellenőrzés dátuma.
 */
export type SourceKind = "official" | "official-mirror" | "press";

export interface Source {
  id: string;
  publisher: string;
  title: string;
  region: string; // ISO kód vagy "EU"
  year: string;
  url: string;
  kind: SourceKind;
  checked: string;
  facts: string[]; // amit innen átveszünk (saját megfogalmazásban)
}

export const SOURCES: Source[] = [
  {
    id: "eu-preparedness-2025",
    publisher: "Európai Bizottság",
    title: "EU Preparedness Union Strategy (sajtóközlemény)",
    region: "EU",
    year: "2025",
    url: "https://civil-protection-humanitarian-aid.ec.europa.eu/news-stories/news/eu-preparedness-union-strategy-prevent-and-react-emerging-threats-and-crises-2025-03-26_en",
    kind: "official",
    checked: "2026-11-08",
    facts: [
      "Az EU azt javasolja, hogy a háztartások legalább 72 órán át önellátók legyenek válsághelyzetben.",
      "A stratégia EU-s felkészültségi napot és iskolai felkészítést is javasol.",
    ],
  },
  {
    id: "de-bbk-ratgeber",
    publisher: "BBK – Bundesamt für Bevölkerungsschutz und Katastrophenhilfe",
    title: "Vorsorgen für Krisen und Katastrophen (Ratgeber)",
    region: "DE",
    year: "2024–2026",
    url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf",
    kind: "official-mirror",
    checked: "2026-11-08",
    facts: [
      "A háztartások lehetőleg 10 napig tudják ellátni magukat.",
      "Víz: ideálisan 2 liter fejenként naponta, ebből 0,5 liter főzésre.",
      "Gondolj a háziállatokra is.",
    ],
  },
  {
    id: "de-bbk-checkliste",
    publisher: "BBK / BLE",
    title: "Persönliche Checkliste – 10-Tage-Grundvorrat",
    region: "DE",
    year: "2024",
    url: "https://www.steinmauern.de/wp-content/uploads/sites/3/2024/10/Checkliste-DE.pdf",
    kind: "official-mirror",
    checked: "2026-11-08",
    facts: [
      "Egy személy 10 napos alapkészlete kb. napi 2200 kcal-ra van méretezve.",
      "Italok: 2 liter/fő/nap, 10 napra 20 liter (1,5 l minimum + 0,5 l főzéshez).",
    ],
  },
  {
    id: "de-ble-kalkulator",
    publisher: "BLE – Ernährungsvorsorge",
    title: "Vorratskalkulator",
    region: "DE",
    year: "2026",
    url: "https://www.ernaehrungsvorsorge.de/private-vorsorge/notvorrat/vorratskalkulator",
    kind: "official",
    checked: "2026-11-08",
    facts: ["Hivatalos német készletkalkulátor háztartásméret szerint."],
  },
  {
    id: "at-zsv-bevorraten",
    publisher: "Österreichischer Zivilschutzverband",
    title: "Bevorraten, aber richtig – Krisenfester Haushalt",
    region: "AT",
    year: "2023",
    url: "https://lienz.gv.at/media/frontend/dokumente/Bevorraten.pdf",
    kind: "official-mirror",
    checked: "2026-11-08",
    facts: [
      "14 napos alapkészlet személyenként: gabonatermék 4,5 kg, hús/hal 2,0 kg, olaj/zsír 0,5 kg, tejtermék 4,5 kg, zöldség/gyümölcs 6,0 kg, víz/ital 21 l.",
      "Egy felnőtt napi folyadékigénye kb. 2,5 liter, ebből kb. 1,5 liter ital formájában.",
    ],
  },
  {
    id: "at-tirol-blackout",
    publisher: "Land Tirol – Zivil- und Katastrophenschutz",
    title: "Wie bereite ich mich auf Stromausfälle und Blackouts vor?",
    region: "AT",
    year: "2023",
    url: "https://www.tirol.gv.at/fileadmin/presse/Bilder/Archiv/Platter/Blackout_UEbung/Fact_Sheet_Vorbereitung_auf_Stromausfall_und_Blackout.pdf",
    kind: "official",
    checked: "2026-11-08",
    facts: [
      "Italkészlet: legalább 2,5 liter fejenként naponta.",
      "Élelmiszer: legalább 14 napra.",
      "Gondolj a babákra, kisgyerekekre, betegekre és háziállatokra.",
    ],
  },
  {
    id: "nl-denkvooruit",
    publisher: "Rijksoverheid (Hollandia kormánya)",
    title: "Denk vooruit – Beter voorbereid (lakossági füzet)",
    region: "NL",
    year: "2025",
    url: "https://zoek.officielebekendmakingen.nl/dossier/blg-1223957.pdf",
    kind: "official",
    checked: "2026-11-08",
    facts: [
      "Készülj fel az első 72 órára.",
      "Palackozott víz: legalább 3 liter fejenként naponta.",
      "Zseblámpa elemekkel, gyertya és gyufa, elemes rádió, feltöltött powerbank, iratmásolatok.",
      "Készpénz 72 órára: kb. 70 € felnőttenként, 30 € gyerekenként.",
    ],
  },
  {
    id: "nl-noodpakket",
    publisher: "Rijksoverheid",
    title: "Wat zit er in een noodpakket?",
    region: "NL",
    year: "2025",
    url: "https://www.rijksoverheid.nl/vraag-en-antwoord/veiligheidsregios-en-crisisbeheersing/wat-zit-er-in-een-noodpakket",
    kind: "official",
    checked: "2026-11-08",
    facts: ["Készpénz: 70 € felnőttenként, 30 € gyerekenként az első 72 órára (ajánlás)."],
  },
  {
    id: "cz-72h",
    publisher: "Csehország – 72h.gov.cz",
    title: "72 hodin / 72 hours",
    region: "CZ",
    year: "2025",
    url: "https://www.72h.gov.cz/en/72-hours",
    kind: "official",
    checked: "2026-11-08",
    facts: [
      "Mindenki legyen képes a válság első három napját mentőszolgálat segítsége nélkül kezelni.",
      "Életveszélyes helyzetben a 72 órás elv nem érvényes: hívd a 112-t.",
    ],
  },
  {
    id: "cz-72h-water",
    publisher: "Csehország – 72h.gov.cz",
    title: "Water",
    region: "CZ",
    year: "2025",
    url: "https://www.72h.gov.cz/en/water",
    kind: "official",
    checked: "2026-11-08",
    facts: [
      "Vészhelyzetben egy felnőtt napi 2 liter vízzel is boldogul.",
      "Normál használatban főzéssel és higiéniával napi 10–15 liter.",
      "Tarts zárható kannákat a lajtoskocsis vízosztáshoz.",
    ],
  },
  {
    id: "be-nccn-2026",
    publisher: "Belga News Agency (NCCN kampány)",
    title: "Belgium launches four-year campaign to prepare public for emergencies",
    region: "BE",
    year: "2026",
    url: "https://www.belganewsagency.eu/belgium-launches-four-year-campaign-to-prepare-public-for-emergencies",
    kind: "press",
    checked: "2026-11-08",
    facts: ["Belgium négyéves lakossági felkészítési kampányt indított, 72 órás vészhelyzeti csomaggal."],
  },
  {
    id: "hu-nkke-2024",
    publisher: "BM Országos Katasztrófavédelmi Főigazgatóság",
    title: "Nemzeti katasztrófakockázat-értékelés 2024",
    region: "HU",
    year: "2025",
    url: "https://katasztrofavedelem.hu/application/uploads/documents/2025-06/86142.pdf",
    kind: "official",
    checked: "2026-11-08",
    facts: ["Magyarország hivatalos katasztrófakockázat-értékelése."],
  },
  {
    id: "hu-koszeg-arviz",
    publisher: "Kőszeg Város Önkormányzata",
    title: "Lakossági tájékoztató – árvíz, kitelepítés",
    region: "HU",
    year: "–",
    url: "https://koszeg.hu/pictures/downloadmanager/download.php?id=3849",
    kind: "official",
    checked: "2026-11-08",
    facts: [
      "Veszélyhelyzeti csomag: könnyen szállítható, legfeljebb 20 kg.",
      "Távozáskor zárd el a víz- és gázvezetéket, kapcsold le az áramot.",
    ],
  },
  {
    id: "hu-ebes-tel-2026",
    publisher: "Ebes Község Önkormányzata",
    title: "Lakossági tájékoztató téli rendkívüli időjárási helyzetekre (2026)",
    region: "HU",
    year: "2026",
    url: "https://www.ebes.hu/wp-content/uploads/2026/01/lakossagitajekoztato2026.pdf",
    kind: "official",
    checked: "2026-11-08",
    facts: ["A szén-monoxid-mérgezés minden évben halálos áldozatokat követel, de megelőzhető."],
  },
];

export const sourceById = (id: string) => SOURCES.find((s) => s.id === id);
