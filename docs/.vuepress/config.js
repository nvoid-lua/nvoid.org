 module.exports = {
     plugins: [
      '@vuepress/back-to-top', 
      '@vuepress/medium-zoom',
      'vuepress-plugin-code-copy',
    ],
     title: 'Nvoid',
     theme: "vt",
     description: 'Docs for Nvoid',
     head: [["link", { rel: "icon", href: "/assets/nvoid_logo.png" }]],
     themeConfig: {
       logo: "/assets/nvoid_logo.png",
       nav: [
         { text: 'Getting Started', link: '/get-started/' },
         { text: 'Configuration', link: '/configuration/' },
         { text: 'Features', link: '/features/' },
         { text: "Acknowledgements", link: "/acknowledgements/", },  
         { text: "About Me", link: "/about/", },  
       ],
       repo: "https://github.com/nvoid-lua/nvoid",
       docsRepo: "https://github.com/nvoid-lua/ysfgrgO7.github.io.src",
       docsBranch: "master",
       enableDarkMode: true,
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
            '05-plugins',
            '06-mappings',
            '07-nerd-fonts'
          ],
          '/features/' : [
            '/features/',
            '01-ui',
            '02-mappings',
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
