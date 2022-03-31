"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[130],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,k=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:2,title:"OpenAPI"},p="OpenAPI",u={unversionedId:"developer_cookbook/tkeel_plugin/openapi",id:"developer_cookbook/tkeel_plugin/openapi",title:"OpenAPI",description:"OpenAPI \u662f\u4e00\u5957\u7528\u4e8e tKeel \u5e73\u53f0\u4e2d\u63d2\u4ef6\u4e0e\u5e73\u53f0\u8fdb\u884c\u4ea4\u4e92\u7684\u4e00\u5957 HTTP \u89c4\u8303\u3002\u901a\u8fc7\u5b9a\u4e49\u6ce8\u518c\u3001\u79df\u6237\u53d8\u66f4\u7b49\u52a8\u4f5c\u548c\u72b6\u6001\u68c0\u67e5\u63a5\u53e3\u5b9e\u73b0\u5bf9 tKeel \u5e73\u53f0\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406\u3002",source:"@site/docs/developer_cookbook/tkeel_plugin/openapi.md",sourceDirName:"developer_cookbook/tkeel_plugin",slug:"/developer_cookbook/tkeel_plugin/openapi",permalink:"/en/developer_cookbook/tkeel_plugin/openapi",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/tkeel_plugin/openapi.md",tags:[],version:"current",lastUpdatedAt:1648026225,formattedLastUpdatedAt:"3/23/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"OpenAPI"},sidebar:"tutorialSidebar",previous:{title:"tKeel \u63d2\u4ef6",permalink:"/en/developer_cookbook/tkeel_plugin/overview"},next:{title:"\u521b\u5efa\u63d2\u4ef6",permalink:"/en/developer_cookbook/tkeel_plugin/create"}},c={},d=[{value:"Identify",id:"identify",level:2},{value:"Status",id:"status",level:2},{value:"Tenant-enable",id:"tenant-enable",level:2},{value:"Tenant-disable",id:"tenant-disable",level:2},{value:"Addons-Identify",id:"addons-identify",level:2}],s={toc:d};function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openapi"},"OpenAPI"),(0,i.kt)("p",null,"OpenAPI \u662f\u4e00\u5957\u7528\u4e8e tKeel \u5e73\u53f0\u4e2d\u63d2\u4ef6\u4e0e\u5e73\u53f0\u8fdb\u884c\u4ea4\u4e92\u7684\u4e00\u5957 HTTP \u89c4\u8303\u3002\u901a\u8fc7\u5b9a\u4e49",(0,i.kt)("em",{parentName:"p"},"\u6ce8\u518c"),"\u3001",(0,i.kt)("em",{parentName:"p"},"\u79df\u6237\u53d8\u66f4"),"\u7b49\u52a8\u4f5c\u548c",(0,i.kt)("em",{parentName:"p"},"\u72b6\u6001\u68c0\u67e5"),"\u63a5\u53e3\u5b9e\u73b0\u5bf9 tKeel \u5e73\u53f0\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u4e0d\u540c\u751f\u547d\u5468\u671f\u4e2d\u5e73\u53f0\u4e0e OpenAPI \u8fdb\u884c\u4ea4\u4e92\u6765\u7ba1\u7406\u63d2\u4ef6\u7684\u884c\u4e3a\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"API \u5b9a\u4e49\u67e5\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"/en/appendix/openapi"},"OpenAPI \u5b9a\u4e49"))),(0,i.kt)("h2",{id:"identify"},"Identify"),(0,i.kt)("p",null,"Identify \u63a5\u53e3\u662f\u63d2\u4ef6\u5728\u88ab\u5b89\u88c5\u8fdb\u5e73\u53f0\u540e\uff0c\u5e73\u53f0\u7b49\u5f85\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001\u4e3a RUNNING \u65f6\u8bbf\u95ee\u7684\u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u8be5\u63a5\u53e3\u4e3b\u8981\u662f\u5e73\u53f0\u5411\u63d2\u4ef6\u83b7\u53d6\u4e00\u4e9b\u5fc5\u8981\u7684\u4fe1\u606f\u548c\u63d2\u4ef6\u8c03\u7528\u5e73\u53f0\u90e8\u5206\u529f\u80fd\u6240\u5fc5\u987b\u5b9a\u4e49\u7684\u6743\u9650\u3001\u83dc\u5355\u3001\u6269\u5c55\u70b9\u6216\u8005\u8ba1\u91cf\u8d44\u6e90\u7b49\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u8be5\u63a5\u53e3\uff0c\u5e73\u53f0\u5c06\u63d2\u4ef6\u9700\u8981\u5e73\u53f0\u5e2e\u5fd9\u6269\u5c55\u7684\u529f\u80fd\u70b9\u5728\u5e73\u53f0\u4e2d\u5b9a\u4e49\u548c\u521d\u59cb\u5316\uff0c\u63d2\u4ef6\u624d\u80fd\u5728\u5e73\u53f0\u4e2d\u8fd0\u884c\u8d77\u6765\u3002"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Status \u63a5\u53e3\u662f\u63d2\u4ef6\u7684\u72b6\u6001\u63a5\u53e3\uff0c\u901a\u8fc7\u8bbf\u95ee\u8be5\u63a5\u53e3\uff0c\u5e73\u53f0\u53ef\u4ee5\u83b7\u53d6\u5230\u63d2\u4ef6\u5f53\u524d\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u5e76\u6839\u636e\u8fd0\u884c\u72b6\u6001\u901a\u77e5\u7f51\u5173\u51b3\u5b9a\u662f\u5426\u9700\u8981\u670d\u52a1\u964d\u7ea7\u7b49\u6d41\u91cf\u63a7\u5236\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"tenant-enable"},"Tenant-enable"),(0,i.kt)("p",null,"Tenant-enable \u63a5\u53e3\u662f\u5e73\u53f0\u4e2d\u7684\u79df\u6237\u542f\u7528\u63d2\u4ef6\u65f6\uff0c\u5e73\u53f0\u4e3b\u52a8\u8c03\u7528\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u5c06\u79df\u6237\u7684\u5fc5\u8981\u4fe1\u606f\u4f20\u9012\u7ed9\u63d2\u4ef6\uff0c\u5e0c\u671b\u63d2\u4ef6\u80fd\u591f\u5728\u81ea\u8eab\u5185\u90e8\u5b8c\u6210\u5bf9\u5f53\u524d\u542f\u7528\u7684\u79df\u6237\u8fdb\u884c\u521d\u59cb\u5316\u6570\u636e\u6216\u8005\u6062\u590d\u6570\u636e\u7b49\u64cd\u4f5c\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5e73\u53f0\u7684\u79df\u6237\u7ba1\u7406\u662f\u4e00\u5957\u5bbd\u677e\u7684\u534f\u5b9a\uff0c\u63d2\u4ef6\u9700\u81ea\u8eab\u7ef4\u62a4\u79df\u6237\u7684\u6570\u636e\uff0c\u79df\u6237\u6570\u636e\u7684\u9694\u79bb\u9700\u8981\u63d2\u4ef6\u81ea\u8eab\u5904\u7406\u3002\u5e73\u53f0\u4ec5\u5728\u7f51\u5173\u5904\u5bf9\u672a\u542f\u7528\u79df\u6237\u7684\u8bbf\u95ee\u8fdb\u884c\u9650\u5236\u3002")),(0,i.kt)("h2",{id:"tenant-disable"},"Tenant-disable"),(0,i.kt)("p",null,"Tenant-disable \u63a5\u53e3\u662f\u5e73\u53f0\u4e2d\u79df\u6237\u505c\u7528\u63d2\u4ef6\u65f6\uff0c\u5e73\u53f0\u4e3b\u52a8\u8c03\u7528\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u5c06\u79df\u6237\u7684\u5fc5\u8981\u4fe1\u606f\u4f20\u9012\u7ed9\u63d2\u4ef6\uff0c\u5e0c\u671b\u63d2\u4ef6\u80fd\u591f\u5728\u81ea\u8eab\u5185\u90e8\u5b8c\u6210\u5bf9\u5f53\u524d\u505c\u7528\u7684\u79df\u6237\u8fdb\u884c\u5220\u9664\u6570\u636e\u6216\u8005\u5907\u4efd\u6570\u636e\u7b49\u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"addons-identify"},"Addons-Identify"),(0,i.kt)("p",null,"Addons-identify \u63a5\u53e3\u662f\u7528\u4e8e\u6269\u5c55\u70b9\u7684\u786e\u8ba4\u6240\u4f7f\u7528\u7684\u3002\u7528\u4e8e\u901a\u77e5\u63d2\u4ef6\u6269\u5c55\u70b9\u5df2\u88ab\u5b9e\u73b0\uff0c\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addons_identify",src:n(6035).Z,width:"1182",height:"265"})))}f.isMDXComponent=!0},6035:function(e,t,n){t.Z=n.p+"assets/images/addons_identify-5b2c1ff45bd796f950bfd067e54c9228.png"}}]);