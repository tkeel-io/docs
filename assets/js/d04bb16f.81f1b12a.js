"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[2729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),v=u(r),m=n,k=v["".concat(p,".").concat(m)]||v[m]||c[m]||a;return r?l.createElement(k,o(o({ref:t},d),{},{components:r})):l.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}v.displayName="MDXCreateElement"},43005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={sidebar_position:30,title:"\u51c6\u5907\u5de5\u4f5c"},o=void 0,i={unversionedId:"develop_guide/before_develop/prepare",id:"develop_guide/before_develop/prepare",title:"\u51c6\u5907\u5de5\u4f5c",description:"\u672c\u6587\u4ecb\u7ecd\u5f00\u53d1\u524d\u7684\u51c6\u5907\u5de5\u4f5c\u3002",source:"@site/docs/develop_guide/before_develop/prepare.md",sourceDirName:"develop_guide/before_develop",slug:"/develop_guide/before_develop/prepare",permalink:"/develop_guide/before_develop/prepare",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/before_develop/prepare.md",tags:[],version:"current",lastUpdatedAt:1655257655,formattedLastUpdatedAt:"2022\u5e746\u670815\u65e5",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"\u51c6\u5907\u5de5\u4f5c"},sidebar:"developSidebar",previous:{title:"\u6982\u8ff0",permalink:"/develop_guide/before_develop/overview"},next:{title:"GO \u8bed\u8a00 SDK \u8bbe\u5907\u63a5\u5165",permalink:"/develop_guide/device_develop/go_sdk"}},p={},u=[{value:"\u8bbe\u5907\u5f00\u53d1",id:"\u8bbe\u5907\u5f00\u53d1",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb",level:3},{value:"\u6570\u636e\u5f00\u53d1",id:"\u6570\u636e\u5f00\u53d1",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6-1",level:3},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb-1",level:3},{value:"\u63d2\u4ef6\u5f00\u53d1",id:"\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6-2",level:3},{value:"\u63a8\u8350\u9605\u8bfb",id:"\u63a8\u8350\u9605\u8bfb-2",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5f00\u53d1\u524d\u7684\u51c6\u5907\u5de5\u4f5c\u3002"),(0,n.kt)("h2",{id:"\u8bbe\u5907\u5f00\u53d1"},"\u8bbe\u5907\u5f00\u53d1"),(0,n.kt)("p",null,"\u8bbe\u5907\u5f00\u53d1\u90e8\u5206\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7SDK\u4e3a\u60a8\u7684\u8bbe\u5907\u63d0\u4f9b\u6269\u5c55\u80fd\u529b\u3002"),(0,n.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 git"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 make"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 go 1.16+")),(0,n.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb"},"\u63a8\u8350\u9605\u8bfb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../device_develop/go_sdk"},"Go SDK"))),(0,n.kt)("h2",{id:"\u6570\u636e\u5f00\u53d1"},"\u6570\u636e\u5f00\u53d1"),(0,n.kt)("p",null,"\u6570\u636e\u5f00\u53d1\u90e8\u5206\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5e73\u53f0\u7684\u80fd\u529b\u83b7\u53d6\u8bbe\u5907\u7684\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6-1"},"\u524d\u63d0\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 git"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 make"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 go 1.16+")),(0,n.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb-1"},"\u63a8\u8350\u9605\u8bfb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../data_develop/data_way"},"\u6570\u636e\u4f7f\u7528\u65b9\u5f0f"))),(0,n.kt)("h2",{id:"\u63d2\u4ef6\u5f00\u53d1"},"\u63d2\u4ef6\u5f00\u53d1"),(0,n.kt)("p",null,"\u63d2\u4ef6\u5f00\u53d1\u90e8\u5206\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55\u673a\u5236\u6765\u4e3a\u5e73\u53f0\u63d0\u4f9b\u6269\u5c55\u80fd\u529b\u3002"),(0,n.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6-2"},"\u524d\u63d0\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 git"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 make"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 go 1.16+"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 protoc"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 helm3"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 docker"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 tkeel \u6700\u65b0\u7248"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u7684\u79c1\u6709docker\u4ed3\u5e93\u6216\u8005docker hub\u8d26\u53f7\uff08\u9700\u672c\u5730\u767b\u5f55docker hub\uff09")),(0,n.kt)("h3",{id:"\u63a8\u8350\u9605\u8bfb-2"},"\u63a8\u8350\u9605\u8bfb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop_guide/plugin_develop/plugin_chart"},"\u7f16\u8bd1\u90e8\u7f72\u63d2\u4ef6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop_guide/plugin_develop/function_develop"},"\u529f\u80fd\u63d2\u4ef6\u5f00\u53d1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop_guide/plugin_develop/web_develop"},"\u524d\u7aef\u63d2\u4ef6\u5f00\u53d1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop_guide/data_develop/data_way"},"\u6269\u5c55\u6570\u636e\u4f7f\u7528\u65b9\u5f0f"))))}c.isMDXComponent=!0}}]);