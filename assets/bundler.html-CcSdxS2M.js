import{_ as c,r,o as i,c as d,d as n,w as l,a as e,b as s,e as o}from"./app-CPK6wcVl.js";const u={},h=o('<h1 id="打包工具" tabindex="-1"><a class="header-anchor" href="#打包工具"><span>打包工具</span></a></h1><p>VuePress 支持使用 <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> 或 <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a> 作为打包工具来进行网站的开发和构建。你可以根据自己的喜好来选择使用哪个打包工具，并且不需要进行额外的配置。</p><h2 id="安装打包工具" tabindex="-1"><a class="header-anchor" href="#安装打包工具"><span>安装打包工具</span></a></h2><p>在安装 <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress</a> 包时，并不会自动安装打包工具，你需要选择并安装一个打包工具。</p>',4),b=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 vite 打包工具")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 webpack 打包工具")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-webpack@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 vite 打包工具")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 webpack 打包工具")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-webpack@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 vite 打包工具")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 webpack 打包工具")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-webpack@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("h2",{id:"使用打包工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用打包工具"},[e("span",null,"使用打包工具")])],-1),C=e("p",null,"一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。",-1),D=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// import { webpackBundler } from &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> viteBundler</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#6A9955;">  // bundler: webpackBundler(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你需要对打包工具进行进阶配置时，只需要传入对应的配置项即可：</p>`,2);function _(g,k){const a=r("CodeGroupItem"),p=r("CodeGroup"),t=r("RouteLink");return i(),d("div",null,[h,n(p,null,{default:l(()=>[n(a,{title:"pnpm",active:""},{default:l(()=>[b]),_:1}),n(a,{title:"yarn"},{default:l(()=>[m]),_:1}),n(a,{title:"npm"},{default:l(()=>[v]),_:1})]),_:1}),y,C,e("p",null,[s("你只需要通过 "),n(t,{to:"/zh/reference/config.html#bundler"},{default:l(()=>[s("bundler")]),_:1}),s(" 配置项指定打包工具即可：")]),D,e("ul",null,[e("li",null,[n(t,{to:"/zh/reference/bundler/vite.html"},{default:l(()=>[s("打包工具 > Vite")]),_:1})]),e("li",null,[n(t,{to:"/zh/reference/bundler/webpack.html"},{default:l(()=>[s("打包工具 > Webpack")]),_:1})])])])}const f=c(u,[["render",_],["__file","bundler.html.vue"]]),x=JSON.parse('{"path":"/zh/guide/bundler.html","title":"打包工具","lang":"zh-CN","frontmatter":{"description":"打包工具 VuePress 支持使用 Vite 或 Webpack 作为打包工具来进行网站的开发和构建。你可以根据自己的喜好来选择使用哪个打包工具，并且不需要进行额外的配置。 安装打包工具 在安装 vuepress 包时，并不会自动安装打包工具，你需要选择并安装一个打包工具。 使用打包工具 一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/zh/guide/bundler.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"打包工具"}],["meta",{"property":"og:description","content":"打包工具 VuePress 支持使用 Vite 或 Webpack 作为打包工具来进行网站的开发和构建。你可以根据自己的喜好来选择使用哪个打包工具，并且不需要进行额外的配置。 安装打包工具 在安装 vuepress 包时，并不会自动安装打包工具，你需要选择并安装一个打包工具。 使用打包工具 一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打包工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装打包工具","slug":"安装打包工具","link":"#安装打包工具","children":[]},{"level":2,"title":"使用打包工具","slug":"使用打包工具","link":"#使用打包工具","children":[]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"zh/guide/bundler.md"}');export{f as comp,x as data};
