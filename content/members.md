---
title: Our Members
sLTitle: mi mute li seme
spTitle: mi mute pi kulupu pali li seme
alt: "symbols for 'jan pona' or 'good person' stylized in orange form two rows of smiling silhouettes "

permalink: members.html
description:  "Our members are software developers, community leaders, artists, publishers, typographers, and more."
cover_image: false
---


<style>

    .condensed {
        margin: 2em auto;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        row-gap: 1.5em;
        justify-content: center;
        width: 45rem;
        max-width: 100%;
        list-style-type: none;
    }
    .condensed li {
        padding: 0;
        margin: 0;
        width: 14rem;
        overflow: visible;
        text-align: center;
        justify-content: center;
        align-items: start;
        display: grid;
        column-gap: 0.3rem;
        position: relative;
        height: 2.5em;
    }
    .condensed [lang="en"]{
        white-space: nowrap;
    }
    .condensed .sp{
        display: block;
        white-space: nowrap;
        grid-column: 1 / 3;
    }
    .condensed p{
        margin-bottom: 0;
    }
    .condensed summary {
        position: relative;
        transition: all .25s cubic-bezier(.08,.82,.17,1);
    }
    .condensed details:not([open]):hover summary{
        color: var(--kule-8);
        font-weight: bold
    }
    .condensed details[open]{
        position: absolute;
        right: 0;
        top: -1rem;
        left: 0;
        z-index: 1;
        background-color: var(--walo);
        outline: 2px solid var(--kule-5);
        border-radius: 0.5rem;
        list-style-type: none;
        padding: 1rem 0.5em;
        opacity: 0.95;
        box-shadow: .5rem .5rem var(--kule-1)
    }
    .condensed details[open] summary{
        font-weight: bold
    }
    .condensed summary:focus-visible{
        outline: none;
    }
    .tiny-toggle{
        display: none;
        flex-wrap: wrap;
        max-width: 100%;
        justify-content:center;
    }
    [data-selected-language="bilingual"] :has(.tiny-toggle #sp-tog:checked) .show-tok, 
    [data-selected-language="bilingual"] :has(.tiny-toggle #en-tog:checked) .show-en{
        display: block;
    }
    [data-selected-language="bilingual"] :has(.tiny-toggle #en-tog:checked) .show-tok, 
    [data-selected-language="bilingual"] :has(.tiny-toggle #sp-tog:checked) .show-en{
        display: none;
    }

    [data-selected-language="bilingual"] .tiny-toggle{
        display: flex;
    }
    [data-selected-language="en"] .show-tok{
        display: none;
    }
    [data-selected-language="tok"] .show-en{
        display: none;
    }




 

 


    

    
    max-width: 20em;
</style>

{% assign all = members %}
{% assign current = members | where: 'listed', 'true' %}
{% assign others = members | where: 'listed', 'false' %}
{% assign former = former %}



{% splith %}
    {% en %}Current Members{% enden %}
    {% sp %}seme li lon kulupu{% endsp %}
    {% sl %}seme li lon kulupu?{% endsl %}

{% endsplith %}


{% split %}
{% en %}
    There are currently {{ all | size }} members in the association.   
{% enden %}
{% sp %}
    tenpo ni la mi {{ all | size | nnp }} li lon kulupu pali pi sitelen pona
{% endsp %}
{% sl %}
    tenpo ni la mi {{ all | size | nnp }} li lon kulupu pali pi sitelen pona.
{% endsl %}

{% endsplit %}

<br>

 <div class="tiny-toggle">
     <input type="radio" id="en-tog" name="toki" checked >
     <label lang="tok" for="en-tog" style="margin-right: 1rem">English</label><br>
     <input type="radio" id="sp-tog" name="toki">
     <label lang="tok" class="sp" for="sp-tog">toki pona</label><br>
 </div>

<ul class="condensed shuffle">
{% for item in current %}
    <li>
        <details name="current">
        <summary><span lang="en"> {{ item.enname }}</span> <span class="emoji">{{ item.emoji }}</span><span lang="tok" class="sp">{{item.spname}}</span>{% if item.enname != item.slname %}<span lang="tok" class="sl"><br>{{item.slname}}</span>{% endif %}</summary><div class="show-tok">{% for ijo in item.pali %}<p lang="tok" class="sp">{{ ijo }}</p>{% endfor %}{% for ijo in item.palisl %}<p lang="tok" class="sl">{{ ijo }}</p>{% endfor %}</div>{% for ijo in item.titles %}<p class="show-en">{{ ijo }}</p>{% endfor %}</details>
    </li>
{% endfor %}
</ul>




{% split %}
{% en %}
    {{ others | size }} other members are not listed here.
{% enden %}
{% sp %}
    mi {{ others | size | nnp }} li lon kulupu li pana ala e nimi tawa lipu
{% endsp %}
{% sl %}
    mi {{ others | size | nnp }} li lon kulupu li pana ala e nimi tawa lipu.
{% endsl %}
{% endsplit %}


{% splith %}
    {% en %}Association President{% enden %}
    {% sp %}jan lawa kulupu{% endsp %}
    {% sl %}jan lawa kulupu{% endsl %}
{% endsplith %}


{% split %}
{% en %}
Gregory Danielson III is serving as the association's president as of <time datetime="2026-01-21">January 21, 2026</time>. 
{% enden %}

{% sp %}
mun lawa [ken . kalama . nasa][mute:] li kama jan lawa kulupu  
<time datetime="2026-01-21">
zz lon tenpo suno nanpa mute wan lon tenpo mun nanpa wan   
zz lon tenpo sike nanpa mute ale mute luka wan </time>
{% endsp %}

{% sl %}
mun lawa Kekan San li kama jan lawa kulupu <time datetime="2026-01-21">lon tenpo suno #MW lon tenpo mun nanpa #W  lon tenpo sike nanpa #MAMLW.</time>
{% endsl %}
{% endsplit %}




{% splith %}
    {% en %}Former Members{% enden %}
    {% sp %}seme li weka tan kulupu {% endsp %}
    {% sl %}seme li weka tan kulupu?{% endsl %}
{% endsplith %}

<ul class="condensed shuffle">
{% for item in former %}
<li><span>{{ item.emoji }}</span><span lang="en"> {{ item.enname }}</span><span class="sp">{{item.spname}}</span> </li>
{% endfor %}
</ul>

<script>
    function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.querySelectorAll('ul.shuffle').forEach(ul => {
  const items = Array.from(ul.querySelectorAll('li'));
  shuffleArray(items).forEach(item => ul.appendChild(item));
});

const detailsList = document.querySelectorAll('.condensed details');
detailsList.forEach((details) => {
  details.addEventListener('focusin', (e) => {
    if (!e.target.matches(':focus-visible')) return;

    detailsList.forEach((other) => {
      if (other !== details && other.open) {
        other.open = false;
      }
    });
  });
});


</script>
