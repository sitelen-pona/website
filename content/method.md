---
title: "Methodology behind Common Sitelen Pona"
sLTitle: nasin alasa pi sitelen pona kulupu
spTitle: nasin alasa pi sitelen pona kulupu
permalink: method.html
---

<style>

span:has(.tiers){
    margin: auto;
    width: fit-content;
    display: block;
}
.tiers :is(td, th){
    padding: .5rem 2rem .5rem .5rem;
    max-width: 30rem;
    vertical-align: top;
}
thead {
    border-bottom: solid 2px black;
}
.tiers{
    max-width: 50rem;
    margin: 2em;
    text-align: left;
    border-collapse: collapse
}
tbody tr:nth-child(2n-1) {
    background-color: var(--kule-1);
}
caption {
    text-align: left;
    padding-left: .5rem;
}
h3{
    margin: 2rem auto 0;
}

    </style>


{% splith %}
    {% en %}Tiers of Teachability{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
{% enden %}

{% sp %}
{% endsp %}
{% endsplit %}



<span>
<table class="tiers">
    <caption>Summarizing Tiers of Teachability<caption>
    <thead>
        <tr>
            <th>Tier #</th>
            <th>Description</th>
        </tr>
        <tbody>
            <tr>
                <td>Tier 1</td>
                <td>Almost universal, reflecting conservative interpretations of the language as originating from <abbr title="Toki Pona: The Language of Good">TP:LOG</abbr> (2014)</td>
            </tr>
            <tr>
                <td>Tier 2</td>
                <td>Very popular, widely used.</td>
            </tr>
            <tr>
                <td>Tier 3</td>
                <td>Somewhat popular.  Peripheral, but needed by a prominent minority. Lowest teaching priority.</td>
            </tr>
            <tr>
                <td>Tier 4</td>
                <td>Unlisted.</td>
            </tr>
        </tbody>
    </thead>
</table>
</span>






{% splith %}
    {% en %}Which words are commonly used in Sitelen Pona?{% enden %}
    {% sp %}nimi seme li wawa lon sitelen pona{% endsp %}
    {% sl %}nimi seme li wawa lon sitelen pona?{% endsl %}
{% endsplith %}

{% splith 3%}
    {% en %}Process{% enden %}
    {% sp %}nasin pi kama sona{% endsp %}
    {% sl %}nasin pi kama sona{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Algorithm: Three appointed members describe words to one of four Tiers of Teachability, drawing on different sources of data. 
{% enden %}

{% sp %}
poki tu tu pi wawa sona la<br>zz jan tu wan li poki e nimi kepeken sona ante
{% endsp %}
{% sl %}
poki tu tu pi wawa sona la jan tu wan li poki e nimi kepeken sona ante.
{% endsl %}
{% endsplit %}

{% split %}
{% en %}
The three representatives were free to design their own algorithms based on their data source. 
{% enden %}

{% sp %}
sona ante la<br>zz jan tu wan ni^ li pali e nasin ante
{% endsp %}
{% sl %}
sona ante la jan tu wan ni li pali e nasin ante.
{% endsl %}
{% endsplit %}

<span>
<table class="tiers">
<caption>Word Notability Algorithm Participants</caption>
   <thead>
       <tr>
           <th>Representative</th>
           <th>Data Source</th>
            <th>Threshold</th>
       </tr>
   </thead>
<tbody>
 <tr>
        <td>Mrs. Lang</td>
        <td>Lived experience: As the language's creator, Mrs. Lang has a unique decades-long viewer of the language's tendencies and stability. Mrs. Lang also ran her own series of word usage surveys in 2021, the results of which were published in the seminal book *The Toki Pona Dictionary.</td>
        <td>No rigid threshold, but generally corresponding to usage in Official publications. All words featured in TP:LOG immediately assigned to Tier 1.</td>
    </tr>
    <tr>
        <td>kala Asi</td>
        <td>Linku: The Linku project annually conducts a far-reaching word usage survey. The first survey occured in 2020. Analysts of Linku have been assigning words to usage categories since 2023.</td>
        <td>
Tier 1: [80%; 100%] <br>
Tier 2: [60%; 80%] <br>
Tier 3: [30%; 60%]
        </td>
    </tr>
    <tr>
        <td>mun Kekan San <br> (Tie-breaker vote)</td>
        <td>ilo Muni: A word frequency analyzer that draws on a large corpus of community data.
        TODO </td>
        <td>
        Tier 1: - 5yrs / 10% authorship <br> 
        Tier 2: - 4yrs / 7.5% authorship  <br>
        Tier 3: - 3yrs / 5% authorship<br>
        </td>
    </tr>   
</tbody>
</table>
</span>

{% splith 3 %}
    {% en %}Results{% enden %}
    {% sp %}sona sin{% endsp %}
    {% sl %}sona sin{% endsl %}
{% endsplith %}


{% split %}
{% en %}
Jump to [Tier 1 Word Glyphs]()  
Jump to [Tier 2 Word Glyphs]()  
Jump to [Tier 3 Word Glyphs]()  

Or download the raw results: 
[words-tiers.txt](/content/common/words-tiers.txt)  

{% enden %}

{% sp %}
o lukin e [nimi pi wawa nanpa wan]()  
o lukin e [nimi pi wawa nanpa tu]()  
o lukin e [nimi pi wawa nanpa tu wan]()  

o lanpan e sona ale:
[words-tiers.txt](/content/common/words-tiers.txt)  

{% endsp %}

{% sl %}
o lukin e [nimi pi wawa nanpa wan]()  
o lukin e [nimi pi wawa nanpa tu]()  
o lukin e [nimi pi wawa nanpa tu wan]()  

o lanpan e sona ale:
[words-tiers.txt](/content/common/words-tiers.txt)  

{% endsl %}

{% endsplit %}


{% splith %}
    {% en %}Which non-word characters are commonly used in Sitelen Pona?{% enden %}
    {% sp %}sitelen seme pi nimi ala li wawa lon sitelen pona{% endsp %}
    {% sl %}sitelen seme pi nimi ala li wawa lon sitelen pona{% endsl %}
{% endsplith %}



{% split %}
{% en %}
English Content
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}

{% splith %}
    {% en %}Which non-word glyphs commonly rely on uniquely Sitelen Pona codepoints? {% enden %}
    {% sp %}sitelen seme pi nimi ala li kepeken nanpa pi sitelen pona{% endsp %}
    {% sl %}sitelen seme pi nimi ala li kepeken nanpa pi sitelen pona? {% endsl %}
{% endsplith %}


{% splith %}
    {% en %}Which versions of glyphs are representative of those commonly used in Sitelen Pona? {% enden %}
    {% sp %}sitelen mute pi nimi wan la<br>zz sitelen seme li suli lon sitelen pona {% endsp %}
    {% sl %}sitelen mute pi nimi wan la sitelen seme li suli lon sitelen pona? {% endsl %}
{% endsplith %}


{% splith 3 %}
    {% en %}Rationale{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}



{% split %}
{% en %}
Common Sitelen Pona does not prescribe that a glyph be written in a certain way. We encourage font-makers to use whatever variation of the glyphs that they please. 

In presenting Common Sitelen Pona, the Association wanted to use versions of the glyphs that were commonly used, so these representative glyphs were determined algorithmically.
{% enden %}
{% sp %}
SP Content
{% endsp %}
{% endsplit %}


{% splith 3 %}
    {% en %}Process{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Algorithm: Use six sources of input to identify the most representative glyphs of Toki Pona words. 

The sources are listed below:
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}

{% splith 4%}
    {% en %} Ethan Corgatelli (jan Itan): nasin nanpa{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
*nasin nanpa* (2022) is a monospaced font by jan Itan that continues to be a popular font in 2026. It also carries historical notability; *nasin nanpa* was the first font that Toki Pona speakers used for Sitelen Pona texting on Discord, and it is the Sitelen Pona font for *The Wonderful Wizard of Oz (Toki Pona edition)* released in the series *Official Toki Pona*. 

On multiple occasions, the font has made strong choices that have correctly predicted (or predicated) the success of certain variant glyphs. *nasin nanpa* held the tiebreaker vote within this algorithmn.
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}



{% splith 4%}
    {% en %}lipamanka: linja sike and linja lipamanka {% enden %}
    {% sp %}lipamanka{% endsp %}
    {% sl %}lipamanka{% endsl %}
{% endsplith %}

{% split %}
{% en %}
*linja sike* (2021), lipamanka's first published font, was stylized as a succesor to jan Same's *linja pona* (2016), the most prevalent font of the pre-2021 period. *linja lipamanka* (2023), is a reworking of *linja sike* aimed to be more visually distinct from *linja pona.* 

Both of lipamanka's fonts were influential, as lipamanka was highly responsive to requests for rare glyphs, individual name glyphs, and experimental features. lipamanka is personally responsible for many alt glyphs, either by authoring them or by promoting them into wider usage. 
{% enden %}



{% sp %}
SP Content
{% endsp %}
{% endsplit %}

{% splith 4 %}
    {% en %} Rebecca Bettencourt (jan Lepeka): Fairfax HD and sitelen seli kiwen{% enden %}
    {% sp %}jan Lepeka{% endsp %}
{% endsplith %}

{% split %}
{% en %}
Rebecca Bettencourt maintains the UCSUR and has been making fonts for decades. In addition to integrating Sitelen Pona into her Fairfax HD font family, which covers several other constructed scripts, she also made the popular handwritten font, *sitelen seli kiwen* (2022).

These fonts are regarded as the most completionist fonts available yet; they are valued records of rare Sitelen Pona. Because to the robust coverage of these fonts, they are often used as fonts for community dictionaries like [nimi.li]().
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}

{% splith 4%}
    {% en %} waso Keli: SP Font Maker and leko majuna {% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
waso Keli is responsible for two input sources: SP Font Maker, and *leko majuna*. 

SP Font Maker is a tool waso Keli developed to study glyph variance. Users of the SP Font Maker submit a template with the glyphs they prefer to include in their font. Later, preferences are manually anotated and tabulated across user templates. The most popular representative glyph chosen by users of SP Font Maker was given one vote in this algorithm. 

*leko majuna* (2022) is a pixelated font developed for use in a video game translation. It  was the first font to contain a diagonal variant of the *ni* (pointing arrow) glyph. 
{% enden %}

{% sp %}

{% endsp %}
{% endsplit %}


{% splith 4 %}
    {% en %}musi ike Majeka: Handwriting Corpus{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
musi ike Majeka transcribed 698 samples of handwritten Sitelen Pona shared online, annotating features and alternative glyphs. In total, well over 25k glyphs were scrutinized. The glyph variants found to have been favoured within this corpus were given one vote in this algorithm. 
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}
