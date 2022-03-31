"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5558],{3905:function(A,o,i){i.d(o,{Zo:function(){return c},kt:function(){return K}});var e=i(7294);function t(A,o,i){return o in A?Object.defineProperty(A,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):A[o]=i,A}function n(A,o){var i=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(A,o).enumerable}))),i.push.apply(i,e)}return i}function r(A){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(Object(i),!0).forEach((function(o){t(A,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(o){Object.defineProperty(A,o,Object.getOwnPropertyDescriptor(i,o))}))}return A}function R(A,o){if(null==A)return{};var i,e,t=function(A,o){if(null==A)return{};var i,e,t={},n=Object.keys(A);for(e=0;e<n.length;e++)i=n[e],o.indexOf(i)>=0||(t[i]=A[i]);return t}(A,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(e=0;e<n.length;e++)i=n[e],o.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(A,i)&&(t[i]=A[i])}return t}var E=e.createContext({}),a=function(A){var o=e.useContext(E),i=o;return A&&(i="function"==typeof A?A(o):r(r({},o),A)),i},c=function(A){var o=a(A.components);return e.createElement(E.Provider,{value:o},A.children)},U={inlineCode:"code",wrapper:function(A){var o=A.children;return e.createElement(e.Fragment,{},o)}},f=e.forwardRef((function(A,o){var i=A.components,t=A.mdxType,n=A.originalType,E=A.parentName,c=R(A,["components","mdxType","originalType","parentName"]),f=a(i),K=t,u=f["".concat(E,".").concat(K)]||f[K]||U[K]||n;return i?e.createElement(u,r(r({ref:o},c),{},{components:i})):e.createElement(u,r({ref:o},c))}));function K(A,o){var i=arguments,t=o&&o.mdxType;if("string"==typeof A||t){var n=i.length,r=new Array(n);r[0]=f;var R={};for(var E in o)hasOwnProperty.call(o,E)&&(R[E]=o[E]);R.originalType=A,R.mdxType="string"==typeof A?A:t,r[1]=R;for(var a=2;a<n;a++)r[a]=i[a];return e.createElement.apply(null,r)}return e.createElement.apply(null,i)}f.displayName="MDXCreateElement"},6353:function(A,o,i){i.r(o),i.d(o,{assets:function(){return c},contentTitle:function(){return E},default:function(){return K},frontMatter:function(){return R},metadata:function(){return a},toc:function(){return U}});var e=i(7462),t=i(3366),n=(i(7294),i(3905)),r=["components"],R={sidebar_position:2,title:"\u591a\u79df\u6237"},E="\u591a\u79df\u6237",a={unversionedId:"developer_cookbook/security/SECURITY-003-multi_tenancy.md",id:"developer_cookbook/security/SECURITY-003-multi_tenancy.md",title:"\u591a\u79df\u6237",description:"\u591a\u79df\u6237\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u8f6f\u4ef6\u67b6\u6784\uff0c\u7b80\u5355\u6982\u62ec\u5c31\u662f\u5728\u591a\u7528\u6237\u73af\u5883\u4e0b\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\uff0c\u5e76\u4fdd\u8bc1\u5404\u7528\u6237\u95f4\u6570\u636e\u7684\u9694\u79bb\u6027\u3002\u5728\u591a\u79df\u6237\u73af\u5883\u4e2d\uff0c\u8f6f\u4ef6\u9700\u8981\u6700\u5927\u7a0b\u5ea6\u5730\u907f\u514d\u6076\u610f\u79df\u6237\u5bf9\u5176\u4ed6\u79df\u6237\u7684\u653b\u51fb\u3002",source:"@site/docs/developer_cookbook/security/SECURITY-003-multi_tenancy.md.md",sourceDirName:"developer_cookbook/security",slug:"/developer_cookbook/security/SECURITY-003-multi_tenancy.md",permalink:"/en/developer_cookbook/security/SECURITY-003-multi_tenancy.md",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/security/SECURITY-003-multi_tenancy.md.md",tags:[],version:"current",lastUpdatedAt:1638450187,formattedLastUpdatedAt:"12/2/2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u591a\u79df\u6237"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u5168\u4f53\u7cfb\u8bbe\u8ba1",permalink:"/en/developer_cookbook/security/SECURITY-001-how_designed"},next:{title:"\u8ba4\u8bc1\u670d\u52a1",permalink:"/en/developer_cookbook/security/SECURITY-004-authentication"}},c={},U=[{value:"tKeel \u4e2d\u7684\u591a\u79df\u6237\u8bbe\u8ba1",id:"tkeel-\u4e2d\u7684\u591a\u79df\u6237\u8bbe\u8ba1",level:2},{value:"\u903b\u8f91\u9694\u79bb",id:"\u903b\u8f91\u9694\u79bb",level:2}],f={toc:U};function K(A){var o=A.components,i=(0,t.Z)(A,r);return(0,n.kt)("wrapper",(0,e.Z)({},f,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u591a\u79df\u6237"},"\u591a\u79df\u6237"),(0,n.kt)("p",null,"\u591a\u79df\u6237\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u8f6f\u4ef6\u67b6\u6784\uff0c\u7b80\u5355\u6982\u62ec\u5c31\u662f\u5728\u591a\u7528\u6237\u73af\u5883\u4e0b\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\uff0c\u5e76\u4fdd\u8bc1\u5404\u7528\u6237\u95f4\u6570\u636e\u7684\u9694\u79bb\u6027\u3002\u5728\u591a\u79df\u6237\u73af\u5883\u4e2d\uff0c\u8f6f\u4ef6\u9700\u8981\u6700\u5927\u7a0b\u5ea6\u5730\u907f\u514d\u6076\u610f\u79df\u6237\u5bf9\u5176\u4ed6\u79df\u6237\u7684\u653b\u51fb\u3002"),(0,n.kt)("p",null,"\u65e0\u8bba\u4f01\u4e1a\u7684\u591a\u79df\u6237\u5f62\u6001\u5982\u4f55\uff0c\u591a\u79df\u6237\u90fd\u65e0\u6cd5\u907f\u514d\u4ee5\u4e0b\u4e24\u4e2a\u5c42\u9762\u7684\u9694\u79bb\u6027\u95ee\u9898\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u903b\u8f91\u5c42\u9762\u7684\u8d44\u6e90\u9694\u79bb")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7269\u7406\u8d44\u6e90\u7684\u9694\u79bb"))),(0,n.kt)("p",null,"\u903b\u8f91\u5c42\u9762\u7684\u8d44\u6e90\u9694\u79bb\u4e3b\u8981\u5305\u62ec API \u7684\u8bbf\u95ee\u63a7\u5236\uff0c\u9488\u5bf9\u7528\u6237\u7684\u6743\u9650\u63a7\u5236\u3002"),(0,n.kt)("p",null,"\u7269\u7406\u8d44\u6e90\u7684\u9694\u79bb\u4e3b\u8981\u5305\u62ec\u8282\u70b9\u3001\u7f51\u7edc\u7b49\u9694\u79bb\u3002"),(0,n.kt)("h2",{id:"tkeel-\u4e2d\u7684\u591a\u79df\u6237\u8bbe\u8ba1"},"tKeel \u4e2d\u7684\u591a\u79df\u6237\u8bbe\u8ba1"),(0,n.kt)("p",null,"  tKeel \u5e73\u53f0\u7684\u591a\u79df\u6237\u662f\u4e00\u79cd\u8f6f\u4ef6\u67b6\u6784\u6280\u672f\uff0c\u662f\u5b9e\u73b0\u5982\u4f55\u5728\u591a\u7528\u6237\u73af\u5883\u4e0b\uff08\u6b64\u5904\u7684\u591a\u7528\u6237\u4e00\u822c\u662f\u6307\u9762\u5411\u4f01\u4e1a\u7528\u6237\uff0c\u56e0\u6b64\u62bd\u8c61\u51fa\u79df\u6237\u7684\u6982\u5ff5\uff0c\u79df\u6237\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u7528\u6237\u7a7a\u95f4\u7684\u610f\u601d\uff09\u5171\u7528\u76f8\u540c\u7684\u7cfb\u7edf\u6216\u7a0b\u5e8f\u7ec4\u4ef6\uff0c\u5e76\u4e14\u4fdd\u969c\u5404\u7528\u6237\u95f4\u6570\u636e\u548c\u903b\u8f91\u64cd\u4f5c\u7684\u9694\u79bb\u6027\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"data:image/png;base64,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YSxxfNCmW8fD9DuFbZveOBJ2LG6z9ZHpFYseNANl9qXpxbBoi6KP7g5HigFSdHh3GCtum4qiuYmwq7jN/Ali27YBAAAqrcfHFM2FiTuax/WMhiu37w3jzzWnk82Fyc+3LbYwH0bx2KHVluheGOGZXfE4TTNh/OON7UZ3hmNxue9VomhZb1efW7EM+ejeMNW2DQAAUG29X2jhjclw8JFjS+ckatUIo3uWF0ZY0xXbwoHnZxP30Wr6obGwuRFO838uNYoaAfiZtoUd7pgw1Q0AAIZM76NoDXOz02GqfVraCqNh7NNH0tPlUp4/tjBKFH8uM4peOhi2Fq9v2Hn00hEHAABUSx+jaC7MzpwNk0+OhwN37Ahjv7zWctlRnG63/xKr0l3CKlE0d2Fq8VihA0vHIM3r5piixW2nLsw17rM4TbBpRziSHB0DAACqrEdRNBsmH9kf9u/bHXZ+fCyMXbPauYlSRsPYJw+EYy/1YJRllSjq5bmE5pfcnjkSdrQtCDH6GVPnAABgGPVspKh4EtVOjP7y9rBr1WOP1qmsKGrc58JS383Lt4aDL7U9FwAAYCj0bvpcYXnstNFw5bU7GiF0JEy9HKegJe5jo0qMomh6fGGZ8av2TBolAgCAIdXTY4qm9l21FA+jvzwWxm7dFfY3Imji1HSYnUvfpqdWiaKfzc2G2dkeaXkdc2Hyvv1hsu2ksgAAwPDo7UILb82GmUY4zHW6chwAAMCA9TaKAAAAhowoAgAAsiaKAACArIkiAAAga6IIAADImigCAACyJooAAICsiSIAACBroggAAMiaKAIAALImigAAgKyJIgAAIGuiCAAAyJooAgAAsiaKAACArIkiAAAga6IIAADImigCAACyJooAAICsiSIAACBroggAAMiaKAIAALImigAAgKyJIgAAIGuiCAAAyJooAgAAsiaKAACArIkiAAAga6IIAADImigCAACyJooAAICsiSIAACBroggAAMiaKAIAALImigAAgKyJIgAAIGuiCAAAyJooAgAAsiaKAACArIkiAAAga6IIAADImigCAACyJooAAICsiSIAACBroggAAMiaKAIAALImigAAgKyJIgAAIGuiCAAAyJooAgAAsiaKAACArIkiAAAga6IIAADImigCAACyJooAAICsiSIAACBroggAAMiaKAIAALImigAAgKyJIgAAIGui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",alt:"\u591a\u79df\u6237"})),(0,n.kt)("h2",{id:"\u903b\u8f91\u9694\u79bb"},"\u903b\u8f91\u9694\u79bb"),(0,n.kt)("p",null,"  \u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/en/developer_cookbook/security/SECURITY-005-rbac"},"\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u8bbf\u95ee\u63a7\u5236")," \u5bf9\u7528\u6237\u7684\u6743\u9650\u52a0\u4ee5\u63a7\u5236\uff0c\u5b9e\u73b0\u903b\u8f91\u5c42\u9762\u7684\u8d44\u6e90\u9694\u79bb\u3002"))}K.isMDXComponent=!0}}]);