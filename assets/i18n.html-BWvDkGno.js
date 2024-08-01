import{_ as i,r as t,o as p,c,a as e,b as s,d as l,w as o,e as n}from"./app-D3aDzviN.js";const r={},d=n(`<h1 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n"><span>I18n</span></a></h1><h2 id="site-i18n-config" tabindex="-1"><a class="header-anchor" href="#site-i18n-config"><span>Site I18n Config</span></a></h2><p>To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>docs</span></span>
<span class="line"><span>├─ README.md</span></span>
<span class="line"><span>├─ foo.md</span></span>
<span class="line"><span>├─ nested</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>└─ zh</span></span>
<span class="line"><span>   ├─ README.md</span></span>
<span class="line"><span>   ├─ foo.md</span></span>
<span class="line"><span>   └─ nested</span></span>
<span class="line"><span>      └─ README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=e("code",null,"locales",-1),m=n(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // The key is the path for the locale to be nested under.</span></span>
<span class="line"><span style="color:#6A9955;">    // As a special case, the default locale can use &#39;/&#39; as its path.</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      title:</span><span style="color:#CE9178;"> &#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      description:</span><span style="color:#CE9178;"> &#39;Vue-powered Static Site Generator&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      title:</span><span style="color:#CE9178;"> &#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      description:</span><span style="color:#CE9178;"> &#39;Vue 驱动的静态网站生成器&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a locale does not have a <code>lang</code>, <code>title</code>, <code>description</code> or <code>head</code>, VuePress will fallback to the root-level values. You can omit the root level config as long as they are provided in each locale.</p>`,2),D={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),h=n(`<h2 id="theme-i18n-config" tabindex="-1"><a class="header-anchor" href="#theme-i18n-config"><span>Theme I18n Config</span></a></h2><p>VuePress does not restrict how themes provide multi-language support, so each theme may have different way to handle i18n, and some themes may not provide multi-language support at all. You&#39;d better refer to the theme documentation for detailed guide.</p><p>If you are using default theme, the multi-language support is the same as above:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        selectLanguageName:</span><span style="color:#CE9178;"> &#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        selectLanguageName:</span><span style="color:#CE9178;"> &#39;简体中文&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Config reference:</p><ul><li><a href="https://ecosystem.vuejs.press/themes/default/config.html" target="_blank" rel="noopener noreferrer">Default Theme &gt; Config</a></li><li><a href="https://ecosystem.vuejs.press/themes/default/locale.html" target="_blank" rel="noopener noreferrer">Default Theme &gt; Locale config</a></li></ul></div>`,5);function y(g,f){const a=t("RouteLink");return p(),c("div",null,[d,e("p",null,[s("Then, specify the "),u,s(" option in your "),l(a,{to:"/guide/configuration.html#config-file"},{default:o(()=>[s("config file")]),_:1}),s(":")]),m,e("div",D,[v,e("p",null,[s("Config reference: "),l(a,{to:"/reference/config.html#locales"},{default:o(()=>[s("locales")]),_:1})])]),h])}const b=i(r,[["render",y],["__file","i18n.html.vue"]]),E=JSON.parse('{"path":"/guide/i18n.html","title":"I18n","lang":"zh-CN","frontmatter":{"description":"I18n Site I18n Config To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure: Then, specify the locales option...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./guide/i18n.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"I18n"}],["meta",{"property":"og:description","content":"I18n Site I18n Config To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure: Then, specify the locales option..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-01T10:07:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-01T10:07:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"I18n\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T10:07:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Site I18n Config","slug":"site-i18n-config","link":"#site-i18n-config","children":[]},{"level":2,"title":"Theme I18n Config","slug":"theme-i18n-config","link":"#theme-i18n-config","children":[]}],"git":{"updatedTime":1706782028000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"guide/i18n.md"}');export{b as comp,E as data};
