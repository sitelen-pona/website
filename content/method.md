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
    border-bottom: solid 2px var(--pimeja);
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
h3, h4{
    margin: 2rem auto 0;
}

.tech{
    background-color: var(--kule-1);
    margin-block: 0.2rem;
    font-family: monospace;
}

    </style>

{% split %}
{% en %}
The methodology used to define Common Sitelen Pona was primarily developed by Mrs. Lang, the language's founder, with some contributions and changes made by various members of the working group in collaboration with Mrs. Lang. This methodology, described below, was subsequently approved for use by a majority of the working group.

The development of Common Sitelen Pona required us to answer several questions. The majority of this work was involved in determining what "tier of teachability" each word belonged to, based on its reported and observable usage, as well as its utilization by publishers. Further, each word received a singular determined representative glyph based on similar criteria, with different members of the working group assigned to that effort.

Some matters were resolved by alternative processes. One complexity that arose was the issue of whether certain alternate glyphs were semantically distinct enough from the primary glyph for the same word. Glyphs meeting this criteria would require separate codepoints in Unicode, and similarly would need to be recognized and adopted into Common Sitelen Pona independently. The organization studied this issue by community-wide survey, asking members of the community to report whether and how they distinguish certain statements with and without the glyphs in question. The organization then utilized that data to determine via vote, which such alternative glyphs should be included. Later, the organization studied specific punctuation marks and other features of Sitelen Pona in a similar manner, and again determined which would be included in Common Sitelen Pona via vote.

{% for item in collections.sorted_method %}
<a href="{{item.url}}"></a>
{% endfor %}

{% enden %}

{% sp %}
{% endsp %}
{% sl %}
kepeken nasin seme la kulupu pali li kama sona e sitelen pona kulupu li lipu e ona? suli la anpa sewi li pali e nasin. jan ante pi kulupu pali li pali poka li pana e pali lili e ante lili. pini la jan mute pi kulupu pali li wile e ni: kulupu li kepeken nasin. lipu ni li toki suli e nasin.

pali ni la mi kulupu li wile e sona ante mute. pali pi mute nanpa wan li tawa alasa ni: nimi ale la, ona li suli seme lon kepeken kulupu? mi lukin e ni: jan li toki seme e kepeken ona; mi ken lukin e kepeken seme lon toki kulupu; lipu pi sitelen pona li kepeken seme. nanpa tu la, nimi ale la mi pana e sitelen pona wan, li alasa e ni pona kepeken nasin pi sama mute. pali tu ni li tawa jan ante pi kulupu pali.


{% endsl %}
{% endsplit %}

<br>

{% splith %}
{% en %}Tiers of Teachability{% enden %}
{% sp %}{% endsp %}
{% sl %}suli kepeken{% endsl %}
{% endsplith %}

{% split %}
{% en %}
The following table describes the Tiers of Teachability into which Common Sitelen Pona assigns words and glyphs. The purpose of these categories is to capture the way the Toki Pona community engages with Toki Pona and Sitelen Pona. In this, we understood that there is a wide array of ways in which any given member of the community may use Sitelen Pona, but community-wide, there are clear trends that emerge in what words and glyphs any given speaker elects to use.
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}

{% sl %}
o pana e sitelen lon ni
{% endsl %}
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
                <td>Almost universal, reflecting conservative interpretations of the writing system as first described in <em>Toki Pona: The Language of Good</em> (2014)</td>
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

<span>
<table class="tiers">
    <caption>nanpa pi suli kepeken li seme?<caption>
    <thead>
        <tr>
            <th>nanpa suli</th>
            <th>suli ni li seme</th>
        </tr>
        <tbody>
            <tr>
                <td>suli #1</td>
                <td>ale li kepeken ni. ale li pilin e ni: ni li lon nasin ni: lipu pu li toki open e sitelen pona.</td>
            </tr>
            <tr>
                <td>suli #2</td>
                <td>jan mute a li kepeken ni.</td>
            </tr>
            <tr>
                <td>suli #3</td>
                <td>jan pi mute lili li kepeken ni. ni li lon ala nasin suli, taso jan kepeken li lili ala. pana sona la ni li lili nanpa wan.</td>
            </tr>
            <tr>
                <td>suli #4</td>
                <td>sitelen pona kulupu la ni li weka.</td>
            </tr>
        </tbody>
    </thead>
</table>
</span>

{% splith %}
{% en %}Which words are commonly used in Sitelen Pona?{% enden %}
{% sp %}nimi seme li suli kepeken lon sitelen pona{% endsp %}
{% sl %}nimi seme li suli kepeken lon sitelen pona?{% endsl %}
{% endsplith %}

{% splith 3%}
{% en %}Process{% enden %}
{% sp %}nasin alasa{% endsp %}
{% sl %}nasin alasa{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Algorithm: Three appointed members assign words to one of four Tiers of Teachability, drawing on different sources of data to make their determinations.

Each representative was free to design their own algorithm based on their data source. The sources are as follows:
{% enden %}

{% sp %}
poki tu tu pi wawa sona la<br>zz jan tu wan li poki e nimi kepeken sona ante
sona ante la<br>zz jan tu wan ni^ li pali e nasin ante

{% endsp %}
{% sl %}
poki tu tu pi wawa sona la jan tu wan li poki e nimi kepeken sona ante.
sona ante la jan tu wan ni li pali e nasin ante.
{% endsl %}

{% endsplit %}

{% splith 4 %}
{% en %}Mrs. Lang (anpa sewi){% enden %}
{% sp %}anpa sewi{% endsp %}
{% sl %}anpa sewi{% endsl %}
{% endsplith %}

{% split %}
{% en %}
As the creator of the Toki Pona language and the Sitelen Pona script, Mrs. Lang has a unique decades-long view of their stability. Mrs. Lang published Sitelen Pona in _Toki Pona: The Language of Good_ (2014). In 2021, Mrs. Lang conducted a series of word usage surveys, the results of which were published in the book _Toki Pona Dictionary._

Mrs. Lang assigned all words from the 2014 publication as Tier 1 words, and then assigned the rest via discretion, informed by the _Official Toki Pona_ book series and the creator's own distinctive lived experience.

Mrs. Lang (author of _Official Toki Pona_ series) held one vote within this algorithm.
{% enden %}

{% sp %}
{% endsp %}
{% sl %}
{% endsl %}
{% endsplit %}

{% splith 4 %}
{% en %}lipu Linku and kala Asi{% enden %}
{% sp %}o ante toki e nimi suli ni{% endsp %}
{% sl %}lipu Linku en kala Asi{% endsl %}
{% endsplith %}

{% split %}
{% en %}
The Linku project provides open datasets for Toki Pona. The Linku maintainers anually survey the community regarding what words they use and understand. The word dataset lists words under one of four usage categories: core (90%- 100%), common (60%-90%), uncommon (30%-60%), and obscure (0%-30%).

In reworking this data for Tiers of Teachibility in Common Sitelen Pona, kala Asi, the initiator of Linku, slightly modified the threshold:

- Tier 1: [80%; 100%], reflecting 'Linku core' words and some 'Linku common' words
- Tier 2: [60%; 80%], reflecting most 'Linku common' words
- Tier 3: [30%; 60%], reflecting 'Linku uncommon' words

As reported by kala Asi, the Linku project held one vote within this algorithm.
{% enden %}

{% sp %}
{% endsp %}
{% sl %}
pali Linku li lipu e sona mute lon nimi pi toki pona. kulupu pali Linku li alasa e sona ni tan kulupu lon tenpo sike ale: jan kulupu li kepeken nimi seme, li sona e nimi seme. lipu nimi Linku li poki e nimi tan suli ona, kepeken poki tu tu. nimi wan la, jan luka luka la: jan luka tu tu li kepeken la nimi li suli a. jan luka wan li kepeken la suli. jan tu wan la suli lili. ante la suli ala.

kala Asi li jan pali pi kulupu Linku lon pali ni. ona li ante e sona Linku pi suli nimi tawa suli nimi pi sitelen pona kulupu la, ona li ante lili e nanpa:

- suli #1: jan LL la jan LTW li kepeken. nimi ale pi poki 'suli a' en nimi lili pi poki 'suli' li lon ni.
- suli #2: jan LL la jan LW li kepeken. nimi mute pi poki 'suli' li lon ni.
- suli #3: jan LL la jan TW li kepeken. nimi ale pi poki 'suli lili' li lon ni.


{% endsl %}
{% endsplit %}

{% splith 4 %}
{% en %}ilo Muni and Gregory Danielson III (mun Kekan San){% enden %}
{% sp %}ilo Muni en jan Kekan San{% endsp %}
{% sl %}ilo Muni en jan Kekan San{% endsl %}
{% endsplith %}

{% split %}
{% en %}

[ilo Muni](https://ilo.muni.la/) is a word usage analyzer that draws on a [large corpus of community data](https://ilo.muni.la/about/#where-is-the-data-from), filtered to [only contain text authored in Toki Pona](https://github.com/gregdan3/sona-toki). mun Kekan San is the author of ilo Muni and set the following thresholds in assigning the words to Tiers of Teachability.

- Tier 1: Words with >=10% authorship over >=5 years, reflecting all words in the _Official Toki Pona_ series' 2014 publication, as these words are known to be stable.
- Tier 2: - Words with >=7.5% authorship over >=4 years, reflecting the threshold that most closely captures all words in Linku's 'common' category
- Tier 3: - Words >=5% authorship over >=3 years, reflecting the last point before statistical noise becomes an issue.

As reported by mun Kekan San, ilo Muni held the tiebreaking vote within this algorithm.
{% enden %}

{% sp %}
{% endsp %}
{% sl %}
{% endsl %}
{% endsplit %}

{% splith 3 %}
{% en %}Results{% enden %}
{% sp %}sona kama{% endsp %}
{% sl %}sona kama{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Jump to [Tier 1 Word Glyphs]()  
Jump to [Tier 2 Word Glyphs]()  
Jump to [Tier 3 Word Glyphs]()

Or download the raw results:
[WORDS](/content/common/words-tiers.txt)

{% enden %}

{% sp %}
o lukin e [nimi pi suli #1]()  
o lukin e [nimi pi suli #2]()  
o lukin e [nimi pi suli #3]()

o lukin e sona ale:
[words-tiers.txt](/content/common/words-tiers.txt)

{% endsp %}

{% sl %}
o lukin e [nimi pi suli #1]()  
o lukin e [nimi pi suli #2]()  
o lukin e [nimi pi suli #3]()

o lanpan e sona ale:
[nimi](/content/common/words-tiers.txt)

{% endsl %}

{% endsplit %}

{% splith %}
{% en %}Which versions of glyphs are representative of those commonly used in Sitelen Pona? {% enden %}
{% sp %}sitelen mute li tawa nimi wan la<br>zz sitelen ni seme li suli kepeken lon sitelen pona?{% endsp %}
{% sl %}sitelen mute li tawa nimi wan la sitelen ni seme li suli kepeken lon sitelen pona?{% endsl %}
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
o pali
{% endsp %}
{% endsplit %}

{% splith 3 %}
{% en %}Process{% enden %}
{% sp %}nasin alasa{% endsp %}
{% sl %}nasin alasa{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Algorithm: Use six sources of input to identify the most representative glyphs for Toki Pona words that are known to have variants. Four sources of input reflect exercised discretion of invited fontmakers. Two sources of input reflect sampled handwriting data from the community.

The input sources are listed below:
{% enden %}

{% sp %}
o pali
{% endsp %}
{% endsplit %}

{% splith 4%}
{% en %} Ethan Corgatelli (jan Itan){% enden %}
{% sp %}{% endsp %}
{% sl %}jan Itan{% endsl %}
{% endsplith %}

{% split %}
{% en %}
jan Itan is the creator of _nasin nanpa_ (2022).

_nasin nanpa_ continues to be a popular font in 2026. It carries historical notability; _nasin nanpa_ was the first font that Toki Pona speakers used for Sitelen Pona texting on Discord, and it is the Sitelen Pona font for _The Wonderful Wizard of Oz (Toki Pona edition)_ released in the series, _Official Toki Pona_.

On multiple occasions, the font has made strong choices that have correctly predicted (or predicated) the success of certain variant glyphs.

jan Itan held the tiebreaker vote within this algorithmn.
{% enden %}

{% sp %}
o pali
{% endsp %}
{% sl %}
jan Itan li pali e nasin sitelen ilo "_nasin nanpa_" lon sike #2022.

sike #2026 la nasin nanpa li awen 
{% endsl %}
{% endsplit %}

{% splith 4%}
{% en %}lipamanka {% enden %}
{% sp %}lipamanka{% endsp %}
{% sl %}lipamanka{% endsl %}
{% endsplith %}

{% split %}
{% en %}
lipamanka is the creator of _linja sike_ (2021) and _linja lipamanka_ (2023).

_linja sike_ was stylized as a succesor to jan Same's _linja pona_ (2016), the most prevalent font of the pre-2021 period. _linja lipamanka_ reworks _linja sike_ to be more visually distinct from _linja pona._

Both of lipamanka's fonts were influential, as lipamanka was highly responsive to requests for rare glyphs, individual name glyphs, and experimental features. lipamanka is personally responsible for many alt glyphs, either by authoring them or by promoting them into wider usage.

lipamanka held one vote within this algorithm.
{% enden %}

{% sp %}
o pali
{% endsp %}
{% endsplit %}

{% splith 4 %}
{% en %}Rebecca Bettencourt (jan Lepeka){% enden %}
{% sp %}jan Lepeka{% endsp %}
{% sl %}jan Lepeka{% endsl %}
{% endsplith %}

{% split %}
{% en %}
jan Lepeka is the creator of _Fairfax HD_ and _sitelen seli kiwen_ (2022).

jan Lepeka maintains the UCSUR and has been making fonts for decades. In addition to integrating Sitelen Pona into her Fairfax HD font family, which covers several other constructed scripts, she also made the popular handwritten font family, _sitelen seli kiwen_. There are separate versions of the family for ASCII-input, Unicode-input, monospaced, and non-monospaced.

These two font families are held in very high esteem. They are the most completionist fonts created to date, preserving many rare glyphs. Because of the robust coverage offered by these fonts, they are often used in community dictionaries like [nimi.li](https://nimi.li/).

jan Lepeka held one vote within this algorithm.
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}

{% splith 4%}
{% en %}waso Keli and SP Font Maker{% enden %}
{% sp %}waso Keli en ilo pali ona pi nasin sitelen{% endsp %}
{% sl %}waso Keli en ilo pali ona pi nasin sitelen{% endsl %}
{% endsplith %}

{% split %}
{% en %}
waso Keli is the creator of _leko majuna_ (2022) and the tool, SP Font Maker (2024).

SP Font Maker is a tool waso Keli developed to study glyph variance. Users of the SP Font Maker submit a template with the glyphs they prefer to include in their font. Later, waso Keli manually annotates and tabulates preferences across user templates.

_leko majuna_ is a pixelated font developed for use in a video game translation. It was the first font to contain a diagonal variant of the _ni_ (pointing arrow) glyph.

waso Keli tabled two votes within this algorithm. The majority preference of SP Font Maker users held one vote, while waso Keli herself held one vote.  
{% enden %}

{% sp %}

{% endsp %}
{% endsplit %}

{% splith 4 %}
{% en %}Handwriting Corpus{% enden %}
{% sp %}jan mute li sitelen kepeken luka{% endsp %}
{% sl %}jan mute li sitelen kepeken luka{% endsl %}
{% endsplith %}

{% split %}
{% en %}
jan Majeka transcribed 698 samples of handwritten Sitelen Pona shared online, annotating features and alternative glyphs. In total, well over 25k glyphs were scrutinized.

The majority preference of submissions from the handwriting corpus held one vote within this algorithm. Where jan Majeka determined that no strong preference was evident, the corpus would not receive a vote.  
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}

{% splith 3 %}
{% en %}Results{% enden %}
{% sp %}sona kama{% endsp %}
{% sl %}sona kama{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Jump to [Word Glyphs]()

Or download the [raw results for representative glyphs](/content/common/representative-glyphs.txt).

{% enden %}

{% sp %}

{% endsp %}
{% endsplit %}

{% splith %}
{% en %}Which variant glyphs for the same word are commonly used concurrently?{% enden %}
{% sp %}{% endsp %}
{% sl %}{% endsl %}
{% endsplith %}

{% splith 3 %}
{% en %}Rationale{% enden %}
{% sp %}{% endsp %}
{% sl %}{% endsl %}
{% endsplith %}

{% split %}
{% en %}
In the methodology developed by Mrs. Lang for Common Sitelen Pona, one word shall receive one codepoint, except in the case where a variant glyphs have distinct a teachable sub-meanings.
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}

{% sl %}
o pana e sitelen pona lon ni
{% endsl %}
{% endsplit %}

{% splith 3 %}
{% en %}Process and Results{% enden %}
{% sp %}{% endsp %}
{% sl %}{% endsl %}
{% endsplith %}

{% split %}
{% en %}
We invited survey respondents to describe whether they used certain variant glyph pairs, and if they used both, we asked whether the the meaning of the glyphs were never, sometimes, or always different.

We received X responses. Tiers of teachability thresholds were set at what % of respondants indicated that they used both glyphs, and the meanings of the glyphs were either sometimes or always different.

- Tier 1: 90% or higher
- Tier 2: 60% or higher
- Tier 3: 30% or higher

These results indicated that usage of the 'secular' and 'pu-style' glyphs for _sewi_ with distinct meanings met the Tier [INSERT HERE] threshold, and that usage of versions of directional _ni_ for distinctive meanings met the Tier [INSERT HERE].

The data also showed that the 'four hands' glyph for _mute_ had a distinctive meaning from the three-line glyph for _mute._ However, a vote by the association settled that the four-hands variant would be present in Common Sitelen Pona as four stacked _luka_ (hands), instead of being a distinct glyph.

Download the [raw results for semantic variance](/content/common/semanticity.txt).
{% enden %}

{% sp %}
{% endsp %}

{% sl %}
{% endsl %}
{% endsplit %}

{% splith %}
{% en %}Which non-word glyphs are commonly used in Sitelen Pona?{% enden %}
{% sp %}sitelen seme pi nimi ala li suli kepeken lon sitelen pona{% endsp %}
{% sl %}sitelen seme pi nimi ala li suli kepeken lon sitelen pona?{% endsl %}
{% endsplith %}

{% splith 3%}
{% en %}Process{% enden %}
{% sp %}nasin alasa{% endsp %}
{% sl %}nasin alasa{% endsl %}
{% endsplith %}

{% split %}
{% en %}
In the first phase, members of the association ran a survey asking respondents about whether they (1) use, (2) use in some situations, (3) avoid in most situations, or (4) never use, thirty-eight Sitelen Pona punctuation features. Visual examples of the punctuation features were provided.

We received 505 responses to the survey.

Each feature was given a base percentage score. Those that had indicated they use the feature "in some situations" and "avoid in most situations" were respectively counted as 2/3rds and 1/3rd of a full user.

We then linearly scaled these base percentages to bring pu-style Sitelen Pona cartouches, the most universal punctuation feature of Sitelen Pona, to 100%. Punctuation features were assigned a temporary tier based on this scaled score.

- Tier 1: 90% and higher
- Tier 2: 60% and higher
- Tier 3: 30% and higher
- Unlisted: Lower than 30%

These results were then compiled and shared internally.

In second phase, we provided the results of the community survey to our members and asked them to complete a new survey: As multidisciplinary collective of Sitelen Pona experts, what tier of teachability did they think suitable for these surveyed Sitelen Pona features? Members were invited to consider the results of the community survey in their responses, but were under no strict obligation to do so.

Twenty-one of our members responded to the survey. The median response of members was used to determine the final tier assignments, with one exception. The Latin-style period was initially assigned to the third tier and later excluded through an unanimous informal poll, due to redundancy with the middot.
{% enden %}
{% sp %}
o pali
{% endsp %}
{% endsplit %}

{% splith 3%}
{% en %}Results{% enden %}
{% sp %}sona kama{% endsp %}
{% sl %}sona kama{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Jump to [Common Sitelen Pona's non-word glyphs]().
{% enden %}
{% sp %}
o pali
{% endsp %}
{% sl %}
o lukin e [sitelen pi nimi ala lon sitelen pona kulupu]().
{% endsl %}
{% endsplit %}

{% splith %}
{% en %}Which non-word glyphs should be combined with existing Unicode equivalents? {% enden %}
{% sp %}{% endsp %}
{% sl %}sitelen seme pi nimi ala li sama sitelen lon pi nasin Juniko?{% endsl %}
{% endsplith %}

{% split %}
{% en %}
For most of the punctuation glyphs in Common Sitelen Pona, the answer to this is self-evident. Novel glyphs that have no existing Unicode equivalent are recommended to have new codepoints. Glyphs that have an equivalent are recommended to rely on existing codepoints.

Reccommended to be mapped to existing codepoints:

- <span class="tech">ZERO WIDTH SPACE</span>
- <span class="tech">ZERO WIDTH JOINER</span>
- <span class="tech">IDEOGRAPHIC SPACE</span>
- <span class="tech">LEFT CORNER BRACKET</span>
- <span class="tech">RIGHT CORNER BRACKET</span>

Recommended to be assigned new codepoints:

- <span class="tech">SITELEN PONA START OF CARTOUCHE</span>, <span class="tech">SITELEN PONA END OF CARTOUCHE</span>
- <span class="tech">SITELEN PONA STACKING JOINER</span>
- <span class="tech">SITELEN PONA NESTING JOINER</span>
- <span class="tech">SITELEN PONA START OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA END OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA COMBINING TALLY MARK</span>
- <span class="tech">SITELEN PONA MIDDLE DOT</span>
- <span class="tech">SITELEN PONA COLON</span>

<span class="tech">SITELEN PONA MIDDLE DOT</span> and <span class="tech">SITELEN PONA COLON</span> form an exceptional case. These two glyphs are [routinely rendered in cartouches](https://sona.pona.la/wiki/nasin_sitelen_kalama). As this behaviour deviates significantly from that expected of Unicode's <span class="tech">MIDDLE DOT</span> and <span class="tech">COLON</span>, we recommend that <span class="tech">SITELEN PONA MIDDLE DOT</span> and <span class="tech">SITELEN PONA COLON</span> be assigned new codepoints and not be combined with Unicode equivalents.
{% enden %}

{% sp %}
o pali
{% endsp %}
{% sl %}
sitelen mute pi nimi ala la, mi sona e ni kepeken nasa ala. sitelen li sin li sama ala sitelen lon pi nasin Juniko la nanpa sin o lon tawa ona. sitelen sama li lon nasin Juniko la o kepeken nanpa pi sitelen lon.

sitelen ni li sama sitelen lon pi nasin Juniko, ona o kepeken nanpa sama:

- <span class="tech">ZERO WIDTH SPACE</span>
- <span class="tech">ZERO WIDTH JOINER</span>
- <span class="tech">IDEOGRAPHIC SPACE</span>
- <span class="tech">LEFT CORNER BRACKET</span>
- <span class="tech">RIGHT CORNER BRACKET</span>

sitelen ni li ante, ona o jo e nanpa sin:

- <span class="tech">SITELEN PONA START OF CARTOUCHE</span>, <span class="tech">SITELEN PONA END OF CARTOUCHE</span>
- <span class="tech">SITELEN PONA STACKING JOINER</span>
- <span class="tech">SITELEN PONA NESTING JOINER</span>
- <span class="tech">SITELEN PONA START OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA END OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA COMBINING TALLY MARK</span>
- <span class="tech">SITELEN PONA MIDDLE DOT</span>
- <span class="tech">SITELEN PONA COLON</span>

sitelen <span class="tech">SITELEN PONA MIDDLE DOT</span> en sitelen <span class="tech">SITELEN PONA COLON</span> li nasa. tenpo mute la [sitelen ni li kama lon poki nimi](https://sona.pona.la/wiki/nasin_sitelen_kalama). sitelen <span class="tech">MIDDLE DOT</span> en sitelen <span class="tech">COLON</span> li lon nasin Juniko, taso ona li ken lon poki nimi la ni li nasa mute. ni la mi pilin e ni: nanpa sin o lon tawa ona.
{% endsl %}
{% endsplit %}
