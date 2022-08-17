"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u65b0\u624b\u5f15\u5bfc",sidebar_position:1},i=void 0,l={unversionedId:"getting_started/guide",id:"getting_started/guide",title:"\u65b0\u624b\u5f15\u5bfc",description:"\u6b22\u8fce\u4f7f\u7528 tKeel \u5165\u95e8\u6307\u5357\uff01",source:"@site/docs/getting_started/guide.md",sourceDirName:"getting_started",slug:"/getting_started/guide",permalink:"/getting_started/guide",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/getting_started/guide.md",tags:[],version:"current",lastUpdatedAt:1648098014,formattedLastUpdatedAt:"2022\u5e743\u670824\u65e5",sidebarPosition:1,frontMatter:{title:"\u65b0\u624b\u5f15\u5bfc",sidebar_position:1},sidebar:"startSidebar",next:{title:"\u5b89\u88c5 tKeel CLI",permalink:"/cli"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b22\u8fce\u4f7f\u7528 tKeel \u5165\u95e8\u6307\u5357\uff01"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h3",{parentName:"admonition",id:"tkeel-\u6982\u5ff5"},"tKeel \u6982\u5ff5"),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6b63\u5728\u5bfb\u627e tKeel \u7684\u4ecb\u7ecd\u6027\u6982\u8ff0\u5e76\u4e86\u89e3\u6709\u5173 tKeel \u57fa\u672c\u672f\u8bed\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5efa\u8bae\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"/internal_concepts/platform"},"\u6982\u5ff5\u90e8\u5206"),"\u3002")),(0,a.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u5b8c\u6210\u5b89\u88c5\u3001\u521d\u59cb\u5316\u548c\u5f00\u59cb\u4f7f\u7528 tKeel \u7684\u4e00\u7cfb\u5217\u6b65\u9aa4\u3002 \u60a8\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u7684\u6d41\u7a0b\uff0c\u5176\u4e2d\u5305\u62ec tKeel CLI\u3001Keel\u3001Rudder \u4ee5\u53ca\u5b98\u65b9\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u4e2d\u7684\u4ee5\u4e0b\u6b65\u9aa4\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/cli"},"\u5b89\u88c5 tKeel CLI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/init"},"\u521d\u59cb tKeel \u5e73\u53f0")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/getting_started/how-to-install-plugin"},"\ud83d\ude80 \u5982\u4f55\u5b89\u88c5\u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/use"},"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907"))))}u.isMDXComponent=!0}}]);