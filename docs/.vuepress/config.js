module.exports = {
  title: 'Liuxieric123',
  description: 'liuxieric123 个人博客',
  themeConfig: {
    displayAllHeaders: false // 默认值：false
  },
  base: '/',
//   markdown: {
//       extendMarkdown: md => {
//           md.use(require('markdown-it-texmath'))
//       }
//   },
    plugins: [
        [
            '/Users/liuxieric123/Documents/vuepress-plugin-mathjax/src/index.js',
            {
                target: 'chtml',
                
            }
        ]
    ]
}