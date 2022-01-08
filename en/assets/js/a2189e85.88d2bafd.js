"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4024],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,m=d["".concat(p,".").concat(s)]||d[s]||k[s]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(3117),l=n(102),o=(n(7294),n(3905)),a=["components"],i={sidebar_position:1,title:"tKeel \u63d2\u4ef6"},p="\u6982\u89c8",c={unversionedId:"developer_cookbook/tkeel_plugin/overview",id:"developer_cookbook/tkeel_plugin/overview",title:"tKeel \u63d2\u4ef6",description:"\u63d2\u4ef6\u5728 tKeel \u4e2d\u662f\u6781\u4e3a\u91cd\u8981\u7684\u3002",source:"@site/docs/developer_cookbook/tkeel_plugin/overview.md",sourceDirName:"developer_cookbook/tkeel_plugin",slug:"/developer_cookbook/tkeel_plugin/overview",permalink:"/en/developer_cookbook/tkeel_plugin/overview",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/tkeel_plugin/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"tKeel \u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"API Special Parameters",permalink:"/en/developer_cookbook/core/specs/api-special-parameter"},next:{title:"OpenAPI",permalink:"/en/developer_cookbook/tkeel_plugin/openapi"}},u=[{value:"\u521b\u5efa\u63d2\u4ef6",id:"\u521b\u5efa\u63d2\u4ef6",children:[],level:2},{value:"\u63d2\u4ef6\u4ea4\u4e92",id:"\u63d2\u4ef6\u4ea4\u4e92",children:[],level:2},{value:"\u63d2\u4ef6\u6269\u5c55\u70b9",id:"\u63d2\u4ef6\u6269\u5c55\u70b9",children:[],level:2},{value:"\u63d2\u4ef6\u79df\u6237\u6743\u9650",id:"\u63d2\u4ef6\u79df\u6237\u6743\u9650",children:[],level:2}],k={toc:u};function d(e){var t=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,o.kt)("p",null,"\u63d2\u4ef6\u5728 tKeel \u4e2d\u662f\u6781\u4e3a\u91cd\u8981\u7684\u3002"),(0,o.kt)("p",null,"tKeel \u5b98\u65b9\u63d0\u4f9b\u4e86\u7269\u8054\u7f51\u7684\u901a\u7528\u529f\u80fd\u7684\u63d2\u4ef6\uff0c\u4f46\u662f\u5bf9\u4e8e\u5b9e\u9645\u573a\u666f\u4e2d\uff0c\u67d0\u4e9b\u7279\u6b8a\u9700\u6c42\u5f80\u5f80\u65e0\u6cd5\u901a\u8fc7\u901a\u7528\u529f\u80fd\u5f97\u5230\u6700\u4f18\u7684\u89e3\u51b3\uff0c\u8fd9\u65f6 tKeel \u7684\u7528\u6237\u5219\u53ef\u4ee5\u5feb\u901f\u7684\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6\u5b9a\u5236\u5316\u7684\u53bb\u89e3\u51b3\u81ea\u5df1\u6240\u9047\u5230\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u4e0a\u5c42\u7528\u6237\u800c\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7\u5206\u4eab\u81ea\u5df1\u5236\u4f5c\u7684\u63d2\u4ef6\u53bb\u5e2e\u52a9\u5176\u4ed6\u793e\u533a\u4e2d\u4f7f\u7528 tKeel \u7684\u7528\u6237\u53bb\u73a9\u8f6c\u7269\u8054\u7f51\uff0c\u53bb\u505a\u5f88\u591a\u66f4\u9177\u7684\u4e8b\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u603b\u7ed3\u4e86\u4e0b\u5728\u5f00\u53d1 tKeel \u63d2\u4ef6\u65f6\uff0c\u5f00\u53d1\u8005\u7ecf\u5e38\u4f1a\u95ee\u81ea\u5df1\u7684\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6211\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u63d2\u4ef6\uff1f"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u5982\u4f55\u5728\u5f00\u53d1\u7684\u63d2\u4ef6\u4e2d\u8c03\u7528\u5e73\u53f0\u7684\u529f\u80fd\uff1f"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u5982\u4f55\u5229\u7528\u5e73\u53f0\u7684\u6269\u5c55\u529f\u80fd\u4e3a\u5f00\u53d1\u7684\u63d2\u4ef6\u9884\u7559\u6269\u5c55\u70b9\uff1f"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u5982\u4f55\u5b9e\u73b0\u5176\u4ed6\u63d2\u4ef6\u7684\u6269\u5c55\uff1f"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u5982\u4f55\u4f7f\u5f00\u53d1\u7684\u63d2\u4ef6\u63a5\u5165\u5230 tKeel \u7684\u79df\u6237\u6743\u9650\u63a7\u5236\u4e2d\uff1f")),(0,o.kt)("h2",{id:"\u521b\u5efa\u63d2\u4ef6"},"\u521b\u5efa\u63d2\u4ef6"),(0,o.kt)("p",null,"tKeel \u7684\u63d2\u4ef6\u5f00\u53d1\u5341\u5206\u7b80\u5355\uff0ctKeel \u4ec5\u8981\u6c42\u63d2\u4ef6\u9075\u5b88 ",(0,o.kt)("a",{parentName:"p",href:"/en/developer_cookbook/tkeel_plugin/openapi"},(0,o.kt)("strong",{parentName:"a"},"OpenAPI"))," \u89c4\u8303\u5373\u53ef\uff0c\u540c\u65f6\u6211\u4eec\u501f\u52a9\u4e86 dapr \u7684\u80fd\u529b\uff0c\u8ba9\u5f00\u53d1\u8005\u65e0\u9700\u62c5\u5fe7 runtime \u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u4f7f\u7528\u81ea\u5df1\u6700\u719f\u6089\u548c\u6700\u4e60\u60ef\u7684\u7f16\u7a0b\u8bed\u8a00\u8fdb\u884c\u5f00\u53d1\uff0c\u8fd9\u53ef\u4ee5\u6709\u6548\u5730\u964d\u4f4e\u5c06\u5df2\u6709\u7cfb\u7edf\u6216\u5e94\u7528\u6539\u9020\u4e3a tKeel \u63d2\u4ef6\u7684\u96be\u5ea6\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6781\u4f73\u7684\u811a\u624b\u67b6\u5de5\u5177 -- ",(0,o.kt)("a",{parentName:"p",href:"/en/developer_cookbook/tools/artisan"},(0,o.kt)("strong",{parentName:"a"},"Artisan")),"\uff0c\u901a\u8fc7\u5de5\u5177\u6211\u4eec\u53ef\u4ee5\u4ece\u96f6\u5f00\u59cb\u5feb\u901f\u7684\u6784\u9020\u4e00\u4e2a tKeel \u63d2\u4ef6\u7684 go \u9879\u76ee\u6a21\u677f\uff08\u8be6\u60c5\u70b9\u51fb",(0,o.kt)("a",{parentName:"p",href:"/en/developer_cookbook/tkeel_plugin/create"},"\u53c2\u8003"),"\uff09\u3002"),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u4ea4\u4e92"},"\u63d2\u4ef6\u4ea4\u4e92"),(0,o.kt)("p",null,"tKeel \u63d2\u4ef6\u662f\u5e73\u7ea7\u5173\u7cfb\uff0c\u5df2\u7ecf\u5b89\u88c5\u5e76\u6ce8\u518c\u7684\u63d2\u4ef6\u5c31\u662f\u4e3a\u5e73\u53f0\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\uff0c\u5373\u6269\u5c55\u4e86\u5e73\u53f0\u7684\u529f\u80fd\u3002\u63d2\u4ef6\u4e0e\u63d2\u4ef6\u95f4\u7684\u8c03\u7528\u5176\u5b9e\u5c31\u662f\u63d2\u4ef6\u8c03\u7528\u5e73\u53f0\u7684\u67d0\u4e2a\u529f\u80fd\u3002\u5bf9\u4e8e\u5728 Core \u4e2d\u6d41\u8f6c\u7684\u6570\u636e\u5219\u901a\u8fc7 Core \u4e0e\u63d2\u4ef6\u95f4\u5efa\u7acb\u7684 channel \u76f4\u63a5\u4ea4\u4e92\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image plugin invoke",src:n(1081).Z})),(0,o.kt)("p",null,"\u5728 tKeel \u4e2d\uff0c\u6838\u5fc3\u7ec4\u4ef6\u5747\u62e5\u6709\u81ea\u5df1\u7684 dapr \u8fb9\u8f66\uff0c\u5e76\u901a\u8fc7\u8fb9\u8f66\u7684\u670d\u52a1\u8c03\u7528\u6784\u5efa\u5757\u63d0\u4f9b\u670d\u52a1\uff0c\u6700\u540e\u7edf\u4e00\u7531 keel \u7f51\u5173\u8fdb\u884c\u4ee3\u7406\u3002\u5bf9\u4e8e tKeel \u63d2\u4ef6\u800c\u8a00\uff0c\u901a\u8fc7 CLI \u5b89\u88c5\u7684\u63d2\u4ef6\u5c06\u4f1a\u88ab\u9690\u5f0f\u5730\u542f\u52a8\u4e00\u4e2a\u5bf9\u5e94\u7684 dapr \u8fb9\u8f66\uff0c\u540c\u65f6\u901a\u8fc7\u670d\u52a1\u8c03\u7528\u6784\u5efa\u5757\u8bbf\u95ee\u63d2\u4ef6\u6240\u63d0\u4f9b\u7684\u670d\u52a1\uff0c\u4e14\u901a\u8fc7\u5bf9\u5e94\u7684\u914d\u7f6e\u4ee5 mTLS \u9650\u5236\u4ec5 keel \u548c rudder \u7684\u8fb9\u8f66\u80fd\u591f\u8bbf\u95ee\u5b89\u88c5\u7684\u63d2\u4ef6\u7684\u8fb9\u8f66\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"tKeel \u4e2d\u6240\u6709\u529f\u80fd\u5747\u901a\u8fc7 Keel \u8fdb\u884c\u4ee3\u7406\uff0c\u63d2\u4ef6\u8bbf\u95ee tKeel \u5373\u4f7f\u7528 dapr \u7684\u670d\u52a1\u8c03\u7528\u6784\u5efa\u5757\u8bbf\u95ee app id \u4e3a Keel \u7684 dapr \u670d\u52a1\u3002"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"curl\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"http://${DAPR_HTTP_ADDR}/v1.0/invoke/keel/method/${METHOD}"))),(0,o.kt)("p",{parentName:"blockquote"},"Keel \u7684\u57fa\u4e8e method \u4e2d\u8def\u5f84\u8fdb\u884c\u8def\u7531\uff0c\u5206\u4e3a\u4e24\u4e2a root path\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"image keel apis",src:n(79).Z})),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"image keel addons",src:n(6246).Z}))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image plugin mTLS",src:n(4871).Z})),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u6269\u5c55\u70b9"},"\u63d2\u4ef6\u6269\u5c55\u70b9"),(0,o.kt)("p",null,"tKeel \u63d2\u4ef6\u4e3a\u63d2\u4ef6\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u63d2\u4ef6\u7684\u6269\u5c55\u70b9\u529f\u80fd\uff0c\u80fd\u591f\u4f7f\u63d2\u4ef6\u5229\u7528 tKeel \u7684\u63d2\u4ef6\u673a\u5236\u52a8\u6001\u7684\u6269\u5c55\u6240\u9700\u7684\u529f\u80fd\u70b9\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image plugin addons",src:n(9138).Z})),(0,o.kt)("p",null,"\u5982\u56fe\u4e0a\u6240\u793a\uff1a"),(0,o.kt)("p",null,"\u77ed\u4fe1\u63d2\u4ef6\u63d0\u4f9b\u4e86\u77ed\u4fe1\u53d1\u9001\u524d\u7684\u68c0\u67e5\u6269\u5c55\u70b9\uff0c\u90a3\u4e48\u5176\u4ed6\u63d2\u4ef6\u53ef\u4ee5\u6ce8\u518c\u8be5\u6269\u5c55\u70b9\u63d0\u4f9b\u6821\u9a8c\u529f\u80fd\uff0c\u8d1f\u8d23\u68c0\u67e5\u77ed\u4fe1\u53d1\u9001\u524d\u7684\u6587\u672c\u68c0\u67e5\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f53\u77ed\u4fe1\u63d2\u4ef6\u8c03\u7528 tKeel \u5e73\u53f0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/addons/beforSendCallback")," \u5e76\u53d1\u9001\u76f8\u5173\u5185\u5bb9\uff0ctKeel \u5c06\u4f1a\u68c0\u7d22\u5f53\u524d\u7684\u52a8\u6001\u8def\u7531\u8868\u4e2d\u77ed\u4fe1\u63d2\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"beforSendCallback")," \u6269\u5c55\u70b9\u662f\u5426\u88ab\u5176\u4ed6\u63d2\u4ef6\u5b9e\u73b0\uff0c\u5982\u672a\u5b9e\u73b0 \u8fd4\u56de HTTP \u72b6\u6001\u7801 404\uff0c\u5982\u5df2\u5b9e\u73b0\uff0c\u5219\u8f6c\u53d1\u5230\u5bf9\u5e94\u63d2\u4ef6\u7684\u5bf9\u5e94\u7aef\u70b9\uff0c\u5e76\u8fd4\u56de\u8c03\u7528\u7ed3\u679c\u3002")),(0,o.kt)("p",null,"\u5982\u9700\u5b9e\u73b0\u77ed\u4fe1\u63d2\u4ef6\u7684\u6269\u5c55\u70b9\uff0c\u5728\u63d2\u4ef6\u6ce8\u518c\u65f6\uff0c\u4ee5 ",(0,o.kt)("em",{parentName:"p"},"OpenAPI")," \u89c4\u8303\u54cd\u5e94 ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/identify")," \u7aef\u70b9\uff0c\u5e76\u6839\u636e\u88ab\u6269\u5c55\u63d2\u4ef6\u6269\u5c55\u70b9\u68c0\u67e5\u53bb\u6b63\u786e\u5b9e\u73b0\u6269\u5c55\u70b9\u7aef\u70b9\u5373\u53ef\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image plugin addons implement",src:n(2960).Z})),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u79df\u6237\u6743\u9650"},"\u63d2\u4ef6\u79df\u6237\u6743\u9650"))}d.isMDXComponent=!0},6246:function(e,t,n){t.Z=n.p+"assets/images/keel_addons-933013e5a8d5671a1e4d7f9c4366657b.png"},79:function(e,t,n){t.Z=n.p+"assets/images/keel_apis-b4b4cf2af131bb171a699c58a6c3e80d.png"},9138:function(e,t,n){t.Z=n.p+"assets/images/plugin_addons-0f7ea07789a3990821f7e6704137766d.png"},2960:function(e,t,n){t.Z=n.p+"assets/images/plugin_addons_implement-571b353c23d343ed6d8998b8c0991c45.png"},1081:function(e,t,n){t.Z=n.p+"assets/images/plugin_invoke-47c5e3aaf6941a1e138d9de51076f1a5.png"},4871:function(e,t,n){t.Z=n.p+"assets/images/plugin_mTLS-5701f2226a23d09aaf6118950c4010ec.png"}}]);