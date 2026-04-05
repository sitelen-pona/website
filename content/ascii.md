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


.ascii-char :is(td, th){
    padding: .5rem 1rem .5rem .5rem;
    vertical-align: top;
}
.ascii-char td:has(.input){
    white-space: nowrap;
}
thead {
    border-bottom: solid 2px var(--pimeja);
}
.ascii-char{
    margin-block: 2em;
    text-align: left;
    border-collapse: collapse
}
.ascii-char[lang="en"]{
    width: var(--en-split);
    max-width: 100%;
}
tr.even{
    background-color: var(--kule-1);
}
td:has(.input){
    max-width: 13rem;
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    padding-inline: 0;
}
thead th:nth-of-type(3){
        text-align: center;
    }

.input {
    font-family: monospace;
    display: inline;
    font-size: 1rem;
    width: min-content;
    color: var(--pimeja);
    background-color: var(--kule-1);
    border: 0.05rem solid var(--kule-7);
    padding: 0.2em;
}
tr.even .input{
    background-color: var(--walo);
    color: var(--kule-8);

}


caption {
    text-align: left;
    padding-left: .5rem;
}

@media (max-width: 39rem){
    .ascii-char {
        width: 100%;
    }
    .ascii-char tr{
        display: grid;
        grid-template-columns: 0.5fr 12rem 0.5fr 1.2fr;
    }
    :is(td):has(.input), thead th:nth-of-type(3){
        grid-column: 2 / 3;

    }
    thead th:nth-of-type(3){
        text-align: left;
    }
    td:has(.input){
        justify-content: start;
        padding-left: 0.4rem;
    }


    :is(td):first-of-type, thead th:nth-of-type(2){
        grid-column: 3 / 4;
    }
    :is(td, thead th):last-of-type{
        grid-column: 4/ 5; 

    }
    thead th{
        grid-row: 1 / 2;
    }
    thead th:first-of-type{
        position: absolute;
        opacity: 0;
    }
    tbody td{
        grid-row: 2 / 3;
    }

    .ascii-char tbody th{
        grid-column: 1 / 5;
        font-size: 1.2rem;
        padding-block: 1rem 0.5rem;
        justify-self: start;
    }
    .input {
        font-size: 0.9rem;
    }
}
@media (max-width: 554px){
        .ascii-char tr{
        display: grid;
        grid-template-columns: 0rem 12rem min-content 1.2fr;
        }
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

{% assign items = ascii %}

<table class="ascii-char">
<caption></caption>
<thead>
<tr>
    <th>Word</th>
    <th>#</th>
    <th>Input</th>
    <th>Description</th>
</tr>
</thead>
<tbody>
{%- for item in items -%}
{%- capture current_class -%}
    {% cycle 'even', 'odd' %}
{% endcapture %}
<tr class="word-entry {{ current_class }}">
    <th rowspan="{{ item.glyphs.size }}">{{ item.word_name }}</th>
{%- for var in item.glyphs -%}
    <td>{{ var.version }}</td>
    <td>
    {%- if var.glyph_names -%}
        {%- for subname in var.glyph_names -%}
            <span class="input">{{ subname }}</span>
            {%- if subname != var.glyph_names[-1] -%}
            <span class="or">or</span>
            {%- endif -%}
        {%- endfor -%}
    {%- else -%}
    <span class="input">{{ var.glyph_name }}</span>
        {%- if var.not_typo -%}            
        <span class="or">[sic]</span>
        {%- endif -%}

    {%- endif -%}
    </td>
    <td>{{var.description}} </td>
</tr>
{%- if var != item.glyphs[-1] -%}<tr class="{{current_class}}">{%- endif -%}
{%- endfor -%}
{%- endfor -%}

</tbody>
</table>
