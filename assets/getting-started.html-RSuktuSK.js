import{_ as c,r,o as d,c as p,d as a,w as l,a as e,b as s,e as i}from"./app-CPK6wcVl.js";const u={},h=i('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>VuePress v2 is currently in RC (Release Candidate) stage. It&#39;s ready to be used for building your site, but the config and API are not stable enough, which is possibly to have minor breaking changes. So make sure to read the <a href="https://github.com/vuepress/core/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">changelog</a> carefully each time you upgrade a RC version.</p></div><h2 id="try-it-online" tabindex="-1"><a class="header-anchor" href="#try-it-online"><span>Try It Online</span></a></h2><p>You can try VuePress directly in your browser on <a href="https://stackblitz.com/fork/vuepress" target="_blank" rel="noopener noreferrer">StackBlitz</a>.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v18.16.0+</a></li><li>Package manager like <a href="https://pnpm.io" target="_blank" rel="noopener noreferrer">pnpm</a>, <a href="https://classic.yarnpkg.com/en/" target="_blank" rel="noopener noreferrer">yarn</a>, <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npm</a>, etc.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>When using <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>, you need to install <code>vue</code> as peer-dependencies.</li><li>When using <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">yarn 2+</a>, you need to set <code>nodeLinker: &#39;node-modules&#39;</code> in your <a href="https://yarnpkg.com/configuration/yarnrc#nodeLinker" target="_blank" rel="noopener noreferrer"><code>.yarnrc.yml</code></a> file.</li></ul></div><h3 id="project-setup" tabindex="-1"><a class="header-anchor" href="#project-setup"><span>Project Setup</span></a></h3><h4 id="setup-via-cli" tabindex="-1"><a class="header-anchor" href="#setup-via-cli"><span>Setup via CLI</span></a></h4><p>You can use <a href="https://www.npmjs.com/package/create-vuepress" target="_blank" rel="noopener noreferrer">create-vuepress</a> to generate a template directly.</p>',11),b=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," create"),e("span",{style:{color:"#CE9178"}}," vuepress"),e("span",{style:{color:"#CE9178"}}," vuepress-starter")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," create"),e("span",{style:{color:"#CE9178"}}," vuepress"),e("span",{style:{color:"#CE9178"}}," vuepress-starter")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," init"),e("span",{style:{color:"#CE9178"}}," vuepress"),e("span",{style:{color:"#CE9178"}}," vuepress-starter")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),y=i(`<h4 id="setup-manually" tabindex="-1"><a class="header-anchor" href="#setup-manually"><span>Setup Manually</span></a></h4><p>This section will help you build a basic VuePress documentation site from ground up.</p><ul><li>Create and change into a new directory</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">mkdir</span><span style="color:#CE9178;"> vuepress-starter</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#CE9178;"> vuepress-starter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Initialize your project</li></ul>`,5),g=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"git"),e("span",{style:{color:"#CE9178"}}," init")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," init")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"git"),e("span",{style:{color:"#CE9178"}}," init")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," init")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"git"),e("span",{style:{color:"#CE9178"}}," init")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," init")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("ul",null,[e("li",null,"Install VuePress")],-1),E=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install vuepress and vue")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," vue")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install bundler and theme")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/theme-default@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install vuepress")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install bundler and theme")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/theme-default@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install vuepress")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# install bundler and theme")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/theme-default@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=i(`<ul><li>Create <code>docs</code> directory and <code>docs/.vuepress</code> directory</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">mkdir</span><span style="color:#CE9178;"> docs</span></span>
<span class="line"><span style="color:#DCDCAA;">mkdir</span><span style="color:#CE9178;"> docs/.vuepress</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create the VuePress config file <code>docs/.vuepress/config.js</code></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> viteBundler</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create your first document</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#CE9178;"> &#39;# Hello VuePress&#39;</span><span style="color:#D4D4D4;"> &gt; </span><span style="color:#CE9178;">docs/README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure"><span>Directory Structure</span></a></h2><p>After the setup, the minimal structure of your project should look like this:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vuepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>docs</code> directory is where you put your markdown files, and it will be used as the source directory of VuePress.</p><p>The <code>docs/.vuepress</code> directory, i.e. the <code>.vuepress</code> directory in the source directory, is where all VuePress-specific files will be placed. Currently there is only one config file in it. By default, the temp, cache and output directory will also be generated inside this directory. It is suggested to add them to your <code>.gitignore</code> file.</p><details class="custom-container details"><summary>Example \`.gitignore\` file</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span># VuePress default temp directory</span></span>
<span class="line"><span>.vuepress/.temp</span></span>
<span class="line"><span># VuePress default cache directory</span></span>
<span class="line"><span>.vuepress/.cache</span></span>
<span class="line"><span># VuePress default build output directory</span></span>
<span class="line"><span>.vuepress/dist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="work-with-vuepress" tabindex="-1"><a class="header-anchor" href="#work-with-vuepress"><span>Work with VuePress</span></a></h2><h3 id="start-dev-server" tabindex="-1"><a class="header-anchor" href="#start-dev-server"><span>Start Dev Server</span></a></h3><p>You can add some <a href="https://classic.yarnpkg.com/en/docs/package-json#toc-scripts" target="_blank" rel="noopener noreferrer">scripts</a> to <code>package.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;docs:dev&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress dev docs&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, run <code>docs:dev</code> script to start the dev server:</p>`,17),x=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),P=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," run"),e("span",{style:{color:"#CE9178"}}," docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),V=e("p",null,[s("VuePress will start a hot-reloading development server at "),e("a",{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},"http://localhost:8080"),s(". When you modify your markdown files, the content in the browser will be auto updated.")],-1),S=e("h3",{id:"build-your-site",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#build-your-site"},[e("span",null,"Build Your Site")])],-1),j=e("p",null,[s("To build your site, run "),e("code",null,"docs:build"),s(" script:")],-1),I=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," run"),e("span",{style:{color:"#CE9178"}}," docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),G=e("code",null,"docs/.vuepress/dist",-1),R=e("h2",{id:"learn-more-about-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#learn-more-about-vuepress"},[e("span",null,"Learn More about VuePress")])],-1),B=e("p",null,"By now, you should have a basic but functional VuePress site. But you may still need to read the subsequent guide to learn more about VuePress.",-1);function T(W,F){const n=r("CodeGroupItem"),t=r("CodeGroup"),o=r("RouteLink");return d(),p("div",null,[h,a(t,null,{default:l(()=>[a(n,{title:"pnpm",active:""},{default:l(()=>[b]),_:1}),a(n,{title:"yarn"},{default:l(()=>[m]),_:1}),a(n,{title:"npm"},{default:l(()=>[v]),_:1})]),_:1}),y,a(t,null,{default:l(()=>[a(n,{title:"pnpm",active:""},{default:l(()=>[g]),_:1}),a(n,{title:"yarn"},{default:l(()=>[D]),_:1}),a(n,{title:"npm"},{default:l(()=>[C]),_:1})]),_:1}),k,a(t,null,{default:l(()=>[a(n,{title:"pnpm",active:""},{default:l(()=>[E]),_:1}),a(n,{title:"yarn"},{default:l(()=>[f]),_:1}),a(n,{title:"npm"},{default:l(()=>[_]),_:1})]),_:1}),A,a(t,null,{default:l(()=>[a(n,{title:"pnpm",active:""},{default:l(()=>[x]),_:1}),a(n,{title:"yarn"},{default:l(()=>[w]),_:1}),a(n,{title:"npm"},{default:l(()=>[P]),_:1})]),_:1}),V,S,j,a(t,null,{default:l(()=>[a(n,{title:"pnpm",active:""},{default:l(()=>[I]),_:1}),a(n,{title:"yarn"},{default:l(()=>[q]),_:1}),a(n,{title:"npm"},{default:l(()=>[N]),_:1})]),_:1}),e("p",null,[s("You will see the generated static files in the "),G,s(" directory. You can check out "),a(o,{to:"/guide/deployment.html"},{default:l(()=>[s("deployment")]),_:1}),s(" for how to deploy them.")]),R,B,e("p",null,[s("Next step, learn more about the "),a(o,{to:"/guide/configuration.html"},{default:l(()=>[s("configuration")]),_:1}),s(".")])])}const Y=c(u,[["render",T],["__file","getting-started.html.vue"]]),M=JSON.parse(`{"path":"/guide/getting-started.html","title":"Getting Started","lang":"zh-CN","frontmatter":{"description":"Getting Started WARNING VuePress v2 is currently in RC (Release Candidate) stage. It's ready to be used for building your site, but the config and API are not stable enough, whi...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/guide/getting-started.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Getting Started"}],["meta",{"property":"og:description","content":"Getting Started WARNING VuePress v2 is currently in RC (Release Candidate) stage. It's ready to be used for building your site, but the config and API are not stable enough, whi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Getting Started\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Try It Online","slug":"try-it-online","link":"#try-it-online","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Project Setup","slug":"project-setup","link":"#project-setup","children":[]}]},{"level":2,"title":"Directory Structure","slug":"directory-structure","link":"#directory-structure","children":[]},{"level":2,"title":"Work with VuePress","slug":"work-with-vuepress","link":"#work-with-vuepress","children":[{"level":3,"title":"Start Dev Server","slug":"start-dev-server","link":"#start-dev-server","children":[]},{"level":3,"title":"Build Your Site","slug":"build-your-site","link":"#build-your-site","children":[]}]},{"level":2,"title":"Learn More about VuePress","slug":"learn-more-about-vuepress","link":"#learn-more-about-vuepress","children":[]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"guide/getting-started.md"}`);export{Y as comp,M as data};