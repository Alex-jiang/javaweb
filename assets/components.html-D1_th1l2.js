import{_ as e,r as o,o as t,c as p,a as s,d as i,w as c,e as l,b as n}from"./app-D3aDzviN.js";const r={},d=l(`<h1 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件"><span>内置组件</span></a></h1><h2 id="autolink" tabindex="-1"><a class="header-anchor" href="#autolink"><span>AutoLink</span></a></h2><ul><li><p>Props:</p><ul><li>config <ul><li>类型：<code>AutoLinkConfig</code></li><li>是否必须：<code>true</code></li></ul></li></ul></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> AutoLinkConfig</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 判断该链接是否被激活的模式，优先级高于 \`exact\`</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  activeMatch</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">RegExp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * \`aria-label\` 属性</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  ariaLabel</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 该链接是否只有在 URL 完全匹配时才激活</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  exact</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 自动链接的 URL</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * \`rel\` 属性</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  rel</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * \`target\` 属性</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  target</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 自动链接的文本</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用：</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  default 插槽</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> #before</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">before 插槽</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> #after</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">after 插槽</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> v-slot</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;config&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ config.text }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> #before</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;config&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ config.text }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>该组件将会自动将内部链接渲染为 <code>&lt;RouteLink&gt;</code> ，将外部链接渲染为 <code>&lt;a&gt;</code> ，并添加必要的属性。</p><p>你可以通过 <code>before</code> 和 <code>after</code> 插槽，在文本之前和之后渲染内容。也可以通过 <code>default</code> 插槽，直接渲染文本（默认文本是 <code>config.text</code>）。</p><p>该组件主要是为了开发主题时使用，普通用户在绝大多数情况下并不会用到它。对于主题作者来说，我们建议你在不确定链接是内部链接还是外部链接时，尽量使用这个组件。</p></li></ul><h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly"><span>ClientOnly</span></a></h2><ul><li>使用：</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">ClientOnly</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">NonSsrFriendlyComponent</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">ClientOnly</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。</p><p>如果一个组件在 <code>setup()</code> 中直接使用 浏览器 / DOM API ，它会导致构建过程报错，因为这些 API 在 Node.js 的环境中是无法使用的。在这种情况下，你可以选择一种方式：</p><ul><li>修改这个组件，只在 <code>onBeforeMount()</code> 或 <code>onMounted()</code> Hook 中使用 浏览器 / DOM API 。</li><li>使用 <code>&lt;ClientOnly&gt;</code> 包裹这个组件。</li></ul></li></ul><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><ul><li><p>Props:</p><ul><li>path <ul><li>类型： <code>string</code></li><li>是否必须： <code>false</code></li></ul></li></ul></li><li><p>使用：</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">Content</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/path/to/page.md&quot;</span><span style="color:#808080;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,14),u=s("li",null,[s("p",null,"详情："),s("p",null,"该组件会渲染页面的 Markdown 内容。"),s("p",null,[n("如果没有传入 "),s("code",null,"path"),n(" Prop ，它会渲染当前路由下的页面内容。")]),s("p",null,"该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。")],-1),y=s("p",null,"参考：",-1),v=l(`<h2 id="routelink" tabindex="-1"><a class="header-anchor" href="#routelink"><span>RouteLink</span></a></h2><ul><li><p>Props:</p><ul><li>to <ul><li>类型： <code>string</code></li><li>是否必须： <code>true</code></li></ul></li><li>active <ul><li>类型： <code>boolean</code></li><li>是否必须： <code>false</code></li><li>默认值： <code>false</code></li></ul></li><li>activeClass <ul><li>类型： <code>string</code></li><li>是否必须： <code>false</code></li><li>默认值： <code>&#39;route-link-active&#39;</code></li></ul></li></ul></li><li><p>使用：</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">RouteLink</span><span style="color:#9CDCFE;"> to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/path/to/target-page.md&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">目标页面</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">RouteLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">RouteLink</span><span style="color:#9CDCFE;"> active</span><span style="color:#9CDCFE;"> to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/path/to/current-page.md&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">当前页面</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">RouteLink</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>该组件会渲染一个链接，用于跳转到指定页面。</p><p>如果 <code>active</code> Prop 被设置为 <code>true</code> ，那么这个链接会被额外添加一个 <code>activeClass</code> 类名。需要注意的是，这里的 active 状态并不会根据当前路由自动更新。</p><p>该组件主要是为了开发主题时使用，普通用户在绝大多数情况下并不会用到它。对于主题作者来说，我们建议你在渲染内部链接时尽量使用这个组件，而不是使用 <code>vue-router</code> 的 <code>&lt;RouterLink&gt;</code> 组件。</p></li></ul>`,4);function m(D,g){const a=o("RouteLink");return t(),p("div",null,[d,s("ul",null,[u,s("li",null,[y,s("ul",null,[s("li",null,[i(a,{to:"/zh/reference/node-api.html#path"},{default:c(()=>[n("Node API > Page 属性 > path")]),_:1})])])])]),v])}const b=e(r,[["render",m],["__file","components.html.vue"]]),h=JSON.parse('{"path":"/zh/reference/components.html","title":"内置组件","lang":"zh-CN","frontmatter":{"description":"内置组件 AutoLink Props: config 类型：AutoLinkConfig 是否必须：true 使用： 详情： 该组件将会自动将内部链接渲染为 <RouteLink> ，将外部链接渲染为 <a> ，并添加必要的属性。 你可以通过 before 和 after 插槽，在文本之前和之后渲染内容。也可以通过 default 插槽，直接渲染文本...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/./zh/reference/components.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"内置组件"}],["meta",{"property":"og:description","content":"内置组件 AutoLink Props: config 类型：AutoLinkConfig 是否必须：true 使用： 详情： 该组件将会自动将内部链接渲染为 <RouteLink> ，将外部链接渲染为 <a> ，并添加必要的属性。 你可以通过 before 和 after 插槽，在文本之前和之后渲染内容。也可以通过 default 插槽，直接渲染文本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:46:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:46:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内置组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:46:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"AutoLink","slug":"autolink","link":"#autolink","children":[]},{"level":2,"title":"ClientOnly","slug":"clientonly","link":"#clientonly","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"RouteLink","slug":"routelink","link":"#routelink","children":[]}],"git":{"updatedTime":1715863566000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"张怀文","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/reference/components.md"}');export{b as comp,h as data};
