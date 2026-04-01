---
title: "Which punctuation characters should use novel codepoints?"
sLTitle: sitelen nasin seme li sama sitelen lon pi nasin Juniko
spTitle: sitelen+nasin seme li sama sitelen lon pi nasin [jan]
tags: method
layout: '_layouts/method.html'
index: 6
description:  "Discussing the technical rationale for merging or separating codepoints required for punctuation in Common Sitelen Pona."
alt:  "zero-width joiner and left bracket are colourfully contrasted against semicolon and stacking joiner."
cover_image: true
permalink: /method/codepoints.html
---

{% splith %}
{% en %}Rationale and Results{% enden %}
{% sp %}nasin en sona kama{% endsp %}
{% sl %}nasin en sona kama{% endsl %}
{% endsplith %}


{% split %}
{% en %}
For most of the punctuation characters in Common Sitelen Pona, the answer to the question is self-evident. Novel characters that have no existing Unicode equivalent are recommended to receive new codepoints. Characters that have an equivalent are recommended to rely on the existing codepoint.

Recommended to be mapped to existing codepoints:

- <span class="tech">ZERO WIDTH JOINER</span>
- <span class="tech">IDEOGRAPHIC SPACE</span>
- <span class="tech">LEFT CORNER BRACKET</span><br>
<span class="tech">RIGHT CORNER BRACKET</span>

Recommended to be assigned new codepoints:

- <span class="tech">SITELEN PONA START OF CARTOUCHE</span> <br><span class="tech">SITELEN PONA END OF CARTOUCHE</span>
- <span class="tech">SITELEN PONA STACKING JOINER</span>
- <span class="tech">SITELEN PONA NESTING JOINER</span>
- <span class="tech">SITELEN PONA START OF LONG GLYPH</span><br><span class="tech">SITELEN PONA END OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA COMBINING TALLY MARK</span>
- <span class="tech">SITELEN PONA MIDDLE DOT</span>
- <span class="tech">SITELEN PONA COLON</span>

<span class="tech">SITELEN PONA MIDDLE DOT</span> and <span class="tech">SITELEN PONA COLON</span> form an exceptional case. These two characters are [routinely rendered in cartouches](https://sona.pona.la/wiki/nasin_sitelen_kalama). As this behaviour deviates significantly from that expected of Unicode's <span class="tech">MIDDLE DOT</span> and <span class="tech">COLON</span>, we recommend that <span class="tech">SITELEN PONA MIDDLE DOT</span> and <span class="tech">SITELEN PONA COLON</span> be assigned new codepoints and not be combined with Unicode equivalents.
{% enden %}

{% sp %}
sitelen+nasin mute la mi sona e nasin kepeken nasa ala  
sitelen+nasin li sin li sama ala sitelen lon pi(nasin [jan uta ni: ko:]) la   
zz nanpa sin o lon tawa ona  
sitelen sama li lon nasin [jan uta ni: ko:] la    
zz o kepeken nanpa pi( sitelen lon)

sitelen ni li sama sitelen lon pi(nasin [jan] ) la 
ona o kepeken nanpa sama

- <span class="tech">ZERO WIDTH JOINER</span>
- <span class="tech">IDEOGRAPHIC SPACE</span>
- <span class="tech">LEFT CORNER BRACKET</span><br><span class="tech">RIGHT CORNER BRACKET</span>

sitelen ni li ante la ona o jo e nanpa sin

- <span class="tech">SITELEN PONA START OF CARTOUCHE</span><br> <span class="tech">SITELEN PONA END OF CARTOUCHE</span>
- <span class="tech">SITELEN PONA STACKING JOINER</span>
- <span class="tech">SITELEN PONA NESTING JOINER</span>
- <span class="tech">SITELEN PONA START OF LONG GLYPH</span><br>
<span class="tech">SITELEN PONA END OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA COMBINING TALLY MARK</span>
- <span class="tech">SITELEN PONA MIDDLE DOT</span>
- <span class="tech">SITELEN PONA COLON</span>

sitelen te<span class="tech">SITELEN PONA MIDDLE DOT</span>to  en    
sitelen te<span class="tech">SITELEN PONA COLON</span>to li nasa  <br><br>
tenpo mute la [sitelen ni li kama lon poki nimi](https://sona.pona.la/wiki/nasin_sitelen_kalama)  
sitelen te<span class="tech">MIDDLE DOT</span>to en sitelen te<span class="tech">COLON</span> to li lon nasin [jan]  
taso ona li ken lon poki nimi la ni< li nasa mute nasin  
ni^ la kulupu pali li  pilin e ni> zz nanpa sin o lon tawa sitelen tu ni{% endsp %}
{% sl %}
sitelen mute pi nimi ala la, mi sona e ni kepeken nasa ala. sitelen li sin li sama ala sitelen lon pi nasin Juniko la nanpa sin o lon tawa ona. sitelen sama li lon nasin Juniko la o kepeken nanpa pi sitelen lon.

sitelen ni li sama sitelen lon pi nasin Juniko, ona o kepeken nanpa sama:

- <span class="tech">ZERO WIDTH JOINER</span>
- <span class="tech">IDEOGRAPHIC SPACE</span>
- <span class="tech">LEFT CORNER BRACKET</span><br><span class="tech">RIGHT CORNER BRACKET</span>

sitelen ni li ante, ona o jo e nanpa sin:

- <span class="tech">SITELEN PONA START OF CARTOUCHE</span><br> <span class="tech">SITELEN PONA END OF CARTOUCHE</span>
- <span class="tech">SITELEN PONA STACKING JOINER</span>
- <span class="tech">SITELEN PONA NESTING JOINER</span>
- <span class="tech">SITELEN PONA START OF LONG GLYPH</span><br><span class="tech">SITELEN PONA END OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA COMBINING TALLY MARK</span>
- <span class="tech">SITELEN PONA MIDDLE DOT</span>
- <span class="tech">SITELEN PONA COLON</span>

sitelen <span class="tech">SITELEN PONA MIDDLE DOT</span> en sitelen <span class="tech">SITELEN PONA COLON</span> li nasa. tenpo mute la [sitelen ni li kama lon poki nimi](https://sona.pona.la/wiki/nasin_sitelen_kalama). sitelen <span class="tech">MIDDLE DOT</span> en sitelen <span class="tech">COLON</span> li lon nasin Juniko, taso ona li ken lon poki nimi la ni li nasa mute. ni la mi pilin e ni: nanpa sin o lon tawa ona.
{% endsl %}
{% endsplit %}
