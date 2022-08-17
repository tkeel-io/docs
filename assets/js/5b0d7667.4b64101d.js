"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u6570\u636e\u6301\u4e45\u5316",sidebar_position:12},a=void 0,c={unversionedId:"introduction/core/specs/persistent-strategy",id:"introduction/core/specs/persistent-strategy",title:"\u6570\u636e\u6301\u4e45\u5316",description:"\u6570\u636e\u6301\u4e45\u5316\u662f\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\u7684\u5b58\u50a8\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\u5206\u4e3a\uff1a\u72b6\u6001\u5b58\u50a8\uff0c\u5c5e\u6027\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8\u3002",source:"@site/docs/introduction/core/specs/persistent-strategy.md",sourceDirName:"introduction/core/specs",slug:"/introduction/core/specs/persistent-strategy",permalink:"/introduction/core/specs/persistent-strategy",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/introduction/core/specs/persistent-strategy.md",tags:[],version:"current",lastUpdatedAt:1660715774,formattedLastUpdatedAt:"2022\u5e748\u670817\u65e5",sidebarPosition:12,frontMatter:{title:"\u6570\u636e\u6301\u4e45\u5316",sidebar_position:12},sidebar:"introSidebar",previous:{title:"Channel",permalink:"/introduction/core/specs/channel"},next:{title:"Interfaces",permalink:"/introduction/core/specs/interfaces"}},s={},l=[{value:"\u72b6\u6001\u5b58\u50a8",id:"\u72b6\u6001\u5b58\u50a8",level:2},{value:"\u5c5e\u6027\u5b58\u50a8",id:"\u5c5e\u6027\u5b58\u50a8",level:2},{value:"\u65f6\u5e8f\u5b58\u50a8",id:"\u65f6\u5e8f\u5b58\u50a8",level:2},{value:"WAL",id:"wal",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6570\u636e\u6301\u4e45\u5316\u662f\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\u7684\u5b58\u50a8\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\u5206\u4e3a\uff1a\u72b6\u6001\u5b58\u50a8\uff0c\u5c5e\u6027\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"entity-data-persisten",src:r(20239).Z,width:"526",height:"666"})),(0,o.kt)("h2",{id:"\u72b6\u6001\u5b58\u50a8"},"\u72b6\u6001\u5b58\u50a8"),(0,o.kt)("p",null,"\u72b6\u6001\u5b58\u50a8\u5b58\u50a8\u7684\u662f\u5b9e\u4f53\u7684\u6700\u65b0\u5c5e\u6027\u6570\u636e\uff0c\u662f\u5b9e\u4f53\u7684\u4e00\u4e2a\u5feb\u7167\u3002"),(0,o.kt)("h2",{id:"\u5c5e\u6027\u5b58\u50a8"},"\u5c5e\u6027\u5b58\u50a8"),(0,o.kt)("p",null,"\u5c5e\u6027\u6570\u636e \u5373\u5b9e\u4f53\u7684\u5c5e\u6027\u7684\u6570\u636e\uff0c\u6211\u4eec\u5c06 \u5b9e\u4f53 \u7684\u5c5e\u6027\u53ef\u9009\u7684\u5b58\u50a8\u5230\u641c\u7d22\u5f15\u64ce\u4e2d\uff0c\u5e76\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"elasticsearch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"zinc")," \u7b49\u591a\u79cd\u9009\u62e9\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u914d\u7f6e\u7075\u6d3b\uff0c\u64cd\u4f5c\u7b80\u5355\uff0c\u529f\u80fd\u5f3a\u5927\u7684\u5b9e\u4f53\u7d22\u5f15\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u65f6\u5e8f\u5b58\u50a8"},"\u65f6\u5e8f\u5b58\u50a8"),(0,o.kt)("p",null,"\u65f6\u5e8f\u6570\u636e \u5176\u5b9e\u4e5f\u662f\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u4e0d\u540c\u7684\u662f\u65f6\u5e8f\u6570\u636e\u662f\u5c5e\u6027\u6570\u636e\u5728\u5404\u4e2a\u65f6\u95f4\u70b9\u4e0a\u7684\u5386\u53f2\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"wal"},"WAL"))}u.isMDXComponent=!0},20239:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/entity-data-persisten-4ac47b48ebaebf755277befe5f6a6e85.png"}}]);