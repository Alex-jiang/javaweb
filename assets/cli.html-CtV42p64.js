import{_ as a,r as i,o as l,c as p,a as t,b as s,d as c,w as d,e}from"./app-CPK6wcVl.js";const r={},o=e(`<h1 id="命令行接口" tabindex="-1"><a class="header-anchor" href="#命令行接口"><span>命令行接口</span></a></h1><p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>Usage:</span></span>
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
<span class="line"><span>  -h, --help     Display this message</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>VuePress 使用了 <a href="https://www.npmjs.com/package/debug" target="_blank" rel="noopener noreferrer">debug</a> 模块。</p><p>设置环境变量 <code>DEBUG=vuepress*</code> 可以启用调试日志。</p></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>Usage:</span></span>
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
<span class="line"><span>  -h, --help             Display this message</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,9),u=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>Usage:</span></span>
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
<span class="line"><span>  -h, --help             Display this message</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>`,5);function v(m,h){const n=i("RouteLink");return l(),p("div",null,[o,t("p",null,[s("将你的 VuePress 站点构建成静态文件，以便你进行后续"),c(n,{to:"/zh/guide/deployment.html"},{default:d(()=>[s("部署")]),_:1}),s("。")]),u])}const g=a(r,[["render",v],["__file","cli.html.vue"]]),f=JSON.parse('{"path":"/zh/reference/cli.html","title":"命令行接口","lang":"zh-CN","frontmatter":{"description":"命令行接口 执行 vuepress --help 来获取下列帮助信息： 提示 VuePress 使用了 debug 模块。 设置环境变量 DEBUG=vuepress* 可以启用调试日志。 dev 启动一个开发服务器，在本地开发你的 VuePress 站点。 提示 通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。 build 将你的 VuePr...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/zh/reference/cli.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"命令行接口"}],["meta",{"property":"og:description","content":"命令行接口 执行 vuepress --help 来获取下列帮助信息： 提示 VuePress 使用了 debug 模块。 设置环境变量 DEBUG=vuepress* 可以启用调试日志。 dev 启动一个开发服务器，在本地开发你的 VuePress 站点。 提示 通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。 build 将你的 VuePr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dev","slug":"dev","link":"#dev","children":[]},{"level":2,"title":"build","slug":"build","link":"#build","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"zh/reference/cli.md"}');export{g as comp,f as data};
