"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[554],{2035:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(4848),r=s(8453);const i={sidebar_position:5},a="Lsp",l={id:"configuration/lsp",title:"Lsp",description:"Lsp Settings",source:"@site/docs/configuration/lsp.md",sourceDirName:"configuration",slug:"/configuration/lsp",permalink:"/docs/configuration/lsp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Appearance",permalink:"/docs/configuration/appearance"},next:{title:"Commands",permalink:"/docs/configuration/autocommands"}},o={},d=[{value:"Lsp Settings",id:"lsp-settings",level:2},{value:"Adding language sever protocol",id:"adding-language-sever-protocol",level:2},{value:"Setting up servers",id:"setting-up-servers",level:3},{value:"Linters and Formatters",id:"linters-and-formatters",level:2},{value:"Installing linters and formatters",id:"installing-linters-and-formatters",level:3},{value:"Setting formatters and linters",id:"setting-formatters-and-linters",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lsp",children:"Lsp"}),"\n",(0,t.jsx)(n.h2,{id:"lsp-settings",children:"Lsp Settings"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"vim.diagnostic.config({ settings })\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"nvoid.lsp.....\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-language-sever-protocol",children:"Adding language sever protocol"}),"\n",(0,t.jsx)(n.p,{children:"you can add a new language by"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vim",children:":Mason\n"})}),"\n",(0,t.jsxs)(n.p,{children:["then press ",(0,t.jsx)(n.code,{children:"i"})," on the language you want to install"]}),"\n",(0,t.jsxs)(n.p,{children:["or add this in the ",(0,t.jsx)(n.code,{children:"config.lua"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'nvoid.lsp.installer.setup.ensure_installed = { "server name" }\n'})}),"\n",(0,t.jsx)(n.p,{children:"by default nvoid ships with lua_ls"}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-servers",children:"Setting up servers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'vim.list_extend(nvoid.lsp.automatic_configuration.skipped_servers, { "server name"} )\nrequire("server name").setup {settings}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"linters-and-formatters",children:"Linters and Formatters"}),"\n",(0,t.jsx)(n.p,{children:"The easiest way is to reference the linter/formatter/code_actions by their names. See the null-ls docs for a full list of builtins with their names."}),"\n",(0,t.jsx)(n.h3,{id:"installing-linters-and-formatters",children:"Installing linters and formatters"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:":Mason"})," command you install most formatters and linters"]}),"\n",(0,t.jsx)(n.h3,{id:"setting-formatters-and-linters",children:"Setting formatters and linters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local formatters = require "nvoid.lsp.null-ls.formatters"\nformatters.setup {\n   { \n     name = "formatter name" \n     args = "formatter args" \n     filetypes = "filetype" \n   }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);