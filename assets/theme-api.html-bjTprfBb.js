import{_ as a,r as p,o as i,c as o,a as e,b as l,d as t,w as s,e as r}from"./app-CPK6wcVl.js";const d={},c=e("h1",{id:"主题-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题-api"},[e("span",null,"主题 API")])],-1),u=r(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项"><span>基础配置项</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>主题的名称。</p><p>它应遵从如下命名约定，并且在发布到 NPM 时应确保和包名保持一致：</p><ul><li>非 Scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li><p>详情：</p><p>主题永远不能被多次使用，因此主题 API 不支持该配置项。</p></li></ul><h2 id="主题特定配置项" tabindex="-1"><a class="header-anchor" href="#主题特定配置项"><span>主题特定配置项</span></a></h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>extends</span></a></h3><ul><li><p>类型： <code>Theme</code></p></li><li><p>详情：</p><p>要继承的主题。</p><p>父主题的所有主题 API 都会被继承，但是子主题不会直接覆盖父主题。主题特定的配置项会根据以下规则进行覆盖：</p><ul><li><a href="#plugins">plugins</a>： 当同一个插件在子主题和父主题中都被使用时，如果该插件不支持被多次使用，那么只有在子主题中使用的插件会生效。</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>： 子主题的模板会覆盖父主题的模板。</li></ul><p>支持多级继承，即主题 B 可以继承主题 A ，然后主题 C 可以继承主题 B 。换句话说，一个主题可以有一个父主题、一个祖父主题等等。</p></li><li><p>示例：</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // 继承默认主题</span></span>
<span class="line"><span style="color:#9CDCFE;">  extends:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3>`,10),h=e("li",null,[e("p",null,[l("类型： "),e("code",null,"(Plugin | Plugin[])[]")])],-1),m=e("li",null,[e("p",null,"详情："),e("p",null,"主题中要使用的插件。")],-1),_=e("p",null,"参考：",-1),D=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild"},[e("span",null,"templateBuild")])],-1),f=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),v=e("p",null,"详情：",-1),g=e("p",null,"指定构建时使用的 HTML 模板路径。",-1),y=e("p",null,"参考：",-1),b=e("h3",{id:"templatebuildrenderer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuildrenderer"},[e("span",null,"templateBuildRenderer")])],-1),C=e("li",null,[e("p",null,[l("类型： "),e("code",null,"TemplateRenderer")])],-1),x=e("p",null,"详情：",-1),A=e("p",null,"指定构建时使用的 HTML 模板渲染函数。",-1),P=e("p",null,"参考：",-1),k=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev"},[e("span",null,"templateDev")])],-1),B=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),z=e("p",null,"详情：",-1),E=e("p",null,"指定开发时使用的 HTML 模板。",-1),I=e("p",null,"参考：",-1);function N(F,T){const n=p("RouteLink");return i(),o("div",null,[c,e("p",null,[l("VuePress 主题同样是一个插件，因此主题 API 可以接收 "),t(n,{to:"/zh/reference/plugin-api.html"},{default:s(()=>[l("插件 API")]),_:1}),l(" 的所有选项，但存在以下差别：")]),u,e("ul",null,[h,m,e("li",null,[_,e("ul",null,[e("li",null,[t(n,{to:"/zh/reference/config.html#plugins"},{default:s(()=>[l("配置 > plugins")]),_:1})])])])]),D,e("ul",null,[f,e("li",null,[v,g,e("p",null,[l("它会覆盖 "),t(n,{to:"/zh/reference/config.html#templatebuild"},{default:s(()=>[l("templateBuild")]),_:1}),l(" 的默认值，同时也会被用户配置覆盖。")])]),e("li",null,[y,e("ul",null,[e("li",null,[t(n,{to:"/zh/reference/config.html#templatebuild"},{default:s(()=>[l("配置 > templateBuild")]),_:1})])])])]),b,e("ul",null,[C,e("li",null,[x,A,e("p",null,[l("它会覆盖 "),t(n,{to:"/zh/reference/config.html#templatebuildrenderer"},{default:s(()=>[l("templateBuildRenderer")]),_:1}),l(" 的默认值，同时也会被用户配置覆盖。")])]),e("li",null,[P,e("ul",null,[e("li",null,[t(n,{to:"/zh/reference/config.html#templatebuildrenderer"},{default:s(()=>[l("配置 > templateBuildRenderer")]),_:1})])])])]),k,e("ul",null,[B,e("li",null,[z,E,e("p",null,[l("它会覆盖 "),t(n,{to:"/zh/reference/config.html#templatedev"},{default:s(()=>[l("templateDev")]),_:1}),l(" 的默认值，但是也会被用户配置覆盖。")])]),e("li",null,[I,e("ul",null,[e("li",null,[t(n,{to:"/zh/reference/config.html#templatedev"},{default:s(()=>[l("配置 > templateDev")]),_:1})])])])])])}const S=a(d,[["render",N],["__file","theme-api.html.vue"]]),V=JSON.parse('{"path":"/zh/reference/theme-api.html","title":"主题 API","lang":"zh-CN","frontmatter":{"description":"主题 API VuePress 主题同样是一个插件，因此主题 API 可以接收 的所有选项，但存在以下差别： 基础配置项 name 类型： string 详情： 主题的名称。 它应遵从如下命名约定，并且在发布到 NPM 时应确保和包名保持一致： 非 Scoped: vuepress-theme-foo Scoped: @org/vuepress-the...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/zh/reference/theme-api.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"主题 API"}],["meta",{"property":"og:description","content":"主题 API VuePress 主题同样是一个插件，因此主题 API 可以接收 的所有选项，但存在以下差别： 基础配置项 name 类型： string 详情： 主题的名称。 它应遵从如下命名约定，并且在发布到 NPM 时应确保和包名保持一致： 非 Scoped: vuepress-theme-foo Scoped: @org/vuepress-the..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主题 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基础配置项","slug":"基础配置项","link":"#基础配置项","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"multiple","slug":"multiple","link":"#multiple","children":[]}]},{"level":2,"title":"主题特定配置项","slug":"主题特定配置项","link":"#主题特定配置项","children":[{"level":3,"title":"extends","slug":"extends","link":"#extends","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"templateBuild","slug":"templatebuild","link":"#templatebuild","children":[]},{"level":3,"title":"templateBuildRenderer","slug":"templatebuildrenderer","link":"#templatebuildrenderer","children":[]},{"level":3,"title":"templateDev","slug":"templatedev","link":"#templatedev","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"zh/reference/theme-api.md"}');export{S as comp,V as data};
