const fs = require("fs");
const path = require("path");
module.exports = {
  base: "/",
  lang: "en-US",
  title: "Nvoid",
  description: "Documentation for Nvoid",
  head: [["link", { rel: "icon", href: "/assets/logo.svg" }]],
  home: "/languages",
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
        text: "Acknowledgements",    
        link: "/acknowledgements/",
      },  
    ],
    repo: "https://github.com/ysfgrgO7/nvoid",
    docsBranch: "master",
    docsDir: "docs",
    sidebar: {
      "/": getSideBar("/", "Getting Started", true),
      "/configuration/": getSideBar("configuration", "Configuration"),
      "/acknowledgements/": getSideBar("acknowledgements", "Acknowledgements"),
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
