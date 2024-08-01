import{_ as c,r,o as d,c as p,d as n,w as l,a as e,b as s,e as o}from"./app-BVk3uafa.js";const u={},b=o('<h1 id="bundler" tabindex="-1"><a class="header-anchor" href="#bundler"><span>Bundler</span></a></h1><p>VuePress supports using <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a> or <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> to dev and build sites. You can choose which bundler to use according to your preference, and no extra configuration is required.</p><h2 id="install-a-bundler" tabindex="-1"><a class="header-anchor" href="#install-a-bundler"><span>Install a Bundler</span></a></h2><p>When installing the <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress</a> package, no bundlers will be installed. You need to choose a bundler to install.</p>',4),h=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install vite bundler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install webpack bundler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-webpack@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install vite bundler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install webpack bundler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-webpack@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install vite bundler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install webpack bundler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-webpack@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("h2",{id:"use-a-bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-a-bundler"},[e("span",null,"Use a Bundler")])],-1),C=e("p",null,"Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress.",-1),g=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// import { webpackBundler } from &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> viteBundler</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#6A9955;">  // bundler: webpackBundler(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you need to customize the bundler, you can set the corresponding options:</p>`,2);function D(_,k){const a=r("CodeGroupItem"),i=r("CodeGroup"),t=r("RouteLink");return d(),p("div",null,[b,n(i,null,{default:l(()=>[n(a,{title:"pnpm",active:""},{default:l(()=>[h]),_:1}),n(a,{title:"yarn"},{default:l(()=>[m]),_:1}),n(a,{title:"npm"},{default:l(()=>[y]),_:1})]),_:1}),v,C,e("p",null,[s("You can use a bundler via the "),n(t,{to:"/reference/config.html#bundler"},{default:l(()=>[s("bundler")]),_:1}),s(" option:")]),g,e("ul",null,[e("li",null,[n(t,{to:"/reference/bundler/vite.html"},{default:l(()=>[s("Bundlers > Vite")]),_:1})]),e("li",null,[n(t,{to:"/reference/bundler/webpack.html"},{default:l(()=>[s("Bundlers > Webpack")]),_:1})])])])}const E=c(u,[["render",D],["__file","bundler.html.vue"]]),x=JSON.parse('{"path":"/guide/bundler.html","title":"Bundler","lang":"zh-CN","frontmatter":{"description":"Bundler VuePress supports using Webpack or Vite to dev and build sites. You can choose which bundler to use according to your preference, and no extra configuration is required....","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/guide/bundler.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Bundler"}],["meta",{"property":"og:description","content":"Bundler VuePress supports using Webpack or Vite to dev and build sites. You can choose which bundler to use according to your preference, and no extra configuration is required...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T04:39:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-28T04:39:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bundler\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T04:39:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install a Bundler","slug":"install-a-bundler","link":"#install-a-bundler","children":[]},{"level":2,"title":"Use a Bundler","slug":"use-a-bundler","link":"#use-a-bundler","children":[]}],"git":{"updatedTime":1703738388000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"guide/bundler.md"}');export{E as comp,x as data};
