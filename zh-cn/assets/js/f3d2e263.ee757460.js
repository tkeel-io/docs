"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[970],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7629:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"Artisan",sidebar_position:1},c="Artisan",p={unversionedId:"developer_cookbook/artisan",id:"developer_cookbook/artisan",isDocsHomePage:!1,title:"Artisan",description:"\u8fd9\u662f\u6211\u4eec\u4e13\u95e8\u4e3a\u5f00\u53d1\u8005\u6253\u9020\u7684\u4e00\u6b3e\u7528\u4e8e\u751f\u6210\u9879\u76ee\u67b6\u6784\u548c\u4e00\u4e9b\u4ee3\u7801\u7684 CLI \u5de5\u5177\u3002",source:"@site/docs/developer_cookbook/artisan.md",sourceDirName:"developer_cookbook",slug:"/developer_cookbook/artisan",permalink:"/docs/zh-cn/developer_cookbook/artisan",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/artisan.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Artisan",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd",permalink:"/docs/zh-cn/getting_started/how-to-use-plugin"},next:{title:"\u5b9e\u4f53",permalink:"/docs/zh-cn/developer_cookbook/core/entity"}},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",children:[],level:3},{value:"\u751f\u6210 protobuf",id:"\u751f\u6210-protobuf",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"artisan"},"Artisan"),(0,a.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u4e13\u95e8\u4e3a\u5f00\u53d1\u8005\u6253\u9020\u7684\u4e00\u6b3e\u7528\u4e8e\u751f\u6210\u9879\u76ee\u67b6\u6784\u548c\u4e00\u4e9b\u4ee3\u7801\u7684 CLI \u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest\n")),(0,a.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf"},"protoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protoc-gen-go"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"artisan new github.com/tkeel-io/helloworld\n\ncd helloworld\n\n# Download necessary plug-ins\nmake init\n")),(0,a.kt)("h3",{id:"\u751f\u6210-protobuf"},"\u751f\u6210 protobuf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"artisan proto add api/helloworld/v1/helloworld.proto\n\n# Generate proto source code\nmake api\n\n# Generate service template\nartisan proto service api/helloworld/v1/helloworld.proto -t pkg/service\n\n# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)\nartisan proto server api/helloworld/v1/helloworld.proto\n\n# Run the program\ngo run cmd/helloworld/main.go\n")))}d.isMDXComponent=!0}}]);