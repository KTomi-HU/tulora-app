# Túlóranapló – Android-alkalmazás

Havi túlóranapló telefonra: napi túlórák, havi cél (órában vagy elérni kívánt nettó bérben), várható nettó bér, ünnepnapok és áthelyezett munkanapok, MOHU-visszaváltás számláló. Magyar, angol és lengyel nyelven (a címre koppintva vált).

Nem kell hozzá fiók és internet: minden adat a telefonon marad.

## Telepítés

1. A telefonon nyisd meg ezt a linket, és töltsd le a fájlt:
   **https://github.com/KTomi-HU/tulora-app/releases/latest/download/Tulora.apk**
2. Nyisd meg a letöltött `Tulora.apk` fájlt. Ha a telefon rákérdez, engedélyezd a telepítést ebből a forrásból (böngésző vagy Fájlkezelő → „Ismeretlen alkalmazások telepítése”).
3. Indítsd el a **Túlóranapló** alkalmazást, és a **Bérbeállítások** alatt add meg a bruttó alapbéredet. 25 év alatt válaszd az **Adókedvezmény → 25 év alatti** lehetőséget.

**Frissítés:** ugyanígy, a fenti linkről. Az új változat a régi fölé települ, az adatok megmaradnak.

**Adatmentés / telefoncsere:** koppints a fejlécben a „A telefonon mentve” feliratra → **Másolás**, és küldd el magadnak (pl. e-mailben). Az új telefonon ugyanitt illeszd be, majd **Visszatöltés**.

## Ünnepnapok frissítése

Indításkor (ha van internet) az alkalmazás letölti a [`calendar.json`](calendar.json) fájlt: ebben az új áthelyezési rendeletek és a naptárfigyelő havi tájékoztatója van. Személyes adatot nem tartalmaz, és nem is küld semmit. Offline a legutóbb letöltött változattal működik.

## Fejlesztés

- `src/tulora.html` – a közös forrás (ugyanez fut Claude-oldalként is).
- `scripts/build-www.mjs` – ebből készül az önálló `www/index.html`.
- `assets/` – ikon és indítóképernyő; a Capacitor-projekt (`android/`) az építéskor jön létre.
- `.github/workflows/apk.yml` – minden kódváltozásnál aláírt APK-t épít, és új Release-ként közzéteszi. Az aláíráshoz két Actions-titok kell: `ANDROID_KEYSTORE_B64`, `ANDROID_KEYSTORE_PASSWORD`. Ugyanazzal a kulccsal kell aláírni minden változatot, különben a frissítés nem telepíthető a régi fölé.

A bérszámítás becslés, nem bérszámfejtés.
