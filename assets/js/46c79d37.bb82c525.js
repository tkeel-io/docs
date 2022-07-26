"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),s=a,v=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},l=void 0,p={unversionedId:"api/appendix/plantuml/metrics-monitor",id:"api/appendix/plantuml/metrics-monitor",title:"metrics-monitor",description:"1.2.4 \u8ba1\u91cf\u7edf\u8ba1",source:"@site/docs/api/appendix/plantuml/metrics-monitor.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/metrics-monitor",permalink:"/api/appendix/plantuml/metrics-monitor",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/metrics-monitor.md",tags:[],version:"current",lastUpdatedAt:1656404159,formattedLastUpdatedAt:"2022\u5e746\u670828\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IoTHub",permalink:"/api/appendix/plantuml/iothub/"},next:{title:"plugin-manager-admin",permalink:"/api/appendix/plantuml/plugin-manager-admin"}},o={},c=[{value:"1.2.4 \u8ba1\u91cf\u7edf\u8ba1",id:"124-\u8ba1\u91cf\u7edf\u8ba1",level:3},{value:"1.2.4.1 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf",id:"1241-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1",id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe-1",level:5},{value:"1.2.4.2 \u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1",id:"1242-\u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe-2",level:5},{value:"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4API\u8c03\u7528\u7edf\u8ba1",id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4api\u8c03\u7528\u7edf\u8ba1",level:4},{value:"1.2.4.1.1 \u65f6\u5e8f\u56fe",id:"12411-\u65f6\u5e8f\u56fe-3",level:5}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"124-\u8ba1\u91cf\u7edf\u8ba1"},"1.2.4 \u8ba1\u91cf\u7edf\u8ba1"),(0,a.kt)("h4",{id:"1241-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf"},"1.2.4.1 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u7528\u91cf"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPACeUDSnvFdlYixxbp-RqFkrQg542Kg6Rcv-N2JHLyr73N90kiA0lL90h9R4aCIcnE5MXe2W_DxKa8xMqc8iBPB-k7KYTbSBJ_ealjcv_iNxxiurDN63px51C0AbeUZPrmxC52r-kwk52aRFHjKCOQwNmVCgAb-tz8BMzwvxDN_fY_I9KvRemEr_id_9qzhpdAtUzdBu5MHF4VbqxaFlWgdPFVZPl3fT3QbuAC001",alt:null}),(0,a.kt)("h4",{id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1"},"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4\u6d88\u606f\u6570\u636e\u7edf\u8ba1"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe-1"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPACeUDSnvFdlYixxbp-RqFkrQg542Kg6Rcv-N2JHLyr73N90kiA0lL90h9R4aCIcnE5MXe2W_DxKa8xMqc8iBPB-k7KYTbSBJ_ealjcv_iNxxiurDN63px51C0AbeUZPrmxC52r-kwk52aRFHjKCOQwNmRFxI5-iNFTlMyQnnFKX7xpfKvRemEr_id_9qzZmKXM2RTUr0BeF9Fzyz-TcyELmEgNafeA030000",alt:null}),(0,a.kt)("h4",{id:"1242-\u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1"},"1.2.4.2 \u67e5\u770b\u79df\u6237\u7a7a\u95f4\u4f7f\u7528\u6570\u636e\u7edf\u8ba1"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe-2"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VP6z2i8m4CVtFCNHgGvz0OUYeuWW-0InFMhHflLo5ToS1GLdw-3aUmdgQvZKZnAaRidTx_yHqjCiYSji8MJ4EK6faKHXHccK5b8nUFtnO8AqGlA7Y8kE1o0rpCtHmQwRwd4ytFUNUxMxRSy-MoB8SfKQryvrSxAgUZXw3qKiMKwbHYWepv1dM6eXR7uGMguB2J8mAcjlMTDD9YXguz2nQaCTA0YRd2uiIwGrc2kbaNvfHBF_yIVKHQvCLrVX1dnwV-6Mya5eN_cNww6AxQSy0G00",alt:null}),(0,a.kt)("h4",{id:"1242-\u67e5\u770b\u7528\u6237\u7a7a\u95f4api\u8c03\u7528\u7edf\u8ba1"},"1.2.4.2 \u67e5\u770b\u7528\u6237\u7a7a\u95f4API\u8c03\u7528\u7edf\u8ba1"),(0,a.kt)("h5",{id:"12411-\u65f6\u5e8f\u56fe-3"},"1.2.4.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPACeUDSnvFdlYixxbp-RqFkrQg542Kg6Rcv-N2JHLyr73N90kiA0lL90h9R4aCIcnE5MXe2W_DxKa8xMqc8iBPB-k7KYTbSBJ_ealjcv_iNxxiurDN63px51C0AbeUZPrmxC52r-kwk52aRFHjKCOQwNmRFxI5-iN9HPaljZG_7pAYkUxvxzOjn2ajNSTgZvTcEKlzazvEdiUqFDOT83Teci7SYjCuVFTav_DcyFba9gN0WfC0000",alt:null}))}m.isMDXComponent=!0}}]);