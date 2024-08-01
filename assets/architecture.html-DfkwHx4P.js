import{_ as r,a as n}from"./vuepress-core-process-BrJi_IME.js";import{_ as a,r as s,o as c,c as p,a as t,b as e,d as o,w as i,e as u}from"./app-CPK6wcVl.js";const d={},h=u('<h1 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p><img src="'+r+'" alt="vuepress-architecture-overview"></p><p>The above figure shows a brief overview of the VuePress architecture:</p><ul><li>Node App will generate temp files, including the pages, routes, etc.</li><li>Bundler will handle Client App together with the temp files, just like a common Vue app.</li></ul><p>As a developer, you must be aware of that VuePress has two main parts: <strong>Node App</strong> and <strong>Client App</strong>, which is important when developing plugins and themes:</p><ul><li>The entry file of a plugin or a theme will be loaded in Node App.</li><li>Client files will be loaded in Client App, which will be handled by bundler. For example, components, client config files, etc.</li></ul><h2 id="core-process-and-hooks" tabindex="-1"><a class="header-anchor" href="#core-process-and-hooks"><span>Core Process and Hooks</span></a></h2><p><img src="'+n+'" alt="vuepress-core-process"></p>',9),g=t("strong",null,"init",-1),m=t("li",null,"Theme and plugins will be loaded. That means all the plugins should be used before initialization.",-1),w=t("li",null,[e("In the "),t("strong",null,"prepare"),e(" stage: "),t("ul",null,[t("li",null,"Temp files will be generated, so all hooks related to client files will be processed here.")])],-1),f=t("strong",null,"dev / build",-1);function v(b,_){const l=s("RouteLink");return c(),p("div",null,[h,t("p",null,[e("The above figure shows the core process of VuePress Node App and the hooks of "),o(l,{to:"/reference/plugin-api.html"},{default:i(()=>[e("Plugin API")]),_:1}),e(":")]),t("ul",null,[t("li",null,[e("In the "),g,e(" stage: "),t("ul",null,[m,t("li",null,[e("As we are using markdown-it to parse the markdown file, so we need to create markdown-it instance before loading pages: "),t("ul",null,[t("li",null,[o(l,{to:"/reference/plugin-api.html#extendsmarkdownoptions"},{default:i(()=>[e("extendsMarkdownOptions")]),_:1}),e(" hook will be processed to create markdown-it instance.")]),t("li",null,[o(l,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:i(()=>[e("extendsMarkdown")]),_:1}),e(" hook will be processed extends markdown-it instance.")])])]),t("li",null,[e("Page files will be loaded: "),t("ul",null,[t("li",null,[o(l,{to:"/reference/plugin-api.html#extendspageoptions"},{default:i(()=>[e("extendsPageOptions")]),_:1}),e(" hook will be processed to create pages.")]),t("li",null,[o(l,{to:"/reference/plugin-api.html#extendspage"},{default:i(()=>[e("extendsPage")]),_:1}),e(" hook will be processed to extends page object.")])])])])]),w,t("li",null,[e("In the "),f,e(" stage: "),t("ul",null,[t("li",null,[e("Bundler will be resolved: "),t("ul",null,[t("li",null,[o(l,{to:"/reference/plugin-api.html#extendsbundleroptions"},{default:i(()=>[e("extendsBundlerOptions")]),_:1}),e(" hook will be processed to create bundler configuration.")]),t("li",null,[o(l,{to:"/reference/plugin-api.html#alias"},{default:i(()=>[e("alias")]),_:1}),e(" hook and "),o(l,{to:"/reference/plugin-api.html#define"},{default:i(()=>[e("define")]),_:1}),e(" hook would be used in bundler configuration, so they will be processed here.")])])])])])])])}const A=a(d,[["render",v],["__file","architecture.html.vue"]]),y=JSON.parse('{"path":"/advanced/architecture.html","title":"Architecture","lang":"zh-CN","frontmatter":{"description":"Architecture Overview vuepress-architecture-overview The above figure shows a brief overview of the VuePress architecture: Node App will generate temp files, including the pages...","head":[["meta",{"property":"og:url","content":"https://github.com/javaweb/advanced/architecture.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Architecture"}],["meta",{"property":"og:description","content":"Architecture Overview vuepress-architecture-overview The above figure shows a brief overview of the VuePress architecture: Node App will generate temp files, including the pages..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/javaweb/images/guide/vuepress-architecture-overview.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Architecture\\",\\"image\\":[\\"https://github.com/javaweb/images/guide/vuepress-architecture-overview.png\\",\\"https://github.com/javaweb/images/guide/vuepress-core-process.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Core Process and Hooks","slug":"core-process-and-hooks","link":"#core-process-and-hooks","children":[]}],"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"advanced/architecture.md"}');export{A as comp,y as data};