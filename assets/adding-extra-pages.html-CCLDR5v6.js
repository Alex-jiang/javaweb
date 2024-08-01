import{_ as p,r as o,o as t,c,a as n,b as s,d as e,w as l,e as r}from"./app-D5-RCq7A.js";const i={},d=n("h1",{id:"添加额外页面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加额外页面"},[n("span",null,"添加额外页面")])],-1),D=n("p",null,"有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。",-1),y=r(`<h2 id="添加默认的主页" tabindex="-1"><a class="header-anchor" href="#添加默认的主页"><span>添加默认的主页</span></a></h2><p>作为一个主题作者，你可能不想要求用户必须创建一个 <code>/README.md</code> 文件来作为主页，但是你希望提供一个默认的主页：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createPage</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // 初始化之后，所有的页面已经加载完毕</span></span>
<span class="line"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> onInitialized</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // 如果主页不存在</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">every</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">)) {</span></span>
<span class="line"><span style="color:#6A9955;">      // 创建一个主页</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> homepage</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#DCDCAA;"> createPage</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#9CDCFE;">        path:</span><span style="color:#CE9178;"> &#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">        // 设置 frontmatter</span></span>
<span class="line"><span style="color:#9CDCFE;">        frontmatter:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          layout:</span><span style="color:#CE9178;"> &#39;Layout&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#6A9955;">        // 设置 markdown 内容</span></span>
<span class="line"><span style="color:#9CDCFE;">        content:</span><span style="color:#CE9178;"> \`</span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#CE9178;"># 欢迎来到 </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#569CD6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">这是默认主页</span></span>
<span class="line"><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      })</span></span>
<span class="line"><span style="color:#6A9955;">      // 把它添加到 \`app.pages\`</span></span>
<span class="line"><span style="color:#9CDCFE;">      app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">homepage</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(C,v){const a=o("RouteLink");return t(),c("div",null,[d,D,n("p",null,[s("我们可以借助于 "),e(a,{to:"/zh/reference/plugin-api.html"},{default:l(()=>[s("插件 API")]),_:1}),s(" 和 "),e(a,{to:"/zh/reference/node-api.html"},{default:l(()=>[s("Node API")]),_:1}),s(" 来轻松实现。")]),y])}const h=p(i,[["render",m],["__file","adding-extra-pages.html.vue"]]),g=JSON.parse('{"path":"/zh/advanced/cookbook/adding-extra-pages.html","title":"添加额外页面","lang":"zh-CN","frontmatter":{"description":"添加额外页面 有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。 我们可以借助于 和 来轻松实现。 添加默认的主页 作为一个主题作者，你可能不想要求用户必须创建一个 /README.md 文件来作为主页，但是你希望提供一个默认的主页：","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/zh/advanced/cookbook/adding-extra-pages.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"添加额外页面"}],["meta",{"property":"og:description","content":"添加额外页面 有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。 我们可以借助于 和 来轻松实现。 添加默认的主页 作为一个主题作者，你可能不想要求用户必须创建一个 /README.md 文件来作为主页，但是你希望提供一个默认的主页："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T05:20:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-28T05:20:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"添加额外页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T05:20:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"添加默认的主页","slug":"添加默认的主页","link":"#添加默认的主页","children":[]}],"git":{"updatedTime":1703740814000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/advanced/cookbook/adding-extra-pages.md"}');export{h as comp,g as data};
