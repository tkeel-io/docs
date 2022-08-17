"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9182],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(k,l(l({ref:t},c),{},{components:o})):n.createElement(k,l({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},89962:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"Don't Repeat Yourself",sidebar_position:10},l=void 0,i={unversionedId:"introduction/tools/do_not_repeat_youself",id:"introduction/tools/do_not_repeat_youself",title:"Don't Repeat Yourself",description:"tKeel \u7684\u76ee\u6807\u662f\u5e2e\u52a9\u5927\u5bb6\u8f7b\u677e\u6784\u5efa\u4e91\u539f\u751f\u3001\u9ad8\u6269\u5c55\u3001\u53ef\u62d4\u63d2\u7684\u7269\u8054\u7f51\u5e73\u53f0\uff0c",source:"@site/docs/introduction/tools/do_not_repeat_youself.md",sourceDirName:"introduction/tools",slug:"/introduction/tools/do_not_repeat_youself",permalink:"/introduction/tools/do_not_repeat_youself",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/introduction/tools/do_not_repeat_youself.md",tags:[],version:"current",lastUpdatedAt:1660715774,formattedLastUpdatedAt:"2022\u5e748\u670817\u65e5",sidebarPosition:10,frontMatter:{title:"Don't Repeat Yourself",sidebar_position:10},sidebar:"introSidebar",previous:{title:"\u6d88\u606f\u89c4\u8303",permalink:"/introduction/iothub/message_spec"},next:{title:"Artisan",permalink:"/introduction/tools/artisan"}},s={},p=[{value:"References",id:"references",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"tKeel \u7684\u76ee\u6807\u662f\u5e2e\u52a9\u5927\u5bb6\u8f7b\u677e\u6784\u5efa\u4e91\u539f\u751f\u3001\u9ad8\u6269\u5c55\u3001\u53ef\u62d4\u63d2\u7684\u7269\u8054\u7f51\u5e73\u53f0\uff0c\n\u56e0\u6b64\u6211\u4eec\u5e0c\u671b\u8fbe\u5230\u7684\u76ee\u6807\u662f\uff1a\u300c\u5982\u4f55\u7528\u66f4\u7b80\u5355\u66f4\u5148\u8fdb\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u6765\u6784\u5efa\u6211\u4eec\u7684\u670d\u52a1\u53ca\u5176\u751f\u6001\uff1f\u300d"),(0,a.kt)("p",null,"\u6253\u9020\u4e00\u5957\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\u7684 API\uff0c\u4e0d\u4ec5\u4ec5\u662f API \u53ca\u5176\u80cc\u540e\u7684\u670d\u52a1\u90a3\u4e48\u7b80\u5355\u3002API \u8981\u6709\u6587\u6863\uff0c\u8981\u6709 SDK\uff0c\u8981\u6709 API interface \u7684\u5b9a\u4e49\uff0c\u4ee5\u53ca\u652f\u6491\u8fd9\u4e2a interface \u7684\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u9762\u4f1a\u6709\u5f88\u591a\u91cd\u590d\u7684\u52b3\u52a8\uff1aAPI doc \u548c API interface\uff0c\u4ee5\u53ca SDK \u90fd\u5728\u4e0d\u65ad\u5730\u91cd\u590d\u7c7b\u4f3c\u7684\u5185\u5bb9\u548c\u4ee3\u7801\u3002 \u5f53\u6211\u4eec\u5bf9 API \u7684\u5b9a\u4e49\u8fdb\u884c\u6539\u53d8\u7684\u65f6\u5019\uff0c\u5f80\u5f80\u7275\u4e00\u53d1\u800c\u52a8\u5168\u8eab\uff0c\u6570\u4e2a\u5730\u65b9\u90fd\u9700\u8981\u4fee\u6539\uff0c\u800c\u8fd9\u4e9b\u90fd\u662f\u975e\u5e38\u673a\u68b0\u7684\u884c\u4e3a\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u8981\u5bfb\u627e\u80fd\u591f\u300c\u964d\u7ef4\u6253\u51fb\u300d\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5c31\u62ff tKeel \u6765\u8bf4\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/introduction/tools/artisan"},"Artisan")," \u811a\u624b\u67b6\uff0c\u6574\u5408\u4e86 API \u5b9a\u4e49\u548c API \u6587\u6863\uff0c\u4f7f\u5176\u53ef\u4ee5\u4e00\u6b21\u5b9a\u4e49\uff0c\u4e24\u5904\u751f\u6548\uff0c\u8282\u7701\u5927\u5bb6\u7684\u65f6\u95f4\u3002\u6211\u4eec\u8bd5\u56fe\u628a\u95ee\u9898\u5b9a\u4e49\u6210\u8fd9\u6837\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e00\u95e8\u300c\u8bed\u8a00\u300d\u6765\u63cf\u8ff0\u6211\u4eec\u7684 API"),(0,a.kt)("li",{parentName:"ol"},"\u64b0\u5199\u4e0d\u540c\u65b9\u5411\u4e0a\u7684 Parser\uff08Code generator\uff09\uff0c\u5c06\u5176\u8f6c\u6362\u6210\u7279\u5b9a\u573a\u666f\u7684\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ol"},"\u5c06 Parser \u6784\u5efa\u5728 build pipeline \u4e2d\uff0c\u53ef\u4ee5\u4e00\u6b21 build\uff0c\u751f\u6210\u5404\u79cd\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u7684\u7ed3\u679c\u8981\u80fd\u5f88\u65b9\u4fbf\u5730\u6269\u5c55\uff0c\u4ee5\u53ca\u548c\u7cfb\u7edf\u91cc\u7684\u5176\u4ed6\u90e8\u5206\u6574\u5408")),(0,a.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u7684\u63cf\u8ff0\u8bed\u8a00\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers"),"\uff0c\n\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Protocol Buffers")," \u6211\u4eec\u53ef\u4ee5\u751f\u6210\u591a\u79cd\u670d\u52a1\u811a\u624b\u67b6\uff0c\u540c\u65f6\u901a\u8fc7\u6269\u5c55\u5b9e\u73b0\u6587\u6863\u4ee5\u53ca\u6ce8\u91ca\u7684\u540c\u6b65\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u5b9a\u4e49\u5982\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protocol Buffers"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// The greeting service definition.\nservice Greeter {\n  // Say Hello to tKeel\n  rpc SayHello(HelloRequest) returns (HelloResponse) {\n    option (google.api.http) = {\n      post : "/helloworld/{name}"\n      body : "message"\n    };\n  }\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "Description of helloworld\'s name"}];\n  Test message = 2 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "Description of helloworld\'s message"}];\n}\n\n// The response message containing the greetings\nmessage HelloResponse {\n  string message = 1 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "Hello Response"}];\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u5b9a\u4e49\uff0c\u7ed3\u5408 Artisan \u5de5\u5177\uff0c\u6211\u4eec\u53ef\u4ee5\u751f\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u53c2\u6570\u5b9a\u4e49\u7684\u5404\u79cd\u8bed\u8a00\u7684\u7ed3\u6784\u4f53",(0,a.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","GO"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Javascript\uff08\u76f4\u63a5\u751f\u6210\u524d\u7aef\u9700\u8981\u7684\u7ed3\u6784\u4f53\uff0c\u518d\u4e5f\u4e0d\u7528\u524d\u540e\u7aef\u5bf9\u63a5\u53e3\u8054\u8c03\u4e86\uff09"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Java"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Python"))),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u670d\u52a1\u5b9a\u4e49\u7684 gRPC/HTTP \u670d\u52a1",(0,a.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","GO"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Java"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Python"))),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5b9a\u4e49\u7684\u63a5\u53e3\u8bf4\u660e",(0,a.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Swagger"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Markdown"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SDK")))),(0,a.kt)("p",null,"\u4ee5\u4e0a\u751f\u6210\u7684\u4ee3\u7801\u7b26\u5408\u524d\u6587\u4e2d\u6240\u8ff0\u7684\u300c\u751f\u6210\u7684\u7ed3\u679c\u8981\u80fd\u5f88\u65b9\u4fbf\u5730\u6269\u5c55\uff0c\u4ee5\u53ca\u548c\u7cfb\u7edf\u91cc\u7684\u5176\u4ed6\u90e8\u5206\u6574\u5408\u300d\u8fd9\u4e2a\u9650\u5b9a\u6761\u4ef6\u3002\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u7a0b\u5e8f\u5458\u53ea\u9700\u8981\u8fdb\u4e00\u6b65\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"demo/pkg/service/greeter.go")," \u91cc\u64b0\u5199\u903b\u8f91\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/apis/design"},"https://cloud.google.com/apis/design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/endpoints/docs/grpc/transcoding"},"https://cloud.google.com/endpoints/docs/grpc/transcoding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/googleapis/googleapis"},"https://github.com/googleapis/googleapis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go-kratos.dev/docs/guide/api-protobuf/"},"https://go-kratos.dev/docs/guide/api-protobuf/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/style"},"https://developers.google.com/protocol-buffers/docs/style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://colobu.com/2017/03/16/Protobuf3-language-guide/"},"https://colobu.com/2017/03/16/Protobuf3-language-guide/"))))}u.isMDXComponent=!0}}]);