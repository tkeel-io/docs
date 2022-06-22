"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,m=b["".concat(p,".").concat(s)]||b[s]||d[s]||l;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},70190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u521b\u5efa\u8ba2\u9605",description:"createSubscribe"},i=void 0,o={unversionedId:"api/core_broker/method_createSubscribe",id:"api/core_broker/method_createSubscribe",title:"\u521b\u5efa\u8ba2\u9605",description:"createSubscribe",source:"@site/docs/api/core_broker/method_createSubscribe.md",sourceDirName:"api/core_broker",slug:"/api/core_broker/method_createSubscribe",permalink:"/en/api/core_broker/method_createSubscribe",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core_broker/method_createSubscribe.md",tags:[],version:"current",lastUpdatedAt:1655866138,formattedLastUpdatedAt:"6/22/2022",frontMatter:{title:"\u521b\u5efa\u8ba2\u9605",description:"createSubscribe"},sidebar:"tutorialSidebar",previous:{title:"\u79fb\u52a8\u8ba2\u9605",permalink:"/en/api/core_broker/method_changeSubscribe"},next:{title:"\u5220\u9664\u8ba2\u9605",permalink:"/en/api/core_broker/method_deleteSubscribe"}},p={},u=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"v1CreateSubscribeRequest| \u5b57\u6bb5\u540d | \u7c7b\u578b | \u63cf\u8ff0 |",id:"v1createsubscriberequest-\u5b57\u6bb5\u540d--\u7c7b\u578b--\u63cf\u8ff0-",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1CreateSubscribeResponse",id:"v1createsubscriberesponse",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u521b\u5efa\u8ba2\u9605\u3002"),(0,n.kt)("h2",{id:"uri"},"URI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"post /subscribe\n")),(0,n.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b")))),(0,n.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Body"),(0,n.kt)("td",{parentName:"tr",align:null},"Object(",(0,n.kt)("a",{parentName:"td",href:"#v1CreateSubscribeRequest"},"v1CreateSubscribeRequest"),")"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"v1createsubscriberequest-\u5b57\u6bb5\u540d--\u7c7b\u578b--\u63cf\u8ff0-"},"v1CreateSubscribeRequest| \u5b57\u6bb5\u540d | \u7c7b\u578b | \u63cf\u8ff0 |"),(0,n.kt)("p",null,"| ---- | ---- | ----------- |\n| description | string | \u8ba2\u9605\u63cf\u8ff0 |\n| title | string | \u8ba2\u9605\u540d\u79f0 |"),(0,n.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,n.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"Object(",(0,n.kt)("a",{parentName:"td",href:"#v1CreateSubscribeResponse"},"v1CreateSubscribeResponse"),")")))),(0,n.kt)("h4",{id:"v1createsubscriberesponse"},"v1CreateSubscribeResponse"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u63cf\u8ff0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_default"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u9ed8\u8ba4\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u540d\u79f0")))))}d.isMDXComponent=!0}}]);