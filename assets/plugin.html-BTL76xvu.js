import{_ as t,r as o,o as p,c as r,a as n,b as e,d as l,w as a,e as i}from"./app-D5-RCq7A.js";const c={},u=n("h1",{id:"plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin"},[n("span",null,"Plugin")])],-1),d=n("h2",{id:"official-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#official-plugin"},[n("span",null,"Official Plugin")])],-1),m=n("p",null,"VuePress team provides some official plugins.",-1),g=n("a",{href:"https://ecosystem.vuejs.press/plugins/analytics/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},"@vuepress/plugin-google-analytics",-1),h=i(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      id:</span><span style="color:#CE9178;"> &#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.</p><p>However, some plugins can be used multiple times (e.g. <a href="https://ecosystem.vuejs.press/plugins/container.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-container</a>), and you should check the documentation of the plugin itself for detailed guide.</p></div><h2 id="community-plugin" tabindex="-1"><a class="header-anchor" href="#community-plugin"><span>Community Plugin</span></a></h2><p>Community users have created lots of plugins and published them to <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM</a>. You should check the plugin&#39;s own documentation for detailed guide.</p><p>You can explore more plugins in <a href="https://marketplace.vuejs.press/" target="_blank" rel="noopener noreferrer">VuePress Marketplace</a>.</p><h2 id="local-plugin" tabindex="-1"><a class="header-anchor" href="#local-plugin"><span>Local Plugin</span></a></h2><p>If you want to use your own plugin but don&#39;t want to publish it, you can create a local plugin.</p>`,7),f=i(`<p>But if you have too many things to do in your config file, you can consider to extract them into separate plugins, and use them in your config file:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> myPlugin</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./path/to/my-plugin.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">myPlugin</span><span style="color:#D4D4D4;">()],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function y(v,D){const s=o("RouteLink");return p(),r("div",null,[u,n("p",null,[e("With the help of "),l(s,{to:"/reference/plugin-api.html"},{default:a(()=>[e("Plugin API")]),_:1}),e(", VuePress plugin can provide different features for you.")]),d,m,n("p",null,[e("You need to import and use them in your config file via the "),l(s,{to:"/reference/config.html#plugins"},{default:a(()=>[e("plugins")]),_:1}),e(" option. For example, use the "),g,e(" to integrate Google Analytics:")]),h,n("p",null,[e("It is recommended to use the "),l(s,{to:"/guide/configuration.html#config-file"},{default:a(()=>[e("Config File")]),_:1}),e(" directly as a plugin, because "),l(s,{to:"/reference/config.html#plugin-api"},{default:a(()=>[e("almost all of the Plugin APIs are available")]),_:1}),e(", which would be more convenient in most cases.")]),f,n("p",null,[e("You can refer to "),l(s,{to:"/advanced/plugin.html"},{default:a(()=>[e("Advanced > Writing a Plugin")]),_:1}),e(" for how to write your own plugin.")])])}const C=t(c,[["render",y],["__file","plugin.html.vue"]]),_=JSON.parse('{"path":"/guide/plugin.html","title":"Plugin","lang":"zh-CN","frontmatter":{"description":"Plugin With the help of , VuePress plugin can provide different features for you. Official Plugin VuePress team provides some official plugins. You need to import and use them i...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/guide/plugin.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Plugin"}],["meta",{"property":"og:description","content":"Plugin With the help of , VuePress plugin can provide different features for you. Official Plugin VuePress team provides some official plugins. You need to import and use them i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-09T14:13:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-09T14:13:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plugin\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-09T14:13:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Official Plugin","slug":"official-plugin","link":"#official-plugin","children":[]},{"level":2,"title":"Community Plugin","slug":"community-plugin","link":"#community-plugin","children":[]},{"level":2,"title":"Local Plugin","slug":"local-plugin","link":"#local-plugin","children":[]}],"git":{"updatedTime":1717942398000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2},{"name":"Abbas mkhzomi","email":"amkhzomi@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"guide/plugin.md"}');export{C as comp,_ as data};
