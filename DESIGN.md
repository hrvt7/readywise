# Haven72 – Design System

## 1. Visual Theme & Atmosphere
Nyugodt parancsnoki központ, nem bunker. Kékes majdnem-fekete vászon, egy visszafogott mint→cián→indigó gradiens, amely csak a márkajelen és egy-egy kiemelt szón jelenik meg. Többrétegű, "fizikai" felületek belső fénycsíkkal; monospace címkék a számokhoz és kódokhoz. Rutin, nem riadó.

## 2. Color Palette & Roles
- `#06080f` ink – alap háttér (kékes)
- `#0b0e18` ink-2 – emelt felület; `#10141f` ink-3 – mélyebb elem
- `#f2f4f9` fg – elsődleges szöveg; `#9aa6bf` mute – másodlagos; `#66708a` dim – címkék
- `#34d399` mint – kész/siker, elsődleges gomb kezdőszín
- `#22d3ee` cián – link, fókusz, gomb végszín
- `#818cf8` indigó – gradiens vége, dekoratív fény
- `#fbbf24` borostyán – hiány, figyelem; `#fb7185` rózsa – alap tétel, hiba
- Gradiens: `linear-gradient(120deg, #34d399, #22d3ee, #818cf8)`; egy oldalon legfeljebb 2–3 helyen.

## 3. Typography
- Display: **Unbounded** 600–800, −2% betűköz, 1.05 sormagasság. H1 58px (desktop), H2 44px.
- Szöveg: **Manrope** 400–600, +0.2px betűköz, 1.6 sormagasság. Alap 16–17px.
- Mono/címke: **JetBrains Mono** 11px, nagybetű, +14% betűköz (`.eyebrow`); számok tabular.

## 4. Components
- `.surface` – kártya: 1px fehér 8% keret, inset top highlight, dupla árnyék, 20px rádiusz. `.surface-hover` −3px emelkedés. `.spot` kurzor-követő fény (`--mx/--my`).
- `.btn-primary` – mint→cián függőleges gradiens, inset highlight, cián glow. `.btn-ghost` – 12% keret, 3% kitöltés.
- `.keycap` – mono, billentyűsapka-szerű (segélyhívók, időbélyegek, sorszámok).
- Pill/eyebrow – performative-ui `EyebrowPill`, státusz-pötty mint.
- ScoreRing – 60 osztású skála, gradiens ív, glow réteg.

## 5. Layout
- Tartalom max 1280px (7xl), oldalpadding 20/32px. Szekciótáv 128px (mt-32).
- Hero: 1.08fr/0.92fr rács, jobb oldalon élő példa-kártya két lebegő badge-dzsel.
- Lábléc: BigBack óriás szóvédjegy gradiens kitöltéssel.

## 6. Depth & Motion
- Rétegek: háttér (ASCII-mező/rács, 20–30% opacitás) → noise overlay 3.5% → felületek.
- Belépés: blur(8px)→0 + 24px emelkedés, 0.8s, `cubic-bezier(.22,1,.36,1)`, egyszer, −10% viewport margin.
- Hover: 400–500ms, csak transform/border/shadow. `prefers-reduced-motion` tiszteletben.

## 7. Do / Don't
- DO: minden számhoz forrás; egy kiemelő szín egyszerre; nyugodt hangnem.
- DON'T: vörös-fekete "apokalipszis", visszaszámláló, sürgetés, hamis leértékelés, emoji ikon.

## 8. Brand
Jel: ház+pajzs körvonal, benne két sáv + fénypont (= három nap, az otthon világít). Fájlok: `/public/brand/*.svg`. Oldal: `/marka`.
