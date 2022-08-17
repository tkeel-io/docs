"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[2609],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,c=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},66436:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},i=void 0,p={unversionedId:"api/fluxswitch/tag",id:"api/fluxswitch/tag",title:"API\u5217\u8868",description:"API\u5217\u8868",source:"@site/docs/api/fluxswitch/tag.md",sourceDirName:"api/fluxswitch",slug:"/api/fluxswitch/tag",permalink:"/en/api/fluxswitch/tag",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/fluxswitch/tag.md",tags:[],version:"current",lastUpdatedAt:1655806319,formattedLastUpdatedAt:"Jun 21, 2022",sidebarPosition:0,frontMatter:{title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},sidebar:"apiSidebar",previous:{title:"UpdateTemplateTelemetryExt",permalink:"/en/api/device/method_UpdateTemplateTelemetryExt"},next:{title:"\u521b\u5efa\u7f51\u5173",permalink:"/en/api/fluxswitch/method_CreateClient"}},o={},d=[{value:"Client API",id:"Client",level:2},{value:"Config API",id:"Config",level:2},{value:"Openapi API",id:"Openapi",level:2},{value:"Proxy API",id:"Proxy",level:2},{value:"Tools API",id:"Tools",level:2},{value:"Topology API",id:"Topology",level:2}],m={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"Client"},"Client API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_ListClient"},"ListClient")),(0,r.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u7f51\u5173")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_CreateClient"},"CreateClient")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7f51\u5173")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_GetClient"},"GetClient")),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u7f51\u5173\u8be6\u60c5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_DeleteClient"},"DeleteClient")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u7f51\u5173")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_UpdateClient"},"UpdateClient")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u7f51\u5173\u4fe1\u606f")))),(0,r.kt)("h2",{id:"Config"},"Config API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_WatchConfig"},"WatchConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u914d\u7f6e\u53d8\u5316")))),(0,r.kt)("h2",{id:"Openapi"},"Openapi API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_Identify"},"Identify")),(0,r.kt)("td",{parentName:"tr",align:null},"openapi addons identify")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_TenantDisable"},"TenantDisable")),(0,r.kt)("td",{parentName:"tr",align:null},"openapi tenant disable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_Identify"},"Identify")),(0,r.kt)("td",{parentName:"tr",align:null},"openapi identify")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_Status"},"Status")),(0,r.kt)("td",{parentName:"tr",align:null},"openapi status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_TenantEnable"},"TenantEnable")),(0,r.kt)("td",{parentName:"tr",align:null},"openapi tenant enable")))),(0,r.kt)("h2",{id:"Proxy"},"Proxy API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_GetProxy"},"GetProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u4ee3\u7406\u670d\u52a1\u8be6\u60c5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_DeleteProxy"},"DeleteProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u4ee3\u7406\u670d\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_UpdateProxy"},"UpdateProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u4ee3\u7406\u670d\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_ListProxy"},"ListProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u641c\u7d22\u670d\u52a1\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_CreateProxy"},"CreateProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u4ee3\u7406\u670d\u52a1")))),(0,r.kt)("h2",{id:"Tools"},"Tools API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_Template"},"Template")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_Import"},"Import")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5bfc\u5165")))),(0,r.kt)("h2",{id:"Topology"},"Topology API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/api/fluxswitch/method_GetTopology"},"GetTopology")),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u62d3\u6251\u7ed3\u6784")))))}u.isMDXComponent=!0}}]);