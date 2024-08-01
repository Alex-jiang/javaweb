import{_ as i,r as t,o as p,c,a as e,b as s,d as l,w as a,e as o}from"./app-D5-RCq7A.js";const r={},d=o('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>',5),u=e("code",null,"--config",-1),v=o(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">vuepress</span><span style="color:#CE9178;"> dev</span><span style="color:#CE9178;"> docs</span><span style="color:#569CD6;"> --config</span><span style="color:#CE9178;"> my-config.ts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>一个基础的配置文件是这样的：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> viteBundler</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">  lang:</span><span style="color:#CE9178;"> &#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  title:</span><span style="color:#CE9178;"> &#39;你好， VuePress ！&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  description:</span><span style="color:#CE9178;"> &#39;这是我的第一个 VuePress 站点&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"提示",-1),y=o(`<h2 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件"><span>客户端配置文件</span></a></h2><p>在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vuepress</span></span>
<span class="line"><span>│  │  ├─ client.js   &lt;--- 客户端配置文件</span></span>
<span class="line"><span>│  │  └─ config.js   &lt;--- 配置文件</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>├─ .gitignore</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，我们也有关于客户端配置文件的路径约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>一个基础的客户端配置文件是这样的：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#9CDCFE;">  rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),C={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"提示",-1),g=e("p",null,"和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。",-1);function f(b,E){const n=t("RouteLink");return p(),c("div",null,[d,e("p",null,[s("你也可以通过 "),l(n,{to:"/zh/reference/cli.html"},{default:a(()=>[s("命令行接口")]),_:1}),s(" 的 "),u,s(" 选项来指定配置文件：")]),v,e("div",D,[m,e("p",null,[s("前往 "),l(n,{to:"/zh/reference/config.html"},{default:a(()=>[s("配置参考")]),_:1}),s(" 查看所有 VuePress 配置。")])]),y,e("div",C,[h,g,e("p",null,[s("可以前往 "),l(n,{to:"/zh/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[s("深入 > Cookbook > 客户端配置的使用方法")]),_:1}),s(" 来了解更多信息。")])])])}const k=i(r,[["render",f],["__file","configuration.html.vue"]]),x=JSON.parse('{"path":"/zh/guide/configuration.html","title":"配置","lang":"zh-CN","frontmatter":{"description":"配置 配置文件 VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。你可以使用 .vuepress/config.ts 来得到更好的类型提示。 具体而言，我们对于配置文件的路径有着约定（按照优先顺序）： 当前工作目录 cwd 下： vuepress.config.ts vuep...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/zh/guide/configuration.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"配置 配置文件 VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。你可以使用 .vuepress/config.ts 来得到更好的类型提示。 具体而言，我们对于配置文件的路径有着约定（按照优先顺序）： 当前工作目录 cwd 下： vuepress.config.ts vuep..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T16:29:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-26T16:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-26T16:29:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"客户端配置文件","slug":"客户端配置文件","link":"#客户端配置文件","children":[]}],"git":{"updatedTime":1706286583000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":4}]},"autoDesc":true,"filePathRelative":"zh/guide/configuration.md"}');export{k as comp,x as data};
