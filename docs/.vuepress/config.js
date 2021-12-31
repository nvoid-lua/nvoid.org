 module.exports = {
     plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
     title: 'Nvoid',
     description: 'Docs for Nvoid',
     themeConfig: {
       nav: [
         { text: 'Home', link: '/' },
         { text: 'Getting Started', link: '/get-started/01-after-install' },
         { text: 'Configuration', link: '/configuration/' },
         { text: 'Features', link: '/features/' },
         { text: "Acknowledgements", link: "/acknowledgements/", },  
         { text: "About Me", link: "/about/", },  
       ],
       repo: "https://github.com/ysfgrgO7/nvoid",
       docsRepo: "https://github.com/ysfgrgO7/ysfgrgO7.github.io.src",
       docsBranch: "master",
       docsDir: "docs",
       sidebar: {
         '/get-started/' : [
           '/get-started/',
           '01-after-install'
          ],
          '/configuration/' : [
            '/configuration/',
            '01-settings',
            '02-colorschemes',
            '03-lsp',
            '04-treesitter',
            '05-nerd-fonts',
        ],
        '/features/' : [
           '/features/',
           '01-mappings',
         ],
        '/acknowledgements/' : [
           '/acknowledgements/',
         ],
        '/about/' : [
           '/about/',
         ],
       } 
    }
 }
