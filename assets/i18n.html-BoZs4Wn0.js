import{_ as i,r as o,o as t,c,a as n,b as s,d as l,w as p,e}from"./app-D3aDzviN.js";const r={},d=e(`<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持"><span>多语言支持</span></a></h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置"><span>站点多语言配置</span></a></h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>docs</span></span>
<span class="line"><span>├─ README.md</span></span>
<span class="line"><span>├─ foo.md</span></span>
<span class="line"><span>├─ nested</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>└─ zh</span></span>
<span class="line"><span>   ├─ README.md</span></span>
<span class="line"><span>   ├─ foo.md</span></span>
<span class="line"><span>   └─ nested</span></span>
<span class="line"><span>      └─ README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),D=n("code",null,"locales",-1),m=e(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // 键名是该语言所属的子路径</span></span>
<span class="line"><span style="color:#6A9955;">    // 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span></span>
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
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>`,2),u={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"提示",-1),y=e(`<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置"><span>主题多语言配置</span></a></h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
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
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>配置参考：</p><ul><li><a href="https://ecosystem.vuejs.press/zh/themes/default/config.html" target="_blank" rel="noopener noreferrer">默认主题 &gt; 配置</a></li><li><a href="https://ecosystem.vuejs.press/zh/themes/default/locale.html" target="_blank" rel="noopener noreferrer">默认主题 &gt; 语言配置</a></li></ul></div>`,5);function h(C,b){const a=o("RouteLink");return t(),c("div",null,[d,n("p",null,[s("然后，在你的 "),l(a,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:p(()=>[s("配置文件")]),_:1}),s(" 中设置 "),D,s(" 选项：")]),m,n("div",u,[v,n("p",null,[s("配置参考： "),l(a,{to:"/zh/reference/config.html#locales"},{default:p(()=>[s("locales")]),_:1})])]),y])}const g=i(r,[["render",h],["__file","i18n.html.vue"]]),f=JSON.parse('{"path":"/zh/guide/i18n.html","title":"多语言支持","lang":"zh-CN","frontmatter":{"description":"多语言支持 站点多语言配置 要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构： 然后，在你的 中设置 locales 选项： 如果一个语言没有声明 lang, title, description 或者 head ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。 提示...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./zh/guide/i18n.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"多语言支持"}],["meta",{"property":"og:description","content":"多语言支持 站点多语言配置 要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构： 然后，在你的 中设置 locales 选项： 如果一个语言没有声明 lang, title, description 或者 head ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。 提示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-01T10:07:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-01T10:07:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多语言支持\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T10:07:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"站点多语言配置","slug":"站点多语言配置","link":"#站点多语言配置","children":[]},{"level":2,"title":"主题多语言配置","slug":"主题多语言配置","link":"#主题多语言配置","children":[]}],"git":{"updatedTime":1706782028000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/guide/i18n.md"}');export{g as comp,f as data};
