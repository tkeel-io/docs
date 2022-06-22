"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,m=b["".concat(d,".").concat(s)]||b[s]||c[s]||l;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},10250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u6821\u9a8c\u8ba2\u9605\u4fe1\u606f",description:"ValidateSubscribed"},i=void 0,o={unversionedId:"api/core_broker/method_ValidateSubscribed",id:"api/core_broker/method_ValidateSubscribed",title:"\u6821\u9a8c\u8ba2\u9605\u4fe1\u606f",description:"ValidateSubscribed",source:"@site/docs/api/core_broker/method_ValidateSubscribed.md",sourceDirName:"api/core_broker",slug:"/api/core_broker/method_ValidateSubscribed",permalink:"/en/api/core_broker/method_ValidateSubscribed",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core_broker/method_ValidateSubscribed.md",tags:[],version:"current",lastUpdatedAt:1655866138,formattedLastUpdatedAt:"6/22/2022",frontMatter:{title:"\u6821\u9a8c\u8ba2\u9605\u4fe1\u606f",description:"ValidateSubscribed"},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u8bbe\u5907\u8ba2\u9605",permalink:"/en/api/core_broker/method_SubscribeByDevice"},next:{title:"\u79fb\u52a8\u8ba2\u9605",permalink:"/en/api/core_broker/method_changeSubscribe"}},d={},u=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"v1ValidateSubscribedRequest| \u5b57\u6bb5\u540d | \u7c7b\u578b | \u63cf\u8ff0 |",id:"v1validatesubscribedrequest-\u5b57\u6bb5\u540d--\u7c7b\u578b--\u63cf\u8ff0-",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1ValidateSubscribedResponse",id:"v1validatesubscribedresponse",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u6821\u9a8c\u8ba2\u9605\u4fe1\u606f\u3002"),(0,n.kt)("h2",{id:"uri"},"URI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"post /validate/subscribe\n")),(0,n.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b")))),(0,n.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Body"),(0,n.kt)("td",{parentName:"tr",align:null},"Object(",(0,n.kt)("a",{parentName:"td",href:"#v1ValidateSubscribedRequest"},"v1ValidateSubscribedRequest"),")"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"v1validatesubscribedrequest-\u5b57\u6bb5\u540d--\u7c7b\u578b--\u63cf\u8ff0-"},"v1ValidateSubscribedRequest| \u5b57\u6bb5\u540d | \u7c7b\u578b | \u63cf\u8ff0 |"),(0,n.kt)("p",null,"| ---- | ---- | ----------- |\n| topic | string | topic |"),(0,n.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,n.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"Object(",(0,n.kt)("a",{parentName:"td",href:"#v1ValidateSubscribedResponse"},"v1ValidateSubscribedResponse"),")")))),(0,n.kt)("h4",{id:"v1validatesubscribedresponse"},"v1ValidateSubscribedResponse"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001")))))}c.isMDXComponent=!0}}]);