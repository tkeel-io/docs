"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(n),v=r,s=m["".concat(u,".").concat(v)]||m[v]||c[v]||a;return n?l.createElement(s,i(i({ref:t},d),{},{components:n})):l.createElement(s,i({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const a={},i=void 0,p={unversionedId:"api/appendix/plantuml/plugin-manager-tenant",id:"api/appendix/plantuml/plugin-manager-tenant",title:"plugin-manager-tenant",description:"1.3.1 \u63d2\u4ef6\u7ba1\u7406",source:"@site/docs/api/appendix/plantuml/plugin-manager-tenant.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/plugin-manager-tenant",permalink:"/api/appendix/plantuml/plugin-manager-tenant",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/plugin-manager-tenant.md",tags:[],version:"current",lastUpdatedAt:1656316982,formattedLastUpdatedAt:"2022/6/27",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"plugin-manager-admin",permalink:"/api/appendix/plantuml/plugin-manager-admin"},next:{title:"rudder",permalink:"/api/appendix/plantuml/rudder"}},u={},o=[{value:"1.3.1 \u63d2\u4ef6\u7ba1\u7406",id:"131-\u63d2\u4ef6\u7ba1\u7406",level:3},{value:"1.3.1.1 \u67e5\u770b\u63d2\u4ef6\u5217\u8868",id:"1311-\u67e5\u770b\u63d2\u4ef6\u5217\u8868",level:4},{value:"1.3.1.1.1 \u65f6\u5e8f\u56fe",id:"13111-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.1.2 \u72b6\u6001\u56fe",id:"13112-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13113-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.1.2 \u542f\u7528\u63d2\u4ef6",id:"1312-\u542f\u7528\u63d2\u4ef6",level:4},{value:"1.3.1.2.1 \u65f6\u5e8f\u56fe",id:"13121-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.2.2 \u72b6\u6001\u56fe",id:"13122-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13123-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.1.3 \u505c\u7528\u7528\u63d2\u4ef6",id:"1313-\u505c\u7528\u7528\u63d2\u4ef6",level:4},{value:"1.3.1.3.1 \u65f6\u5e8f\u56fe",id:"13131-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.3.2 \u72b6\u6001\u56fe",id:"13132-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13133-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.1.4 \u67e5\u770b\u63d2\u4ef6\u8be6\u60c5",id:"1314-\u67e5\u770b\u63d2\u4ef6\u8be6\u60c5",level:4},{value:"1.3.1.4.1 \u65f6\u5e8f\u56fe",id:"13141-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.4.2 \u72b6\u6001\u56fe",id:"13142-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13143-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5}],d={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"131-\u63d2\u4ef6\u7ba1\u7406"},"1.3.1 \u63d2\u4ef6\u7ba1\u7406"),(0,r.kt)("h4",{id:"1311-\u67e5\u770b\u63d2\u4ef6\u5217\u8868"},"1.3.1.1 \u67e5\u770b\u63d2\u4ef6\u5217\u8868"),(0,r.kt)("h5",{id:"13111-\u65f6\u5e8f\u56fe"},"1.3.1.1.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdirV-dnEzxF-IKzsRtlQCVt5mXLSK3cGikpKr1oWefUTMvxDRKQMI4a22h_es_wqVneklN0ha9KzxzhshA4HMHdOILZTmUMGcfS2T3K0",alt:null}),(0,r.kt)("h5",{id:"13112-\u72b6\u6001\u56fe"},"1.3.1.1.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"13113-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1312-\u542f\u7528\u63d2\u4ef6"},"1.3.1.2 \u542f\u7528\u63d2\u4ef6"),(0,r.kt)("h5",{id:"13121-\u65f6\u5e8f\u56fe"},"1.3.1.2.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdavO_tpAYcVzavxitiO55GKfo4vDpG5Al-pSycnkCx84NEUpnGtFvY-5w7msO_tJ2SkUhftnTCuAOXM3BSQg6DbDJ_kxdkoR-sBhD6ILAKaW8sTlUJPjmxEf6vxrhdkwQpAoFDYRS7Cw9Zpjci_5vP2Qbm8C0m00",alt:null}),(0,r.kt)("h5",{id:"13122-\u72b6\u6001\u56fe"},"1.3.1.2.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"13123-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1313-\u505c\u7528\u7528\u63d2\u4ef6"},"1.3.1.3 \u505c\u7528\u7528\u63d2\u4ef6"),(0,r.kt)("h5",{id:"13131-\u65f6\u5e8f\u56fe"},"1.3.1.3.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdZREUJvbnRF-IKzsR-E2Ye8KPAUcvW2bNtPkUJQt6La2hlFPuePdyvT2T3wRiVxfX6LFryvuEcS5iOedh0TQZ5KnifkUzdSzsJVtnTPfo2fJaa16pjxoRDg6PrCtFEjTztJNP6Hvi3VXvdHCUDerdulB8JKl1HW60000",alt:null}),(0,r.kt)("h5",{id:"13132-\u72b6\u6001\u56fe"},"1.3.1.3.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"13133-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1314-\u67e5\u770b\u63d2\u4ef6\u8be6\u60c5"},"1.3.1.4 \u67e5\u770b\u63d2\u4ef6\u8be6\u60c5"),(0,r.kt)("h5",{id:"13141-\u65f6\u5e8f\u56fe"},"1.3.1.4.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdirV-dnEzxF-IKzsRtknVjcpvbOkg1n8MNPgQWvGqSlEBS_cDYDB8FGlRW0Q0T7_RCRwfnEMFLqxu-cS5SYAKvA02b_qRN_QFmsYyCd-XSyQroCh0JiCQ1goExWSKlDIWAu60000",alt:null}),(0,r.kt)("h5",{id:"13142-\u72b6\u6001\u56fe"},"1.3.1.4.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"13143-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1"))}c.isMDXComponent=!0}}]);