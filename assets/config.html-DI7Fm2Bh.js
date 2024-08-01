import{_ as a,r as s,o as r,c as d,a as e,d as t,w as o,b as l,e as i}from"./app-C1hgw8qQ.js";const p={},c=i('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1><h2 id="site-config" tabindex="-1"><a class="header-anchor" href="#site-config"><span>Site Config</span></a></h2><h3 id="base" tabindex="-1"><a class="header-anchor" href="#base"><span>base</span></a></h3>',3),u=i('<li><p>Type: <code>string</code></p></li><li><p>Default: <code>/</code></p></li><li><p>Details:</p><p>The base URL the site will be deployed at.</p><p>You will need to set this if you plan to deploy your site under a sub path. It should always start and end with a slash. For example, if you plan to deploy your site to GitHub pages at <code>https://foo.github.io/bar/</code>, then you should set <code>base</code> to <code>&quot;/bar/&quot;</code>.</p><p>The <code>base</code> is automatically prepended to the URLs that start with <code>/</code> in other options, so you only need to specify it once. (Except for attrs of <a href="#head">head</a>)</p><p>Notice that <code>base</code> should be an absolute URL pathname starting and ending with <code>/</code> .</p></li>',3),h=e("p",null,"Also see:",-1),f=e("h3",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang"},[e("span",null,"lang")])],-1),m=i("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>en-US</code></p></li><li><p>Details:</p><p>Language for the site.</p><p>This will be the <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag in the rendered HTML.</p><p>This can be specified in different locales.</p></li>",3),g=e("p",null,"Also see:",-1),k=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),b=i('<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;&#39;</code></p></li><li><p>Details:</p><p>Title for the site.</p><p>This will be the suffix for all page titles, and displayed in the navbar in the default theme.</p><p>This can be specified in different locales.</p></li><li><p>Also see:</p><ul><li><a href="#locales">Config &gt; locales</a></li></ul></li></ul><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>description</span></a></h3>',3),y=i("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;&#39;</code></p></li><li><p>Details:</p><p>Description for the site.</p><p>This will be the <code>content</code> attribute of <code>&lt;meta name=&quot;description&quot; /&gt;</code> tag in the rendered HTML, which will be overrode by the <code>description</code> field of page frontmatter.</p><p>This can be specified in different locales.</p></li>",3),D=e("p",null,"Also see:",-1),_=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),v=i(`<h3 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h3><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Default: <code>[]</code></p></li><li><p>Details:</p><p>Extra tags to inject into the <code>&lt;head&gt;</code> tag in the rendered HTML.</p><p>You can specify each tag in the form of <code>[tagName, { attrName: attrValue }, innerHTML?]</code>.</p><p>This can be specified in different locales.</p><p>Notice that if the <code>attrValue</code> is a pathname, it will be kept as-is without prepending <a href="#base">base</a> automatically, so remember to prepend it manually if needed.</p></li><li><p>Example:</p><p>To add a custom favicon:</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  head:</span><span style="color:#D4D4D4;"> [[</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#CE9178;"> &#39;icon&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#CE9178;"> &#39;/images/logo.png&#39;</span><span style="color:#D4D4D4;"> }]],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rendered as：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">link</span><span style="color:#9CDCFE;"> rel</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;icon&quot;</span><span style="color:#9CDCFE;"> href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/images/logo.png&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),C=e("h3",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales"},[e("span",null,"locales")])],-1),x=i('<li><p>Type: <code>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>Specify locales for i18n support.</p><p>Acceptable fields:</p><ul><li><a href="#lang">lang</a></li><li><a href="#title">title</a></li><li><a href="#description">description</a></li><li><a href="#head">head</a></li></ul></li>',3),T=e("p",null,"Also see:",-1),E=e("h2",{id:"theme-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-config"},[e("span",null,"Theme Config")])],-1),A=e("h3",{id:"theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme"},[e("span",null,"theme")])],-1),P=e("li",null,[e("p",null,[l("Type: "),e("code",null,"Theme")])],-1),S=e("li",null,[e("p",null,"Details:"),e("p",null,"Set the theme of your site."),e("p",null,"If this option is not set, the default theme will be used.")],-1),B=e("p",null,"Also see:",-1),F=e("li",null,[e("a",{href:"https://ecosystem.vuejs.press/themes/default/config.html",target:"_blank",rel:"noopener noreferrer"},"Default Theme > Config")],-1),R=e("h2",{id:"bundler-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler-config"},[e("span",null,"Bundler Config")])],-1),O=e("h3",{id:"bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler"},[e("span",null,"bundler")])],-1),G=i("<li><p>Type: <code>Bundler</code></p></li><li><p>Details:</p><p>Set the bundler of your site.</p><p>If this option is not set, the default bundler will be used:</p><ul><li>With <code>vuepress</code> or <code>vuepress-vite</code>, the default bundler is vite.</li><li>With <code>vuepress-webpack</code>, the default bundler is webpack.</li></ul></li>",2),L=e("p",null,"Also see:",-1),I=i('<h2 id="common-config" tabindex="-1"><a class="header-anchor" href="#common-config"><span>Common Config</span></a></h2><h3 id="dest" tabindex="-1"><a class="header-anchor" href="#dest"><span>dest</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/dist`</code></p></li><li><p>Details:</p><p>Specify the output directory for <code>vuepress build</code> command.</p></li></ul><h3 id="temp" tabindex="-1"><a class="header-anchor" href="#temp"><span>temp</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/.temp`</code></p></li><li><p>Details:</p><p>Specify the directory for temporary files.</p></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Since VuePress will load temp files during dev and build, the temp directory should be inside project root to resolve dependencies correctly.</p></div><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/.cache`</code></p></li><li><p>Details:</p><p>Specify the directory for cache files.</p></li></ul><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public"><span>public</span></a></h3>',9),M=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),N=e("li",null,[e("p",null,[l("Default: "),e("code",null,"`${sourceDir}/.vuepress/public`")])],-1),j=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the directory for public files.")],-1),V=e("p",null,"Also see:",-1),q=i('<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Enable debug mode or not.</p><p>This would be helpful for developers. Also, we are using <a href="https://github.com/visionmedia/debug" target="_blank" rel="noopener noreferrer">debug</a> package for debug logging, which can be enabled via <code>DEBUG=vuepress*</code> environment variable.</p></li></ul><h3 id="pagepatterns" tabindex="-1"><a class="header-anchor" href="#pagepatterns"><span>pagePatterns</span></a></h3><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[&#39;**/*.md&#39;, &#39;!.vuepress&#39;, &#39;!node_modules&#39;]</code></p></li><li><p>Details:</p><p>Specify the patterns of files you want to be resolved as pages. The patterns are relative to the source directory.</p></li></ul><h3 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern"><span>permalinkPattern</span></a></h3>',5),H=i("<li><p>Type: <code>string | null</code></p></li><li><p>Default: <code>null</code></p></li><li><p>Details:</p><p>Specify the pattern to generate permalink.</p><p>This will be overrode by the <code>permalinkPattern</code> field of page frontmatter.</p></li>",3),Y=e("p",null,"Also see:",-1),U=i('<h2 id="dev-config" tabindex="-1"><a class="header-anchor" href="#dev-config"><span>Dev Config</span></a></h2><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host"><span>host</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;0.0.0.0&#39;</code></p></li><li><p>Details:</p><p>Specify the host to use for the dev server.</p></li></ul><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port"><span>port</span></a></h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>8080</code></p></li><li><p>Details:</p><p>Specify the port to use for the dev server.</p></li></ul><h3 id="open" tabindex="-1"><a class="header-anchor" href="#open"><span>open</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Whether to open the browser after dev-server had been started.</p></li></ul><h3 id="templatedev" tabindex="-1"><a class="header-anchor" href="#templatedev"><span>templateDev</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;@vuepress/client/templates/dev.html&#39;</code></p></li><li><p>Details:</p><p>Specify the path of the HTML template to be used for dev.</p></li></ul><h2 id="build-config" tabindex="-1"><a class="header-anchor" href="#build-config"><span>Build Config</span></a></h2><h3 id="shouldpreload" tabindex="-1"><a class="header-anchor" href="#shouldpreload"><span>shouldPreload</span></a></h3><ul><li><p>Type: <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>A function to control what files should have <code>&lt;link rel=&quot;preload&quot;&gt;</code> resource hints generated. Set to <code>true</code> or <code>false</code> to enable or disable totally.</p><p>By default, only those files that are required by current page will be preloaded. So you can keep it <code>true</code> in most cases.</p></li></ul><h3 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch"><span>shouldPrefetch</span></a></h3><ul><li><p>Type: <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>A function to control what files should have <code>&lt;link rel=&quot;prefetch&quot;&gt;</code> resource hints generated. Set to <code>true</code> or <code>false</code> to enable or disable for all files.</p><p>If you set it to <code>true</code>, all files that required by other pages will be prefetched. This is good for small sites, which will speed up the navigation, but it might not be a good idea if you have lots of pages in your site.</p></li></ul><h3 id="templatebuild" tabindex="-1"><a class="header-anchor" href="#templatebuild"><span>templateBuild</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;@vuepress/client/templates/build.html&#39;</code></p></li><li><p>Details:</p><p>Specify the path of the HTML template to be used for build.</p></li></ul><h3 id="templatebuildrenderer" tabindex="-1"><a class="header-anchor" href="#templatebuildrenderer"><span>templateBuildRenderer</span></a></h3><ul><li><p>Type: <code>TemplateRenderer</code></p></li><li><p>Default: <code>templateRenderer</code></p></li><li><p>Details:</p><p>Specify the HTML template renderer to be used for build.</p></li></ul><h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config"><span>Markdown Config</span></a></h2><h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>markdown</span></a></h3>',20),W=i('<li><p>Type: <code>MarkdownOptions</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>Configure VuePress built-in Markdown syntax extensions.</p><p>It accepts all options of <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, and the following additional options.</p></li>',3),$=e("p",null,"Also see:",-1),Z=e("li",null,[e("a",{href:"https://github.com/markdown-it/markdown-it#init-with-presets-and-options",target:"_blank",rel:"noopener noreferrer"},"markdown-it > Init with presets and options")],-1),z=i(`<h3 id="markdown-anchor" tabindex="-1"><a class="header-anchor" href="#markdown-anchor"><span>markdown.anchor</span></a></h3><ul><li><p>Type: <code>AnchorPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> defaultOptions</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  level:</span><span style="color:#D4D4D4;"> [</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#9CDCFE;">  permalink:</span><span style="color:#9CDCFE;"> anchorPlugin</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">permalink</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">headerLink</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    class:</span><span style="color:#CE9178;"> &#39;header-anchor&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    safariReaderFix:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),J=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Options for "),e("a",{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},"markdown-it-anchor"),l(".")]),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),K=e("p",null,"Also see:",-1),Q=i('<h3 id="markdown-assets" tabindex="-1"><a class="header-anchor" href="#markdown-assets"><span>markdown.assets</span></a></h3><ul><li><p>Type: <code>AssetsPluginOptions | false</code></p></li><li><p>Details:</p><p>Options for VuePress built-in markdown-it assets plugin.</p><p>Set to <code>false</code> to disable this plugin.</p></li></ul><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-component" tabindex="-1"><a class="header-anchor" href="#markdown-component"><span>markdown.component</span></a></h3><ul><li><p>Type: <code>undefined | false</code></p></li><li><p>Details:</p><p>Options for <a href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component" target="_blank" rel="noopener noreferrer">@mdit-vue/plugin-component</a>.</p><p>Set to <code>false</code> to disable this plugin.</p></li></ul><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-emoji" tabindex="-1"><a class="header-anchor" href="#markdown-emoji"><span>markdown.emoji</span></a></h3>',7),X=e("li",null,[e("p",null,[l("Type: "),e("code",null,"EmojiPluginOptions | false")])],-1),ee=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Options for "),e("a",{href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},"markdown-it-emoji"),l(".")]),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),le=e("p",null,"Also see:",-1),ne=e("h3",{id:"markdown-frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-frontmatter"},[e("span",null,"markdown.frontmatter")])],-1),te=e("li",null,[e("p",null,[l("Type: "),e("code",null,"FrontmatterPluginOptions | false")])],-1),oe=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Options for "),e("a",{href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter",target:"_blank",rel:"noopener noreferrer"},"@mdit-vue/plugin-frontmatter"),l(".")]),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),ie=e("p",null,"Also see:",-1),ae=i(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-headers" tabindex="-1"><a class="header-anchor" href="#markdown-headers"><span>markdown.headers</span></a></h3><ul><li><p>Type: <code>HeadersPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> defaultOptions</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  level:</span><span style="color:#D4D4D4;"> [</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),se=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Options for "),e("a",{href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers",target:"_blank",rel:"noopener noreferrer"},"@mdit-vue/plugin-headers"),l(".")]),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),re=e("p",null,"Also see:",-1),de=e("h3",{id:"markdown-importcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-importcode"},[e("span",null,"markdown.importCode")])],-1),pe=e("li",null,[e("p",null,[l("Type: "),e("code",null,"ImportCodePluginOptions | false")])],-1),ce=e("li",null,[e("p",null,"Details:"),e("p",null,"Options for VuePress built-in markdown-it import-code plugin."),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),ue=e("p",null,"Also see:",-1),he=i('<h4 id="markdown-importcode-handleimportpath" tabindex="-1"><a class="header-anchor" href="#markdown-importcode-handleimportpath"><span>markdown.importCode.handleImportPath</span></a></h4><ul><li><p>Type: <code>(str: string) =&gt; string</code></p></li><li><p>Default: <code>(str) =&gt; str</code></p></li><li><p>Details:</p><p>A function to handle the import path of the import code syntax.</p></li></ul><h3 id="markdown-links" tabindex="-1"><a class="header-anchor" href="#markdown-links"><span>markdown.links</span></a></h3>',3),fe=i('<li><p>Type: <code>LinksPluginOptions | false</code></p></li><li><p>Details:</p><p>Options for VuePress built-in markdown-it links plugin.</p><p>It will convert the tag of internal links to <a href="#markdownlinksinternaltag">internalTag</a>, and add extra attributes and icon to external links.</p><p>Set to <code>false</code> to disable this plugin.</p></li>',2),me=e("p",null,"Also see:",-1),ge=e("h4",{id:"markdown-links-internaltag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-links-internaltag"},[e("span",null,"markdown.links.internalTag")])],-1),ke=e("li",null,[e("p",null,[l("Type: "),e("code",null,"'a' | 'RouteLink' | 'RouterLink'")])],-1),be=e("li",null,[e("p",null,[l("Default: "),e("code",null,"'RouteLink'")])],-1),ye=e("p",null,"Details:",-1),De=e("p",null,"Tag for internal links.",-1),_e=i('<h4 id="markdown-links-externalattrs" tabindex="-1"><a class="header-anchor" href="#markdown-links-externalattrs"><span>markdown.links.externalAttrs</span></a></h4><ul><li><p>Type: <code>Record&lt;string, string&gt;</code></p></li><li><p>Default: <code>{ target: &#39;_blank&#39;, rel: &#39;noopener noreferrer&#39; }</code></p></li><li><p>Details:</p><p>Additional attributes for external links.</p></li></ul><h3 id="markdown-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-sfc"><span>markdown.sfc</span></a></h3>',3),ve=e("li",null,[e("p",null,[l("Type: "),e("code",null,"SfcPluginOptions | false")])],-1),we=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Options for "),e("a",{href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc",target:"_blank",rel:"noopener noreferrer"},"@mdit-vue/plugin-sfc"),l(".")]),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),Ce=e("p",null,"Also see:",-1),xe=i(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-slugify" tabindex="-1"><a class="header-anchor" href="#markdown-slugify"><span>markdown.slugify</span></a></h3><ul><li><p>Type: <code>(str: string) =&gt; string</code></p></li><li><p>Details:</p><p>The default slugify function.</p></li></ul><h3 id="markdown-title" tabindex="-1"><a class="header-anchor" href="#markdown-title"><span>markdown.title</span></a></h3><ul><li><p>Type: <code>undefined | false</code></p></li><li><p>Details:</p><p>Options for <a href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-title" target="_blank" rel="noopener noreferrer">@mdit-vue/plugin-title</a>.</p><p>Set to <code>false</code> to disable this plugin.</p></li></ul><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-toc" tabindex="-1"><a class="header-anchor" href="#markdown-toc"><span>markdown.toc</span></a></h3><ul><li><p>Type: <code>TocPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> defaultOptions</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  level:</span><span style="color:#D4D4D4;"> [</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),Te=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Options for "),e("a",{href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc",target:"_blank",rel:"noopener noreferrer"},"@mdit-vue/plugin-toc"),l(".")]),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),Ee=e("p",null,"Also see:",-1),Ae=e("h4",{id:"markdown-vpre-block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-vpre-block"},[e("span",null,"markdown.vPre.block")])],-1),Pe=i("<li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Add <code>v-pre</code> directive to <code>&lt;pre&gt;</code> tag of code block or not.</p></li>",3),Se=e("p",null,"Also see:",-1),Be=e("h4",{id:"markdown-vpre-inline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-vpre-inline"},[e("span",null,"markdown.vPre.inline")])],-1),Fe=i("<li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Add <code>v-pre</code> directive to <code>&lt;code&gt;</code> tag of inline code or not.</p></li>",3),Re=e("p",null,"Also see:",-1),Oe=e("h2",{id:"plugin-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-config"},[e("span",null,"Plugin Config")])],-1),Ge=e("h3",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins"},[e("span",null,"plugins")])],-1),Le=e("li",null,[e("p",null,[l("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),Ie=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use."),e("p",null,"This option accepts an array, each item of which could be a plugin or an array of plugins.")],-1),Me=e("p",null,"Also see:",-1),Ne=e("h2",{id:"plugin-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-api"},[e("span",null,"Plugin API")])],-1),je=e("p",null,[l("User config file also works as a VuePress plugin, so all of the Plugin APIs are available except the "),e("code",null,"name"),l(" and "),e("code",null,"multiple"),l(" options.")],-1);function Ve(qe,He){const n=s("RouteLink");return r(),d("div",null,[c,e("ul",null,[u,e("li",null,[h,e("ul",null,[e("li",null,[t(n,{to:"/guide/assets.html#base-helper"},{default:o(()=>[l("Guide > Assets > Base Helper")]),_:1})]),e("li",null,[t(n,{to:"/guide/deployment.html"},{default:o(()=>[l("Guide > Deployment")]),_:1})])])])]),f,e("ul",null,[m,e("li",null,[g,e("ul",null,[k,e("li",null,[t(n,{to:"/reference/frontmatter.html#lang"},{default:o(()=>[l("Frontmatter > lang")]),_:1})])])])]),b,e("ul",null,[y,e("li",null,[D,e("ul",null,[_,e("li",null,[t(n,{to:"/reference/frontmatter.html#description"},{default:o(()=>[l("Frontmatter > description")]),_:1})])])])]),v,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[w,e("li",null,[t(n,{to:"/reference/frontmatter.html#head"},{default:o(()=>[l("Frontmatter > head")]),_:1})])])])]),C,e("ul",null,[x,e("li",null,[T,e("ul",null,[e("li",null,[t(n,{to:"/guide/i18n.html"},{default:o(()=>[l("Guide > I18n")]),_:1})])])])]),E,A,e("ul",null,[P,S,e("li",null,[B,e("ul",null,[e("li",null,[t(n,{to:"/guide/theme.html"},{default:o(()=>[l("Guide > Theme")]),_:1})]),F])])]),R,O,e("ul",null,[G,e("li",null,[L,e("ul",null,[e("li",null,[t(n,{to:"/guide/bundler.html"},{default:o(()=>[l("Guide > Bundler")]),_:1})]),e("li",null,[t(n,{to:"/reference/bundler/vite.html"},{default:o(()=>[l("Bundlers > Vite")]),_:1})]),e("li",null,[t(n,{to:"/reference/bundler/webpack.html"},{default:o(()=>[l("Bundlers > Webpack")]),_:1})])])])]),I,e("ul",null,[M,N,j,e("li",null,[V,e("ul",null,[e("li",null,[t(n,{to:"/guide/assets.html#public-files"},{default:o(()=>[l("Guide > Assets > Public Files")]),_:1})])])])]),q,e("ul",null,[H,e("li",null,[Y,e("ul",null,[e("li",null,[t(n,{to:"/reference/frontmatter.html#permalinkpattern"},{default:o(()=>[l("Frontmatter > permalinkPattern")]),_:1})])])])]),U,e("ul",null,[W,e("li",null,[$,e("ul",null,[Z,e("li",null,[t(n,{to:"/guide/markdown.html#syntax-extensions"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions")]),_:1})])])])]),z,e("ul",null,[J,e("li",null,[K,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#header-anchors"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Header Anchors")]),_:1})])])])]),Q,e("ul",null,[X,ee,e("li",null,[le,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#emoji"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Emoji")]),_:1})])])])]),ne,e("ul",null,[te,oe,e("li",null,[ie,e("ul",null,[e("li",null,[t(n,{to:"/guide/page.html#frontmatter"},{default:o(()=>[l("Guide > Page > Frontmatter")]),_:1})]),e("li",null,[t(n,{to:"/reference/node-api.html#frontmatter"},{default:o(()=>[l("Node API > Page Properties > frontmatter")]),_:1})])])])]),ae,e("ul",null,[se,e("li",null,[re,e("ul",null,[e("li",null,[t(n,{to:"/reference/node-api.html#headers"},{default:o(()=>[l("Node API > Page Properties > headers")]),_:1})])])])]),de,e("ul",null,[pe,ce,e("li",null,[ue,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#import-code-blocks"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Import Code Blocks")]),_:1})])])])]),he,e("ul",null,[fe,e("li",null,[me,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#links"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Links")]),_:1})])])])]),ge,e("ul",null,[ke,be,e("li",null,[ye,De,e("p",null,[l("By default, this plugin will transform internal links to "),t(n,{to:"/reference/components.html#routelink"},{default:o(()=>[l("RouteLink")]),_:1}),l(".")])])]),_e,e("ul",null,[ve,we,e("li",null,[Ce,e("ul",null,[e("li",null,[t(n,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:o(()=>[l("Cookbook > Markdown and Vue SFC")]),_:1})]),e("li",null,[t(n,{to:"/reference/node-api.html#sfcblocks"},{default:o(()=>[l("Node API > Page Properties > sfcBlocks")]),_:1})])])])]),xe,e("ul",null,[Te,e("li",null,[Ee,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#table-of-contents"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Table of Contents")]),_:1})])])])]),Ae,e("ul",null,[Pe,e("li",null,[Se,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#wrap-with-v-pre"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks > Wrap with v-pre")]),_:1})])])])]),Be,e("ul",null,[Fe,e("li",null,[Re,e("ul",null,[e("li",null,[t(n,{to:"/guide/markdown.html#wrap-with-v-pre"},{default:o(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks > Wrap with v-pre")]),_:1})])])])]),Oe,Ge,e("ul",null,[Le,Ie,e("li",null,[Me,e("ul",null,[e("li",null,[t(n,{to:"/guide/plugin.html"},{default:o(()=>[l("Guide > Plugin")]),_:1})])])])]),Ne,je,e("p",null,[l("Please check out "),t(n,{to:"/reference/plugin-api.html"},{default:o(()=>[l("Plugin API Reference")]),_:1}),l(" for a full list of Plugin APIs.")])])}const Ue=a(p,[["render",Ve],["__file","config.html.vue"]]),We=JSON.parse('{"path":"/reference/config.html","title":"Config","lang":"zh-CN","frontmatter":{"description":"Config Site Config base Type: string Default: / Details: The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path. I...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/reference/config.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Config"}],["meta",{"property":"og:description","content":"Config Site Config base Type: string Default: / Details: The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path. I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-14T14:29:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-14T14:29:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-14T14:29:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Site Config","slug":"site-config","link":"#site-config","children":[{"level":3,"title":"base","slug":"base","link":"#base","children":[]},{"level":3,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"description","slug":"description","link":"#description","children":[]},{"level":3,"title":"head","slug":"head","link":"#head","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Theme Config","slug":"theme-config","link":"#theme-config","children":[{"level":3,"title":"theme","slug":"theme","link":"#theme","children":[]}]},{"level":2,"title":"Bundler Config","slug":"bundler-config","link":"#bundler-config","children":[{"level":3,"title":"bundler","slug":"bundler","link":"#bundler","children":[]}]},{"level":2,"title":"Common Config","slug":"common-config","link":"#common-config","children":[{"level":3,"title":"dest","slug":"dest","link":"#dest","children":[]},{"level":3,"title":"temp","slug":"temp","link":"#temp","children":[]},{"level":3,"title":"cache","slug":"cache","link":"#cache","children":[]},{"level":3,"title":"public","slug":"public","link":"#public","children":[]},{"level":3,"title":"debug","slug":"debug","link":"#debug","children":[]},{"level":3,"title":"pagePatterns","slug":"pagepatterns","link":"#pagepatterns","children":[]},{"level":3,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]}]},{"level":2,"title":"Dev Config","slug":"dev-config","link":"#dev-config","children":[{"level":3,"title":"host","slug":"host","link":"#host","children":[]},{"level":3,"title":"port","slug":"port","link":"#port","children":[]},{"level":3,"title":"open","slug":"open","link":"#open","children":[]},{"level":3,"title":"templateDev","slug":"templatedev","link":"#templatedev","children":[]}]},{"level":2,"title":"Build Config","slug":"build-config","link":"#build-config","children":[{"level":3,"title":"shouldPreload","slug":"shouldpreload","link":"#shouldpreload","children":[]},{"level":3,"title":"shouldPrefetch","slug":"shouldprefetch","link":"#shouldprefetch","children":[]},{"level":3,"title":"templateBuild","slug":"templatebuild","link":"#templatebuild","children":[]},{"level":3,"title":"templateBuildRenderer","slug":"templatebuildrenderer","link":"#templatebuildrenderer","children":[]}]},{"level":2,"title":"Markdown Config","slug":"markdown-config","link":"#markdown-config","children":[{"level":3,"title":"markdown","slug":"markdown","link":"#markdown","children":[]},{"level":3,"title":"markdown.anchor","slug":"markdown-anchor","link":"#markdown-anchor","children":[]},{"level":3,"title":"markdown.assets","slug":"markdown-assets","link":"#markdown-assets","children":[]},{"level":3,"title":"markdown.component","slug":"markdown-component","link":"#markdown-component","children":[]},{"level":3,"title":"markdown.emoji","slug":"markdown-emoji","link":"#markdown-emoji","children":[]},{"level":3,"title":"markdown.frontmatter","slug":"markdown-frontmatter","link":"#markdown-frontmatter","children":[]},{"level":3,"title":"markdown.headers","slug":"markdown-headers","link":"#markdown-headers","children":[]},{"level":3,"title":"markdown.importCode","slug":"markdown-importcode","link":"#markdown-importcode","children":[]},{"level":3,"title":"markdown.links","slug":"markdown-links","link":"#markdown-links","children":[]},{"level":3,"title":"markdown.sfc","slug":"markdown-sfc","link":"#markdown-sfc","children":[]},{"level":3,"title":"markdown.slugify","slug":"markdown-slugify","link":"#markdown-slugify","children":[]},{"level":3,"title":"markdown.title","slug":"markdown-title","link":"#markdown-title","children":[]},{"level":3,"title":"markdown.toc","slug":"markdown-toc","link":"#markdown-toc","children":[]}]},{"level":2,"title":"Plugin Config","slug":"plugin-config","link":"#plugin-config","children":[{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]}]},{"level":2,"title":"Plugin API","slug":"plugin-api","link":"#plugin-api","children":[]}],"git":{"updatedTime":1720967398000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"lebennington","email":"100212066+lebennington@users.noreply.github.com","commits":1}]},"autoDesc":true,"filePathRelative":"reference/config.md"}');export{Ue as comp,We as data};
