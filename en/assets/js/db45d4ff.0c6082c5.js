"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4695],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=u(a),s=n,N=k["".concat(i,".").concat(s)]||k[s]||m[s]||l;return a?r.createElement(N,p(p({ref:e},d),{},{components:a})):r.createElement(N,p({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75218:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"CreateRepo",description:"\u521b\u5efa\u4ed3\u5e93\u63a5\u53e3"},p=void 0,o={unversionedId:"api/rudder/method_CreateRepo",id:"api/rudder/method_CreateRepo",title:"CreateRepo",description:"\u521b\u5efa\u4ed3\u5e93\u63a5\u53e3",source:"@site/docs/api/rudder/method_CreateRepo.md",sourceDirName:"api/rudder",slug:"/api/rudder/method_CreateRepo",permalink:"/en/api/rudder/method_CreateRepo",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rudder/method_CreateRepo.md",tags:[],version:"current",lastUpdatedAt:1655776233,formattedLastUpdatedAt:"6/21/2022",frontMatter:{title:"CreateRepo",description:"\u521b\u5efa\u4ed3\u5e93\u63a5\u53e3"},sidebar:"tutorialSidebar",previous:{title:"CreateEntityToken",permalink:"/en/api/rudder/method_CreateEntityToken"},next:{title:"CreateRole",permalink:"/en/api/rudder/method_CreateRole"}},i={},u=[{value:"Request",id:"request",level:2},{value:"Request Body",id:"request-body",level:3},{value:"CreateRepoRequestRepoUrl",id:"createreporequestrepourl",level:4},{value:"Response",id:"response",level:2},{value:"Response  200",id:"response--200",level:3},{value:"Response  400",id:"response--400",level:3},{value:"Response  409",id:"response--409",level:3},{value:"Response  500",id:"response--500",level:3},{value:"Response  default",id:"response--default",level:3},{value:"rpcStatus",id:"rpcstatus",level:4},{value:"protobufAny",id:"protobufany",level:3}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u521b\u5efa\u4ed3\u5e93\u63a5\u53e3\u3002"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"post \\repos\\{name}\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Located in"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"repo name")))),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repo url"),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#CreateRepoRequestRepoUrl"},"CreateRepoRequestRepoUrl"))))),(0,n.kt)("h4",{id:"createreporequestrepourl"},"CreateRepoRequestRepoUrl"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"repo url")))),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("h3",{id:"response--200"},"Response  200"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"SUCC"),(0,n.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,n.kt)("h3",{id:"response--400"},"Response  400"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"400"),(0,n.kt)("td",{parentName:"tr",align:null},"INVALID_ARGUMENT"),(0,n.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,n.kt)("h3",{id:"response--409"},"Response  409"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"409"),(0,n.kt)("td",{parentName:"tr",align:null},"ALREADY_EXISTS"),(0,n.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,n.kt)("h3",{id:"response--500"},"Response  500"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"500"),(0,n.kt)("td",{parentName:"tr",align:null},"INTERNAL_STORE"),(0,n.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,n.kt)("h3",{id:"response--default"},"Response  default"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code2"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"default"),(0,n.kt)("td",{parentName:"tr",align:null},"An unexpected error response."),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#rpcStatus"},"rpcStatus"))))),(0,n.kt)("h4",{id:"rpcstatus"},"rpcStatus"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"code"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"details"),(0,n.kt)("td",{parentName:"tr",align:null},"Array","[protobufAny]"),(0,n.kt)("td",{parentName:"tr",align:null},"[ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,n.kt)("a",{parentName:"td",href:"#protobufAny"},"protobufAny")," ]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"protobufany"},"protobufAny"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"@type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);