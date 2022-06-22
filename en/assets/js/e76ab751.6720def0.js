"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),v=o,f=s["".concat(p,".").concat(v)]||s[v]||d[v]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},51013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:10,title:"\u6982\u8ff0"},a=void 0,i={unversionedId:"develop_guide/before_develop/overview",id:"develop_guide/before_develop/overview",title:"\u6982\u8ff0",description:"QingCloud IoT \u7269\u8054\u7f51\u5e73\u53f0 \u662f\u4e00\u79cd\u7528\u4e8e \u6784\u5efa\u548c\u7ba1\u7406\u7269\u8054\u7f51\u89e3\u51b3\u65b9\u6848\u7684\u6570\u5b57\u5e73\u53f0 \u3002",source:"@site/docs/develop_guide/before_develop/overview.md",sourceDirName:"develop_guide/before_develop",slug:"/develop_guide/before_develop/overview",permalink:"/en/develop_guide/before_develop/overview",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/before_develop/overview.md",tags:[],version:"current",lastUpdatedAt:1655169851,formattedLastUpdatedAt:"6/14/2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u6982\u8ff0"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd14 \u7b54\u7591",permalink:"/en/FQA"},next:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/en/develop_guide/before_develop/prepare"}},p={},u=[{value:"\u5e73\u53f0\u4ecb\u7ecd",id:"\u5e73\u53f0\u4ecb\u7ecd",level:2},{value:"\u7ba1\u7406\u5e73\u53f0",id:"\u7ba1\u7406\u5e73\u53f0",level:2},{value:"\u79df\u6237\u5e73\u53f0",id:"\u79df\u6237\u5e73\u53f0",level:2}],c={toc:u};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QingCloud IoT \u7269\u8054\u7f51\u5e73\u53f0 \u662f\u4e00\u79cd\u7528\u4e8e \u6784\u5efa\u548c\u7ba1\u7406\u7269\u8054\u7f51\u89e3\u51b3\u65b9\u6848\u7684\u6570\u5b57\u5e73\u53f0 \u3002\n\u57fa\u4e8e\u4e91\u539f\u751f\u6784\u5efa\u6838\u5fc3\u6784\u67b6tkeel\uff0c\u5229\u7528Dapr \u5b9e\u73b0\u8bed\u8a00\u65e0\u5173\u6027\uff0c\u6700\u4f4e\u6210\u672c\u4e0e\u73b0\u6709\u529f\u80fd\u96c6\u6210\uff0c\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u5b9e\u73b0\u4e1a\u52a1\u6269\u5c55\u4e0e\u6a21\u5757\u5316\u4ea4\u4ed8\uff0c\u5bf9\u8bbe\u5907\u751f\u6210\u7684\u6570\u636e\u8fdb\u884c\u6536\u96c6\u3001\u5904\u7406\u3001\u5206\u6790\u548c\u64cd\u4f5c\n\uff0c\u5e2e\u52a9\u4f01\u4e1a\u7528\u6237\u63d0\u4f9b\u53ef\u843d\u5730\u3001\u53ef\u8fed\u4ee3\u3001\u9762\u5411\u573a\u666f\u7684\u7efc\u5408\u7269\u8054\u7f51\u89e3\u51b3\u65b9\u6848\uff0c\u52a0\u901f\u884c\u4e1a\u5e94\u7528\u573a\u666f\u7684\u6570\u5b57\u5316\u8f6c\u578b\uff0c\u6784\u5efa\u4ea7\u4e1a\u6570\u5b57\u7ecf\u6d4e\uff1b"),(0,o.kt)("h2",{id:"\u5e73\u53f0\u4ecb\u7ecd"},"\u5e73\u53f0\u4ecb\u7ecd"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:r(63643).Z,width:"1736",height:"830"})),(0,o.kt)("p",null,"QingCloud IoT \u7269\u8054\u7f51\u5e73\u53f0\u4f5c\u4e3a\u9ad8\u6269\u5c55\u3001\u53ef\u63d2\u62d4\u7684\u5f00\u6e90 IoT PaaS +  \u5e73\u53f0\uff0c\n\u9664\u4e86\u63d0\u4f9b\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u591a\u79df\u6237\u3001\u53ef\u62d4\u63d2\u7684\u7269\u8054\u7f51\u8fd0\u8425\u5e73\u53f0 SaaS \u670d\u52a1\u4f9b\u666e\u901a\u7269\u8054\u7f51\u7528\u6237\u4f7f\u7528\uff0c\u5feb\u901f\u8fde\u63a5\u8bbe\u5907\uff0c\u6784\u5efa\u7528\u6237\u573a\u666f\u3002\n\u540c\u65f6\u4e5f\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u65b9\u4fbf\u7684\u4e3a\u66f4\u591a\u573a\u666f\u521b\u5efa\u89e3\u51b3\u2f45\u65b9\u6848\uff0c\u6280\u672f\u4f9b\u5e94\u5546\u53ef\u4e0e\u7269\u8054\u2f79\u7f51 PaaS \u5408\u4f5c\u4ee5\u63a5\u89e6\u66f4\u66f4\u2f34\u5e7f\u6cdb\u7684\u5ba2\u6237\uff0c\n\u5236\u9020\u5546\u53ef\u4ee5\u66f4\u66f4\u5feb\u901f\u5bf9\u63a5\u5e02\u573a\uff0c\u964d\u4f4e\u603b\u6210\u672c\u3002"),(0,o.kt)("p",null,"tKeel \u5e73\u53f0\u57fa\u4e8e\u591a\u79df\u6237\u67b6\u6784\u8bbe\u8ba1\u3002\u591a\u79df\u6237\u662f\u4e00\u79cd\u8f6f\u4ef6\u67b6\u6784\u6280\u672f\uff0c\u662f\u5b9e\u73b0\u5982\u4f55\u5728\u591a\u7528\u6237\u73af\u5883\u4e0b\uff08\u6b64\u5904\u7684\u591a\u7528\u6237\u4e00\u822c\u662f\u9762\u5411\u4f01\u4e1a\u7528\u6237\uff0c\u56e0\u6b64\u62bd\u8c61\u51fa\u79df\u6237\u7684\u6982\u5ff5\uff0c\u79df\u6237\u5c31\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u7528\u6237\u7a7a\u95f4\u7684\u610f\u601d\uff09\n\u5171\u7528\u76f8\u540c\u7684\u7cfb\u7edf\u6216\u7a0b\u5e8f\u7ec4\u4ef6\uff0c\u5e76\u4e14\u53ef\u786e\u4fdd\u5404\u7528\u6237\u95f4\u6570\u636e\u7684\u9694\u79bb\u6027\u3002"),(0,o.kt)("p",null,"\u5e73\u53f0\u9ed8\u8ba4\u7528\u6237\u6709\uff1a\u7cfb\u7edf\u7ba1\u7406\u5458\u3001\u79df\u6237\u7ba1\u7406\u5458\u4ee5\u53ca\u79df\u6237\u7528\u6237\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7ba1\u7406\u5458\uff1a\u8d1f\u8d23\u7ba1\u7406\u5e73\u53f0\u7cfb\u7edf\u7684\u4eba\u5458\uff0c\u6709\u7ba1\u7406\u63d2\u4ef6\u3001\u8bbe\u7f6e\u5e73\u53f0\u3001\u7ba1\u7406\u79df\u6237\u7b49\u6743\u9650\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u79df\u6237\u7ba1\u7406\u5458\uff1a\u7cfb\u7edf\u7ba1\u7406\u5458\u521b\u5efa\u79df\u6237\u7a7a\u95f4\u65f6\u9ed8\u8ba4\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u7ba1\u7406\u5458\uff0c\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u7ba1\u7406\u79df\u6237\u7a7a\u95f4\u5185\u7684\u7528\u6237\uff0c\u7528\u6237\u6743\u9650\uff0c\u6743\u9650\u5206\u914d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u79df\u6237\u7528\u6237\uff1a\u8d1f\u8d23\u5177\u4f53\u7684\u529f\u80fd\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u6574\u4e2a\u5e73\u53f0\u7684\u529f\u80fd\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c\u4e00\u4e2a\u662f\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\u7684\u7ba1\u7406\u5e73\u53f0\uff0c\u4ee5\u53ca\u79df\u6237\u7ba1\u7406\u5458\u548c\u79df\u6237\u7528\u6237\u4f7f\u7528\u7684\u79df\u6237\u5e73\u53f0\u3002"),(0,o.kt)("h2",{id:"\u7ba1\u7406\u5e73\u53f0"},"\u7ba1\u7406\u5e73\u53f0"),(0,o.kt)("p",null,"\u7ba1\u7406\u5e73\u53f0\u4f5c\u4e3a\u8fd0\u7ef4\u5e73\u53f0\u4f9b\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\uff0c\u4e3b\u8981\u529f\u80fd\u6709\u63d2\u4ef6\u7ba1\u7406\u3001\u79df\u6237\u7ba1\u7406\u3001\u5e73\u53f0\u8bbe\u7f6e\u3001\u670d\u52a1\u76d1\u63a7\u7b49\u529f\u80fd\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u7ba1\u7406\u529f\u80fd\u5305\u62ec\u65b0\u589e\u63d2\u4ef6\u6e90\u3001\u5b89\u88c5\u63d2\u4ef6\u3001\u5378\u8f7d\u63d2\u4ef6\u3001\u5347\u7ea7\u63d2\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u79df\u6237\u7ba1\u7406\u529f\u80fd\u5305\u62ec\u65b0\u589e\u79df\u6237\u7a7a\u95f4\u3001\u5220\u9664\u79df\u6237\u7a7a\u95f4\u3001\u79df\u6237\u7ba1\u7406\u5458\u91cd\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u8bbe\u7f6e\u529f\u80fd\u5305\u62ec\u8bbe\u7f6e\u5e73\u53f0\u914d\u8272\u3001\u8bbe\u7f6eLogo\u3001\u56fe\u6807\u3001\u767b\u5f55\u9875\u9762\u7b49\u529f\u80fd\u3002")),(0,o.kt)("h2",{id:"\u79df\u6237\u5e73\u53f0"},"\u79df\u6237\u5e73\u53f0"),(0,o.kt)("p",null,"\u79df\u6237\u5e73\u53f0\u4f5c\u4e3a\u5206\u914d\u7ed9\u5177\u4f53\u7684\u79df\u6237\u4f7f\u7528\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u79df\u6237\u7ba1\u7406\u5458\u8d1f\u8d23\u542f\u7528\u63d2\u4ef6\u3001\u505c\u7528\u63d2\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u79df\u6237\u7ba1\u7406\u5458\u8d1f\u8d23\u7ba1\u7406\u89d2\u8272\u3001\u89d2\u8272\u6743\u9650\u4ee5\u53ca\u5206\u914d\u89d2\u8272\u7ed9\u5bf9\u5e94\u7528\u6237\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u79df\u6237\u7ba1\u7406\u5458\u4ee5\u53ca\u79df\u6237\u7528\u6237\u4f7f\u7528\u63d2\u4ef6\u7684\u5404\u79cd\u80fd\u529b\u5171\u540c\u6784\u5efa\u4e1a\u52a1\u7cfb\u7edf\u6240\u8981\u7684\u5404\u7c7b\u529f\u80fd\u3002")))}d.isMDXComponent=!0},63643:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/system_architecture-a0fa3f16e9492c56bfad519a3ad3205e.png"}}]);