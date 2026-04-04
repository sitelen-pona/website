---
title: "ASCII Input Standard (v1.0)"
sLTitle: todo
spTitle: todo
description:  "This is a standard for typing Sitelen Pona using ASCII." 
cover_image: false
permalink: ascii.html
---

<style>
    main{
        margin: 0 auto;
        padding-inline: 1rem;
        display: flex;
        flex-wrap: wrap;
    }
    h1, h2, h3{
        width: 100%
    }
    h1.split {
        display: none;
        padding: 0;
    }
    h1.split div{
        padding: 0;
    }
    code {
        background-color: var(--kule-2);
        font-size: 1.2em;
    }
    small {
        font-size: 1.1rem;
    }
    .en{
        max-width: 40rem;

    }
    .sl {
        max-width: 40rem;
    }
</style>
<div markdown="1" class="en" style="margin: auto">

# ASCII Input Standard  


- [Version 1.0](#version-10)
- [Fallback behaviors](#fallback-behaviors)
- [Notes for font makers](#notes-for-font-makers)
- [Conventions for some obscure features](#conventions-for-some-obscure-features)
- [Standard glyph numbering](#standard-glyph-numbering)

## Version 1.0

This is a standard for typing Sitelen Pona using ASCII. It's used in the following situations:
- Someone is composing a Sitelen Pona document with a preprocessor that converts ASCII to Sitelen Pona.
- A font is converting ASCII strings into Sitelen Pona glyphs using ligatures. This standard was primarily created by font makers for this purpose.
- A developer of a Input Method Editor (IME) for Sitelen Pona may opt to use this standard as a basis for their input method.

To use a font's default glyph for a word, type the word, such as `sewi`.

To type a font's alternate glyph for a word, append a number, such as `sewi2`. This numbering differs between fonts and technologies. For example, some fonts assign the "upside-down anpa" version of sewi to `sewi1`; others assign it to `sewi2`.

To type a specific glyph for a word, in a way that's consistent across fonts and technologies, append a number with a leading zero, such as `sewi02`. (The leading zero will still be present after 10, e.g. `word09`, `word010`, `word011`.) kulupu Linku will publish and maintain a database of standardized glyph numberings. The initial set is below, under [Standard glyph numbering](#standard-glyph-numbering).

There are three ways of combining glyphs.
1. `-` To stack two glyphs on top of each other, use a hyphen. For example, `kala-lili` will show a kala with a lili above it. 
2. `+` To nest one glyph inside another, use a plus. For example, `kala+lili` will show a kala with a lili inside it. 
3. `&` To request a non-standard way of combining glyphs, use an ampersand. For example, `kulupu&kili` might draw three kili in the arrangement of the kulupu glyph. Also use the ampersand to allow a font designer to pick for you if there is no special combination. For example, in one font, `kala&lili` might stack; but in another, it might nest.

To write a cartouche, use the symbols `[` and `]`. For example, "jan Itan" might be written `jan [ijo tan anpa nanpa]`.

To use nasin sitelen kalama inside cartouches, use `.` and `:`. For example, "jan Itan" might be written `jan [ijo tan:]`.

To use tally marks below cartouches, use `,`. For example, "jan Itan" might be written `jan [ijo, tan,,,]`.

To write quotation marks, use `te` for opening quote, and `to` for closing quote.

To separate words, type a single space, e.g. `kala ma`. This space is collapsed to zero-width. For example, `kala ma` will show the "kala" glyph followed by the "ma" glyph, with no space in between.

To write a full-width space, type `|`. For example, to write two sentences on one line without punctuation, type something like `soweli li pona | o pona tawa ona`. To indent a sentence fragment, type something like:
```
soweli mi li suwi
| | li pona tawa mi
| | | | tawa jan ante
```

To write the word "pi" wrapping under other words, use `(` and `)`. For example, "tomo pi mama mi li suwi" might be written `tomo pi(mama mi) li suwi`.

There are two ways of rotating the word "ni":
1. Use leading-zero standard numbering, such as `ni02` for "ni" pointing right.
2. Use `v`, `>`, `^`, and `<`, such as `ni>` for "ni" pointing right. 

## Fallback behaviors

- When a word isn't supported by a font or technology, the fallback is undefined and varies. For example, for an unsupported word "kokosila", a font might display a [?] symbol, a string like "koTok koTok s i laTok", or a cartouche like "[ko.ko.sina.la.]".
- If a numbered glyph variant or directional glyph variant isn't available, the font or technology picks a different variant to use.
- If long pi isn't available, `(` and `)` are treated as invisible.
- If the user-specified method for combining glyphs isn't available, then a font or technology can pick a different combo strategy, or not combine the characters at all.

## Notes for font makers

If you're making a font that converts ASCII into Sitelen Pona using ligatures, you should make the standard space ` ` show a zero-width space. This collapses the space between two words, such as `jan pona`. Intentional spaces between words can be typed with `|`. This design choice ensures that sequences of spaces show up properly in web browsers, avoiding the space-collapsing design of HTML itself, and avoiding an Apple bug that prevents ligatures like `p o n a space` from being used.

If a tally mark is used outside a cartouche, the resulting behavior is undefined and varies. Since sentences like `tenpo ni la, mi pilin pona` are common, and would otherwise result in an unintended tally mark below `la`, we recommend hiding the tally mark outside of cartouches, and producing a zero-width or full-width space.

Supporting a space between `pi` and `(` is optional. To guarantee compatibility, authors should write `pi(` without a space.

## Conventions for some obscure features

These ASCII symbols aren't standardized by this document, and may be repurposed for something else in a future revision if a more important or popular feature needs them. But they're included here to help font makers to experiment:

To wrap a glyph backwards around other words, use `{` and `}`. For example, "mi tawa tomo mi" might be written `mi tawa {tomo}mi`. (Many font makers use `{` and `}` for other purposes, such as custom cartouches, and that isn't a violation of this standard.)

To type [dakuten](https://sona.pona.la/wiki/User:Waso_Keli/kalama_wan_nimi) in a cartouche, use `"` and `*`. For example, "jan Itan" might be written `jan [ijo" tan*]`.

To manually insert a combining cartouche extension (the middle of a cartouche), use `=`. To manually insert a combining long glyph extension (the middle of long pi), use `_`. Combining extensions are applied to the preceding glyph, so `mi toki= pona` shows "toki" with a line above and below it.

## Standard glyph numbering

The following list is [maintained by kulupu Linku](https://github.com/lipu-linku/sona/tree/main/glyphs/metadata), not the Association. It’s not part of this standard, and is only included for reference. Glyphs are included based on frequency of their inclusion in fonts, and ordered historically.

For every glyph included in "Toki Pona: The Language of Good" (2014), `word01` produces the original version of that glyph. For example, `sama01` produces an equals sign.

- `a01`: pu a
- `a03` (not a typo): triple-stick a
- `akesi01`: 6 legged akesi
- `akesi02`: 4 legged akesi
- `ante01`: pu ante
- `ante02`: skew ante
- `apeja01`: kulupu apeja
- `epiku01`: upvote epiku
- `epiku02`: emitters epiku
- `isipin01`: lawa emitters isipin
- `jami01`: suwi jami
- `jan01`: pu jan
- `jan02`: eyes jan
- `kala01`: pu kala
- `kala02`: eyes kala
- `kamalawala01`: anarchist kamalawala
- `kapesi01`: loje jelo laso style kapesi
- `kiki01`: explosion kiki
- `kiki02`: triangle kiki
- `ko01`: blobby ko
- `ko02`: flower ko
- `kokosila02` (not a typo): toki kokosila
- `konwe01`: glider konwe
- `kulijo01`: lete kulijo
- `lanpan01`: jo lanpan
- `lanpan02`: pana lanpan
- `lape01`: lying down lape
- `lape02`: u.u lape
- `linluwi01`: emitters linluwi
- `linluwi02`: sitelen linluwi
- `linluwi03`: kulupu linluwi
- `lupa01`: pu lupa
- `lupa02`: sitelen sa lupa
- `majuna01`: turned sin majuna
- `majuna02`: lotus/book majuna
- `meli01`: pu meli
- `meli02`: venus meli
- `melome01`: right-side-up melome
- `meso01`: tu meso
- `mije01`: pu mije
- `mije02`: mars mije
- `mijomi01`: right-side-up mijomi
- `misa01`: legless earless misa
- `misikeke01`: capsule misikeke
- `misikeke02`: mortar and pestle misikeke
- `moli01`: pu moli
- `moli02`: x_x moli
- `monsi01`: pu monsi
- `monsi02`: tail monsi
- `monsuta01`: jagged line monsuta
- `mu01`: pu mu
- `mu02`: dialogue punctuation
- `mute01`: pu mute
- `mute02` or `luka&luka&luka&luka`: four hands mute
- `namako01`: 4-line sin namako
- `namako02`: pepper namako
- `nena01`: pu nena
- `nena02`: sitelen sa nena
- `ni01` or `niv`: down ni
- `ni02` or `ni>`: right ni
- `ni03` or `ni^`: up ni
- `ni04` or `ni<`: left ni
- `ni05`, `niv>`, or `ni>v`: down right ni
- `ni06`, `ni^v`, or `ni>^`: up right ni
- `ni07`, `ni^<`, or `ni<^`: up left ni
- `ni08`, `niv<`, or `ni<v`: down left ni
- `oko01`: side oko
- `olin01`: pu olin
- `olin02`: overlapping olin
- `olin03`: emitters olin
- `omekapo01`: kala emitters omekapo
- `owe01`: lukin emitters oko
- `pake01`: T pake
- `penpo01`: toki pona with 8 emitters penpo
- `pika01`: lightning pika
- `po01`: numeral 4 po
- `powe01`: lon ala powe
- `puwa01`: cloud puwa
- `san01`: triple backwards wan san
- `sewi01`: pu sewi
- `sewi02`: turned anpa sewi
- `sinpin01`: pu sinpin
- `sinpin02`: face sinpin
- `sitelen01`: pu sitelen
- `sitelen02`: line sitelen
- `soko01`: thin stem soko
- `soko02`: thick stem soko
- `soko03`: annulus soko
- `soto01`: box soto
- `su01`: oz su
- `su02`: unicorn su
- `su03`: suno su
- `sutopatikuna01`: head sutopatikuna
- `taki01`: yin yang taki
- `taki02`: magnet taki
- `teje01`: box teje
- `tenpo01`: pu tenpo
- `tenpo02`: hourglass tenpo
- `tomo01`: pu tomo
- `tomo02`: overhang tomo
- `tonsi01`: transgender symbol tonsi
- `tonsi02`: nonbinary symbol tonsi
- `unu01`: kule mun unu
- `usawi01`: nasa emitters usawi
- `uta01`: pu uta
- `uta02`: dotless uta
- `wa01`: exclamation wile wa
- `wasoweli01`: 4 legged wasoweli
- `wekama01`: weka kama wekama
- `wile01`: pu wile
- `wile02`: turned heart wile
- `wuwojiti01`: box wuwojiti
- `yupekosi01`: y yupekosi
</div>
