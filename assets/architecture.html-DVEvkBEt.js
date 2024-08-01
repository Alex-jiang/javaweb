import{_ as r,a as i}from"./vuepress-core-process-C4qfrYlz.js";import{_ as a,r as s,o as p,c as u,a as t,b as e,d as o,w as n,e as c}from"./app-D5-RCq7A.js";const d={},h=c('<h1 id="架构" tabindex="-1"><a class="header-anchor" href="#架构"><span>架构</span></a></h1><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览"><span>概览</span></a></h2><p><img src="'+r+'" alt="vuepress-architecture-overview"></p><p>上图展示了 VuePress 的简要架构：</p><ul><li>Node App 会生成临时文件，包括页面、路由等。</li><li>Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue App 一样。</li></ul><p>作为开发者，你必须要意识到 VuePress 分为两个主要部分： <strong>Node App</strong> 和 <strong>Client App</strong> ，这一点对于开发插件和主题来说都十分重要。</p><ul><li>插件或者主题的入口文件会在 Node App 中被加载。</li><li>客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如组件、客户端配置文件等。</li></ul><h2 id="核心流程与-hooks" tabindex="-1"><a class="header-anchor" href="#核心流程与-hooks"><span>核心流程与 Hooks</span></a></h2><p><img src="'+i+'" alt="vuepress-core-process"></p>',9),m=t("strong",null,"init",-1),g=t("li",null,"主题和插件会被加载。这意味着插件需要在初始化之前使用。",-1),_=t("li",null,[e("在 "),t("strong",null,"prepare"),e(" 阶段： "),t("ul",null,[t("li",null,"临时文件会被生成，因此所有和客户端文件相关的 Hooks 会在此处调用。")])],-1),f=t("strong",null,"dev / build",-1);function k(v,x){const l=s("RouteLink");return p(),u("div",null,[h,t("p",null,[e("上图展示了 VuePress 的核心流程以及 "),o(l,{to:"/zh/reference/plugin-api.html"},{default:n(()=>[e("插件 API")]),_:1}),e(" 的 Hooks ：")]),t("ul",null,[t("li",null,[e("在 "),m,e(" 阶段： "),t("ul",null,[g,t("li",null,[e("由于我们要使用 markdown-it 来解析 Markdown 文件，因此需要在加载页面文件之前创建 markdown-it 实例： "),t("ul",null,[t("li",null,[o(l,{to:"/zh/reference/plugin-api.html#extendsmarkdownoptions"},{default:n(()=>[e("extendsMarkdownOptions")]),_:1}),e(" Hook 会被调用，用以创建 markdown-it 实例。")]),t("li",null,[o(l,{to:"/zh/reference/plugin-api.html#extendsmarkdown"},{default:n(()=>[e("extendsMarkdown")]),_:1}),e(" Hook 会被调用，用以扩展 markdown-it 实例。")])])]),t("li",null,[e("页面文件会被加载： "),t("ul",null,[t("li",null,[o(l,{to:"/zh/reference/plugin-api.html#extendspageoptions"},{default:n(()=>[e("extendsPageOptions")]),_:1}),e(" Hook 会被调用，用以创建页面。")]),t("li",null,[o(l,{to:"/zh/reference/plugin-api.html#extendspage"},{default:n(()=>[e("extendsPage")]),_:1}),e(" Hook 会被调用，用以扩展页面对象。")])])])])]),_,t("li",null,[e("在 "),f,e(" 阶段： "),t("ul",null,[t("li",null,[e("Bundler 会被加载： "),t("ul",null,[t("li",null,[o(l,{to:"/zh/reference/plugin-api.html#extendsbundleroptions"},{default:n(()=>[e("extendsBundlerOptions")]),_:1}),e(" Hook 会被调用，用以生成 Bundler 的配置。")]),t("li",null,[o(l,{to:"/zh/reference/plugin-api.html#alias"},{default:n(()=>[e("alias")]),_:1}),e(" Hook 和 "),o(l,{to:"/zh/reference/plugin-api.html#define"},{default:n(()=>[e("define")]),_:1}),e(" Hook 会被用在 Bundler 的配置中，所以它们会在此处调用。")])])])])])])])}const V=a(d,[["render",k],["__file","architecture.html.vue"]]),y=JSON.parse('{"path":"/zh/advanced/architecture.html","title":"架构","lang":"zh-CN","frontmatter":{"description":"架构 概览 vuepress-architecture-overview 上图展示了 VuePress 的简要架构： Node App 会生成临时文件，包括页面、路由等。 Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue App 一样。 作为开发者，你必须要意识到 VuePress 分为两个主要部分： No...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/zh/advanced/architecture.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"架构"}],["meta",{"property":"og:description","content":"架构 概览 vuepress-architecture-overview 上图展示了 VuePress 的简要架构： Node App 会生成临时文件，包括页面、路由等。 Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue App 一样。 作为开发者，你必须要意识到 VuePress 分为两个主要部分： No..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alex-jiang.github.io/images/guide/vuepress-architecture-overview.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T05:23:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-05T05:23:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构\\",\\"image\\":[\\"https://alex-jiang.github.io/images/guide/vuepress-architecture-overview.png\\",\\"https://alex-jiang.github.io/images/guide/vuepress-core-process.png\\"],\\"dateModified\\":\\"2024-02-05T05:23:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":2,"title":"核心流程与 Hooks","slug":"核心流程与-hooks","link":"#核心流程与-hooks","children":[]}],"git":{"updatedTime":1707110593000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/advanced/architecture.md"}');export{V as comp,y as data};
