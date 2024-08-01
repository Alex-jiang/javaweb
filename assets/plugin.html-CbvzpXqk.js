import{_ as t,r as p,o as i,c,a as s,b as n,d as a,w as l,e as o}from"./app-gdqwCnl8.js";const r={},d=s("h1",{id:"开发插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#开发插件"},[s("span",null,"开发插件")])],-1),u={class:"custom-container tip"},D=s("p",{class:"custom-container-title"},"提示",-1),m=s("h2",{id:"创建一个插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建一个插件"},[s("span",null,"创建一个插件")])],-1),v=s("em",null,"插件对象",-1),y=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> fooPlugin</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=s("em",null,"插件对象",-1),g=s("em",null,"插件函数",-1),b=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 <em>插件对象</em> 或者 <em>插件函数</em> 作为返回值。于是，你的插件应该转换成这样的形式：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> fooPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布到-npm" tabindex="-1"><a class="header-anchor" href="#发布到-npm"><span>发布到 NPM</span></a></h2><p>在创建了插件之后，你需要在 <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json</a> 文件中遵循一定的约定，然后再将其发布到 NPM 上：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-plugin-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;vuepress-plugin&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),C=s("code",null,"name",-1),_=s("code",null,"vuepress-plugin-xxx",-1),E=s("code",null,"@org/vuepress-plugin-xxx",-1),f=s("em",null,"插件对象",-1),k=s("li",null,[n("在 "),s("code",null,"keywords"),n(" 中包含 "),s("code",null,"vuepress-plugin"),n(" ，这样用户可以在 NPM 上搜索到你的插件。")],-1);function x(A,F){const e=p("RouteLink");return i(),c("div",null,[d,s("div",u,[D,s("p",null,[n("在阅读该指南之前，你最好先了解一下 VuePress 的 "),a(e,{to:"/zh/advanced/architecture.html"},{default:l(()=>[n("架构")]),_:1}),n(" 。")])]),m,s("p",null,[n("插件是一个符合 "),a(e,{to:"/zh/reference/plugin-api.html"},{default:l(()=>[n("插件 API")]),_:1}),n(" 的普通 JavaScript 对象，称之为 "),v,n(" ：")]),y,s("p",null,[n("插件还可以是一个接收 "),a(e,{to:"/zh/reference/node-api.html#app"},{default:l(()=>[n("App 实例")]),_:1}),n(" 作为参数，且返回值为 "),h,n(" 的函数，称之为 "),g,n(" ：")]),b,s("ul",null,[s("li",null,[n("将 "),C,n(" 按照约定命名，即 "),_,n(" 或 "),E,n(" ，它应该和 "),f,n(" 的 "),a(e,{to:"/zh/reference/plugin-api.html#name"},{default:l(()=>[n("name")]),_:1}),n(" 字段保持一致。")]),k])])}const N=t(r,[["render",x],["__file","plugin.html.vue"]]),z=JSON.parse('{"path":"/zh/advanced/plugin.html","title":"开发插件","lang":"zh-CN","frontmatter":{"description":"开发插件 提示 在阅读该指南之前，你最好先了解一下 VuePress 的 。 创建一个插件 插件是一个符合 的普通 JavaScript 对象，称之为 插件对象 ： 插件还可以是一个接收 作为参数，且返回值为 插件对象 的函数，称之为 插件函数 ： 插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 插件对象 或者 插件...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./zh/advanced/plugin.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"开发插件"}],["meta",{"property":"og:description","content":"开发插件 提示 在阅读该指南之前，你最好先了解一下 VuePress 的 。 创建一个插件 插件是一个符合 的普通 JavaScript 对象，称之为 插件对象 ： 插件还可以是一个接收 作为参数，且返回值为 插件对象 的函数，称之为 插件函数 ： 插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 插件对象 或者 插件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T13:10:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-10T13:10:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T13:10:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"创建一个插件","slug":"创建一个插件","link":"#创建一个插件","children":[]},{"level":2,"title":"发布到 NPM","slug":"发布到-npm","link":"#发布到-npm","children":[]}],"git":{"updatedTime":1702213846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/advanced/plugin.md"}');export{N as comp,z as data};