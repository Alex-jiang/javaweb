import{_ as a,r as i,o,c as p,a as e,b as l,d as n,w as s,e as r}from"./app-gdqwCnl8.js";const d={},c=e("h1",{id:"theme-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-api"},[e("span",null,"Theme API")])],-1),u=r(`<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options"><span>Basic Options</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the theme.</p><p>It should follow the naming convention, and ensure consistency with the package name when publishing to NPM:</p><ul><li>Non-scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li><p>Details:</p><p>A theme should never be used multiple times, so this option is not supported in theme API.</p></li></ul><h2 id="theme-specific-options" tabindex="-1"><a class="header-anchor" href="#theme-specific-options"><span>Theme Specific Options</span></a></h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>extends</span></a></h3><ul><li><p>Type: <code>Theme</code></p></li><li><p>Details:</p><p>The theme to inherit.</p><p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme directly. Theme specific options will override according to following rules:</p><ul><li><a href="#plugins">plugins</a>: When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>: Child theme templates will override parent theme templates.</li></ul><p>Multi-level inheritance is supported, i.e. theme B could be extended from theme A, and then theme C could be extended from theme B. In other words, a theme could have a parent theme, a grandparent theme and so on.</p></li><li><p>Example:</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // inherit the default theme</span></span>
<span class="line"><span style="color:#9CDCFE;">  extends:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3>`,10),h=e("li",null,[e("p",null,[l("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),m=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use in the theme.")],-1),f=e("p",null,"Also see:",-1),g=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild"},[e("span",null,"templateBuild")])],-1),D=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),v=e("p",null,"Details:",-1),_=e("p",null,"Specify the path of the HTML template for build.",-1),y=e("p",null,"Also see:",-1),b=e("h3",{id:"templatebuildrenderer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuildrenderer"},[e("span",null,"templateBuildRenderer")])],-1),C=e("li",null,[e("p",null,[l("Type: "),e("code",null,"TemplateRenderer")])],-1),T=e("p",null,"Details:",-1),x=e("p",null,"Specify the HTML template renderer to be used for build.",-1),A=e("p",null,"Also see:",-1),w=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev"},[e("span",null,"templateDev")])],-1),k=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),P=e("p",null,"Details:",-1),B=e("p",null,"Specify the HTML template for dev.",-1),I=e("p",null,"Also see:",-1);function E(N,F){const t=i("RouteLink");return o(),p("div",null,[c,e("p",null,[l("A VuePress theme also works as a plugin, so Theme API can accept all the options of "),n(t,{to:"/reference/plugin-api.html"},{default:s(()=>[l("Plugin API")]),_:1}),l(" with following differences.")]),u,e("ul",null,[h,m,e("li",null,[f,e("ul",null,[e("li",null,[n(t,{to:"/reference/config.html#plugins"},{default:s(()=>[l("Config > plugins")]),_:1})])])])]),g,e("ul",null,[D,e("li",null,[v,_,e("p",null,[l("It would override the default value of "),n(t,{to:"/reference/config.html#templatebuild"},{default:s(()=>[l("templateBuild")]),_:1}),l(", and could be overridden by user config.")])]),e("li",null,[y,e("ul",null,[e("li",null,[n(t,{to:"/reference/config.html#templatebuild"},{default:s(()=>[l("Config > templateBuild")]),_:1})])])])]),b,e("ul",null,[C,e("li",null,[T,x,e("p",null,[l("It would override the default value of "),n(t,{to:"/reference/config.html#templatebuildrenderer"},{default:s(()=>[l("templateBuildRenderer")]),_:1}),l(", and could be overridden by user config.")])]),e("li",null,[A,e("ul",null,[e("li",null,[n(t,{to:"/reference/config.html#templatebuildrenderer"},{default:s(()=>[l("Config > templateBuildRenderer")]),_:1})])])])]),w,e("ul",null,[k,e("li",null,[P,B,e("p",null,[l("It would override the default value of "),n(t,{to:"/reference/config.html#templatedev"},{default:s(()=>[l("templateDev")]),_:1}),l(", but could be overridden by user config.")])]),e("li",null,[I,e("ul",null,[e("li",null,[n(t,{to:"/reference/config.html#templatedev"},{default:s(()=>[l("Config > templateDev")]),_:1})])])])])])}const S=a(d,[["render",E],["__file","theme-api.html.vue"]]),V=JSON.parse('{"path":"/reference/theme-api.html","title":"Theme API","lang":"zh-CN","frontmatter":{"description":"Theme API A VuePress theme also works as a plugin, so Theme API can accept all the options of with following differences. Basic Options name Type: string Details: Name of the th...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./reference/theme-api.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Theme API"}],["meta",{"property":"og:description","content":"Theme API A VuePress theme also works as a plugin, so Theme API can accept all the options of with following differences. Basic Options name Type: string Details: Name of the th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T15:46:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T15:46:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Theme API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T15:46:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Options","slug":"basic-options","link":"#basic-options","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"multiple","slug":"multiple","link":"#multiple","children":[]}]},{"level":2,"title":"Theme Specific Options","slug":"theme-specific-options","link":"#theme-specific-options","children":[{"level":3,"title":"extends","slug":"extends","link":"#extends","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"templateBuild","slug":"templatebuild","link":"#templatebuild","children":[]},{"level":3,"title":"templateBuildRenderer","slug":"templatebuildrenderer","link":"#templatebuildrenderer","children":[]},{"level":3,"title":"templateDev","slug":"templatedev","link":"#templatedev","children":[]}]}],"git":{"updatedTime":1707234403000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3}]},"autoDesc":true,"filePathRelative":"reference/theme-api.md"}');export{S as comp,V as data};
