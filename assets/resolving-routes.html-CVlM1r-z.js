import{_ as l,r,o as p,c as i,a as s,b as e,d as n,w as a,e as t}from"./app-C1hgw8qQ.js";const c={},d=s("h1",{id:"resolving-routes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#resolving-routes"},[s("span",null,"Resolving Routes")])],-1),u=s("h2",{id:"getting-all-routes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getting-all-routes"},[s("span",null,"Getting all routes")])],-1),D=t(`<p>The return value of <code>useRoutes</code> is a Ref object containing all routes. The keys are route paths of each route, and the values are the corresponding route information.</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useRoutes</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> routes</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRoutes</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#6A9955;">// {</span></span>
<span class="line"><span style="color:#6A9955;">// &#39;/&#39;: { meta: { title: &#39;Home&#39; }, loader: HomePageLoader },</span></span>
<span class="line"><span style="color:#6A9955;">// &#39;/404.html&#39;: { meta: { title: &#39;Not Found&#39; }, loader: NotFoundPageLoader },</span></span>
<span class="line"><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#6A9955;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> routePaths</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">computed</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> Object</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">keys</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">routes</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#6A9955;">// =&gt; [&#39;/‘, &#39;/404.html&#39;, &#39;/foo/&#39;, &#39;/bar/&#39;, ...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolving-route-path" tabindex="-1"><a class="header-anchor" href="#resolving-route-path"><span>Resolving route path</span></a></h2>`,3),h=t(`<p><code>resolveRoutePath</code> receives a link and an optional base path, and returns the resolved route path:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">resolveRoutePath</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> routePath</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">resolveRoutePath</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/foo/&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// =&gt; &#39;/foo/&#39;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> routePath</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">resolveRoutePath</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;baz.html&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;/foo/bar.html&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// =&gt; &#39;/foo/baz.html&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolving-route-information" tabindex="-1"><a class="header-anchor" href="#resolving-route-information"><span>Resolving route information</span></a></h2>`,3),v=t(`<p><code>resolveRoute</code> receives a link and an optional base path, and returns the resolved route information:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">resolveRoute</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">resolveRoute</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/foo/&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// =&gt; { notFound: false, path: &#39;/foo/&#39;, meta: { title: &#39;Foo&#39; }, loader: FooPageLoader }</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">resolveRoute</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;baz.html&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;/foo/bar.html&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// =&gt; { notFound: false, path: &#39;/foo/baz.html&#39;, meta: { title: &#39;Baz&#39; }, loader: BazPageLoader }</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">resolveRoute</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/not-exist.html&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// =&gt; { notFound: true, path: &#39;/not-exist.html&#39;, meta: { title: &#39;Not Found&#39; }, loader: NotFoundPageLoader }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There is a <code>notFound</code> field in the returned information, which is used to indicate whether a corresponding route exists for a given path. When the route does not exist, the <code>notFound</code> field would be <code>true</code>, the <code>path</code> field would be the normalized path, and the <code>meta</code> and <code>loader</code> fields would point to the default 404 page.</p>`,3);function m(y,g){const o=r("RouteLink");return p(),i("div",null,[d,u,s("p",null,[e("You can make use of "),n(o,{to:"/reference/client-api.html#useroutes"},{default:a(()=>[e("useRoutes")]),_:1}),e(" to get all routes information.")]),D,s("p",null,[e("You can make use of "),n(o,{to:"/reference/client-api.html#resolveroutepath"},{default:a(()=>[e("resolveRoutePath")]),_:1}),e(" to resolve the route path of the given link.")]),h,s("p",null,[e("You can make use of "),n(o,{to:"/reference/client-api.html#resolveroute"},{default:a(()=>[e("resolveRoute")]),_:1}),e(" to resolve route information for a given link.")]),v])}const f=l(c,[["render",m],["__file","resolving-routes.html.vue"]]),b=JSON.parse('{"path":"/advanced/cookbook/resolving-routes.html","title":"Resolving Routes","lang":"zh-CN","frontmatter":{"description":"Resolving Routes Getting all routes You can make use of to get all routes information. The return value of useRoutes is a Ref object containing all routes. The keys are route pa...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/advanced/cookbook/resolving-routes.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Resolving Routes"}],["meta",{"property":"og:description","content":"Resolving Routes Getting all routes You can make use of to get all routes information. The return value of useRoutes is a Ref object containing all routes. The keys are route pa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-24T08:18:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-24T08:18:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Resolving Routes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-24T08:18:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Getting all routes","slug":"getting-all-routes","link":"#getting-all-routes","children":[]},{"level":2,"title":"Resolving route path","slug":"resolving-route-path","link":"#resolving-route-path","children":[]},{"level":2,"title":"Resolving route information","slug":"resolving-route-information","link":"#resolving-route-information","children":[]}],"git":{"updatedTime":1716538738000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"advanced/cookbook/resolving-routes.md"}');export{f as comp,b as data};