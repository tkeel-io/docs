"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[2993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),s=i,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={sidebar_position:6,title:"IoTHub",slug:"/internal_concepts/iothub"},p=void 0,u={unversionedId:"concepts/iothub",id:"concepts/iothub",title:"IoTHub",description:"IoTHub \u4f5c\u4e3a tKeel \u5e73\u53f0\u8bbe\u5907\u63a5\u5165\u7684\u5165\u53e3\uff0c\u652f\u6301\u6d77\u91cf\u8bbe\u5907\u7684\u5feb\u901f\u63a5\u5165\uff0c \u652f\u6301 MQTT\uff08S\uff09, CoAP, LwM2M, STOMP, MQTT-SN\u7b49\u901a\u7528\u7269\u8054\u7f51\u534f\u8bae\uff0c\u96c6\u6210 emqx \u4f7f\u7528\u6237\u80fd\u591f\u5feb\u901f\u73a9\u8f6c\u6570\u636e\u4e0a\u4e91\u3002",source:"@site/docs/concepts/iothub.md",sourceDirName:"concepts",slug:"/internal_concepts/iothub",permalink:"/en/internal_concepts/iothub",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/concepts/iothub.md",tags:[],version:"current",lastUpdatedAt:1641431670,formattedLastUpdatedAt:"1/6/2022",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"IoTHub",slug:"/internal_concepts/iothub"},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u673a\u5236",permalink:"/en/internal_concepts/plugin"},next:{title:"\u65b0\u624b\u5f15\u5bfc",permalink:"/en/getting_started/guide"}},c={},d=[{value:"\u539f\u59cb\u6570\u636e",id:"\u539f\u59cb\u6570\u636e",level:2},{value:"\u5c5e\u6027\u6570\u636e",id:"\u5c5e\u6027\u6570\u636e",level:2},{value:"\u9065\u6d4b\u6570\u636e",id:"\u9065\u6d4b\u6570\u636e",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u4f1a\u8bdd\u5b9e\u4f53",id:"\u4f1a\u8bdd\u5b9e\u4f53",level:2},{value:"\u8ba2\u9605\u5b9e\u4f53",id:"\u8ba2\u9605\u5b9e\u4f53",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u96c6\u6210 emqx \uff1f",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u96c6\u6210-emqx-",level:2},{value:"\u5982\u4f55\u8fde\u63a5 IoTHub ?",id:"\u5982\u4f55\u8fde\u63a5-iothub-",level:2},{value:"\u4e0a\u884c\uff0c\u5982\u4f55\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0 \uff1f",id:"\u4e0a\u884c\u5982\u4f55\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0-",level:2},{value:"\u4e0b\u884c\uff0c\u5982\u4f55\u8ba2\u9605\u5e73\u53f0\u7684\u6570\u636e \uff1f",id:"\u4e0b\u884c\u5982\u4f55\u8ba2\u9605\u5e73\u53f0\u7684\u6570\u636e-",level:2}],m={toc:d};function s(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iothub"},"IoTHub"),(0,o.kt)("p",null,"IoTHub \u4f5c\u4e3a tKeel \u5e73\u53f0\u8bbe\u5907\u63a5\u5165\u7684\u5165\u53e3\uff0c\u652f\u6301\u6d77\u91cf\u8bbe\u5907\u7684\u5feb\u901f\u63a5\u5165\uff0c \u652f\u6301 MQTT\uff08S\uff09, CoAP, LwM2M, STOMP, MQTT-SN\u7b49\u901a\u7528\u7269\u8054\u7f51\u534f\u8bae\uff0c\u96c6\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"emqx")," \u4f7f\u7528\u6237\u80fd\u591f\u5feb\u901f\u73a9\u8f6c\u6570\u636e\u4e0a\u4e91\u3002"),(0,o.kt)("p",null,"\u63d0\u4f9b\u5b89\u5168\u53ef\u9760\u7684\u8bbe\u5907\u63a5\u5165\u529f\u80fd\uff0c \u9002\u5e94\u7528\u6237\u7684\u4f7f\u7528\u4e60\u60ef\uff0c \u540e\u7eed\u6301\u7eed\u652f\u6301\u5bf9\u63a5\u4e3b\u6d41\u7684\u7b2c\u4e09\u65b9\u8fb9\u7f18\u7ba1\u7406\u7cfb\u7edf\uff0c \u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"thingsboard-gateway")," \u7b49\uff0c \u63d0\u4f9b\u7075\u6d3b\u591a\u53d8\u7684\u63a5\u5165\u65b9\u5f0f\uff0c \u4e3a\u6570\u636e\u4e0a\u4e91\u4fdd\u9a7e\u62a4\u822a\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0c IoTHub \u4f5c\u4e3a\u4e91\u8fb9\u534f\u540c\u7684\u6838\u5fc3\u8fde\u63a5\u7ec4\u4ef6\uff0c \u652f\u6301\u4e91\u8fb9\u4e92\u76f8\u8c03\u7528\uff08\u4e0a\u884c\u548c\u4e0b\u884c\uff09\uff0c \u6ee1\u8db3\u7528\u6237\u5e38\u89c1\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u7684\u4e0a\u884c\u6570\u636e\u4e3b\u8981\u5305\u62ec\uff1a \u539f\u59cb\u6570\u636e\uff0c \u5c5e\u6027\u6570\u636e\uff0c \u9065\u6d4b\u6570\u636e\u3002\n\u652f\u6301\u7684\u4e0b\u884c\u6570\u636e\u4e3b\u8981\u5305\u62ec\uff1a \u5c5e\u6027\u6570\u636e\uff0c \u9065\u6d4b\u6570\u636e\uff0c \u547d\u4ee4\u3002"),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(9323).Z,width:"1094",height:"422"}))),(0,o.kt)("h2",{id:"\u539f\u59cb\u6570\u636e"},"\u539f\u59cb\u6570\u636e"),(0,o.kt)("p",null,"\u4e3b\u52a8\u63a8\u9001\u5230\u5e73\u53f0\u7684\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"\u5c5e\u6027\u6570\u636e"},"\u5c5e\u6027\u6570\u636e"),(0,o.kt)("p",null,"\u4e0e\u4e00\u7c7b\u8bbe\u5907\u76f8\u5173\u8054\u7684\u9759\u6001\u952e\u503c\u5bf9\u3002\u4f8b\u5982\u7248\u672c\u3001\u6240\u5c5e\u90e8\u95e8\u3001\u5382\u5546\u7b49\uff0c \uff08kv\uff09"),(0,o.kt)("h2",{id:"\u9065\u6d4b\u6570\u636e"},"\u9065\u6d4b\u6570\u636e"),(0,o.kt)("p",null,"\u5e26\u6709\u65f6\u95f4\u5e8f\u5217\u7684\u6570\u636e\u6d4b\u70b9\u3002\u4f8b\u5982\u7535\u538b\u3001\u7535\u6d41\u3001\u529f\u7387\u3001\u6e29\u5ea6\u3001\u6e7f\u5ea6\u7b49\uff0c\u53ef\u7528\u4e8e\u5b58\u50a8\u3001\u67e5\u8be2\u3001\u53ef\u89c6\u5316\u89c6\u56fe\u3002(\u6570\u636e\u7c7b\u578b\uff0c \u5355\u4f4d\uff0c \u6700\u5927\u503c\uff0c\u6700\u5c0f\u503c)"),(0,o.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,o.kt)("p",null,"\u53ef\u8c03\u7528\u7684\u53cd\u63a7\u547d\u4ee4\u3001\u51b3\u5b9a\u8bbe\u5907\u7684\u884c\u4e3a"),(0,o.kt)("h2",{id:"\u4f1a\u8bdd\u5b9e\u4f53"},"\u4f1a\u8bdd\u5b9e\u4f53"),(0,o.kt)("p",null,"\u4f1a\u8bdd\u5b9e\u4f53\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"tKeel")," \u5e73\u53f0\u7684\u4e00\u7c7b\u5b9e\u4f53\uff08\u8be6\u89c1 ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," \u5b9e\u4f53\u7684\u6982\u5ff5\uff09\uff0c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"tKeel")," \u7cfb\u7edf\u5185\u90e8\u7684\u4e00\u4e2a\u6982\u5ff5\uff0c\u4e00\u822c\u7684\u7528\u6237\u53ef\u4ee5\u4e0d\u7528\u5173\u5fc3\u8fd9\u4e2a\u6982\u5ff5\uff0c\u8fd9\u4e2a\u6982\u5ff5\u4e3b\u8981\u662f\u9488\u5bf9\u5f00\u53d1\u4eba\u5458\u3002 "),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c \u4f1a\u8bdd\u5b9e\u4f53\u662f\u5ba2\u6237\u7aef\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"tKeel")," \u5e73\u53f0\u5efa\u7acb\u8fde\u63a5\u4e4b\u540e\u540e\u7aef\u521b\u5efa\u7684\u4e00\u4e2a\u5b9e\u4f53\uff0c\u5176\u4e3b\u8981\u4f5c\u7528\u662f\u52a8\u6001\u7ef4\u62a4 \u5ba2\u6237\u7aef \u548c tKeel \u5e73\u53f0\u7684\u8fde\u63a5\u4fe1\u606f,\u4ee5\u53ca\u4e00\u4e9b\u9700\u8981\u6301\u4e45\u5316\u7684\u6709\u72b6\u6001\u4fe1\u606f\uff08\u4f8b\u5982MQTT\u88ab\u8ba2\u9605\u7684topic\uff09\u7b49\u4fe1\u606f\uff0c \u907f\u514d\u4fe1\u606f\u7684\u4e22\u5931\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u8fde\u63a5\u4fe1\u606f\u4fdd\u5b58\u5728\u72b6\u6001\u5b58\u50a8\u91cc\u9762\u3002"),(0,o.kt)("h2",{id:"\u8ba2\u9605\u5b9e\u4f53"},"\u8ba2\u9605\u5b9e\u4f53"),(0,o.kt)("p",null,"\u8ba2\u9605\u5b9e\u4f53\u540c\u4f1a\u8bdd\u5b9e\u4f53\u4e00\u6837\uff0c \u4e5f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"tKeel")," \u5e73\u53f0\u7684\u4e00\u7c7b\u5b9e\u4f53\uff0c \u4e5f\u662f\u9488\u5bf9\u5f00\u53d1\u4eba\u5458\u7684\u4e00\u4e2a\u6982\u5ff5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"iothub")," \u521b\u5efa\u7684\u8ba2\u9605\u5b9e\u4f53\u4e3b\u8981\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"mode"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"onChange"),"\u7684\u5b9e\u4f53\uff0c "),(0,o.kt)("p",null,"\u5176\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," \u8ba2\u9605 ",(0,o.kt)("inlineCode",{parentName:"p"},"iothub")," \u9700\u8981\u5173\u5fc3\u7684\u4e00\u4e9b\u53d8\u5316\u4e8b\u4ef6\uff08\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"tKeel-device")," \u7684\u5c5e\u6027\u503c\u3001\u9065\u6d4b\u503c\u53d1\u751f\u53d8\u5316\u4e86\uff09\uff0c\u5f53\u8fd9\u4e9b\u5173\u5fc3\u7684\u4e8b\u4ef6\u53d1\u751f\u4e86\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," \u4f1a\u544a\u77e5",(0,o.kt)("inlineCode",{parentName:"p"},"iothub"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"iothub"),"\u5c31\u53ef\u4ee5\u9488\u5bf9\u8fd9\u4e9b\u4e8b\u4ef6\u505a\u76f8\u5e94\u7684\u4e00\u7c7b\u903b\u8f91\u5904\u7406\uff0c"),(0,o.kt)("p",null,"\u6bd4\u5982\u5c06\u4e8b\u4ef6\u544a\u77e5\u5ba2\u6237\u7aef\u7b49\u3002\u4e3b\u8981\u7528\u4e8e\u4e0b\u884c\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u96c6\u6210-emqx-"},"\u4e3a\u4ec0\u4e48\u9009\u62e9\u96c6\u6210 emqx \uff1f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"emqx")," \u662f\u4e00\u4e2a\u7269\u8054\u7f51\u884c\u4e1a\u6bd4\u8f83\u6d41\u884c\u7684\u5f00\u6e90\u9879\u76ee\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"tKeel"),"\u4e5f\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c \u4e3a\u4e86\u7b80\u5316\u4e00\u4e9b\u590d\u6742\u5ea6\uff0c \u9075\u5faa\u5f00\u6e90\u7684\u601d\u60f3, \u4f5c\u4e3a\u96c6\u5927\u6210\u8005\uff0c\u4e5f\u4e3a\u4e86\u5c0a\u91cd\u7528\u6237\u7684\u4e00\u4e9b\u4f7f\u7528\u4e60\u60ef\u548c\u6982\u5ff5\u3002\u6211\u4eec\u51b3\u5b9a\u6301\u7eed\u96c6\u6210\u548c\u9002\u914d"),(0,o.kt)("p",null,"\u7269\u8054\u7f51\u884c\u4e1a\u6bd4\u8f83\u6210\u719f\uff0c\u77e5\u540d\u5ea6\u6bd4\u8f83\u9ad8\uff0c \u6280\u672f\u5148\u8fdb\u7684\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7cfb\u7edf\u3002\u5145\u5206\u53d1\u6325\u5f00\u6e90\u7684\u4ef7\u503c\uff0c \u4e89\u53d6\u4e3a\u7528\u6237\u89e3\u51b3\u96c6\u6210\u6bd4\u8f83\u7e41\u7410\u7684\u5de5\u4f5c\uff0c \u7b80\u5316\u7528\u6237\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u8fde\u63a5-iothub-"},"\u5982\u4f55\u8fde\u63a5 IoTHub ?"),(0,o.kt)("p",null,"\u5728\u5e73\u53f0\u521b\u5efa\u8bbe\u5907\u4e4b\u540e\u5f97\u5230\u7684\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u548c\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID"),"\uff0c \u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"password"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID")," \u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"usnername")," \u901a\u8fc7\u4e0d\u540c\u7684\u534f\u8bae\u8fde\u63a5",(0,o.kt)("inlineCode",{parentName:"p"},"iothub"),"\u3002"),(0,o.kt)("h2",{id:"\u4e0a\u884c\u5982\u4f55\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0-"},"\u4e0a\u884c\uff0c\u5982\u4f55\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0 \uff1f"),(0,o.kt)("p",null,"\u5f53\u901a\u8fc7 MQTT, CoAP \u534f\u8bae \u8fde\u63a5\u5230\u5e73\u53f0\u4e4b\u540e\uff0c \u53ef\u4ee5\u901a\u8fc7\u5411\u5e73\u53f0\u63a8\u9001\u4ee5\u4e0b\u51e0\u79cd\u6570\u636e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'\u539f\u59cb\u6570\u636e\uff0ctopic \u4e3a\uff1a"v1/devices/me/raw"\u3002'),(0,o.kt)("li",{parentName:"ol"},'\u5c5e\u6027\u6570\u636e\uff0ctopic \u4e3a\uff1a"v1/devices/me/attributes"\u3002'),(0,o.kt)("li",{parentName:"ol"},'\u9065\u6d4b\u6570\u636e\uff0ctopic \u4e3a\uff1a"v1/devices/me/telemetry"\u3002')),(0,o.kt)("h2",{id:"\u4e0b\u884c\u5982\u4f55\u8ba2\u9605\u5e73\u53f0\u7684\u6570\u636e-"},"\u4e0b\u884c\uff0c\u5982\u4f55\u8ba2\u9605\u5e73\u53f0\u7684\u6570\u636e \uff1f"),(0,o.kt)("p",null,"\u5f53\u901a\u8fc7 MQTT, CoAP \u534f\u8bae \u8fde\u63a5\u5230\u5e73\u53f0\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u4e3b\u52a8\u8ba2\u9605\u5173\u5fc3\u5bf9\u5e94\u7684 topic, \u5f53\u5e73\u53f0\u7684\u5bf9\u5e94\u6570\u636e\u53d1\u751f\u6539\u53d8\u4e86\uff0c \u5e73\u53f0\u4f1a\u4e3b\u52a8\u63a8\u9001\u5bf9\u5e94\u7684\u6570\u636e\u5230\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'\u8ba2\u9605\u5c5e\u6027\u6570\u636e\uff0ctopic \u4e3a\uff1a"v1/devices/me/attributes"\u3002'),(0,o.kt)("li",{parentName:"ol"},'\u8ba2\u9605\u9065\u6d4b\u6570\u636e\uff0ctopic \u4e3a\uff1a"v1/devices/me/telemetry"\u3002'),(0,o.kt)("li",{parentName:"ol"},'\u8ba2\u9605\u547d\u4ee4\u6570\u636e\uff0ctopic \u4e3a\uff1a"v1/devices/me/commands"\u3002(todo)')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u70b9\u51fb ",(0,o.kt)("a",{parentName:"p",href:"/en/developer_cookbook/iothub/getting_started"},"\u8fd9\u91cc")," \u4e86\u89e3 \u5982\u4f55\u5feb\u901f\u4f7f\u7528 IoTHub\u3002")))}s.isMDXComponent=!0},9323:function(e,t,n){t.Z=n.p+"assets/images/iothub-architecture-98cd86c181762d5352be7bc3a3046dcc.png"}}]);