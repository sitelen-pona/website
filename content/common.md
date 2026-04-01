---
title: "Public Draft: Common Sitelen Pona"
sLTitle: lipu pi sitelen pona kulupu (li pini ala)
spTitle: te sitelen pona kulupu to li lipu pi(pini ala)
permalink: common.html
description:  "A standard that outlines universal and representative features of Toki Pona's logographic writing system, Sitelen Pona." 
alt: "sitelen pona kulupu, 'common sitelen pona'"
cover_image: false
---
<style>
            
 :not(h1, footer).split:first-of-type{
    background-color: var(--kule-3); padding-bottom: 2rem; border-radius: 0 0 4rem 4rem;

}

    
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
    grid-template-rows: 2em 3em 3em;
    grid-template-columns: 1fr;
    width: 5em;
    text-align: center;
}

.punctuation {
    margin: 0 auto;
    padding: 0;
    width: fit-content;
}

.punctuation li {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-areas:
        "glyph name"
        ". name";
    margin-bottom: 1rem;
    grid-template-rows: auto 1fr
}

.punctuation>li>* {
    margin: 0.25rem;
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
    padding: .5rem .75rem .75rem;
}

.punctuation :is(.word-name, .word-glyph){
    border: 2px solid var(--pimeja);
    border-radius: .5rem;
}

.punctuation .no-codepoint :is(.word-name, .word-glyph){
    border: 2px dashed var(--pimeja);
}



.explain {
    font-size: 0.8em;
    font-style: italic;
}
.explain .ui-sp{
    font-style: normal;
}

.after {
    font-family: "nasin-nanpa";

}


.example {
    display: grid;
    grid-template-columns: 5rem 1fr;
    background: var(--kule-1);
    padding: .5rem
}

.p:empty {
    display: none;
}
h1{
    margin: 0;
    background-color: var(--kule-3);
    padding: 2rem 0 1rem !important;
    color: var(--pimeja);
}

h2{
    text-align: left;
    width: unset;
    padding: 0 0 0.5em 1em;
    margin: 0 auto 1rem;

    }
.foreword h2{
    padding: 0;
    margin: 0;
}
.foreword {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem
}
.foreword .fw-section {
    margin: 1em 0;
    padding: 0 2em;
    max-width: 30rem
}

.foreword .fw-section:first-child{
    margin-left: auto
}
.foreword .fw-section:last-child{
    margin-right: auto
}

.asterisk {
    text-align: right;
    margin: 2rem 0 2rem auto;
    max-width: 30rem;
}

.card {
    position: relative;
    border-radius: 0.5rem;
    border: 2px solid var(--pimeja);
    padding: .5rem .75rem .75rem;
    margin-block: 1rem;
    background-color: var(--kule-1);
    min-height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.card.forthcoming {
    background-color: var(--walo-pimeja);
}
.card:not(.forthcoming):is(:hover, :focus-visible){
    background-color: var(--kule-3);
}

.card a::after{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
}
.card p {
    position: relative;
    padding: 0;
    margin: 0;
    text-align: center;

}
.card a {
    color: inherit;
}
.card h3{
    padding: 0;
    margin: 0;
    text-align: center;
}
.tech{
    font-size: 0.5em;
    line-height: 1;
    padding-inline: 0.8rem;
    font-variation-settings: "wdth" 50;
    font-weight: 500;
}
.word-grid .word-name{
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;

}
.caveat p{
    max-width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
}
h2.view{
    margin-block-start: 2em;
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
        max-width: 4rem;
        min-width: 4rem;
    }

    .punctuation li {
        grid-template-columns: min-content;
        grid-template-areas:
            "glyph glyph"
            "name name";
        justify-items: left;
        align-items: stretch;

    }

    .punctuation li:has(.pair) {
        grid-template-areas:
            "glyph pair"
            "name name";
    }

    .example {
        display: flex;
        flex-direction: column;
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
    }

    .punctuation li:has(.pair) {
        grid-template-areas:
            "glyph name"
            "pair name";
    }

    .punctuation li .word-name {
        max-width: 30rem;
    }

    .example {
        display: grid;
    }
    .foreword .card{
        min-height: 15rem;
    }
    .fw-section h2 {
        padding-block: 0;
        margin-block-start: -2rem;
        min-height: 3em;
        display: grid;
        align-items: end;
    }

}
@media (max-width: 530px) {
    .foreword{
        grid-template-columns: 1fr;
    }
    .foreword .card{
        min-height: 0;
    }
    .fw-section h2{
        margin-block-start: 0;
        display: block;
        min-height: 0;
    }
}

@media (max-width: 430px) {
    .example {
        display: flex;

    }
}

@media (width < 860px) {
  h1 {
    padding: 2rem 6vw 1rem !important;
  }
}

</style>



{% split %}
{% en %}
This is a public draft of Common Sitelen Pona, released on January 2026 and presented as per the association's resolutions. 

**Common Sitelen Pona** is a standard that outlines  the universal characteristics of Sitelen Pona through an approved set of glyphs and characters.

**The Sitelen Pona Publishers and Typographers Association** derived Common Sitelen Pona from described features and characteristics of Sitelen Pona that have seen stable adoption and use within the Toki Pona community.

{% enden %}

{% sp %}
lipu+ni pi(pini )ala li toki e sitelen+pona kulupu  
tenpo mun nanpa wan pi(tenpo sike ni) la kulupu li pana e lipu pi(pini ala) tawa lukin ale

te **sitelen pona kulupu** to li nimi pi(lipu nasin)  
lipu li toki e ni> zz sitelen+pona li nasin seme zz sitelen seme li lon sitelen+pona

kulupu pali pi sitelen pona li pali e lipu pi(sitelen+pona kulupu)  
lipu li toki ala e nasin musi namako sin pi(jan mute ala)  
te sitelen pona kulupu to li wile e nasin ni taso  
zz zz kulupu pi(toki+pona) la nasin li suli li awen li kepeken
{% endsp %}

{% sl %}
lipu ni pi pini ala li toki e sitelen+pona kulupu. tenpo mun #W pi tenpo sike ni la kulupu li pana e lipu pi pini ala tawa lukin ale

**sitelen pona kulupu** li nimi pi lipu nasin. lipu li toki e ni: sitelen pona li nasin seme.

lipu li toki ala e nasin musi namako sin pi jan mute ala. lipu pi sitelen pona kulupu li wile e nasin ni taso: kulupu pi toki pona la ona li suli li awen li kepeken.
{% endsl %}

{% endsplit %}

{% assign tier = tier_1 %}



<div class="foreword ui-en">
<div class="fw-section">

## About

<div class="card">

### [History](/history.html)
A history covering the effort to get the Sitelen Pona into Unicode, the formation of the SPPTA, and a timeline of our work.

</div>
<div class="card">

### [Methodology](/method.html)
This is how the SPPTA is uncovering common and representative features of Sitelen Pona.

</div>
</div>
<div class="fw-section">

## Accompanying Instruments

<div class="card">
    
### [Sitelen Pona in UCSUR](https://www.kreativekorp.com/ucsur/charts/sitelen.html)
    
As the system has not yet been accepted into Unicode, codepoints for **Common Sitelen Pona** are  coordinated through the Under-ConScript Unicode Registry within codes available in Unicode's Private Use Area.
    
</div>
<div class="card forthcoming">

### ASCII Input Standard

Publication coming soon...
</div>
</div>
</div>
</div>
<div class="foreword ui-sp ui-tok">
<div class="fw-section">

## o sona e lipu+ni

<div class="card">

### [tenpo pini](/history.html)
tenpo suli la kulupu li wile e ni> zz  sitelen+pona li lon nasin [jan uta ni: ko:]. lipu+ni li toki e pali ale pi(tenpo pini) li toki e ni> zz seme la kulupu pali pi sitelen pona li kama lon.

</div>
<div class="card">

### [nasin alasa](/method.html)
kulupu pali pi sitelen pona li kama sona e sitelen+pona kulupu kepeken nasin ni^ pi(alasa sona). 

</div>
</div>
<div class="fw-section">

## o sona e lipu+namako

<div class="card">
    
### [sitelen+pona <br>pi(nasin [jaki uta sitelen.sama.])](https://www.kreativekorp.com/ucsur/charts/sitelen.html)

sitelen+pona kulupu la kulupu [jan uta ni:ko:] li awen kama ala lawa e nanpa pi(sitelen ilo). ni< la kulupu [jaki uta sitelen.sama.] li lawa pi(pali ni) li pana e nanpa ilo pi(sitelen+pona kulupu) tawa nanpa ni> pi kulupu [jan uta ni:ko:]zz kulupu lili li pali e nasin namako pi(lawa wawa ala) kepeken ona. 

</div>
<div class="card forthcoming">

### sitelen+pona <br>pi(nasin [akesi su:kili.]) 

lipu+ni^ li kama zz o zz awen zz lili zz taso
</div>
</div>
</div>
</div>

<div class="foreword ui-sl ui-tok">
<div class="fw-section">

## sona pi lipu ni

<div class="card">

### [tenpo pini](/history.html)
tenpo suli la kulupu li wile e ni: sitelen pona li lon nasin Juniko. lipu ni li toki e pali ale pi tenpo pini li toki e ni: seme la kulupu pali mi li kama lon. 

</div>
<div class="card">

### [nasin alasa](/method.html)
kulupu pali pi sitelen pona li  kama sona e sitelen pona kulupu kepeken nasin ni pi alasa sona. 

</div>
</div>
<div class="fw-section">

## lipu sona namako

<div class="card">
    
### [sitelen pona pi nasin Jusisa](https://www.kreativekorp.com/ucsur/charts/sitelen.html)

sitelen pona kulupu la kulupu Juniko li awen kama ala lawa e nanpa pi sitelen ilo. ni la kulupu Jusisa li lawa pi pali ni li pana e nanpa ilo pi sitelen pona kulupu tawa nanpa ni pi kulupu Juniko: kulupu lili li pali e nasin pi lawa wawa ala kepeken ona. 

</div>
<div class="card forthcoming">

### sitelen pona pi nasin Asuki 

lipu ni li kama lon tenpo poka...
</div>
</div>
</div>
</div>




<h2 class="view">{% include "partials/ui-translate.liquid", 
            enName: "A View of Common Sitelen Pona", 
            spName: "o lukin e te sitelen pona kulupu to", 
            sLName: "o lukin e sitelen pona kulupu" %}
</h2>

<div class="caveat">

{% include "partials/ui-translate.liquid", 
            enName: "[Representative glyphs](/content/method/glyphs/) are provided **as examples only**.<br>  
                            Ultimately, font designers may choose to design glyphs for these words that vary in appearance.", 
            spName: "lipu+ni li pana e sitelen tawa nimi la ni< li selo wan lon lipu **a li selo lawa ala a.** jan pali pi(nasin sitelen ilo) o awen kama selo e sitelen kepeken nasin pi(wile ona).", 
            sLName: "lipu ni li pana e sitelen tawa nimi la ni li selo wan lon lipu. **ni li selo lawa ala.** jan pali pi nasin sitelen ilo o awen kama selo e sitelen kepeken nasin pi wile ona." %}


</div>

<div class="long">

<div class="word-grid-container">

<a id="wordglyphs"></a>

{% include "partials/words.liquid",  index: "1", indexsp: "wan", indexsl: "W",words: tier_1["words"] %}

{% include "partials/words.liquid",  index: "2", indexsp: "tu", indexsl: "T",words: tier_2["words"] %}

{% include "partials/words.liquid",  index: "3", indexsp: "tu wan", indexsl: "TW",words: tier_3["words"] %}

</div>

<div class="punctuation">

{% include "partials/punctuation.liquid",  number: "1", indexsp: "wan", indexsl: "W", tier: tier_1 %}
{% include "partials/punctuation.liquid",  number: "2", indexsp: "tu", indexsl: "T", tier: tier_2 %}
{% include "partials/punctuation.liquid",  number: "3", indexsp: "tu wan", indexsl: "TW", tier: tier_3 %}

<p class="asterisk">* {%- include "partials/ui-translate.liquid", 
            enName: "These characters are already served by public-use Unicode codepoints and do not require new assignments.", 
            spName: "nanpa pi(sitelen ilo) la sitelen+nasin ni li wile ala e sitelen sin namako pi(sitelen+pona taso) <br>li ken kepeken sitelen lon pi nasin [jan uta ni: ko:]."
            sLName: "nasin Juniko la sitelen nasin ni li wile ala e sitelen sin namako pi sitelen pona taso li ken kepeken sitelen lon pi nasin Juniko." -%}
<p>
</div>




</div>

</div>



