"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?o.createElement(v,i(i({ref:t},d),{},{components:n})):o.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",sidebar_position:1},i=void 0,l={unversionedId:"developer_cookbook/core/tutorial/iot-create-entity-from-model",id:"developer_cookbook/core/tutorial/iot-create-entity-from-model",title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",description:"1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53",source:"@site/docs/developer_cookbook/core/tutorial/iot-create-entity-from-model.md",sourceDirName:"developer_cookbook/core/tutorial",slug:"/developer_cookbook/core/tutorial/iot-create-entity-from-model",permalink:"/en/developer_cookbook/core/tutorial/iot-create-entity-from-model",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/tutorial/iot-create-entity-from-model.md",tags:[],version:"current",lastUpdatedAt:1641286313,formattedLastUpdatedAt:"Jan 4, 2022",sidebarPosition:1,frontMatter:{title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e",permalink:"/en/developer_cookbook/core/introduction/configuration"},next:{title:"\u4e3a\u7a7a\u95f4\u5173\u7cfb\u53d8\u66f4\u521b\u5efa\u6620\u5c04",permalink:"/en/developer_cookbook/core/tutorial/mapper-for-space-relationships"}},c={},p=[{value:"1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53",id:"1-\u521b\u5efa\u6a21\u578b\u5b9e\u4f53",level:3},{value:"2. \u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e",id:"2-\u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e",level:3},{value:"3. \u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",id:"3-\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",level:3},{value:"4. \u67e5\u8be2\u5b9e\u4f53",id:"4-\u67e5\u8be2\u5b9e\u4f53",level:3},{value:"5. \u7f16\u8f91\u5b9e\u4f53",id:"5-\u7f16\u8f91\u5b9e\u4f53",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u6a21\u578b\u5b9e\u4f53"},"1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# 1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53\ncurl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=template123" \\\n-H "Owner: admin" \\\n-H "Type: TEMPLATE" \\\n-H "Source: dm" \\\n-H "Content-Type: application/json" \\\n-d \'{}\'\n')),(0,r.kt)("h3",{id:"2-\u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e"},"2. \u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u7f16\u8f91\u6a21\u578b\ncurl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/template123/configs?type=TEMPLATE&owner=admin&source=dm" \\\n  -H "Content-Type: application/json" \\\n  -d \'[\n          {\n            "id": "temp",\n            "type": "int",\n            "define": {\n                "unit": "\xb0",\n                "max": 500,\n                "min": 10\n            },\n            "enabled": true,\n            "enabled_search": true\n          }\n    ]\'\n')),(0,r.kt)("h3",{id:"3-\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907"},"3. \u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6307\u5b9a\u6a21\u578b\u521b\u5efa\u8bbe\u5907\ncurl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device12344&from=template123" \\\n-H "Owner: admin" \\\n-H "Type: DEVICE" \\\n-H "Source: dm" \\\n-H "Content-Type: application/json" \\\n-d \'{\n      "status": "start",\n      "temp": 2344\n    }\'\n')),(0,r.kt)("h3",{id:"4-\u67e5\u8be2\u5b9e\u4f53"},"4. \u67e5\u8be2\u5b9e\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin"  \\\n  -H "Type: DEVICE"\n')),(0,r.kt)("h3",{id:"5-\u7f16\u8f91\u5b9e\u4f53"},"5. \u7f16\u8f91\u5b9e\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n       "status": "end",\n       "temp":123\n     }\'\n')))}s.isMDXComponent=!0}}]);