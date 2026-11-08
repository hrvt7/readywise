# Haven72

Személyre szabott vészhelyzeti felkészülési tervező magyar háztartásoknak, hivatalos EU-s és nemzeti források alapján.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · Motion · Supabase (opcionális) · Vercel

## Oldalak

| Útvonal | Tartalom |
| --- | --- |
| `/` | Landing: animált pontszám, kategóriák, országos összehasonlítás, GYIK, hírlevél |
| `/terv` | Tervező: háztartás → pontos mennyiségek, ellenőrzőlista, pontszám, „hány napig bírnátok”, költségkeretes bevásárlólista, nyomtatás (adatok csak `localStorage`-ban) |
| `/orszagok`, `/orszagok/[code]` | HU, AT, DE, CZ, NL, BE hivatalos ajánlásai + segélyhívók |
| `/forrasok` | Forrásregiszter: minden forrás linkkel, ellenőrzési dátummal |
| `/modszertan`, `/adatvedelem` | Számítási módszer, partnerlink-szabályok, adatkezelés |

## Adatok – honnan jön minden szám?

Minden tartalom típusosan, verziókezelten a repóban van:

- `src/lib/sources.ts` – forrásregiszter (kiadó, URL, ellenőrzés dátuma, átvett tények)
- `src/lib/countries.ts` – országszabályok (időtáv, víz l/fő/nap, segélyhívók)
- `src/lib/checklist.ts` – tételek, mennyiségi képletek, pontszámítás

Szabály: új szám csak akkor kerülhet be, ha van hozzá forrás a `SOURCES` listában. Ahol nincs hivatalos szám (pl. Magyarország), azt a felületen jelöljük, és tartalékértéket használunk (EU 72 óra, NL 3 l/fő/nap).

Az árak a bevásárlólistában **becslések**, a felület is így jelöli.

## Fejlesztés

```bash
npm install
cp .env.example .env.local   # opcionális
npm run dev
```

## Supabase (hírlevél-feliratkozás)

1. Hozz létre egy Supabase projektet (EU régió).
2. Futtasd: `supabase/migrations/0001_init.sql`, majd (opcionálisan) `supabase/seed.sql`.
3. Vercelben állítsd be: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

A seed újragenerálása a repó adataiból: `node scripts/seed-sql.mjs > supabase/seed.sql`

Kulcsok nélkül az oldal teljesen működik, csak a feliratkozás jelzi, hogy még nincs bekötve.

## Partnerlinkek

`NEXT_PUBLIC_AFFILIATE_TEMPLATE` – pl. `https://partner.example/?url={url}`. Ha be van állítva, a bevásárlólista linkjei partnerlinkek lesznek, és „partnerlink” címkét kapnak (`rel="sponsored"`). Üresen sima Árukereső-keresőlinkek.

## Deploy (Vercel)

Importáld a repót a Vercelben → Framework: Next.js → állítsd be a környezeti változókat → Deploy. Build: `npm run build`.
