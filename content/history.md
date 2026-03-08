---
title: The Road to Unicode
sLTitle: kulupu li wile pana e sitelen pona tawa nasin Juniko
spTitle: kulupu li wile pana e sitelen pona tawa nasin [jan uta ni:ko:]
permalink: /history.html
---

<style>

    .year-marker{
        font-size: 1rem;
        background-color: var(--kule-1);
        position: absolute;
        right: 2rem;
        left: 2rem;
        top: 0rem;
        text-align: center;
        padding: .5rem;
        border-radius: 2rem;
        
    }
    [data-selected-language="bilingual"] .year-marker [lang="en"]::after{
        content: " / "

    }
    .split .year-marker :is(.sp, [lang="en"], .sl){
        max-width: unset;
        width: unset;
        min-width: unset;
    }
    h2:has(.year-marker){
        position: relative;
        padding-top: 4rem;
    }
</style>


{% splith %}
<span class="year-marker"><span lang="en">Pre-2024</span><span class="sp">tenpo sike pini nanpa luka wan</span><span class="sl">tenpo pi jaki Kowi #LLLTT</span></span> 
    {% en %}Growing Demand
{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
Toki Pona experienced a boost in popularity as a result of the Covid-19 pandemic lockdowns, and resources for Sitelen Pona grew exponentially. Prior to 2020, there were [only a few Sitelen Pona fonts in use](https://sona.pona.la/wiki/History_of_sitelen_pona); in the period since, [a large amount of Sitelen Pona fonts](https://linku.la/fonts) have been released. As early as 2021, the need for community-wide coordination of encoding was apparent.

Following the successful coordination of a proposal for Toki Pona's [ISO-639-3 code](https://iso639-3.sil.org/code/tok), discussions regarding the feasibility of Sitelen Pona in Unicode began to percolate. As a provisional measure, Toki Pona speakers submitted a [proposal](https://hackmd.io/f60orzD_T6S3wwciXdJosw?edit) to the Under-ConScript Unicode Registry. A [few](https://hackmd.io/@hTJocmVJRdy2APPREmseXQ/Bygid_8Jg9) [iterations](https://www.kreativekorp.com/ucsur/charts/sitelen.html) later, UCSUR came to see unanimous adoption by major Toki Pona fonts. 

With UCSUR, tech-savvy members of the Toki Pona community are able to modify their messaging clients and fully chat in [online spaces](https://discord.gg/mapona) using Sitelen Pona. However, for members who are not so technically-oriented, the [provisational and hacky measures](https://sona.pona.la/wiki/Under-ConScript_Unicode_Registry#Rendering_support) required to use UCSUR in various platforms are rather inaccessible. The more normalized Sitelen Pona usage came to be in such spaces, the more obvious it was that a robust solution needed to be pursued. 
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}


{% splith %}
<span class="year-marker"><span lang="en">Early 2024</span><span class="sp">open pi tenpo sike pini nanpa tu</span><span class="sl">open pi sike #MAMTT</span></span> 
    {% en %}  Working Group Forms
{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}

Starting in 2024, efforts to draft a proposal began in earnest. 

In January, several interested community members formed an ad-hoc working group. After four months of investigation, internal discussions, and survey outreach, the working group submitted a [preliminary proposal to the Unicode Consortium in April](https://www.unicode.org/L2/L2024/24275-encode-sitelen-pona.pdf).

This draft edition of the proposal demonstrated wide usage of Sitelen Pona as a writing system, but refrained from outlining a stable set of glyphs to be encoded. The working group had determined that before it provide such a set, advancements in Toki Pona data analysis needed to be made. 

Prior to 2024, usage of Toki Pona vocabulary was primarily assessed by the [Linku project’s annual write-in surveys](https://linku.la/about?q=). But the working group felt that this data was not enough for the Unicode Proposal. Linku does not directly observe usage and only reflects what people report their own usage to be. The bar for Unicode would need to be higher. 

After running a write-in survey for Sitelen Pona usage, the working group came to a similar conclusion for assessing the stability of Sitelen Pona glyphs. Write-in surveys would not be enough. Organic usage needed to be gathered into a corpus and analyzed. 

The working group set about making the tools required to pursue this new direction. 
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}


{% splith %}
<span class="year-marker"><span lang="en">Late 2024</span><span class="sp">pini pi tenpo sike pini nanpa tu</span><span class="sl">pini pi sike #MAMTT</span></span> 
    {% en %} Gathering Data 
{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
In the latter half of 2024, the working group’s attention was fixed on creating new tools and gathering usage data. 

mun Kekan San published [ilo Muni](https://ilo.muni.la/), a new corpus-based word-frequency analyzer, in August. Owing to (extensive web-scraping efforts)[https://ilo.muni.la/about/#where-is-the-data-from], ilo Muni provides robust data on word usage in Toki Pona from 2016 onwards. 

Usage data for Sitelen Pona glyphs and variations was pursued in three ways. At the font level, jan Ke Tami created a [new annotated database of all Sitelen Pona fonts](https://antetokipona.infinityfreeapp.com/font/?i=1). At the text level, working group members gathered and annotated a new corpus of Sitelen Pona handwriting examples. Finally, waso Keli created and published [SP Font Maker](https://wasokeli.github.io/sp-font-maker/). This tool allows anyone to create and upload their own handwriting samples to create a Sitelen Pona font, and also serves as a database where individual preferences for Sitelen Pona glyphs can be batched and analyzed.

In addition to data collection, seeing that many glyphs for neologisms were not explicitly released into the public domain, the working group contacted the authors of these glyphs to confirm CC-Zero licensing.

After much groundwork had been laid, the group was ready to draft Common Sitelen Pona. Mrs. Lang developed a [formal synthesizing algorithm for Common Sitelen Pona](/method.html) that assigned features to three tiers of teachworthiness and integrated existing and new data sources, uniting the work that had been done up to this point and defining a clear deliverable.
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}


{% splith %}
<span class="year-marker"><span lang="en">2025</span><span class="sp">tenpo sike pini</span><span class="sl">sike #MAML</span></span> 
    {% en %} Creation of the Association
{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
In 2025, armed with more usage data and a united vision, things progressed until the end was in sight. 

Anticipating the eventual publication of Common Sitelen Pona, the working group agreed it would register itself as [a not-for-profit corporation in Canada](https://laws.justice.gc.ca/eng/acts/c-7.75/). The association was legally incorporated on July 18, 2025. 

Using Mrs. Lang’s formal synthesizing algorithm, tiers of teachability for the main words were finalized by April, and representative glyphs were finalized by [INSERT MONTH HERE]. 

A couple of matters were resolved by alternative processes. Regarding the issue of whether certain alternate glyphs were semantically distinct enough to require separate codepoints, the organization settled this by ordinary vote. Regarding the teachability of specific punctuation marks and features, the organization settled this through more community-wide outreach. 

In addition to working on Common Sitelen Pona, the font-makers of the association worked to coordinate the ASCII input standard.
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}


{% splith %}
    {% en %}<span class="year-marker"><span lang="en">2026</span><span class="sp">tenpo sike ni</span><span class="sl">sike #MAMLW</span></span> 
     The Year of Sitelen Pona
{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
In 2026, we are finally presenting the labour of the last two years to the public. We published a public draft of Common Sitelen Pona in January. In February, we completed analysis on the Linku glyph survey. In March, we released our new website. Stay tuned for more updates!
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}


