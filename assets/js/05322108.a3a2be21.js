"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[2253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,c=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return r?n.createElement(c,p(p({ref:t},d),{},{components:r})):n.createElement(c,p({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},65659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"VerifyToken",description:"Token \u9a8c\u8bc1\u63a5\u53e3"},p=void 0,o={unversionedId:"api/rudder/method_VerifyToken",id:"api/rudder/method_VerifyToken",title:"VerifyToken",description:"Token \u9a8c\u8bc1\u63a5\u53e3",source:"@site/docs/api/rudder/method_VerifyToken.md",sourceDirName:"api/rudder",slug:"/api/rudder/method_VerifyToken",permalink:"/api/rudder/method_VerifyToken",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rudder/method_VerifyToken.md",tags:[],version:"current",lastUpdatedAt:1655776233,formattedLastUpdatedAt:"2022\u5e746\u670821\u65e5",frontMatter:{title:"VerifyToken",description:"Token \u9a8c\u8bc1\u63a5\u53e3"},sidebar:"apiSidebar",previous:{title:"UpgradePlugin",permalink:"/api/rudder/method_UpgradePlugin"},next:{title:"API\u5217\u8868",permalink:"/api/rule_manager/tag"}},i={},u=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Response  200",id:"response--200",level:3},{value:"Response  401",id:"response--401",level:3},{value:"Response  500",id:"response--500",level:3},{value:"Response  default",id:"response--default",level:3},{value:"rpcStatus",id:"rpcstatus",level:4},{value:"protobufAny",id:"protobufany",level:3}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3Token \u9a8c\u8bc1\u63a5\u53e3\u3002"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"get \\oauth2\\authorize\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"response--200"},"Response  200"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code3"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,a.kt)("h3",{id:"response--401"},"Response  401"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code3"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"401"),(0,a.kt)("td",{parentName:"tr",align:null},"TOKEN_INVALID"),(0,a.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,a.kt)("h3",{id:"response--500"},"Response  500"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code3"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"INTERNAL_ERROR"),(0,a.kt)("td",{parentName:"tr",align:null},"{   { }}")))),(0,a.kt)("h3",{id:"response--default"},"Response  default"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code2"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"default"),(0,a.kt)("td",{parentName:"tr",align:null},"An unexpected error response."),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#rpcStatus"},"rpcStatus"))))),(0,a.kt)("h4",{id:"rpcstatus"},"rpcStatus"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"code"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"details"),(0,a.kt)("td",{parentName:"tr",align:null},"Array","[protobufAny]"),(0,a.kt)("td",{parentName:"tr",align:null},"[ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,a.kt)("a",{parentName:"td",href:"#protobufAny"},"protobufAny")," ]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"protobufany"},"protobufAny"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);