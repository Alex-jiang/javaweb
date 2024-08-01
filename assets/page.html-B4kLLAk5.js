import{_ as r,r as i,o as l,c as d,a as t,b as e,d as o,w as a,e as s}from"./app-gdqwCnl8.js";const c={},p=s(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>Page</span></a></h1><p>VuePress is markdown-centered. Each markdown file inside your project is a standalone page.</p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing"><span>Routing</span></a></h2><p>By default, the route path of a page is determined by the relative path of your markdown file.</p><p>Assuming this is the directory structure of your markdown files:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>└─ docs</span></span>
<span class="line"><span>   ├─ guide</span></span>
<span class="line"><span>   │  ├─ getting-started.md</span></span>
<span class="line"><span>   │  └─ README.md</span></span>
<span class="line"><span>   ├─ contributing.md</span></span>
<span class="line"><span>   └─ README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=t("code",null,"docs",-1),h=t("code",null,"vuepress dev docs",-1),m=s("<table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/getting-started.md</code></td><td><code>/guide/getting-started.html</code></td></tr></tbody></table>",1),g={class:"custom-container tip"},f=t("p",{class:"custom-container-title"},"TIP",-1),_=t("p",null,[e("By default, both "),t("code",null,"README.md"),e(" and "),t("code",null,"index.md"),e(" would be converted to "),t("code",null,"index.html"),e(" and generate a slash-ending route path. However, it might cause conflicts if you want to keep both of the two files.")],-1),y=t("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),v=t("code",null,"README.md",-1),b=t("p",null,[e("Also, some symbols like "),t("code",null,":"),e(" and "),t("code",null,"+"),e(" may have special meanings for vue-router, so you should avoid using them, see "),t("a",{href:"https://router.vuejs.org/guide/essentials/route-matching-syntax.html",target:"_blank",rel:"noopener noreferrer"},"vue-router docs"),e(" for more details.")],-1),k=s(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><p>A markdown file could contain a <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer">YAML</a> frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">lang</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">en-US</span></span>
<span class="line"><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Title of this page</span></span>
<span class="line"><span style="color:#569CD6;">description</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Description of this page</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D=t("code",null,"lang",-1),w=t("code",null,"title",-1),E=t("code",null,"description",-1),x=t("p",null,"Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.",-1),P={class:"custom-container tip"},M=t("p",{class:"custom-container-title"},"TIP",-1),R=t("p",null,[e("Check out the "),t("a",{href:"https://ecosystem.vuejs.press/themes/default/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},"Default Theme > Frontmatter Reference"),e(" for the frontmatter of default theme.")],-1),C=t("h2",{id:"content",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#content"},[t("span",null,"Content")])],-1),A=t("p",null,[e("The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as "),t("code",null,"<template>"),e(" of Vue SFC.")],-1),T=t("a",{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},"markdown-it",-1);function V(B,N){const n=i("RouteLink");return l(),d("div",null,[p,t("p",null,[e("Take the "),u,e(" directory as your "),o(n,{to:"/reference/cli.html"},{default:a(()=>[e("sourceDir")]),_:1}),e(", e.g. you are running "),h,e(" command. Then the route paths of your markdown files would be:")]),m,t("div",g,[f,_,t("p",null,[e("In such case, you can set the "),o(n,{to:"/reference/config.html#pagepatterns"},{default:a(()=>[e("pagePatterns")]),_:1}),e(" to avoid one of them being processed by VuePress, e.g. use "),y,e(" to exclude all "),v,e(" files.")]),b]),k,t("p",null,[e("You must have noticed that those fields are similar with the "),o(n,{to:"/guide/configuration.html#site-config"},{default:a(()=>[e("Site Config")]),_:1}),e(" in the "),o(n,{to:"/guide/configuration.html#config-file"},{default:a(()=>[e("Config File")]),_:1}),e(". You can override "),D,e(", "),w,e(", "),E,e(", etc., of current page via frontmatter. So you can take frontmatter as page scope config.")]),x,t("div",P,[M,t("p",null,[e("Check out the "),o(n,{to:"/reference/frontmatter.html"},{default:a(()=>[e("Frontmatter Reference")]),_:1}),e(" for a full list of VuePress built-in frontmatter.")]),R]),C,A,t("p",null,[e("With the power of "),T,e(" and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the "),o(n,{to:"/guide/markdown.html"},{default:a(()=>[e("Markdown")]),_:1}),e(" guide for all the extensions of Markdown in VuePress.")])])}const F=r(c,[["render",V],["__file","page.html.vue"]]),S=JSON.parse('{"path":"/guide/page.html","title":"Page","lang":"zh-CN","frontmatter":{"description":"Page VuePress is markdown-centered. Each markdown file inside your project is a standalone page. Routing By default, the route path of a page is determined by the relative path ...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./guide/page.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Page"}],["meta",{"property":"og:description","content":"Page VuePress is markdown-centered. Each markdown file inside your project is a standalone page. Routing By default, the route path of a page is determined by the relative path ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-31T11:46:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-31T11:46:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-31T11:46:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Routing","slug":"routing","link":"#routing","children":[]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]}],"git":{"updatedTime":1706701598000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"guide/page.md"}');export{F as comp,S as data};
