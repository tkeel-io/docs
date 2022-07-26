"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7456],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=r.createContext({}),d=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),s=l,b=k["".concat(u,".").concat(s)]||k[s]||o[s]||n;return a?r.createElement(b,i(i({ref:e},m),{},{components:a})):r.createElement(b,i({ref:e},m))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},31625:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var r=a(87462),l=(a(67294),a(3905));const n={title:"\u67e5\u8be2\u6570\u636e\u8868\u5217\u8868",description:"TableList"},i=void 0,p={unversionedId:"api/rule_manager/method_TableList",id:"api/rule_manager/method_TableList",title:"\u67e5\u8be2\u6570\u636e\u8868\u5217\u8868",description:"TableList",source:"@site/docs/api/rule_manager/method_TableList.md",sourceDirName:"api/rule_manager",slug:"/api/rule_manager/method_TableList",permalink:"/api/rule_manager/method_TableList",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rule_manager/method_TableList.md",tags:[],version:"current",lastUpdatedAt:1655886579,formattedLastUpdatedAt:"2022\u5e746\u670822\u65e5",frontMatter:{title:"\u67e5\u8be2\u6570\u636e\u8868\u5217\u8868",description:"TableList"},sidebar:"tutorialSidebar",previous:{title:"\u5207\u6362\u8def\u7531\u72b6\u6001",permalink:"/api/rule_manager/method_SwitchRuleStatus"},next:{title:"\u6d4b\u8bd5kafka\u914d\u7f6e",permalink:"/api/rule_manager/method_TesyConnectToKafka"}},u={},d=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"ruleASTableListResp",id:"ruleastablelistresp",level:4},{value:"ruleTable",id:"ruletable",level:3},{value:"ruleField",id:"rulefield",level:3}],m={toc:d};function o(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,l.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u67e5\u8be2\u6570\u636e\u8868\u5217\u8868\u3002"),(0,l.kt)("h2",{id:"uri"},"URI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"get /sink/{id}/tables\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u6210\u529f\u540e\u8fd4\u56de\u7684id"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")))),(0,l.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,l.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Object(",(0,l.kt)("a",{parentName:"td",href:"#ruleASTableListResp"},"ruleASTableListResp"),")")))),(0,l.kt)("h4",{id:"ruleastablelistresp"},"ruleASTableListResp"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tables"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[ruleTable]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8868\u5217\u8868 [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,l.kt)("a",{parentName:"td",href:"#ruleTable"},"ruleTable")," ]")))),(0,l.kt)("h3",{id:"ruletable"},"ruleTable"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[ruleField]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u5b57\u6bb5 [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,l.kt)("a",{parentName:"td",href:"#ruleField"},"ruleField")," ]")))),(0,l.kt)("h3",{id:"rulefield"},"ruleField"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isPK"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u4e3b\u952e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b")))))}o.isMDXComponent=!0}}]);