"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[478],{8357:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var a=t(738),i=t(6540),c=t(9739),l=t(4848);const n={dark:["aquarium","ashes","catppuccin","decay","doom","dracula","github_dark","gruvbox","gruvdark","nightfox","nord","onedark","pastelDark","radium","solarized_dark","tokyodark","tokyonight","vscode_dark"],light:["github_light","gruvbox_light","one_light"]},r=["Nvoid","Minimal","Evil"],h=e=>{let{title:s,children:t,className:a}=e;return(0,l.jsxs)("section",{className:`content-section ${a}`,children:[(0,l.jsx)("h2",{className:"section-title",children:s}),t]})},m=e=>{let{title:s,items:t,path:a,lowercase:i}=e;return(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)("h3",{className:"subsection-title",children:s}),(0,l.jsx)("div",{className:"item-grid",children:t.map((e=>(0,l.jsxs)("div",{className:"item-card",children:[(0,l.jsx)("h4",{className:"item-title",children:e}),(0,l.jsx)("img",{src:`/img/${a}/${i?e.toLowerCase():e}.webp`,alt:e,className:"item-image"})]},e)))})]})},d=()=>{const[e,s]=(0,i.useState)("Themes"),t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{t.current&&t.current.detach(),t.current=(0,c.A)(".item-image")}),[e]),(0,l.jsx)(a.A,{title:"Showcase",description:"Showcasing some screenshots",children:(0,l.jsxs)("div",{className:"showcase-container",children:[(0,l.jsxs)("div",{className:"scTabs",children:[(0,l.jsx)("button",{className:"tab-button "+("Themes"===e?"active":""),onClick:()=>s("Themes"),children:"Themes"}),(0,l.jsx)("button",{className:"tab-button "+("Statuslines"===e?"active":""),onClick:()=>s("Statuslines"),children:"Statuslines"})]}),(0,l.jsxs)("main",{className:"showcase-main",children:["Themes"===e&&(0,l.jsxs)(h,{className:"themes-section",children:[(0,l.jsx)(m,{title:"Dark",items:n.dark,path:"themes/dark"}),(0,l.jsx)(m,{title:"Light",items:n.light,path:"themes/light"})]}),"Statuslines"===e&&(0,l.jsx)(h,{className:"statuslines-section",children:(0,l.jsx)(m,{items:r,path:"statuslines",lowercase:!0})})]})]})})}}}]);