import{_ as t,r as p,o as i,c as r,a as e,b as s,d as a,w as l,e as o}from"./app-C1hgw8qQ.js";const c={},d=e("h1",{id:"writing-a-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#writing-a-theme"},[e("span",null,"Writing a Theme")])],-1),u={class:"custom-container tip"},D=e("p",{class:"custom-container-title"},"TIP",-1),m=e("h2",{id:"create-a-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-a-theme"},[e("span",null,"Create a Theme")])],-1),y=e("em",null,"Theme Object",-1),h=e("em",null,"Theme Function",-1),v=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> fooTheme</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // returns a theme object</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-theme-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // path to the client config of your theme</span></span>
<span class="line"><span style="color:#9CDCFE;">    clientConfigFile:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;client.js&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // set custom dev / build template</span></span>
<span class="line"><span style="color:#6A9955;">    // if the template is not specified, the default template</span></span>
<span class="line"><span style="color:#9CDCFE;">    templateBuild:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;templates/build.html&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#9CDCFE;">    templateDev:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;templates/dev.html&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // use plugins</span></span>
<span class="line"><span style="color:#9CDCFE;">    plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // other plugin APIs are also available</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> barTheme</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // returns a theme function</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      name:</span><span style="color:#CE9178;"> &#39;vuepress-theme-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, create theme&#39;s client config file <code>client.js</code> :</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> Layout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./layouts/Layout.vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> NotFound</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./layouts/NotFound.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    Layout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    NotFound</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>layouts</code> field declares the layouts provided by your theme. A theme must provide at least two layouts: <code>Layout</code> and <code>NotFound</code>. The former is to provide default layout for common pages, while the latter is to provide layout for 404-not-found page.</p>`,4),C=e("code",null,"Layout",-1),b=o(`<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">Content</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>NotFound</code> layout will be used for the <code>404.html</code> page:</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">404 Not Found</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=o(`<h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm"><span>Publish to NPM</span></a></h2><p>Also, there are some conventions for theme in <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json</a>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-theme-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;vuepress-theme&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=e("code",null,"name",-1),_=e("code",null,"vuepress-theme-xxx",-1),E=e("code",null,"@org/vuepress-theme-xxx",-1),F=e("em",null,"Theme Object",-1),k=e("li",null,[s("Set "),e("code",null,"keywords"),s(" to include "),e("code",null,"vuepress-theme"),s(", so that users can search your theme on NPM.")],-1);function A(T,x){const n=p("RouteLink");return i(),r("div",null,[d,e("div",u,[D,e("p",null,[s("Before reading this guide, you'd better learn the guide of "),a(n,{to:"/advanced/plugin.html"},{default:l(()=>[s("Writing a Plugin")]),_:1}),s(" first.")])]),m,e("p",null,[s("A VuePress theme is a special plugin, which should satisfy the "),a(n,{to:"/reference/theme-api.html"},{default:l(()=>[s("Theme API")]),_:1}),s(". Like plugins, a theme should also be a "),y,s(" or a "),h,s(", and could be wrapped with a function to receive options:")]),v,e("p",null,[s("The "),C,s(" layout should contain the "),a(n,{to:"/reference/components.html#content"},{default:l(()=>[s("Content")]),_:1}),s(" component to display the markdown content:")]),b,e("p",null,[s("You can provide more layouts, and users can change layout via "),a(n,{to:"/reference/frontmatter.html#layout"},{default:l(()=>[s("layout")]),_:1}),s(" frontmatter.")]),g,e("ul",null,[e("li",null,[s("Set "),f,s(" to follow the naming convention: "),_,s(" or "),E,s(", which should be consistent with the "),a(n,{to:"/reference/theme-api.html#name"},{default:l(()=>[s("name")]),_:1}),s(" field of the "),F,s(".")]),k])])}const N=t(c,[["render",A],["__file","theme.html.vue"]]),P=JSON.parse(`{"path":"/advanced/theme.html","title":"Writing a Theme","lang":"zh-CN","frontmatter":{"description":"Writing a Theme TIP Before reading this guide, you'd better learn the guide of first. Create a Theme A VuePress theme is a special plugin, which should satisfy the . Like plugin...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/advanced/theme.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Writing a Theme"}],["meta",{"property":"og:description","content":"Writing a Theme TIP Before reading this guide, you'd better learn the guide of first. Create a Theme A VuePress theme is a special plugin, which should satisfy the . Like plugin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T05:20:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-28T05:20:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Writing a Theme\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T05:20:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create a Theme","slug":"create-a-theme","link":"#create-a-theme","children":[]},{"level":2,"title":"Publish to NPM","slug":"publish-to-npm","link":"#publish-to-npm","children":[]}],"git":{"updatedTime":1703740814000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"advanced/theme.md"}`);export{N as comp,P as data};
