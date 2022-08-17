"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7909],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=o(a),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},52823:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8be2\u5b9e\u4f53\u539f\u59cb\u6570\u636e",description:"GetRawdata",sidebar_position:184},i=void 0,p={unversionedId:"api/core/method_GetRawdata",id:"api/core/method_GetRawdata",title:"\u67e5\u8be2\u5b9e\u4f53\u539f\u59cb\u6570\u636e",description:"GetRawdata",source:"@site/docs/api/core/method_GetRawdata.md",sourceDirName:"api/core",slug:"/api/core/method_GetRawdata",permalink:"/en/api/core/method_GetRawdata",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core/method_GetRawdata.md",tags:[],version:"current",lastUpdatedAt:1655966912,formattedLastUpdatedAt:"Jun 23, 2022",sidebarPosition:184,frontMatter:{title:"\u67e5\u8be2\u5b9e\u4f53\u539f\u59cb\u6570\u636e",description:"GetRawdata",sidebar_position:184},sidebar:"apiSidebar",previous:{title:"\u67e5\u8be2\u5b9e\u4f53\u5217\u8868",permalink:"/en/api/core/method_ListEntity"},next:{title:"\u67e5\u8be2\u5b9e\u4f53\u914d\u7f6e",permalink:"/en/api/core/method_GetEntityConfigs"}},d={},o=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1GetRawdataResponse",id:"v1getrawdataresponse",level:4},{value:"v1RawdataResponse",id:"v1rawdataresponse",level:3}],m={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u67e5\u8be2\u5b9e\u4f53\u539f\u59cb\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"uri"},"URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"post /rawdata/{entity_id}\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Object(<\u4e1a\u52a1\u5bf9\u8c61>)")))),(0,r.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,r.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Object(",(0,r.kt)("a",{parentName:"td",href:"#v1GetRawdataResponse"},"v1GetRawdataResponse"),")")))),(0,r.kt)("h4",{id:"v1getrawdataresponse"},"v1GetRawdataResponse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"items"),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[v1RawdataResponse]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u539f\u59cb\u6570\u636e\u5217\u8868 [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,r.kt)("a",{parentName:"td",href:"#v1RawdataResponse"},"v1RawdataResponse")," ]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_num"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5f00\u59cb\u4f4d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9875\u9650\u5236\u6761\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u5217\u8868\u6570\u91cf")))),(0,r.kt)("h3",{id:"v1rawdataresponse"},"v1RawdataResponse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233\uff0c\u6beb\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"values"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e")))))}u.isMDXComponent=!0}}]);