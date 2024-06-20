/// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const codeTheme = require("./src/theme/code-theme");
const github = require("./github");
const showcase = require("./showcase");

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
        {
          label: "Docs",
          type: "doc",
          docId: "install/README",
          position: "left",
        },
        {
          label: "Acknowledgements",
          to: "/ak",
          position: "left",
        },
        ...showcase,
        ...github,
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} nvoid-lua™,Built with Docusaurus.`,
      links: [
        {
          items: [
            {
              label: "Install",
              to: "docs/install",
            },
            {
              label: "Configuration",
              to: "docs/configuration",
            },
            {
              label: "Acknowledgements",
              to: "/ak",
            },
          ],
        },
        {
          items: [
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
            },
          ],
        },
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
        src: "/img/preview/alpha.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/cool-splits.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/splits.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/cmp.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/nvimtree.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/telescope.png",
        alt: "Nvoid Preview",
      },
      {
        src: "/img/preview/term-nvimtree.png",
        alt: "Nvoid Preview",
      },
    ],
  },
};

module.exports = config;
