import{_ as o,r as i,o as r,c as p,a as l,d as a,w as s,b as e,e as t}from"./app-BVk3uafa.js";const d={},c=l("h1",{id:"frontmatter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#frontmatter"},[l("span",null,"Frontmatter")])],-1),u=l("h2",{id:"date",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#date"},[l("span",null,"date")])],-1),m=l("li",null,[l("p",null,[e("类型： "),l("code",null,"string")])],-1),h=l("li",null,[l("p",null,"详情："),l("p",null,"页面的创建日期。"),l("p",null,[e("应按照 "),l("code",null,"yyyy-MM-dd"),e(" 的格式来指定日期，或者遵循 "),l("a",{href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},"YAML Timestamp Type"),e(" 。")])],-1),y=l("p",null,"参考：",-1),D=l("h2",{id:"description",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#description"},[l("span",null,"description")])],-1),v=l("li",null,[l("p",null,[e("类型： "),l("code",null,"string")])],-1),g=l("li",null,[l("p",null,"详情："),l("p",null,"页面的描述。"),l("p",null,[e("它将会覆盖站点配置中的 "),l("code",null,"description"),e(" 配置项。")])],-1),_=l("p",null,"参考：",-1),b=t(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2><ul><li><p>类型： <code>HeadConfig[]</code></p></li><li><p>详情：</p><p>页面 <code>&lt;head&gt;</code> 标签内添加的额外标签。</p></li><li><p>示例：</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foo</span></span>
<span class="line"><span style="color:#569CD6;">      content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yaml 数组语法</span></span>
<span class="line"><span style="color:#D4D4D4;">  - [</span><span style="color:#CE9178;">meta</span><span style="color:#D4D4D4;">, { </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bar</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">方括号语法</span><span style="color:#D4D4D4;"> }]</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染为：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">meta</span><span style="color:#9CDCFE;"> name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foo&quot;</span><span style="color:#9CDCFE;"> content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;yaml 数组语法&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">meta</span><span style="color:#9CDCFE;"> name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bar&quot;</span><span style="color:#9CDCFE;"> content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;方括号语法&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),f=l("h2",{id:"lang",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#lang"},[l("span",null,"lang")])],-1),C=l("li",null,[l("p",null,[e("类型： "),l("code",null,"string")])],-1),k=l("li",null,[l("p",null,"详情："),l("p",null,"页面的语言。"),l("p",null,[e("它将会覆盖站点配置中的 "),l("code",null,"lang"),e(" 配置项")])],-1),E=l("p",null,"参考：",-1),x=t(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h2><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>页面的布局。</p><p>布局是由主题提供的。如果你不指定该 Frontmatter ，则会使用默认布局。你应该参考主题自身的文档来了解其提供了哪些布局。</p><p>如果主题布局无法满足你的需求，你可以使用自定义布局组件。</p></li><li><p>示例：</p></li></ul><p>在 <code>.vuepress/client.ts</code> 文件中注册一个布局组件：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> CustomLayout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./CustomLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    CustomLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Frontmatter 中设置自定义布局：</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">layout</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">CustomLayout</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink"><span>permalink</span></a></h2>`,7),F=l("li",null,[l("p",null,[e("类型： "),l("code",null,"string | null")])],-1),M=l("li",null,[l("p",null,"详情："),l("p",null,"页面的永久链接。"),l("p",null,"它将会覆盖根据文件路径来决定的默认路由路径。"),l("p",null,[e("当被设置为 "),l("code",null,"null"),e(" 时，将会禁用页面的永久链接。")])],-1),P=l("p",null,"参考：",-1),z=l("li",null,[l("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),A=t(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern"><span>permalinkPattern</span></a></h2><ul><li><p>类型： <code>string | null</code></p></li><li><p>详情：</p><p>为页面生成永久链接的 Pattern 。</p><p>它将会覆盖站点配置中的 <code>permalinkPattern</code> 配置项。</p><p>如果 Frontmatter 中设置了 <code>permalink</code> ，那么这个字段则不会生效。</p></li><li><p>使用：</p><table><thead><tr><th>Pattern</th><th>描述</th></tr></thead><tbody><tr><td><code>:year</code></td><td>创建日期的 年 部分</td></tr><tr><td><code>:month</code></td><td>创建日期的 月 部分</td></tr><tr><td><code>:day</code></td><td>创建日期的 日 部分</td></tr><tr><td><code>:slug</code></td><td>页面文件名的 Slug</td></tr><tr><td><code>:raw</code></td><td>原始路由路径</td></tr></tbody></table><p><code>:year</code>, <code>:month</code> 和 <code>:day</code> Pattern 根据如下优先级进行解析：</p><ul><li>Frontmatter 中的 <code>date</code> 字段。</li><li>符合 <code>yyyy-MM-dd-foobar.md</code> 或 <code>yyyy-MM-foobar.md</code> 日期格式的文件名。</li><li>符合 <code>yyyy/MM/dd/foobar.md</code> 或 <code>yyyy/MM/foobar.md</code> 日期格式的目录名。</li><li>默认值 <code>0000-00-00</code> 。</li></ul></li><li><p>示例 1 ：</p><p>页面文件名是 <code>foo-bar.md</code> 。</p><p>页面 Frontmatter 是：</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">date</span><span style="color:#D4D4D4;">: 2021-01-03</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/foo-bar.html</code> 。</p><ul><li><p>示例 2 ：</p><p>页面文件名是 <code>2021-01-03-bar-baz.md</code>。</p><p>页面 Frontmatter 是：</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/bar-baz.html</code> 。</p>`,7),N=l("li",null,[l("a",{href:"#date"},"Frontmatter > date")],-1),T=l("li",null,[l("a",{href:"#permalink"},"Frontmatter > permalink")],-1),L=l("h2",{id:"routemeta",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#routemeta"},[l("span",null,"routeMeta")])],-1),q=l("li",null,[l("p",null,[e("类型： "),l("code",null,"Record<string, unknown>")])],-1),B=l("li",null,[l("p",null,"详情："),l("p",null,"附加到页面路由的自定义数据。")],-1),I=l("p",null,"参考：",-1),V=l("h2",{id:"title",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#title"},[l("span",null,"title")])],-1),w=l("li",null,[l("p",null,[e("类型： "),l("code",null,"string")])],-1),H=l("li",null,[l("p",null,"详情："),l("p",null,"页面的标题。"),l("p",null,[e("如果你不在 Frontmatter 中设置 "),l("code",null,"title"),e(" ，那么页面中第一个一级标题（即 "),l("code",null,"# title"),e("）的内容会被当作标题使用。")])],-1),R=l("p",null,"参考：",-1);function S(Y,Z){const n=i("RouteLink");return r(),p("div",null,[c,u,l("ul",null,[m,h,l("li",null,[y,l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/node-api.html#date"},{default:s(()=>[e("Node API > Page 属性 > date")]),_:1})])])])]),D,l("ul",null,[v,g,l("li",null,[_,l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/config.html#description"},{default:s(()=>[e("配置 > description")]),_:1})])])])]),b,l("ul",null,[l("li",null,[e("参考： "),l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/config.html#head"},{default:s(()=>[e("配置 > head")]),_:1})])])])]),f,l("ul",null,[C,k,l("li",null,[E,l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/config.html#lang"},{default:s(()=>[e("配置 > lang")]),_:1})]),l("li",null,[a(n,{to:"/zh/reference/node-api.html#lang"},{default:s(()=>[e("Node API > Page 属性 > lang")]),_:1})])])])]),x,l("ul",null,[F,M,l("li",null,[P,l("ul",null,[z,l("li",null,[a(n,{to:"/zh/guide/page.html#%E8%B7%AF%E7%94%B1"},{default:s(()=>[e("指南 > 页面 > 路由")]),_:1})]),l("li",null,[a(n,{to:"/zh/reference/node-api.html#permalink"},{default:s(()=>[e("Node API > Page 属性 > permalink")]),_:1})])])])]),A,l("ul",null,[l("li",null,[e("参考： "),l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/config.html#permalinkpattern"},{default:s(()=>[e("配置 > permalinkPattern")]),_:1})]),N,T,l("li",null,[a(n,{to:"/zh/reference/node-api.html#permalink"},{default:s(()=>[e("Node API > Page 属性 > permalink")]),_:1})])])])]),L,l("ul",null,[q,B,l("li",null,[I,l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/node-api.html#routeMeta"},{default:s(()=>[e("Node API > Page 属性 > routeMeta")]),_:1})])])])]),V,l("ul",null,[w,H,l("li",null,[R,l("ul",null,[l("li",null,[a(n,{to:"/zh/reference/node-api.html#title"},{default:s(()=>[e("Node API > Page 属性 > title")]),_:1})])])])])])}const J=o(d,[["render",S],["__file","frontmatter.html.vue"]]),O=JSON.parse('{"path":"/zh/reference/frontmatter.html","title":"Frontmatter","lang":"zh-CN","frontmatter":{"description":"Frontmatter date 类型： string 详情： 页面的创建日期。 应按照 yyyy-MM-dd 的格式来指定日期，或者遵循 YAML Timestamp Type 。 参考： description 类型： string 详情： 页面的描述。 它将会覆盖站点配置中的 description 配置项。 参考： head 类型： HeadC...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/zh/reference/frontmatter.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Frontmatter"}],["meta",{"property":"og:description","content":"Frontmatter date 类型： string 详情： 页面的创建日期。 应按照 yyyy-MM-dd 的格式来指定日期，或者遵循 YAML Timestamp Type 。 参考： description 类型： string 详情： 页面的描述。 它将会覆盖站点配置中的 description 配置项。 参考： head 类型： HeadC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:45:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:45:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frontmatter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:45:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"date","slug":"date","link":"#date","children":[]},{"level":2,"title":"description","slug":"description","link":"#description","children":[]},{"level":2,"title":"head","slug":"head","link":"#head","children":[]},{"level":2,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":2,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"permalink","slug":"permalink","link":"#permalink","children":[]},{"level":2,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]},{"level":2,"title":"routeMeta","slug":"routemeta","link":"#routemeta","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]}],"git":{"updatedTime":1715863544000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"张怀文","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/reference/frontmatter.md"}');export{J as comp,O as data};
