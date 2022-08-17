"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9722],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(r),b=a,m=c["".concat(s,".").concat(b)]||c[b]||d[b]||i;return r?n.createElement(m,l(l({ref:e},u),{},{components:r})):n.createElement(m,l({ref:e},u))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82884:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u901a\u8fc7\u5b9e\u4f53id\u5217\u8868\u6dfb\u52a0\u5230\u8ba2\u9605",description:"subscribeEntitiesByIDs"},l=void 0,o={unversionedId:"api/core_broker/method_subscribeEntitiesByIDs",id:"api/core_broker/method_subscribeEntitiesByIDs",title:"\u901a\u8fc7\u5b9e\u4f53id\u5217\u8868\u6dfb\u52a0\u5230\u8ba2\u9605",description:"subscribeEntitiesByIDs",source:"@site/docs/api/core_broker/method_subscribeEntitiesByIDs.md",sourceDirName:"api/core_broker",slug:"/api/core_broker/method_subscribeEntitiesByIDs",permalink:"/en/api/core_broker/method_subscribeEntitiesByIDs",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core_broker/method_subscribeEntitiesByIDs.md",tags:[],version:"current",lastUpdatedAt:1655866138,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{title:"\u901a\u8fc7\u5b9e\u4f53id\u5217\u8868\u6dfb\u52a0\u5230\u8ba2\u9605",description:"subscribeEntitiesByIDs"},sidebar:"apiSidebar",previous:{title:"\u901a\u8fc7\u5b9e\u4f53\u7ec4\u6dfb\u52a0\u5230\u8ba2\u9605",permalink:"/en/api/core_broker/method_subscribeEntitiesByGroups"},next:{title:"\u901a\u8fc7\u6a21\u677f\u6dfb\u52a0\u5230\u8ba2\u9605",permalink:"/en/api/core_broker/method_subscribeEntitiesByModels"}},s={},p=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1SubscribeEntitiesByIDsResponse",id:"v1subscribeentitiesbyidsresponse",level:4}],u={toc:p};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,a.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u901a\u8fc7\u5b9e\u4f53id\u5217\u8868\u6dfb\u52a0\u5230\u8ba2\u9605\u3002"),(0,a.kt)("h2",{id:"uri"},"URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"post /subscribe/{id}/entities\n")),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Object(<\u4e1a\u52a1\u5bf9\u8c61>)")))),(0,a.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,a.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"Object(",(0,a.kt)("a",{parentName:"td",href:"#v1SubscribeEntitiesByIDsResponse"},"v1SubscribeEntitiesByIDsResponse"),")")))),(0,a.kt)("h4",{id:"v1subscribeentitiesbyidsresponse"},"v1SubscribeEntitiesByIDsResponse"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u72b6\u6001")))))}d.isMDXComponent=!0}}]);