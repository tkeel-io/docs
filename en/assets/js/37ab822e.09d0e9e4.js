"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6974],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>s});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),k=o(l),s=a,I=k["".concat(c,".").concat(s)]||k[s]||u[s]||i;return l?n.createElement(I,p(p({ref:t},d),{},{components:l})):n.createElement(I,p({ref:t},d))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,p=new Array(i);p[0]=k;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,p[1]=r;for(var o=2;o<i;o++)p[o]=l[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},49039:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=l(87462),a=(l(67294),l(3905));const i={sidebar_position:50,title:"\u63d2\u4ef6\u6269\u5c55\u5f00\u53d1"},p=void 0,r={unversionedId:"develop_guide/plugin_develop/plugin_extend",id:"develop_guide/plugin_develop/plugin_extend",title:"\u63d2\u4ef6\u6269\u5c55\u5f00\u53d1",description:"\u672c\u6587\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u8ba1\u7b97\u5668\u63d2\u4ef6\u6765\u5feb\u901f\u6f14\u793a tKeel \u5e73\u53f0\u63d2\u4ef6\u7684\u6269\u5c55\u529f\u80fd\u3002",source:"@site/docs/develop_guide/plugin_develop/plugin_extend.md",sourceDirName:"develop_guide/plugin_develop",slug:"/develop_guide/plugin_develop/plugin_extend",permalink:"/en/develop_guide/plugin_develop/plugin_extend",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/plugin_develop/plugin_extend.md",tags:[],version:"current",lastUpdatedAt:1655200199,formattedLastUpdatedAt:"Jun 14, 2022",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"\u63d2\u4ef6\u6269\u5c55\u5f00\u53d1"},sidebar:"developSidebar",previous:{title:"\u63d2\u4ef6\u6253\u5305\u5236\u4f5c\u6307\u5357",permalink:"/en/develop_guide/plugin_develop/plugin_chart"},next:{title:"Artisan",permalink:"/en/develop_guide/tools/artisan"}},c={},o=[{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"\u6269\u5c55\u70b9\u914d\u7f6e",id:"\u6269\u5c55\u70b9\u914d\u7f6e",level:3},{value:"\u6d41\u7a0b\u6f14\u793a",id:"\u6d41\u7a0b\u6f14\u793a",level:2},{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",level:3},{value:"Step 1. \u5b89\u88c5 tkeel-cal \u63d2\u4ef6",id:"step-1-\u5b89\u88c5-tkeel-cal-\u63d2\u4ef6",level:3},{value:"Step 2. \u5b89\u88c5 tkeel-cal-add \u63d2\u4ef6",id:"step-2-\u5b89\u88c5-tkeel-cal-add-\u63d2\u4ef6",level:3},{value:"Step 3. \u5378\u8f7d tkeel-cal-add \u63d2\u4ef6\uff0c\u5e76\u5b89\u88c5 tkeel-cal-mul \u63d2\u4ef6",id:"step-3-\u5378\u8f7d-tkeel-cal-add-\u63d2\u4ef6\u5e76\u5b89\u88c5-tkeel-cal-mul-\u63d2\u4ef6",level:3}],d={toc:o};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u8ba1\u7b97\u5668\u63d2\u4ef6\u6765\u5feb\u901f\u6f14\u793a ",(0,a.kt)("strong",{parentName:"p"},"tKeel")," \u5e73\u53f0\u63d2\u4ef6\u7684\u6269\u5c55\u529f\u80fd\u3002"),(0,a.kt)("h1",{id:"\u8bbe\u8ba1\u76ee\u6807"},"\u8bbe\u8ba1\u76ee\u6807"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u5f00\u53d1\u4e09\u4e2a\u63d2\u4ef6:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"tkeel-cal: \u8ba1\u7b97\u63d2\u4ef6\uff0c\u63d2\u4ef6\u63d0\u4f9b cal \u63a5\u53e3\uff0c\u5e76\u58f0\u660e calc-int-x-y \u6269\u5c55\u70b9\uff0c\u901a\u8fc7\u4e0d\u540c\u63d2\u4ef6\u6765\u5b9e\u73b0\u672c\u6269\u5c55\u70b9\uff0c\u5f53\u524d\u63a5\u53e3\u7684\u8fd4\u56de\u503c\u4e5f\u968f\u4e4b\u6539\u53d8\u3002"),(0,a.kt)("li",{parentName:"ol"},"tkeel-cal-add: \u52a0\u6cd5\u63d2\u4ef6\uff0c\u63d2\u4ef6\u63d0\u4f9b add \u63a5\u53e3\u6765\u5b9e\u73b0 tkeel-cal \u63d2\u4ef6\u7684 calc-int-x-y \u6269\u5c55\u70b9\uff0c\u901a\u8fc7\u5c06 x \u548c y \u76f8\u52a0\u518d\u8fd4\u56de\u5177\u4f53\u7684\u7ed3\u679c\u7ed9 tkeel-cal \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"tkeel-cal-mul: \u4e58\u6cd5\u63d2\u4ef6\uff0c\u63d2\u4ef6\u63d0\u4f9b mul \u63a5\u53e3\u6765\u5b9e\u73b0 tkeel-cal \u63d2\u4ef6\u7684 calc-int-x-y \u6269\u5c55\u70b9\uff0c\u901a\u8fc7\u5c06 x \u548c y\u76f8\u4e58\u5728\u8fd4\u56de\u5177\u4f53\u7684\u7ed3\u679c\u7ed9 tkeel-cal \u63d2\u4ef6\u3002")),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u6269\u5c55\u529f\u80fd\u4f9d\u8d56\u4e8eOpenAPI\u7684\u6269\u5c55\u673a\u5236\uff0c\u8be6\u7ec6\u5b9a\u4e49\u8bf7\u53c2\u9605 Addons-Identify(./plugin_openapi.md#addons-identify)\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image plugin addons",src:l(1441).Z,width:"1132",height:"403"})),(0,a.kt)("h3",{id:"\u6269\u5c55\u70b9\u914d\u7f6e"},"\u6269\u5c55\u70b9\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"tkeel-cal \u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"li"},"calc-int-x-y"),"\u6269\u5c55\u70b9")),(0,a.kt)("p",null,"\u5728 tkeel-cal \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/en/develop_guide/plugin_develop/plugin_openapi#openapi-define"},"OpenAPI")," \u4e2d\u58f0\u660e\u4e00\u4e2a\u6269\u5c55\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"calc-int-x-y")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc/tkeel-calc.py#L24-L29"',title:'"https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc/tkeel-calc.py#L24-L29"'},'"addons_points": [\n    {\n        "addons_point": "calc-int-x-y",\n        "desc": "\u8ba1\u7b97\u4f20\u5165\u7684 x \u548c y \u503c,x \u548c y \u5fc5\u987b\u662f int\u3002"\n    }\n]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"tkeel-cal-add \u58f0\u660e\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"calc-int-x-y")," \u6269\u5c55\u70b9")),(0,a.kt)("p",null,"\u5728 tkeel-cal-add \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/en/develop_guide/plugin_develop/plugin_openapi#openapi-define"},"OpenAPI")," \u4e2d\u58f0\u660e\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," \u7aef\u70b9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"calc-int-x-y")," \u6269\u5c55\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc-add/tkeel-calc-add.py#L23-L28"',title:'"https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc-add/tkeel-calc-add.py#L23-L28"'},'"addons": [\n    {\n        "addons_point": "calc-int-x-y",\n        "implemented_endpoint": "add"\n    }\n]\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"tkeel-cal-mul \u58f0\u660e\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"calc-int-x-y")," \u6269\u5c55\u70b9")),(0,a.kt)("p",null,"\u5728 tkeel-cal-mul \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/en/develop_guide/plugin_develop/plugin_openapi#openapi-define"},"OpenAPI")," \u4e2d\u58f0\u660e\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"mul")," \u7aef\u70b9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"calc-int-x-y")," \u6269\u5c55\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc-mul/tkeel-calc-mul.py#L23-L28"',title:'"https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc-mul/tkeel-calc-mul.py#L23-L28"'},'"addons": [\n    {\n        "addons_point": "calc-int-x-y",\n        "implemented_endpoint": "mul"\n    }\n]\n')),(0,a.kt)("h2",{id:"\u6d41\u7a0b\u6f14\u793a"},"\u6d41\u7a0b\u6f14\u793a"),(0,a.kt)("h3",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),(0,a.kt)("p",null,"\ud83d\udd27 \u5728\u8fdb\u884c\u6559\u7a0b\u4e4b\u524d\u8bf7\u5148\u786e\u4fdd\u4f60\u505a\u8db3\u4e86\u51c6\u5907\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6210\u529f\u5b89\u88c5 tKeel \u5e73\u53f0\u3002")),(0,a.kt)("h3",{id:"step-1-\u5b89\u88c5-tkeel-cal-\u63d2\u4ef6"},"Step 1. \u5b89\u88c5 tkeel-cal \u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u7ba1\u7406\u5e73\u53f0\u5b89\u88c5 tkeel-cal \u63d2\u4ef6\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u5373\u53ef\u901a\u8fc7 \u7ba1\u7406\u5e73\u53f0\u7684 token \u8bbf\u95ee\u5bf9\u5e94\u7684 cal \u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://{{tkeel}}/apis/tkeel-calc/calc?x=1&y=2' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjItMDQtMTFUMDg6NTA6MTIuOTIzNTk1NjY3WiIsImlhdCI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsImlzcyI6InJ1ZGRlciIsImp0aSI6IjZlM2NkYmMzLTNkZjItNDkwMS04NzIzLTdiMTg3ZWNiMWY4NyIsIm5iZiI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsInN1YiI6ImFkbWluIn0.kjqjq_zB8iEm3pZGb7f31PiPVK2xrvkQ2XypadYYQnQ'\n")),(0,a.kt)("p",null,"response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "io.tkeel.INTERNAL_ERROR",\n    "data": {},\n    "msg": "invaild addons calc-int-x-y"\n}\n')),(0,a.kt)("h3",{id:"step-2-\u5b89\u88c5-tkeel-cal-add-\u63d2\u4ef6"},"Step 2. \u5b89\u88c5 tkeel-cal-add \u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u7ba1\u7406\u5e73\u53f0\u5b89\u88c5 tkeel-cal-add \u63d2\u4ef6\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u518d\u6b21\u901a\u8fc7\u7ba1\u7406\u5e73\u53f0\u7684 token \u8bbf\u95ee\u5bf9\u5e94\u7684 cal \u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://{{tkeel}}/apis/tkeel-calc/calc?x=1&y=2' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjItMDQtMTFUMDg6NTA6MTIuOTIzNTk1NjY3WiIsImlhdCI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsImlzcyI6InJ1ZGRlciIsImp0aSI6IjZlM2NkYmMzLTNkZjItNDkwMS04NzIzLTdiMTg3ZWNiMWY4NyIsIm5iZiI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsInN1YiI6ImFkbWluIn0.kjqjq_zB8iEm3pZGb7f31PiPVK2xrvkQ2XypadYYQnQ'\n")),(0,a.kt)("p",null,"response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "io.tkeel.SUCCESS",\n    "data": {\n        "res": "3"\n    },\n    "msg": ""\n}\n')),(0,a.kt)("h3",{id:"step-3-\u5378\u8f7d-tkeel-cal-add-\u63d2\u4ef6\u5e76\u5b89\u88c5-tkeel-cal-mul-\u63d2\u4ef6"},"Step 3. \u5378\u8f7d tkeel-cal-add \u63d2\u4ef6\uff0c\u5e76\u5b89\u88c5 tkeel-cal-mul \u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u7ba1\u7406\u5e73\u53f0\u5378\u8f7d tkeel-cal-add \u63d2\u4ef6\uff0c\u5378\u8f7d\u5b8c\u6210\u540e\u518d\u5b89\u88c5 tkeel-cal-mul \u63d2\u4ef6\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u518d\u6b21\u901a\u8fc7\u7ba1\u7406\u5e73\u53f0\u7684 token \u8bbf\u95ee\u5bf9\u5e94\u7684 cal \u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://{{tkeel}}/apis/tkeel-calc/calc?x=1&y=2' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjItMDQtMTFUMDg6NTA6MTIuOTIzNTk1NjY3WiIsImlhdCI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsImlzcyI6InJ1ZGRlciIsImp0aSI6IjZlM2NkYmMzLTNkZjItNDkwMS04NzIzLTdiMTg3ZWNiMWY4NyIsIm5iZiI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsInN1YiI6ImFkbWluIn0.kjqjq_zB8iEm3pZGb7f31PiPVK2xrvkQ2XypadYYQnQ'\n")),(0,a.kt)("p",null,"response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "io.tkeel.SUCCESS",\n    "data": {\n        "res": "2"\n    },\n    "msg": ""\n}\n')))}u.isMDXComponent=!0},1441:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/plugin-addon-b07a1f628d365fbf37e2822ae02c8a73.png"}}]);