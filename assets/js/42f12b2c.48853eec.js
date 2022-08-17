"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5989],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=o(a),s=n,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42268:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5207\u6362\u8def\u7531\u72b6\u6001",description:"SwitchRuleStatus"},i=void 0,u={unversionedId:"api/rule_manager/method_SwitchRuleStatus",id:"api/rule_manager/method_SwitchRuleStatus",title:"\u5207\u6362\u8def\u7531\u72b6\u6001",description:"SwitchRuleStatus",source:"@site/docs/api/rule_manager/method_SwitchRuleStatus.md",sourceDirName:"api/rule_manager",slug:"/api/rule_manager/method_SwitchRuleStatus",permalink:"/api/rule_manager/method_SwitchRuleStatus",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rule_manager/method_SwitchRuleStatus.md",tags:[],version:"current",lastUpdatedAt:1655886579,formattedLastUpdatedAt:"2022\u5e746\u670822\u65e5",frontMatter:{title:"\u5207\u6362\u8def\u7531\u72b6\u6001",description:"SwitchRuleStatus"},sidebar:"apiSidebar",previous:{title:"\u4ece\u8def\u7531\u8bbe\u5907\u4e2d\u5220\u9664\u8bbe\u5907",permalink:"/api/rule_manager/method_RemoveDevicesFromRule"},next:{title:"\u67e5\u8be2\u6570\u636e\u8868\u5217\u8868",permalink:"/api/rule_manager/method_TableList"}},p={},o=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"ruleRuleStatusSwitchResp",id:"rulerulestatusswitchresp",level:4}],d={toc:o};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u5207\u6362\u8def\u7531\u72b6\u6001\u3002"),(0,n.kt)("h2",{id:"uri"},"URI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"put /rules/{id}/running_status\n")),(0,n.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8def\u7531id"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Object(<\u4e1a\u52a1\u5bf9\u8c61>)")))),(0,n.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,n.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"Object(",(0,n.kt)("a",{parentName:"td",href:"#ruleRuleStatusSwitchResp"},"ruleRuleStatusSwitchResp"),")")))),(0,n.kt)("h4",{id:"rulerulestatusswitchresp"},"ruleRuleStatusSwitchResp"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8def\u7531id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001 1 \u8fd0\u884c\u4e2d, \u72b6\u6001 0 \u505c\u6b62")))))}m.isMDXComponent=!0}}]);