"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=l,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={title:"\ud83d\udd27 \u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6",sidebar_position:6},i="\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6",o={unversionedId:"getting_started/how_to_develop_a_plugin",id:"getting_started/how_to_develop_a_plugin",title:"\ud83d\udd27 \u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6",description:"tKeel \u5e73\u53f0\u4e2d\u9664\u4e86\u6838\u5fc3\u7ec4\u4ef6\u5916\u5176\u4ed6\u529f\u80fd\u5747\u6709\u63d2\u4ef6\u63d0\u4f9b\uff0c\u5747\u53ef\u4ee5\u81ea\u5b9a\u4e49\u66f4\u6362\u6216\u8005\u6269\u5c55\u3002",source:"@site/docs/getting_started/how_to_develop_a_plugin.md",sourceDirName:"getting_started",slug:"/getting_started/how_to_develop_a_plugin",permalink:"/getting_started/how_to_develop_a_plugin",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/getting_started/how_to_develop_a_plugin.md",tags:[],version:"current",lastUpdatedAt:1655190726,formattedLastUpdatedAt:"2022\u5e746\u670814\u65e5",sidebarPosition:6,frontMatter:{title:"\ud83d\udd27 \u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",permalink:"/use"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/developer_cookbook/core/getting_started"}},p={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Step 1. Use template",id:"step-1-use-template",level:2},{value:"Step 2. Git clone *.git",id:"step-2-git-clone-git",level:2},{value:"Step 3. Edit code.",id:"step-3-edit-code",level:2},{value:"Step 4. Build images and push",id:"step-4-build-images-and-push",level:2},{value:"Step 5. Edit chart and Helm package",id:"step-5-edit-chart-and-helm-package",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6"},"\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u63d2\u4ef6"),(0,l.kt)("p",null,"tKeel \u5e73\u53f0\u4e2d\u9664\u4e86\u6838\u5fc3\u7ec4\u4ef6\u5916\u5176\u4ed6\u529f\u80fd\u5747\u6709\u63d2\u4ef6\u63d0\u4f9b\uff0c\u5747\u53ef\u4ee5\u81ea\u5b9a\u4e49\u66f4\u6362\u6216\u8005\u6269\u5c55\u3002"),(0,l.kt)("p",null,"\u672c\u9875\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7 tKeel \u4ed3\u5e93\u4e2d\u7684 tkeel-template-go \u4ece0\u5f00\u59cb\u5f00\u53d1\u4e00\u4e2a say hello \u7684\u63d2\u4ef6\u5e76\u52a0\u5165\u5230\u81ea\u5df1\u7684\u4ed3\u5e93\u4e2d\u3002\u540e\u7eed\u5b89\u88c5\u6d41\u7a0b\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/getting_started/how-to-install-plugin"},"\ud83d\ude80 \u5982\u4f55\u5b89\u88c5\u63d2\u4ef6"),"\u3002"),(0,l.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://go.dev/"},"go")," \u5e76\u62e5\u6709\u4e00\u5b9a\u7684\u5f00\u53d1\u80fd\u529b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker"))),(0,l.kt)("h2",{id:"step-1-use-template"},"Step 1. Use template"),(0,l.kt)("p",null,"\u5728\u6700\u5f00\u59cb\uff0c\u6211\u4eec\u9700\u8981\u6253\u5f00 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/tkeel-template-go"},"tkeel-template-go")," \u4ed3\u5e93\u5e76\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Use this template")," \u6309\u94ae\uff0c\u9009\u62e9\u540e\u7eed\u5bf9\u5e94\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Owner")," \u5e76\u521b\u5efa\u5c5e\u4e8e\u65b0\u63d2\u4ef6\u7684\u4ed3\u5e93\u3002"),(0,l.kt)("h2",{id:"step-2-git-clone-git"},"Step 2. Git clone *.git"),(0,l.kt)("p",null,"\u5c06\u65b0\u5efa\u7684\u4ed3\u5e93\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u5c06\u65b0\u63d2\u4ef6\u7684\u4ed3\u5e93 ",(0,l.kt)("inlineCode",{parentName:"p"},"clone")," \u4e0b\u6765\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bf7\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"OWNER")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"REPO")," \u66ff\u6362\u6210\u4e3a\u65b0\u63d2\u4ef6\u7684\u6b63\u786e\u6240\u6709\u8005\u548c\u4ed3\u5e93\u540d\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:${OWNER}/${REPO}.git\n")),(0,l.kt)("h2",{id:"step-3-edit-code"},"Step 3. Edit code."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u7f16\u8f91\u5668\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"clone")," \u7684\u4ed3\u5e93\uff0c\u5e76\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"apis/*/*.proto"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"li"},"cmd/main.go"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"pkg/service/*.go")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"go.mod")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"tkeel-template-go")," \u5e76\u66ff\u6362\u6210\u65b0\u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"tkeel-hello"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"pkg/service/openapi.go")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"Identify")," \u51fd\u6570\uff0c\u5c06\u8fd4\u56de\u503c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'&openapi_v1.IdentifyResponse{\n    Res:          util.GetV1ResultOK(),\n    PluginId:     "tkeel-hello",\n    Version:      "v0.3.0",\n    TkeelVersion: "v0.3.0",\n}\n')),(0,l.kt)("p",null,"\u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u503c\uff0c\u5177\u4f53\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/develop_guide/plugin_develop/plugin_openapi#openapi-define"},"OPENAPI")," \u89c4\u8303\u3002"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u66ff\u6362\u5b8c\u6210\u540e\u8fd0\u884c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go mod tidy\n")),(0,l.kt)("h2",{id:"step-4-build-images-and-push"},"Step 4. Build images and push"),(0,l.kt)("p",null,"\u5728\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b\u4f9d\u6b21\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bf7\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"DOCKER_REPO"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"DOCKER_IMAGE")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"TAG")," \u53d8\u91cf\u66ff\u6362\u6210\u5bf9\u5e94\u7684\u6570\u636e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make all\n\ndocker build ./ -t ${DOCKER_REPO}/${DOCKER_IMAGE}:${TAG}\n\ndocker push ${DOCKER_REPO}/${DOCKER_IMAGE}:${TAG}\n")),(0,l.kt)("h2",{id:"step-5-edit-chart-and-helm-package"},"Step 5. Edit chart and Helm package"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u65b0\u63d2\u4ef6\u4ed3\u5e93\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"charts/tkeel-hello/values.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"image")," \u53d8\u91cf\u7684\u503c\uff0c\u628a\u6784\u5efa\u51fa\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Docker Image")," \u66ff\u6362\u539f\u6709\u5185\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u6587\u4ef6\u5939 ",(0,l.kt)("inlineCode",{parentName:"li"},"charts/tkeel-hello")," \u4e3a ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"charts/${PLUGIN_NAME}`\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u4fee\u6539\u540e\u7684\u6587\u4ef6\u5939\u4e0b\u6240\u6709\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"tkeel-hello")," \u5b57\u6bb5\u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"${PLUGIN_NAME}"),"\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"fork")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/helm-charts"},"Helm-chart")," \u4ed3\u5e93\u5e76\u4fee\u6539\u5bf9\u5e94 URL \u548c\u8bbe\u7f6e ",(0,l.kt)("strong",{parentName:"p"},"GitHub page")," \u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u5e76\u6258\u7ba1\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"GitHub")," \u4e0a\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Helm Repo"),"\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm link")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"helm package")," \u547d\u4ee4\u5c06\u4fee\u6539\u540e\u7684\u63d2\u4ef6"))}m.isMDXComponent=!0}}]);