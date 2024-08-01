import{_ as t,r as o,o as r,c as p,a as e,b as s,d as a,w as l,e as i}from"./app-BQQFWevv.js";const c={},d=e("h1",{id:"主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题"},[e("span",null,"主题")])],-1),m=e("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),h=e("h2",{id:"默认主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#默认主题"},[e("span",null,"默认主题")])],-1),u=e("p",null,"VuePress 提供了一个默认主题，你当前正在浏览的文档网站就是使用的这个默认主题。",-1),D=i(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">    // 默认主题配置</span></span>
<span class="line"><span style="color:#9CDCFE;">    navbar:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#9CDCFE;">        text:</span><span style="color:#CE9178;"> &#39;首页&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        link:</span><span style="color:#CE9178;"> &#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认主题为文档网站提供了基础且实用的功能，你可以前往 <a href="https://ecosystem.vuejs.press/zh/themes/default/config.html" target="_blank" rel="noopener noreferrer">默认主题配置参考</a> 获取全部的配置列表。</p><p>然而，你可能觉得默认主题不够出色，又或者你不想搭建一个文档网站，而是一个其他类型的网站，比如博客。此时，你可以尝试使用社区主题或者创建本地主题。</p><h2 id="社区主题" tabindex="-1"><a class="header-anchor" href="#社区主题"><span>社区主题</span></a></h2><p>社区用户创建了很多主题，并将它们发布到了 <a href="https://www.npmjs.com/search?q=keywords:vuepress-theme" target="_blank" rel="noopener noreferrer">NPM</a> 上。查看主题本身的文档可以获取更详细的指引。</p><p>你可以在 <a href="https://marketplace.vuejs.press/" target="_blank" rel="noopener noreferrer">VuePress 市场</a> 中探索更多主题。</p><h2 id="本地主题" tabindex="-1"><a class="header-anchor" href="#本地主题"><span>本地主题</span></a></h2>`,7);function y(v,C){const n=o("RouteLink");return r(),p("div",null,[d,m,h,u,e("p",null,[s("你需要在你的配置文件中通过 "),a(n,{to:"/zh/reference/config.html#theme"},{default:l(()=>[s("theme")]),_:1}),s(" 配置项来使用它：")]),D,e("p",null,[s("如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。前往 "),a(n,{to:"/zh/advanced/theme.html"},{default:l(()=>[s("深入 > 开发主题")]),_:1}),s(" 学习如何开发你自己的主题。")])])}const _=t(c,[["render",y],["__file","theme.html.vue"]]),g=JSON.parse('{"path":"/zh/guide/theme.html","title":"主题","lang":"zh-CN","frontmatter":{"description":"主题 VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。 默认主题 VuePress 提供了一个默认主题，你当前正在浏览的文档网站就是使用的这个默认主题。 你需要在你的配置文件中通过 配置项来使用它： 默认主题为文档网站提供了基础且实用的功能，你可以前往 默认主题配置参考 获取全部的配置列表。 然而，你可...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/javaweb/zh/guide/theme.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"主题"}],["meta",{"property":"og:description","content":"主题 VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。 默认主题 VuePress 提供了一个默认主题，你当前正在浏览的文档网站就是使用的这个默认主题。 你需要在你的配置文件中通过 配置项来使用它： 默认主题为文档网站提供了基础且实用的功能，你可以前往 默认主题配置参考 获取全部的配置列表。 然而，你可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-31T11:46:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-31T11:46:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-31T11:46:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"默认主题","slug":"默认主题","link":"#默认主题","children":[]},{"level":2,"title":"社区主题","slug":"社区主题","link":"#社区主题","children":[]},{"level":2,"title":"本地主题","slug":"本地主题","link":"#本地主题","children":[]}],"git":{"updatedTime":1706701598000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/guide/theme.md"}');export{_ as comp,g as data};
