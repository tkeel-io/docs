"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,v=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,p={unversionedId:"api/appendix/plantuml/metrics-monitor",id:"api/appendix/plantuml/metrics-monitor",title:"metrics-monitor",description:"1.2.4 \u8ba1\u91cf\u7edf\u8ba1",source:"@site/docs/api/appendix/plantuml/metrics-monitor.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/metrics-monitor",permalink:"/en/api/appendix/plantuml/metrics-monitor",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/metrics-monitor.md",tags:[],version:"current",lastUpdatedAt:1656404159,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IoTHub",permalink:"/en/api/appendix/plantuml/iothub/"},next:{title:"plugin-manager-admin",permalink:"/en/api/appendix/plantuml/plugin-manager-admin"}},o={},c=[{value:"1.2.4 \u8ba1\u91cf\u7edf\u8ba1",id:"124-\u8ba1\u91cf\u7edf\u8ba1",level:3},{value:"1.2.4.1 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf",id:"1241-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1",id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe-1",level:5},{value:"1.2.4.2 \u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1",id:"1242-\u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe-2",level:5},{value:"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4API\u8c03\u7528\u7edf\u8ba1",id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4api\u8c03\u7528\u7edf\u8ba1",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe-3",level:5}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"124-\u8ba1\u91cf\u7edf\u8ba1"},"1.2.4 \u8ba1\u91cf\u7edf\u8ba1"),(0,a.kt)("h4",{id:"1241-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf"},"1.2.4.1 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPACeUDSnvFdlYixxbp-RqFkrQg542Kg6Rcv-N2JHLyr73N90kiA0lL90h9R4aCIcnE5MXe2W_DxKa8xMqc8iBPB-k7KYTbSBJ_ealjcv_iNxxiurDN63px51C0AbeUZPrmxC52r-kwk52aRFHjKCOQwNmVCgAb-tz8BMzwvxDN_fY_I9KvRemEr_id_9qzhpdAtUzdBu5MHF4VbqxaFlWgdPFVZPl3fT3QbuAC001",alt:null}),(0,a.kt)("h4",{id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1"},"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe-1"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPACeUDSnvFdlYixxbp-RqFkrQg542Kg6Rcv-N2JHLyr73N90kiA0lL90h9R4aCIcnE5MXe2W_DxKa8xMqc8iBPB-k7KYTbSBJ_ealjcv_iNxxiurDN63px51C0AbeUZPrmxC52r-kwk52aRFHjKCOQwNmRFxI5-iNFTlMyQnnFKX7xpfKvRemEr_id_9qzZmKXM2RTUr0BeF9Fzyz-TcyELmEgNafeA030000",alt:null}),(0,a.kt)("h4",{id:"1242-\u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1"},"1.2.4.2 \u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe-2"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VP6z2i8m4CVtFCNHgGvz0OUYeuWW-0InFMhHflLo5ToS1GLdw-3aUmdgQvZKZnAaRidTx_yHqjCiYSji8MJ4EK6faKHXHccK5b8nUFtnO8AqGlA7Y8kE1o0rpCtHmQwRwd4ytFUNUxMxRSy-MoB8SfKQryvrSxAgUZXw3qKiMKwbHYWepv1dM6eXR7uGMguB2J8mAcjlMTDD9YXguz2nQaCTA0YRd2uiIwGrc2kbaNvfHBF_yIVKHQvCLrVX1dnwV-6Mya5eN_cNww6AxQSy0G00",alt:null}),(0,a.kt)("h4",{id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4api\u8c03\u7528\u7edf\u8ba1"},"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4API\u8c03\u7528\u7edf\u8ba1"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe-3"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPACeUDSnvFdlYixxbp-RqFkrQg542Kg6Rcv-N2JHLyr73N90kiA0lL90h9R4aCIcnE5MXe2W_DxKa8xMqc8iBPB-k7KYTbSBJ_ealjcv_iNxxiurDN63px51C0AbeUZPrmxC52r-kwk52aRFHjKCOQwNmRFxI5-iN9HPaljZG_7pAYkUxvxzOjn2ajNSTgZvTcEKlzazvEdiUqFDOT83Teci7SYjCuVFTav_DcyFba9gN0WfC0000",alt:null}))}m.isMDXComponent=!0}}]);