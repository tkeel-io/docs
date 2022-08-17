"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[890],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const a={title:"GO \u8bed\u8a00 SDK \u8bbe\u5907\u63a5\u5165",sidebar_position:20},i=void 0,o={unversionedId:"develop_guide/device_develop/go_sdk",id:"develop_guide/device_develop/go_sdk",title:"GO \u8bed\u8a00 SDK \u8bbe\u5907\u63a5\u5165",description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 GO \u8bed\u8a00 SDK \u63a5\u5165\u8bbe\u5907",source:"@site/docs/develop_guide/device_develop/go_sdk.md",sourceDirName:"develop_guide/device_develop",slug:"/develop_guide/device_develop/go_sdk",permalink:"/en/develop_guide/device_develop/go_sdk",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/device_develop/go_sdk.md",tags:[],version:"current",lastUpdatedAt:1655352538,formattedLastUpdatedAt:"Jun 16, 2022",sidebarPosition:20,frontMatter:{title:"GO \u8bed\u8a00 SDK \u8bbe\u5907\u63a5\u5165",sidebar_position:20},sidebar:"developSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/en/develop_guide/before_develop/prepare"},next:{title:"\u6570\u636e\u4f7f\u7528\u65b9\u5f0f",permalink:"/en/develop_guide/data_develop/data_way"}},d={},c=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Go \u73af\u5883",id:"go-\u73af\u5883",level:3},{value:"\u5e73\u53f0\u73af\u5883",id:"\u5e73\u53f0\u73af\u5883",level:3},{value:"\u5bfc\u5165\u793a\u4f8b\u4ee3\u7801",id:"\u5bfc\u5165\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",level:2},{value:"\u5982\u4f55\u4f7f\u7528SDK\u4e0a\u62a5\u6570\u636e",id:"\u5982\u4f55\u4f7f\u7528sdk\u4e0a\u62a5\u6570\u636e",level:2},{value:"\u5982\u4f55\u53cd\u63a7\u8bbe\u5907",id:"\u5982\u4f55\u53cd\u63a7\u8bbe\u5907",level:2},{value:"\u539f\u59cb\u6570\u636e",id:"\u539f\u59cb\u6570\u636e",level:3},{value:"\u8ba2\u9605\u539f\u59cb\u6570\u636e topic",id:"\u8ba2\u9605\u539f\u59cb\u6570\u636e-topic",level:4},{value:"\u539f\u59cb\u6570\u636e\u5904\u7406",id:"\u539f\u59cb\u6570\u636e\u5904\u7406",level:4},{value:"Payload \u6837\u4f8b",id:"payload-\u6837\u4f8b",level:4},{value:"\u5c5e\u6027\u6570\u636e",id:"\u5c5e\u6027\u6570\u636e",level:3},{value:"\u8ba2\u9605\u5c5e\u6027\u6570\u636e topic",id:"\u8ba2\u9605\u5c5e\u6027\u6570\u636e-topic",level:4},{value:"\u5c5e\u6027\u6570\u636e\u5904\u7406",id:"\u5c5e\u6027\u6570\u636e\u5904\u7406",level:4},{value:"Payload \u6837\u4f8b",id:"payload-\u6837\u4f8b-1",level:4},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:3},{value:"\u8ba2\u9605\u547d\u4ee4 topic",id:"\u8ba2\u9605\u547d\u4ee4-topic",level:4},{value:"\u547d\u4ee4\u5904\u7406",id:"\u547d\u4ee4\u5904\u7406",level:4},{value:"Payload \u6837\u4f8b",id:"payload-\u6837\u4f8b-2",level:4},{value:"\u4f7f\u7528 SDK \u63a5\u5165\u8bbe\u5907\u5b9e\u4f8b",id:"\u4f7f\u7528-sdk-\u63a5\u5165\u8bbe\u5907\u5b9e\u4f8b",level:2},{value:"\u521b\u5efa\u8bbe\u5907",id:"\u521b\u5efa\u8bbe\u5907",level:3},{value:"\u8bbe\u5907\u63a5\u5165",id:"\u8bbe\u5907\u63a5\u5165",level:3},{value:"\u521b\u5efa\u547d\u4ee4",id:"\u521b\u5efa\u547d\u4ee4",level:3},{value:"\u4e0b\u53d1\u547d\u4ee4",id:"\u4e0b\u53d1\u547d\u4ee4",level:3},{value:"\u8bbe\u5907\u6267\u884c\u7ed3\u679c\u54cd\u5e94",id:"\u8bbe\u5907\u6267\u884c\u7ed3\u679c\u54cd\u5e94",level:3}],p={toc:c};function s(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 GO \u8bed\u8a00 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/device-sdk-go"},"SDK")," \u63a5\u5165\u8bbe\u5907"),(0,l.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u8bbe\u5907\u7684\u63a5\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u5e26\u6709\u5b50\u8bbe\u5907\u7684\u8bbe\u5907\uff08\u5982\u6570\u91c7\u7f51\u5173\uff09\u7684\u63a5\u5165")),(0,l.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,l.kt)("h3",{id:"go-\u73af\u5883"},"Go \u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"golang")," version: 1.16+")),(0,l.kt)("h3",{id:"\u5e73\u53f0\u73af\u5883"},"\u5e73\u53f0\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 tkeel \u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528\u4e86 IoTHub \u63d2\u4ef6")),(0,l.kt)("h2",{id:"\u5bfc\u5165\u793a\u4f8b\u4ee3\u7801"},"\u5bfc\u5165\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'"github.com/tkeel-io/device-sdk-go/client"\n')),(0,l.kt)("h2",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u9ed8\u8ba4\u7684 client\uff0c\u8fd9\u91cc\u5c06 IoTAddr \u66ff\u6362\u4e3a\u5b89\u88c5\u7684 iothub \u7684\u63a5\u5165\u5730\u5740\n_brokerAddr := "IoTAddr"\ncli := client.NewClient(_brokerAddr, _username, _pwd)()\n// \u8fde\u63a5\u5230 IoT Hub\ncli.Connect()\n\n// \u8ba2\u9605\u539f\u59cb\u4fe1\u606f\ncli.SubscribeRaw(context.TODO(), rawTopicHandler)\n\n// \u63a8\u9001\u9065\u6d4b\u6570\u636e\nv := `{"temperature": 26.0}`\ncli.PublishTelemetry(ctx, v)\n\n// \u5173\u95ed client\ncli.Close()\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u652f\u6301ssl \u7684 client\uff0c \u8fd9\u91cc\u5c06 IoTAddr \u66ff\u6362\u4e3a\u5b89\u88c5\u7684 iothub \u7684\u63a5\u5165\u5730\u5740\n_brokerAddr := "IoTAddr"\ncli := client.NewClient(_brokerAddr, _username, _pwd)(client.WithUseSSL(true))\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528sdk\u4e0a\u62a5\u6570\u636e"},"\u5982\u4f55\u4f7f\u7528SDK\u4e0a\u62a5\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u9ed8\u8ba4\u7684 client \uff0c \u8fd9\u91cc\u5c06 IoTAddr \u66ff\u6362\u4e3a\u5b89\u88c5\u7684 iothub \u7684\u63a5\u5165\u5730\u5740\n_brokerAddr := "IoTAddr"\ncli := client.NewClient(_brokerAddr, _username, _pwd)()\n// \u63a8\u9001\u9065\u6d4b\u6570\u636e\nv := `{"temperature": 26.0}`\ncli.PublishTelemetry(ctx, v)\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u53cd\u63a7\u8bbe\u5907"},"\u5982\u4f55\u53cd\u63a7\u8bbe\u5907"),(0,l.kt)("p",null,"\u5e73\u53f0\u53d1\u9001\u7ed9\u8bbe\u5907\u7684\u6570\u636e\u5206\u4e3a\u4e09\u79cd\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4")),(0,l.kt)("p",null,"\u8bbe\u5907\u5982\u679c\u9700\u8981\u63a5\u6536\u6765\u81ea\u5e73\u53f0\u7684\u547d\u4ee4\u6216\u8005\u5c5e\u6027\u7684\u53d8\u5316\u9700\u8981\u8ba2\u9605\u5bf9\u5e94\u7684 topic"),(0,l.kt)("h3",{id:"\u539f\u59cb\u6570\u636e"},"\u539f\u59cb\u6570\u636e"),(0,l.kt)("h4",{id:"\u8ba2\u9605\u539f\u59cb\u6570\u636e-topic"},"\u8ba2\u9605\u539f\u59cb\u6570\u636e topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa client \uff0c\u8fd9\u91cc\u5c06 IoTAddr \u66ff\u6362\u4e3a\u5b89\u88c5\u7684 iothub \u7684\u63a5\u5165\u5730\u5740\n_brokerAddr := "IoTAddr"\ncli := client.NewClient(_brokerAddr, _username, _pwd)()\n// \u8fde\u63a5\u5230 IoT Hub\ncli.Connect()\n// \u8ba2\u9605\u5e73\u53f0\u4e0b\u53d1\u7684\u547d\u4ee4\n_ = cli.SubscribeRaw(context.TODO(), rawTopicHandler)\n')),(0,l.kt)("h4",{id:"\u539f\u59cb\u6570\u636e\u5904\u7406"},"\u539f\u59cb\u6570\u636e\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u6536\u5230\u539f\u59cb\u6570\u636e\u540e\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\nfunc rawTopicHandler(message client.Message) (interface{}, error) {\n    fmt.Printf("rawTopic=%s\\n", string(message.Payload()))\n    return nil, nil\n}\n')),(0,l.kt)("h4",{id:"payload-\u6837\u4f8b"},"Payload \u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},' "12"\n')),(0,l.kt)("p",null,"12 \u4e3a\u5e73\u53f0\u4e0b\u53d1\u7684\u539f\u59cb\u6570\u636e"),(0,l.kt)("h3",{id:"\u5c5e\u6027\u6570\u636e"},"\u5c5e\u6027\u6570\u636e"),(0,l.kt)("h4",{id:"\u8ba2\u9605\u5c5e\u6027\u6570\u636e-topic"},"\u8ba2\u9605\u5c5e\u6027\u6570\u636e topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa client \uff0c\u8fd9\u91cc\u5c06 IoTAddr \u66ff\u6362\u4e3a\u5b89\u88c5\u7684 iothub \u7684\u63a5\u5165\u5730\u5740\n_brokerAddr := "IoTAddr"\ncli := client.NewClient(_brokerAddr, _username, _pwd)()\n// \u8fde\u63a5\u5230 IoT Hub\ncli.Connect()\n// \u8ba2\u9605\u5c5e\u6027\uff0c\u5e73\u53f0\u4f1a\u5c06\u53d8\u66f4\u7684\u5c5e\u6027\uff08\u503c\u7684\u53d8\u5316\uff09\u63a8\u9001\u5230\u76f8\u5e94\u7684 topic\n_ = cli.SubscribeAttribute(context.TODO(), attributesTopicHandler)\n')),(0,l.kt)("h4",{id:"\u5c5e\u6027\u6570\u636e\u5904\u7406"},"\u5c5e\u6027\u6570\u636e\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u6536\u5230\u5c5e\u6027\u6570\u636e\u540e\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\nfunc attributesTopicHandler(message client.Message) (interface{}, error) {\n    fmt.Printf("attributes=%s\\n", string(message.Payload()))\n    return nil, nil\n}\n')),(0,l.kt)("h4",{id:"payload-\u6837\u4f8b-1"},"Payload \u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "humidity": "12"\n}\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u6837\u4f8b\u6570\u636e\u4ee3\u8868\u8be5\u8bbe\u5907\u7684 humidity \u53d1\u751f\u66f4\u6539\u4e14\u66f4\u6539\u540e\u7684\u503c\u4e3a12"),(0,l.kt)("h3",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("h4",{id:"\u8ba2\u9605\u547d\u4ee4-topic"},"\u8ba2\u9605\u547d\u4ee4 topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa client \uff0c\u8fd9\u91cc\u5c06 IoTAddr \u66ff\u6362\u4e3a\u5b89\u88c5\u7684 iothub \u7684\u63a5\u5165\u5730\u5740\n_brokerAddr := "IoTAddr"\ncli := client.NewClient(_brokerAddr, _username, _pwd)()\n// \u8fde\u63a5\u5230 IoT Hub\ncli.Connect()\n// \u8ba2\u9605\u5e73\u53f0\u4e0b\u53d1\u7684\u547d\u4ee4\n_ = cli.SubscribeCommand(context.TODO(), commandsTopicHandler)\n')),(0,l.kt)("h4",{id:"\u547d\u4ee4\u5904\u7406"},"\u547d\u4ee4\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u6536\u5230\u547d\u4ee4\u540e\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\nfunc commandsTopicHandler(message client.Message) (interface{}, error) {\n    fmt.Printf("commands=%s\\n", string(message.Payload()))\n    return "success", nil\n}\n')),(0,l.kt)("h4",{id:"payload-\u6837\u4f8b-2"},"Payload \u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "setTemperatureThreshold": {\n    "input": {\n      "temperature": 12.3\n    }\n  }\n}\n')),(0,l.kt)("p",null,"setTemperatureThreshold \u4ee3\u8868\u547d\u4ee4\u540d\u79f0 input \u4ee3\u8868\u8f93\u5165\u53c2\u6570 temperature \u4ee3\u8868\u4e86\u8f93\u5165\u53c2\u6570\u7684 key\uff0c\u5982\u679c\ncommandsTopicHandler \u8fd4\u56de\u7684\u503c\u4e0d\u4e3a nil \u90a3\u4e48SDK \u4f1a\u5c06\u8fd4\u56de\u7684\u503c\u4e0a\u4f20\u5230\u5e73\u53f0\uff0c\u82e5\u4e3a nil \u5219\u8868\u793a\u4e0d\u9700\u8981\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u5e73\u53f0"),(0,l.kt)("h2",{id:"\u4f7f\u7528-sdk-\u63a5\u5165\u8bbe\u5907\u5b9e\u4f8b"},"\u4f7f\u7528 SDK \u63a5\u5165\u8bbe\u5907\u5b9e\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u63a5\u5165\uff08\u4f7f\u7528 Go SDK\uff09 "),(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u53d1\u547d\u4ee4")),(0,l.kt)("h3",{id:"\u521b\u5efa\u8bbe\u5907"},"\u521b\u5efa\u8bbe\u5907"),(0,l.kt)("p",null,"\u5e73\u53f0\u521b\u5efa",(0,l.kt)("img",{src:t(5858).Z,width:"1846",height:"802"})),(0,l.kt)("p",null,"\u5728\u5e73\u53f0\u521b\u5efa\u8bbe\u5907\u540e\u4f1a\u83b7\u5f97\u8be5\u8bbe\u5907\u7684 token \u4f9b\u63a5\u5165\u4f7f\u7528\n\u5176\u4e2d ",(0,l.kt)("em",{parentName:"p"},"\u8bbe\u5907ID")," \u4e0e SDK \u4e2d username \u5bf9\u5e94\uff0c",(0,l.kt)("em",{parentName:"p"},"\u8bbe\u5907\u51ed\u8bc1")," \u5bf9\u5e94 password\uff0c\u8bb0\u5f55\u4e0b\u8fd9\u4e24\u4e2a\u4fe1\u606f\uff0c\u4f9b\u540e\u7eed\u8bbe\u5907\u63a5\u5165\u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.tkeel.io/api/Device/method_CreateDevice"},"API \u53c2\u8003")),(0,l.kt)("h3",{id:"\u8bbe\u5907\u63a5\u5165"},"\u8bbe\u5907\u63a5\u5165"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/device-sdk-go"},"SDK")," \u4e0a\u7ebf\u8bbe\u5907\u7b80\u5355\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "log"\n    "math/rand"\n    "time"\n\n    "github.com/pkg/errors"\n\n    "github.com/tkeel-io/device-sdk-go/client"\n    "github.com/tkeel-io/device-sdk-go/util/wait"\n)\n\nconst (\n    // \n    _brokerAddr = "IoTHubAddr"\n    // \u8bbe\u5907 Id \n    _username   = "iotd-43b5b654-5d29-4464-9a87-822d3aa0957d"\n    // \u8bbe\u5907\u51ed\u8bc1\n    _pwd        = "ZjI1M2IyNGMtNjNjZi0zMzM5LWFlMDMtYjBkOWVlYTQ4ZDNh"\n)\n\nfunc main() {\n    log.SetFlags(log.Lshortfile)\n    // \u521b\u5efa\u8fde\u63a5 IoTHub \u7684 client\n    cli := client.NewClient(_brokerAddr, _username, _pwd)()\n    // \u8fde\u63a5 IoTHub\n    err := cli.Connect()\n    if err != nil {\n        log.Fatalln(err)\n    }\n    // \u8ba2\u9605\u539f\u59cb\u6570\u636e\n    _ = cli.SubscribeRaw(context.TODO(), rawTopicHandler)\n    // \u8ba2\u9605\u5c5e\u6027\u6570\u636e\n    _ = cli.SubscribeAttribute(context.TODO(), attributesTopicHandler)\n    // \u8ba2\u9605\u4e0b\u53d1\u547d\u4ee4\n    _ = cli.SubscribeCommand(context.TODO(), commandsTopicHandler)\n\n    tm := time.Second * 1\n\n    wait.EveryWithContext(context.Background(), func(ctx context.Context) {\n        v, _ := deviceValue()\n        // telemetry.\n        _ = cli.PublishTelemetry(ctx, v)\n    }, tm)\n\n    select {}\n}\n\n// \u5c5e\u6027\u6570\u636e\u5904\u7406\nfunc attributesTopicHandler(message client.Message) (interface{}, error) {\n    fmt.Printf("attributes=%s\\n", string(message.Payload()))\n    return nil, nil\n}\n\n// \u547d\u4ee4\u4fe1\u606f\u5904\u7406\nfunc commandsTopicHandler(message client.Message) (interface{}, error) {\n    fmt.Printf("commands=%s\\n", string(message.Payload()))\n    return "success", nil\n}\n\n// \u539f\u59cb\u4fe1\u606f\u5904\u7406\nfunc rawTopicHandler(message client.Message) (interface{}, error) {\n    fmt.Printf("rawTopic=%s\\n", string(message.Payload()))\n    return nil, nil\n}\n\n// \u6a21\u62df\u4e86\u8bbe\u5907\u6570\u636e\u7684\u83b7\u53d6\nfunc deviceValue() ([]byte, error) {\n    mv := map[string]interface{}{\n        "humidity":    rand.Intn(20),\n        "temperature": rand.Intn(20),\n    }\n\n    bys, err := json.Marshal(mv)\n    if err != nil {\n        err = errors.Wrap(err, "deviceValue")\n    }\n\n    return bys, err\n}\n')),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ToTHubAddr")," \u66ff\u6362\u4e3a\u90e8\u7f72\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTHub")," \u7684\u5730\u5740"),(0,l.kt)("h3",{id:"\u521b\u5efa\u547d\u4ee4"},"\u521b\u5efa\u547d\u4ee4"),(0,l.kt)("p",null,"\u5e73\u53f0\u521b\u5efa",(0,l.kt)("img",{src:t(34897).Z,width:"1804",height:"580"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.tkeel.io/api/Device/method_AddTemplateCommand"},"API \u53c2\u8003")),(0,l.kt)("h3",{id:"\u4e0b\u53d1\u547d\u4ee4"},"\u4e0b\u53d1\u547d\u4ee4"),(0,l.kt)("p",null,"\u5e73\u53f0\u521b\u5efa",(0,l.kt)("img",{src:t(79642).Z,width:"1537",height:"503"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.tkeel.io/api/Device/method_SetDeviceCommand"},"API \u53c2\u8003")),(0,l.kt)("h3",{id:"\u8bbe\u5907\u6267\u884c\u7ed3\u679c\u54cd\u5e94"},"\u8bbe\u5907\u6267\u884c\u7ed3\u679c\u54cd\u5e94"),(0,l.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u54cd\u5e94",(0,l.kt)("img",{src:t(37517).Z,width:"1089",height:"283"})))}s.isMDXComponent=!0},37517:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cmd_resp-658022ff569074fdc44cefe476450841.jpg"},34897:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/create_cmd-5ac280f32742d62d298eb7aed513f07f.png"},5858:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/create_device-ef52305924218f42e3f1171fc5e84be6.jpg"},79642:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/invoke_cmd-31b05761a2d902c29283a4f3ddf2d3e1.jpg"}}]);