---
title: "Draft: Common Sitelen Pona"
toktitle: sitelen pona kulupu (li pini ala)
permalink: common.html
---

<style>
    

.long {
    margin: 0 auto;
    padding: 0 2em;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
}

.word-grid {
    display: flex;
    flex-wrap: wrap;
}

.word-glyph {
    font-family: "nasin-nanpa";
    font-size: 2em;
}

.word-glyph.invisible {
    font-family: "Nunito Sans", sans-serif;
    font-size: 2em;
}

.cell {
    display: grid;
    grid-template-rows: 4em 4em;
    grid-template-columns: 1fr;
    width: 5em;
    text-align: center;
}

.punctuation {
    margin: 0;
    padding: 0;
}

.punctuation li {
    display: grid;

    grid-template-columns: 5em 1fr;
    grid-template-areas:
        "glyph name"
        ". name";
}

.punctuation li * {
    margin: 0.2em;
}

.punctuation .word-glyph {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 2em;
}

.punctuation .word-glyph:not(.pair) {
    grid-area: glyph;

}

.punctuation li:has(.pair) {
    grid-template-areas:
        "glyph name"
        "pair name";

}

.pair {
    grid-area: pair;
}


.punctuation .word-name {
    padding: 0.5em;
    grid-area: name;
}

.punctuation :is(.word-name, .word-glyph){
    border: 0.2rem solid black;
}

.punctuation .no-codepoint :is(.word-name, .word-glyph){
    border: 0.2rem dashed black;
}



.explain {
    font-size: 0.8em;
    font-style: italic;

}

.after {
    font-family: "nasin-nanpa";

}

.explain {
    padding-block-end: 1em;

}

.example {
    display: grid;
    grid-template-columns: 5rem 1fr;
    background: var(--jelo-1);
}

.p:empty {
    display: none;
}
h1{
    margin-bottom: 0;
}

h2{
    margin: auto;
    text-align: left;
    width: unset;
    padding: 0 0 0.5em 1em;

    }
.foreword h2{
    padding: 0;
    margin: 0;
}
.foreword {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.foreword div {
    margin: 1em 0;
    padding: 0 2em;
    max-width: 30rem
}

.foreword div:first-child{
    margin-left: auto
}
.foreword div:last-child{
    margin-right: auto
}

.asterisk {
    text-align: right;
    margin-right: 2em;
}



@media (max-width: 1561px) {
    .long {
        grid-template-columns: 1.5fr 1fr;
    }


}

@media (max-width: 1160px) {
    .long {
        grid-template-columns: 1.6fr 1fr;
    }

    .punctuation .word-glyph {
        max-width: 5rem;
        min-width: 5rem;
    }

    .punctuation li {
        grid-template-columns: 8rem 8rem;
        grid-template-areas:
            "glyph glyph"
            "name name";
        justify-items: center;
        align-items: stretch;

    }

    .punctuation li:has(.pair) {
        grid-template-areas:
            "glyph pair"
            "name name";
    }

    .example {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .foreword {
        grid-template-columns: 1fr;
    }
    .foreword div{
        margin: 1em auto
    }
}

@media (max-width: 930px) {
    
    .long {
        grid-template-columns: 1fr;
    }

    .punctuation li {
        grid-template-columns: auto 1fr;
        grid-template-areas:
            "glyph name"
            ". name";
        column-gap: 2em;


    }

    .punctuation li:has(.pair) {
        grid-template-areas:
            "glyph name"
            "pair name";
    }

    .punctuation li .word-name {
        width: 100%;
    }

    .example {
        display: grid;
    }
}

@media (max-width: 430px) {
    .example {
        display: flex;

    }
}

</style>



{% split %}
{% en %}
This is a public draft of Common Sitelen Pona, released on January 2026 and presented as per our resolutions. 
{% enden %}

{% sp %}
lipu+ni pi pini ala li toki e sitelen pona kulupu  
lon tenpo mun nanpa wan pi sike ni la kulupu li pana e lipu pi pini ala tawa lukin ale
{% endsp %}
{% endsplit %}

{% assign tier = tier_1 %}



<div class="foreword">

<div>

## Description

Common Sitelen Pona is a standard that outlines universal basic features and characteristics of Sitelen Pona.

It is derived from described features and characteristcs of Sitelen Pona that have seen stable adoption and use within the Toki Pona community.

Common Sitelen Pona was prepared algorithmically, with separate processes used to answer the following four questions:

- Which **words** are commonly used in Sitelen Pona?
- Which **non-word characters** are commonly used in Sitelen Pona?
-  Which **non-word glyphs** commonly rely on uniquely Sitelen Pona codepoints?
- Which **versions of glyphs are representative** of those commonly used in Sitelen Pona?

[Learn more about how Common Sitelen Pona was prepared.](/common-method.html)
</div>
<div>

## Accompanying Instruments

### UCSUR

As Common Sitelen Pona has not yet been accepted into Unicode, codepoints for Common Sitelen Pona are currently restricted to the Private Use Area. These assignments are coordinated within the [Under-ConScript Unicode Registry](https://www.kreativekorp.com/ucsur/).

See [Sitelen Pona: U+F1900 - U+F19FF](https://www.kreativekorp.com/ucsur/charts/sitelen.html).


### ASCII Input Standard

Forthcoming
</div>

</div>





</div>

## A View of Common Sitelen Pona
<div class="long">

<div class="word-grid-container">

### Tier 1 Word Glyphs

    <div class="word-grid">
    
        {%- for entry in tier_1["words"] -%}
                <span class="cell">
                    <span class="word-glyph">{{ entry.input }}</span>
                    <span class="word-name">{{ entry.name }}</span>
                </span>
        {%- endfor -%}
    </div>

### Tier 2 Word Glyphs
    <div class="word-grid">
    
        {%- for entry in tier_2["words"] -%}
                <span class="cell">
                    <span class="word-glyph">{{ entry.input }}</span>
                    <span class="word-name">{{ entry.name }}</span>
                </span>
        {%- endfor -%}
    </div>

### Tier 3 Word Glyphs
    <div class="word-grid">
    
        {%- for entry in tier_3["words"] -%}
                <span class="cell">
                    <span class="word-glyph">{{ entry.input }}</span>
                    <span class="word-name">{{ entry.name }}</span>
                </span>
        {%- endfor -%}
    </div>
    
</div>

<div class="punctuation">

{% include "partials/punctuation.liquid",  number: "1", tier: tier_1 %}
{% include "partials/punctuation.liquid",  number: "2", tier: tier_2 %}
{% include "partials/punctuation.liquid",  number: "3", tier: tier_3 %}


</div>




</div>

<p class="asterisk">* These glyphs already represented by public-use Unicode codepoints and do not require new assignments.<p>
</div>




## Download Raw Files
<div class="foreword">
</div>
