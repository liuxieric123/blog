module.exports = {
    // extend: '@vuepress/theme-default',
    plugins: [
            ['vuepress-plugin-mathjax',
            {
                target: 'chtml',
                macros: {
                  '*': '\\times',
                },
              }
            ]
    ]
}