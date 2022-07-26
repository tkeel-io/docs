"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),k=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=k(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=k(n),s=r,d=m["".concat(i,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var k=2;k<l;k++)o[k]=n[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:10,title:"\u63d2\u4ef6 chart \u5305\u5236\u4f5c\u6307\u5357"},o="\u63d2\u4ef6\u5b89\u88c5\u5305\u5236\u4f5c\u6307\u5357",p={unversionedId:"developer_cookbook/tkeel_plugin/plugin_chart",id:"developer_cookbook/tkeel_plugin/plugin_chart",title:"\u63d2\u4ef6 chart \u5305\u5236\u4f5c\u6307\u5357",description:"\u672c\u6307\u5357\u5c06\u6307\u5f15\u63d2\u4ef6\u5f00\u53d1\u8005\u5c06\u4ee5\u5f00\u53d1\u5b8c\u6210\u7684\u63d2\u4ef6\u6253\u5305\u6210\u63d2\u4ef6\u6240\u9700\u7684 chart\u3002",source:"@site/docs/developer_cookbook/tkeel_plugin/plugin_chart.md",sourceDirName:"developer_cookbook/tkeel_plugin",slug:"/developer_cookbook/tkeel_plugin/plugin_chart",permalink:"/en/developer_cookbook/tkeel_plugin/plugin_chart",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/tkeel_plugin/plugin_chart.md",tags:[],version:"current",lastUpdatedAt:1655169851,formattedLastUpdatedAt:"Jun 14, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u63d2\u4ef6 chart \u5305\u5236\u4f5c\u6307\u5357"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u63d2\u4ef6",permalink:"/en/developer_cookbook/tkeel_plugin/create"},next:{title:"\u5b89\u5168\u4f53\u7cfb\u8bbe\u8ba1",permalink:"/en/developer_cookbook/security/SECURITY-001-how_designed"}},i={},k=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Chart \u89c4\u8303",id:"chart-\u89c4\u8303",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:2},{value:"\u63d2\u4ef6 chart \u793a\u4f8b",id:"\u63d2\u4ef6-chart-\u793a\u4f8b",level:2}],c={toc:k};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63d2\u4ef6\u5b89\u88c5\u5305\u5236\u4f5c\u6307\u5357"},"\u63d2\u4ef6\u5b89\u88c5\u5305\u5236\u4f5c\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u6307\u5f15\u63d2\u4ef6\u5f00\u53d1\u8005\u5c06\u4ee5\u5f00\u53d1\u5b8c\u6210\u7684\u63d2\u4ef6\u6253\u5305\u6210\u63d2\u4ef6\u6240\u9700\u7684 chart\u3002"),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u4eba\u5458:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/"},"Helm \u7684\u57fa\u672c\u4f7f\u7528\u80fd\u529b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/home/"},"Kubernetes \u7684\u57fa\u672c\u6982\u5ff5"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/developer_cookbook/tkeel_plugin/openapi"},"\u5b9e\u73b0 OPENAPI \u7684\u7aef\u70b9")),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u8981\u7684 Kubernetes \u7684 Workloads(Deployment,StatefulSets\u7b49\u53ef\u88ab\u6ce8\u5165\u7684\u90e8\u7f72\u7b56\u7565)")),(0,r.kt)("h2",{id:"chart-\u89c4\u8303"},"Chart \u89c4\u8303"),(0,r.kt)("p",null,"tKeel \u7684\u63d2\u4ef6\u9700\u8981\u5728 chart \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u4e2d\u8fdb\u884c\u989d\u5916\u5b9a\u4e49\uff0c\u53ea\u6709\u8fd9\u6837\u624d\u80fd\u5728 tKeel \u7684\u63d2\u4ef6\u6e90\u4e2d\u8bfb\u53d6\u51fa\u6765\u5e76\u6b63\u786e\u5b89\u88c5\u5230\u6574\u4e2a\u5e73\u53f0\u4e2d\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u5b9a\u4e49\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),"\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"annotations"),"\u8fdb\u884c\u5982\u4e0b\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Chart annotations.\nannotations:\n  # Valid values are "y","yes","true","on","1"\n  # not case sensitive.\n  tkeel.io/enable: "true"\n  tkeel.io/deployment-name: "hello-tkeel"\n  tkeel.io/plugin-port: "8080"\n  # Valid values are "user","manager"\n  # not case sensitive.\n  tkeel.io/tag: User\n  # plugin version.\n  tkeel.io/version: v0.4.0\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/enable")," \u5b57\u6bb5\u662f\u5fc5\u987b\u7684\uff0c\u542b\u6709\u6b64\u5b57\u6bb5\u7684\u63d2\u4ef6\u624d\u4f1a\u88ab\u5e73\u53f0\u8ba4\u5b9a\u4e3a\u662f\u63d2\u4ef6\u7684\u5b89\u88c5\u5305\u3002\n\u5f53\u5b57\u6bb5\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u6216\u8005\u5176\u4ed6\u6709\u6548\u503c\u65f6\uff0c\u5219\u9700\u8981\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/deployment-name")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/plugin-port")," \u5b57\u6bb5\uff0c\u6b64\u65f6\u5219\u4f1a\u81ea\u52a8\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"dapr")," \u76f8\u5173\u914d\u7f6e\u6ce8\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/deployment-name")," \u4e2d\u6307\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u6e32\u67d3\u540e\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/deployment-name")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u58f0\u660e\u9700\u8981\u6ce8\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u7684\u540d\u79f0\u3002\uff08\u6b64\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u4e2d\u6e32\u67d3\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/plugin-port")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u58f0\u660e\u5df2\u7ecf\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAPI")," \u7684 HTTP \u670d\u52a1\u7684\u7aef\u53e3\u53f7\u3002\uff08\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"dapr")," \u8fb9\u8f66\u8fdb\u884c\u4ea4\u4e92\u7684\u7aef\u53e3\u53f7\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/tag")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u63d2\u4ef6\u7c7b\u578b\uff0c\u58f0\u660e\u6b64\u5b89\u88c5\u5305\u5b89\u88c5\u7684\u63d2\u4ef6\u662f\u7528\u6237\u4fa7\u8fd8\u662f\u7cfb\u7edf\u6d4b\uff0c\u9ed8\u8ba4\u503c\u4e3a\u7528\u6237\u4fa7\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tkeel.io/version")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\uff0c\u63d2\u4ef6\u7248\u672c\u53f7\uff0c\u5b9a\u4e49\u540e\u5c06\u8986\u76d6 chart \u4e2d\u5b9a\u4e49\u7684\u7248\u672c\u53f7\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tKeel \u7684\u63d2\u4ef6\u5b89\u88c5\u5305\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5b8c\u6210\u5bf9 ",(0,r.kt)("strong",{parentName:"p"},"dapr")," \u7684\u76f8\u5173\u914d\u7f6e\u7684\u81ea\u52a8\u6ce8\u5165\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u8005\u65e0\u9700\u518d\u53bb\u5b66\u4e60 ",(0,r.kt)("strong",{parentName:"p"},"dapr")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," \u7684\u90e8\u7f72\u914d\u7f6e\u7b49\u3002\u81ea\u52a8\u6ce8\u5165\u529f\u80fd\u53ea\u5bf9\u62e5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u914d\u7f6e\u7b56\u7565\u7684\u5b89\u88c5\u5305\u751f\u6548\u3002\u6b64\u529f\u80fd\u662f\u53ef\u9009\u7684\uff0c\u6211\u4eec\u6b22\u8fce\u4e5f\u652f\u6301\u5927\u5bb6\u5728 tKeel \u7684\u57fa\u7840\u4e0a\u5bf9 ",(0,r.kt)("strong",{parentName:"p"},"dapr")," \u8fdb\u884c\u5b9a\u5236\u5316\u914d\u7f6e\uff0c\u6b64\u65f6\u5219\u5c06\u81ea\u52a8\u6ce8\u5165\u5173\u95ed\u5373\u53ef\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tKeel \u63d2\u4ef6\u7684 chart \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u7684 ",(0,r.kt)("a",{target:"_blank",href:n(26383).Z},"JSON SCHEMA"))),(0,r.kt)("h2",{id:"\u6d41\u7a0b"},"\u6d41\u7a0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa chart \u6a21\u677f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm create xxx\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u9700\u6c42\u521b\u5efa\u4e0d\u540c\u7684\u90e8\u7f72\u7b56\u7565\u5e76\u4fee\u6539\u5bf9\u5e94\u7684 template \u548c values")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u9700\u6c42\u6dfb\u52a0 tKeel \u6ce8\u91ca\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u4e2d\u3002"))),(0,r.kt)("h2",{id:"\u63d2\u4ef6-chart-\u793a\u4f8b"},"\u63d2\u4ef6 chart \u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/quickstarts/tree/main/tkeel-manager/deploy/chart/hello-tkeel"},"\u63d2\u4ef6\u5b89\u88c5\u5305\u793a\u4f8b\u6587\u4ef6")))}u.isMDXComponent=!0},26383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/plugin_chart_schema-cd55f02ebf87f0a1977cb1108373a929.json"}}]);