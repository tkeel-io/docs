"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9503],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,b=d["".concat(a,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2048:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],l={title:"\u8ba2\u9605",sidebar_position:7},a="\u8ba2\u9605",p={unversionedId:"developer_cookbook/core/specs/subscription",id:"developer_cookbook/core/specs/subscription",title:"\u8ba2\u9605",description:"----",source:"@site/docs/developer_cookbook/core/specs/subscription.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/subscription",permalink:"/en/developer_cookbook/core/specs/subscription",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/subscription.md",tags:[],version:"current",lastUpdatedAt:1641286313,formattedLastUpdatedAt:"1/4/2022",sidebarPosition:7,frontMatter:{title:"\u8ba2\u9605",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5173\u7cfb",permalink:"/en/developer_cookbook/core/specs/relationship"},next:{title:"TQL",permalink:"/en/developer_cookbook/core/specs/tql"}},u={},s=[{value:"\u8ba2\u9605\u5206\u7c7b",id:"\u8ba2\u9605\u5206\u7c7b",level:2},{value:"\u8ba2\u9605\u7684\u5b9e\u73b0",id:"\u8ba2\u9605\u7684\u5b9e\u73b0",level:2},{value:"\u8ba2\u9605\u7684\u8868\u8fbe\u5f62\u5f0f",id:"\u8ba2\u9605\u7684\u8868\u8fbe\u5f62\u5f0f",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u6bcf\u4e2a plugin \u5728\u6ce8\u518c\u7684\u65f6\u5019\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u4e0e core \u4ea4\u4e92\u7684 pubsub, \u540d\u79f0\u4e3a plugin \u7684\u540d\u79f0\u3002 topic \u7edf\u4e00\u4e3a pubcore\uff0csubcore\uff0c\u53ea\u6709 core \u4e0e\u8be5 plugin \u6709\u76f8\u5173\u6743\u9650\uff0c\u6bd4\u5982 pluginA: pluginA\u3002pubcore \u7528\u4e8e\u5411 core \u53d1\u5e03\u6570\u636e\uff0csubcore \u7528\u4e8e\u4ece core \u8ba2\u9605\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u8ba2\u9605\u5206\u7c7b"},"\u8ba2\u9605\u5206\u7c7b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b9e\u65f6\u8ba2\u9605\uff08\u6536\u5230\u6d88\u606f\u5c31\u89e6\u53d1\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u53d8\u66f4\u8ba2\u9605\uff08\u5c5e\u6027\u6709\u53d8\u66f4\u65f6\u89e6\u53d1\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u5468\u671f\u8ba2\u9605\uff08\u5468\u671f\u6027\u4e0a\u62a5\u6240\u6709\u5c5e\u6027\uff09")),(0,i.kt)("h2",{id:"\u8ba2\u9605\u7684\u5b9e\u73b0"},"\u8ba2\u9605\u7684\u5b9e\u73b0"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7b5b\u9009\u6570\u636e"),(0,i.kt)("li",{parentName:"ol"},"\u6570\u636e\u8ba1\u7b97\u548c\u53d8\u6362"),(0,i.kt)("li",{parentName:"ol"},"\u53d1\u9001\u6570\u636e")),(0,i.kt)("h2",{id:"\u8ba2\u9605\u7684\u8868\u8fbe\u5f62\u5f0f"},"\u8ba2\u9605\u7684\u8868\u8fbe\u5f62\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": "pluginA",\n  "filter": "/abcd/+",\n  "target": "pluginB",\n  "mode": "realtime"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": "pluginA",\n  "filter": "* where thing_id=abcd",\n  "target": "pluginA",\n  "mode": "realtime"\n}\n')),(0,i.kt)("p",null,"\u5176\u4e2d filter \u53ef\u91c7\u7528\u4e0d\u540c\u7684\u8868\u8fbe\u5f62\u5f0f"))}f.isMDXComponent=!0}}]);