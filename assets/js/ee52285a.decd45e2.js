"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=o(n),m=l,c=k["".concat(d,".").concat(m)]||k[m]||s[m]||r;return n?a.createElement(c,p(p({ref:t},u),{},{components:n})):a.createElement(c,p({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:20,title:"OPENAPI"},p=void 0,i={unversionedId:"develop_guide/plugin_develop/plugin_openapi",id:"develop_guide/plugin_develop/plugin_openapi",title:"OPENAPI",description:"\u4ecb\u7ecd",source:"@site/docs/develop_guide/plugin_develop/plugin_openapi.md",sourceDirName:"develop_guide/plugin_develop",slug:"/develop_guide/plugin_develop/plugin_openapi",permalink:"/develop_guide/plugin_develop/plugin_openapi",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/plugin_develop/plugin_openapi.md",tags:[],version:"current",lastUpdatedAt:1655200199,formattedLastUpdatedAt:"2022\u5e746\u670814\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"OPENAPI"},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f\u63d2\u4ef6",permalink:"/develop_guide/plugin_develop/plugin_overview"},next:{title:"\u529f\u80fd\u63d2\u4ef6\u5f00\u53d1",permalink:"/develop_guide/plugin_develop/function_develop"}},d={},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"Identify \u7aef\u70b9",id:"identify-\u7aef\u70b9",level:3},{value:"Status \u7aef\u70b9",id:"status-\u7aef\u70b9",level:3},{value:"Tenant-enable \u7aef\u70b9",id:"tenant-enable-\u7aef\u70b9",level:3},{value:"Tenant-disable \u7aef\u70b9",id:"tenant-disable-\u7aef\u70b9",level:3},{value:"Addons-Identify \u7aef\u70b9",id:"addons-identify-\u7aef\u70b9",level:3},{value:"OpenAPI",id:"openapi-define",level:2},{value:"/v1/identify (Required)",id:"identify",level:3},{value:"/v1/status (Required)",id:"status",level:3},{value:"/v1/tenant/enable (Required)",id:"tenant-enable",level:3},{value:"/v1/tenant/disable (Required)",id:"tenant-disable",level:3},{value:"/v1/addons/identify (Optional)",id:"addons-identify",level:3}],u={toc:o};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"OpenAPI \u662f\u4e00\u5957\u7528\u4e8e tKeel \u5e73\u53f0\u4e2d\u63d2\u4ef6\u4e0e\u5e73\u53f0\u8fdb\u884c\u4ea4\u4e92\u7684\u4e00\u5957 HTTP \u89c4\u8303\u3002\u901a\u8fc7\u5b9a\u4e49",(0,l.kt)("em",{parentName:"p"},"\u6ce8\u518c"),"\u3001",(0,l.kt)("em",{parentName:"p"},"\u79df\u6237\u53d8\u66f4"),"\u7b49\u52a8\u4f5c\u548c",(0,l.kt)("em",{parentName:"p"},"\u72b6\u6001\u68c0\u67e5"),"\u63a5\u53e3\u5b9e\u73b0\u5bf9 tKeel \u5e73\u53f0\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u5728\u4e0d\u540c\u751f\u547d\u5468\u671f\u4e2d\u5e73\u53f0\u4e0e OpenAPI \u8fdb\u884c\u4ea4\u4e92\u6765\u7ba1\u7406\u63d2\u4ef6\u7684\u884c\u4e3a\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"API \u5b9a\u4e49\u67e5\u770b\uff1a",(0,l.kt)("a",{parentName:"p",href:"#openapi-define"},"OpenAPI \u5b9a\u4e49"))),(0,l.kt)("h3",{id:"identify-\u7aef\u70b9"},"Identify \u7aef\u70b9"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#identify"},"Identify"),"  \u63a5\u53e3\u662f\u63d2\u4ef6\u5728\u88ab\u5b89\u88c5\u8fdb\u5e73\u53f0\u540e\uff0c\u5e73\u53f0\u7b49\u5f85\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001\u4e3a RUNNING \u65f6\u8bbf\u95ee\u7684\u63a5\u53e3\u3002"),(0,l.kt)("p",null,"\u8be5\u63a5\u53e3\u4e3b\u8981\u662f\u5e73\u53f0\u5411\u63d2\u4ef6\u83b7\u53d6\u4e00\u4e9b\u5fc5\u8981\u7684\u4fe1\u606f\u548c\u63d2\u4ef6\u8c03\u7528\u5e73\u53f0\u90e8\u5206\u529f\u80fd\u6240\u5fc5\u987b\u5b9a\u4e49\u7684\u6743\u9650\u3001\u83dc\u5355\u3001\u6269\u5c55\u70b9\u6216\u8005\u8ba1\u91cf\u8d44\u6e90\u7b49\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u8be5\u63a5\u53e3\uff0c\u5e73\u53f0\u5c06\u63d2\u4ef6\u9700\u8981\u5e73\u53f0\u5e2e\u5fd9\u6269\u5c55\u7684\u529f\u80fd\u70b9\u5728\u5e73\u53f0\u4e2d\u5b9a\u4e49\u548c\u521d\u59cb\u5316\uff0c\u63d2\u4ef6\u624d\u80fd\u5728\u5e73\u53f0\u4e2d\u8fd0\u884c\u8d77\u6765\u3002"),(0,l.kt)("h3",{id:"status-\u7aef\u70b9"},"Status \u7aef\u70b9"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#status"},"Status")," \u63a5\u53e3\u662f\u63d2\u4ef6\u7684\u72b6\u6001\u63a5\u53e3\uff0c\u901a\u8fc7\u8bbf\u95ee\u8be5\u63a5\u53e3\uff0c\u5e73\u53f0\u53ef\u4ee5\u83b7\u53d6\u5230\u63d2\u4ef6\u5f53\u524d\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u5e76\u6839\u636e\u8fd0\u884c\u72b6\u6001\u901a\u77e5\u7f51\u5173\u51b3\u5b9a\u662f\u5426\u9700\u8981\u670d\u52a1\u964d\u7ea7\u7b49\u6d41\u91cf\u63a7\u5236\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"tenant-enable-\u7aef\u70b9"},"Tenant-enable \u7aef\u70b9"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#tenant-enable"},"Tenant-enable")," \u63a5\u53e3\u662f\u5e73\u53f0\u4e2d\u7684\u79df\u6237\u542f\u7528\u63d2\u4ef6\u65f6\uff0c\u5e73\u53f0\u4e3b\u52a8\u8c03\u7528\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u5c06\u79df\u6237\u7684\u5fc5\u8981\u4fe1\u606f\u4f20\u9012\u7ed9\u63d2\u4ef6\uff0c\u5e0c\u671b\u63d2\u4ef6\u80fd\u591f\u5728\u81ea\u8eab\u5185\u90e8\u5b8c\u6210\u5bf9\u5f53\u524d\u542f\u7528\u7684\u79df\u6237\u8fdb\u884c\u521d\u59cb\u5316\u6570\u636e\u6216\u8005\u6062\u590d\u6570\u636e\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5e73\u53f0\u7684\u79df\u6237\u7ba1\u7406\u662f\u4e00\u5957\u5bbd\u677e\u7684\u534f\u5b9a\uff0c\u63d2\u4ef6\u9700\u81ea\u8eab\u7ef4\u62a4\u79df\u6237\u7684\u6570\u636e\uff0c\u79df\u6237\u6570\u636e\u7684\u9694\u79bb\u9700\u8981\u63d2\u4ef6\u81ea\u8eab\u5904\u7406\u3002\u5e73\u53f0\u4ec5\u5728\u7f51\u5173\u5904\u5bf9\u672a\u542f\u7528\u79df\u6237\u7684\u8bbf\u95ee\u8fdb\u884c\u9650\u5236\u3002")),(0,l.kt)("h3",{id:"tenant-disable-\u7aef\u70b9"},"Tenant-disable \u7aef\u70b9"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#tenant-disable"},"Tenant-disable")," \u63a5\u53e3\u662f\u5e73\u53f0\u4e2d\u79df\u6237\u505c\u7528\u63d2\u4ef6\u65f6\uff0c\u5e73\u53f0\u4e3b\u52a8\u8c03\u7528\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u5c06\u79df\u6237\u7684\u5fc5\u8981\u4fe1\u606f\u4f20\u9012\u7ed9\u63d2\u4ef6\uff0c\u5e0c\u671b\u63d2\u4ef6\u80fd\u591f\u5728\u81ea\u8eab\u5185\u90e8\u5b8c\u6210\u5bf9\u5f53\u524d\u505c\u7528\u7684\u79df\u6237\u8fdb\u884c\u5220\u9664\u6570\u636e\u6216\u8005\u5907\u4efd\u6570\u636e\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"addons-identify-\u7aef\u70b9"},"Addons-Identify \u7aef\u70b9"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#addons-identify"},"Addons-identify")," \u63a5\u53e3\u662f\u7528\u4e8e\u6269\u5c55\u70b9\u7684\u786e\u8ba4\u6240\u4f7f\u7528\u7684\u3002\u7528\u4e8e\u901a\u77e5\u63d2\u4ef6\u6269\u5c55\u70b9\u5df2\u88ab\u5b9e\u73b0\uff0c\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"addons_identify",src:n(46035).Z,width:"1182",height:"265"})),(0,l.kt)("h2",{id:"openapi-define"},"OpenAPI"),(0,l.kt)("p",null,"\u5e73\u53f0\u63d2\u4ef6\u5fc5\u987b\u5b9e\u73b0\u4ee5\u4e0b\u7aef\u70b9"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u7aef\u70b9\u8c03\u7528\u65f6\u9ed8\u8ba4\u4f20\u5165\n",(0,l.kt)("inlineCode",{parentName:"p"},'header=>Authorization:{"user_id":"admin"}')),(0,l.kt)("p",null,"\u7aef\u70b9\u54cd\u5e94\u901a\u7528\u90e8\u5206\uff1a"),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret":0, // \u8fd4\u56de\u7801 0 --\x3e ok -1 --\x3e fail\n    "msg":"ok" // \u6d88\u606f \u6210\u529f\u9ed8\u8ba4ok \u9519\u8bef\u60c5\u51b5\u4e0b\u643a\u5e26\u9519\u8bef\u4fe1\u606f\n}\n')),(0,l.kt)("h3",{id:"identify"},"/v1/identify (Required)"),(0,l.kt)("p",null,"\u6ce8\u518c\u65f6\u8c03\u7528\u6b64\u63d2\u4ef6\u63a5\u53e3\uff0c\u7528\u4e8e\u9a8c\u8bc1\u63d2\u4ef6\u7684\u8eab\u4efd\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get /v1/identify\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "res": {\n        "ret": 0,\n        "msg":"ok",\n    },\n    "plugin_id": "yunify-xxx", // \u63d2\u4ef6\u540d\n    "version": "1.0", // \u63d2\u4ef6\u7248\u672c\n    "tkeel_version": "v0.4.0", // \u63d2\u4ef6\u5b89\u88c5\u7684 tkeel \u5e73\u53f0\u7248\u672c\u3002\n    "addons_points": [ // \u63d2\u4ef6\u81ea\u8eab\u7684\u6269\u5c55\u70b9\u53ca\u8bf4\u660e\uff08\u53ef\u9009\uff09\n        {\n            "addons_point": "create_plugins",\n            "desc": "\u6ce8\u518c\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u8fd4\u56de\u503cdata\u5185\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9"\n        },\n        {\n            "addons_point": "install_plugins",\n            "desc": "\u5b89\u88c5\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u8fd4\u56de\u503cdata\u5185\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9"\n        },\n        {\n            "addons_point": "update_plugins",\n            "desc": "\u5b89\u88c5\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u8fd4\u56de\u503cdata\u5185\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9"\n        },\n        {\n            "addons_point": "unstall_plugins",\n            "desc": "\u5378\u8f7d\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u65e0\u8fd4\u56de\u503c"\n        }\n    ],\n    "implemented_plugin": [ // \u5b9e\u73b0\u7684\u63d2\u4ef6\u6269\u5c55\u70b9\uff08\u53ef\u9009\uff09\n        {\n            "id": "xxxx", // \u88ab\u6269\u5c55\u7684\u63d2\u4ef6\u7684\u540d\u5b57\n            "version": "1.0", // \u88ab\u6269\u5c55\u63d2\u4ef6\u7684\u7248\u672c\n            "addons": [\n                {\n                    "addons_point": "xxxx", // \u6269\u5c55\u70b9\u540d\u79f0\n                    "implemented_endpoint": "xxx" // \u5bf9\u5e94\u5b9e\u73b0\u7aef\u70b9\u540d\u79f0\uff08\u56de\u8c03\u8def\u5f84\uff09 \u6b64\u8def\u5f84\u5fc5\u987b\u6ce8\u518c\u5230\u5e73\u53f0\u624d\u80fd\u88ab\u8c03\u7528\n                }\n            ]\n        }\n    ],\n    "entries": [ // \u57fa\u5ea7\u8bbf\u95ee\u83dc\u5355\uff08\u53ef\u9009\uff09\n        {\n            "id":"xx", // \u5165\u53e3 id\n            "name":"xxx", // \u5165\u53e3 name \u663e\u793a\u5728\u83dc\u5355\u4e0a\u7684\u540d\u5b57\n            "icon":"xxx", // \u5177\u4f53\u7684 icon\n            "path":"xxx/xxx", // \u8def\u5f84\n            "entry":"xxx/xxx/xxx",// \u8d44\u6e90\u8def\u5f84\n            "children":[] // \u5b50 entry\n        },\n    ],\n    "dependence":[ // \u4f9d\u8d56\u7684\u63d2\u4ef6\uff0c\u5b89\u88c5\u65f6\u4f1a\u68c0\u67e5\u662f\u5426\u5b89\u88c5\uff0c\u542f\u7528\u65f6\u5c06\u81ea\u52a8\u542f\u7528\u6240\u6709\u4f9d\u8d56\u7684\u63d2\u4ef6\uff08\u53ef\u9009\uff09\n        {\n            "id":"xxx", // \u63d2\u4ef6ID\n            "verison":"xxx", // \u63d2\u4ef6\u7248\u672c\n        },\n    ],\n    "permissions":[ // \u63d2\u4ef6\u58f0\u660e\u7684\u6743\u9650\uff0c\u53ef\u88ab\u6dfb\u52a0\u8fdb tKeel \u7684\u6743\u9650\u63a7\u5236\u4e2d\uff0c\u4e00\u79cd\u62bd\u8c61\u7684\u8d44\u6e90\uff08\u53ef\u9009\uff09\n        {   \n            "id":"XXX",// \u6743\u9650ID\uff0c\u540c\u7ea7\u6743\u9650\u552f\u4e00   \n            "name":"XDX",// \u6743\u9650\u540d\u79f0\uff0c\u663e\u793a\u7528\n            "dependences":[ // \u4f9d\u8d56\u7684\u6743\u9650\uff0c\u5f53\u6743\u9650\u88ab\u5141\u8bb8\u65f6\uff0c\u4f9d\u8d56\u7684\u6743\u9650\u4e5f\u88ab\u5141\u8bb8\n                "path":"AA/BB/CC", // \u4f9d\u8d56\u7684\u6743\u9650\u8def\u5f84\uff0c\u901a\u8fc7 \u63d2\u4ef6ID</\u7236\u7ea7ID>/\u6743\u9650ID \u7684\u683c\u5f0f\u6307\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u6743\u9650\u3002\n                "desc":" dafda", // \u63cf\u8ff0\u4fe1\u606f\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56\u4e4b\u7c7b\u7684\n            ],\n            "desc":"aaa", // \u6743\u9650\u7684\u63cf\u8ff0\u4fe1\u606f\n            "children":[], // \u5b50\u6743\u9650\u4fe1\u606f\n        },\n    ],\n}\n')),(0,l.kt)("h3",{id:"status"},"/v1/status (Required)"),(0,l.kt)("p",null,"\u65e0\u53c2\u6570\u8bf7\u6c42\uff0c\u5e73\u53f0\u4e0d\u5b9a\u65f6\u7684\u5bf9\u63d2\u4ef6\u8fdb\u884c\u72b6\u6001\u76d1\u6d4b\uff0c\u5982\u63d2\u4ef6\u8fd4\u56de\u5f02\u5e38\u6216\u672a\u54cd\u5e94\uff0c\u5219\u62e6\u622a\u5bf9\u4e8e\u8be5\u63d2\u4ef6\u7684\u76f8\u5173\u8c03\u7528\uff0c\u76f4\u81f3\u6062\u590d\u4e3a\u6b62\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get /v1/status\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret": 0,\n    "msg": "ok",\n    "status": "ACTIVE"\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"status \u72b6\u6001\u6709\u4e0b\u5217\u51e0\u79cd "),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"ACTIVE   --\x3e \u6b63\u5e38\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"STARTING --\x3e \u542f\u52a8\u4e2d \u7a0b\u5e8f\u6b63\u5728\u542f\u52a8"),(0,l.kt)("li",{parentName:"ul"},"STOPPING --\x3e \u505c\u6b62\u4e2d \u7a0b\u5e8f\u6b63\u5728\u505c\u6b62"),(0,l.kt)("li",{parentName:"ul"},"FAILED   --\x3e \u9519\u8bef \u7a0b\u5e8f\u81ea\u8eab\u9519\u8bef"))),(0,l.kt)("h3",{id:"tenant-enable"},"/v1/tenant/enable (Required)"),(0,l.kt)("p",null,"\u79df\u6237\u542f\u7528\u65f6\u7684\u4e3b\u52a8\u8c03\u7528\uff0c\u8c03\u7528\u76f8\u5173\u63d2\u4ef6\u5e76\u8ba4\u8bc1\u3002\u63d2\u4ef6\u5728\u6536\u5230\u6b64\u8bf7\u6c42\u65f6\uff0c\u6839\u636e\u79df\u6237ID\u548c\u989d\u5916\u6570\u636e\u8fdb\u884c\u5bf9\u65b0\u79df\u6237\u6570\u636e\u7684\u521d\u59cb\u5316\u7b49\u64cd\u4f5c\uff0c\u8fd4\u56de\u6b63\u786e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Post /v1/tenant/enable\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tenant_id":"a",\n    "extra":dafa\n}\n')),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "res": {\n        "ret":0,\n        "msg":"ok",\n    }\n}\n')),(0,l.kt)("h3",{id:"tenant-disable"},"/v1/tenant/disable (Required)"),(0,l.kt)("p",null,"\u79df\u6237\u505c\u7528\u65f6\u7684\u4e3b\u52a8\u8c03\u7528\uff0c\u8c03\u7528\u76f8\u5173\u63d2\u4ef6\u5e76\u8ba4\u8bc1\u3002\u63d2\u4ef6\u6536\u5230\u6b64\u8bf7\u6c42\u65f6\u9700\u8981\u5220\u9664\u79df\u6237\u7684\u6570\u636e\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002\u8fd4\u56de\u6b63\u786e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Post /v1/tenant/disable\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tenant_id":"a",\n    "extra":dafa\n}\n')),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "res":{\n        "ret":0,\n        "msg":"ok"\n    }\n}\n')),(0,l.kt)("h3",{id:"addons-identify"},"/v1/addons/identify (Optional)"),(0,l.kt)("p",null,"\u5e73\u53f0\u6709\u65b0\u63d2\u4ef6\u6ce8\u518c\uff0c\u4e14\u65b0\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5f53\u524d\u63d2\u4ef6\u7ed9\u51fa\u7684\u6269\u5c55\u70b9\u65f6\uff0c\u8c03\u7528\u5f53\u524d\u63d2\u4ef6\u6b64\u63a5\u53e3"),(0,l.kt)("p",null,"\u7528\u4e8e\u901a\u77e5\u5f53\u524d\u63d2\u4ef6\u6709\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5bf9\u5e94\u6269\u5c55\u70b9\uff0c\u9700\u81ea\u884c\u9a8c\u8bc1\u76f8\u5173\u63a5\u53e3\u662f\u5426\u53ef\u7528\uff0c\u5e76\u8fd4\u56de\u5e73\u53f0\u9a8c\u8bc1\u7ed3\u679c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Post /v1/addons/identify\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugin": {\n        "id": "axafd", // \u8bf7\u6c42\u63d2\u4ef6id\n        "version": "1.0" // \u7248\u672c\n    }, // \u65b0\u589e\u7684\u63d2\u4ef6\u7684\u540d\u79f0\u548c\u7248\u672c\n    "endpoint": [\n        {\n            "addons_point": "xxxx",\n            "endpoint": "xxxx"\n        }\n    ] // \u65b0\u589e\u63d2\u4ef6\u5b9e\u73b0\u7684\u7aef\u70b9\u548c\u76ee\u6807\n}\n')),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \xa0 \n    "res":{\n        "ret":0,\n        "msg":"ok"\n    }\n}\n')))}s.isMDXComponent=!0},46035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/addons_identify-5b2c1ff45bd796f950bfd067e54c9228.png"}}]);