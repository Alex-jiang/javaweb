module.exports = {
title: 'NAI Teck JAVAWEB技术文档',

description: 'NAI Teck JAVAWEB技术文档',

theme: 'reco',
themeConfig: {
    nav: [

        { text: '首页', link: '/' },

        {
            text: 'JAVAWEB',

            items: [

                { text: 'Github', link: 'https://github.com/mqyqingfeng' },

                { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }

            ]
        }
    ],
    sidebar: [
        {
         title: '歡迎學習',
         path: '/',
         collapsable: false,
         children: [
            {title: "學前必讀",
            path: '/'
            }
         ]
        }
    ],
}
}

