import{_ as t,r as a,o,c as p,d as l,a as e,b as s,w as c,e as n}from"./app-BQQFWevv.js";const d={},h=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack"},[e("span",null,"Webpack")])],-1),u=n(`<p>Webpack bundler is provided by <a href="https://www.npmjs.com/package/@vuepress/bundler-webpack" target="_blank" rel="noopener noreferrer">@vuepress/bundler-webpack</a> package.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Install the bundler package:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/bundler-webpack@next</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Specify the bundler option in your config file:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">webpackBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> webpackBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    postcss:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#9CDCFE;">    vue:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack"><span>configureWebpack</span></a></h3><ul><li><p>Type: <code>(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) =&gt; WebpackConfiguration | void</code></p></li><li><p>Details:</p><p>Edit the internal webpack config.</p><p>This option accepts a function that will receive a webpack config object as the 1st argument, an <code>isServer</code> flag as the 2nd argument and an <code>isBuild</code> flag as the 3rd argument. You can either mutate the config directly, or return an object to be merged by <a href="https://github.com/survivejs/webpack-merge" target="_blank" rel="noopener noreferrer">webpack-merge</a>.</p></li></ul><h3 id="chainwebpack" tabindex="-1"><a class="header-anchor" href="#chainwebpack"><span>chainWebpack</span></a></h3><ul><li><p>Type: <code>(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) =&gt; void</code></p></li><li><p>Details:</p><p>Edit the internal webpack config with <a href="https://github.com/mozilla-neutrino/webpack-chain" target="_blank" rel="noopener noreferrer">webpack-chain</a>.</p><p>This option accepts a function that will receive a <code>Config</code> instance that provided by <code>webpack-chain</code> as the 1st argument an <code>isServer</code> flag as the 2nd argument and an <code>isBuild</code> flag as the 3rd argument.</p></li></ul><h3 id="devserversetupmiddlewares" tabindex="-1"><a class="header-anchor" href="#devserversetupmiddlewares"><span>devServerSetupMiddlewares</span></a></h3><ul><li><p>Type: <code>(middlewares: Middleware[], devServer: Server) =&gt; Middleware[]</code></p></li><li><p>Details:</p><p>A hook to be called in <code>devServer.setupMiddlewares</code> of webpack.</p><p>The arguments of the function are those of <code>devServer.setupMiddlewares</code>.</p></li><li><p>Also see:</p><ul><li><a href="https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares" target="_blank" rel="noopener noreferrer">Webpack &gt; Configuration &gt; DevServer &gt; devServer.setupMiddlewares</a></li></ul></li></ul><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>vue</span></a></h3><ul><li><p>Type: <code>VueLoaderOptions</code></p></li><li><p>Details:</p><p>Options for <code>vue-loader</code>.</p></li><li><p>Also see:</p><ul><li><a href="https://vue-loader.vuejs.org/options.html" target="_blank" rel="noopener noreferrer">vue-loader &gt; Options Reference</a></li></ul></li></ul><h3 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss"><span>postcss</span></a></h3><ul><li><p>Type: <code>PostcssLoaderOptions</code></p></li><li><p>Details:</p><p>Options for <code>postcss-loader</code>.</p></li><li><p>Also see:</p><ul><li><a href="https://github.com/webpack-contrib/postcss-loader#options" target="_blank" rel="noopener noreferrer">postcss-loader &gt; Options</a></li></ul></li></ul><h3 id="stylus" tabindex="-1"><a class="header-anchor" href="#stylus"><span>stylus</span></a></h3><ul><li><p>Type: <code>StylusLoaderOptions</code></p></li><li><p>Details:</p><p>Options for <code>stylus-loader</code>.</p></li><li><p>Also see:</p><ul><li><a href="https://github.com/webpack-contrib/stylus-loader#options" target="_blank" rel="noopener noreferrer">stylus-loader &gt; Options</a></li></ul></li></ul><h3 id="scss" tabindex="-1"><a class="header-anchor" href="#scss"><span>scss</span></a></h3><ul><li><p>Type: <code>SassLoaderOptions</code></p></li><li><p>Details:</p><p>Options for <code>sass-loader</code> for <code>.scss</code> files.</p></li><li><p>Also see:</p><ul><li><a href="https://github.com/webpack-contrib/sass-loader#options" target="_blank" rel="noopener noreferrer">sass-loader &gt; Options</a></li></ul></li></ul><h3 id="sass" tabindex="-1"><a class="header-anchor" href="#sass"><span>sass</span></a></h3><ul><li><p>Type: <code>SassLoaderOptions</code></p></li><li><p>Details:</p><p>Options for <code>sass-loader</code> for <code>.sass</code> files.</p></li><li><p>Also see:</p><ul><li><a href="https://github.com/webpack-contrib/sass-loader#options" target="_blank" rel="noopener noreferrer">sass-loader &gt; Options</a></li></ul></li></ul><h3 id="less" tabindex="-1"><a class="header-anchor" href="#less"><span>less</span></a></h3><ul><li><p>Type: <code>LessLoaderOptions</code></p></li><li><p>Details:</p><p>Options for <code>less-loader</code>.</p></li><li><p>Also see:</p><ul><li><a href="https://github.com/webpack-contrib/less-loader#options" target="_blank" rel="noopener noreferrer">less-loader &gt; Options</a></li></ul></li></ul><h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen"><span>evergreen</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Set to <code>true</code> if you are only targeting evergreen browsers. This will disable some transpilation and polyfills, and result in faster builds and smaller files.</p></li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h3 id="referencing-public-files-after-changing-base" tabindex="-1"><a class="header-anchor" href="#referencing-public-files-after-changing-base"><span>Referencing Public Files after Changing <code>base</code></span></a></h3>`,29),b=e("code",null,"base",-1),g=e("code",null,"base",-1),f=n('<h3 id="using-with-default-theme" tabindex="-1"><a class="header-anchor" href="#using-with-default-theme"><span>Using with Default Theme</span></a></h3><p>Default theme is using <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> as CSS pre-processor, so you might need to install <a href="https://www.npmjs.com/package/sass-loader" target="_blank" rel="noopener noreferrer">sass-loader</a> as a peer dependency to make it work with Webpack, especially when you are using <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>.</p>',2);function v(m,k){const r=a("NpmBadge"),i=a("RouteLink");return o(),p("div",null,[h,l(r,{package:"@vuepress/bundler-webpack"}),u,e("p",null,[s("Unlike Vite, Webpack won't handle "),b,s(" for public files automatically. So if you change the "),g,s(" of your site, you'd better to use "),l(i,{to:"/guide/assets.html#base-helper"},{default:c(()=>[s("Base Helper")]),_:1}),s(" when referencing an public image file.")]),f])}const w=t(d,[["render",v],["__file","webpack.html.vue"]]),D=JSON.parse('{"path":"/reference/bundler/webpack.html","title":"Webpack","lang":"zh-CN","frontmatter":{"description":"Webpack","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/javaweb/reference/bundler/webpack.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Webpack"}],["meta",{"property":"og:description","content":"Webpack"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T16:29:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-26T16:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webpack\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-26T16:29:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"configureWebpack","slug":"configurewebpack","link":"#configurewebpack","children":[]},{"level":3,"title":"chainWebpack","slug":"chainwebpack","link":"#chainwebpack","children":[]},{"level":3,"title":"devServerSetupMiddlewares","slug":"devserversetupmiddlewares","link":"#devserversetupmiddlewares","children":[]},{"level":3,"title":"vue","slug":"vue","link":"#vue","children":[]},{"level":3,"title":"postcss","slug":"postcss","link":"#postcss","children":[]},{"level":3,"title":"stylus","slug":"stylus","link":"#stylus","children":[]},{"level":3,"title":"scss","slug":"scss","link":"#scss","children":[]},{"level":3,"title":"sass","slug":"sass","link":"#sass","children":[]},{"level":3,"title":"less","slug":"less","link":"#less","children":[]},{"level":3,"title":"evergreen","slug":"evergreen","link":"#evergreen","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Referencing Public Files after Changing base","slug":"referencing-public-files-after-changing-base","link":"#referencing-public-files-after-changing-base","children":[]},{"level":3,"title":"Using with Default Theme","slug":"using-with-default-theme","link":"#using-with-default-theme","children":[]}]}],"git":{"updatedTime":1706286583000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3}]},"autoDesc":true,"filePathRelative":"reference/bundler/webpack.md"}');export{w as comp,D as data};
