import{_ as i,r as o,o as p,c as r,a as s,b as n,d as a,w as l,e as t}from"./app-D3aDzviN.js";const c={},d=s("h1",{id:"writing-a-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#writing-a-plugin"},[s("span",null,"Writing a Plugin")])],-1),u={class:"custom-container tip"},D=s("p",{class:"custom-container-title"},"TIP",-1),h=s("h2",{id:"create-a-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-plugin"},[s("span",null,"Create a Plugin")])],-1),m=s("em",null,"Plugin Object",-1),g=t(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> fooPlugin</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=s("em",null,"Plugin Object",-1),y=s("em",null,"Plugin Function",-1),b=t(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A plugin usually needs to allow user options, so we typically provide users with a function to receive options, and returns a <em>Plugin Object</em> or a <em>Plugin Function</em>. Then your plugin should be converted like this:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> fooPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm"><span>Publish to NPM</span></a></h2><p>After creating a plugin, you should follow some conventions in the <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json</a> file before publishing it to NPM:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-plugin-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;vuepress-plugin&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),C=s("code",null,"name",-1),_=s("code",null,"vuepress-plugin-xxx",-1),f=s("code",null,"@org/vuepress-plugin-xxx",-1),P=s("em",null,"Plugin Object",-1),E=s("li",null,[n("Set "),s("code",null,"keywords"),n(" to include "),s("code",null,"vuepress-plugin"),n(", so that users can search your plugin on NPM.")],-1);function k(x,A){const e=o("RouteLink");return p(),r("div",null,[d,s("div",u,[D,s("p",null,[n("Before reading this guide, you'd better learn the VuePress "),a(e,{to:"/advanced/architecture.html"},{default:l(()=>[n("architecture")]),_:1}),n(" first.")])]),h,s("p",null,[n("A plugin should be a plain JavaScript object that satisfies the "),a(e,{to:"/reference/plugin-api.html"},{default:l(()=>[n("Plugin API")]),_:1}),n(", which is called a "),m,n(":")]),g,s("p",null,[n("A plugin could also be a function that receives the "),a(e,{to:"/reference/node-api.html#app"},{default:l(()=>[n("app instance")]),_:1}),n(" as the param and returns a "),v,n(", which is called a "),y,n(":")]),b,s("ul",null,[s("li",null,[n("Set "),C,n(" to follow the naming convention, i.e. "),_,n(" or "),f,n(", which should be consistent with the "),a(e,{to:"/reference/plugin-api.html#name"},{default:l(()=>[n("name")]),_:1}),n(" field of the "),P,n(".")]),E])])}const j=i(c,[["render",k],["__file","plugin.html.vue"]]),F=JSON.parse(`{"path":"/advanced/plugin.html","title":"Writing a Plugin","lang":"zh-CN","frontmatter":{"description":"Writing a Plugin TIP Before reading this guide, you'd better learn the VuePress first. Create a Plugin A plugin should be a plain JavaScript object that satisfies the , which is...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./advanced/plugin.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Writing a Plugin"}],["meta",{"property":"og:description","content":"Writing a Plugin TIP Before reading this guide, you'd better learn the VuePress first. Create a Plugin A plugin should be a plain JavaScript object that satisfies the , which is..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T13:10:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-10T13:10:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Writing a Plugin\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T13:10:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create a Plugin","slug":"create-a-plugin","link":"#create-a-plugin","children":[]},{"level":2,"title":"Publish to NPM","slug":"publish-to-npm","link":"#publish-to-npm","children":[]}],"git":{"updatedTime":1702213846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"advanced/plugin.md"}`);export{j as comp,F as data};
