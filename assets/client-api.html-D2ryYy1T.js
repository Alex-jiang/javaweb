import{_ as p,r as o,o as r,c,a as e,d as l,w as n,b as s,e as t}from"./app-CPK6wcVl.js";const d={},u=t(`<h1 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api"><span>Client API</span></a></h1><p>Client API can be imported from <code>vuepress/client</code>.</p><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2><h3 id="useclientdata" tabindex="-1"><a class="header-anchor" href="#useclientdata"><span>useClientData</span></a></h3><ul><li><p>Details:</p><p>Returns all the client data ref objects.</p><p>Each property can also be accessed by the following composition APIs.</p></li><li><p>Example:</p></li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useClientData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#4FC1FF;">  pageData</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  pageFrontmatter</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  pageHead</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  pageHeadTitle</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  pageLang</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  routeLocale</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  siteData</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#4FC1FF;">  siteLocaleData</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">} = </span><span style="color:#DCDCAA;">useClientData</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usepagedata" tabindex="-1"><a class="header-anchor" href="#usepagedata"><span>usePageData</span></a></h3>`,7),h=e("li",null,[e("p",null,"Details:"),e("p",null,"Returns the page data ref object of current page.")],-1),v=e("p",null,"Also see:",-1),D=e("h3",{id:"usepagefrontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagefrontmatter"},[e("span",null,"usePageFrontmatter")])],-1),g=e("ul",null,[e("li",null,[e("p",null,"Details:"),e("p",null,"Returns the frontmatter ref object of current page."),e("p",null,[s("The value is the "),e("code",null,"frontmatter"),s(" property of the page data.")])])],-1),f=e("h3",{id:"usepagehead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagehead"},[e("span",null,"usePageHead")])],-1),_=e("p",null,"Details:",-1),y=e("p",null,"Returns the head config ref object of current page.",-1),m=t('<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle"><span>usePageHeadTitle</span></a></h3><ul><li><p>Details:</p><p>Returns the head title ref object of current page.</p><p>The value is obtained by joining the page title and site title.</p></li></ul><h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang"><span>usePageLang</span></a></h3><ul><li><p>Details:</p><p>Returns the language ref object of current page.</p><p>The value is the <code>lang</code> property of the page data.</p></li></ul><h2 id="useroutes" tabindex="-1"><a class="header-anchor" href="#useroutes"><span>useRoutes</span></a></h2>',5),b=e("li",null,[e("p",null,"Details:"),e("p",null,"Returns the routes ref object."),e("p",null,[s("The value is the "),e("code",null,"routes"),s(" property of the site data.")])],-1),C=e("p",null,"Also see:",-1),E=e("h3",{id:"useroutelocale",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#useroutelocale"},[e("span",null,"useRouteLocale")])],-1),k=e("p",null,"Details:",-1),P=e("p",null,"Returns the locale path ref object of current route.",-1),A=t('<h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata"><span>useSiteData</span></a></h3><ul><li><p>Details:</p><p>Returns the site data ref object.</p></li></ul><h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata"><span>useSiteLocaleData</span></a></h3><ul><li><p>Details:</p><p>Returns the site data ref object of current locale.</p><p>The properties of current locale have been merged into the root-level properties.</p></li></ul><h2 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers"><span>Helpers</span></a></h2><h3 id="defineclientconfig" tabindex="-1"><a class="header-anchor" href="#defineclientconfig"><span>defineClientConfig</span></a></h3>',6),F=e("p",null,"Details:",-1),R=e("p",null,"Also see:",-1),x=e("h3",{id:"resolveroute",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolveroute"},[e("span",null,"resolveRoute")])],-1),S=e("li",null,[e("p",null,"Details:"),e("p",null,"Parses the route of the given link.")],-1),T=e("p",null,"Also see:",-1),j=e("h2",{id:"resolveroutepath",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolveroutepath"},[e("span",null,"resolveRoutePath")])],-1),V=e("li",null,[e("p",null,"Details:"),e("p",null,"Parses the route path of the given link.")],-1),I=e("p",null,"Also see:",-1),w=e("h3",{id:"withbase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#withbase"},[e("span",null,"withBase")])],-1),L=e("p",null,"Details:",-1),B=e("p",null,"Also see:",-1),H=t(`<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants"><span>Constants</span></a></h2><p>There are some constants that available in the client side code.</p><p>To shim the types of these constants in client side code, add <code>vuepress/client-types</code> to your <code>tsconfig.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;types&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;vuepress/client-types&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress-version" tabindex="-1"><a class="header-anchor" href="#vuepress-version"><span><code>__VUEPRESS_VERSION__</code></span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Version of VuePress core package.</p></li></ul><h3 id="vuepress-base" tabindex="-1"><a class="header-anchor" href="#vuepress-base"><span><code>__VUEPRESS_BASE__</code></span></a></h3>`,7),N=e("li",null,[e("p",null,[s("Type: "),e("code",null,"string")])],-1),U=e("p",null,"Details:",-1),q=t('<h3 id="vuepress-dev" tabindex="-1"><a class="header-anchor" href="#vuepress-dev"><span><code>__VUEPRESS_DEV__</code></span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in <code>dev</code> mode.</p></li></ul><h3 id="vuepress-ssr" tabindex="-1"><a class="header-anchor" href="#vuepress-ssr"><span><code>__VUEPRESS_SSR__</code></span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in server-side-rendering (SSR) build.</p></li></ul><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>Advanced</span></a></h2>',5),O={id:"resolvers",tabindex:"-1"},z={class:"header-anchor",href:"#resolvers"},G=t(`<ul><li><p>Type: <code>Record&lt;string, Function&gt;</code></p></li><li><p>Details:</p><p>An reactive object, methods of which determining how to resolve global computed.</p></li><li><p>Example:</p></li></ul><p>Customizing the format of <code>&lt;title&gt;</code> in client config file:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">resolvers</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#9CDCFE;">    resolvers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolvePageHeadTitle</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteLocale</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line"><span style="color:#CE9178;">      \`</span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">siteLocale</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;"> &gt; </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p><code>resolvers</code> will affect the basic functionality of VuePress. Please make sure you have fully understood its purpose before modifying it.</p></div>`,4);function J($,M){const a=o("RouteLink"),i=o("Badge");return r(),c("div",null,[u,e("ul",null,[h,e("li",null,[v,e("ul",null,[e("li",null,[l(a,{to:"/reference/node-api.html#data"},{default:n(()=>[s("Node API > Page Properties > data")]),_:1})]),e("li",null,[l(a,{to:"/reference/plugin-api.html#extendspage"},{default:n(()=>[s("Plugin API > extendsPage")]),_:1})])])])]),D,g,f,e("ul",null,[e("li",null,[_,y,e("p",null,[s("The value is obtained by merging and deduplicating "),l(a,{to:"/reference/frontmatter.html#head"},{default:n(()=>[s("head")]),_:1}),s(" frontmatter and "),l(a,{to:"/reference/config.html#head"},{default:n(()=>[s("head")]),_:1}),s(" config.")])])]),m,e("ul",null,[b,e("li",null,[C,e("ul",null,[e("li",null,[l(a,{to:"/advanced/cookbook/resolving-routes.html"},{default:n(()=>[s("Advanced > Cookbook > Resolving Routes")]),_:1})])])])]),E,e("ul",null,[e("li",null,[k,P,e("p",null,[s("The value is one of the keys of the "),l(a,{to:"/reference/config.html#locales"},{default:n(()=>[s("locales")]),_:1}),s(" config.")])])]),A,e("ul",null,[e("li",null,[F,e("p",null,[s("Helper for creating "),l(a,{to:"/reference/plugin-api.html#clientconfigfile"},{default:n(()=>[s("clientConfigFile")]),_:1}),s(".")])]),e("li",null,[R,e("ul",null,[e("li",null,[l(a,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:n(()=>[s("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])]),x,e("ul",null,[S,e("li",null,[T,e("ul",null,[e("li",null,[l(a,{to:"/advanced/cookbook/resolving-routes.html"},{default:n(()=>[s("Advanced > Cookbook > Resolving Routes")]),_:1})])])])]),j,e("ul",null,[V,e("li",null,[I,e("ul",null,[e("li",null,[l(a,{to:"/advanced/cookbook/resolving-routes.html"},{default:n(()=>[s("Advanced > Cookbook > Resolving Routes")]),_:1})])])])]),w,e("ul",null,[e("li",null,[L,e("p",null,[s("Prefix URL with site "),l(a,{to:"/reference/config.html#base"},{default:n(()=>[s("base")]),_:1}),s(".")])]),e("li",null,[B,e("ul",null,[e("li",null,[l(a,{to:"/guide/assets.html#base-helper"},{default:n(()=>[s("Guide > Assets > Base Helper")]),_:1})])])])]),H,e("ul",null,[N,e("li",null,[U,e("p",null,[s("The "),l(a,{to:"/reference/config.html#base"},{default:n(()=>[s("base")]),_:1}),s(" option from config.")])])]),q,e("h3",O,[e("a",z,[e("span",null,[s("resolvers "),l(i,{text:"experimental"})])])]),G])}const K=p(d,[["render",J],["__file","client-api.html.vue"]]),Q=JSON.parse('{"path":"/reference/client-api.html","title":"Client API","lang":"zh-CN","frontmatter":{"description":"Client API Client API can be imported from vuepress/client. Composition API useClientData Details: Returns all the client data ref objects. Each property can also be accessed by...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/reference/client-api.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Client API"}],["meta",{"property":"og:description","content":"Client API Client API can be imported from vuepress/client. Composition API useClientData Details: Returns all the client data ref objects. Each property can also be accessed by..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Client API\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"useClientData","slug":"useclientdata","link":"#useclientdata","children":[]},{"level":3,"title":"usePageData","slug":"usepagedata","link":"#usepagedata","children":[]},{"level":3,"title":"usePageFrontmatter","slug":"usepagefrontmatter","link":"#usepagefrontmatter","children":[]},{"level":3,"title":"usePageHead","slug":"usepagehead","link":"#usepagehead","children":[]},{"level":3,"title":"usePageHeadTitle","slug":"usepageheadtitle","link":"#usepageheadtitle","children":[]},{"level":3,"title":"usePageLang","slug":"usepagelang","link":"#usepagelang","children":[]}]},{"level":2,"title":"useRoutes","slug":"useroutes","link":"#useroutes","children":[{"level":3,"title":"useRouteLocale","slug":"useroutelocale","link":"#useroutelocale","children":[]},{"level":3,"title":"useSiteData","slug":"usesitedata","link":"#usesitedata","children":[]},{"level":3,"title":"useSiteLocaleData","slug":"usesitelocaledata","link":"#usesitelocaledata","children":[]}]},{"level":2,"title":"Helpers","slug":"helpers","link":"#helpers","children":[{"level":3,"title":"defineClientConfig","slug":"defineclientconfig","link":"#defineclientconfig","children":[]},{"level":3,"title":"resolveRoute","slug":"resolveroute","link":"#resolveroute","children":[]}]},{"level":2,"title":"resolveRoutePath","slug":"resolveroutepath","link":"#resolveroutepath","children":[{"level":3,"title":"withBase","slug":"withbase","link":"#withbase","children":[]}]},{"level":2,"title":"Constants","slug":"constants","link":"#constants","children":[{"level":3,"title":"__VUEPRESS_VERSION__","slug":"vuepress-version","link":"#vuepress-version","children":[]},{"level":3,"title":"__VUEPRESS_BASE__","slug":"vuepress-base","link":"#vuepress-base","children":[]},{"level":3,"title":"__VUEPRESS_DEV__","slug":"vuepress-dev","link":"#vuepress-dev","children":[]},{"level":3,"title":"__VUEPRESS_SSR__","slug":"vuepress-ssr","link":"#vuepress-ssr","children":[]}]},{"level":2,"title":"Advanced","slug":"advanced","link":"#advanced","children":[{"level":3,"title":"resolvers","slug":"resolvers","link":"#resolvers","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"reference/client-api.md"}');export{K as comp,Q as data};
