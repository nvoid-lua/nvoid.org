const fs = require("fs");
const path = require("path");
module.exports = {
  base: "/",
  lang: "en-US",
  title: "Nvoid",
  description: "Documentation for Nvoid",
  head: [["link", { rel: "icon", href: "/assets/logo.svg" }]],
  home: "/languages",
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    navbar: [
      {
        text: "Getting Started",
        link: "/",
      },
      {
        text: "Configuration",
        link: "/configuration/",
      },
      {
        text: "Features",    
        link: "/Features/",
      },  
      {
        text: "Acknowledgements",    
        link: "/acknowledgements/",
      },  
      {
        text: "About Me",    
        link: "/about/",
      },  
    ],
    repo: "https://github.com/ysfgrgO7/nvoid",
    docsRepo: "https://github.com/ysfgrgO7/ysfgrgo7.github.io",
    docsBranch: "master",
    docsDir: "docs",
    sidebar: {
      "/": getSideBar("/", "Getting Started", true),
      "/configuration/": getSideBar("configuration", "Configuration"),
      "/Features/": getSideBar("Features", "Features"),
      "/acknowledgements/": getSideBar("acknowledgements", "Acknowledgements"),
      "/about/": getSideBar("about", "About Me"),
    },
  },
};
function getSideBar(folder, title, include_readme) {
  const extension = [".md"];
  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (file) =>
        file.toLocaleLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
        extension.includes(path.extname(file))
    );
  if (include_readme) {
    files.unshift("README.md");
  }
  return [{ text: title, children: files }];
}
