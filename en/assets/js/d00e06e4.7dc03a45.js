"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||n;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={title:"Artisan",sidebar_position:20},l="Artisan",p={unversionedId:"develop_guide/tools/artisan",id:"develop_guide/tools/artisan",title:"Artisan",description:"\u8fd9\u662f\u6211\u4eec\u4e13\u95e8\u4e3a\u5f00\u53d1\u8005\u6253\u9020\u7684\u4e00\u6b3e\u7528\u4e8e\u751f\u6210\u9879\u76ee\u67b6\u6784\u548c\u4e00\u4e9b\u4ee3\u7801\u7684 CLI \u5de5\u5177\u3002",source:"@site/docs/develop_guide/tools/artisan.md",sourceDirName:"develop_guide/tools",slug:"/develop_guide/tools/artisan",permalink:"/en/develop_guide/tools/artisan",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/tools/artisan.md",tags:[],version:"current",lastUpdatedAt:1653563801,formattedLastUpdatedAt:"May 26, 2022",sidebarPosition:20,frontMatter:{title:"Artisan",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u6269\u5c55\u5f00\u53d1",permalink:"/en/develop_guide/plugin_develop/plugin_extend"},next:{title:"API \u4ecb\u7ecd",permalink:"/en/api/api_usage"}},i={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",level:3},{value:"\u521d\u59cb\u5316\uff0c\u4e0b\u8f7d\u5de5\u5177",id:"\u521d\u59cb\u5316\u4e0b\u8f7d\u5de5\u5177",level:3},{value:"\u91cd\u65b0\u751f\u6210 API \u4ee5\u53ca\u6587\u6863",id:"\u91cd\u65b0\u751f\u6210-api-\u4ee5\u53ca\u6587\u6863",level:3},{value:"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801",id:"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801",level:3},{value:"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801",id:"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801",level:3},{value:"\u751f\u6210 API \u7684\u5bf9\u5e94 Markdown",id:"\u751f\u6210-api-\u7684\u5bf9\u5e94-markdown",level:3},{value:"\u6dfb\u52a0\u65b0\u7684 protobuf \u670d\u52a1",id:"\u6dfb\u52a0\u65b0\u7684-protobuf-\u670d\u52a1",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"artisan"},"Artisan"),(0,a.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u4e13\u95e8\u4e3a\u5f00\u53d1\u8005\u6253\u9020\u7684\u4e00\u6b3e\u7528\u4e8e\u751f\u6210\u9879\u76ee\u67b6\u6784\u548c\u4e00\u4e9b\u4ee3\u7801\u7684 CLI \u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest\n")),(0,a.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf"},"protoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protoc-gen-go"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"artisan new github.com/tkeel-io/helloworld\n\ncd helloworld\n\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/tkeel-template-go"},"tkeel-io/tkeel-template-go"),"\u4e0a\u590d\u5236\u6a21\u677f\uff0c\u5e76\u4e14\u5c06\u5305\u66ff\u6362\u4e3a helloworld"),(0,a.kt)("p",null,"\u6b64\u65f6\u5df2\u7ecf\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u5e76\u8bbf\u95ee helloworld \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd helloworld\n$ go generate ./...\n$ go build -o ./bin/ ./...\n$ ./bin/helloworld\n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u4e0b\u8f7d\u5de5\u5177"},"\u521d\u59cb\u5316\uff0c\u4e0b\u8f7d\u5de5\u5177"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\uff0c\u90a3\u4e48\u5fc5\u987b\u5148\u521d\u59cb\u5316\u5e76\u4e0b\u8f7d\u5de5\u5177\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Download necessary plug-ins\nmake init\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u811a\u672c\uff0c\u53ef\u4ee5\u4e0b\u8f7d protoc \u5de5\u5177\u5168\u5bb6\u6876\uff0c\u4ee5\u53ca protoc \u63d2\u4ef6\u548c\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -d -u  github.com/tkeel-io/tkeel-interface/openapi\ngo get -d -u  github.com/tkeel-io/kit\ngo get -d -u  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.0\ngo install  github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest\ngo install  google.golang.org/protobuf/cmd/protoc-gen-go@v1.27.1\ngo install  google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1.0\ngo install  github.com/tkeel-io/tkeel-interface/protoc-gen-go-http@latest\ngo install  github.com/tkeel-io/tkeel-interface/protoc-gen-go-errors@latest\ngo install  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.0\n")),(0,a.kt)("h3",{id:"\u91cd\u65b0\u751f\u6210-api-\u4ee5\u53ca\u6587\u6863"},"\u91cd\u65b0\u751f\u6210 API \u4ee5\u53ca\u6587\u6863"),(0,a.kt)("p",null,"\u5982\u679c\u4fee\u6539\u4e86 Proto \u5b9a\u4e49\uff0c\u90a3\u4e48\u5fc5\u987b\u91cd\u65b0\u751f\u6210\u5bf9\u5e94\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate proto source code\nmake api\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u811a\u672c\uff0c\u53ef\u4ee5\u8fd0\u884c protoc \u5de5\u5177\u6765\u751f\u6210\u5bf9\u5e94\u7684\u7ed3\u6784\u4f53\u4ee5\u53ca\u6587\u6863"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protoc --proto_path=. \\\n       --proto_path=./third_party \\\n       --go_out=paths=source_relative:. \\\n       --go-http_out=paths=source_relative:. \\\n       --go-grpc_out=paths=source_relative:. \\\n       --go-errors_out=paths=source_relative:. \\\n       --openapiv2_out=./api/ \\\n       --openapiv2_opt=allow_merge=true \\\n       --openapiv2_opt=logtostderr=true \\\n       --openapiv2_opt=json_names_for_fields=false \\\n       $(API_PROTO_FILES)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-go_out=paths=source_relative:.")," \u751f\u6210 go \u7684\u7ed3\u6784\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--go-http_out=paths=source_relative:.")," \u751f\u6210\u5bf9\u5e94\u7684 http \u670d\u52a1\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--go-grpc_out=paths=source_relative:.")," \u751f\u6210\u5bf9\u5e94\u7684 grpc \u670d\u52a1\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--go-errors_out=paths=source_relative:.")," \u751f\u6210 errors \u7684\u7ed3\u6784\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-go_out=paths=source_relative:.")," \u751f\u6210 go \u7684\u7ed3\u6784\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--openapiv2_out=./api/")," \u751f\u6210\u5bf9\u5e94\u7684 swagger \u6587\u6863")),(0,a.kt)("h3",{id:"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801"},"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801"),(0,a.kt)("p",null,"\u5982\u679c\u4fee\u6539\u4e86 Proto \u670d\u52a1\u5b9a\u4e49\uff0c\u90a3\u4e48\u5fc5\u987b\u901a\u8fc7\u4ee5\u4e0b\u811a\u672c\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate service template\nartisan proto service api/helloworld/v1/helloworld.proto -t pkg/service\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u907f\u514d\u4fee\u6539\u60a8\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u8be5\u547d\u4ee4\u4e0d\u4f1a\u8986\u76d6\u60a8\u7684\u6587\u4ef6\u3002")),(0,a.kt)("h3",{id:"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801"},"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)\nartisan proto server api/helloworld/v1/helloworld.proto\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u811a\u672c\uff0c\u53ef\u4ee5\u8f93\u51fa\u542f\u52a8\u4ee3\u7801\uff0c\u60a8\u53ef\u4ee5\u52a0\u5165\u4efb\u4f55\u5730\u65b9\u6765\u5b8c\u6210\u670d\u52a1\u7684\u542f\u52a8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\ud83d\udcbb Add the following code to cmd/<project>.go  \ud83d\udc47:\n\nimport(\n    Greeter_v1 "github.com/tkeel-io/tkeeldemo/api/helloworld/v1"\n)\n\nGreeterSrv := service.NewGreeterService()\nGreeter_v1.RegisterGreeterHTTPServer(httpSrv.Container, GreeterSrv)\nGreeter_v1.RegisterGreeterServer(grpcSrv.GetServe(), GreeterSrv)\n')),(0,a.kt)("h3",{id:"\u751f\u6210-api-\u7684\u5bf9\u5e94-markdown"},"\u751f\u6210 API \u7684\u5bf9\u5e94 Markdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate API's makedown\nartisan markdown -f api/apidocs.swagger.json  -t third_party/markdown-templates/ -o ./docs/API/Greeter -m all\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u65b0\u7684-protobuf-\u670d\u52a1"},"\u6dfb\u52a0\u65b0\u7684 protobuf \u670d\u52a1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684 proto")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate proto template\nartisan proto add api/helloworld/v1/helloworld.proto\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bf9\u5e94\u6587\u4ef6\uff08\u7ed3\u6784\u4f53\u3001\u6587\u6863\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate proto source code\nmake api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bf9\u5e94\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate service template\nartisan proto service api/helloworld/v1/helloworld.proto -t pkg/service\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bf9\u5e94\u542f\u52a8\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)\nartisan proto server api/helloworld/v1/helloworld.proto\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u542f\u52a8\u4ee3\u7801\u9700\u8981\u52a0\u5165\u60a8\u7684\u542f\u52a8\u51fd\u6570\u4e2d\u3002")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Run the program\ngo run cmd/helloworld/main.go\n")))}c.isMDXComponent=!0}}]);