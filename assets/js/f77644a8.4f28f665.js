"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4774],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,N=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(N,p(p({ref:e},u),{},{components:a})):n.createElement(N,p({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},15202:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"ListRepo",description:"\u83b7\u53d6\u4ed3\u5e93\u5217\u8868\u63a5\u53e3"},p=void 0,i={unversionedId:"api/rudder/method_ListRepo",id:"api/rudder/method_ListRepo",title:"ListRepo",description:"\u83b7\u53d6\u4ed3\u5e93\u5217\u8868\u63a5\u53e3",source:"@site/docs/api/rudder/method_ListRepo.md",sourceDirName:"api/rudder",slug:"/api/rudder/method_ListRepo",permalink:"/api/rudder/method_ListRepo",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rudder/method_ListRepo.md",tags:[],version:"current",lastUpdatedAt:1655776233,formattedLastUpdatedAt:"2022\u5e746\u670821\u65e5",frontMatter:{title:"ListRepo",description:"\u83b7\u53d6\u4ed3\u5e93\u5217\u8868\u63a5\u53e3"},sidebar:"tutorialSidebar",previous:{title:"ListPlugin",permalink:"/api/rudder/method_ListPlugin"},next:{title:"ListRepoInstaller",permalink:"/api/rudder/method_ListRepoInstaller"}},o={},d=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Response  200",id:"response--200",level:3},{value:"v1ListRepoResponse",id:"v1listreporesponse",level:4},{value:"v1RepoObject",id:"v1repoobject",level:3},{value:"Response  400",id:"response--400",level:3},{value:"Response  500",id:"response--500",level:3},{value:"Response  default",id:"response--default",level:3},{value:"rpcStatus",id:"rpcstatus",level:4},{value:"protobufAny",id:"protobufany",level:3}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u83b7\u53d6\u4ed3\u5e93\u5217\u8868\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"get \\repos\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"response--200"},"Response  200"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code2"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"SUCC"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#v1ListRepoResponse"},"v1ListRepoResponse"))))),(0,r.kt)("h4",{id:"v1listreporesponse"},"v1ListRepoResponse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repos"),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[v1RepoObject]"),(0,r.kt)("td",{parentName:"tr",align:null},"repo list [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,r.kt)("a",{parentName:"td",href:"#v1RepoObject"},"v1RepoObject")," ]")))),(0,r.kt)("h3",{id:"v1repoobject"},"v1RepoObject"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"repo annotations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"installer_num"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"installer num")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"installer metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"repo name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"repo url")))),(0,r.kt)("h3",{id:"response--400"},"Response  400"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code3"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_ARGUMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,r.kt)("h3",{id:"response--500"},"Response  500"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code3"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"INTERNAL_STORE"),(0,r.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,r.kt)("h3",{id:"response--default"},"Response  default"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code2"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"An unexpected error response."),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#rpcStatus"},"rpcStatus"))))),(0,r.kt)("h4",{id:"rpcstatus"},"rpcStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"details"),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[protobufAny]"),(0,r.kt)("td",{parentName:"tr",align:null},"[ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,r.kt)("a",{parentName:"td",href:"#protobufAny"},"protobufAny")," ]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"protobufany"},"protobufAny"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);