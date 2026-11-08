// GENERÁLT FÁJL – scripts/merge.py (kutatás: hivatalos források, 2026-11-08)
import type { CountryGuides } from "./guides";
import type { CountryCode } from "./countries";

export const GUIDE_DATA: Partial<Record<CountryCode, CountryGuides>> = {
 "HU": {
  "alerts": {
   "text": "Légiriadó: háromszor 30 másodperces, váltakozó hangmagasságú szirénahang 30 másodperces szünetekkel; katasztrófariadó: 120 másodperces folyamatos, váltakozó hangmagasságú szirénahang; riadó elmúlt: kétszer 30 másodperces egyenletes hang 30 másodperc szünettel. A MoLaRi-próbák általában minden hónap első hétfőjén vannak, és ilyenkor elhangzik a „Figyelem, ez próba” szöveg – valós riasztásban soha. A sziréna nem mondja meg, mi a veszély: a teendőket a rádió és a tévé (Kossuth Rádió) közli, a hőségriasztásokról az ingyenes VÉSZ alkalmazás is tájékoztat.",
   "source": "hu-okf-molari"
  },
  "guides": [
   {
    "type": "flood",
    "steps": [
     "Készíts elő zseblámpát, elemes rádiót és mobiltelefont, tartalékelemmel vagy powerbankkal.",
     "Szerezz be védőfelszerelést: gumicsizmát, vízálló ruhát, kesztyűt.",
     "Hordd be az udvarról mindazt, amit a víz elvihet vagy károsíthat; az értékeket és a háztartási eszközöket vidd a padlásra, emeletre, vagy szállítsd el.",
     "Soha ne menj bele az árvízbe: már 20 cm mozgó víz ledönthet, 30–40 cm pedig leállíthatja az autót.",
     "Ha gyalog át kell kelned egy elöntött területen, legalább ketten menjetek, előbb mérd fel a mélységet, és viselj védőlábbelit; a leszakadt vezeték életveszélyes.",
     "Kövesd a tévé, a rádió, a hangosbemondó és a szirénák tájékoztatását; a telefont csak segélykérésre használd.",
     "Ha a hatóság a lakóhely elhagyására szólít fel, kövesd az utasításokat (lásd: kitelepítés)."
    ],
    "source": "hu-okf-arviz"
   },
   {
    "type": "evacuation",
    "steps": [
     "Kövesd a hatóság utasításait; eldöntheted, hogy a kijelölt befogadóhelyre vagy rokonokhoz, ismerősökhöz mész.",
     "Csomagold be a veszélyhelyzeti csomagot (legfeljebb 20 kg, rajta a neved) hátizsákba vagy válltáskába, hogy szabad maradjon a kezed.",
     "Indulás előtt zárd el a vizet és a gázt, kapcsold le az áramot, oltsd el a tüzet a kályhában, csukd be az ablakokat és zárd be az ajtót.",
     "A kijelölt gyülekezőhelyre lehetőleg gyalog, a kijelölt útvonalon, csoportosan menj, hogy segíthessetek egymásnak.",
     "A mozgásképtelen betegeket jelentsd be a gyülekezőhelyen – magukra hagyni őket nem szabad.",
     "Ne kockáztasd az életed az értékeidért: az elhagyott házakat a rendőrség, a polgárőrség és az őrző-védő szolgálatok őrzik.",
     "Ha magadtól térsz vissza, jelentkezz a lakóhelyeden; a vizet, áramot és gázt csak a hálózat ellenőrzése után kapcsold vissza."
    ],
    "source": "hu-okf-kitelepites"
   },
   {
    "type": "nuclear",
    "title": "Sugárzás",
    "steps": [
     "Zárkózz el a lakásban, csukott ablakok és ajtók mögött; kerüld a szabadban tartózkodást – a nyílt terepen való menekülés nagy sugárdózissal járhat.",
     "Az elzárkózás előtt zuhanyozz le, és cseréld tisztára az esetleg szennyezett ruhát.",
     "Az elzárkózás 1–2 napig tarthat: legyen csomagolt vagy konzervélelmiszer, ivóvíz (fejenként napi 3–4 liter), takaró, gyógyszer, elemes rádió, vészvilágítás, elsősegélycsomag, nejlonzacskók a szennyezett tárgyaknak és a hulladéknak, valamint ragasztószalag az ajtók és ablakok lezárásához.",
     "Hallgasd a Kossuth Rádiót: ott hangzik el az óvintézkedések elrendelése és feloldása.",
     "Kálium-jodidot CSAK központi utasításra vegyél be; csak a pajzsmirigyet védi a radioaktív jód ellen, és felesleges, ha nincs radioaktív jód a levegőben.",
     "Soha ne indulj el magadtól: várd meg a központi kimenekítési utasítást és útvonalat, hogy elkerüld a radioaktív felhőt."
    ],
    "source": "hu-okf-nuklearis"
   },
   {
    "type": "nuclear",
    "title": "Vegyi anyag kiszabadulása",
    "steps": [
     "Ha szirénaszókor az utcán vagy, a legrövidebb úton menj haza (hacsak a hangosbemondó mást nem mond).",
     "Menj a legmagasabban fekvő, a veszélyforrással ellentétes oldalon lévő helyiségbe – a nehéz gázok az alsóbb helyiségekben gyűlnek össze.",
     "Csukd be az összes ajtót, ablakot, redőnyt és rolót; kapcsold ki a ventilátort, a szellőzést és a klímát; ragaszd le az ajtókat és ablakokat széles ragasztószalaggal.",
     "Ne dohányozz, kapcsold ki a gáztűzhelyet és a nyílt lángú készülékeket; ha éghető gáz is kiszabadulhat, kapcsold le az áramot (robbanásveszély), és maradj távol az ablakoktól.",
     "Kapcsold be a rádiót vagy a tévét; feleslegesen ne telefonálj, és ne hívd a hatóságokat vagy az üzemet.",
     "Ha ki kell menned, takard el az arcod és a szád nedves törülközővel, vagy használj filteres védőmaszkot.",
     "Csak akkor szellőztess, ha a sziréna, a rádió vagy a tévé veszélytelennek nyilvánította a helyzetet; utána a cipőt bent ne hordd, nedvesen takaríts, és ne edd meg a kertben termett zöldséget, gyümölcsöt."
    ],
    "source": "hu-okf-vegyi"
   },
   {
    "type": "war_airraid",
    "steps": [
     "Ne bámészkodj: a legrövidebb úton menj haza vagy a legközelebbi fedett helyre.",
     "Csukd be az ajtókat és ablakokat, kapcsold ki a szellőztető berendezéseket.",
     "A háziállatokat zárd fedett helyre.",
     "Ha vezetsz, menj a legközelebbi településre, parkolj le biztonságosan úgy, hogy ne akadályozd a forgalmat és a mentőket, majd menj fedett helyre.",
     "Kapcsold be a rádiót vagy a tévét (Kossuth Rádió, MTV-1), és kövesd a polgári védelem, a rendőrség és a tűzoltóság hangosbemondós közleményeit.",
     "Készülj fel az esetleges kitelepítésre; ne terheld felesleges kérdésekkel és hívásokkal a mentőszervezeteket."
    ],
    "source": "hu-kemkvi-mittegyunk"
   },
   {
    "type": "cold",
    "steps": [
     "A vihar előtt készíts elő hólapátot, sót, homokot, elemes rádiót, zseblámpát és tartalékelemet; töltsd fel a telefonod, és szerezz be tartalékakkut.",
     "Halmozz fel vizet, tartós élelmiszert, gyógyszert és tüzelőt; legyen hordozható tartalék fűtő- és főzőeszközöd; víztelenítsd a kültéri csapokat, hogy ne fagyjanak szét a csövek.",
     "A vihar alatt maradj otthon, engedd le a redőnyt, egyél magas energiatartalmú ételt, igyál meleg italt, és kerüld a megerőltető vagy kockázatos tevékenységet.",
     "Ha ki kell menned, öltözz rétegesen, ne hagyj szabad bőrfelületet, és viselj sapkát.",
     "Kémény nélküli PB-gázos hősugárzót ne működtess folyamatosan zárt helyiségben – legalább 1–1,5 óránként szellőztess.",
     "Csak akkor utazz, ha elkerülhetetlen, és soha ne egyedül; ha elakadsz az autóval, a motort járathatod a fűtésért, de 10–15 percenként szellőztess (kipufogógáz-veszély).",
     "Soha ne igyál alkoholt, hogy felmelegedj."
    ],
    "source": "hu-okf-hideg"
   },
   {
    "type": "blackout",
    "steps": [
     "Legyen kéznél gyufa, öngyújtó, gyertya, működő zseblámpa tartalékelemmel és egyéb vészvilágítás.",
     "Tarts működőképes elemes rádiót tartalékelemekkel, és azon kövesd a híreket.",
     "Húzd ki az elektromos készülékeket, hogy ne károsodjanak, amikor visszajön az áram.",
     "Ha árammal fűtesz, szerezz be másik, hordozható fűtő- vagy főzőeszközt, és tarts tüzelőt.",
     "Készíts elő meleg ruhát, valamint néhány napra elegendő ivóvizet, élelmet, gyógyszert és kötszert."
    ],
    "source": "hu-okf-aramszunet"
   },
   {
    "type": "heat",
    "steps": [
     "Igyál folyamatosan, főleg vizet; kerüld az alkoholt, a magas koffeintartalmú és a cukros italokat.",
     "11 és 15 óra között maradj hűvös helyen, és kerüld a megerőltetést.",
     "Napközben árnyékold, éjszaka szellőztesd ki a lakást.",
     "Viselj könnyű, világos ruhát, kalapot és UV-szűrős napszemüveget.",
     "Érdeklődj az egyedül élő idős rokonaid és szomszédaid felől – egy telefonhívás életet menthet.",
     "Gyereket vagy háziállatot soha ne hagyj a parkoló autóban; ha ilyet látsz, azonnal hívd a 112-t.",
     "A rendszeresen szedett gyógyszert a betegtájékoztatóban megadott hőmérsékleten tárold; szabadtéri tüzet ne gyújts."
    ],
    "source": "hu-okf-hoseg-hir"
   },
   {
    "type": "pandemic",
    "steps": [
     "Hiteles forrásból tájékozódj, és kövesd a hivatalos közleményeket, utasításokat.",
     "Ha magadon vagy másokon tüneteket észlelsz, azonnal jelezd a háziorvosnak vagy a kijelölt hivatalos személynek.",
     "Kerüld a zsúfolt helyeket és a lehetséges fertőzési gócokat; ha kimész, az előírás szerint takard el az orrod és a szád kendővel vagy maszkkal.",
     "Használj saját evőeszközt, tányért és textíliát; kerüld azokat a tárgyakat, amelyekhez beteg nyúlhatott.",
     "Ügyelj a fokozott higiéniára: moss gyakran kezet, tartsd tisztán a lakást, szellőztess rendszeresen; ha valaki beteg a családban, használj fertőtlenítőszert.",
     "Kerüld a szennyezett vizet és élelmiszert; szükség esetén főzéshez is csak palackozott vizet és vákuumcsomagolt élelmiszert használj."
    ],
    "source": "hu-okf-jarvany"
   },
   {
    "type": "fire",
    "steps": [
     "Szerelj füstérzékelőt minden szintre, valamint a hálószobákba és a nyílt lángú készülékek helyiségeibe; havonta teszteld, az elemet évente cseréld, a készüléket 10 év után cseréld újra.",
     "Ahol gáz-, fa- vagy széntüzelésű kazán, készülék működik, ott legyen CO-érzékelő.",
     "Tervezzétek meg és gyakoroljátok a menekülési útvonalat a családdal; minden ablak és biztonsági rács legyen belülről nyitható.",
     "Tűzben haladj alacsonyan (guggolva, négykézláb) – a füst és a hő felfelé száll.",
     "Mielőtt kinyitsz egy ajtót, a kézfejeddel ellenőrizd a hőmérsékletét, soha ne az ujjaddal vagy a tenyereddel.",
     "Ha meggyullad a ruhád, vedd le és taposd el, vagy feküdj le és hengeredj.",
     "Csukott ajtónál aludj; tarts otthon 6 vagy 12 kg-os ABC porral oltót, és tanítsd meg a családnak a használatát."
    ],
    "source": "hu-okf-tuz"
   }
  ],
  "tips": [
   {
    "title": "Így ismered fel a próbát",
    "text": "Valós szirénás riasztásban soha nem hangzik el a „Figyelem, ez próba” szöveg – a próbákban mindig.",
    "tag": "info",
    "source": "hu-okf-molari"
   },
   {
    "title": "A sziréna csak figyelmeztet",
    "text": "A sziréna azt jelzi, hogy veszély van, de azt nem, hogy mi. Kapcsold be a rádiót vagy a tévét (Kossuth Rádió), ott hallod a teendőket.",
    "tag": "info",
    "source": "hu-okf-vegyi"
   },
   {
    "title": "Vegyi balesetnél felfelé menj",
    "text": "A mérgező gázok nehezebbek a levegőnél: vegyi balesetnél a legmagasabb, a veszélyforrással ellentétes oldalon lévő helyiségbe menj, ne a pincébe.",
    "tag": "otthon",
    "source": "hu-okf-vegyi"
   },
   {
    "title": "Legyen otthon széles ragasztószalag",
    "text": "Mérgező vagy radioaktív felhő esetén ezzel zárhatod le az ajtók és ablakok réseit elzárkózáskor.",
    "tag": "otthon",
    "source": "hu-okf-nuklearis"
   },
   {
    "title": "Névvel ellátott ruha, felcímkézett csomag",
    "text": "Írd a gyerek nevét és születési évét a ruhájára (vagy varrd bele), a menekülőcsomagra pedig a nevet és a címet.",
    "tag": "csalad",
    "source": "hu-okf-nuklearis"
   },
   {
    "title": "A veszélyhelyzeti csomag tartalma",
    "text": "Legfeljebb 20 kg, hátizsákban vagy válltáskában, hogy szabad maradjon a kezed. Legyen benne irat, készpénz, bankkártya, 2–3 napi élelem, 1 liter víz, gyógyszer (a gyógyszerallergiát is írd fel), takaró, rádió, a gyereknek pedig a kedvenc játéka.",
    "tag": "penz",
    "source": "hu-okf-arviz"
   },
   {
    "title": "Rövid távollétre kevés is elég",
    "text": "Ha csak rövid időre (3–6 órára) kell elhagynod az otthonod, elég vizet (nyáron fejenként 1 litert) és a következő órákban esedékes gyógyszereket vinned.",
    "tag": "viz",
    "source": "hu-okf-kitelepites"
   },
   {
    "title": "20 centi víz is ledönthet",
    "text": "Már 20 cm mély mozgó víz ledönthet a lábadról, 30–40 cm pedig leállíthatja az autódat – ne próbálj átkelni.",
    "tag": "otthon",
    "source": "hu-okf-arviz"
   },
   {
    "title": "Árvíz után óvatosan a kútvízzel",
    "text": "Árvíz után a kútvíz sokáig nem iható, csak fertőtlenítés és bevizsgálás után használd. Az elhullott állatokat és a víz hozta hulladékot ne ásd el – azokat szakemberek gyűjtik össze.",
    "tag": "viz",
    "source": "hu-okf-arviz"
   },
   {
    "title": "Fagy előtt víztelenítsd a kültéri csapokat",
    "text": "Így nem fagynak szét a csövek, és nem önti el a víz a házat.",
    "tag": "otthon",
    "source": "hu-okf-hideg"
   },
   {
    "title": "Téli csomag az autóba",
    "text": "Legyen az autóban meleg takaró, zseblámpa, meleg ital és legalább egynapi élelem, és készülj fel arra, hogy napokra elakadhatsz. Ha a fűtésért járatod a motort, 10–15 percenként szellőztess.",
    "tag": "csalad",
    "source": "hu-okf-hideg"
   },
   {
    "title": "Milyen vastag jég bírja el?",
    "text": "Kb. 8 cm egy felnőttet, kb. 12 cm egy csoportot, kb. 18 cm a szánkókat is; a folyók jege soha nem biztonságos. A jeges vízben senki nem éli túl kb. 15 percnél tovább.",
    "tag": "csalad",
    "source": "hu-okf-hideg"
   },
   {
    "title": "Hőségben is kell CO-érzékelő",
    "text": "Ahol nyílt égésterű vízmelegítő működik, hőségben kötelező a CO-érzékelő: a meleg légdugót okozhat a kéményben, és felgyűlhet a szén-monoxid.",
    "tag": "otthon",
    "source": "hu-okf-hoseg-hir"
   },
   {
    "title": "Szívgyógyszer mellett igyál többet",
    "text": "Aki szív- vagy vízhajtó gyógyszert szed, hőségben kb. egy literrel igyon többet a szokásosnál.",
    "tag": "egeszseg",
    "source": "hu-kemkvi-mittegyunk"
   },
   {
    "title": "Töltsd le a VÉSZ alkalmazást",
    "text": "A katasztrófavédelem ingyenes VÉSZ appja friss hőségriasztási információkat ad. Ha nem tudsz beszélni, a 112 SMS-ben és a „112SOShallássérülteknek” alkalmazással is elérhető.",
    "tag": "info",
    "source": "hu-okf-hoseg-hir"
   }
  ]
 },
 "AT": {
  "alerts": {
   "text": "WARNUNG: 3 perces egyenletes hang – közeledő veszély, kapcsold be az ORF rádiót vagy tévét. ALARM: 1 perces fel-le hullámzó hang – veszély, menj védett helyiségbe, és kövesd a rádió, a tévé, az internet utasításait. ENTWARNUNG: 1 perces egyenletes hang – a veszély elmúlt. Szirénapróba minden szombaton 12:00-kor (Bécs kivételével); a tűzoltók riasztójele (3 × 15 mp) és az október első szombatján 12–13 óra között tartott éves próbariasztás nem figyelmeztetés. Az AT-Alert mobilos riasztás regisztráció és app nélkül működik, és kiegészíti (nem helyettesíti) a szirénákat – nézd meg a telefonod beállításait.",
   "source": "at-oegv-warnung"
  },
  "guides": [
   {
    "type": "blackout",
    "steps": [
     "Úgy tervezd a készletet, mint egy kéthetes otthoni kempingezést: 10–14 napra elegendő víz és élelem mindenkinek, a speciális étrendet és az állateledelt is beleértve.",
     "Beszéljétek meg, hol találkozik a család, ha nem működik a telefon, ki kiért megy, és ki gondoskodik az ellátásra szoruló rokonokról; vond be a szomszédokat és a barátokat is.",
     "Legyen kéznél világítás: gyertya, öngyújtó, zseblámpa tartalékelemmel vagy tekerős lámpa – az elemes, tekerős lámpa biztonságosabb a nyílt lángnál.",
     "Tarts tekerős vagy elemes rádiót (vagy használd az autórádiót); az ORF vészhelyzeti adása éjjel-nappal tájékoztat, a rendőrőrsökön pedig mindig lesz ügyelet.",
     "Tarts otthon kis címletű készpénzt, biztonságos helyen.",
     "Ne hagyd szinte üresre fogyni az üzemanyagot, mert a benzinkutak bezárhatnak.",
     "Figyelj a generátorok, fűtőtestek és kályhák szén-monoxidjára – észrevétlenül hat."
    ],
    "source": "at-oegv-blackout"
   },
   {
    "type": "nuclear",
    "title": "Sugárzás",
    "steps": [
     "Mielőtt odaér a szennyezett levegő: hozd be a háziállatokat, a játékokat és a kint száradó ruhát; ne gyűjts tovább esővizet; készítsd elő a kálium-jodidot, de még ne vedd be.",
     "Készülj fel arra, hogy bent kell maradnod (általában legfeljebb két napig).",
     "Közben: csukd be az ablakokat és ajtókat, kapcsold ki a klímát és a szellőzést; maradj az épület belsejében, minél távolabb az ablakoktól.",
     "Kerüld a szabadban tartózkodást, vagy legyen minél rövidebb; belépés előtt vedd le a cipőt és a felsőruhát, majd moss kezet és zuhanyozz le alaposan.",
     "Kálium-jodidot csak hivatalos felszólításra, a korcsoportodra vonatkozó útmutatás szerint vegyél be; 40 év felett nem javasolt.",
     "Ne szedd le és ne edd meg a friss kerti zöldséget, gyümölcsöt; a felhő elvonulása után nedvesen töröld fel a padlót és a bútorokat, a szőnyeget porszívózd (ne porold), és ne kavard fel a port."
    ],
    "source": "at-oegv-radiologisch"
   },
   {
    "type": "nuclear",
    "title": "Mérgező gázfelhő",
    "steps": [
     "Csukd be az összes ablakot és ajtót (a bejárati ajtót is), kapcsold ki a szellőzést, engedd le a redőnyt, rolót, és ragaszd le a réseket.",
     "Menj szilárd falú helyiségbe, lehetőleg magasabban, a veszélyforrással ellentétes oldalon – a nehéz gázok a pincében gyűlnek össze.",
     "Maradj bent, távol az ablakoktól; a szellőzést akkor se kapcsold be, ha szűrős.",
     "Ha ki kell menned, tarts nedves kendőt a szádra és az orrodra, vagy használj menekülő szűrőmaszkot.",
     "Ne telefonálj feleslegesen, és ne a segélyhívó számokon kérj információt; kövesd a rádiót, a tévét és a hangosbemondót.",
     "A veszély elmúltával szellőztesd ki az összes helyiséget; a cipőt a lakás előtt vedd le, nedvesen takaríts, és ne edd meg a kerti terményt."
    ],
    "source": "at-oegv-giftgas"
   },
   {
    "type": "flood",
    "steps": [
     "Vidd a magasabb helyiségekbe a fontos iratokat (biztosítási kötvény, útlevél), az értékeket, az élelmiszert és a ruhaneműt.",
     "Torlaszold el az ajtókat és ablakokat azon a részen, amelyet elönthet a víz.",
     "Kapcsold le az áramot és a fűtést az elárasztással fenyegetett részen.",
     "Rögzítsd az olajtartályt, és biztosítsd a gáz- és telefonvezetékeket.",
     "Zárd le és terheld le a lefolyónyílásokat.",
     "Ne igyál csapvizet vagy saját kútból származó vizet – szennyezett lehet."
    ],
    "source": "at-oegv-hochwasser"
   },
   {
    "type": "cold",
    "steps": [
     "Előtte: csukj be minden ajtót, ablakot és nyílást; az autót tedd garázsba, a kinti tárgyakat hozd be vagy rögzítsd.",
     "Kerüld a szabadtéri programokat, főleg a hegyekben; hagyd el a vízpartot, a fasorokat, a parkokat és az erdőt.",
     "Készülj fel az esetleges áramszünetre.",
     "Közben: maradj bent; ha kár keletkezett, hívd a tűzoltókat vagy a rendőrséget a segélyhívón.",
     "Utána: kapcsold be a rádiót; maradj legalább 10 méterre a leszakadt vezetékektől, és kerüld a felesleges autózást.",
     "Nagyon nagy havazás után ellenőrizd az épületek, különösen a lapostetők teherbírását."
    ],
    "source": "at-oegv-unwetter"
   }
  ],
  "tips": [
   {
    "title": "Kéthetes kemping otthon",
    "text": "Úgy tervezd a felkészülést, mint egy „kéthetes kempingezést a saját négy fal között”.",
    "tag": "csalad",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Készpénz kis címletekben",
    "text": "Tarts otthon nagyjából egy heti bevásárlás kétszeresét vagy fejenként legfeljebb 100 eurót, kis címletekben, biztonságos helyen.",
    "tag": "penz",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Ne járj üres tankkal",
    "text": "Ne hagyd szinte üresre fogyni az üzemanyagot – áramszünetben a benzinkutak bezárhatnak.",
    "tag": "energia",
    "source": "at-oegv-blackout"
   },
   {
    "title": "A fagyasztó nem fő éléskamra",
    "text": "Ne a fagyasztó legyen a fő élelmiszer-tartalékod, mert áramszünetben nem működik.",
    "tag": "etel",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Tartós készlet: évente nézd át",
    "text": "A hosszú eltarthatóságú (pl. 10 éves) katasztrófakészletet hűvös, száraz, kártevőktől védett helyen tárold, és évente ellenőrizd – vagy egyszerűen fogyaszd és pótold a szokásos készleted.",
    "tag": "etel",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Lámpa gyertya helyett",
    "text": "Az elemes vagy tekerős lámpa biztonságosabb a gyertyánál, mert nincs tűzveszély.",
    "tag": "energia",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Generátort csak szakszerűen",
    "text": "Az áramfejlesztőt szakembernek kell bekötnie a ház hálózatába, és kell hozzá üzemanyag-tartalék és megfelelő elhelyezés.",
    "tag": "energia",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Kérdezd meg az önkormányzatot",
    "text": "Érdeklődj, hogy áramszünetben a községháza vagy a tűzoltószertár lesz-e a gyűjtőpont, és működik-e tovább a víz, a csatorna és a busz.",
    "tag": "info",
    "source": "at-oegv-blackout"
   },
   {
    "title": "Tudd, hol a főkapcsoló",
    "text": "Tudd, hol van az áram főkapcsolója, és hol zárhatod el a gázt és a vizet.",
    "tag": "otthon",
    "source": "at-oegv-selbstschutz"
   },
   {
    "title": "Hidegen is ehető ételek",
    "text": "Válassz hidegen is ehető ételeket (áramszünet!), és tarts palackozott vizet, gyümölcslét, mert katasztrófában a csapvíz szennyeződhet.",
    "tag": "etel",
    "source": "at-oegv-selbstschutz"
   },
   {
    "title": "Szombat déli próba nem riasztás",
    "text": "A szombat 12:00-kor szóló szirénapróba nem figyelmeztetés (Bécsben nincs ilyen próba).",
    "tag": "info",
    "source": "at-oegv-warnung"
   },
   {
    "title": "AT-Alert regisztráció nélkül",
    "text": "Az AT-Alerthez nem kell regisztráció vagy alkalmazás – csak ellenőrizd a telefon beállításaiban, hogy fogadja-e.",
    "tag": "info",
    "source": "at-oegv-warnung"
   },
   {
    "title": "Jódtabletta: kinek és mikor",
    "text": "A kálium-jodid tabletta a 18 év alattiaknak és a várandós vagy szoptató nőknek ingyenes a gyógyszertárban. Órákkal a radioaktív levegő elvonulása után bevéve gyakorlatilag hatástalan, 40 év felett pedig nem javasolt.",
    "tag": "egeszseg",
    "source": "at-sozmin-kaliumiodid"
   },
   {
    "title": "Gázfelhőnél maradj bent",
    "text": "A mérgező gázfelhő elől menekülni veszélyesebb lehet, mint egy zárt szobában maradni.",
    "tag": "otthon",
    "source": "at-oegv-giftgas"
   },
   {
    "title": "10 méter a leszakadt vezetéktől",
    "text": "Vihar után maradj legalább 10 méterre a leszakadt villanyvezetékektől.",
    "tag": "otthon",
    "source": "at-oegv-unwetter"
   }
  ]
 },
 "DE": {
  "alerts": {
   "text": "Szirénás FIGYELMEZTETÉS: 1 perces fel-le hullámzó hang – veszély van, tájékozódj. ENTWARNUNG (a veszély elmúlt): 1 perces egyenletes hang. A legtöbb információ riasztó alkalmazásokon (pl. NINA) és a rádión érkezik, különleges helyzetben szirénán, mobilos riasztáson („Handy-Warnung”), hangosbemondós autón és digitális kijelzőkön is. Áram- vagy mobilhálózat-kiesésnél sok csatorna leáll – az elemes, tekerős vagy autórádió ilyenkor is működik.",
   "source": "de-bbk-ratgeber"
  },
  "guides": [
   {
    "type": "blackout",
    "steps": [
     "Tarts hidegen is ehető, tartós élelmiszert; kis adagokat kempingfőzőn főzz – grillezni csak a szabadban szabad, bent soha (fulladásveszély).",
     "Tartsd feltöltve a laptop és a telefon akkuját; a powerbank vagy a napelemes töltő is segít.",
     "Legyen kéznél elemes vagy tekerős rádió, hogy kövesd a hivatalos közleményeket.",
     "Legyen nálad készpénz – az ATM-ek nem fognak működni.",
     "Ha leáll a fűtés, egyetlen szobát használj, és tartsd csukva az ajtaját; vegyél fel meleg ruhát, használj takarót.",
     "Ettől függetlenül rendszeresen szellőztess, különösen gyertyahasználatkor; szerelj fel CO-érzékelőt."
    ],
    "source": "de-bbk-stromausfall"
   },
   {
    "type": "war_airraid",
    "steps": [
     "Menj ablaktalan pincehelyiségbe – ez nyújtja a legtöbb védelmet.",
     "Pince híján használj belső helyiséget, például lépcsőházat, fürdőszobát vagy folyosót; kerüld a legfelső emeletet és a padlást.",
     "Alkalmazd a „két fal” szabályt: legyen két fal közted és a külvilág között.",
     "Középületek – iskola, múzeum, mélygarázs, metróállomás – is menedéket adnak; maradj távol a nyitott bejáratoktól, ablakoktól és ajtóktól.",
     "Ne használd a liftet."
    ],
    "source": "de-bbk-ratgeber"
   },
   {
    "type": "nuclear",
    "steps": [
     "Radioaktív kibocsátásnál menj minél mélyebbre, távol az ablakoktól és üvegfelületektől – belső helyiségbe, ideális esetben pincébe, mélygarázsba vagy metróállomásra; a vastag falak és a föld növelik a védelmet.",
     "Ha kint szabadult ki gáz vagy gőz: menj épületbe, csukd be az ablakokat és ajtókat, menj felsőbb emeletre (a legtöbb gáz nehezebb a levegőnél), zárd le a nyílászárókat, és kapcsold ki a szellőzést.",
     "Ha az épületen belül szabadult ki gáz vagy folyadék: hagyd el az épületet.",
     "Ha nincs a közelben épület, húzódj be az autóba, kikapcsolt szellőzéssel és klímával.",
     "Figyelj a riasztásokra, és kövesd a hivatalos ajánlásokat."
    ],
    "source": "de-bbk-ratgeber"
   },
   {
    "type": "flood",
    "steps": [
     "Mielőtt emelkedik a víz, ellenőrizd a pincében a visszacsapó szelepeket; árvíz alatt ne tartózkodj a pincében.",
     "Zárd le az ablakokat, ajtókat és lefolyónyílásokat.",
     "Kapcsold ki az elektromos készülékeket és a fűtést az elárasztással fenyegetett helyiségekben; szükség esetén áramtalaníts teljesen (biztosítékok kivétele) – gondolj az áramütés veszélyére.",
     "Időben állj ki az autóval a veszélyeztetett garázsból, parkolóból; elárasztott úton soha ne hajts át.",
     "A gyerekeket még a veszély előtt vidd ki az árvízzel fenyegetett területről; maradj távol a folyóparttól (alámosás, beomlás).",
     "Kövesd a mentőszolgálatok utasításait és lezárásait; segíts másoknak, de ne sodord veszélybe magad."
    ],
    "source": "de-bbk-hochwasser"
   },
   {
    "type": "heat",
    "steps": [
     "Igyál sokat – naponta legalább 1,5–2 litert, inkább hűvöset vagy langyosat, mint jéghideget; kerüld az alkoholt és a koffeint.",
     "Kora reggel szellőztess, napközben tartsd csukva és elsötétítve az ablakokat.",
     "Viselj bő, könnyű, világos ruhát, kint kalapot; használj naptejet, és kerüld a déli napot.",
     "Hűtsd magad hideg lábfürdővel, permetezőflakonnal, vagy folyass hideg vizet a csuklódra és alkarodra; langyos vízzel zuhanyozz.",
     "A bevásárlást és a sportot időzítsd kora reggelre vagy késő estére; embert vagy állatot soha ne hagyj a parkoló autóban.",
     "Nézz rá az idősekre, a krónikus betegekre és az egyedül élőkre; ha valaki rosszul van, vidd árnyékba, lazítsd meg a ruháját, adj neki inni, és hívd a 112-t."
    ],
    "source": "de-bbk-hitze"
   },
   {
    "type": "fire",
    "steps": [
     "Csak akkor olts, ha ezzel nem sodrod veszélybe magad.",
     "Ha nem tudod eloltani, azonnal hagyd el a helyiséget, lehetőleg csukd be az ablakokat, és magad mögött az ajtót.",
     "Figyelmeztesd és segítsd a háztartás tagjait.",
     "Hagyd el az épületet – soha ne menekülj füsttel teli helyiségen vagy lépcsőházon át; ha füstös a menekülőút, hangosan hívd fel magadra a figyelmet az ablakban.",
     "Hívd a tűzoltókat a 112-n, és figyelmeztesd a szomszédokat."
    ],
    "source": "de-bbk-ratgeber"
   },
   {
    "type": "cold",
    "steps": [
     "A kiesést meleg ruhával, takarókkal és hálózsákkal hidald át.",
     "Tartsd csukva az ablakokat és ajtókat, hogy ne hűljön ki a lakás – de rendszeresen szellőztess röviden, teljesen kitárt ablakkal.",
     "Csak beltéri használatra engedélyezett fűtőeszközt használj (beltérre engedélyezett gázhősugárzó, etanolkandalló, petróleumkályha).",
     "Szerelj fel bevizsgált CO-érzékelőt – a kevés oxigénnel történő égésből származó szén-monoxid-mérgezés életveszélyes."
    ],
    "source": "de-bbk-ratgeber"
   },
   {
    "type": "cyber",
    "steps": [
     "Tarts nyomtatott vagy kézzel írt listát a fontos telefonszámokról.",
     "Legyen feltöltött powerbankod.",
     "Előre tölts le offline térképeket, hogy internet nélkül is tájékozódni tudj.",
     "Ha a mobilhálózat és az internet leáll, a rádióra támaszkodj – az autós, tekerős vagy elemes rádió hálózati áram nélkül is működik.",
     "Ha a 110 vagy a 112 nem működik, vészhelyzetben menj a legközelebbi rendőrőrsre vagy kórházba; ismerd a helyi gyűjtőpontokat (városháza, vészhelyzeti találkozópontok)."
    ],
    "source": "de-bbk-ratgeber"
   }
  ],
  "tips": [
   {
    "title": "Lépésről lépésre a 10 napig",
    "text": "Építsd fel fokozatosan a készletet: már 3 nap is sokat segít, a cél 10 nap.",
    "tag": "etel",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Ennyi víz kell valójában",
    "text": "A fejenként napi 2 literből 0,5 liter főzésre kell, és a háziállatok vizéről se feledkezz meg. Három embernek 3 napra 18 liter, 10 napra 60 liter kell.",
    "tag": "viz",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Rövid főzési idejű ételek",
    "text": "Válassz gyorsan elkészülő ételeket – így tovább kitart a kempingfőző vagy a grill üzemanyaga.",
    "tag": "etel",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Teamécses melegítő bentre",
    "text": "Bent teamécses melegítővel vagy fonduekészlettel melegítheted az ételt; a gázpatronos kempingfőzőt és a grillt csak a szabadban használd.",
    "tag": "energia",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Digitális másolat az iratokról",
    "text": "Készíts digitális másolatot a fontos iratokról, és tárold felhőben, hordozható meghajtón vagy pendrive-on; az eredetiket tűz- vagy vízálló dobozban tartsd.",
    "tag": "penz",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Éjjel is érjen el a riasztás",
    "text": "Állítsd be a telefonod úgy, hogy éjszaka is fogadja a riasztásokat, és add tovább a hivatalos figyelmeztetéseket a szomszédoknak, barátoknak, családnak.",
    "tag": "info",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Offline térkép a telefonra",
    "text": "Töltsd le előre az offline térképeket – jól jönnek, ha nincs internet.",
    "tag": "info",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Vészhelyzeti adatlap a zárképernyőn",
    "text": "Sok okostelefonon beállíthatsz digitális vészhelyzeti azonosítót, amely a zárolt képernyőről is megnyitható.",
    "tag": "egeszseg",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Szükségvécé zsákból",
    "text": "Tarts nagy, erős szemeteszsákokat, amelyeket a vécébe akaszthatsz, és egy kempingvécét arra az esetre, ha nem lehet lehúzni a vécét.",
    "tag": "egeszseg",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Égő zsírra soha ne vizet",
    "text": "Égő sütőzsírt, viaszt vagy folyékony üzemanyagot soha ne olts vízzel – használj F osztályú tűzoltó készüléket vagy sprayt, a víztől zsírrobbanás lesz.",
    "tag": "otthon",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Árvízkor ne menj a pincébe",
    "text": "Ha elönti a víz, belülről már nem tudod kinyitni az ajtót, és halálos áramütés is érhet.",
    "tag": "otthon",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "A „két fal” szabály",
    "text": "Robbanás elleni jó védelemhez legyen két fal közted és a külvilág között.",
    "tag": "otthon",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Adagold a híreket",
    "text": "Jelölj ki napi fix időpontokat a hírfogyasztásra, így könnyebb kezelni a szorongást.",
    "tag": "info",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "Legalább 10 napi gyógyszer",
    "text": "Ha rendszeresen szedsz gyógyszert, legyen otthon legalább 10 napi adag.",
    "tag": "egeszseg",
    "source": "de-bbk-ratgeber"
   },
   {
    "title": "NINA app – de ne csak az",
    "text": "Telepítsd a NINA riasztó alkalmazást, de ne feledd: áram- vagy mobilhálózat-kiesésnél a riasztó appok nem működnek.",
    "tag": "info",
    "source": "de-bbk-ratgeber"
   }
  ]
 },
 "CZ": {
  "alerts": {
   "text": "„Általános riasztás” (Všeobecná výstraha): 140 másodperces hullámzó szirénahang, amely kb. háromperces szünetekkel legfeljebb háromszor ismétlődhet. Ilyenkor azonnal menj a legközelebbi szilárd épületbe, csukd be és zárd le a nyílászárókat, kapcsold ki a szellőzést és a klímát, és kövesd a rádiót, tévét; közvetlen veszélynél e jelzés után rendelik el a kitelepítést. Szirénapróba általában minden hónap első szerdáján délben (folyamatos hang, az elektronikus szirénák előre bemondják) – ez nem riasztás. Riasztás érkezhet tömeges SMS-ben, önkormányzati bemondással és „beszélő” elektronikus szirénán is; a CZ-Alert mobilos riasztás bevezetése folyamatban van, 2026 végétől lesz elérhető.",
   "source": "cz-hzs-varovani"
  },
  "guides": [
   {
    "type": "blackout",
    "steps": [
     "Nézd meg a többi helyiséget, a biztosítékokat és hogy a szomszédoknál van-e fény; az áramszolgáltató honlapján ellenőrizd a tervezett kikapcsolásokat.",
     "Húzz ki minden készüléket – legegyszerűbb a főkapcsolót lekapcsolni –, hogy ne károsodjanak az áram visszatérésekor.",
     "Tartsd csukva a hűtőt és a fagyasztót; néhány fagyasztott terméket tegyél át a hűtőbe, hogy hideg maradjon; a kiolvadt ételt gyorsan edd meg, vagy főzd meg, mielőtt újrafagyasztod.",
     "Maradj melegen: csak egy szobát fűts, csukd be a nem használt szobák ajtaját, takard le az ablakokat függönnyel vagy takaróval, tegyél takarót, szőnyeget a padlóra, és mindenki ugyanabban a szobában aludjon.",
     "Csak akkor telefonálj, ha feltétlenül szükséges, hogy kíméld az akkut és ne terheld a hálózatot; figyelj az önkormányzati tartalék áramfejlesztőkre, ahol tölthetsz.",
     "Csak akkor húzd le a vécét, ha muszáj (a tartály nem töltődik újra); szükségvécé: szemeteszsák a csészébe papírral, újságpapírral vagy macskaalommal, majd duplán zsákold be.",
     "Ha visszajött az áram, ellenőrizd a készülékeket, nézd meg, hogy ki van-e kapcsolva a tűzhely, és ellenőrizd a hűtőben, fagyasztóban lévő ételt."
    ],
    "source": "cz-72h-power"
   },
   {
    "type": "nuclear",
    "steps": [
     "Az általános riasztás szirénájára gyorsan menj a legközelebbi szilárd épületbe – a buszmegálló vagy az autó nem megfelelő.",
     "Csukj be minden ajtót és ablakot, zárd le a réseket, kapcsold ki a szellőzést és a klímát.",
     "Vegyi szivárgásnál a forrással ellentétes oldalon lévő, felső emeleti helyiséget válaszd – a legtöbb veszélyes vegyi anyag nehezebb a levegőnél.",
     "Sugárbalesetnél zárt tégla- vagy betonhelyiséget, például pincét használj.",
     "Készíts rögtönzött védelmet a légutaknak és a testfelületnek arra az esetre, ha ki kell telepíteni.",
     "Kövesd a tévét, rádiót (áramszünetben elemes rádión), ne mobilozz feleslegesen, és várd az utasításokat."
    ],
    "source": "cz-72h-sheltering"
   },
   {
    "type": "evacuation",
    "steps": [
     "Ha elrendelték a kitelepítést, kövesd a mentőszolgálatok utasításait.",
     "Oltsd el a tüzet a kályhában, fűtőtestben, csukd be az ablakokat és ajtókat, kapcsold ki a szellőzést és a klímát, zárd el a vizet és a gázt.",
     "Vidd a menekülőcsomagot, rajta a tulajdonos nevével és telefonszámával.",
     "A gyerekek és a kiszolgáltatott emberek zsebébe tegyél egy cédulát névvel, címmel és elérhetőséggel; szólj a szomszédoknak, és ajánlj segítséget.",
     "Zárd be a lakást; ha rokonokhoz, barátokhoz mész, hagyd meg a címüket, hogy a mentők megtaláljanak.",
     "Menj a kijelölt gyülekezőhelyre; szükség esetén használj légzés- és testvédelmet; ha autóval mész, számolj az időjárással és az üzemanyaggal."
    ],
    "source": "cz-72h-evacuation"
   },
   {
    "type": "flood",
    "steps": [
     "Időben készítsd fel az autót a kitelepítésre, vagy vidd biztonságos helyre; a háziállatokat és a jószágot is helyezd biztonságba.",
     "Készíts elő homokzsákokat és egyéb védőanyagokat.",
     "Zárd el a vizet, a gázt és az áramot; oltsd el a nyílt tüzet a fűtőberendezésekben.",
     "Készíts menekülőcsomagot minden családtagnak, és tájékozódj, hogyan és hová telepítenének ki.",
     "Vidd a vagyontárgyakat a felsőbb szintekre; zárd le a csatorna- és lefolyónyílásokat a földszinten és a pincében.",
     "Távolítsd el vagy rögzítsd a könnyen elsodorható tárgyakat, és a veszélyes anyagokat tartsd a víztől távol.",
     "Kövesd a médiát, az önkormányzat és a mentők utasításait; távozáskor biztosítsd az ajtókat és ablakokat."
    ],
    "source": "cz-hzs-povodne"
   },
   {
    "type": "heat",
    "steps": [
     "Délelőtt 11 és este 6 között korlátozd a szabadban töltött időt.",
     "Napközben tartsd csukva az ablakokat, csak kora reggel vagy éjjel nyisd ki; húzd be a függönyt vagy a rolót.",
     "Szellőztetéskor tegyél nedves ruhát vagy tartalékvizes edényt az ablakok elé.",
     "Egyél kis adagokat gyakran, és kerüld a lakást felmelegítő főzést, ha nem tudsz szellőztetni.",
     "Viselj könnyű, szellős ruhát; hűtsd a nyakad vagy a csuklód vízzel vagy nedves törölközővel."
    ],
    "source": "cz-72h-power"
   },
   {
    "type": "cyber",
    "steps": [
     "Készíts elő elemes rádiót, teljesen feltöltött telefont, feltöltött powerbankot, tartalékelemeket és kábeleket.",
     "Írd fel papírra a szeretteid telefonszámát.",
     "A mobilt csak a legszükségesebb kommunikációra használd – különben akadályozhatod a mentőket; nagy kiterjedésű kiesésnél a mobilhálózat és az internet leáll, mert az adótornyok tartalékakkui korlátozottak.",
     "Hivatalos forrásokra támaszkodj (Cseh Rádió és Televízió, önkormányzati bemondás, mentőszolgálatok), és több megbízható forrásból ellenőrizd az információt.",
     "Csak olyan hírt ossz meg, amelynek a valóságában biztos vagy."
    ],
    "source": "cz-72h-info"
   }
  ],
  "tips": [
   {
    "title": "Fagyaszd le a víz egy részét",
    "text": "Fagyaszd le a vízkészlet egy részét műanyag palackban (ne töltsd tele): áramszünetben hidegen tartja a hűtőt, olvadás után pedig ivóvíz lesz.",
    "tag": "viz",
    "source": "cz-72h-water"
   },
   {
    "title": "Előre jelzett vízkimaradás",
    "text": "Ha előre tudsz a vízkimaradásról, töltsd meg a megfelelő edényeket, és tarts kannát a lajtos kocsiból vételezett vízhez.",
    "tag": "viz",
    "source": "cz-72h-water"
   },
   {
    "title": "Csak egyszer húzhatod le",
    "text": "Víz- vagy áramkimaradáskor a vécét csak egyszer lehet lehúzni. Szükségvécé: szemeteszsák a csészébe papírral, újságpapírral vagy macskaalommal, majd kösd be és zsákold be duplán.",
    "tag": "egeszseg",
    "source": "cz-72h-water"
   },
   {
    "title": "Távfűtésnél forrázhat a csap",
    "text": "Távfűtéses épületekben áramszünetben a melegvíz veszélyesen forró, akár forrásban lévő is lehet.",
    "tag": "otthon",
    "source": "cz-72h-water"
   },
   {
    "title": "A csapvíz iható marad",
    "text": "Az áramszünet nem rontja a csapvíz minőségét – nyugodtan ihatod.",
    "tag": "viz",
    "source": "cz-72h-power"
   },
   {
    "title": "Fagyasztóból a hűtőbe",
    "text": "Tegyél át néhány dolgot a fagyasztóból a hűtőbe, így az tovább hideg marad; figyelj a padlón az olvadékvízre.",
    "tag": "etel",
    "source": "cz-72h-power"
   },
   {
    "title": "Kuszkusz főzés nélkül",
    "text": "A kuszkusz és az instant zabkása hideg vízben áztatva is elkészül – nem kell főzni.",
    "tag": "etel",
    "source": "cz-72h-power"
   },
   {
    "title": "Hideg lakásban ne alkohol",
    "text": "Az alkohol csak rövid ideig melegít, és rontja az éberséget és az ítélőképességet.",
    "tag": "egeszseg",
    "source": "cz-72h-power"
   },
   {
    "title": "Legyen apró is otthon",
    "text": "Tarts otthon különböző címletű érméket és bankjegyeket – áramszünetben a kártya és az ATM nem működik.",
    "tag": "penz",
    "source": "cz-72h-power"
   },
   {
    "title": "Teli tank, feltöltött akku",
    "text": "A 72 órás felkészültséghez tartozik a teli üzemanyagtartály vagy a teljesen feltöltött villanyautó-akku is.",
    "tag": "energia",
    "source": "cz-72h-supplies"
   },
   {
    "title": "Találkozópont, ha nincs térerő",
    "text": "Beszéljétek meg előre, hol találkozik a család, ha külön vagytok és nem tudtok telefonálni; a fontos számokat és az iratok másolatát mentsd el a telefonodra.",
    "tag": "csalad",
    "source": "cz-72h-supplies"
   },
   {
    "title": "Rizs és tészta helyett",
    "text": "A rizs és a tészta sok vizet és energiát igényel – inkább főzés nélkül ehető ételeket válassz.",
    "tag": "etel",
    "source": "cz-72h-food"
   },
   {
    "title": "Ha nem tudod, hol vagy",
    "text": "Ha 112-hívásnál nem tudod a pontos helyed, mondd be a legközelebbi lámpaoszlop vagy vasúti átjáró számát; soha ne te tedd le elsőként.",
    "tag": "info",
    "source": "cz-72h-contacts"
   },
   {
    "title": "Kérdezd meg a szomszédot",
    "text": "Kérdezd meg a közelben élő időseket, kisgyerekes családokat, fogyatékossággal élőket, betegeket vagy a nyelvet nem beszélő külföldieket, kell-e segítség – ossz meg készletet, vagy segíts a szállításban.",
    "tag": "csalad",
    "source": "cz-72h-neighbours"
   },
   {
    "title": "Szélviharban le, ne fel",
    "text": "Szélviharban vagy tornádóban a pincében vagy a legalsó szint ablaktalan helyiségében (fürdő, gardrób, folyosó) keress menedéket, távol az ablakoktól; a faházból, lakókocsiból menj szilárd épületbe, és kerüld az erdőt.",
    "tag": "otthon",
    "source": "cz-72h-sheltering"
   }
  ]
 },
 "NL": {
  "alerts": {
   "text": "A szirénát minden hónap első hétfőjén 12:00-kor tesztelik; ha máskor szól, veszély van. Menj be azonnal, csukd be az ablakokat, ajtókat és egyéb nyílásokat (páraelszívó, szellőzők is), húzd ki a gépi szellőzést, és kövesd a regionális közszolgálati adót rádión, tévén vagy interneten. Autóban: parkolj le és menj be; ha ez nem lehetséges, maradj az autóban leállított motorral, zárt szellőzőkkel. Maradj bent, amíg nem mondják, hogy biztonságos. Támadás esetén légiriadó szól, és NL-Alert érkezik. Az NL-Alert éles hangjelzéssel érkező kormányzati mobilüzenet: ingyenes, névtelen, regisztráció nélküli, és túlterhelt hálózaton is működik; tesztüzenet június és december első hétfőjén 12:00 körül.",
   "source": "nl-dv-sirene"
  },
  "guides": [
   {
    "type": "blackout",
    "steps": [
     "Áramszünet miatt ne a 112-t hívd, mert az nem sürgős eset – hívd a 0800-9009 országos hibabejelentő számot.",
     "Ha még van mobilnet, nézd meg a rijksoverheid.nl-t vagy az önkormányzatod, biztonsági régiód honlapját.",
     "Hallgasd a regionális adót elemes rádión vagy az autórádión.",
     "Húzd ki a készülékeket, hogy ne károsodjanak, amikor visszajön az áram.",
     "Ha hideg van, tartsd csukva az ablakokat és ajtókat, és a legkisebb helyiségeket fűtsd és használd.",
     "Nézz rá a segítségre szoruló szomszédokra – például egy powerbankkal a telefonjuk töltéséhez."
    ],
    "source": "nl-dv-geen-stroom"
   },
   {
    "type": "war_airraid",
    "steps": [
     "Gondold végig előre, hol kereshetsz menedéket otthon, a munkahelyen és az iskolában.",
     "A legbiztonságosabb a föld alatt vagy szilárd épületek közepén (pincerekesz, mélygarázs); föld felett maradj távol az ablakoktól – vécé, lépcső alatti vagy pincei gardrób.",
     "Ha csak ablakos helyiség van, húzd be a függönyt, és bújj valami szilárd mögé (konyhaszekrény, kanapé, asztal alá).",
     "Kint: menj szilárd (köz)épületbe, közel a talajhoz; ha nem jutsz be, legjobb egy árok – a jármű nem véd eléggé.",
     "Feküdj a földre vagy húzd össze magad; a karoddal (és takaróval, kabáttal) védd a fejed és a létfontosságú szerveidet; tartsd nyitva a szád a nyomáskülönbség miatt.",
     "Segíts másoknak is menedéket találni – ne zárd be azokat az ajtókat, amelyeket mások is használhatnának."
    ],
    "source": "nl-dv-spanningen"
   },
   {
    "type": "nuclear",
    "steps": [
     "Maradj bent vagy menj be, és zárj be ajtót, ablakot és mindent, ami szellőzik – páraelszívót, szellőzőaknát, fali és vécészellőzőt.",
     "Hallgasd a regionális rádiót (vészhelyzeti adó), és nézd meg a Nederlandveilig.nl aktuális tanácsait.",
     "Jódtablettát csak akkor vegyél be, ha a kormány kiosztja, és megmondja a bevétel idejét.",
     "Kövesd az elzárkózásra vagy kitelepítésre vonatkozó utasításokat, és az élelmiszer-, illetve vízfogyasztási korlátozásokat."
    ],
    "source": "nl-rijk-kernongeval"
   },
   {
    "type": "flood",
    "steps": [
     "Az overstroomik.nl oldalon nézd meg, veszélyben van-e az otthonod, és hol vannak száraz pontok; jelölj ki egy száraz emeletet vagy padlást.",
     "Készíts elő száraz, meleg takarókat és törülközőket (kihűlésveszély), valamint elegendő ivóvizet, élelmet és gyógyszert.",
     "Tudd, hol van a gázfőcsap és az áram bekötése, hogy el tudd zárni.",
     "Nézd meg a menekülési utat arra az esetre, ha a bejárati ajtó használhatatlan – tetőablak vagy létra.",
     "Beszéld meg a szomszédokkal, hogyan segítetek egymásnak, a segítségre szorulókat is beleértve; döntsd el, hová mennél, ha el kell hagynod az otthonod.",
     "Tudd, hol vannak a homokzsákok, gátelemek; elárasztott utcán bottal tapogass, hogy észrevedd a nyitott gödröket és a hiányzó aknafedeleket."
    ],
    "source": "nl-dv-overstroming"
   },
   {
    "type": "heat",
    "steps": [
     "Igyál eleget – gyakrabban a szokásosnál, és még mielőtt szomjas lennél.",
     "Tartsd hűvösen a házat: napközben csukd be az ablakokat, ajtókat, függönyöket és napellenzőket; akkor nyiss ablakot, amikor kint hűvösebb van, mint bent.",
     "Hőségben kerüld a nagy megerőltetést.",
     "Figyelj a szédülésre és a fejfájásra: hűtsd le magad, maradj távol a naptól, és ha nem javul, keress orvost.",
     "Vigyázz a szomszédokra, a családra és a barátokra, különösen az idősekre, a kisgyerekekre és a betegekre; tudd, hová mehetsz lehűlni.",
     "Útra vigyél elegendő vizet és napvédelmet arra az esetre, ha lerobbansz."
    ],
    "source": "nl-dv-hitte"
   },
   {
    "type": "cold",
    "steps": [
     "Kövesd a KNMI figyelmeztetéseit; piros kódnál csak akkor menj ki, ha tényleg muszáj – bent a legbiztonságosabb.",
     "Rögzítsd vagy hozd be a laza tárgyakat, például a kerti bútort és a kukát; csukd be az ablakokat, ajtókat és spalettákat, főleg a szél felőli oldalon.",
     "Az autóval szélvédett helyen, fáktól és kerítésektől távol parkolj; zárd le a pincét, és vidd magasabbra a holmidat.",
     "Az autóban mindig legyen takaró, meleg kabát és egy palack víz.",
     "Ha ki kell menned, vigyél ételt, italt, takarót, plusz ruhát és feltöltött telefont, és szólj másoknak, merre mész.",
     "A 112-t csak életveszélyben hívd; nem sürgős viharkárnál a 0900-0904-et; utána jelentsd a kárt a biztosítónak."
    ],
    "source": "nl-dv-extreem-weer"
   },
   {
    "type": "fire",
    "steps": [
     "Hívd a 112-t, és add meg a tűz helyét a lehető legpontosabban.",
     "Ne várj segítségre – menekülj a lehető leggyorsabban és legmesszebbre a tűztől.",
     "A tűzre merőlegesen menekülj, soha ne előtte vagy felé.",
     "Figyelmeztesd és segítsd biztonságos helyre a többieket.",
     "Megelőzés: ne parkolj száraz, magas fűben (forró katalizátor), ne torlaszold el az erdei utakat, és tartsd be a grillezési, tábortűz-szabályokat."
    ],
    "source": "nl-dv-natuurbrand"
   },
   {
    "type": "cyber",
    "steps": [
     "Legyen otthon legalább 72 órára élelem, készpénz és alapvető cikk – lehet, hogy kártyával nem tudsz fizetni.",
     "Írd fel és tárold biztonságos helyen a telefon- és internetszolgáltatód, valamint a fontos szolgáltatások (pl. netbank) belépési adatait.",
     "Írd fel a legfontosabb emberek és szolgáltatások címét, elérhetőségét.",
     "Készíts offline mentést a laptopon, tableten és telefonon lévő fontos fájlokról; tartsd frissítve az okoseszközöket.",
     "Legyen vészrádiód (tölthető, tekerős vagy elemes) – hosszú kiesésnél a tévés válságcsatornák és az NL-Alert valószínűleg nem működnek."
    ],
    "source": "nl-dv-telecom"
   },
   {
    "type": "pandemic",
    "steps": [
     "Ha beteg vagy, maradj otthon; enyhe tüneteknél lehetőleg dolgozz otthonról, és tarts távolságot.",
     "Kerüld a súlyos légúti betegség szempontjából veszélyeztetett emberekkel való érintkezést; ha muszáj (pl. ápolás), viselj maszkot.",
     "Köhögj és tüsszents a könyöködbe; moss gyakran kezet szappannal és vízzel.",
     "Takaríts rendszeresen (konyha, vécé, fürdőszoba), és szellőztesd jól a lakást.",
     "Állatokkal való érintkezés után moss kezet; elhullott állathoz ne nyúlj."
    ],
    "source": "nl-dv-infectieziekten"
   }
  ],
  "tips": [
   {
    "title": "Félévente nézd át a csomagot",
    "text": "Hathavonta ellenőrizd a vészcsomagban a lejárati dátumokat és a hiányokat – és beszéljétek meg, ki csinálja a háztartásban.",
    "tag": "csalad",
    "source": "nl-dv-noodpakket"
   },
   {
    "title": "Táska a hirtelen induláshoz",
    "text": "A vészcsomag mellett legyen egy táska arra az esetre, ha hirtelen el kell indulnod; használj vízálló hátizsákot.",
    "tag": "csalad",
    "source": "nl-dv-noodpakket"
   },
   {
    "title": "Síp, pótkulcs, iratmásolat",
    "text": "Tegyél a csomagba sípot, hogy a mentők megtaláljanak, valamint tartalék lakás- és autókulcsot és a személyi iratok másolatát.",
    "tag": "penz",
    "source": "nl-dv-noodpakket"
   },
   {
    "title": "Vészhelyzeti kártya mindenkinek",
    "text": "Készíts vészhelyzeti tervet (noodkaart), adj róla fotót vagy másolatot a vészhelyzeti kapcsolattartóidnak, és tartsd a csomag mellett, a hűtőn vagy a mérőóraszekrényben.",
    "tag": "csalad",
    "source": "nl-dv-noodplan"
   },
   {
    "title": "Ki megy a gyerekekért?",
    "text": "Döntsétek el előre, ki hozza el a gyerekeket, ha nem működik a telefon, és hol találkozol a pároddal.",
    "tag": "csalad",
    "source": "nl-dv-noodplan"
   },
   {
    "title": "Palackozd a saját csapvized",
    "text": "A csomagba saját csapvizet is tölthetsz: tisztítsd meg a csapot, a mosogatót, a kezed és a palackokat, tárold sötét, hűvös helyen, és félévente cseréld.",
    "tag": "viz",
    "source": "nl-dv-drinkwater"
   },
   {
    "title": "Edény a szükségvízhez",
    "text": "Tarts tiszta vödröt, üres palackokat vagy kannát a vízosztó pontokon kapott szükségvízhez – és ivás előtt forrald 3 percig.",
    "tag": "viz",
    "source": "nl-dv-drinkwater"
   },
   {
    "title": "Társasházban leállhat a szivattyú",
    "text": "Társasházban az áramszünet a vizet felnyomó szivattyút is leállíthatja.",
    "tag": "viz",
    "source": "nl-dv-drinkwater"
   },
   {
    "title": "A legkisebb szobákat fűtsd",
    "text": "Áramszünetben a ház legkisebb helyiségeit fűtsd és használd.",
    "tag": "energia",
    "source": "nl-dv-geen-stroom"
   },
   {
    "title": "Éjszakára: telefon, kulcs, csukott ajtó",
    "text": "Legyen a telefonod az ágy mellett, a lakáskulcs állandó helyen az ajtó közelében, és lefekvés előtt csukd be a belső ajtókat.",
    "tag": "otthon",
    "source": "nl-dv-brand"
   },
   {
    "title": "Habbal oltó és tűzoltó takaró",
    "text": "Otthonra a 6 literes habbal oltó készülék a legalkalmasabb; legyen mellette tűzoltó takaró is.",
    "tag": "otthon",
    "source": "nl-dv-brand"
   },
   {
    "title": "Gázszag esetén",
    "text": "Ha van idő, nyiss ablakot és ajtót, zárd el a gázcsapot (sárga cső a mérőóraszekrényben), menj ki, és hívd a 0800-9009-et.",
    "tag": "otthon",
    "source": "nl-dv-brand"
   },
   {
    "title": "Szirénaszókor a gyerek az iskolában marad",
    "text": "Ha a gyerekek iskolában vagy bölcsődében vannak, amikor megszólal a sziréna, ott maradnak – a személyzet vigyáz rájuk.",
    "tag": "csalad",
    "source": "nl-dv-sirene"
   },
   {
    "title": "Robbanásnál nyitott szájjal",
    "text": "Robbanás elleni menedékben tartsd nyitva a szád – így véded a tested a nyomáskülönbségtől.",
    "tag": "otthon",
    "source": "nl-dv-spanningen"
   },
   {
    "title": "Az állatoknak is 72 óra",
    "text": "A háziállatoknak is legyen 72 órára elegendő élelem és víz.",
    "tag": "csalad",
    "source": "nl-dv-extreem-weer"
   }
  ]
 },
 "BE": {
  "alerts": {
   "text": "A BE-Alert a hatóságok riasztórendszere, amely SMS-ben, e-mailben vagy hanghívással értesít (az 1789-es vagy a 0477 77 77 55-ös számról); az üzenetek mindig „BE-Alert” szóval kezdődnek, ingyenesek, és soha nem kérnek banki adatot. A be-alert.be oldalon több címet is regisztrálhatsz (otthon, a gyerekek iskolája, munkahely); az érintett zónában tartózkodók regisztráció nélkül is kaphatnak riasztást. Az elzárkózásra vonatkozó utasítások honlapokon, közösségi médiában, rádión, tévén és mobil hangosbemondón is érkeznek. Kültéri szirénákról a lekért NCCN-oldalakon nem volt információ.",
   "source": "be-cc-bealert"
  },
  "guides": [
   {
    "type": "nuclear",
    "steps": [
     "Előtte: tudd meg, hogy nukleáris vészhelyzeti tervezési zónában laksz-e, regisztrálj a BE-Alertre, és tarts otthon jódtablettát (ingyenes a gyógyszertárban).",
     "Menj be, és maradj bent, amíg nem mondják, hogy biztonságos.",
     "Csukd be az ajtókat és ablakokat, kapcsold ki a szellőzést; lehetőleg a földszint egy központi helyiségében tartózkodj.",
     "A gyerekeket hagyd az iskolában – ott ugyanezeket az utasításokat követik.",
     "Soha ne menekülj és ne vegyél be jódot saját kezdeményezésre; várd meg a hatóságok utasítását.",
     "Utána kövesd az ivóvízre és élelmiszerre (kerti zöldség, mezőgazdaság) vonatkozó utasításokat."
    ],
    "source": "be-cc-nucleaire"
   },
   {
    "type": "evacuation",
    "steps": [
     "Regionális vészhelyzetben soha ne menekülj saját kezdeményezésre – várd meg a hatóságokat; néha az elzárkózás a biztonságosabb.",
     "Beszéld meg előre a családdal, barátokkal, hová mehetsz, a háziállatokkal együtt is.",
     "Akaszd a lakáskulcsot az ajtó közelébe, és legyen kész menekülőtáskád a személyi iratok és a biztosítási szerződések másolatával.",
     "A minimumot vidd: igazolvány, pénz, néhány palack víz, telefon és töltő, kulcsok, fontos telefonszámok, alapvető gyógyszerek, tisztálkodócsomag.",
     "Ha a veszély közvetlen, és nincs kész csomagod, ne vesztegesd az időt pakolásra – indulj.",
     "Indulás előtt kapcsold ki a készülékeket, például a kávéfőzőt vagy a vasalót (a hűtő és a fagyasztó maradhat), csukd be az ajtókat és ablakokat, és élesítsd a riasztót.",
     "Ha egy háziállatot hátra kell hagynod, szólj a mentőknek, és hagyj neki 24 órára elegendő vizet és ételt."
    ],
    "source": "be-cc-evacuer"
   },
   {
    "type": "blackout",
    "steps": [
     "Ha tervezett áramszünetet vagy terheléscsökkentést jelentenek be, töltsd fel a telefont és a powerbankot, és készíts elő hidegen is ehető ételt.",
     "Tartsd csukva a fagyasztót – egy 3–4 órás áramszünet nem olvasztja ki az ételt.",
     "Áramszünet alatt húzd ki az érzékeny készülékeket, hogy ne károsítsa őket a visszakapcsoláskori túlfeszültség.",
     "Gyertya helyett zseblámpát használj; feleslegesen ne nyisd ki a hűtőt és a fagyasztót.",
     "Korlátozd az autózást – a közlekedési lámpák kieshetnek.",
     "Utána ne kapcsolj be egyszerre sok készüléket; ellenőrizd a hűtő és a fagyasztó tartalmát, és ha kétséges, dobd ki."
    ],
    "source": "be-cc-electricite"
   },
   {
    "type": "flood",
    "steps": [
     "Előtte: tartsd tisztán az ereszt és az árkokat; legyen tömítőanyag a pinceablakokhoz és lefolyókhoz, tégla vagy homokzsák, csizma, vödör és lehúzó.",
     "A fontos papírokat és értékeket tedd magasra; tudd, hol zárhatod el a gázt és az áramot.",
     "Közben: homokzsákokkal építs kis gátat a pincenyílásoknál és az ajtóknál; szedd fel a szőnyegeket, emeld meg a bútorokat és az értékeket.",
     "Szükség esetén zárd el a gázt, az áramot és a vizet; az autóval biztonságos helyen parkolj, ne a garázsban.",
     "Tűzoltósági segítségért használd az 1722.be oldalt vagy az 1722-es számot, a 112-t hagyd szabadon a veszélyben lévőknek (életveszélyben mindig hívd a 112-t).",
     "Utána: takaríts és fertőtleníts, szellőztess és fűts, hogy távozzon a nedvesség, és fényképezd le a kárt a biztosítónak."
    ],
    "source": "be-cc-inondation"
   },
   {
    "type": "heat",
    "steps": [
     "Igyál eleget, a szokásosnál többet, ne várd meg, hogy megszomjazz – üdítő helyett inkább vizet; hosszabb útra vigyél vizet.",
     "Nagy melegben maradj bent, amíg lehűl, vagy árnyékban, hűvös helyen (könyvtár, bevásárlóközpont).",
     "Kerüld az intenzív mozgást, különösen a legmelegebb órákban; rendszeresen nedvesítsd be a homlokod és a nyakad.",
     "Viselj sapkát, kalapot és könnyű, világos ruhát; használj legalább 30-as faktorú naptejet.",
     "Embert vagy állatot soha ne hagyj a parkoló járműben.",
     "Görcs, magas láz, fejfájás vagy ájulás esetén hívd a háziorvost; a 112-t csak életveszélyben hívd."
    ],
    "source": "be-cc-chaleur"
   },
   {
    "type": "cold",
    "steps": [
     "Tél előtt ellenőrizd a fűtőberendezéseket és a csövek szigetelését; nézd át az autót (téli gumi), és legyen benne takaró, jégkaparó és egy palack víz.",
     "Maradj bent, amennyire lehet, és kövesd az időjárási és közlekedésbiztonsági figyelmeztetéseket.",
     "A termosztátot állítsd a még kényelmes legalacsonyabb hőfokra, naponta 10 percet szellőztess, és zárd le a ritkán használt helyiségeket.",
     "Óvakodj a kandallók, a szén-, olaj- és pelletkályhák, valamint a gázüzemű vízmelegítők okozta szén-monoxid-mérgezéstől.",
     "Ha kimész, öltözz rétegesen, és takard be az egész tested, a fejedet is.",
     "Az olvadás után figyelj a szétfagyott csövek szivárgására."
    ],
    "source": "be-cc-froid"
   },
   {
    "type": "fire",
    "steps": [
     "Ha erdő közelében laksz: ha tüzet vagy veszélyben lévő embert látsz, azonnal hívd a 112-t; csukd be az ajtókat és ablakokat.",
     "Ne menekülj saját kezdeményezésre – várd meg a hatóságokat; ha elhagyod az otthonod, zárd el az áramot és a gázt.",
     "Az erdőben: a meglévő utakon haladj, távolodva a tűztől és a füsttől, lehetőleg a szélre merőlegesen.",
     "Menekülj közútra, nagy burkolt térre vagy lakott területre, és közben segíts másoknak.",
     "Hívd a 112-t vagy használd a 112 alkalmazást, és adj meg tájékozódási pontokat (ösvény, kilátó, parkoló); ha nincs térerő, gyorsan hagyd el a területet, és figyelmeztesd, akivel találkozol."
    ],
    "source": "be-cc-feuforet"
   },
   {
    "type": "cyber",
    "steps": [
     "Beszéld meg előre a családdal, hol találkoztok, ha nem tudjátok elérni egymást.",
     "Közben ne telefonálj és ne internetezz feleslegesen – hagyd szabadon a hálózatot a fontos hívásoknak.",
     "Ha a segélyhívó központok (112/101/100) nem érhetők el, alternatív számok léteznek – ezeket is csak vészhelyzetben használd.",
     "Utána várj egy kicsit a telefonálással és az internetezéssel, hogy a rendszer stabilizálódjon."
    ],
    "source": "be-cc-digital"
   },
   {
    "type": "pandemic",
    "steps": [
     "Ügyelj a higiéniára, moss rendszeresen kezet, szellőztesd a közös helyiségeket, és kerüld a szoros érintkezést a betegekkel.",
     "Ha beteg vagy: keresd fel az orvosod, köhögéskor, tüsszentéskor takard el a szád zsebkendővel, maszkkal vagy a karoddal, és az eldobható zsebkendőt zárt kukába dobd.",
     "Betegen ne menj iskolába, munkába vagy nyilvános helyre; mások közelében viselj maszkot; igyál sokat (napi 1,5 litert).",
     "Ha valaki beteg a háztartásban: ne használjatok közös poharat, tányért, szükség esetén viselj maszkot, és gyakran fertőtlenítsd a sokat érintett felületeket (kilincs, csap).",
     "Utána a beteg ruháit legalább 60 °C-on mosd ki."
    ],
    "source": "be-cc-maladies"
   }
  ],
  "tips": [
   {
    "title": "Jégkocka-teszt a fagyasztóban",
    "text": "Tegyél egy zacskó jégkockát a fagyasztóba: ha áramszünet után összeolvadva fagyott vissza, az étel valószínűleg megromlott.",
    "tag": "etel",
    "source": "be-cc-electricite"
   },
   {
    "title": "Csukott fagyasztó 24–36 óráig",
    "text": "Ha csukva tartod a fagyasztót, az étel áramszünetben 24, akár 36 óráig is fagyott marad; egy 3–4 órás kiesés nem olvasztja ki.",
    "tag": "etel",
    "source": "be-cc-electricite"
   },
   {
    "title": "Mosógép este 10 után",
    "text": "A mosó- és mosogatógépet lehetőleg 22:00 után indítsd, hogy csökkenjen az áramhiány kockázata.",
    "tag": "energia",
    "source": "be-cc-electricite"
   },
   {
    "title": "Készpénz 72 órára, nem több",
    "text": "Tarts készpénzt kb. 72 órányi alapvető szükségletre – de nagy összeget ne tarts otthon.",
    "tag": "penz",
    "source": "be-cc-kit"
   },
   {
    "title": "Síp a menekülőtáskába",
    "text": "Tegyél sípot a menekülőtáskába, hogy jelezni tudd a mentőknek, hol vagy.",
    "tag": "csalad",
    "source": "be-cc-kit"
   },
   {
    "title": "Ingyenes jódtabletta",
    "text": "Kérj ingyen jódtablettát a gyógyszerésztől, és tartsd az otthoni vészcsomagban – csak hivatalos utasításra vedd be.",
    "tag": "egeszseg",
    "source": "be-cc-kit"
   },
   {
    "title": "Ne csak a pincében tárolj",
    "text": "Ne csak a pincében vagy a garázsban tartsd a készletet – ezeket önti el leghamarabb a víz; rendszeresen fogyaszd és pótold, hogy ne járjon le.",
    "tag": "etel",
    "source": "be-cc-kit"
   },
   {
    "title": "Menekülőtáska a háziállatnak",
    "text": "Legyen benne gyógyszerlista, állatútlevél és oltási könyv, az állatorvos elérhetősége, egy friss fotó az állatról, két tál, eledel, ürülékzacskó és póráz.",
    "tag": "csalad",
    "source": "be-cc-kit"
   },
   {
    "title": "Kapu és redőny áram nélkül",
    "text": "Tudd, hogyan nyitható áramszünetben az elektromos kapu, redőny vagy ajtó, és hogyan kapcsolható ki a szellőzőrendszer.",
    "tag": "otthon",
    "source": "be-cc-plan"
   },
   {
    "title": "Állíts be ICE-kontaktot",
    "text": "Állíts be ICE (In Case of Emergency) kontaktot a telefonodban: egy közelben élőt és egy távolabb lakót.",
    "tag": "csalad",
    "source": "be-cc-plan"
   },
   {
    "title": "112BE app helymegosztással",
    "text": "Töltsd le a 112BE alkalmazást, és oszd meg a helyzeted, hogy a diszpécserközpont gyorsan megtaláljon.",
    "tag": "info",
    "source": "be-cc-plan"
   },
   {
    "title": "Gyakorold a kijutást bekötött szemmel",
    "text": "Sűrű füstben sokkal nehezebb kijutni, mint gondolnád – gyakorold be bekötött szemmel a kijáratig vezető utat.",
    "tag": "otthon",
    "source": "be-cc-evacuer"
   },
   {
    "title": "Elzárkózáskor ne menj a gyerekért",
    "text": "Ha elzárkózást rendelnek el, amikor a gyerekek iskolában vannak, ne menj értük – dugót okoznál és akadályoznád a mentőket. Regisztráld az iskola címét a BE-Alertben.",
    "tag": "csalad",
    "source": "be-cc-abri"
   },
   {
    "title": "Autóban kapcsold ki a klímát",
    "text": "Ha autóban ér az elzárkózási utasítás, kapcsold ki a klímát, hogy ne szívja be a külső levegőt, majd menj be egy épületbe.",
    "tag": "otthon",
    "source": "be-cc-abri"
   },
   {
    "title": "Az elzárkózás átmeneti",
    "text": "Néhány órától legfeljebb 24 óráig tart; ha romlik a helyzet, lehet, hogy ki kell telepíteni.",
    "tag": "info",
    "source": "be-cc-abri"
   }
  ]
 },
 "SE": {
  "alerts": {
   "text": "A szirénajelek: „Fontos közlemény” (7 mp hang, 14 mp csend, 2 percig) – menj be, csukd be az ablakokat és ajtókat, ha lehet, kapcsold ki a szellőzést, és hallgasd a Sveriges Radio P4-et; „Vészriasztás”, a legmagasabb készültség (30 mp hang, 15 mp csend, 5 percig) – menj be, hallgasd a P4-et, a háborús beosztással rendelkezők azonnal jelentkezzenek; „Légiriadó” (rövid szaggatott hangok 1 percig) – azonnal húzódj óvóhelyre, pincébe vagy más védett helyre; „Vége a veszélynek” – egyetlen, 30 másodperces folyamatos hang. A szirénákat március, június, szeptember és december első, nem ünnepnapra eső hétfőjén 15:00-kor tesztelik. Az érintett területen lévő telefonokra az SE-Alert küld riasztást, a közlemények a Sveriges Radión, az SVT-n, a teletexten és a krisinformation.se, SOS Alarm, SR és SVT alkalmazásokban is megjelennek.",
   "source": "se-mcf-brochure"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Légiriadónál (rövid szaggatott szirénahangok 1 percig) azonnal húzódj be a legközelebbi óvóhelyre vagy más védett helyre.",
     "Ha nincs óvóhely, menj pincébe, garázsba vagy föld alatti metróállomásra; az alagutak és a falak is adnak némi védelmet.",
     "Bent jobb, mint kint – lehetőleg ablak nélküli helyiségben.",
     "Ha kint vagy, és nincs időd fedezéket keresni, feküdj a földre, lehetőleg egy kis gödörbe vagy árokba.",
     "Maradj ott a „Vége a veszélynek” jelzésig (egy hosszú, 30 másodperces szirénahang), utána segíts a sérülteknek és a beszorultaknak.",
     "Nézd meg előre az otthonod, az iskola és a munkahely közelében lévő óvóhelyeket (térkép: mcf.se); bármelyik legközelebbit használhatod, narancs alapon kék háromszög jelöli őket."
    ],
    "source": "se-mcf-brochure"
   },
   {
    "type": "nuclear",
    "steps": [
     "Nukleáris, vegyi vagy biológiai fegyveres támadásnál ugyanúgy keress fedezéket, mint légiriadónál.",
     "A legjobb védelmet – a radioaktív kihullás ellen is – a polgári védelmi óvóhelyek adják.",
     "„Fontos közlemény” szirénánál (7 mp hang / 14 mp csend) menj be, csukd be az összes ablakot és ajtót, és ha lehet, kapcsold ki a szellőzést.",
     "Hallgasd a Sveriges Radio P4 utasításait; a sugárszint néhány nap után drasztikusan csökken."
    ],
    "source": "se-mcf-brochure"
   },
   {
    "type": "cold",
    "steps": [
     "Ha télen elmegy az áram, gyűljetek össze mindannyian egy szobában.",
     "Akassz takarókat az ablakokra, a padlót borítsd szőnyegekkel.",
     "Viselj meleg gyapjúruhát, vastag zoknit, sapkát, kesztyűt és sálat; használj takarókat, matracokat és hálózsákot.",
     "Gáz- vagy petróleumkályha használatakor nyiss ablakot, hogy legyen friss levegő, és alvás előtt kapcsold ki."
    ],
    "source": "se-mcf-brochure"
   },
   {
    "type": "evacuation",
    "steps": [
     "Kövesd a „Fontos közlemény” rendszeren és a Sveriges Radio P4-en bemondott kitelepítési utasításokat.",
     "Vigyél néhány napra elegendő ételt és vizet, fényképes igazolványt, bankkártyát és készpénzt.",
     "Csomagold be a gyógyszereidet és segédeszközeidet, egy elemes/napelemes/tekerős rádiót, a mobilodat és a töltőt.",
     "Vigyél meleg, vízálló ruhát, váltóruhát és tisztálkodószereket.",
     "Legyen nálad térkép, iránytű és papíron a fontos adatok (telefonszámok, biztosítási adatok)."
    ],
    "source": "se-mcf-brochure"
   },
   {
    "type": "cyber",
    "steps": [
     "Használj erős jelszót betűkkel, számokkal és szimbólumokkal.",
     "Ne kattints ismeretlen feladótól érkező linkre, és ne nyisd meg a csatolmányait.",
     "A biztonsági frissítéseket azonnal telepítsd.",
     "A fontos adataidról rendszeresen készíts mentést külső meghajtóra, pendrive-ra vagy felhőbe.",
     "Figyelj az erős érzelmi reakciót kiváltó tartalmakra, és csak megbízható forrásból származó információt ossz meg.",
     "Ha valami komoly történt, ellenőrizd az információt hivatalos kormányzati forrásokban."
    ],
    "source": "se-mcf-brochure"
   }
  ],
  "tips": [
   {
    "title": "Fagyaszd le a vizet palackban",
    "text": "A lefagyasztott vizes műanyag palackok áramszünetkor jégakkuként működnek, kiolvadva pedig megihatod őket. Ne töltsd tele, mert megrepedhetnek.",
    "tag": "viz",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Sötét, hűvös helyen tárold",
    "text": "A vizet sötét, hűvös helyen tárold, évente egyszer-kétszer ellenőrizd, nincs-e furcsa íze vagy szaga, és szükség esetén cseréld.",
    "tag": "viz",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Építsd a készletet fokozatosan",
    "text": "Minden szokásos bevásárláskor vegyél egy-két plusz terméket, így apránként áll össze a tartalék.",
    "tag": "etel",
    "source": "se-mcf-brochure"
   },
   {
    "title": "1000 korona felnőttenként",
    "text": "Tarts otthon felnőttenként kb. 1000 SEK készpénzt vegyes címletekben, és néha fizess is készpénzzel.",
    "tag": "penz",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Tank, akku, autós töltő",
    "text": "Legyen üzemanyag az autó tankjában vagy feltöltött autóakkumulátorod, és tarts autós telefontöltőt.",
    "tag": "energia",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Fontos számok papíron",
    "text": "Írd fel papírra a fontos telefonszámokat.",
    "tag": "info",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Ha nem húzható le a WC",
    "text": "Vizelni továbbra is használhatod; a WC-papírt tedd fedeles kukába, a székletnél bélelj ki a csészét zacskóval, és szórd le komposztalommal vagy fűrészporral. A vizelet és a széklet külön tartása csökkenti a szagot.",
    "tag": "egeszseg",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Egyhavi gyógyszer otthon",
    "text": "Ha vényköteles gyógyszerre vagy eldobható orvosi eszközökre szorulsz (pl. cukorbetegség miatt), tarts otthon egyhavi készletet.",
    "tag": "egeszseg",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Jegyezd fel a P4 frekvenciát",
    "text": "A Sveriges Radio P4 válságban és háborúban is sugároz; nézd meg előre a helyi P4 frekvenciát a krisinformation.se oldalon.",
    "tag": "info",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Rádió és töltött powerbank",
    "text": "Áramszünetre készülj elemes, napelemes vagy tekerős rádióval, tartalékelemekkel és feltöltött powerbankkal.",
    "tag": "energia",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Fuss, bújj el, szólj",
    "text": "Terrortámadásnál fuss, bújj el (a telefon legyen némítva), és szólj (hívd a 112-t). Ne hívj fel senkit, aki rejtőzhet, mert elárulhatod a helyét.",
    "tag": "otthon",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Ismerd fel a dezinformációt",
    "text": "A dezinformáció lehet hamis kép, videó vagy hangfelvétel, illetve szövegkörnyezetéből kiragadott féligazság. Vesd össze az információt több forrással.",
    "tag": "info",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Háziállatra is egy hét",
    "text": "A háziállatodnak is legyen legalább egyhetes készlete; légiriadó idején bevihető pincébe, garázsba és metróállomásra.",
    "tag": "csalad",
    "source": "se-mcf-brochure"
   },
   {
    "title": "Adagold a híreket",
    "text": "Ha aggódsz, csak annyi hírt fogyassz, amennyi még jólesik, és figyelj az étkezésre, az alvásra és a mozgásra.",
    "tag": "egeszseg",
    "source": "se-mcf-brochure"
   }
  ]
 },
 "FI": {
  "alerts": {
   "text": "A vészhelyzeti figyelmeztetések a telefonokra az FI-Alert és a 112 Suomi alkalmazás révén érkeznek, emellett weboldalakon, rádióban és szükség esetén a tévében is megjelennek. A nyilvános riasztójel egy percig tartó, emelkedő-süllyedő hang: ilyenkor azonnal menj be, kövesd a figyelmeztetéseket, utasításra (vagy ha mérgező gázt, füstöt észlelsz) kapcsold ki a szellőzést, zárd és ragaszd le az ajtókat, ablakokat, szellőzőket, és maradj bent, amíg a hatóság le nem fújja a veszélyt. A Finn Meteorológiai Intézet a súlyos időjárásra is előre figyelmeztet.",
   "source": "fi-suomi-general"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Ha légi fenyegetésről kapsz vészhelyzeti figyelmeztetést vagy hallod a riasztójelet, azonnal menj be.",
     "Kövesd a figyelmeztetésben kapott utasításokat.",
     "Maradj bent, amíg a hatóságok nem mondják, hogy biztonságos kimenni.",
     "Ha elrendelik, menj óvóhelyre az önkormányzat, a társasház vagy a munkahely veszélyhelyzeti terve szerint."
    ],
    "source": "fi-suomi-checklist"
   },
   {
    "type": "blackout",
    "steps": [
     "Kapcsold ki az elektromos készülékeket, főleg a hőt termelőket.",
     "Ha még folyik víz a csapból, gyűjtsd tiszta edénybe.",
     "Ne önts vizet a lefolyóba, és ne húzd le a WC-t, mert a csatorna kiönthet.",
     "A család abban a szobában tartózkodjon, amelyik a legtovább meleg marad – csukott ajtóval, letakart ablakokkal.",
     "Hagyj egy lámpát felkapcsolva, hogy tudd, mikor jön vissza az áram.",
     "Amikor visszajön az áram, ne kapcsolj be mindent egyszerre, és ellenőrizd, nem maradt-e bekapcsolva hőt termelő készülék."
    ],
    "source": "fi-suomi-powercut"
   },
   {
    "type": "nuclear",
    "steps": [
     "A riasztójel vagy a vészhelyzeti figyelmeztetés után azonnal húzódj be egy épületbe.",
     "Kapcsold ki a szellőzést, az ablakokat, ajtókat és más nyílásokat zárd le erős ragasztószalaggal.",
     "Kövesd a figyelmeztetéseket és a hatóságok (mentőszolgálat, Sugárvédelmi és Nukleáris Biztonsági Hatóság) utasításait.",
     "Jódtablettát csak a hatóságok utasítására és az általuk megadott időpontban vegyél be. A jód csak a pajzsmirigyet védi.",
     "Ha már kiadták az ajánlást, ne indulj el gyógyszertárba jódért. Maradj bent, amíg nem szólnak, hogy elmúlt a veszély."
    ],
    "source": "fi-suomi-radiation"
   },
   {
    "type": "flood",
    "steps": [
     "Nézz utána, árvízveszélyes területen laksz-e, és kövesd a helyi időjárás-jelentéseket és figyelmeztetéseket.",
     "Tarts otthon vészhelyzeti készletet és az árvíz feltartóztatásához szükséges anyagokat.",
     "Árvíz idején védd az ingatlanodat a károktól.",
     "Hagyd el a területet, vagy menj az épület felső szintjeire.",
     "Ne menj bele az árvízbe; kövesd a mentőszolgálat utasításait."
    ],
    "source": "fi-suomi-checklist"
   },
   {
    "type": "cold",
    "steps": [
     "Próbálj egy szobát melegen tartani: csukd be a külső és sarokszobák ajtaját, a réseket tömítsd szőnyeggel vagy törölközővel.",
     "Takard le az ablakokat vastag függönnyel vagy takaróval, és tegyél több szőnyeget a padlóra.",
     "Viselj meleg, szellőző, lehetőleg gyapjú ruhát, plusz zoknit, sapkát és kesztyűt.",
     "Vidd az ágyakat a legmelegebb helyiségbe, aludjatok egymás mellett, közös takarókkal. Egy asztalra terített takarósátor is segít.",
     "Tartsd csukva a bejárati ajtót, mert a hő gyorsan távozik. Ne feledd: az alkohol nem melegít."
    ],
    "source": "fi-spek-72h"
   },
   {
    "type": "fire",
    "steps": [
     "Ellenőrizd, hogy működnek-e a füstérzékelőid, és tanuld meg a tűzoltás alapjait.",
     "Nézd meg a Finn Meteorológiai Intézet aktuális erdőtűz-figyelmeztetéseit.",
     "Ha tüzet észlelsz, jelentsd a 112-n.",
     "Próbáld eloltani a tüzet, ha ezt biztonságosan megteheted.",
     "Figyelmeztesd és segítsd a többieket, és menekülj biztonságos helyre."
    ],
    "source": "fi-suomi-checklist"
   },
   {
    "type": "cyber",
    "steps": [
     "Használj erős jelszavakat és többlépcsős azonosítást, és legyen többféle elektronikus azonosítási módod.",
     "Ne nyiss meg ismeretlen feladótól érkező linket, és ellenőrizd, hogy a bank és a hatóságok weboldala valódi-e.",
     "Tartsd frissen és vírusvédelemmel ellátva az eszközeidet.",
     "Kapcsold be a szolgáltatód üzemzavar-értesítéseit, és mentsd el az ügyfélszolgálati számát.",
     "Ha leállnak a hálózatok, hallgasd a YLE rádióadóit; beszéld meg előre a szeretteiddel, hogyan tartjátok a kapcsolatot.",
     "Ne terjessz hamis információt, és figyeld meg, mely témák kavarják fel leginkább az érzelmeidet."
    ],
    "source": "fi-suomi-checklist"
   },
   {
    "type": "pandemic",
    "steps": [
     "Ügyelj a higiéniára, és oltasd be magad, hogy lassítsd a terjedést.",
     "Gondold végig előre, hogyan érintene téged és a szeretteidet egy súlyos egészségügyi vészhelyzet.",
     "Kövesd a hatóságok és az egészségügy utasításait és ajánlásait."
    ],
    "source": "fi-suomi-checklist"
   }
  ],
  "tips": [
   {
    "title": "Gyűjtsd a vizet, amíg folyik",
    "text": "Amikor elmegy az áram, gyűjts csapvizet tiszta edényekbe, amíg még folyik.",
    "tag": "viz",
    "source": "fi-suomi-powercut"
   },
   {
    "title": "Egy lámpa maradjon felkapcsolva",
    "text": "Áramszünet alatt hagyj egy lámpát felkapcsolva. Amikor kigyullad, tudod, hogy visszajött az áram.",
    "tag": "energia",
    "source": "fi-suomi-powercut"
   },
   {
    "title": "Ne kapcsolj be mindent egyszerre",
    "text": "Áramszünet után ne kapcsold be egyszerre az összes készüléket: ez túlterheli a hálózatot, és újabb kimaradást okozhat.",
    "tag": "energia",
    "source": "fi-suomi-powercut"
   },
   {
    "title": "Az autó is segíthet",
    "text": "Tartsd viszonylag tele a tankot. Az autó fűteni is tud, tölti az eszközöket, és rádióként is működik.",
    "tag": "energia",
    "source": "fi-suomi-powercut"
   },
   {
    "title": "Beszéljétek meg a találkozóhelyet",
    "text": "Egyezz meg előre a szeretteiddel egy találkozóhelyben. Áramszünetkor az internet és a mobilhálózat néhány órán belül leállhat.",
    "tag": "csalad",
    "source": "fi-suomi-powercut"
   },
   {
    "title": "Készpénz néhány napra",
    "text": "Tarts otthon annyi készpénzt, ami néhány nap alapvető vásárlásaira elég. A kártyás fizetés és az ATM-ek hamar leállnak áramszünet után.",
    "tag": "penz",
    "source": "fi-suomi-powercut"
   },
   {
    "title": "Távfűtésnél vigyázz a forró vízzel",
    "text": "Távfűtéses épületben áramszünetkor a meleg csapvíz forrázóan forró lehet, ezért hideg vizet használj.",
    "tag": "otthon",
    "source": "fi-spek-72h"
   },
   {
    "title": "Tartsd csukva a fagyasztót",
    "text": "A −18 °C-os étel napokig olvad 0 °C-ig, és kb. −9 °C-on még visszafagyasztható, ha ellenőrizni tudod a minőségét.",
    "tag": "etel",
    "source": "fi-spek-72h"
   },
   {
    "title": "Egy ember = 70 wattos izzó",
    "text": "Egy ember nagyjából annyi hőt ad le, mint egy 70 wattos izzó, ezért segít a közös takaró és az egymás melletti alvás.",
    "tag": "energia",
    "source": "fi-spek-72h"
   },
   {
    "title": "Milyen gyorsan hűl ki a ház",
    "text": "Hidegben egy faház belseje 24 órán belül +10 °C-ra hűlhet; egy betonblokk épületnek ehhez kb. két nap, egy jól megépített kőháznak kb. három nap kell.",
    "tag": "otthon",
    "source": "fi-spek-72h"
   },
   {
    "title": "Legyen otthon ragasztószalag",
    "text": "Tarts otthon erős ragasztószalagot, hogy bent maradáskor le tudd zárni az ablakokat és a szellőzőket.",
    "tag": "otthon",
    "source": "fi-suomi-checklist"
   },
   {
    "title": "Két bank kártyája",
    "text": "Legyen kártyád két különböző banktól, és többféle erős azonosítási módod.",
    "tag": "penz",
    "source": "fi-suomi-checklist"
   },
   {
    "title": "Jódtabletta vény nélkül",
    "text": "Vásárolj jódtablettát a gyógyszertárban (nem kell hozzá recept), ha a háztartásban van 40 éves vagy fiatalabb, várandós vagy szoptató személy.",
    "tag": "egeszseg",
    "source": "fi-suomi-radiation"
   },
   {
    "title": "Telepítsd a 112 Suomi appot",
    "text": "Ha az alkalmazáson keresztül hívsz segítséget, a tartózkodási helyed automatikusan eljut a segélyhívó központba.",
    "tag": "info",
    "source": "fi-suomi-general"
   },
   {
    "title": "Kérj üzemzavar-értesítést",
    "text": "Kapcsold be az áram-, víz- és hálózati szolgáltatód üzemzavar-értesítéseit (pl. SMS-ben), ha van ilyen.",
    "tag": "info",
    "source": "fi-suomi-checklist"
   }
  ]
 },
 "NO": {
  "alerts": {
   "text": "Norvégiában kb. 1250 sziréna szól a városokban és lakott területeken: a „Viktig melding – søk informasjon” (fontos üzenet, tájékozódj) három hangsorozat egyperces szünetekkel, békében és háborúban is – ilyenkor kövesd a rádiót, a tévét és a hivatalos oldalakat; a „Fare for angrep – søk dekning” (támadás veszélye, keress fedezéket) kb. egy percig tartó rövid hangok; a „Faren er over” (vége a veszélynek) kb. fél perces folyamatos hang. Országos tesztet január és június második szerdáján 12:00-kor tartanak, a mobilokra pedig a Nødvarsel küld riasztást (4G/5G lefedettség kell hozzá). A vészhelyzeti adó az NRK P1, de az NRK bármelyik rádióadójába bejelentkezhet, ezért a DSB elemes DAB-rádiót javasol.",
   "source": "no-dsb-flyalarm"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Ha megszólal a légiriadó (kb. egy percig tartó rövid hangok), azonnal keress fedezéket.",
     "Ha nincs a közelben óvóhely (tilfluktsrom), keress védelmet ott, ahol vagy, például pincében vagy az épület belsejében.",
     "Maradj távol az ablakoktól, mert a robbanások szétzúzhatják az üveget és megsebesíthetik a közelben lévőket.",
     "Kérdezd meg az önkormányzatot vagy a körzeted polgári védelmét, hol a legközelebbi óvóhely; a nyilvános óvóhelyeket kint táblák jelzik."
    ],
    "source": "no-dsb-tilfluktsrom"
   },
   {
    "type": "blackout",
    "steps": [
     "Legyen otthon meleg ruha, takaró, paplan vagy hálózsák.",
     "Tarts gyertyát vagy mécsest, gyufát vagy öngyújtót, valamint zseblámpát vagy fejlámpát tartalékelemekkel.",
     "Csökkentsd a hőveszteséget: csukd be az ajtókat, vagy akassz takarót a szobák közé és az ablakok elé.",
     "Ha nem tudod melegen tartani a lakást, egyezz meg előre szomszédokkal, családdal vagy barátokkal, hogy hozzájuk mehetsz.",
     "Nyílt láng használatakor figyelj a tűzbiztonságra: ellenőrizd a tűzoltó készüléket és a füstérzékelőket."
    ],
    "source": "no-dsb-varme"
   },
   {
    "type": "cyber",
    "steps": [
     "Szerezz be elemes, napelemes vagy tekerős DAB-rádiót. A vészhelyzeti adó az NRK P1.",
     "Tarts feltöltött powerbankot és tartalékelemeket, és töltsd fel az eszközeidet, ha zavar várható.",
     "Legyen a közeledben valaki, aki más mobilhálózatot használ, mint te, vagy használj dual SIM-et/eSIM-et.",
     "Nézd meg, támogatja-e a telefonod a Wi-Fi-hívást, és beszéld meg az ismerőseiddel, melyik alkalmazásokat használjátok.",
     "Tudd meg, hogy az önkormányzatod nyit-e információs pontokat, illetve vannak-e tartalék áramellátású bázisállomások (legfeljebb három napig).",
     "Beszéljetek meg egy találkozóhelyet arra az esetre, ha nem értek el egymást."
    ],
    "source": "no-dsb-mobilnett"
   }
  ],
  "tips": [
   {
    "title": "Kis vizes edények a fagyasztóban",
    "text": "Tárolj kisebb vizes edényeket a fagyasztóban. Ne töltsd tele őket, mert megrepedhetnek.",
    "tag": "viz",
    "source": "no-dsb-vann"
   },
   {
    "title": "A víz évekig eláll",
    "text": "Tiszta víz tiszta edényben évekig tárolható és iható marad. Ha a bolti palackos víznek állott az íze, attól még nem ártalmas.",
    "tag": "viz",
    "source": "no-dsb-vann"
   },
   {
    "title": "Szűrd, forrald, hűtsd",
    "text": "Bizonytalan minőségű vizet szűrj át, forrald lobogó forrásig, majd hagyd magától kihűlni. A kávéfőző nem forralja fel a vizet.",
    "tag": "viz",
    "source": "no-dsb-vann"
   },
   {
    "title": "Bugyoláld be a fagyasztót",
    "text": "Áramszünetkor előbb húzd ki a fagyasztót, aztán szigeteld: tartsd csukva, és csavard be újságpapírba, gyapjútakaróba vagy paplanba. Egy teli fagyasztó 10–30 óra alatt melegszik −18 °C-ról −12 °C-ra.",
    "tag": "etel",
    "source": "no-dsb-fryser"
   },
   {
    "title": "Az érmés trükk",
    "text": "Fagyassz le egy pohár vizet, tegyél egy érmét a jég tetejére, és hagyd a fagyasztóban. Ha az érme lesüllyedt, az áram elég sokáig volt kint ahhoz, hogy a jég elolvadjon.",
    "tag": "etel",
    "source": "no-dsb-fryser"
   },
   {
    "title": "Előre jelzett áramszünet előtt",
    "text": "Ha az áramszünetet előre bejelentik, egy-két nappal korábban kapcsold a fagyasztót gyorsfagyasztásra.",
    "tag": "etel",
    "source": "no-dsb-fryser"
   },
   {
    "title": "Fizikai BankAxept-kártya",
    "text": "Legyen több bankkártyád, köztük legalább egy fizikai BankAxept-kártya (a norvég hazai kártyarendszer). Használd rendszeresen chippel és PIN-kóddal, hogy az adatai frissek maradjanak.",
    "tag": "penz",
    "source": "no-dsb-betaling"
   },
   {
    "title": "Kis címletek, több bank",
    "text": "Tarts egy kevés készpénzt különböző, lehetőleg kis címletekben, és legyen számlád több banknál.",
    "tag": "penz",
    "source": "no-dsb-betaling"
   },
   {
    "title": "Számlista papíron",
    "text": "Tarts papíron listát a fontos telefonszámokról arra az esetre, ha kölcsön kell kérned egy telefont.",
    "tag": "info",
    "source": "no-dsb-mobilnett"
   },
   {
    "title": "Kíméld a mobilhálózatot",
    "text": "Válságban csak a szükséges hívásokra használd a mobilt, hogy ne terheld túl a hálózatot. Azt, hogy jól vagy, közösségi médián vagy üzenetben jelezd.",
    "tag": "info",
    "source": "no-dsb-farlige"
   },
   {
    "title": "Állj meg, gondolkodj, ellenőrizd",
    "text": "Légy különösen óvatos a meglepő, ijesztő vagy felháborító információkkal, és ne feledd: szöveg, hang, kép és videó is manipulálható.",
    "tag": "info",
    "source": "no-dsb-kildekritisk"
   },
   {
    "title": "Jódtabletta a családnak",
    "text": "Tarts jódtablettát a gyerekeknek és a 40 év alatti felnőtteknek, a várandós és a szoptató nőknek.",
    "tag": "egeszseg",
    "source": "no-dsb-bidrar"
   },
   {
    "title": "Készüljetek együtt",
    "text": "Rendszeresen ellenőrizd a készleteidet, és a felkészülésben működj együtt a családdal, barátokkal és szomszédokkal.",
    "tag": "csalad",
    "source": "no-dsb-bidrar"
   },
   {
    "title": "DAB-rádió az autóban",
    "text": "A legtöbb újabb autóban van DAB-rádió, amelyen a vészhelyzeti adásokat is foghatod.",
    "tag": "info",
    "source": "no-dsb-varsling"
   }
  ]
 },
 "DK": {
  "alerts": {
   "text": "A legsúlyosabb helyzetekben a rendőrség bekapcsolja a szirénákat és az S!RENEN-t, a dán mobilos cell broadcast riasztást (nem alkalmazás, nem kell regisztrálni; iPhone 8+/iOS 16.4+ és Android 11+ készüléken, külföldi SIM-kártyával is működik). Sziréna hallatán MENJ BE, és TÁJÉKOZÓDJ a DR vagy a TV 2 adásából; S!RENEN-üzenetnél ÁLLJ MEG, OLVASD EL, és CSELEKEDJ az utasítás szerint – a szirénáknak két jelzése van: figyelmeztetés és a veszély lefújása. A rendszert minden évben május első szerdáján tesztelik; ha más csatornák leállnak, a DR sugároz vészhelyzeti közleményeket, ezért tarts elemes, tekerős vagy napelemes FM-rádiót.",
   "source": "dk-brs-warnings"
  },
  "guides": [
   {
    "type": "nuclear",
    "steps": [
     "Nukleáris balesetnél a legfontosabb: maradj bent.",
     "Tarts jódtablettát a 40 év alattiaknak, valamint a várandós és a szoptató nőknek.",
     "Kövesd a hatóságok ajánlásait. Sziréna hallatán menj be, és tájékozódj a DR vagy a TV 2 adásából."
    ],
    "source": "dk-brs-prepared"
   },
   {
    "type": "cold",
    "steps": [
     "Ha nincs fűtés és hideg van, használd a háztartás takaróit, paplanjait és meleg ruháit.",
     "Ha a hideg sokáig tart, a család főleg egy szobában tartózkodjon.",
     "A gyertyákat és más hőforrásokat szilárd felületre tedd, távol függönytől, szőnyegtől és más gyúlékony anyagtól.",
     "Soha ne használj grillt vagy hasonló eszközt bent vagy zárt térben, mert füst- és szén-monoxid-mérgezést okozhat."
    ],
    "source": "dk-brs-prepared"
   }
  ],
  "tips": [
   {
    "title": "Nem kell mindent egyszerre",
    "text": "A szokásos bevásárláshoz tegyél pár plusz tartós terméket, és a készletet rendszeresen használd el és pótold.",
    "tag": "etel",
    "source": "dk-brs-prepared"
   },
   {
    "title": "A csapvíz hónapokig eláll",
    "text": "Lezárt csapvíz hűvös, sötét helyen több hónapig eláll. Csak élelmiszer-tárolásra engedélyezett edényt használj, cserénél a régi vízzel öntözd meg a növényeket.",
    "tag": "viz",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Főzés nélkül is ehető",
    "text": "Olyan ételt válassz, amihez nem kell sütő vagy tűzhely (pl. konzerv, kétszersült), és amit a családod amúgy is eszik és szeret.",
    "tag": "etel",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Fizikai kártya, fejben a PIN",
    "text": "Legyen egy vagy több fizikai bankkártyád arra az esetre, ha leáll az internet vagy nem megy a mobilos fizetés, és jegyezd meg a PIN-kódjaidat.",
    "tag": "penz",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Töltött powerbank a mobilhoz",
    "text": "Tarts feltöltve egy powerbankot. Nagyobb vagy hosszabb áramszünetkor a telefon- és internethálózat leállhat.",
    "tag": "energia",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Számok a hűtőn",
    "text": "Írd fel a fontos telefonszámokat, és tedd ki őket például a hűtőre.",
    "tag": "info",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Tudd, hol kapsz homokzsákot",
    "text": "Ha a part közelében vagy mélyen fekvő területen élsz, nézz utána előre, hol szerezhetsz homokzsákot.",
    "tag": "otthon",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Szervezd meg a segítséget",
    "text": "Ha félreeső helyen élsz, vagy segítség kell a közlekedéshez, egyezz meg előre szomszédokkal, családdal vagy barátokkal.",
    "tag": "csalad",
    "source": "dk-brs-prepared"
   },
   {
    "title": "FM-rádió az autóban",
    "text": "Sok autóban van FM-rádió, amelyen követheted a DR vészhelyzeti adásait.",
    "tag": "info",
    "source": "dk-brs-prepared"
   },
   {
    "title": "A 112 csak vészhelyzetre",
    "text": "A 112-t csak valódi vészhelyzetben hívd, hogy ne foglald a vonalat az életmentő hívások elől. Ha a 112-vel gond van, a hatóságok más elérhetőséget tesznek közzé.",
    "tag": "info",
    "source": "dk-brs-prepared"
   },
   {
    "title": "Megosztás előtt ellenőrizz",
    "text": "Mielőtt megosztasz valamit, állj meg, gondolkodj, és ellenőrizd, ki küldte és honnan származik a hír (a „Vær kritisk”, azaz „Légy kritikus” kampány tanácsa).",
    "tag": "info",
    "source": "dk-gov-totalberedskab"
   },
   {
    "title": "Háromnapi gyógyszer",
    "text": "Tarts otthon három napra elegendő szükséges gyógyszert és egy elsősegélydobozt.",
    "tag": "egeszseg",
    "source": "dk-gov-totalberedskab"
   }
  ]
 },
 "EE": {
  "alerts": {
   "text": "Az EE-ALARM riasztórendszer helyalapú SMS-t küld (észt SIM-re „EE-ALARM” feladóval, külföldire a +372 5950 0000 számról, mindig a felelős hatóság nevével kezdve), és riaszt az „Ole valmis!” és az „Eesti äpp” alkalmazásban, szirénákkal, valamint az ETV/ETV+ és az ERR hírportál futószövegében is. A szirénának egyetlen jelentése van: azonnal keress menedéket, maradj távol az ablakoktól, és legyen legalább két fal közted és a külvilág között; a jel egyperces emelkedő-süllyedő hang, legalább háromszor ismételve 30 másodperces szünetekkel (összesen kb. 4 perc), főleg a nagyobb városokban, a kint tartózkodók figyelmeztetésére. Hogy egy riasztás valódi-e, a kriis.ee, az olevalmis.ee oldalon vagy az 1247-es vonalon ellenőrizheted.",
   "source": "ee-ov-eealarm"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Ha szirénát hallasz vagy „azonnal keress menedéket” EE-ALARM riasztást kapsz, ott keress menedéket, ahol épp vagy. Közvetlen légi fenyegetés idején a kinti mozgás életveszélyes.",
     "Menj a legközelebbi épületbe, a lehető legalacsonyabb szintre, ahol legalább két szilárd fal van közted és a külvilág között, távol ablakoktól és ajtóktól.",
     "Ha nem jutsz be épületbe, keress legalább egy oldalról védett helyet, például árkot vagy mélyedést. Végső esetben feküdj hasra, és kezeddel védd a fejed.",
     "Ha vezetsz, állj meg egy épület vagy természetes akadály mellett úgy, hogy ne zárd el a mentőautók útját, szállj ki, és keress menedéket. Az autó nem véd.",
     "Az iskolában vagy óvodában lévő gyerekekre a személyzet vigyáz, ne indulj el értük.",
     "Tartsd feltöltve a telefonod, és várd meg a veszély elmúltáról szóló értesítést az EE-ALARM csatornáin és a médiában."
    ],
    "source": "ee-ov-airthreat"
   },
   {
    "type": "blackout",
    "steps": [
     "Kapcsold ki az elektromos eszközeidet, és jelentsd az áramszünetet, ha a szolgáltató még nem jelentette be.",
     "Egy szobát tarts melegen: csukd be az ajtókat, ablakokat és szellőzőket.",
     "A hűtőt és a fagyasztót a lehető legritkábban nyisd ki.",
     "Takarékosan használd a telefont és a powerbankot, és zárd be a sok energiát fogyasztó alkalmazásokat.",
     "Kempingfőzőt, hordozható főzőt és grillt csak a szabadban használj.",
     "Kövesd a hivatalos híreket az ERR csatornáin és a Vikerraadión elemes vagy tekerős rádióval, illetve autórádióval."
    ],
    "source": "ee-ov-powercuts"
   },
   {
    "type": "nuclear",
    "steps": [
     "Gyorsan húzódj be a legközelebbi épületbe, és zárd be az ajtókat, ablakokat, a szellőzést és a kéménynyílásokat.",
     "Otthon az épület közepén vagy a pincében maradj, ablak és ajtó nélküli helyiségben (a „két fal szabálya”).",
     "Ha szennyezett területen voltál, bent vedd le a ruháidat, tedd zsákba, a zsákot hagyd kint, majd alaposan mosakodj meg szappannal és vízzel.",
     "Csak lezárt csomagolású ételt és italt fogyassz, kint ne egyél, ne igyál és ne dohányozz, a háziállatokat pedig hozd be.",
     "Jódtablettát csak akkor vegyél be, ha az észt hatóságok kifejezetten erre utasítanak.",
     "Maradj menedékben, amíg el nem múlik a veszély, és kövesd a hivatalos csatornákat."
    ],
    "source": "ee-ov-chemrad"
   },
   {
    "type": "flood",
    "steps": [
     "Nézz utána, árvízveszélyes területen van-e az otthonod, zárd le az alacsonyan lévő nyílásokat, és szükség esetén használj homokzsákot.",
     "Emeld magasabbra azokat a tárgyakat, amelyek megrongálódhatnak vagy szennyezést okozhatnak, például a vegyszereket és az üzemanyagot.",
     "Ha a víz betör az épületbe, kapcsold le az áramot, és menj magasabb szintre, a padlásra vagy a tetőre.",
     "Csak akkor gázolj árvízbe, ha feltétlenül muszáj; ha mégis, egy bottal ellenőrizd a mélységet.",
     "Ha bajban vagy, hívd a 112-t, és tedd magad láthatóvá. Csak akkor menj haza, ha a hatóságok engedélyezik."
    ],
    "source": "ee-ov-flood"
   },
   {
    "type": "heat",
    "steps": [
     "Hőségriasztáskor napközben takard le és tartsd csukva az ablakokat, éjszaka pedig szellőztess.",
     "Maradj bent, főleg 11:00 és 15:00 között.",
     "Igyál gyakran vizet akkor is, ha nem vagy szomjas, és kerüld az alkoholt.",
     "Soha ne hagyj gyereket vagy állatot parkoló autóban.",
     "Ha hőgutára gyanakszol (zavartság, láz, hányinger, szapora pulzus, ájulás), hívd a mentőket, és vidd az érintettet hűvös helyre."
    ],
    "source": "ee-ov-heat"
   },
   {
    "type": "evacuation",
    "steps": [
     "Ha kitelepítést rendelnek el, azonnal kövesd az utasítást.",
     "Csak a hivatalosan ajánlott útvonalakat használd.",
     "Szervezz szállást a veszélyzónán kívül, például nyaralóban vagy rokonoknál, barátoknál.",
     "Vigyél legalább egy, ideálisan három napra elegendő készletet: azonnal fogyasztható, energiadús ételt, vényköteles gyógyszereket, iratokat, készpénzt, bankkártyát és telefont töltővel.",
     "Az állami kitelepítési szálláshelyek főleg azoknak valók, akiknek nincs hová menniük."
    ],
    "source": "ee-ov-evac"
   },
   {
    "type": "cyber",
    "steps": [
     "Írd fel a fontos telefonszámokat (család, szomszédok, 112, 1247, helyi önkormányzat).",
     "Szerezz be elemes, dinamós vagy napelemes rádiót, és tartsd feltöltve a powerbankokat és a tartalékelemeket.",
     "Tarts otthon készpénzt, mert adatkiesésnél a kártyás fizetés és a Mobile-ID/Smart-ID (az észt mobilos azonosítás) leállhat.",
     "Ha gyenge a térerő, menj ki vagy magasabb helyre, és hívás helyett küldj SMS-t.",
     "Beszéljetek meg egy találkozóhelyet a családdal, és tudd meg, hol a legközelebbi rezilienciaközpont (helyi segítőpont).",
     "Ha egyáltalán nem tudsz kommunikálni, és sürgős segítség kell, menj a legközelebbi tűzoltóságra, rendőrségre vagy sürgősségi osztályra."
    ],
    "source": "ee-ov-comms"
   }
  ],
  "tips": [
   {
    "title": "Mindig legalább félig teli tank",
    "text": "Ha teheted, a tankod mindig legyen legalább félig tele. Így az autórádió is hírforrásod lehet.",
    "tag": "energia",
    "source": "ee-ov-powercuts"
   },
   {
    "title": "Egyheti készpénz otthon",
    "text": "Tegyél félre annyi készpénzt, ami egy hét alapvető kiadásait fedezi. Apróbb vásárlásokra akár egy persely is elég.",
    "tag": "penz",
    "source": "ee-ov-powercuts"
   },
   {
    "title": "112 térerő nélkül",
    "text": "Nyomógombos telefonon vedd ki a SIM-et, és hívd a 112-t; okostelefonon indítsd újra, hagyd ki a SIM PIN-kódot, és hívd a 112-t. Utána aktiváld újra a SIM-et, hogy a diszpécser vissza tudjon hívni.",
    "tag": "info",
    "source": "ee-ov-comms"
   },
   {
    "title": "Belföldi roaming válságban",
    "text": "Vészhelyzetben vagy háborúban az állam bekapcsolhatja a belföldi roamingot. Ilyenkor lehet, hogy a telefon beállításaiban kézzel kell másik szolgáltató hálózatát választanod.",
    "tag": "info",
    "source": "ee-ov-comms"
   },
   {
    "title": "Forrald 10 percig",
    "text": "A természetes forrásból származó vizet – az olvasztott havat is – forrald 10 percig, vagy használj szűrőt, víztisztító tablettát.",
    "tag": "viz",
    "source": "ee-ov-powercuts"
   },
   {
    "title": "Ha leáll a csatorna",
    "text": "Ha nem működik a csatornarendszer, béleld ki a WC-t szemeteszsákkal, vagy használj hordozható, illetve komposztáló toalettet.",
    "tag": "egeszseg",
    "source": "ee-ov-powercuts"
   },
   {
    "title": "Keresd meg a rezilienciaközpontot",
    "text": "Kérdezd meg az önkormányzatot, hol a legközelebbi rezilienciaközpont. Vészhelyzetben ott kapsz információt, tanácsot és segítséget.",
    "tag": "csalad",
    "source": "ee-ov-powercuts"
   },
   {
    "title": "Telepítsd a riasztó appokat",
    "text": "Telepítsd az „Eesti äpp” és az „Ole valmis!” alkalmazást, tartsd őket frissen, és kapcsold be az értesítéseket, hogy megkapd az EE-ALARM riasztásokat.",
    "tag": "info",
    "source": "ee-ov-airthreat"
   },
   {
    "title": "Nem minden riasztás menedék",
    "text": "„Lehetséges légi fenyegetés” esetén éld az életed, de légy éber, és keress menedéket, ha szirénát hallasz vagy erre utasítanak.",
    "tag": "info",
    "source": "ee-ov-airthreat"
   },
   {
    "title": "Forgasd a készletet",
    "text": "Ne tartsd a vészkészletet külön: a vizet, az ételt és a gyógyszereket folyamatosan használd és pótold, hogy semmi ne romoljon meg.",
    "tag": "etel",
    "source": "ee-ov-supplies"
   },
   {
    "title": "Vedd le a szennyezett ruhát",
    "text": "Sugárszennyezésnél a szennyezett ruha levétele a szennyeződés kb. 90%-át eltávolítja.",
    "tag": "egeszseg",
    "source": "ee-ov-chemrad"
   },
   {
    "title": "Vegyi balesetnél fel az emeletre",
    "text": "Távolodj el oldalszélben, menj felsőbb emeletre (sok veszélyes vegyi anyag lent gyűlik össze), és zárd be az ablakokat, szellőzőket és a kéménytolózárat.",
    "tag": "otthon",
    "source": "ee-ov-chemrad"
   },
   {
    "title": "Ragaszd le az ablakokat",
    "text": "Háborúban kövesd a megbízható forrásokat, és ellenőrizd az ismeretlen forrásból származó információt. Erős, vízálló szalaggal ragaszd le az ablakokat, hogy a kirepülő üveg kevesebb sérülést okozzon.",
    "tag": "otthon",
    "source": "ee-ov-military"
   },
   {
    "title": "Ha az utcán ér a veszély",
    "text": "Ha nincs a közelben épület, feküdj le egy fal vagy akadály mögé, és védd a fejed és a nyakad. Ha befogod a füled és kinyitod a szád, az véd a lökéshullám ellen.",
    "tag": "otthon",
    "source": "ee-ov-shelter"
   },
   {
    "title": "Ismerd a veszélyes üzemeket",
    "text": "Nézz utána, laksz vagy dolgozol-e veszélyes anyagokkal dolgozó létesítmény közelében. Az ottani balesetekről is a riasztórendszer értesít.",
    "tag": "otthon",
    "source": "ee-ov-eealarm"
   }
  ]
 },
 "PL": {
  "alerts": {
   "text": "Csak két szirénajel van: riasztás kezdete = 3 percig tartó, hullámzó hang; riasztás vége = 3 percig tartó, egyenletes hang. Riasztáskor kapcsold be a tévét vagy a rádiót; figyelmeztetés jöhet hangosbeszélőn, a médián, az RSO regionális riasztóalkalmazáson és az RCB Alert rendszeren (a kormányzati biztonsági központ közvetlenül a mobilodra küldött üzenete) keresztül is – ha nem tudod hívni a 112-t, használd az Alarm112 alkalmazást.",
   "source": "pl-rcb-poradnik-en"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Riasztáskor indulj el az előre megtervezett útvonalon az óvóhelyre, és vidd a menekülőhátizsákodat.",
     "Lépcsőt használj, ne liftet. A jó óvóhely ablaktalan, vastag födémű és falú, van levegőellátása és vészkijárata.",
     "Ha nincs kijelölt óvóhely, maradj otthon az ablakoktól távol, teherhordó falak mellett, a lakás belső helyiségeiben.",
     "Szabadban keress pincét, mélygarázst, alagutat vagy aluljárót – még egy gödör is jobb a nyílt terepnél. Ha a szabadban robbanást hallasz, vesd magad a földre (lehetőleg mélyedésbe), és védd a fejed.",
     "Ne hagyd el idő előtt az óvóhelyet; hívás helyett írj SMS-t, hogy ne terheld a hálózatot, és segíts a körülötted lévőknek."
    ],
    "source": "pl-rcb-poradnik-en"
   },
   {
    "type": "blackout",
    "steps": [
     "Készíts elő tartalék világítást (zseblámpa, pótelem), fűtést (gázkályha, olajkályha, kandalló) és kommunikációt (elemes rádió, adóvevő, CB-rádió).",
     "Töltsd fel a powerbankokat, és kapcsold a telefont energiatakarékos módba.",
     "Tarts fogyasztásra kész ételt, fejenként napi legalább 3 liter vizet, valamint készpénzt különböző címletekben.",
     "Tartsd meg a meleget: gyűljetek össze egy szobában.",
     "A hűtőt és a fagyasztót a lehető legritkábban nyisd ki; húzd ki az összes elektromos készüléket."
    ],
    "source": "pl-rcb-poradnik-en"
   },
   {
    "type": "nuclear",
    "steps": [
     "CBRN-riasztáskor figyelmeztesd a veszélyzónában lévőket, és hagyd el a veszélyeztetett területet.",
     "Ha bent maradsz: zárd be és tömítsd az ablakokat és a szellőzőket, zárd el a kályha és a kandalló huzatát, kapcsold ki a légkondit.",
     "Autóban: húzd fel az ablakokat, kapcsold ki a légkondit és a szellőzést, és hajts ki a veszélyzónából.",
     "Ha kintről jössz be, vedd le a szennyezett ruhát, ne egyél esetleg szennyezett ételt, mosakodj szappannal folyó víz alatt (előbb a kezed, aztán az arcod), majd zuhanyozz le.",
     "Az esetleg szennyezett tárgyakat tedd szorosan lezárt, felcímkézett nejlonzacskóba. Sugárveszélynél készülj fel, hogy legalább néhány napig egy lezárt épületben kell maradnod."
    ],
    "source": "pl-rcb-poradnik-en"
   },
   {
    "type": "flood",
    "steps": [
     "Készítsd elő a menekülőhátizsákot, és nézd meg, kell-e segítség a szomszédoknak.",
     "Védd az otthonod: homokzsákok, tömített ajtók és ablakok; az értékeket és az elektromos eszközöket vidd fel az emeletre.",
     "Kapcsold le az áramot és a gázt, zárd le a csatornanyílásokat, és parkolj biztonságos helyen úgy, hogy ne zárd el az utat.",
     "Ha elrendelik az evakuálást, soha ne maradj ott a holmid miatt.",
     "Ha nem tudsz elmenni, tűzz ki zászlót: fehér = evakuálni kell, piros = orvosi segítség kell, kék = étel és víz kell."
    ],
    "source": "pl-rcb-poradnik-en"
   },
   {
    "type": "fire",
    "steps": [
     "Ha tüzet vagy füstöt látsz, hívd a 112-t; csak kis tüzet próbálj eloltani.",
     "Elektromos tüzet, égő olajat vagy zsírt soha ne olts vízzel; az égő serpenyőt takard le fedővel, pokróccal vagy nedves ruhával.",
     "Takard el a szád és az orrod, lehetőleg nedves textillel; lépcsőt használj, soha ne liftet.",
     "Ne nyiss ablakot vagy ajtót – kevesebb levegő lassítja a tüzet.",
     "Ha biztonságos, zárd el a fő gázcsapot és az áramot; szólj a mentőknek, ha maradt bent valaki, és hol."
    ],
    "source": "pl-rcb-poradnik-en"
   },
   {
    "type": "evacuation",
    "steps": [
     "Csukd be az ablakokat, zárd el a vizet, kapcsold ki az elektromos és gázkészülékeket, olts el minden tüzet (tűzhely, kandalló).",
     "Öltözz az időjárásnak megfelelően; a gyerekeknél legyen ott a gondviselő elérhetősége; vidd a menekülőhátizsákot.",
     "Szólj a szomszédoknak, és segíts az időseknek és a fogyatékkal élőknek.",
     "Szervezett szállítással vagy gyalog menj a kijelölt helyre; ha autóval mész, ne zárd el a menekülési útvonalakat.",
     "Mondd el a szeretteidnek, hová mész; az iratodat soha ne add oda fuvart kínálóknak – küldd el a szeretteidnek a jármű rendszámát."
    ],
    "source": "pl-rcb-poradnik-en"
   },
   {
    "type": "cyber",
    "steps": [
     "Ellenőrizd az információt több független forrásban, és ne terjessz ellenőrizetlen hírt.",
     "Ne higgy semmilyen hírnek az állam összeomlásáról vagy a megadásról.",
     "Soha ne fotózd, filmezd vagy oszd meg a lengyel és szövetséges csapatok vagy a kulcsfontosságú létesítmények (hidak, állomások, raktárak) helyét és mozgását.",
     "Gyanús üzenetben ne kattints linkre vagy mellékletre; a lengyel ékezetek hibái csalásra utalhatnak.",
     "Használj kétlépcsős azonosítást, erős jelszót és biztonsági mentést; a csalást jelentsd az incydent.cert.pl oldalon vagy az mObywatel alkalmazásban, a gyanús SMS-t pedig továbbítsd a 8080-ra."
    ],
    "source": "pl-rcb-poradnik-en"
   }
  ],
  "tips": [
   {
    "title": "Jelöld meg az elzárókat",
    "text": "Jelöld meg jól láthatóan (például színes szalaggal) a gáz, az áram és a víz elzáróit, és gyakoroljátok együtt az elzárásukat.",
    "tag": "otthon",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Keresd meg a legbiztonságosabb pontot",
    "text": "Jelöld ki előre a lakás legbiztonságosabb helyét: ablakoktól távol, teherhordó falak mellett, egy belső helyiségben.",
    "tag": "otthon",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Mindenkinek saját hátizsák",
    "text": "A háztartás minden tagjának, a gyerekeknek is, legyen saját menekülőhátizsákja.",
    "tag": "csalad",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Iratmásolat pendrive-on",
    "text": "Tarts iratmásolatokat egy pendrive-on a menekülőhátizsákban, mellette készpénzt különböző címletekben.",
    "tag": "penz",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Papírtérkép, ha nincs GPS",
    "text": "Legyen nálad papírtérkép vagy autós atlasz – a GPS nem biztos, hogy működik.",
    "tag": "info",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Szükség-WC folyóvíz nélkül",
    "text": "Bélelj ki egy vödröt nejlonzsákkal, és a hulladékot szórd meg földdel, fűrészporral vagy murvával a szag ellen. Vizelni folyóvíz nélkül is lehet a rendes WC-be.",
    "tag": "egeszseg",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Vércsoportkártya mindig nálad",
    "text": "Csináltass vércsoportkártyát (véradóközpontban vagy laborban, akkor is, ha nem vagy véradó), és hordd magadnál.",
    "tag": "egeszseg",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Nézd meg a tetanuszoltásod",
    "text": "A tetanusz, diftéria és szamárköhögés elleni oltás 10 évig érvényes – nézd meg, kell-e emlékeztető.",
    "tag": "egeszseg",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Azonosító gyereknek, idősnek, kisállatnak",
    "text": "A gyerekeknek és időseknek készíts névvel, vezetéknévvel és telefonszámmal ellátott azonosítót; a háziállatokat chipeztesd vagy jelöld meg.",
    "tag": "csalad",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Családi válságterv találkozóponttal",
    "text": "Készíts családi válságtervet közeli és a településeden kívüli találkozóponttal arra az esetre, ha elszakadtok egymástól, és nem tudtok kommunikálni.",
    "tag": "csalad",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "A segély mindig ingyenes",
    "text": "A humanitárius segély mindig ingyenes – senki nem kérhet érte pénzt vagy szívességet.",
    "tag": "penz",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Hagyd otthon az autót",
    "text": "Válságban korlátozd az autózást – az utaknak járhatónak kell maradniuk a mentőszolgálatok és a katonai szállítás számára.",
    "tag": "energia",
    "source": "pl-rcb-poradnik-en"
   },
   {
    "title": "Végezz el egy elsősegély-tanfolyamot",
    "text": "Válságban a kórházak túlterheltek lesznek, nem életveszélyes helyzetben magadról kell gondoskodnod. Végezz el egy elsősegély-tanfolyamot.",
    "tag": "egeszseg",
    "source": "pl-rcb-poradnik-en"
   }
  ]
 },
 "SK": {
  "alerts": {
   "text": "A szirénát szóbeli üzenet követi (pl. „POZOR, VZDUŠNÝ POPLACH!” – figyelem, légiriadó). Általános veszély: 2 perces hullámzó hang, háborúban ugyanez jelzi a lehetséges légitámadást; vízveszély: 6 perces egyenletes hang; veszély vége: 2 perces egyenletes hang ismétlés nélkül. Szirénapróba általában a hónap második péntekén 12:00-kor; az elektronikus szirénák a lakott beépített területek kb. 85%-át fedik le.",
   "source": "sk-minv-kriza"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Ha kint vagy, keress minél gyorsabban menedéket, vagy menj be a legközelebbi épületbe.",
     "Otthon gyűjtsd össze a családot, és ne hagyd el a lakást; húzódjatok biztonságos helyre, például pincébe vagy zárt helyiségbe.",
     "Ne indulj a gyerekekért az iskolába vagy az óvodába – ott gondoskodnak róluk.",
     "Olts el minden nyílt lángot és tüzelőberendezést.",
     "Kövesd a rádiót és a tévét; csak sürgős esetben telefonálj, ne hívd feleslegesen a segélyhívót, és várd otthon a további utasításokat."
    ],
    "source": "sk-minv-sirena"
   },
   {
    "type": "blackout",
    "steps": [
     "Tarts italt és élelmiszert a háztartás minden tagjának legalább 14 napra (fejenként napi legalább 4 liter víz).",
     "Készíts tartalék világítást (LED-lámpa, gyertya, öngyújtó, zseblámpa pótelemmel, fejlámpa) és főzési lehetőséget (szilárd vagy denaturált szesz, gázfőző, grill) – óvatosan kezeld őket.",
     "Legyen elemes rádiód pótelemmel; az autórádióra is gondolj.",
     "Tarts elsősegélycsomagot a felírt gyógyszereiddel, készpénzt (kb. a heti bevásárlás kétszeresét) és tisztálkodószereket.",
     "Maradj melegben: öltözz rétegesen, gyűljetek egy szobába, tömítsd az ablakokat és ajtókat, takard le a padlót; alvás előtt olts el gyertyát és fűtőtestet, és rendszeresen szellőztess."
    ],
    "source": "sk-minv-kriza"
   },
   {
    "type": "nuclear",
    "steps": [
     "Ha kint vagy, azonnal menj be a legközelebbi épületbe, és húzódj zárt helyiségbe.",
     "Ha szennyeződhettél: a felsőruhát és a cipőt belépés előtt tedd légmentes zacskóba, moss kezet, arcot és hajat, öblítsd ki a szemed és a szád, zuhanyozz le, és cserélj alsóneműt.",
     "Maradj a földszinti belső helyiségekben vagy a pincében; zárd és tömítsd az ablakokat és ajtókat, kapcsold ki a szellőzést, és zárj le minden nyílást.",
     "Az ételt és a vizet tárold légmentes edényben; ne egyél védelem nélkül tárolt ételt, gyümölcsöt vagy zöldséget.",
     "Készíts elő evakuációs csomagot, és csak a mentők utasítására vagy hivatalos felhívásra hagyd el az épületet."
    ],
    "source": "sk-minv-kriza"
   },
   {
    "type": "flood",
    "steps": [
     "Csukd be az összes ablakot és ajtót; kövesd az időjárást és a híreket.",
     "Távolítsd el a vízzel reakcióba lépő anyagokat (mérgek, savak, maró anyagok); kapcsold le az áramot, a vizet és a gázt.",
     "Készíts elő evakuációs csomagot, és győződj meg róla, hogy a rokonok és a szomszédok tudnak a helyzetről.",
     "Soha ne hajts át ismeretlen mélységű elárasztott úton; ha az autódat elönti a víz, gyorsan szállj ki.",
     "Ha kevés az idő, hagyj abba mindent, menj biztonságos, magas helyre, onnan hívd a 112-t, és várd az utasításokat."
    ],
    "source": "sk-minv-kriza"
   },
   {
    "type": "heat",
    "steps": [
     "Ahol lehet, maradj árnyékban; igyál rendszeresen, egyél könnyű ételt, és öltözz az időjárásnak megfelelően.",
     "Árnyékold az otthonod és a munkahelyed a közvetlen napfénytől (roló, zsalu).",
     "Naponta legalább egyszer zuhanyozz langyos (nem túl hideg) vízzel; használj UV-védő krémet.",
     "Soha ne hagyj gyereket vagy állatot parkoló autóban.",
     "Biztosíts az állatoknak elég vizet és árnyékot."
    ],
    "source": "sk-minv-kriza"
   },
   {
    "type": "cold",
    "steps": [
     "Ne tartózkodj sokáig fagyos levegőn; a sportot vidd be fedett helyre.",
     "Fagyott fémtárgyat ne fogj meg csupasz kézzel.",
     "Kezedre és arcodra zsíros krémet, ajkadra zsíros ajakbalzsamot használj.",
     "Viselj több réteget, meleg zoknit, sapkát, sálat, kesztyűt, valamint szél-, eső- és hóálló felsőruhát; legyen nálad tartalék ruha, ha átáznál.",
     "Védd a háziállatokat a fagytól."
    ],
    "source": "sk-minv-kriza"
   },
   {
    "type": "fire",
    "steps": [
     "Biztonságos helyről azonnal jelentsd a tüzet a 150-es vagy a 112-es számon.",
     "Ha lehet, oltsd el vagy akadályozd a terjedését; zárd el a gázt és az áramot.",
     "Azonnal hagyd el a veszélyeztetett területet, és figyelmeztesd a veszélyben lévőket.",
     "Hagyd szabadon a bejutási utakat a mentőknek – legalább 3 méter szélességben."
    ],
    "source": "sk-minv-kriza"
   },
   {
    "type": "evacuation",
    "steps": [
     "Ismerd a településed evakuációs útvonalait és gyülekezőhelyeit; beszéld meg a családdal, hogyan találkoztok és éritek el egymást, ha nincs mobilhálózat.",
     "Indulás előtt zárd el a gázt, a vizet és az áramot, zárd be az ajtókat és ablakokat (árvíznél az értékeket tedd minél magasabbra).",
     "Kövesd a rendőrség és a tűzoltóság utasításait, indulj gyorsan, de biztonságosan, és kerüld az elárasztott vagy beomlott részeket.",
     "Szervezett evakuálásnál a csomagkorlát felnőttenként 25 kg, gyerekenként 15 kg, plusz 5 kg kézipoggyász.",
     "Érkezéskor regisztrálj a hatóságoknál; csak a veszély elmúltával térj haza, és fotózd le a károkat a biztosítónak."
    ],
    "source": "sk-minv-kriza"
   }
  ],
  "tips": [
   {
    "title": "Fotózd le az irataidat",
    "text": "Evakuálás előtt fényképezd le a telefonodra a legfontosabb irataidat (személyi igazolvány, egészségbiztosítási kártya).",
    "tag": "penz",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Fagyaszd le a PET-palackokat",
    "text": "A lefagyasztott vizes PET-palack hűtőakkuként és tartalék ivóvízként is jó. Ne töltsd tele, mert szétrepedhet.",
    "tag": "viz",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Tárold sötétben, hűvösen",
    "text": "A vizet sötét, hűvös helyen, alaposan kitisztított palackban vagy kannában tárold; ha bizonytalan a minősége, forrald fel.",
    "tag": "viz",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Előbb a hűtő tartalma",
    "text": "Áramszünetben először a hűtőben lévő ételt edd meg, a fagyasztót pedig feleslegesen ne nyisd ki.",
    "tag": "etel",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Télen a kint is hűtő",
    "text": "Télen néhány élelmiszert kint is tárolhatsz – védd a madaraktól és más állatoktól.",
    "tag": "etel",
    "source": "sk-minv-kriza"
   },
   {
    "title": "WC-terv vízhiányra",
    "text": "Legyen terved arra, hogyan használod a WC-t, ha napokig nincs víz.",
    "tag": "egeszseg",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Fontos számok papíron",
    "text": "Írd fel a fontos telefonszámokat papírra.",
    "tag": "info",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Ne halmozz gyógyszert",
    "text": "Ne tarts túlzott mennyiségű gyógyszert otthon; figyeld a lejárati időt, és tartsd gyerekektől elzárva.",
    "tag": "egeszseg",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Vegyi szivárgásnál ne a pincébe",
    "text": "Vegyi szivárgásnál soha ne húzódj pincébe vagy mélyedésbe, mert a gázok lesüllyednek – menj zárt, tömített helyiségbe.",
    "tag": "otthon",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Tömítsd a réseket",
    "text": "A réseket zárd le ragasztószalaggal; a nagyobb hézagokba mosószeres vízzel átitatott textilt tömhetsz.",
    "tag": "otthon",
    "source": "sk-minv-sirena"
   },
   {
    "title": "Ne posztolj képeket támadás után",
    "text": "Terrortámadás után ne ossz meg képeket a közösségi médiában – visszaélhetnek velük.",
    "tag": "info",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Beszélj nyugodtan a gyerekkel",
    "text": "Egyszerűen és nyugodtan beszélj a gyerekekkel, nyugtasd meg őket, hogy nem maradnak egyedül, és bátorítsd őket, hogy kérdezzenek.",
    "tag": "csalad",
    "source": "sk-minv-kriza"
   },
   {
    "title": "Próba csak második pénteken",
    "text": "A szirénapróba a hónap második péntekén 12:00-kor van – ha máskor szól a sziréna, az valódi riasztás.",
    "tag": "info",
    "source": "sk-minv-kriza"
   }
  ]
 },
 "RO": {
  "alerts": {
   "text": "Szirénajelek: katasztrófariasztás = 5 hosszú (16 mp-es) hang 10 mp szünetekkel; légiriadó-előriasztás = 3 nagyon hosszú (32 mp-es) hang 12 mp szünetekkel; légiriadó = 15 rövid (4 mp-es) hang 4 mp szünetekkel; riasztás vége = 2 perces folyamatos hang. A RO-Alert (az országos telefonos riasztórendszer) élet- és egészségveszély esetén automatikusan üzenetet küld az érintett terület minden telefonjára; a DSU mobilalkalmazás is küld riasztásokat.",
   "source": "ro-dsu-ghid-criza"
  },
  "guides": [
   {
    "type": "nuclear",
    "steps": [
     "Menj be bármilyen épületbe (lehetőleg tégla- vagy többszintes épületbe) – a jármű nem véd. Húzódj a pincébe vagy az épület közepére, távol a tetőtől és a külső falaktól.",
     "Zárd be az ablakokat és ajtókat, tömítsd őket szalaggal vagy textillel, kapcsold ki a ventilátort, a légkondit és a szellőzést, zárd el a kandallót.",
     "Vedd le a szennyezett ruhát, és mosd le a fedetlen bőrt és a hajat (sampon vagy szappan, balzsam nélkül); a háziállatokat hozd be.",
     "Maradj bent 24 órán át, hacsak mást nem mondanak; ne menj a gyerekekért az iskolába – ott védett helyen vannak.",
     "Kálium-jodidot csak a hatósági bejelentést követő első 6 órában vegyél be, egyszeri adagban: felnőtt és 12 év feletti gyerek = 2 tabletta (100 mg); 3–12 év = 1; 1 hónap–3 év = ½; újszülött = ¼."
    ],
    "source": "ro-fiipregatit-nuclear"
   },
   {
    "type": "blackout",
    "steps": [
     "Húzd ki a felesleges elektromos eszközöket és a működésben lévő gépeket; hagyj felkapcsolva egy villanykapcsolót, hogy lásd, mikor jön vissza az áram.",
     "Hallgasd az elemes rádiót, nézz rá az idős vagy fogyatékkal élő szomszédokra, és kerüld a felesleges autózást.",
     "Tartsd zárva a hűtőt és a fagyasztót: a zárt hűtő kb. 4 órán át, a tele fagyasztó kb. 48 órán át (félig telve 24 órán át) tartja hidegen az ételt.",
     "Gyűljetek össze egy kevés külső fallal rendelkező szobában, építsetek takarókból „sátrat”, takarjátok le a padlót, és zárjátok el az ajtók huzatát.",
     "Kempinggázfőzőt vagy grillt soha ne használj bent, és soha ne járasd az autót a garázsban eszköztöltés miatt (szén-monoxid).",
     "Amikor visszajön az áram, egyenként kapcsold vissza a készülékeket."
    ],
    "source": "ro-fiipregatit-blackout"
   },
   {
    "type": "heat",
    "steps": [
     "A legmelegebb órákban (11:00–18:00) maradj bent; árnyékold az ablakokat függönnyel, rolóval vagy zsalugáterrel.",
     "Igyál naponta kb. 8 pohár vizet vagy folyadékot, ne várd meg a szomjúságot; kerüld az alkoholt és a kávét, erős izzadásnál pótold az elektrolitokat.",
     "Viselj könnyű, bő, világos ruhát, kalapot, napszemüveget és legalább 30-as faktorú naptejet; zuhanyozz hűvös vízzel.",
     "A légkondit legfeljebb 5 °C-kal állítsd a külső hőmérséklet alá; kora reggel vagy késő este szellőztess; ha nincs légkondi, menj hűvös közösségi helyre (bevásárlóközpont, könyvtár).",
     "Soha ne hagyj embert vagy állatot zárt autóban; nézz rá a veszélyeztetett emberekre."
    ],
    "source": "ro-fiipregatit-canicula"
   },
   {
    "type": "flood",
    "steps": [
     "Kövesd a helyi és a RO-Alert figyelmeztetéseket; legyen evakuációs terved, találkozópontod és vészhelyzeti hátizsákod.",
     "Ha van időd: vidd fel az értékeket az emeletre, rakj homokzsákgátat, zárd el a közműveket és a főkapcsolót.",
     "Húzódj magaslatra, felső emeletre vagy a tetőre, és várd a mentőket; kiabálás helyett sípolj, és jelezz világos textillel vagy „AJUTOR!” (segítség) feliratú táblával.",
     "Ne gyalogolj és ne vezess az árvízben: 15 cm gyors víz ledönthet a lábadról, 30 cm elsodorhat egy autót.",
     "Kerüld a szennyezett vizet és a leszakadt vezetékeket; csak akkor menj vissza az otthonodba, ha a hatóságok szerint biztonságos."
    ],
    "source": "ro-fiipregatit-inundatii"
   },
   {
    "type": "cold",
    "steps": [
     "Készíts vészhelyzeti csomagot élelemmel, vízzel, gyógyszerrel, meleg ruhával és takaróval legalább három napra.",
     "Tudd, hová mehetsz, ha leáll a fűtés (egy barátodhoz vagy fűtött közösségi helyre).",
     "Tarts sót vagy homokot, lapátot, jégkaparót és tüzelőt; védd a vízvezetéket a fagytól.",
     "Soha ne fűts gáztűzhellyel vagy sütővel; tisztíttasd a kéményt; az aggregátort szabályosan használd (szén-monoxid).",
     "35 °C alatti testhőmérséklet (kihűlés) esetén azonnal kell orvosi segítség; a fagyási sérülést lassan, meleg vízben melegítsd, soha ne közvetlen hővel."
    ],
    "source": "ro-fiipregatit-iarna"
   },
   {
    "type": "cyber",
    "steps": [
     "Kérdezd meg: ki tette közzé, mi a célja, ellenőrizhető-e hiteles forrásból?",
     "Ellenőrizd az információt több különböző forrásban, és a hivatalos, bevált forrásokat részesítsd előnyben.",
     "Ne ossz meg ellenőrizetlen vagy pánikkeltő tartalmat; a gyanús tartalmat jelentsd a platformnak vagy a hatóságoknak.",
     "Feszült időszakban tölts kevesebb időt a közösségi médiában, és a gyerekeknek csak ellenőrzött információval magyarázd el az eseményeket.",
     "Kiberincidenst jelents a DNSC-nek az 1911-es számon vagy az alerte@dnsc.ro címen."
    ],
    "source": "ro-fiipregatit-dezinformare"
   }
  ],
  "tips": [
   {
    "title": "Víz a háziállatnak is",
    "text": "A háziállatnak naponta kb. 30 ml vizet számolj testtömeg-kilogrammonként.",
    "tag": "csalad",
    "source": "ro-dsu-ghid-criza"
   },
   {
    "title": "Évente új elem a rádióba",
    "text": "A rádióban évente cseréld az elemeket.",
    "tag": "info",
    "source": "ro-dsu-ghid-criza"
   },
   {
    "title": "Síp a csomagba",
    "text": "Tegyél sípot a csomagba, hogy jelezni tudj, ha segítség kell.",
    "tag": "csalad",
    "source": "ro-dsu-ghid-criza"
   },
   {
    "title": "SMS hívás helyett",
    "text": "Válságban korlátozd a telefonálást, és a nem sürgős ügyekben írj SMS-t, hogy szabadon maradjanak a vonalak a mentőknek.",
    "tag": "info",
    "source": "ro-dsu-ghid-criza"
   },
   {
    "title": "Építs tartalékalapot",
    "text": "Képezz pénzügyi tartalékot válsághelyzetekre, és tarts otthon ésszerű mennyiségű készpénzt.",
    "tag": "penz",
    "source": "ro-dsu-ghid-criza"
   },
   {
    "title": "Elemes szén-monoxid-érzékelő",
    "text": "Vegyél elemes szén-monoxid-érzékelőt, és szereld fel az otthonod minden szintjén.",
    "tag": "otthon",
    "source": "ro-fiipregatit-blackout"
   },
   {
    "title": "Tartsd tele a tankot",
    "text": "Tartsd tele az autó tankját – a benzinkutaknak áram kell a kútoszlopokhoz.",
    "tag": "energia",
    "source": "ro-fiipregatit-blackout"
   },
   {
    "title": "Nyisd a kaput kézzel",
    "text": "Győződj meg róla, hogy kézzel is ki tudod nyitni a bejárati vagy a garázsajtót.",
    "tag": "otthon",
    "source": "ro-fiipregatit-blackout"
   },
   {
    "title": "A 4 °C-os szabály",
    "text": "Az érintésre még hideg (4 °C alatti) étel biztonságos; 4 °C fölött legfeljebb két órán át tartható és fogyasztható, utána ki kell dobni.",
    "tag": "etel",
    "source": "ro-fiipregatit-blackout"
   },
   {
    "title": "Aggregátort ne a hálózatra",
    "text": "Az eszközöket közvetlenül a hordozható aggregátor aljzatába dugd – az aggregátort soha ne kösd közvetlenül a ház villamos hálózatára.",
    "tag": "energia",
    "source": "ro-fiipregatit-blackout"
   },
   {
    "title": "Agyagedényes hűtő áram nélkül",
    "text": "Tegyél egy kis cserépedényt egy nagyobba, közéjük nedves homokot, takard le nedves ruhával, és naponta nedvesítsd újra – így áram nélkül is hűvösen tarthatod az ételt.",
    "tag": "etel",
    "source": "ro-fiipregatit-blackout"
   },
   {
    "title": "Figyeld a vizelet színét",
    "text": "A vizelet színéből látod, eleget iszol-e: ha sötétsárga, igyál több vizet és pótold az elektrolitokat.",
    "tag": "egeszseg",
    "source": "ro-fiipregatit-canicula"
   },
   {
    "title": "Gyors UV-teszt az árnyékoddal",
    "text": "Ha az árnyékod rövidebb, mint te magad, magas az UV-sugárzás.",
    "tag": "egeszseg",
    "source": "ro-fiipregatit-canicula"
   },
   {
    "title": "Segélyhívó számok papíron is",
    "text": "A segélyhívó számokat ne csak a telefonodon tárold, hanem papíron is.",
    "tag": "info",
    "source": "ro-fiipregatit-blackout"
   }
  ]
 },
 "FR": {
  "alerts": {
   "text": "Több mint 5000 sziréna működik, próbájuk minden hónap első szerdáján van. Riasztás: három 1 perc 41 másodperces szakasz 5 másodperces szünetekkel; riasztás vége: 30 másodperces folyamatos hang; gátak közelében „ködkürt” jel szól (2 perces ciklus, 2 mp hang / 3 mp szünet). Az FR-Alert (a francia telefonos riasztórendszer) közvetlen veszély esetén automatikus, hangjelzéses értesítést küld a telefonodra az eseményről és a teendőkről.",
   "source": "fr-sgdsn-tous-responsables"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Ne maradj járműben; ha kint vagy, menj be egy épületbe.",
     "Maradj távol az ablakoktól, ne nyisd ki őket, és ne gyújts semmilyen lángot.",
     "A hatóságok utasítása nélkül ne menj ki, és ne hagyd el a menedéket.",
     "Kerüld a telefonálást, hogy a hálózat szabad maradjon a mentőknek; a hivatalos csatornákat kövesd (rádió, tévé, FR-Alert).",
     "Ne menj a gyerekekért az iskolába – a személyzet és a mentők gondoskodnak róluk."
    ],
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "type": "nuclear",
    "steps": [
     "Húzódj be egy épületbe; ha járműben vagy, menj be egy épületbe.",
     "Zárd be és tömítsd az ajtókat és ablakokat, kapcsold ki a szellőzést.",
     "Ne nyúlj a kint hagyott tárgyakhoz (például járművekhez).",
     "Jódtablettát csak a prefektus utasítására vegyél be."
    ],
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "type": "flood",
    "steps": [
     "Ne ülj autóba – néhány cm víz is elsodorhatja.",
     "Ne menj pincébe vagy mélygarázsba.",
     "Ha lehetséges és biztonságos, zárd el a gázt, az áramot és a fűtést.",
     "Maradj távol a folyóktól, partoktól és hidaktól, és maradj védett helyen.",
     "Csak a hatóságok utasítására evakuálj; kövesd a Météo-France és a Vigicrues előrejelzéseit."
    ],
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "type": "fire",
    "steps": [
     "(Erdőtűz) Maradj vagy húzódj épületbe, amíg megérkezik a segítség; ne ülj autóba.",
     "Zárd el a szellőzőket és az ajtók alját, hogy ne jusson be a mérgező füst és a parázs.",
     "Takard el az orrod és a szád nedves ruhával."
    ],
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "type": "cold",
    "steps": [
     "Öltözz jól, főleg a fejedre és a végtagjaidra figyelj; védd az orrod és a szád, és viselj jó, csúszásmentes cipőt.",
     "Korlátozd a fizikai megerőltetést, és ne vidd ki a csecsemőket.",
     "Ne fűtsd túl a lakást, de szellőztess; ellenőriztesd a kazánt; kerüld a tüzelőanyagos kiegészítő fűtőtestek folyamatos használatát.",
     "Ne az alkoholtól várd, hogy felmelegít – elfedi a kihűlés figyelmeztető jeleit.",
     "Ha autóban rekedsz: óránként 10 percig járasd a motort résnyire nyitott ablakkal, és ellenőrizd, hogy a hó nem tömítette-e el a kipufogót (szén-monoxid)."
    ],
    "source": "fr-infogouv-froid"
   },
   {
    "type": "heat",
    "steps": [
     "Igyál rendszeresen vizet, ne várd meg a szomjúságot.",
     "Nedvesítsd be a tested (legalább az arcod és az alkarod) naponta többször.",
     "Kerüld az alkoholt és a megerőltetést; a legmelegebb órákban minél kevesebbet légy kint.",
     "Tölts naponta néhány órát hűvös helyen (mozi, könyvtár, szupermarket).",
     "Napközben tartsd zárva az ablakokat és a zsalukat, este vagy éjjel nyisd ki, ha hűvösebb; tartsd a kapcsolatot a veszélyeztetett rokonokkal."
    ],
    "source": "fr-santefr-chaleur"
   },
   {
    "type": "evacuation",
    "steps": [
     "Vidd a vészhelyzeti csomagot, a gyógyszereket, a recepteket, a személyi igazolványt, a fontos iratok másolatát és a mobilodat.",
     "Zárd be az otthonod.",
     "A hatóságok által kijelölt útvonalon haladj.",
     "Csak a hatóságok engedélyével térj haza."
    ],
    "source": "fr-infogouv-se-preparer"
   },
   {
    "type": "cyber",
    "steps": [
     "Megosztás előtt ellenőrizd a forrást, a szerzőt és a dátumot.",
     "Kérdezd meg: ki küldte, hivatalos-e a forrás, megjelent-e egy nagy országos médiumban, mi a célja? Óvakodj a mesterséges intelligenciával készült hamis videóktól.",
     "Csak a hivatalos csatornákat kövesd (kormány, prefektúra, polgármesteri hivatal, rádió, tévé), és ne terjessz pletykát.",
     "Ügyelj az informatikai biztonságra: erős jelszó, rendszeres frissítés, vírusirtó, óvatosság a váratlan üzenetekkel; áldozatként a 17cyber.gouv.fr oldalon kérhetsz segítséget.",
     "Az illegális tartalmat jelentsd a Pharos felületen (internet-signalement.gouv.fr); internet nélkül fordulj a rendőrséghez, a csendőrséghez vagy a polgármesteri hivatalhoz."
    ],
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "type": "pandemic",
    "steps": [
     "Moss kezet naponta többször szappannal, vagy használj kézfertőtlenítőt.",
     "Használj eldobható papír zsebkendőt; tüsszentéskor takard el az orrod és a szád.",
     "Rendszeresen szellőztesd a lakóhelyiségeket.",
     "Viselj maszkot.",
     "(Madárinfluenza) Állatokkal való érintkezés után mindig moss kezet."
    ],
    "source": "fr-sgdsn-tous-responsables"
   }
  ],
  "tips": [
   {
    "title": "Évente kétszer nézd át a csomagot",
    "text": "Évente kétszer ellenőrizd a csomagot (a gyógyszerek és az élelmiszerek lejárati idejét), és cseréld az elemeket.",
    "tag": "etel",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Tartalék szemüveg",
    "text": "Tegyél egy tartalék szemüveget a csomagba.",
    "tag": "egeszseg",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Pótkulcs a csomagban",
    "text": "Tarts a csomagban egy pótkulcsot a lakáshoz és az autóhoz.",
    "tag": "otthon",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Iratmásolat vízálló tokban",
    "text": "A fontos iratok (személyi igazolvány, receptek) fénymásolatát vízálló tokban tartsd.",
    "tag": "penz",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Főzés nélküli tartós étel",
    "text": "Válassz főzést nem igénylő, tartós élelmiszert; ha kell, tegyél be használatra kész folyékony tápszert és állateledelt is.",
    "tag": "etel",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Víztisztító tabletta csak végszükségben",
    "text": "A víztisztító tablettát csak végső esetben használd.",
    "tag": "viz",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Könyv és játék a csomagba",
    "text": "Tegyél könyveket és játékokat a csomagba, hogy teljen az idő.",
    "tag": "csalad",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "SMS, hogy szabad maradjon a hálózat",
    "text": "Telefonálás helyett írj SMS-t, hogy szabad maradjon a hálózat – és számolj azzal, hogy a telefon és az internet leállhat.",
    "tag": "info",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Figyelj az egyedül élőkre",
    "text": "Keresd meg az egyedül élőket a házadban vagy a környéken, és állapodj meg a szomszédokkal a kölcsönös segítségben.",
    "tag": "csalad",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Ismerd a címed kockázatait",
    "text": "Nézd meg a georisques.gouv.fr oldalon a lakcímedre vonatkozó természeti és technológiai kockázatokat, és készíts egyéni biztonsági tervet (PIMS).",
    "tag": "info",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Földrengésben teherhordó fal mellé",
    "text": "Földrengéskor húzódj fal vagy teherhordó szerkezet mellé vagy masszív bútor alá, távol az ablakoktól; utána hagyd el az épületet, és távolodj el a parttól (cunamiveszély).",
    "tag": "otthon",
    "source": "fr-sgdsn-tous-responsables"
   },
   {
    "title": "Áramot, gázt szakember kapcsoljon vissza",
    "text": "Válság után szakemberrel vagy a mentőkkel állíttasd helyre az áramot vagy a gázt.",
    "tag": "energia",
    "source": "fr-infogouv-se-preparer"
   },
   {
    "title": "Mit mondj a segélyhívónak",
    "text": "Adj meg elérhető telefonszámot, a pontos címet, a hívás okát és a sérültek állapotát.",
    "tag": "info",
    "source": "fr-infogouv-se-preparer"
   },
   {
    "title": "Szirénapróba első szerdán",
    "text": "A szirénákat minden hónap első szerdáján próbálják ki.",
    "tag": "info",
    "source": "fr-sgdsn-tous-responsables"
   }
  ]
 },
 "CH": {
  "alerts": {
   "text": "Kb. 5000 helyhez kötött és kb. 2200 mobil sziréna működik. Általános riasztás: szabályosan emelkedő-ereszkedő hang 1 percig, 5 percen belül megismételve – kapcsold be a rádiót vagy nézd meg az Alertswisst (a svájci polgári védelem riasztó- és tájékoztató felülete és alkalmazása), kövesd az utasításokat, és szólj a szomszédoknak. Vízriasztás (csak gátak alatt): tizenkét 20 másodperces mély, folyamatos hang 10 másodperces szünetekkel – azonnal hagyd el a veszélyeztetett területet; a hivatalos utasításokat a rádió közvetíti (az SRG ICARO vészhelyzeti rendszere), és minden Svájcban árult DAB+ rádió fogja az URH-t (FM) is.",
   "source": "ch-babs-sirenen"
  },
  "guides": [
   {
    "type": "war_airraid",
    "steps": [
     "Minden lakosnak van óvóhelyi helye, általában az otthonától 2 km-en belül; a kantonok és települések akkor közlik a beosztást, ha a biztonsági helyzet megkívánja – a települési polgári védelmi hivatalnál rákérdezhetsz.",
     "Vidd magaddal az óvóhelyre a vészkészletet (kb. egy hétre elég élelmiszer, fejenként 9 liter víz, fontos gyógyszerek).",
     "Számíts rövid, ismétlődő, órákig vagy napokig tartó tartózkodásra; az óvóhelyeket öt napon belül kell üzemkésszé tenni.",
     "Háziállatokkal az óvóhelyeken általában nem számolnak.",
     "Kövesd a rádió utasításait; az óvóhelyen egy URH-t (FM) is fogó elemes rádió működik."
    ],
    "source": "ch-babs-schutzraeume"
   },
   {
    "type": "nuclear",
    "steps": [
     "Kövesd az Országos Riasztási Központ (NAZ) utasításait a médiában és az Alertswissen; a valószínű intézkedés a házban vagy pincében maradás, illetve az evakuálás.",
     "Jódtablettát csak a hatóságok kifejezett utasítására, a megadott időpontban és adagban (betegtájékoztató) vegyél be – túl korán bevéve hatástalan.",
     "A jód gyerekeknek, serdülőknek, várandós és szoptató nőknek, valamint 45 év alattiaknak ajánlott; 45 év felett kérdezd meg az orvosod.",
     "A tablettát bőséges vízzel, ne éhgyomorra vedd be; közvetlenül előtte feloldhatod italban, például tejben vagy joghurtban.",
     "A jód csak a pajzsmirigyet védi, a cézium, a stroncium és a közvetlen sugárzás ellen nem – maradj védett helyen, ahogy elrendelik."
    ],
    "source": "ch-bag-jod"
   },
   {
    "type": "blackout",
    "steps": [
     "Először a hűtő és a fagyasztó tartalmát edd meg, utána a többi készletet; a készüléktől és a külső hőmérséklettől függően ez 10 órától 3 napig tart ki.",
     "A bébiételt, a fagylaltot, a húskészítményeket és a nyers tojásos ételeket azonnal edd meg; a kiolvadt bogyós gyümölcsből főzz lekvárt, a zöldséget tedd el olajban vagy ecetben.",
     "A kiolvadt ételt ne fagyaszd vissza; ellenőrizd a szagát és a kinézetét.",
     "Főzz kint fa-, gáz- vagy faszénes grillen vagy nyílt tűzön, bent pedig fondüégővel; egyszerre nagyobb adagot főzz, hogy energiát spórolj.",
     "Tarts elemes DAB+/URH-rádiót pótelemmel a hivatalos utasításokhoz."
    ],
    "source": "ch-babs-notfallplan"
   },
   {
    "type": "heat",
    "steps": [
     "Figyeld a MeteoSchweiz és az Alertswiss hőségriasztásait, és naponta nézz rá a veszélyeztetett emberekre.",
     "Kerüld a megerőltetést a legmelegebb időszakban (11–15 óra: nap, 15–17 óra: legmagasabb hőmérséklet).",
     "Igyál rendszeresen, naponta legalább 1,5 litert, kerüld az alkoholos és cukros italokat; egyél kisebb, könnyebb ételeket.",
     "Napközben tartsd zárva az ablakokat és árnyékold őket kívülről; éjjel és kora reggel szellőztess; kapcsold ki a felesleges készülékeket.",
     "Hőstressz tüneteinél menj hűvös helyre, feküdj le, hűtsd magad nedves ruhával, igyál vizet vagy elektrolititalt; ha nem javulsz gyorsan, hívj orvost vagy a 144-et."
    ],
    "source": "ch-bag-hitze"
   },
   {
    "type": "evacuation",
    "steps": [
     "Kövesd a hatóságok utasításait (rádió, alkalmazások); készítsd elő a vészhelyzeti csomagot a személyes iratokkal.",
     "Csukd be az ajtókat és ablakokat, kapcsold ki az elektromos készülékeket, zárd el a gázt, és olts el minden nyílt tüzet.",
     "Szólj a többi lakónak, és ha kell, segíts nekik.",
     "A háziállatoknak, amelyeket nem tudsz vinni, hagyj ételt és vizet, és jelöld meg a helyiségeket, ahol vannak; soha ne zárd be őket a lakásba.",
     "Gyors indulásnál (fél óra alatt összepakolható): mobil és akkumulátor, útlevél vagy személyi igazolvány, személyes gyógyszerek, pénztárca, egy napi étel és ital."
    ],
    "source": "ch-babs-notfallplan"
   }
  ],
  "tips": [
   {
    "title": "Hatos csomag fejenként",
    "text": "Tárolj fejenként egy hatos csomag 1,5 literes palackot (9 liter) – könnyű vinni, és hónapokig eláll. A mosdáshoz és a WC-hez szükséges víz ezen felül értendő.",
    "tag": "viz",
    "source": "ch-bwl-kluger-rat"
   },
   {
    "title": "Az első három nap rajtad múlik",
    "text": "A vízszolgáltatóknak egy kiesés negyedik napjától kell újra minimális ivóvizet biztosítaniuk – az első három napot neked kell áthidalnod.",
    "tag": "viz",
    "source": "ch-bwl-kluger-rat"
   },
   {
    "title": "Forgasd a készletet",
    "text": "Építsd be a készletet a mindennapi főzésbe: fogyaszd és pótold rendszeresen; az élelmiszert és a gyógyszert hűvös, száraz, sötét helyen tárold.",
    "tag": "etel",
    "source": "ch-bwl-kluger-rat"
   },
   {
    "title": "A fagyasztott is készlet",
    "text": "A fagyasztott étel is készletnek számít – áramszünet után felhasználható, de kiolvadás után soha ne fagyaszd vissza.",
    "tag": "etel",
    "source": "ch-bwl-kluger-rat"
   },
   {
    "title": "50 maszk fejenként",
    "text": "Tarts a készletben fejenként 50 higiéniai maszkot.",
    "tag": "egeszseg",
    "source": "ch-bwl-kluger-rat"
   },
   {
    "title": "A DAB+ rádió URH-t is fog",
    "text": "Minden Svájcban árult DAB+ rádió fogja az URH-t (FM) is; egyes készülékek automatikusan váltanak, másokat kézzel kell átállítani.",
    "tag": "info",
    "source": "ch-bwl-kluger-rat"
   },
   {
    "title": "Legalább félig teli tank",
    "text": "Az autó vagy a motor tankja legyen legalább félig tele, az akkumulátor feltöltve.",
    "tag": "energia",
    "source": "ch-bwl-leichte-sprache"
   },
   {
    "title": "Fejből tudod a számokat?",
    "text": "Tudod fejből a rokonaid telefonszámát? Írd fel őket a vészhelyzeti tervedbe.",
    "tag": "csalad",
    "source": "ch-babs-notfallplan"
   },
   {
    "title": "Válassz szükségszállást",
    "text": "Válassz szükségszállást (rokonok, barátok, nyaraló) se túl közel (ugyanaz a katasztrófa), se túl messze az otthonodtól, és nézd meg, mehetnek-e oda háziállatok.",
    "tag": "csalad",
    "source": "ch-babs-notfallplan"
   },
   {
    "title": "Ismerd a vészhelyzeti találkozópontot",
    "text": "A települési vészhelyzeti találkozópontokon (Notfalltreffpunkte) teljes kommunikációs leállás idején is kapsz segítséget és információt; a nyitásukat a hatóságok jelentik be.",
    "tag": "info",
    "source": "ch-babs-notfallplan"
   },
   {
    "title": "Iratmappa kéznél",
    "text": "Készíts egy mappát a legfontosabb személyes irataiddal.",
    "tag": "penz",
    "source": "ch-babs-notfallplan"
   },
   {
    "title": "Jódtabletta jól tárolva",
    "text": "A jódtablettát zárt eredeti csomagolásban, 15–25 °C-on, fénytől és nedvességtől védve tárold – gyorsan elérhetően, de gyerekektől elzárva.",
    "tag": "egeszseg",
    "source": "ch-bag-jod"
   },
   {
    "title": "Tenyérteszt a kutyasétához",
    "text": "Hőségben kutyasétáltatás előtt tenyérrel próbáld ki, mennyire forró az aszfalt; sétálj kora reggel vagy este.",
    "tag": "csalad",
    "source": "ch-bag-hitze"
   },
   {
    "title": "Soha ne hagyd az autóban",
    "text": "Gyereket vagy háziállatot soha ne hagyj parkoló autóban, még speciális klímafunkcióval rendelkezőben sem.",
    "tag": "csalad",
    "source": "ch-bag-hitze"
   }
  ]
 }
};
