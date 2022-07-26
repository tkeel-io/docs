"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4121],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=d(n),k=a,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(c,p(p({ref:e},s),{},{components:n})):r.createElement(c,p({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89067:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6dfb\u52a0\u5b9e\u4f53\u8868\u8fbe\u5f0f",description:"AppendExpression",sidebar_position:88},p=void 0,i={unversionedId:"api/core/method_AppendExpression",id:"api/core/method_AppendExpression",title:"\u6dfb\u52a0\u5b9e\u4f53\u8868\u8fbe\u5f0f",description:"AppendExpression",source:"@site/docs/api/core/method_AppendExpression.md",sourceDirName:"api/core",slug:"/api/core/method_AppendExpression",permalink:"/en/api/core/method_AppendExpression",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core/method_AppendExpression.md",tags:[],version:"current",lastUpdatedAt:1655966912,formattedLastUpdatedAt:"Jun 23, 2022",sidebarPosition:88,frontMatter:{title:"\u6dfb\u52a0\u5b9e\u4f53\u8868\u8fbe\u5f0f",description:"AppendExpression",sidebar_position:88},sidebar:"tutorialSidebar",previous:{title:"\u79fb\u9664\u5b9e\u4f53\u8868\u8fbe\u5f0f",permalink:"/en/api/core/method_RemoveExpression"},next:{title:"\u83b7\u53d6\u5b9e\u4f53\u8868\u8fbe\u5f0f",permalink:"/en/api/core/method_GetExpression"}},o={},d=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bf7\u6c42Body",id:"\u8bf7\u6c42body",level:3},{value:"v1Expressions",id:"v1expressions",level:4},{value:"v1Expression",id:"v1expression",level:3},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1AppendExpressionResp",id:"v1appendexpressionresp",level:4}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,a.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u6dfb\u52a0\u5b9e\u4f53\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("h2",{id:"uri"},"URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"post /entities/{entity_id}/expressions\n")),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b")))),(0,a.kt)("p",null,"| entity_id | path | string | \u5b9e\u4f53id |  Required | "),(0,a.kt)("p",null,"| source | query | string | \u6765\u6e90id |  false |\n| owner | query | string | \u7528\u6237id |  false |"),(0,a.kt)("h3",{id:"\u8bf7\u6c42body"},"\u8bf7\u6c42Body"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Body"),(0,a.kt)("td",{parentName:"tr",align:null},"Object(",(0,a.kt)("a",{parentName:"td",href:"#v1Expressions"},"v1Expressions"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f\u4fe1\u606f")))),(0,a.kt)("h4",{id:"v1expressions"},"v1Expressions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expressions"),(0,a.kt)("td",{parentName:"tr",align:null},"Array","[v1Expression]"),(0,a.kt)("td",{parentName:"tr",align:null},"[ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,a.kt)("a",{parentName:"td",href:"#v1Expression"},"v1Expression")," ]")))),(0,a.kt)("h3",{id:"v1expression"},"v1Expression"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"description"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expression"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u5c5e\u6027")))),(0,a.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,a.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"Object(",(0,a.kt)("a",{parentName:"td",href:"#v1AppendExpressionResp"},"v1AppendExpressionResp"),")")))),(0,a.kt)("h4",{id:"v1appendexpressionresp"},"v1AppendExpressionResp"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"count"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"entity_id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237id")))))}u.isMDXComponent=!0}}]);