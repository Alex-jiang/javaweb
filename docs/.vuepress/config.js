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

                { text: 'Github', link: 'https://github.com/Alex-jiang/' },

                { text: '掘金', link: 'https://github.com/Alex-jiang/' }

            ]
        }
    ],
    sidebar: [
        {
         title: '欢迎学习',
         path: '/',
         collapsable: false,
         children: [
            {title: "学前必读",
            path: '/'
            }
         ]
        }
    ],
}
}

