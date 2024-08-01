import{_ as t,r as p,o as r,c as i,a as n,b as s,d as a,w as l,e as o}from"./app-BVk3uafa.js";const c={},d=n("h1",{id:"usage-of-client-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage-of-client-config"},[n("span",null,"Usage of Client Config")])],-1),D=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
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
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance"><span>enhance</span></a></h2><p>The <code>enhance</code> function could be either synchronous or asynchronous. It accepts a context param with following properties:</p>`,3),C=n("li",null,[n("code",null,"app"),s(" is the Vue application instance that created by "),n("a",{href:"https://vuejs.org/api/application.html#createapp",target:"_blank",rel:"noopener noreferrer"},"createApp"),s(".")],-1),m=n("li",null,[n("code",null,"router"),s(" is the Vue Router instance that created by "),n("a",{href:"https://router.vuejs.org/api/#createrouter",target:"_blank",rel:"noopener noreferrer"},"createRouter"),s(".")],-1),v=n("code",null,"siteData",-1),h=o(`<p>The <code>enhance</code> function will be invoked after the client app is created. It&#39;s possible to implement any enhancements to the Vue application.</p><h3 id="register-vue-components" tabindex="-1"><a class="header-anchor" href="#register-vue-components"><span>Register Vue Components</span></a></h3><p>You can register global Vue components via the <a href="https://vuejs.org/api/application.html#app-component" target="_blank" rel="noopener noreferrer">app.component</a> method:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> MyComponent</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./MyComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#9CDCFE;">    app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;MyComponent&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-non-ssr-friendly-features" tabindex="-1"><a class="header-anchor" href="#use-non-ssr-friendly-features"><span>Use Non-SSR-Friendly Features</span></a></h3><p>VuePress will generate a SSR application to pre-render pages during build. Generally speaking, if a code snippet is using Browser / DOM APIs before client app is mounted, we call it non-SSR-friendly.</p>`,6),f=n("code",null,"enhance",-1),g=n("code",null,"__VUEPRESS_SSR__",-1),b=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> enhance</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">__VUEPRESS_SSR__</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> nonSsrFriendlyModule</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#569CD6;"> import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;non-ssr-friendly-module&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-router-methods" tabindex="-1"><a class="header-anchor" href="#use-router-methods"><span>Use Router Methods</span></a></h3><p>You can make use of the <a href="https://router.vuejs.org/api/#router-methods" target="_blank" rel="noopener noreferrer">Router Methods</a> that provided by vue-router. For example, add navigation guard:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
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
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>It&#39;s not recommended to use <code>addRoute</code> method to add dynamic routes here, because those routes will <strong>NOT</strong> be pre-rendered in build mode.</p><p>But you can still do that if you understand the drawback.</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>setup</span></a></h2><p>The <code>setup</code> function would be invoked inside the <a href="https://vuejs.org/api/composition-api-setup.html" target="_blank" rel="noopener noreferrer">setup</a> hook of the client vue app.</p><h3 id="use-composition-api" tabindex="-1"><a class="header-anchor" href="#use-composition-api"><span>Use Composition API</span></a></h3><p>You can take the <code>setup</code> function as part of the <a href="https://vuejs.org/api/composition-api-setup.html" target="_blank" rel="noopener noreferrer">setup</a> hook of the root component. Thus, all composition APIs are available here.</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">provide</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useRoute</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">useRouter</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#6A9955;">    // get the current route location</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRoute</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#6A9955;">    // get the vue-router instance</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> router</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRouter</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#6A9955;">    // provide a value that can be injected by layouts, pages and other components</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">    provide</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;count&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-non-ssr-friendly-features-1" tabindex="-1"><a class="header-anchor" href="#use-non-ssr-friendly-features-1"><span>Use Non-SSR-Friendly Features</span></a></h3>`,11),E=n("code",null,"setup",-1),_=n("code",null,"__VUEPRESS_SSR__",-1),k=o(`<p>Another way to use non-ssr-friendly features is to put them inside the <a href="https://vuejs.org/api/composition-api-lifecycle.html#onmounted" target="_blank" rel="noopener noreferrer">onMounted</a> hook:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#DCDCAA;">    onMounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">      // use DOM API after mounted</span></span>
<span class="line"><span style="color:#9CDCFE;">      document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelector</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;#app&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts"><span>layouts</span></a></h2>`,3),F=n("code",null,"layouts",-1),A=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> MyLayout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./layouts/MyLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    MyLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents"><span>rootComponents</span></a></h2><p>The <code>rootComponents</code> is a components array to be placed directly into the root node of the client vue app.</p><p>Typical usage of this option is to put some global UI components, like global popup or so:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> GlobalPopup</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./components/GlobalPopup.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  rootComponents:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">GlobalPopup</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(S,R){const e=p("RouteLink");return r(),i("div",null,[d,n("p",null,[s("You can make use of the "),a(e,{to:"/guide/configuration.html#client-config-file"},{default:l(()=>[s("client config file")]),_:1}),s(" directly in your project, or specify the file path in your plugin or theme via "),a(e,{to:"/reference/plugin-api.html#clientconfigfile"},{default:l(()=>[s("clientConfigFile")]),_:1}),s(" hook:")]),D,n("p",null,[s("Inside the client config file, "),u,s(" provides a helper function "),a(e,{to:"/reference/client-api.html#defineclientconfig"},{default:l(()=>[s("defineClientConfig")]),_:1}),s(" to help you define the client config:")]),y,n("ul",null,[C,m,n("li",null,[v,s(" is a ref of an object that generated from user config, including "),a(e,{to:"/reference/config.html#base"},{default:l(()=>[s("base")]),_:1}),s(", "),a(e,{to:"/reference/config.html#lang"},{default:l(()=>[s("lang")]),_:1}),s(", "),a(e,{to:"/reference/config.html#title"},{default:l(()=>[s("title")]),_:1}),s(", "),a(e,{to:"/reference/config.html#description"},{default:l(()=>[s("description")]),_:1}),s(", "),a(e,{to:"/reference/config.html#head"},{default:l(()=>[s("head")]),_:1}),s(" and "),a(e,{to:"/reference/config.html#locales"},{default:l(()=>[s("locales")]),_:1}),s(".")])]),h,n("p",null,[s("We already provides a "),a(e,{to:"/reference/components.html#clientonly"},{default:l(()=>[s("ClientOnly")]),_:1}),s(" component to wrap non-SSR-friendly content.")]),n("p",null,[s("In the "),f,s(" function, you can make use of the "),a(e,{to:"/reference/client-api.html#ssr"},{default:l(()=>[g]),_:1}),s(" flag for that purpose.")]),b,n("p",null,[s("In the "),E,s(" function, the "),a(e,{to:"/reference/client-api.html#ssr"},{default:l(()=>[_]),_:1}),s(" flag is also available.")]),k,n("p",null,[s("The "),F,s(" options is to set layout components. After layout components are registered here, users can use it via "),a(e,{to:"/reference/frontmatter.html#layout"},{default:l(()=>[s("layout")]),_:1}),s(" frontmatter.")]),A])}const U=t(c,[["render",x],["__file","usage-of-client-config.html.vue"]]),w=JSON.parse('{"path":"/advanced/cookbook/usage-of-client-config.html","title":"Usage of Client Config","lang":"zh-CN","frontmatter":{"description":"Usage of Client Config You can make use of the directly in your project, or specify the file path in your plugin or theme via hook: Inside the client config file, vuepress/clien...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/advanced/cookbook/usage-of-client-config.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Usage of Client Config"}],["meta",{"property":"og:description","content":"Usage of Client Config You can make use of the directly in your project, or specify the file path in your plugin or theme via hook: Inside the client config file, vuepress/clien..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T05:20:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-28T05:20:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Usage of Client Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T05:20:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"enhance","slug":"enhance","link":"#enhance","children":[{"level":3,"title":"Register Vue Components","slug":"register-vue-components","link":"#register-vue-components","children":[]},{"level":3,"title":"Use Non-SSR-Friendly Features","slug":"use-non-ssr-friendly-features","link":"#use-non-ssr-friendly-features","children":[]},{"level":3,"title":"Use Router Methods","slug":"use-router-methods","link":"#use-router-methods","children":[]}]},{"level":2,"title":"setup","slug":"setup","link":"#setup","children":[{"level":3,"title":"Use Composition API","slug":"use-composition-api","link":"#use-composition-api","children":[]},{"level":3,"title":"Use Non-SSR-Friendly Features","slug":"use-non-ssr-friendly-features-1","link":"#use-non-ssr-friendly-features-1","children":[]}]},{"level":2,"title":"layouts","slug":"layouts","link":"#layouts","children":[]},{"level":2,"title":"rootComponents","slug":"rootcomponents","link":"#rootcomponents","children":[]}],"git":{"updatedTime":1703740814000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"advanced/cookbook/usage-of-client-config.md"}');export{U as comp,w as data};
