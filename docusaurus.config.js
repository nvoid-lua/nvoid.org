/// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const codeTheme = require("./src/theme/code-theme");
const github = require("./github");
const links = require("./links");

const config = {
  title: "Nvoid",
  tagline: "Enhanced version of the Vim text editor in lua",
  favicon: "img/nvoid_logo.svg",
  url: "https://nvoid.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName: "nvoid-lua",
  projectName: "nvoid",
  deploymentBranch: "deployment",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    announcementBar: {
      content: ` ⭐️If you like Nvoid, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/nvoid-lua/nvoid">GitHub</a> ⭐️`,
    },
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Nvoid",
      logo: {
        alt: "Nvoid Logo",
        src: "img/nvoid_logo.svg",
      },
      items: [
        {
          type: "search",
          position: "right",
        },
        ...links,
        ...github,
      ],
    },
    prism: {
      theme: codeTheme,
      darkTheme: codeTheme,
      additionalLanguages: [
        "lua",
        "markup",
        "javascript",
        "css",
        "bash",
        "powershell",
        "python",
      ],
    },
  },
  plugins: [
    [
      "./plugins/asciinema",
      {
        casts_folder: "static/casts",
        font_name: "glyphs.ttf",
        source_font: "src/theme/fura_code_nerd.ttf",
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        explicitSearchResultPath: true,
      },
    ],
  ],

  customFields: {
    previewImgs: [
      {
        src: "/img/preview/cool-splits.webp",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/alpha.webp",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/nvimtree.webp",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/cmp.webp",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/splits.webp",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/telescope.webp",
        alt: "Nvoid Preview",
      },
    ],
  },
};

module.exports = config;
