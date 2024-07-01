/// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const codeTheme = require("./src/theme/code-theme");
const github = require("./github");
const links = require("./links");

const config = {
  title: "Nvoid",
  tagline: "Enhanced version of the Vim text editor in lua",
  favicon: "img/nvoid_logo.png",
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
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {},
    },
    colorMode: {
      defaultMode: "dark",
    },
    announcementBar: {
      content: `⭐️ If you like Nvoid, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/nvoid-lua/nvoid">GitHub</a>⭐️`,
    },
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Nvoid",
      logo: {
        alt: "Nvoid Logo",
        src: "img/nvoid_logo.png",
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
    "docusaurus-plugin-image-zoom",
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
    heroImage: {
      src: "/img/nvoid_logo.png",
      alt: "Nvoid Logo",
    },
    previewImgs: [
      {
        src: "/img/preview/cool-splits.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/alpha.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/nvimtree.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/cmp.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/term-nvimtree.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/splits.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/telescope.png",
        alt: "Nvoid Preview",
      },
    ],
  },
};

module.exports = config;
