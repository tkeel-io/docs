"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>u});var r=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,o=A(e,["components","mdxType","originalType","parentName"]),d=l(t),u=p,m=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return t?r.createElement(m,a(a({ref:n},o),{},{components:t})):r.createElement(m,a({ref:n},o))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,a=new Array(i);a[0]=d;var A={};for(var s in n)hasOwnProperty.call(n,s)&&(A[s]=n[s]);A.originalType=e,A.mdxType="string"==typeof e?e:p,a[1]=A;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>A,toc:()=>l});var r=t(87462),p=(t(67294),t(3905));const i={title:"\u6620\u5c04",sidebar_position:2},a=void 0,A={unversionedId:"developer_cookbook/core/specs/mapper",id:"developer_cookbook/core/specs/mapper",title:"\u6620\u5c04",description:"\u6620\u5c04\u662f\u6307\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u5c5e\u6027\u5b9e\u73b0\u8ba1\u7b97\u3001\u91cd\u7ec4\u3001\u8d4b\u503c\u7684\u89c4\u5219\u3002",source:"@site/docs/developer_cookbook/core/specs/mapper.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/mapper",permalink:"/developer_cookbook/core/specs/mapper",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/mapper.md",tags:[],version:"current",lastUpdatedAt:1651038165,formattedLastUpdatedAt:"2022\u5e744\u670827\u65e5",sidebarPosition:2,frontMatter:{title:"\u6620\u5c04",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u4f53",permalink:"/developer_cookbook/core/specs/entity"},next:{title:"\u6a21\u578b",permalink:"/developer_cookbook/core/specs/model"}},s={},l=[{value:"\u6620\u5c04",id:"\u6620\u5c04",level:2},{value:"\u6620\u5c04\u89c4\u5219",id:"\u6620\u5c04\u89c4\u5219",level:4},{value:"Expression",id:"expression",level:2},{value:"\u8868\u8fbe\u5f0f\u8d44\u6e90\u5b9a\u4e49",id:"\u8868\u8fbe\u5f0f\u8d44\u6e90\u5b9a\u4e49",level:3},{value:"\u8868\u8fbe\u5f0f\u89e3\u6790",id:"\u8868\u8fbe\u5f0f\u89e3\u6790",level:3},{value:"Expression \u5728 Runtime \u6302\u8f7d",id:"expression-\u5728-runtime-\u6302\u8f7d",level:3},{value:"Path \u5339\u914d\u539f\u5219",id:"path-\u5339\u914d\u539f\u5219",level:3},{value:"\u5339\u914d\u53d8\u66f4path\u7684\u6240\u6709\u524d\u7f00path",id:"\u5339\u914d\u53d8\u66f4path\u7684\u6240\u6709\u524d\u7f00path",level:4},{value:"\u5339\u914d\u6240\u6709\u4ee5\u53d8\u66f4path\u4e3a\u524d\u7f00\u7684 path",id:"\u5339\u914d\u6240\u6709\u4ee5\u53d8\u66f4path\u4e3a\u524d\u7f00\u7684-path",level:4},{value:"\u652f\u6301\u6a21\u7cca\u5339\u914d",id:"\u652f\u6301\u6a21\u7cca\u5339\u914d",level:4},{value:"TQL",id:"tql",level:2},{value:"Runtime \u4e4b\u95f4\u7684\u6570\u636e\u8ba2\u9605",id:"runtime-\u4e4b\u95f4\u7684\u6570\u636e\u8ba2\u9605",level:2}],o={toc:l};function c(e){let{components:n,...i}=e;return(0,p.kt)("wrapper",(0,r.Z)({},o,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6620\u5c04\u662f\u6307\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u5c5e\u6027\u5b9e\u73b0\u8ba1\u7b97\u3001\u91cd\u7ec4\u3001\u8d4b\u503c\u7684\u89c4\u5219\u3002")),(0,p.kt)("h2",{id:"\u6620\u5c04"},"\u6620\u5c04"),(0,p.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u914d\u7f6e Entity1 \u548c Entity2 \u4e4b\u95f4\u7684\u6620\u5c04\uff0c\u5b9e\u73b0\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Entity2.property1 = Entity1.property1"),(0,p.kt)("li",{parentName:"ul"},"Entity2.property3 = Entity1.property3 + Entity1.property4")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"property-mapping",src:t(63243).Z,width:"883",height:"401"})),(0,p.kt)("p",null,"\u4ece\u5b9e\u4f53\u7684\u7ef4\u5ea6\u770b\u6765\uff0c\u5b9e\u73b0\u6620\u5c04\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u6211\u4eec\u901a\u8fc7\u6620\u5c04\u89c4\u5219\u5b9e\u73b0\u4e86\u5b9e\u4f53\u4e4b\u95f4\u7684\u901a\u4fe1\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"property-mapping-outline",src:t(53653).Z,width:"806",height:"309"})),(0,p.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5bf9\u6b64\u8fc7\u7a0b\u7684\u5206\u6790\uff0c\u53ef\u5c06\u8fd9\u4e00\u8fc7\u7a0b\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u4f20\u9012\uff1a\u5b9e\u73b0\u5b9e\u4f53\u4e4b\u95f4\u6570\u636e\u7684\u4f20\u9012\uff08\u5199\u590d\u5236\uff09\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\uff1a\u6839\u636e\u6620\u5c04\u89c4\u5219\u8ba1\u7b97\u5f97\u5230\u8f93\u51fa\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u66f4\u65b0\uff1a\u4f7f\u7528\u8ba1\u7b97\u5f97\u5230\u7684\u8f93\u51fa\u7ed3\u679c\u66f4\u65b0\u76ee\u6807\u5b9e\u4f53\u3002")),(0,p.kt)("h4",{id:"\u6620\u5c04\u89c4\u5219"},"\u6620\u5c04\u89c4\u5219"),(0,p.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e24\u7c7b\u6620\u5c04\u89c4\u5219\u5b9e\u73b0\uff1a Expression\uff0cTQL\u3002"),(0,p.kt)("h2",{id:"expression"},"Expression"),(0,p.kt)("p",null,"\u8868\u8fbe\u5f0f\uff0c\u4f7f\u7528\u7b80\u5355\u7684\u8bed\u6cd5\u6765\u5bf9\u5b9e\u4f53\u5c5e\u6027\u7684\u8d4b\u503c\u65b9\u5f0f\u8fdb\u884c\u8bbe\u7f6e\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"device123.temp = device234.temp\n")),(0,p.kt)("p",null,"\u5982\u5b58\u5728\u5b9e\u4f53 device123 \u548c device234\uff0c \u6211\u4eec\u4e3a device123 \u914d\u7f6e\u8868\u8fbe\u5f0f\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"device123.temp = device234.temp"),"\u3002\u6b21\u8868\u8fbe\u5f0f\u5b9e\u73b0\u4f7f\u7528 device234.temp \u5c5e\u6027\u66f4\u65b0 device123.temp \u5c5e\u6027\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528 core \u63a5\u53e3\u521b\u5efa\u6b64 Expression\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://192.168.123.9:32758/v1/entities/device123/expressions?type=DEVICE&owner=admin&source=dm\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "expressions": [\n        {\n            "name": "setTemp",\n            "path": "temp",\n            "expression": "device234.temp",\n            "description": "\u4f7f\u7528\u8bbe\u5907\u5b9e\u4f53 device234 \u7684 temp \u5c5e\u6027\u66f4\u65b0\u8bbe\u5907\u5b9e\u4f53 device123 \u7684 temp \u5c5e\u6027\u3002"\n        }\n    ]\n}\'\n')),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("em",{parentName:"p"},"notes: \u66f4\u591a APIs \u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b ",(0,p.kt)("a",{parentName:"em",href:"https://docs.tkeel.io/api/Core/tag"},"APIs docs"),"\u3002"))),(0,p.kt)("h3",{id:"\u8868\u8fbe\u5f0f\u8d44\u6e90\u5b9a\u4e49"},"\u8868\u8fbe\u5f0f\u8d44\u6e90\u5b9a\u4e49"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},"type Expression struct {\n    // expression identifier.\n    ID string\n    // target path.\n    Path string\n    // expression name.\n    Name string\n    // expression type, enum{ sub | eval}.\n    Type string\n    // expression owner.\n    Owner string\n    // entity id.\n    EntityID string\n    // expression text.\n    Expression string\n    // expression description.\n    Description string\n}\n")),(0,p.kt)("p",null,"\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u4e00\u79cd\u5143\u6570\u636e\u8d44\u6e90\u88ab core::node \u540c\u6b65\u5e76\u89e3\u6790\u5904\u7406\u3002"),(0,p.kt)("h3",{id:"\u8868\u8fbe\u5f0f\u89e3\u6790"},"\u8868\u8fbe\u5f0f\u89e3\u6790"),(0,p.kt)("p",null,"\u8868\u8fbe\u5f0f\u4e2d\u6307\u5b9a\u4e86\u8be5\u8868\u8fbe\u5f0f\u8ba1\u7b97\u8f93\u5165\u9700\u8981\u7684\u5b9e\u4f53ID\u548c\u5b9e\u4f53\u5c5e\u6027\u3002\u901a\u8fc7\u5bf9\u8868\u8fbe\u5f0f\u7684\u89e3\u6790\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u8fd9\u4e9b\u4fe1\u606f\uff0c\u89e3\u6790\u7ed3\u679c\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"expression-parse-delivery",src:t(2529).Z,width:"452",height:"395"})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},"type ExpressionInfo struct {\n    // embeded Expression.\n    dao.Expression\n    // expression \u6240\u5c5e entity \u662f\u5426\u5c5e\u4e8e\u5f53\u524d runtime.\n    isHere        bool\n    version       int\n    // subscribe endpoint\n    subEndpoints  []SubEndpoint\n    // eval endpoint.\n    evalEndpoints []EvalEndpoint\n}\n\ntype SubEndpoint struct {\n    path         string\n    target       string\n    runtimeID   string\n    expressionID string\n}\n\ntype EvalEndpoint struct {\n    path        string\n    target      string\n    expresionID string\n}\n")),(0,p.kt)("p",null,"\u6211\u4eec\u89e3\u6790 Expression \u5f97\u5230\u591a\u4e2a ExpressionInfo\uff0c\u7136\u540e\u5c06 ExpressionInfo \u52a0\u8f7d\u5230\u5bf9\u5e94\u7684 Runtime \u4e2d\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'/*\n    \u524d\u63d0\uff1a\n        1. \u5b58\u5728 \u8bbe\u5907 device234\uff0cdevice345 \u548c device123\n        2. \u5b58\u5728\u4e24\u4e2a runtime\n            1. device123 \u548c device234 \u8fd0\u884c\u5728 runtime1 \u4e0a\n            2. device345 \u8fd0\u884c\u5728 runtime2 \u4e0a\n\n*/\n// expression demo.\n{\n    id: "admin.device123.temp",\n    name: "sum device temp",\n    path: "temp",\n    type: "eval",\n    owner: "admin",\n    entity_id: "device123",\n    expression: "device234.temp + device345.temp",\n    description: "\u6c42\u548c device234 \u548c device345 \u7684 temp \u5c5e\u6027",\n}\n\n// call func parseExpression(expr dao.Expression, version int) (map[string]*ExpressionInfo, error) .\n\n// => result:\n\n{\n    "runtime1": {\n        // embed Expression\n        isHere: true,\n        version: 1,\n        subEndpoints: [\n            {\n                path: "device234.properties.temp",\n                target: "device123",\n                runtimeID: "runtime1",\n                expressionID: "admin.device123.temp"\n            }\n        ],\n        evalEndpoints: [\n            {\n                path: "device234.properties.temp",\n                target: "device123",\n                expressionID: "admin.device123.temp"\n            },{\n                path: "device345.properties.temp",\n                target: "device123",\n                expressionID: "admin.device123.temp"\n            }\n        ]\n    },\n    "runtime2": {\n        // embed Expression\n        isHere: false,\n        version: 1,\n        subEndpoints: [\n            {\n                path: "device345.properties.temp",\n                target: "device123",\n                runtimeID: "runtime2",\n                expressionID: "admin.device123.temp"\n            }\n        ],\n        evalEndpoints: []\n    }\n}\n')),(0,p.kt)("h3",{id:"expression-\u5728-runtime-\u6302\u8f7d"},"Expression \u5728 Runtime \u6302\u8f7d"),(0,p.kt)("p",null,"\u5728 Runtime \u6a21\u5757\u4e2d\u6211\u4eec\u6784\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"subTree")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"evalTree")," \u6765\u5339\u914d\u5b9e\u4f53\u5c5e\u6027\u66f4\u65b0 path \u548c\u6620\u5c04\u76d1\u542c path\uff0c\u4ee5\u6b64\u5b8c\u6210\u6620\u5c04\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"\u4f20\u9012")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"\u8ba1\u7b97")," \u4e24\u4e2a\u9636\u6bb5\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"expression-parse-and-mount",src:t(91652).Z,width:"895",height:"797"})),(0,p.kt)("p",null,"ExpressionInfo \u4e2d\u7684 subEndpoints \u4e2d\u7684\u7aef\u70b9\u6302\u8f7d\u5230 subTree \u4e2d\uff0c\u7528\u4e8e\u5728\u5b9e\u4f53\u72b6\u6001\u66f4\u65b0\u540e\uff0c\u914d\u66f4\u65b0\u5b9e\u4f53\u5c5e\u6027\u7684\u8ba2\u9605\u8005\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u6839\u636e SubEndpoint \u5c06\u53d8\u66f4\u5c5e\u6027\u53d1\u9001\u7ed9\u8ba2\u9605\u8005\uff1bevalEndpoints \u4e2d\u7684\u7aef\u70b9\u6302\u8f7d\u5230 Runtime \u4e2d\u7684 evalTree\uff0c\u7528\u4e8e\u8ba2\u9605\u8005\u6536\u5230\u8ba2\u9605\u6d88\u606f\u4e4b\u540e\uff0c\u5339\u914d\u8ba1\u7b97\u8868\u8fbe\u5f0f\uff0c\u901a\u8fc7\u8ba1\u7b97\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u3002"),(0,p.kt)("h3",{id:"path-\u5339\u914d\u539f\u5219"},"Path \u5339\u914d\u539f\u5219"),(0,p.kt)("p",null,"\u5f53\u5b9e\u4f53\u7684\u5c5e\u6027\u53d8\u66f4\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u77e5\u9053\u5176\u8ba2\u9605\u8005\u662f\u8c01\uff0c\u5c31\u9700\u8981\u901a\u8fc7\u53d8\u66f4\u5c5e\u6027\u7684path\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"eg: device234.properties.temp"),"\uff09\u3002"),(0,p.kt)("p",null,"\u5339\u914d\u539f\u5219\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5339\u914d\u53d8\u66f4path\u7684\u6240\u6709\u524d\u7f00path\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5339\u914d\u6240\u6709\u4ee5\u53d8\u66f4path\u4e3a\u524d\u7f00\u7684 path\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u652f\u6301\u6a21\u7cca\u5339\u914d\u3002")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"mapper-trie-tree-match",src:t(91515).Z,width:"818",height:"772"})),(0,p.kt)("h4",{id:"\u5339\u914d\u53d8\u66f4path\u7684\u6240\u6709\u524d\u7f00path"},"\u5339\u914d\u53d8\u66f4path\u7684\u6240\u6709\u524d\u7f00path"),(0,p.kt)("p",null,"\u5728 JSON \u4e2d\uff0c\u5185\u5c42\u5b57\u6bb5\u503c\u53d1\u751f\u53d8\u66f4\uff0c\u5305\u542b\u6b64\u53d8\u66f4\u5b57\u6bb5\u7684\u5bf9\u8c61\u4e5f\u5c31\u53d1\u751f\u4e86\u53d8\u66f4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "a": {\n        "b": {\n            "d": 20\n        },\n        "c": 800\n    }\n}\n\n// \u5f53 a.b.d \u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48a, a.b \u90fd\u5305\u542b\u4e86\u53d8\u66f4\u3002\n')),(0,p.kt)("p",null,"\u6240\u4ee5\u5f53 path: ",(0,p.kt)("inlineCode",{parentName:"p"},"device234.properties.temp")," \u53d1\u751f\u53d8\u66f4\uff0c\u4e0b\u5217 path \u7684\u8ba2\u9605\u8005\u90fd\u80fd\u6536\u5230\u53d8\u66f4\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"device234.*"),(0,p.kt)("li",{parentName:"ol"},"device234.properties"),(0,p.kt)("li",{parentName:"ol"},"device234.properties.temp")),(0,p.kt)("h4",{id:"\u5339\u914d\u6240\u6709\u4ee5\u53d8\u66f4path\u4e3a\u524d\u7f00\u7684-path"},"\u5339\u914d\u6240\u6709\u4ee5\u53d8\u66f4path\u4e3a\u524d\u7f00\u7684 path"),(0,p.kt)("p",null,"JSON \u4e2d\u5916\u5c42\u7684\u5b57\u6bb5\u53d1\u751f\u53d8\u66f4\uff0c\u6211\u4eec\u5224\u5b9a\u4e3a\u5176\u53d8\u66f4\u5b57\u6bb5\u5305\u542b\u7684\u5185\u5c42\u5b57\u6bb5\u540c\u6837\u53d1\u751f\u53d8\u66f4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "a": {\n        "b": {\n            "d": 20\n        },\n        "c": 800\n    }\n}\n\n// \u5f53 a.b \u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u5224\u5b9a\u4e3a a.b.d \u4e5f\u53d1\u751f\u4e86\u53d8\u66f4\u3002\n')),(0,p.kt)("h4",{id:"\u652f\u6301\u6a21\u7cca\u5339\u914d"},"\u652f\u6301\u6a21\u7cca\u5339\u914d"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Separator\uff1a ",(0,p.kt)("inlineCode",{parentName:"li"},".")),(0,p.kt)("li",{parentName:"ul"},"WildcardOne:  ",(0,p.kt)("inlineCode",{parentName:"li"},"+"),","),(0,p.kt)("li",{parentName:"ul"},"WildcardSome: ",(0,p.kt)("inlineCode",{parentName:"li"},"*"),",")),(0,p.kt)("h2",{id:"tql"},"TQL"),(0,p.kt)("p",null,"TQL \u4e0d\u662f\u4e00\u5957\u72ec\u7acb\u7684\u89c4\u5219\u63cf\u8ff0\uff0cTQL \u662f\u4e00\u4e2a\u6216\u591a\u4e2a Expression \u7684\u590d\u5408\u4f53\uff0c\u4e14\u5176\u4e0e Expression \u7684\u4f7f\u7528\u573a\u666f\u6709\u6240\u533a\u522b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"# demo TQL Text.\ninsert into device123\nselect\ndevice234.temp as temp,\ndevice234.status as status;\n")),(0,p.kt)("p",null,"\u4e00\u6761 TQL \u8bed\u53e5\u53ef\u4ee5\u8f6c\u6362\u6210\u591a\u6761 Expression\uff0c\u7531\u6b64\u6211\u4e48\u53ef\u4ee5\u901a\u8fc7 TQL \u521b\u5efa\u6279\u91cf\u521b\u5efa Expression\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'// TQL => Expressions:\n{\n    id: "admin.device123.temp",\n    name: "sync device temp",\n    path: "temp",\n    type: "eval",\n    owner: "admin",\n    entity_id: "device123",\n    expression: "device234.temp",\n}\n{\n    id: "admin.device123.status",\n    name: "sync device status",\n    path: "status",\n    type: "eval",\n    owner: "admin",\n    entity_id: "device123",\n    expression: "device234.status",\n}\n')),(0,p.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u66f4\u591a\u4f7f\u7528 TQL \u7528\u4e8e\u5b9e\u4f53\u6570\u636e\u7684\u8ba2\u9605\uff0c\u800c\u975e\u6620\u5c04\uff0c\u6620\u5c04\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Expression \u5f97\u5230\u66f4\u597d\u7684\u8868\u8fbe\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"insert into sub123 select device123.*, device234.properties.temp, device345.*;\n")),(0,p.kt)("h2",{id:"runtime-\u4e4b\u95f4\u7684\u6570\u636e\u8ba2\u9605"},"Runtime \u4e4b\u95f4\u7684\u6570\u636e\u8ba2\u9605"),(0,p.kt)("p",null,"\u5b9e\u4f53\u5b58\u5728\u4e8e Runtime \u5185\u90e8\uff0c\u5b9e\u4f53\u4e4b\u95f4\u7684\u901a\u4fe1\u53ef\u4ee5\u57fa\u4e8eRuntime\u4e4b\u95f4\u7684\u901a\u4fe1\u6765\u5b8c\u6210\uff0c\u4e14\u66f4\u52a0\u9ad8\u6548\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"mapper-tentacles",src:t(73758).Z,width:"1041",height:"325"})))}c.isMDXComponent=!0},91652:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/expression-parse-and-mount-c9179e26f64496296e758ca18ad8fdf1.png"},2529:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/expression-parse-delivery-4f3a32d97590a5b64cecb46ea9af7ed3.png"},73758:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mapper-tentacles-89ac5de5e20a3a8933f7ad0d0508e676.png"},91515:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mapper-trie-tree-match-e1628f4d3614a71e76ec4c3d92b77aa6.png"},53653:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyYAAAE1CAIAAACdiGN5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAARBUlEQVR4nO3dP2yb553A8YdFEL6dRHgJu9QM4MC6yQIa2LopzHAIAwRnIYtV5IDocICjW2plCl0UMIMMVoArwk5WskS31LoWQTQIKH0dokxWp+imqLCByEvMAkFDTaaH4L2BjtukTmLJ/PEl6c9nsEWK5Pu89qtHX71/qFKe5wkAgEg/KnoAAADTT3IBAISTXAAA4SQXAEA4yQUAEE5yAQCEk1wAAOEkFwBAOMkFFOz5558veggA4Z4oegDAY61UKuV5Pviz6LEABLKXCyjM/dIaVFfRwwEIJLmAYnxrz5bqAqab5AIK8MAjiaoLmGKSCxi17zlzS3UB00pyASP1g2fKqy5gKkkuYHQe8spE1QVMH8kFjMih3glCdQFTRnIBo3CEd95SXcA0kVxAuCO/06nqAqaG5AJiPeI7y6suYDpILiDQUH6Tj+oCpoDkAqIM8Tcnqi5g0kkuIMTQf1O16gImmuQChm/ovTWguoDJJbmAIQvqrQHVBUwoyQUMU2hvDaguYBJJLmBoRtBbA6oLmDiSCxiOkfXWgOoCJovkAoZgxL01oLqACSK5gEdVSG8NqC5gUkgu4JEU2FsDqguYCJILOLrCe2tAdQHjT3IBRzQmvTWguoAxJ7mAoxir3hpQXcA4k1zAoY1hbw2oLmBsSS7gcMa2twZUFzCeJBdwCGPeWwOqCxhDkgt4WBPRWwOqCxg3kgt4KBPUWwOqCxgrkgv4YRPXWwOqCxgfkgv4ARPaWwOqCxgTkgv4PhPdWwOqCxgHkgv4TlPQWwOqCyic5AIebGp6a0B1AcWSXMADTFlvDaguoECSC/i2qeytAdUFFEVyAd9w+N7aXq6WKotr60tz1axSa6zu7G7c+7C9208ppf7u2uJ8rZJlldr88sZeSil11+pZaXZptdmYrWRZrb7S6aaUdptzpWx+pb08X6tkldnG6k4vpZT6exvL9dlKllVmG81ON339yEZzbXG2Mr+6d6gVVF1AISQX8DdH2r+VZVk66Kzt1FdXF6u3rrUWljrzq+2lWvdaq7XZS2m3tfSf/9Orr213mrW9d5ebG72UUpal9OdOp9Lc3F5bSB//Zrm13U9ZJZXv/mlze67d6azO965dXF7bTWm3tbj0bnd+bXtnbX6/vbi80UuDR+5sbGTL7WajetjVVF1AAXIeD1tbW61W65VXXjl9+vSxY8eK3u4YR5VK5Ugb1/ULx1P51OVP8zy/fuFkSicvXM/z/NPLp76+986XX355J8/z/LN3zpTTqTc+yfPb779QTjPn/nAn//pZp974JP/08qlyOn7hep7n+Z0/vDqTys9duf3JG6dSOvnGJ/ngRcszZ6/eGTzyqVcHzz+iSqVS9D853HPs2LHTp0+/8sorly5d2traeoTtmvH1RNGbGeFu3759/vz5p59++tixYy+++OIvfvGLEydOqC4e6OhncVWr1ZRSpZqlclarppSyLCvf7aeUUndndWllfWev10/p7t108v5zKtVKdu/vcur2eimllMrVWiWllLJKpZJSr9fr9bop/aU9n7VTSunu3ZTt76e5lFK5OlvLRr+mEOCvf/3rzZs3b9y4cfPmzWvXrq2trb333ns/+clPih4XwyS5ptzHH3/885///L333nvppZeKHgsTIM/zobfIzury29fShevd9nx3dX7uYu/+Z3rdbj+lLHX3u3dTZVBa6W53r5vSbOp3u72UapVKpVJNqbK82VmZHTwtq9RSN6WU9BZTY7CX6/Tp04ObW1tbP/vZz37729/W6/VCx8UwOZdrmm1tbV28ePHzzz/XWzy8fNjnOfX7/ZRSv7u/vb66sZdSb393f5Bd/c7qykZnc3V181Y6Xq/fK6ru5mpzs7PRXO0clOca9ercQuNkeb+zsb3f3d9sLi6ubHYfaTx6i/H30ksvff7557/85S+3traKHgtDI7mm2fnz5z/44IOiR8HkGW511Vda50521xcbze362vrSqf5ms9k5SCml6sJCZX15qbWTvXB5vTU/2GlVnl1o9NrLS2t71bPttZXZlOZbm2uLle2Vxj83Vvdqi83F2aMPRm8xQT744IPz588XPQqGxuwztd588808z1utVtEDYVKF1kl3vVH7973l6/vt+b+7d291bq6VtXZ3mo9QVd9NbzFxWq1WqVS6dOlS0QNhCOzlmk5fffXV7373u9dff73ogTDBhn6EsVh6i0n0+uuv//73v//qq6+KHghDILmm08HBQbfbnZmZKXogTLapqS69xYSamZm5ffv2wcFB0QNhCFyxOJ1u3rx54sSJokfBNIi4hjGlVF3q9Jf+4d7Z5m6/OdwF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"},63243:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/property-mapping-7b70848df498c464f9de80a66e64c36c.png"}}]);