© all rights reserved by the sitelen pona publishers and typographers association, 2026

# Serving this Locally

1. `npm install` 

2. `npx @11ty/eleventy --serve`

for less noise, add `quiet`

3. `npx @11ty/eleventy --serve --quiet`


# Writing New Content

Use this template when adding new bilingual content two-column content:

```
{% splith %}
    {% en %}English H2{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}

{% split %}
{% en %}
English Content
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}

```

`{% splith %}` and `{% split %}` and `{% sp %}` and `{% en %}` are [custom paired shortcodes](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes) that are set up in eleventy.config.js. they expand into HTML right before the conversion from Markdown to HTML happens, so you can use Markdown content within the shortcodes. 

## Note: 
- `{% splith %}` and  `{% split %}` are different! `{% splith %}` (with the h) expands into a heading. use `{% split %}` on body text. 

- `{% splith %}` heading level defaults to h2. If you do `{% splith 3 %}`, you get an h3, etc. 




# Editing Templates

See [_includes/_layouts/page.html](/_includes/_layouts/page.html) for the site's main boilerplate. Modifying this will apply changes site-wide. 



# Hosting Information

The site is set up to run using GitHub Actions:

If running via GitHub pages, go into the repository Settings>Pages.
- Look for 'Build and deployment'. 
- Under 'Source' switch from 'Deploy from Branch' to 'GitHub Actions.' 

You have now told GitHub that you want to use actions. Time to tell it which one to use.
- On the main view, navigate to the 'Actions' tab. 
- Select 'All workflows.' 
- Select 'Deploy 11ty to GitHub Pages.' 

That should be enough to get it going. 

If assets fail to load, you might need to rename the path prefix. See [.github/workflows/11ty-gh-pages.yml](/.github/workflows/11ty-gh-pages.yml), find where it says this:

```
run: |
    npm install
    npx @11ty/eleventy --pathprefix=sitelenpona
```

change `sitelenpona` to whatever you need. Do not use slashes like `--pathprefix=/sitelenpona/`.


