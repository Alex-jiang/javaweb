import{_ as a,r as i,o as l,c as p,a as t,b as e,d as r,w as c,e as s}from"./app-BQQFWevv.js";const d={},o=s(`<h1 id="command-line-interface" tabindex="-1"><a class="header-anchor" href="#command-line-interface"><span>Command Line Interface</span></a></h1><p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ vuepress &lt;command&gt; [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Commands:</span></span>
<span class="line"><span>  dev [sourceDir]    Start development server</span></span>
<span class="line"><span>  build [sourceDir]  Build to static site</span></span>
<span class="line"><span>  info               Display environment information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For more info, run any command with the \`--help\` flag:</span></span>
<span class="line"><span>  $ vuepress dev --help</span></span>
<span class="line"><span>  $ vuepress build --help</span></span>
<span class="line"><span>  $ vuepress info --help</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -v, --version  Display version number</span></span>
<span class="line"><span>  -h, --help     Display this message</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>VuePress is using <a href="https://www.npmjs.com/package/debug" target="_blank" rel="noopener noreferrer">debug</a> module.</p><p>Set environment variable <code>DEBUG=vuepress*</code> to enable debug logs.</p></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>Start a development server to develop your VuePress site locally.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ vuepress dev [sourceDir]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -c, --config &lt;config&gt;  Set path to config file</span></span>
<span class="line"><span>  -p, --port &lt;port&gt;      Use specified port (default: 8080)</span></span>
<span class="line"><span>  -t, --temp &lt;temp&gt;      Set the directory of the temporary files</span></span>
<span class="line"><span>  --host &lt;host&gt;          Use specified host (default: 0.0.0.0)</span></span>
<span class="line"><span>  --cache &lt;cache&gt;        Set the directory of the cache files</span></span>
<span class="line"><span>  --clean-temp           Clean the temporary files before dev</span></span>
<span class="line"><span>  --clean-cache          Clean the cache files before dev</span></span>
<span class="line"><span>  --open                 Open browser when ready</span></span>
<span class="line"><span>  --debug                Enable debug mode</span></span>
<span class="line"><span>  --no-watch             Disable watching page and config files (default: true)</span></span>
<span class="line"><span>  -v, --version          Display version number</span></span>
<span class="line"><span>  -h, --help             Display this message</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,9),u=s(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>Usage:</span></span>
<span class="line"><span>  $ vuepress build [sourceDir]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -c, --config &lt;config&gt;  Set path to config file</span></span>
<span class="line"><span>  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist)</span></span>
<span class="line"><span>  -t, --temp &lt;temp&gt;      Set the directory of the temporary files</span></span>
<span class="line"><span>  --cache &lt;cache&gt;        Set the directory of the cache files</span></span>
<span class="line"><span>  --clean-temp           Clean the temporary files before build</span></span>
<span class="line"><span>  --clean-cache          Clean the cache files before build</span></span>
<span class="line"><span>  --debug                Enable debug mode</span></span>
<span class="line"><span>  -v, --version          Display version number</span></span>
<span class="line"><span>  -h, --help             Display this message</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function m(v,h){const n=i("RouteLink");return l(),p("div",null,[o,t("p",null,[e("Build your VuePress site to static files, which are ready for "),r(n,{to:"/guide/deployment.html"},{default:c(()=>[e("deployment")]),_:1}),e(".")]),u])}const g=a(d,[["render",m],["__file","cli.html.vue"]]),f=JSON.parse('{"path":"/reference/cli.html","title":"Command Line Interface","lang":"zh-CN","frontmatter":{"description":"Command Line Interface Run vuepress --help to get following help messages: TIP VuePress is using debug module. Set environment variable DEBUG=vuepress* to enable debug logs. dev...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/javaweb/reference/cli.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Command Line Interface"}],["meta",{"property":"og:description","content":"Command Line Interface Run vuepress --help to get following help messages: TIP VuePress is using debug module. Set environment variable DEBUG=vuepress* to enable debug logs. dev..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T15:46:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T15:46:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Command Line Interface\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T15:46:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dev","slug":"dev","link":"#dev","children":[]},{"level":2,"title":"build","slug":"build","link":"#build","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]}],"git":{"updatedTime":1707234403000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"reference/cli.md"}');export{g as comp,f as data};
