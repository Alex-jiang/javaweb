import{_ as p,r as t,o as r,c,a as n,b as s,d as a,w as l,e as o}from"./app-D5-RCq7A.js";const i={},D=n("h1",{id:"客户端配置的使用方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#客户端配置的使用方法"},[n("span",null,"客户端配置的使用方法")])],-1),d=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> pluginOrTheme</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  clientConfigFile:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/clientConfig.ts&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u=n("code",null,"vuepress/client",-1),y=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#9CDCFE;">  rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance"><span>enhance</span></a></h2><p><code>enhance</code> 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性：</p>`,3),C=n("li",null,[n("code",null,"app"),s(" 是由 "),n("a",{href:"https://staging-cn.vuejs.org/api/application.html#create-app",target:"_blank",rel:"noopener noreferrer"},"createApp"),s(" 创建的 Vue 应用实例。")],-1),v=n("li",null,[n("code",null,"router"),s(" 是由 "),n("a",{href:"https://router.vuejs.org/zh/api/index.html#createrouter",target:"_blank",rel:"noopener noreferrer"},"createRouter"),s(" 创建的路由实例。")],-1),m=n("code",null,"siteData",-1),h=o(`<p><code>enhance</code> 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。</p><h3 id="注册-vue-组件" tabindex="-1"><a class="header-anchor" href="#注册-vue-组件"><span>注册 Vue 组件</span></a></h3><p>你可以通过 <a href="https://staging-cn.vuejs.org/api/application.html#app-component" target="_blank" rel="noopener noreferrer">app.component</a> 方法来注册 Vue 全局组件：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> MyComponent</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./MyComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#9CDCFE;">    app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;MyComponent&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能"><span>使用不支持 SSR 的功能</span></a></h3><p>VuePress 会在构建过程中生成一个 SSR 应用，用以对页面进行预渲染。一般而言，如果一段代码在客户端应用 Mount 之前就使用了浏览器或 DOM API ，我们就认为其对 SSR 不友好，即不支持 SSR 。</p>`,6),f=n("code",null,"enhance",-1),b=n("code",null,"__VUEPRESS_SSR__",-1),g=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> enhance</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">__VUEPRESS_SSR__</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> nonSsrFriendlyModule</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#569CD6;"> import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;non-ssr-friendly-module&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-router-方法" tabindex="-1"><a class="header-anchor" href="#使用-router-方法"><span>使用 Router 方法</span></a></h3><p>你可以使用 vue-router 提供的 <a href="https://router.vuejs.org/zh/api/index.html#router-%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">Router 方法</a> 。例如，添加导航钩子：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#9CDCFE;">    router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">beforeEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;before navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">    router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">afterEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;after navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>我们不推荐使用 <code>addRoute</code> 方法来添加动态路由，因为这些路由记录 <strong>不会</strong> 在构建模式中被预渲染出来。</p><p>当然，如果你了解了这种用法的缺点，你还是可以这样使用。</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>setup</span></a></h2><p><code>setup</code> 函数会在客户端 Vue 应用的 <a href="https://staging-cn.vuejs.org/api/composition-api-setup.html" target="_blank" rel="noopener noreferrer">setup</a> Hook 中被调用。</p><h3 id="使用组合式-api" tabindex="-1"><a class="header-anchor" href="#使用组合式-api"><span>使用组合式 API</span></a></h3><p>你可以把 <code>setup</code> 函数当作根组件的 <a href="https://staging-cn.vuejs.org/api/composition-api-setup.html" target="_blank" rel="noopener noreferrer">setup</a> Hook 中的一部分。因此，所有的组合式 API 都可以在这里使用。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">provide</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useRoute</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">useRouter</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#6A9955;">    // 获取当前的路由位置</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRoute</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#6A9955;">    // 或者 vue-router 实例</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> router</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRouter</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#6A9955;">    // 供给一个值，可以被布局、页面和其他组件注入</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">    provide</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;count&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能-1" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能-1"><span>使用不支持 SSR 的功能</span></a></h3>`,11),E=n("code",null,"setup",-1),_=n("code",null,"__VUEPRESS_SSR__",-1),A=o(`<p>使用不支持 SSR 的功能的另一种方式就是将他们放在 <a href="https://staging-cn.vuejs.org/api/composition-api-lifecycle.html#onmounted" target="_blank" rel="noopener noreferrer">onMounted</a> Hook 中：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#DCDCAA;">    onMounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">      // 在 mounted 之后使用 DOM API</span></span>
<span class="line"><span style="color:#9CDCFE;">      document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelector</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;#app&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts"><span>layouts</span></a></h2>`,3),k=n("code",null,"layouts",-1),F=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> MyLayout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./layouts/MyLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    MyLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents"><span>rootComponents</span></a></h2><p><code>rootComponents</code> 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。</p><p>该选项的典型使用方式就是放置一些全局的 UI 组件，比如全局弹窗等：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> GlobalPopup</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./components/GlobalPopup.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  rootComponents:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">GlobalPopup</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(S,R){const e=t("RouteLink");return r(),c("div",null,[D,n("p",null,[s("你可以直接在你的项目中使用 "),a(e,{to:"/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:l(()=>[s("客户端配置文件")]),_:1}),s(" 。或者，在你的插件或者主题中，使用 "),a(e,{to:"/zh/reference/plugin-api.html#clientconfigfile"},{default:l(()=>[s("clientConfigFile")]),_:1}),s(" Hook 来指定客户端配置文件的路径：")]),d,n("p",null,[s("在客户端配置文件中，"),u,s(" 提供了一个 "),a(e,{to:"/zh/reference/client-api.html#defineclientconfig"},{default:l(()=>[s("defineClientConfig")]),_:1}),s(" 函数来帮助你定义客户端配置：")]),y,n("ul",null,[C,v,n("li",null,[m,s(" 是一个根据用户配置生成的 Ref 对象，包含 "),a(e,{to:"/zh/reference/config.html#base"},{default:l(()=>[s("base")]),_:1}),s(", "),a(e,{to:"/zh/reference/config.html#lang"},{default:l(()=>[s("lang")]),_:1}),s(", "),a(e,{to:"/zh/reference/config.html#title"},{default:l(()=>[s("title")]),_:1}),s(", "),a(e,{to:"/zh/reference/config.html#description"},{default:l(()=>[s("description")]),_:1}),s(", "),a(e,{to:"/zh/reference/config.html#head"},{default:l(()=>[s("head")]),_:1}),s(" 和 "),a(e,{to:"/zh/reference/config.html#locales"},{default:l(()=>[s("locales")]),_:1}),s("。")])]),h,n("p",null,[s("我们已经提供了一个 "),a(e,{to:"/zh/reference/components.html#clientonly"},{default:l(()=>[s("ClientOnly")]),_:1}),s(" 组件来包裹不支持 SSR 的内容。")]),n("p",null,[s("在 "),f,s(" 函数中，你可以使用 "),a(e,{to:"/zh/reference/client-api.html#ssr"},{default:l(()=>[b]),_:1}),s(" 标记来处理这种情况。")]),g,n("p",null,[s("在 "),E,s(" 函数中，"),a(e,{to:"/zh/reference/client-api.html#ssr"},{default:l(()=>[_]),_:1}),s(" 标记同样可用。")]),A,n("p",null,[k,s(" 配置项用于设置布局组件。你在此处注册布局后，用户就可以通过 "),a(e,{to:"/zh/reference/frontmatter.html#layout"},{default:l(()=>[s("layout")]),_:1}),s(" frontmatter 来使用它们。")]),F])}const M=p(i,[["render",x],["__file","usage-of-client-config.html.vue"]]),V=JSON.parse('{"path":"/zh/advanced/cookbook/usage-of-client-config.html","title":"客户端配置的使用方法","lang":"zh-CN","frontmatter":{"description":"客户端配置的使用方法 你可以直接在你的项目中使用 。或者，在你的插件或者主题中，使用 Hook 来指定客户端配置文件的路径： 在客户端配置文件中，vuepress/client 提供了一个 函数来帮助你定义客户端配置： enhance enhance 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性： app 是由 c...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/zh/advanced/cookbook/usage-of-client-config.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"客户端配置的使用方法"}],["meta",{"property":"og:description","content":"客户端配置的使用方法 你可以直接在你的项目中使用 。或者，在你的插件或者主题中，使用 Hook 来指定客户端配置文件的路径： 在客户端配置文件中，vuepress/client 提供了一个 函数来帮助你定义客户端配置： enhance enhance 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性： app 是由 c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T05:20:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-28T05:20:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"客户端配置的使用方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T05:20:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"enhance","slug":"enhance","link":"#enhance","children":[{"level":3,"title":"注册 Vue 组件","slug":"注册-vue-组件","link":"#注册-vue-组件","children":[]},{"level":3,"title":"使用不支持 SSR 的功能","slug":"使用不支持-ssr-的功能","link":"#使用不支持-ssr-的功能","children":[]},{"level":3,"title":"使用 Router 方法","slug":"使用-router-方法","link":"#使用-router-方法","children":[]}]},{"level":2,"title":"setup","slug":"setup","link":"#setup","children":[{"level":3,"title":"使用组合式 API","slug":"使用组合式-api","link":"#使用组合式-api","children":[]},{"level":3,"title":"使用不支持 SSR 的功能","slug":"使用不支持-ssr-的功能-1","link":"#使用不支持-ssr-的功能-1","children":[]}]},{"level":2,"title":"layouts","slug":"layouts","link":"#layouts","children":[]},{"level":2,"title":"rootComponents","slug":"rootcomponents","link":"#rootcomponents","children":[]}],"git":{"updatedTime":1703740814000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/advanced/cookbook/usage-of-client-config.md"}');export{M as comp,V as data};
