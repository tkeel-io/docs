"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8057],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(a),k=n,N=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return a?r.createElement(N,p(p({ref:e},u),{},{components:a})):r.createElement(N,p({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},74343:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"GetPlatformConfig",description:"\u67e5\u8be2 platform config \u63a5\u53e3"},p=void 0,i={unversionedId:"api/rudder/method_GetPlatformConfig",id:"api/rudder/method_GetPlatformConfig",title:"GetPlatformConfig",description:"\u67e5\u8be2 platform config \u63a5\u53e3",source:"@site/docs/api/rudder/method_GetPlatformConfig.md",sourceDirName:"api/rudder",slug:"/api/rudder/method_GetPlatformConfig",permalink:"/en/api/rudder/method_GetPlatformConfig",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rudder/method_GetPlatformConfig.md",tags:[],version:"current",lastUpdatedAt:1655776233,formattedLastUpdatedAt:"6/21/2022",frontMatter:{title:"GetPlatformConfig",description:"\u67e5\u8be2 platform config \u63a5\u53e3"},sidebar:"tutorialSidebar",previous:{title:"GetIdentityProvider",permalink:"/en/api/rudder/method_GetIdentityProvider"},next:{title:"GetPlugin",permalink:"/en/api/rudder/method_GetPlugin"}},o={},d=[{value:"Request",id:"request",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response",id:"response",level:2},{value:"Response  200",id:"response--200",level:3},{value:"Response  400",id:"response--400",level:3},{value:"Response  500",id:"response--500",level:3},{value:"Response  default",id:"response--default",level:3},{value:"rpcStatus",id:"rpcstatus",level:4},{value:"protobufAny",id:"protobufany",level:3}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u67e5\u8be2 platform config \u63a5\u53e3\u3002"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"get \\config\\platform\n")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Located in"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"false")))),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("h3",{id:"response--200"},"Response  200"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"{object   { }}")))),(0,n.kt)("h3",{id:"response--400"},"Response  400"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"400"),(0,n.kt)("td",{parentName:"tr",align:null},"INVALID_TENANT"),(0,n.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,n.kt)("h3",{id:"response--500"},"Response  500"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code3"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"500"),(0,n.kt)("td",{parentName:"tr",align:null},"INTERNAL_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,n.kt)("h3",{id:"response--default"},"Response  default"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code2"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"default"),(0,n.kt)("td",{parentName:"tr",align:null},"An unexpected error response."),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#rpcStatus"},"rpcStatus"))))),(0,n.kt)("h4",{id:"rpcstatus"},"rpcStatus"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"code"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"details"),(0,n.kt)("td",{parentName:"tr",align:null},"Array","[protobufAny]"),(0,n.kt)("td",{parentName:"tr",align:null},"[ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,n.kt)("a",{parentName:"td",href:"#protobufAny"},"protobufAny")," ]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"protobufany"},"protobufAny"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"@type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);