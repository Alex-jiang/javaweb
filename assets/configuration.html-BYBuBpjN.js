import{_ as a,r as t,o as c,c as p,a as s,b as e,d as l,w as i,e as o}from"./app-D5-RCq7A.js";const r={},d=o('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file"><span>Config File</span></a></h2><p>The essential file for configuring a VuePress site is <code>.vuepress/config.js</code>, while TypeScript config file is also supported. You can use <code>.vuepress/config.ts</code> instead to get better types hint for VuePress config.</p><p>To be more specific, we have a convention for config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>',5),u=s("code",null,"--config",-1),f=o(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">vuepress</span><span style="color:#CE9178;"> dev</span><span style="color:#CE9178;"> docs</span><span style="color:#569CD6;"> --config</span><span style="color:#CE9178;"> my-config.ts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>A basic config file looks like this:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> viteBundler</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">  lang:</span><span style="color:#CE9178;"> &#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  title:</span><span style="color:#CE9178;"> &#39;Hello VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  description:</span><span style="color:#CE9178;"> &#39;Just playing around&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={class:"custom-container tip"},v=s("p",{class:"custom-container-title"},"TIP",-1),D=o(`<h2 id="client-config-file" tabindex="-1"><a class="header-anchor" href="#client-config-file"><span>Client Config File</span></a></h2><p>In most cases, the config file is sufficient to configure your VuePress site. However, sometimes users may want to add some client-side code directly. To help with this, VuePress also supports a client config file:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vuepress</span></span>
<span class="line"><span>│  │  ├─ client.js   &lt;--- client config file</span></span>
<span class="line"><span>│  │  └─ config.js   &lt;--- config file</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>├─ .gitignore</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similarly, we also have a convention for client config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>A basic client config file looks like this:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#9CDCFE;">  rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={class:"custom-container tip"},C=s("p",{class:"custom-container-title"},"TIP",-1),y=s("p",null,"Unlike config file, client config file could not be specified via CLI options.",-1);function h(b,E){const n=t("RouteLink");return c(),p("div",null,[d,s("p",null,[e("You can also specify the config file via "),u,e(" option of "),l(n,{to:"/reference/cli.html"},{default:i(()=>[e("CLI")]),_:1}),e(":")]),f,s("div",g,[v,s("p",null,[e("Check out the "),l(n,{to:"/reference/config.html"},{default:i(()=>[e("Config Reference")]),_:1}),e(" for a full list of VuePress config.")])]),D,s("div",m,[C,y,s("p",null,[e("To learn more about client config file, see "),l(n,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:i(()=>[e("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])}const k=a(r,[["render",h],["__file","configuration.html.vue"]]),A=JSON.parse('{"path":"/guide/configuration.html","title":"Configuration","lang":"zh-CN","frontmatter":{"description":"Configuration Config File The essential file for configuring a VuePress site is .vuepress/config.js, while TypeScript config file is also supported. You can use .vuepress/config...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/guide/configuration.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Configuration"}],["meta",{"property":"og:description","content":"Configuration Config File The essential file for configuring a VuePress site is .vuepress/config.js, while TypeScript config file is also supported. You can use .vuepress/config..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T16:29:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-26T16:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Configuration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-26T16:29:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Config File","slug":"config-file","link":"#config-file","children":[]},{"level":2,"title":"Client Config File","slug":"client-config-file","link":"#client-config-file","children":[]}],"git":{"updatedTime":1706286583000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":4}]},"autoDesc":true,"filePathRelative":"guide/configuration.md"}');export{k as comp,A as data};
