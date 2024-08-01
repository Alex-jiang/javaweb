import{_ as t}from"./hero-D7wZche-.js";import{_ as p,r as i,o as r,c,a as e,b as s,d as n,w as l,e as o}from"./app-CPK6wcVl.js";const d={},u=o('<h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets"><span>Assets</span></a></h1><h2 id="relative-urls" tabindex="-1"><a class="header-anchor" href="#relative-urls"><span>Relative URLs</span></a></h2><p>You can reference any assets using relative URLs in your Markdown content:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>or</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">image.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This is generally the suggested way to import images, as users usually place images near the Markdown file that references them.</p><h2 id="public-files" tabindex="-1"><a class="header-anchor" href="#public-files"><span>Public Files</span></a></h2><p>You can put some static assets inside public directory, and they will be copied to the root of the generated directory.</p>',9),D=e("code",null,".vuepress/public",-1),y=o(`<p>It would be useful in some cases:</p><ul><li>You may need to provide static assets that are not directly referenced in any of your Markdown files, for example, favicon and PWA icons.</li><li>You may need to serve some shared static assets, which may even be referenced outside your site, for example, logo images.</li><li>You may want to reference images using absolute URLs in your Markdown content.</li></ul><p>Take our documentation source files as an example, we are putting the logo of VuePress inside the public directory:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> docs</span></span>
<span class="line"><span style="color:#DCDCAA;">   ├─</span><span style="color:#CE9178;"> .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">   |  </span><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> public</span></span>
<span class="line"><span style="color:#D4D4D4;">   |     </span><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> images</span></span>
<span class="line"><span style="color:#D4D4D4;">   |        </span><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> hero.png</span><span style="color:#6A9955;">  # &lt;- Logo file</span></span>
<span class="line"><span style="color:#DCDCAA;">   └─</span><span style="color:#CE9178;"> guide</span></span>
<span class="line"><span style="color:#DCDCAA;">      └─</span><span style="color:#CE9178;"> assets.md</span><span style="color:#6A9955;">       # &lt;- Here we are</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can reference our logo in current page like this:</p><p><strong>Input</strong></p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p><img src="`+t+'" alt="VuePress Logo"></p><h3 id="base-helper" tabindex="-1"><a class="header-anchor" href="#base-helper"><span>Base Helper</span></a></h3>',10),h=e("code",null,"https://foo.github.io/bar/",-1),m=e("code",null,"'/bar/'",-1),g=e("code",null,"https://foo.github.io/bar/images/hero.png",-1),v=o('<p>In most cases, you don&#39;t need to worry about the reference path of those public files, as VuePress will automatically handle <code>base</code> for you:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">&lt;!-- you don&#39;t need to prepend `/bar/` to `/images/hero.png` manually --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),b={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"TIP",-1),f=e("code",null,"true",-1),E=e("code",null,"base",-1),k=e("code",null,"base",-1),_=o(`<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">img</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">src</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#DCDCAA;">withBase</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">logoPath</span><span style="color:#D4D4D4;">)</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">withBase</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> logoPath</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/images/hero.png&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also access the helper by <code>$withBase</code> directly:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> :src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;$withBase(&#39;/images/hero.png&#39;)&quot;</span><span style="color:#9CDCFE;"> alt</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;VuePress Logo&quot;</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="packages-and-path-aliases" tabindex="-1"><a class="header-anchor" href="#packages-and-path-aliases"><span>Packages and Path Aliases</span></a></h2><p>Although it is not a common usage, you can reference images from dependent packages:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> install</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> package-name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Since markdown image syntax regards image links as relative paths by default, you need to use <code>&lt;img&gt;</code> tag:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;package-name/image.png&quot;</span><span style="color:#9CDCFE;"> alt</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Image from dependency&quot;</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The path aliases that set in config file are also supported:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;@alias/image.png&quot;</span><span style="color:#9CDCFE;"> alt</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Image from path alias&quot;</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11),A={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"TIP",-1);function x(F,P){const a=i("RouteLink");return r(),c("div",null,[u,e("p",null,[s("The default public directory is "),D,s(", which can be changed by "),n(a,{to:"/reference/config.html#public"},{default:l(()=>[s("public")]),_:1}),s(" option.")]),y,e("p",null,[s("If your site is deployed to a non-root URL, for example, "),h,s(", then the "),n(a,{to:"/reference/config.html#base"},{default:l(()=>[s("base")]),_:1}),s(" should be set to "),m,s(". Obviously, your public files would be served like "),g,s(" after deployment.")]),v,e("div",b,[C,e("p",null,[s("When using "),n(a,{to:"/reference/bundler/webpack.html"},{default:l(()=>[s("webpack bundler")]),_:1}),s(", you need to set "),n(a,{to:"/reference/config.html#markdown-assets"},{default:l(()=>[s("markdown.assets.absolutePathPrependBase")]),_:1}),s(" to "),f,s(" to automatically prepend base to markdown images.")])]),e("p",null,[s("However, sometimes you may have some dynamical links referencing public files, especially when you are authoring a custom theme. In such case, the "),E,s(" could not be handled automatically. To help with that, VuePress provides a "),n(a,{to:"/reference/client-api.html#withbase"},{default:l(()=>[s("withBase")]),_:1}),s(" helper to prepend "),k,s(" for you:")]),_,e("div",A,[w,e("p",null,[s("Config reference: "),n(a,{to:"/reference/plugin-api.html#alias"},{default:l(()=>[s("alias")]),_:1})])])])}const q=p(d,[["render",x],["__file","assets.html.vue"]]),B=JSON.parse('{"path":"/guide/assets.html","title":"Assets","lang":"zh-CN","frontmatter":{"description":"Assets Relative URLs You can reference any assets using relative URLs in your Markdown content: or This is generally the suggested way to import images, as users usually place i...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/guide/assets.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Assets"}],["meta",{"property":"og:description","content":"Assets Relative URLs You can reference any assets using relative URLs in your Markdown content: or This is generally the suggested way to import images, as users usually place i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/javaweb/images/hero.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Assets\\",\\"image\\":[\\"https://github.com/javaweb/images/hero.png\\",\\"https://github.com/javaweb/images/hero.png\\",\\"https://github.com/javaweb/images/hero.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Relative URLs","slug":"relative-urls","link":"#relative-urls","children":[]},{"level":2,"title":"Public Files","slug":"public-files","link":"#public-files","children":[{"level":3,"title":"Base Helper","slug":"base-helper","link":"#base-helper","children":[]}]},{"level":2,"title":"Packages and Path Aliases","slug":"packages-and-path-aliases","link":"#packages-and-path-aliases","children":[]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"guide/assets.md"}');export{q as comp,B as data};
