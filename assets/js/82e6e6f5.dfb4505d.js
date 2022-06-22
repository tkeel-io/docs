"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=l,s=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(s,i(i({ref:t},k),{},{components:n})):a.createElement(s,i({ref:t},k))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:50,title:"\u63d2\u4ef6\u6253\u5305\u5236\u4f5c\u6307\u5357"},i="\u63d2\u4ef6\u5b89\u88c5\u5305\u5236\u4f5c\u6307\u5357",p={unversionedId:"develop_guide/plugin_develop/plugin_chart",id:"develop_guide/plugin_develop/plugin_chart",title:"\u63d2\u4ef6\u6253\u5305\u5236\u4f5c\u6307\u5357",description:"\u672c\u6307\u5357\u5c06\u6307\u5f15\u63d2\u4ef6\u5f00\u53d1\u8005\u5c06\u4ee5\u5f00\u53d1\u5b8c\u6210\u7684\u63d2\u4ef6\u6253\u5305\u6210\u63d2\u4ef6\u6240\u9700\u7684 chart\u3002",source:"@site/docs/develop_guide/plugin_develop/plugin_chart.md",sourceDirName:"develop_guide/plugin_develop",slug:"/develop_guide/plugin_develop/plugin_chart",permalink:"/develop_guide/plugin_develop/plugin_chart",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/develop_guide/plugin_develop/plugin_chart.md",tags:[],version:"current",lastUpdatedAt:1655200199,formattedLastUpdatedAt:"2022/6/14",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"\u63d2\u4ef6\u6253\u5305\u5236\u4f5c\u6307\u5357"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u63d2\u4ef6\u5f00\u53d1",permalink:"/develop_guide/plugin_develop/web_develop"},next:{title:"\u63d2\u4ef6\u6269\u5c55\u5f00\u53d1",permalink:"/develop_guide/plugin_develop/plugin_extend"}},o={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Chart \u89c4\u8303",id:"chart-\u89c4\u8303",level:2},{value:"\u5177\u4f53\u6d41\u7a0b",id:"\u5177\u4f53\u6d41\u7a0b",level:2},{value:"\u7f16\u8bd1\u5e76\u6253\u5305\u4e3a Docker",id:"\u7f16\u8bd1\u5e76\u6253\u5305\u4e3a-docker",level:3},{value:"1.1. \u514b\u9686\u4ee3\u7801\u5230\u672c\u5730",id:"11-\u514b\u9686\u4ee3\u7801\u5230\u672c\u5730",level:4},{value:"2. \u7f16\u8bd1\u7a0b\u5e8f\u5e76\u6784\u5efadocker\u955c\u50cf",id:"2-\u7f16\u8bd1\u7a0b\u5e8f\u5e76\u6784\u5efadocker\u955c\u50cf",level:4},{value:"3. \u4e0a\u4f20docker\u955c\u50cf\u5230 docker hub\u4ed3\u5e93",id:"docker-upload",level:4},{value:"\u7f16\u5199\u5e76\u4e0a\u4f20 Helm Chart",id:"\u7f16\u5199\u5e76\u4e0a\u4f20-helm-chart",level:3},{value:"1. \u4fee\u6539\u955c\u50cf",id:"1-\u4fee\u6539\u955c\u50cf",level:4},{value:"2. \u4fee\u6539\u7248\u672c",id:"2-\u4fee\u6539\u7248\u672c",level:4},{value:"3. \u68c0\u67e5\u5e76\u6253\u5305",id:"3-\u68c0\u67e5\u5e76\u6253\u5305",level:4},{value:"4. \u53d1\u5e03\u81f3 helm \u4ed3\u5e93",id:"4-\u53d1\u5e03\u81f3-helm-\u4ed3\u5e93",level:4}],k={toc:d};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u63d2\u4ef6\u5b89\u88c5\u5305\u5236\u4f5c\u6307\u5357"},"\u63d2\u4ef6\u5b89\u88c5\u5305\u5236\u4f5c\u6307\u5357"),(0,l.kt)("p",null,"\u672c\u6307\u5357\u5c06\u6307\u5f15\u63d2\u4ef6\u5f00\u53d1\u8005\u5c06\u4ee5\u5f00\u53d1\u5b8c\u6210\u7684\u63d2\u4ef6\u6253\u5305\u6210\u63d2\u4ef6\u6240\u9700\u7684 chart\u3002"),(0,l.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u4eba\u5458:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/"},"Docker \u7684\u57fa\u672c\u4f7f\u7528\u80fd\u529b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/"},"Helm \u7684\u57fa\u672c\u4f7f\u7528\u80fd\u529b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/home/"},"Kubernetes \u7684\u57fa\u672c\u6982\u5ff5"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\u529f\u80fd\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/develop_guide/plugin_develop/plugin_openapi"},"\u5b9e\u73b0 OPENAPI \u7684\u7aef\u70b9")),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u8981\u7684 Kubernetes \u7684 Workloads(Deployment,StatefulSets\u7b49\u53ef\u88ab\u6ce8\u5165\u7684\u90e8\u7f72\u7b56\u7565)")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u73af\u5883")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907linux\u5f00\u53d1\u73af\u5883\uff08\u5efa\u8baeUbuntu18.04+\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 git"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 make"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 go 1.16+"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 protoc"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 helm3"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 docker"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6b63\u786e\u5b89\u88c5 tkeel \u6700\u65b0\u7248"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u7684\u79c1\u6709docker\u4ed3\u5e93\u6216\u8005docker hub\u8d26\u53f7\uff08\u9700\u672c\u5730\u767b\u5f55docker hub\uff09")),(0,l.kt)("h2",{id:"chart-\u89c4\u8303"},"Chart \u89c4\u8303"),(0,l.kt)("p",null,"tKeel \u7684\u63d2\u4ef6\u9700\u8981\u5728 chart \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u4e2d\u8fdb\u884c\u989d\u5916\u5b9a\u4e49\uff0c\u53ea\u6709\u8fd9\u6837\u624d\u80fd\u5728 tKeel \u7684\u63d2\u4ef6\u6e90\u4e2d\u8bfb\u53d6\u51fa\u6765\u5e76\u6b63\u786e\u5b89\u88c5\u5230\u6574\u4e2a\u5e73\u53f0\u4e2d\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u5b9a\u4e49\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),"\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"annotations"),"\u8fdb\u884c\u5982\u4e0b\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# Chart annotations.\nannotations:\n  # Valid values are "y","yes","true","on","1"\n  # not case sensitive.\n  tkeel.io/enable: "true"\n  tkeel.io/deployment-name: "hello-tkeel"\n  tkeel.io/plugin-port: "8080"\n  # Valid values are "user","manager"\n  # not case sensitive.\n  tkeel.io/tag: User\n  # plugin version.\n  tkeel.io/version: v0.4.0\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/enable")," \u5b57\u6bb5\u662f\u5fc5\u987b\u7684\uff0c\u542b\u6709\u6b64\u5b57\u6bb5\u7684\u63d2\u4ef6\u624d\u4f1a\u88ab\u5e73\u53f0\u8ba4\u5b9a\u4e3a\u662f\u63d2\u4ef6\u7684\u5b89\u88c5\u5305\u3002\n\u5f53\u5b57\u6bb5\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u6216\u8005\u5176\u4ed6\u6709\u6548\u503c\u65f6\uff0c\u5219\u9700\u8981\u58f0\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/deployment-name")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/plugin-port")," \u5b57\u6bb5\uff0c\u6b64\u65f6\u5219\u4f1a\u81ea\u52a8\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"dapr")," \u76f8\u5173\u914d\u7f6e\u6ce8\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/deployment-name")," \u4e2d\u6307\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u6e32\u67d3\u540e\u540d\u79f0\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/deployment-name")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u58f0\u660e\u9700\u8981\u6ce8\u5165\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u7684\u540d\u79f0\u3002\uff08\u6b64\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u4e2d\u6e32\u67d3\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/plugin-port")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u58f0\u660e\u5df2\u7ecf\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"OPENAPI")," \u7684 HTTP \u670d\u52a1\u7684\u7aef\u53e3\u53f7\u3002\uff08\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"dapr")," \u8fb9\u8f66\u8fdb\u884c\u4ea4\u4e92\u7684\u7aef\u53e3\u53f7\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/tag")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u63d2\u4ef6\u7c7b\u578b\uff0c\u58f0\u660e\u6b64\u5b89\u88c5\u5305\u5b89\u88c5\u7684\u63d2\u4ef6\u662f\u79df\u6237\u5e73\u53f0\u8fd8\u662f\u7ba1\u7406\u5e73\u53f0\uff0c\u9ed8\u8ba4\u503c\u4e3a\u79df\u6237\u5e73\u53f0\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"manager"),":\u7ba1\u7406\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user"),":\u79df\u6237\u5e73\u53f0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tkeel.io/version")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u63d2\u4ef6\u7248\u672c\u53f7\uff0c\u5b9a\u4e49\u540e\u5c06\u8986\u76d6 chart \u4e2d\u5b9a\u4e49\u7684\u7248\u672c\u53f7\u3002"))),(0,l.kt)("p",null,"\u63d2\u4ef6\u7c7b\u578b\uff08\uff09"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"tKeel \u7684\u63d2\u4ef6\u5b89\u88c5\u5305\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5b8c\u6210\u5bf9 ",(0,l.kt)("strong",{parentName:"p"},"dapr")," \u7684\u76f8\u5173\u914d\u7f6e\u7684\u81ea\u52a8\u6ce8\u5165\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u8005\u65e0\u9700\u518d\u53bb\u5b66\u4e60 ",(0,l.kt)("strong",{parentName:"p"},"dapr")," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes")," \u7684\u90e8\u7f72\u914d\u7f6e\u7b49\u3002\u81ea\u52a8\u6ce8\u5165\u529f\u80fd\u53ea\u5bf9\u62e5\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u914d\u7f6e\u7b56\u7565\u7684\u5b89\u88c5\u5305\u751f\u6548\u3002\u6b64\u529f\u80fd\u662f\u53ef\u9009\u7684\uff0c\u6211\u4eec\u6b22\u8fce\u4e5f\u652f\u6301\u5927\u5bb6\u5728 tKeel \u7684\u57fa\u7840\u4e0a\u5bf9 ",(0,l.kt)("strong",{parentName:"p"},"dapr")," \u8fdb\u884c\u5b9a\u5236\u5316\u914d\u7f6e\uff0c\u6b64\u65f6\u5219\u5c06\u81ea\u52a8\u6ce8\u5165\u5173\u95ed\u5373\u53ef\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"tKeel \u63d2\u4ef6\u7684 chart \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u7684 ",(0,l.kt)("a",{target:"_blank",href:n(26383).Z},"JSON SCHEMA"))),(0,l.kt)("h2",{id:"\u5177\u4f53\u6d41\u7a0b"},"\u5177\u4f53\u6d41\u7a0b"),(0,l.kt)("p",null,"\u63d2\u4ef6\u6253\u5305\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u6253\u5305\u4e3a Docker\uff0c\u5e76\u4e0a\u4f20\u81f3\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u5199\u63d2\u4ef6 Helm Chart\uff0c\u5e76\u4e0a\u4f20\u81f3\u4ed3\u5e93")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u5b8c\u6210\u540e\u63d2\u4ef6\u5904\u4e8e\u53d1\u5e03\u72b6\u6001\uff0c\u53ef\u4ee5\u88ab\u5e73\u53f0\u5b89\u88c5\u3002"),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u5e76\u6253\u5305\u4e3a-docker"},"\u7f16\u8bd1\u5e76\u6253\u5305\u4e3a Docker"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ee5 tkeel-device \u6f14\u793a\u7f16\u8bd1\u5e76\u6253\u5305\u4e3a Docker \u7684\u8fc7\u7a0b"),(0,l.kt)("h4",{id:"11-\u514b\u9686\u4ee3\u7801\u5230\u672c\u5730"},"1.1. \u514b\u9686\u4ee3\u7801\u5230\u672c\u5730"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/tkeel-io/tkeel-device.git\n")),(0,l.kt)("p",null,"\u8fdb\u5165\u4ee3\u7801\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd tkeel-device\n")),(0,l.kt)("p",null,"\u66f4\u65b0 go \u4f9d\u8d56\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go mod tidy\n")),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u7f16\u8bd1\u73af\u5883\uff08\u521d\u59cb\u5316\u9700\u8981\uff0c\u540e\u7eed\u6b64\u6b65\u9aa4\u53ef\u5ffd\u7565\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make init\n")),(0,l.kt)("p",null,"\u751f\u6210swagger api\uff08\u5982\u679c\u6ca1\u6709\u6539\u52a8api\u76ee\u5f55\u4e0b\u7684proto\uff0c\u6b64\u6b65\u9aa4\u53ef\u5ffd\u7565\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make api\n")),(0,l.kt)("h4",{id:"2-\u7f16\u8bd1\u7a0b\u5e8f\u5e76\u6784\u5efadocker\u955c\u50cf"},"2. \u7f16\u8bd1\u7a0b\u5e8f\u5e76\u6784\u5efadocker\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build -t demo/tkeel-device:0.4.4 .\n")),(0,l.kt)("p",null,"Dockerfile "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'############################################################ \n# Dockerfile to build golang Installed Containers \n\n# Based on alpine\n\n############################################################\n\nFROM golang:1.18.0 AS builder\n\nCOPY . /src\nWORKDIR /src\n\nRUN GOPROXY=https://goproxy.cn make build\n\nFROM alpine:3.13\n\nRUN mkdir /keel\nCOPY --from=builder /src/dist/linux_amd64/release/tkeel-device /keel\n\n\nWORKDIR /keel\nCMD ["/keel/tkeel-device"]\n')),(0,l.kt)("h4",{id:"docker-upload"},"3. \u4e0a\u4f20docker\u955c\u50cf\u5230 docker hub\u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker push demo/tkeel-device:0.4.4\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6b64\u5904\u9700\u8981\u5df2\u767b\u5f55 docker\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u767b\u5f55\u5931\u8d25\u3002"))),(0,l.kt)("h3",{id:"\u7f16\u5199\u5e76\u4e0a\u4f20-helm-chart"},"\u7f16\u5199\u5e76\u4e0a\u4f20 Helm Chart"),(0,l.kt)("p",null,"tKeel \u7684\u63d2\u4ef6\u6253\u5305\u683c\u5f0f\u9075\u5faa Helm Chart \u89c4\u8303\uff0c\u60a8\u53ea\u9700\u8981\u6309\u7167\u9700\u6c42\u52a0\u5165 tKeel \u6ce8\u91ca\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u4e2d\u5373\u53ef\u914d\u7f6e\u597d tKeel \u63d2\u4ef6\u7684 Helm Chart\u3002"),(0,l.kt)("p",null,"\u5e73\u53f0\u5728\u5b89\u88c5\u65f6\u4f1a\u6839\u636e\u90e8\u7f72\u7b56\u7565\u7684\u4e0d\u540c\u8bb0\u5f55\u4e00\u4e9b\u4e2d\u95f4\u4ef6\u7684\u8d44\u6e90\u4fe1\u606f\uff0c\n\u63d2\u4ef6\u53ef\u4ee5\u5728 templates \u4e2d\u57fa\u4e8e value.yaml \u6765\u5b9e\u73b0\u914d\u7f6e\u6587\u4ef6\u89e3\u51b3\u5916\u90e8\u4e2d\u95f4\u4ef6\u7684\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u5c06\u4ee5 device \u7684 Helm Chart \u4e3a\u4f8b\u8bb2\u89e3 Helm Chart\u3002"),(0,l.kt)("p",null,"device \u7684 Helm Chart \u4f4d\u4e8e chart \u76ee\u5f55\u4e0b\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tkeel-device\n    \u251c\u2500\u2500 Chart.yaml\n    \u251c\u2500\u2500 templates\n    \u2502    \u251c\u2500\u2500 deployment.yaml\n    \u2502    \u251c\u2500\u2500 _helpers.tpl\n    \u2502    \u251c\u2500\u2500 hpa.yaml\n    \u2502    \u251c\u2500\u2500 ingress.yaml\n    \u2502    \u251c\u2500\u2500 NOTES.txt\n    \u2502    \u251c\u2500\u2500 serviceaccount.yaml\n    \u2502    \u2514\u2500\u2500 service.yaml\n    \u2514\u2500\u2500 values.yaml\n")),(0,l.kt)("h4",{id:"1-\u4fee\u6539\u955c\u50cf"},"1. \u4fee\u6539\u955c\u50cf"),(0,l.kt)("p",null,"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"chart/tkeel-device/values.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"image.repository")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"demo/tkeel-device"),"\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"demo/tkeel-device")," \u662f\u955c\u50cf\u5730\u5740\uff0c\u6765\u6e90\u4e8e",(0,l.kt)("a",{parentName:"p",href:"#docker-upload"},"\u4e0a\u4f20docker\u955c\u50cf\u5230 docker hub\u4ed3\u5e93"),"\u6b65\u9aa4\u63d0\u4f9b\u7684\u955c\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"Tag")," \u7684\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"demo/tkeel-device:0.4.4"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="chart/tkeel-device/values.yaml"',title:'"chart/tkeel-device/values.yaml"'},"image:\n  repository: tkeelio/tkeel-device\n  pullPolicy: Always\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"chart/tkeel-device/values.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"repository")," \u53ea\u9700\u8981\u4e00\u4e2a\u6b63\u786e\u7684 docker \u955c\u50cf\u5730\u5740\u5373\u53ef\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u955c\u50cf\u4ed3\u5e93\u6216 docker hub\u3002\n\u5982\u679c\u5e0c\u671b\u4ece\u7b2c\u4e09\u65b9\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u83b7\u53d6\u955c\u50cf\uff08\u975e Docker Hub\uff09\uff0c\u5219\u9700\u8981\u5728\u955c\u50cf\u4ed3\u5e93\u540d\u79f0\u524d\u52a0\u4e0a\u7b2c\u4e09\u65b9\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u7684 DNS \u540d\u79f0\u3002"))),(0,l.kt)("h4",{id:"2-\u4fee\u6539\u7248\u672c"},"2. \u4fee\u6539\u7248\u672c"),(0,l.kt)("p",null,"\u4fee\u6539\u955c\u50cf\u7248\u672c\uff0c\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"chart/tkeel-device/Chart.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"appVersion")," \u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.4"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="chart/tkeel-device/Chart.yaml"',title:'"chart/tkeel-device/Chart.yaml"'},'apiVersion: v2\nname: tkeel-device\ndescription: "\u63d0\u4f9b\u8bbe\u5907\u63a5\u5165\u7ba1\u7406\u670d\u52a1"\ntype: application\n# Helm Chart \u7248\u672c.\nversion: 0.4.4\n# Docker \u955c\u50cf\u7248\u672c.\nappVersion: 0.4.4\n# Chart annotations.\nannotations:\n  # \u662f\u5426\u4e3a tKeel \u63d2\u4ef6.\n  tkeel.io/enable: "true"\n  # \u63d2\u4ef6\u7c7b\u578b\uff08manager:\u7ba1\u7406\u5e73\u53f0, user:\u79df\u6237\u5e73\u53f0\uff09\n  tkeel.io/tag: User\n  # \u4f9d\u8d56\u7684 tKeel \u5e73\u53f0\u7248\u672c\n  tkeel.io/version: v0.4.0\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u955c\u50cftag\u662f\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"appVersion"),"\u5b57\u6bb5\u7684\u503c\u4f5c\u4e3a\u7248\u672c\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.4")," \u662f\u955c\u50cf\u7248\u672c\uff0c\u6765\u6e90\u4e8e",(0,l.kt)("a",{parentName:"p",href:"#docker-upload"},"\u4e0a\u4f20docker\u955c\u50cf\u5230 docker hub\u4ed3\u5e93"),"\u6b65\u9aa4\u63d0\u4f9b\u7684\u955c\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"Tag")," \u7684\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"demo/tkeel-device:0.4.4"),"\u3002"))),(0,l.kt)("p",null,"\u4fee\u6539 Helm Chart \u7248\u672c\uff0c\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"chart/tkeel-device/Chart.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," \u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.4"),"\u3002\n\u6b64\u5904 ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.4")," \u4f1a\u4f5c\u4e3a\u63d2\u4ef6\u7248\u672c\u663e\u793a\u5728\u7ba1\u7406\u5217\u8868\u3002"),(0,l.kt)("h4",{id:"3-\u68c0\u67e5\u5e76\u6253\u5305"},"3. \u68c0\u67e5\u5e76\u6253\u5305"),(0,l.kt)("p",null,"\u68c0\u67e5helm chart\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm lint chart/tkeel-device\n")),(0,l.kt)("p",null,"\u6253\u5305 helm chart \u5e94\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm package chart/tkeel-device\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u5e94\u8be5\u4f1a\u751f\u6210\u4e00\u4e2a\u6253\u5305\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"tkeel-device-0.4.4.tgz")),(0,l.kt)("h4",{id:"4-\u53d1\u5e03\u81f3-helm-\u4ed3\u5e93"},"4. \u53d1\u5e03\u81f3 helm \u4ed3\u5e93"),(0,l.kt)("p",null,"\u514b\u9686 helm charts \u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/<your-repo>/helm-charts.git\n")),(0,l.kt)("p",null,"\u8fdb\u5165 helm-charts \u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cd",metastring:"helm-charts","helm-charts":!0},"")),(0,l.kt)("p",null,"\u5c06\u521a\u521a\u6253\u5305\u7684\u955c\u50cf\u62f7\u8d1d\u5230helm-charts\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cp ../tkeel-device/tkeel-device-0.4.4.tgz ./\n")),(0,l.kt)("p",null,"\u91cd\u5efahelm\u4ed3\u5e93\u7d22\u5f15"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo index . --url=https://demo.github.io/helm-charts\n")))}m.isMDXComponent=!0},26383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/plugin_chart_schema-cd55f02ebf87f0a1977cb1108373a929.json"}}]);