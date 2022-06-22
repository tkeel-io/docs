"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>b,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=c(r),u=n,m=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return r?a.createElement(m,o(o({ref:t},b),{},{components:r})):a.createElement(m,o({ref:t},b))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},16856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},o=void 0,l={unversionedId:"api/core_broker/tag",id:"api/core_broker/tag",title:"API\u5217\u8868",description:"API\u5217\u8868",source:"@site/docs/api/core_broker/tag.md",sourceDirName:"api/core_broker",slug:"/api/core_broker/tag",permalink:"/api/core_broker/tag",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core_broker/tag.md",tags:[],version:"current",lastUpdatedAt:1655866138,formattedLastUpdatedAt:"2022/6/22",sidebarPosition:0,frontMatter:{title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"UpdateSubscription",permalink:"/api/core/method_UpdateSubscription"},next:{title:"\u6dfb\u52a0\u8bbe\u5907\u8ba2\u9605",permalink:"/api/core_broker/method_SubscribeByDevice"}},p={},c=[{value:"subscribe API",id:"subscribe",level:2}],b={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"subscribe"},"subscribe API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_SubscribeByDevice"},"SubscribeByDevice")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8bbe\u5907\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_listSubscribe"},"listSubscribe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8ba2\u9605\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_unsubscribeEntitiesByIDs"},"unsubscribeEntitiesByIDs")),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_subscribeEntitiesByGroups"},"subscribeEntitiesByGroups")),(0,n.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u5b9e\u4f53\u7ec4\u6dfb\u52a0\u5230\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_subscribeEntitiesByModels"},"subscribeEntitiesByModels")),(0,n.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u6a21\u677f\u6dfb\u52a0\u5230\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_createSubscribe"},"createSubscribe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_updateSubscribe"},"updateSubscribe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_getSubscribe"},"getSubscribe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_deleteSubscribe"},"deleteSubscribe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_changeSubscribe"},"changeSubscribe")),(0,n.kt)("td",{parentName:"tr",align:null},"\u79fb\u52a8\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_subscribeEntitiesByIDs"},"subscribeEntitiesByIDs")),(0,n.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u5b9e\u4f53id\u5217\u8868\u6dfb\u52a0\u5230\u8ba2\u9605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_listSubscribeEntities"},"listSubscribeEntities")),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8ba2\u9605\u7684\u5b9e\u4f53\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/core_broker/method_ValidateSubscribed"},"ValidateSubscribed")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6821\u9a8c\u8ba2\u9605\u4fe1\u606f")))))}d.isMDXComponent=!0}}]);