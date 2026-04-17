import { IdAttributePlugin, HtmlBasePlugin, RenderPlugin } from "@11ty/eleventy";
import sitemap from "@quasibit/eleventy-plugin-sitemap";
import markdownItContainer from 'markdown-it-container';
import markdownItAttrs from 'markdown-it-attrs';
import YAML from "yaml";

const DOMAIN = "https://sitelenpona.net";

export default async function (eleventyConfig) {
    eleventyConfig.addGlobalData("baseUrl", DOMAIN);


    eleventyConfig.addPassthroughCopy("_includes/assets/");
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPassthroughCopy("scripts/");
    eleventyConfig.addPassthroughCopy("content/common/");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(sitemap, {sitemap: {hostname: DOMAIN}});
    eleventyConfig.amendLibrary("md", (md) => {
        md.use(markdownItAttrs);
        md.use(markdownItContainer, 'attr', {
            render(tokens, idx, options, env, renderer) {
                let token = tokens[idx];
                if (token.type == 'container_attr_open') {
                    let level = 0;
                    for (let inner = idx + 1; tokens[inner].type != 'container_attr_close'; inner++) {
                        level += tokens[inner].nesting;
                        if (tokens[inner].nesting == 1 && level == 1) {
                            for (let attr of token.attrs) {
                                tokens[inner].attrPush(attr);
                            }
                        }
                    }
                }
                return '';
            }
        });
    });
    eleventyConfig.addFilter("svg_alt_data", function (alt) { return { "alt": alt } });
    eleventyConfig.addFilter("nnp", async function (nanpa) {
        return nnp(nanpa);
    });
    function nnp(nanpa){
        var nanpas = parseInt(nanpa.toString().split(".")[0]);
        var sulinanpa = Math.floor((nanpas.toString().length - 1) / 2);
        var nanpai = nanpas;
        var nanpanimi = "";

        for (var i = sulinanpa; i >= 0; i--) {
            var nanpac = (nanpai - nanpai % (100 ** i)) / (100 ** i);
            nanpanimi += "mute ".repeat(Math.floor(nanpac / 20))
                + "luka ".repeat(Math.floor((nanpac % 20) / 5))
                + "tu ".repeat(Math.floor((nanpac % 5) / 2))
                + "wan ".repeat(nanpac % 5 % 2);
            if (i > 0) nanpanimi += "ale ";
            nanpai = nanpai % (100 ** i);
        }
        return nanpanimi;
    }
    eleventyConfig.addFilter("postDate", (dateObj) => {
        
        const d = new Date(dateObj);
        const year = d.getUTCFullYear();      // Use UTC methods
        const month = String(d.getUTCMonth() + 1);
        const day = String(d.getUTCDate());
        let en = {
            year: year,
            month: month.padStart(2, "0"),
            day: day.padStart(2, "0"),

            
        };
         let sp = {
            year: nnp(year),
            month: nnp(month),
            day: nnp(day),
        }
        let sL = {
            year: sp.year.split(' ').map(w => w[0]).join('').toUpperCase(),
            month: sp.month.split(' ').map(w => w[0]).join('').toUpperCase(),
            day: sp.day.split(' ').map(w => w[0]).join('').toUpperCase()
        }
        let dates = { en: en, sp: sp, sL: sL}
        return dates;
    });

    eleventyConfig.addCollection("sorted_method", function (collectionsApi) {
        let unsorted = collectionsApi.getFilteredByTag("method");
        let sorted = unsorted.sort((a, b) => {
            if (a.data.index < b.data.index) return -1; else return 1;
        })
        return sorted;
    });
    eleventyConfig.addPlugin(RenderPlugin);

    eleventyConfig.addPairedShortcode("en", (insa) => insa.startsWith('\n') ? `::: attr {lang=en}\n${insa}\n:::` : `<span lang="en">${insa}</span>`);
    eleventyConfig.addPairedShortcode("sp", (insa) => insa.startsWith('\n') ? `::: attr {.sp lang=tok}\n${insa}\n:::` : `<span class="sp" lang="tok">${insa}</span>`);
    eleventyConfig.addPairedShortcode("sl", (insa) => insa.startsWith('\n') ? `::: attr {.sl lang=tok}\n${insa}\n:::` : `<span class="sl" lang="tok">${insa}</span>`);
    eleventyConfig.addPairedShortcode("split", (insa) => `<span class="split">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("splith", (insa, suli = 2) => `<h${suli} class="split">${insa}</h${suli}>`);

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));

    eleventyConfig.addPlugin(IdAttributePlugin);
};
