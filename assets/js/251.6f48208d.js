(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[251],{7293:(e,t,n)=>{"use strict";n.d(t,{A:()=>_});var s=n(6540),o=n(4848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:a.length>0?(0,o.jsx)(o.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var i=n(4164),l=n(1312),c=n(7559);const r={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,i.A)(c.G.common.admonition,c.G.common.admonitionType(t),r.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:r.admonitionHeading,children:[(0,o.jsx)("span",{className:r.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:r.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:a,className:i}=e;return(0,o.jsxs)(d,{type:t,className:i,children:[s||n?(0,o.jsx)(u,{title:s,icon:n}):null,(0,o.jsx)(m,{children:a})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,o.jsx)(h,{...f,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(h,{...v,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,o.jsx)(h,{...N,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function y(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const L={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const B={...{note:x,tip:b,info:C,warning:function(e){return(0,o.jsx)(h,{...k,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...L,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(x,{title:"secondary",...e}),important:e=>(0,o.jsx)(C,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=a(e),n=(s=t.type,B[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),B.info));var s;return(0,o.jsx)(n,{...t})}},1732:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Le});var s=n(6540),o=n(1003),a=n(9532),i=n(4848);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:o,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(o.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(1312),p=n(8774);function f(e){const{permalink:t,title:n,subLabel:s,isNext:o}=e;return(0,i.jsxs)(p.A,{className:(0,u.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=r();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var v=n(4586),b=n(4070),j=n(7559),N=n(5597),C=n(2252);const A={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=A[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:n,onClick:s,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,v.A)(),{pluginId:o}=(0,b.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,N.g1)(o),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,b.HW)(o),r=l??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(k,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(y,{versionLabel:c.label,to:r.path,onClick:()=>a(c.name)})})]})}function w(e){let{className:t}=e;const n=(0,C.r)();return n.banner?(0,i.jsx)(L,{className:t,versionMetadata:n}):null}function B(e){let{className:t}=e;const n=(0,C.r)();return n.badge?(0,i.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const _={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:n,count:s,description:o}=e;return(0,i.jsxs)(p.A,{href:t,title:o,className:(0,u.A)(_.tag,s?_.tagWithCount:_.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const E={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(E.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:E.tag,children:(0,i.jsx)(T,{...e})},e.permalink)))})]})}const M={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function S(e){let{editUrl:t}=e;return(0,i.jsxs)(p.A,{to:t,className:j.G.common.editThisPage,children:[(0,i.jsx)(I,{}),(0,i.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function U(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,v.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,v.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function V(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=U({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function z(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function R(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,i.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(V,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(z,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const O={lastUpdated:"lastUpdated_JAkA"};function G(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:o}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(S,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",O.lastUpdated),children:(s||o)&&(0,i.jsx)(R,{lastUpdatedAt:s,lastUpdatedBy:o})})]})}function D(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:o}=e,a=o.length>0,l=!!(t||n||s);return a||l?(0,i.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(H,{tags:o})})}),l&&(0,i.jsx)(G,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var P=n(1422),W=n(6342);function $(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):s.push(o)})),s}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function Z(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function J(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,W.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,s.useRef)(void 0),n=J();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let o=t;o<=n;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=Z(l,{anchorTopOffset:n.current}),r=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function K(e){let{toc:t,className:n,linkClassName:s,isChild:o}=e;return t.length?(0,i.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(p.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(K,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Q=s.memo(K);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:c,...r}=e;const d=(0,W.p)(),u=l??d.tableOfContents.minHeadingLevel,m=c??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>F({toc:$(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Y((0,s.useMemo)((()=>{if(o&&a)return{linkClassName:o,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[o,a,u,m])),(0,i.jsx)(Q,{toc:h,className:n,linkClassName:o,...r})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:o}=e;const{collapsed:a,toggleCollapsed:l}=(0,P.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!a&&ne.tocCollapsibleExpanded,n),children:[(0,i.jsx)(te,{collapsed:a,onClick:l}),(0,i.jsx)(P.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:a,children:(0,i.jsx)(X,{toc:t,minHeadingLevel:s,maxHeadingLevel:o})})]})}const oe={tocMobile:"tocMobile_ITEo"};function ae(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,oe.tocMobile)})}const ie={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},le="table-of-contents__link toc-highlight",ce="table-of-contents__link--active";function re(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(ie.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(X,{...n,linkClassName:le,linkActiveClassName:ce})})}function de(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(re,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var ue=n(1107),me=n(8453),he=n(8506);function pe(e){let{children:t}=e;return(0,i.jsx)(me.x,{components:he.A,children:t})}function fe(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ue.A,{as:"h1",children:n})}),(0,i.jsx)(pe,{children:t})]})}var xe=n(2239),ge=n(5260);function ve(){return(0,i.jsx)(h.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function be(){return(0,i.jsx)(h.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function je(){return(0,i.jsx)(ge.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var Ne=n(7293);function Ce(e){let{className:t}=e;return(0,i.jsx)(Ne.A,{type:"caution",title:(0,i.jsx)(ve,{}),className:(0,u.A)(t,j.G.common.unlistedBanner),children:(0,i.jsx)(be,{})})}function Ae(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(je,{}),(0,i.jsx)(Ce,{...e})]})}const ke={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ye(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.l)(),s=e.hide_table_of_contents,o=!s&&t.length>0;return{hidden:s,mobile:o?(0,i.jsx)(ae,{}):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(de,{})}}(),{metadata:{unlisted:s}}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ke.docItemCol),children:[s&&(0,i.jsx)(Ae,{}),(0,i.jsx)(w,{}),(0,i.jsxs)("div",{className:ke.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(xe.A,{}),(0,i.jsx)(B,{}),n.mobile,(0,i.jsx)(fe,{children:t}),(0,i.jsx)(D,{})]}),(0,i.jsx)(g,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Le(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(o.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(ye,{children:(0,i.jsx)(n,{})})]})})}},1999:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(6540);var s=n(4848);function o(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}},2774:(e,t,n)=>{"use strict";n.d(t,{A:()=>ae});var s=n(6540),o=n(5260),a=n(2303),i=n(4164),l=n(5293),c=n(6342);function r(){const{prism:e}=(0,c.p)(),{colorMode:t}=(0,l.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(7559),u=n(8426),m=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(f);function v(e,t){const n=e.map((e=>{const{start:n,end:s}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:a}=t;if(a&&p.test(a)){const e=a.match(p).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":case"sql":return v(["lua"],t);case"wasm":return v(["wasm"],t);case"vb":case"vba":case"visual-basic":return v(["vb","rem"],t);case"vbnet":return v(["vbnet","rem"],t);case"batch":return v(["rem"],t);case"basic":return v(["rem","f90"],t);case"fsharp":return v(["js","ml"],t);case"ocaml":case"sml":return v(["ml"],t);case"fortran":return v(["f90"],t);case"cobol":return v(["cobol"],t);default:return v(g,t)}}(s,o),l=n.split("\n"),c=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<l.length;){const e=l[m].match(i);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?c[r[t]].range+=`${m},`:d[t]?c[d[t]].start=m:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${m-1},`),l.splice(m,1)}n=l.join("\n");const h={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var N=n(4848);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const a=t[s];a&&"string"==typeof o&&(n[a]=o)})),n}(r());return(0,N.jsx)(t,{...n,style:s,className:(0,i.A)(n.className,j.codeBlockContainer,d.G.common.codeBlock)})}const A={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,N.jsx)(C,{as:"pre",tabIndex:0,className:(0,i.A)(A.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:A.codeBlockLines,children:t})})}var y=n(9532);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=L);const o=(0,y._q)(t),a=(0,y.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B=n(1765);const _={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=o({line:t,className:(0,i.A)(n,s&&_.codeLine)}),c=t.map(((e,t)=>(0,N.jsx)("span",{...a({token:e})},t)));return(0,N.jsxs)("span",{...l,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:_.codeLineNumber}),(0,N.jsx)("span",{className:_.codeLineContent,children:c})]}):c,(0,N.jsx)("br",{})]})}var E=n(1312);function H(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function M(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function S(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const a=document.getSelection(),i=a.rangeCount>0&&a.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}s.remove(),i&&(a.removeAllRanges(),a.addRange(i)),o&&o.focus()}(t),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":o?(0,E.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,I.copyButton,o&&I.copyButtonCopied),onClick:c,children:(0,N.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(H,{className:I.copyButtonIcon}),(0,N.jsx)(M,{className:I.copyButtonSuccessIcon})]})})}function U(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const V={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function z(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,E.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,s&&V.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,N.jsx)(U,{className:V.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:l,language:d}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,c.p)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=r(),x=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return w(a,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:i}}(),g=function(e){return e?.match(h)?.groups.title??""}(o)||a,{lineClassNames:v,code:j}=b(t,{metastring:o,language:p,magicComments:m}),k=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,N.jsxs)(C,{as:"div",className:(0,i.A)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[g&&(0,N.jsx)("div",{className:A.codeBlockTitle,children:g}),(0,N.jsxs)("div",{className:A.codeBlockContent,children:[(0,N.jsx)(B.f4,{theme:f,code:j,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,i.A)(t,A.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,i.A)(A.codeBlockLines,k&&A.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(T,{line:e,getLineProps:o,getTokenProps:a,classNames:v[t],showLineNumbers:k},t)))})})}}),(0,N.jsxs)("div",{className:A.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,N.jsx)(z,{className:A.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,N.jsx)(S,{className:A.codeButton,code:j})]})]})]})}function O(e){let{children:t,...n}=e;const o=(0,a.A)(),i=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof i?R:k;return(0,N.jsx)(l,{...n,children:i},String(o))}function G(e){return(0,N.jsx)("code",{...e})}var D=n(8774);var P=n(3427),W=n(1422);const $={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function Z(e){let{summary:t,children:n,...o}=e;(0,P.A)().collectAnchor(o.id);const l=(0,a.A)(),c=(0,s.useRef)(null),{collapsed:r,setCollapsed:d}=(0,W.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...o,ref:c,open:u,"data-collapsed":r,className:(0,i.A)($.details,l&&$.isBrowser,o.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&q(t,c.current)&&(e.preventDefault(),r?(d(!1),m(!0)):d(!0))},children:[h,(0,N.jsx)(W.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,N.jsx)("div",{className:$.collapsibleContent,children:n})})]})}const J={details:"details_b_Ee"},Y="alert alert--info";function K(e){let{...t}=e;return(0,N.jsx)(Z,{...t,className:(0,i.A)(Y,J.details,t.className)})}function Q(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(K,{...e,summary:n,children:o})}var X=n(1107);function ee(e){return(0,N.jsx)(X.A,{...e})}const te={containsTaskList:"containsTaskList_mC6p"};function ne(e){if(void 0!==e)return(0,i.A)(e,e?.includes("contains-task-list")&&te.containsTaskList)}const se={img:"img_ev3q"};var oe=n(7293);const ae={Head:o.A,details:Q,Details:Q,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(G,{...e}):(0,N.jsx)(O,{...e})},a:function(e){return(0,N.jsx)(D.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:ne(e.className)})},li:function(e){return(0,P.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,se.img))});var t},h1:e=>(0,N.jsx)(ee,{as:"h1",...e}),h2:e=>(0,N.jsx)(ee,{as:"h2",...e}),h3:e=>(0,N.jsx)(ee,{as:"h3",...e}),h4:e=>(0,N.jsx)(ee,{as:"h4",...e}),h5:e=>(0,N.jsx)(ee,{as:"h5",...e}),h6:e=>(0,N.jsx)(ee,{as:"h6",...e}),admonition:oe.A,mermaid:()=>null}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=t;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);