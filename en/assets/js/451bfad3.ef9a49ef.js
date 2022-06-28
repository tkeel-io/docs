"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9422],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||o[N]||l;return a?n.createElement(g,p(p({ref:e},u),{},{components:a})):n.createElement(g,p({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67044:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u66f4\u65b0\u4ee3\u7406\u670d\u52a1",description:"UpdateProxy"},p=void 0,i={unversionedId:"api/fluxswitch/method_UpdateProxy",id:"api/fluxswitch/method_UpdateProxy",title:"\u66f4\u65b0\u4ee3\u7406\u670d\u52a1",description:"UpdateProxy",source:"@site/docs/api/fluxswitch/method_UpdateProxy.md",sourceDirName:"api/fluxswitch",slug:"/api/fluxswitch/method_UpdateProxy",permalink:"/en/api/fluxswitch/method_UpdateProxy",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/fluxswitch/method_UpdateProxy.md",tags:[],version:"current",lastUpdatedAt:1655806319,formattedLastUpdatedAt:"6/21/2022",frontMatter:{title:"\u66f4\u65b0\u4ee3\u7406\u670d\u52a1",description:"UpdateProxy"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u7f51\u5173\u4fe1\u606f",permalink:"/en/api/fluxswitch/method_UpdateClient"},next:{title:"\u76d1\u542c\u914d\u7f6e\u53d8\u5316",permalink:"/en/api/fluxswitch/method_WatchConfig"}},d={},m=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"v1UpdateProxy",id:"v1updateproxy",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1UpdateProxyResponse",id:"v1updateproxyresponse",level:4},{value:"v1QueryProxy",id:"v1queryproxy",level:3}],u={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u66f4\u65b0\u4ee3\u7406\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"uri"},"URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"put /proxy/{id}\n")),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u670d\u52a1ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"Object(",(0,r.kt)("a",{parentName:"td",href:"#v1UpdateProxy"},"v1UpdateProxy"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u670d\u52a1\u4fe1\u606f")))),(0,r.kt)("h4",{id:"v1updateproxy"},"v1UpdateProxy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"device_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"device_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u534f\u8bae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remark"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u72b6\u6001")))),(0,r.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,r.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Object(",(0,r.kt)("a",{parentName:"td",href:"#v1UpdateProxyResponse"},"v1UpdateProxyResponse"),")")))),(0,r.kt)("h4",{id:"v1updateproxyresponse"},"v1UpdateProxyResponse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u670d\u52a1\u4fe1\u606f [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,r.kt)("a",{parentName:"td",href:"#v1QueryProxy"},"v1QueryProxy")," ]")))),(0,r.kt)("h3",{id:"v1queryproxy"},"v1QueryProxy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_at"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"device_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"device_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u884c\u6d41\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u670d\u52a1ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlet_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u884c\u6d41\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"online"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u7ebf\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remark"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u5730\u5740")))))}o.isMDXComponent=!0}}]);