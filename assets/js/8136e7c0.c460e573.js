"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1819],{3905:(e,l,t)=>{t.d(l,{Zo:()=>o,kt:()=>k});var i=t(67294);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);l&&(i=i.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,i,n=function(e,l){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=i.createContext({}),u=function(e){var l=i.useContext(r),t=l;return e&&(t="function"==typeof e?e(l):d(d({},l),e)),t},o=function(e){var l=u(e.components);return i.createElement(r.Provider,{value:l},e.children)},v={inlineCode:"code",wrapper:function(e){var l=e.children;return i.createElement(i.Fragment,{},l)}},c=i.forwardRef((function(e,l){var t=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=u(t),k=n,m=c["".concat(r,".").concat(k)]||c[k]||v[k]||a;return t?i.createElement(m,d(d({ref:l},o),{},{components:t})):i.createElement(m,d({ref:l},o))}));function k(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=c;var p={};for(var r in l)hasOwnProperty.call(l,r)&&(p[r]=l[r]);p.originalType=e,p.mdxType="string"==typeof e?e:n,d[1]=p;for(var u=2;u<a;u++)d[u]=t[u];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50363:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>r,contentTitle:()=>d,default:()=>v,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=t(87462),n=(t(67294),t(3905));const a={},d=void 0,p={unversionedId:"api/appendix/plantuml/fluxswitch",id:"api/appendix/plantuml/fluxswitch",title:"fluxswitch",description:"1.3.4 \u7f51\u7edc\u670d\u52a1",source:"@site/docs/api/appendix/plantuml/fluxswitch.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/fluxswitch",permalink:"/api/appendix/plantuml/fluxswitch",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/fluxswitch.md",tags:[],version:"current",lastUpdatedAt:1656384840,formattedLastUpdatedAt:"2022\u5e746\u670828\u65e5",frontMatter:{},sidebar:"apiSidebar",previous:{title:"device",permalink:"/api/appendix/plantuml/device"},next:{title:"IoTHub",permalink:"/api/appendix/plantuml/iothub/"}},r={},u=[{value:"1.3.4 \u7f51\u7edc\u670d\u52a1",id:"134-\u7f51\u7edc\u670d\u52a1",level:3},{value:"1.3.4.1 \u6dfb\u52a0\u4ee3\u7406\u7f51\u5173",id:"1341-\u6dfb\u52a0\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.1.1 \u65f6\u5e8f\u56fe",id:"13411-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.1.2 \u72b6\u6001\u56fe",id:"13412-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13413-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.2 \u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173",id:"1342-\u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.2.1 \u65f6\u5e8f\u56fe",id:"13421-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.2.2 \u72b6\u6001\u56fe",id:"13422-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13423-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.3 \u542f\u7528\u4ee3\u7406\u7f51\u5173",id:"1343-\u542f\u7528\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.3.1 \u65f6\u5e8f\u56fe",id:"13431-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.3.2 \u72b6\u6001\u56fe",id:"13432-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13433-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.4 \u7981\u7528\u4ee3\u7406\u7f51\u5173",id:"1344-\u7981\u7528\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.4.1 \u65f6\u5e8f\u56fe",id:"13441-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.4.2 \u72b6\u6001\u56fe",id:"13442-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13443-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.5 \u7f16\u8f91\u4ee3\u7406\u7f51\u5173",id:"1345-\u7f16\u8f91\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.5.1 \u65f6\u5e8f\u56fe",id:"13451-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.5.2 \u72b6\u6001\u56fe",id:"13452-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.5.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13453-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.6 \u5220\u9664\u4ee3\u7406\u7f51\u5173",id:"1346-\u5220\u9664\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.6.1 \u65f6\u5e8f\u56fe",id:"13461-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.6.2 \u72b6\u6001\u56fe",id:"13462-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.6.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13463-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.7 \u6dfb\u52a0\u4ee3\u7406\u670d\u52a1",id:"1347-\u6dfb\u52a0\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.7.1 \u65f6\u5e8f\u56fe",id:"13471-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.7.2 \u72b6\u6001\u56fe",id:"13472-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.7.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13473-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.8 \u8bbf\u95ee\u4ee3\u7406\u670d\u52a1",id:"1348-\u8bbf\u95ee\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.8.1 \u65f6\u5e8f\u56fe",id:"13481-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.8.2 \u72b6\u6001\u56fe",id:"13482-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.8.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13483-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.9 \u542f\u7528\u4ee3\u7406\u670d\u52a1",id:"1349-\u542f\u7528\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.9.1 \u65f6\u5e8f\u56fe",id:"13491-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.9.2 \u72b6\u6001\u56fe",id:"13492-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.9.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13493-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.10 \u7981\u7528\u4ee3\u7406\u670d\u52a1",id:"13410-\u7981\u7528\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.10.1 \u65f6\u5e8f\u56fe",id:"134101-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.10.2 \u72b6\u6001\u56fe",id:"134102-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.10.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"134103-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.11 \u7f16\u8f91\u4ee3\u7406\u670d\u52a1",id:"13411-\u7f16\u8f91\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.11.1 \u65f6\u5e8f\u56fe",id:"134111-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.11.2 \u72b6\u6001\u56fe",id:"134112-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.11.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"134113-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.12 \u5220\u9664\u4ee3\u7406\u670d\u52a1",id:"13412-\u5220\u9664\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.12.1 \u65f6\u5e8f\u56fe",id:"134121-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.12.2 \u72b6\u6001\u56fe",id:"134122-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.12.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"134123-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5}],o={toc:u};function v(e){let{components:l,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"134-\u7f51\u7edc\u670d\u52a1"},"1.3.4 \u7f51\u7edc\u670d\u52a1"),(0,n.kt)("h4",{id:"1341-\u6dfb\u52a0\u4ee3\u7406\u7f51\u5173"},"1.3.4.1 \u6dfb\u52a0\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13411-\u65f6\u5e8f\u56fe"},"1.3.4.1.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuU8g038oapCB4lDA59HAYrEBb1GIYnL035GfnuBCuDIYijGYZUpKr1nDi2eG2rLLMavfHN5vPabo1bW1Wekgx5bFuvEThKytDe5LfIJb95QYsvTRMLoO0vO6ixYuk41kKj2r0zkgOANmj7_YYwtRNwpV_cnZ4nTO35ckwTdK3SyMB7ovgaS1Bebm3L39YmtDpwUiUB9ZrjEkXK27S259eYYrKdYskE7P_ANFPgn_Ec7PqxKpdivPWKVnquxPJtVlUh9xyVC9RS_tJdpQkldzdfxdK-O_wvXGaf-TceUc5Ufrk7jSd41kWOa25O0z3_9HsyodhKj1dkfTztJNP3HZm443D6F_bAUpvptVFVdPl3bS3gbvAS0O1W00",alt:null}),(0,n.kt)("h5",{id:"13412-\u72b6\u6001\u56fe"},"1.3.4.1.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13413-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1342-\u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173"},"1.3.4.2 \u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13421-\u65f6\u5e8f\u56fe"},"1.3.4.2.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5nS83SfwDg1RLMmKdZQF_75rkqlrcz_jh692oo6BDVqREg6PmiMlbpLem2NHBW6gEJ5XkRdKrOysJ7hQTT2e4Eua2Gnb2vV_6pUX2SxkfxiMV1yLikpQUrFTc_3f-5fn-odktSztplnQUlcfvDwWEIBnYb0dKzsBtu-eUtPd5wWdMZweM40TvYB4yXHC56W0d0eWCnkc_cqTId8TxthdkwQZ6OCE8o0PkoVydJslEUx9p-RDuVB8JKl1HZJ0000",alt:null}),(0,n.kt)("h5",{id:"13422-\u72b6\u6001\u56fe"},"1.3.4.2.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13423-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1343-\u542f\u7528\u4ee3\u7406\u7f51\u5173"},"1.3.4.3 \u542f\u7528\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13431-\u65f6\u5e8f\u56fe"},"1.3.4.3.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5nS83SfwDg1RLMmKdZQF_75rkqlrcz_jh692oo6BDVqREg6PmiMlbpLem2NHBW6gEJ5XkRdKrOysJ7hQTT2e4Eua2JHbJvRtF1i_jBdUoS-RTtyRCRwfnEMFLqxu-cS5MXweDu0QPYzvTcq3KzsBtu-eGsYxUca7Y3ved7Ayraj4F5dStg1DZ_lslQieP4BfXLe2jYt82-qpNpQkXJaYzvrJtTDHhCB71P0J-oVydJslEUx9p-RDuUBoo4rBmKOfG00",alt:null}),(0,n.kt)("h5",{id:"13432-\u72b6\u6001\u56fe"},"1.3.4.3.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13433-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1344-\u7981\u7528\u4ee3\u7406\u7f51\u5173"},"1.3.4.4 \u7981\u7528\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13441-\u65f6\u5e8f\u56fe"},"1.3.4.4.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5mW9odese4jLR1IUDe_ySNMxI_MRt-siOaBB8Oir_HiwePd2nQ-NDMZ09T4E0QevCM6vkTJLZpPCUjfrqAWExYG9D6LFblSy6p-qkTx9pvjtVninlgd4vOzNJlZwPmLQ7gWlW1fcBtbsRGDJtOlVZwX3QBjwQGU8FcYSShpMIqGyMTpUe4sF-_QzgoXaGkcLHTe3DYt83-qpNpQkXJaZTvrJtTDHhCC71X0N-oVydJslEUx9p-RDuVB8JKl1HYZ0000",alt:null}),(0,n.kt)("h5",{id:"13442-\u72b6\u6001\u56fe"},"1.3.4.4.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13443-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1345-\u7f16\u8f91\u4ee3\u7406\u7f51\u5173"},"1.3.4.5 \u7f16\u8f91\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13451-\u65f6\u5e8f\u56fe"},"1.3.4.5.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5mW9odese4jLR1IUDe_ySNMxI_MRt-siOaBB8Oir_HiwePd2nQ-NDMZ09T4E0QevCM6vkTJLZpPCUjfrqAWExYG9D6LFblSy6p-qkTx9pvjtVninlgd4vOzNJlZwPmLQ7gWlW1fcBtbsRGD40rFzYzyrhYU2oO9L0Vs3iYHRJEVjYu5kRDttTDTaz5C0_iMwCpzKvxEdlTyz-Hdy-PmEQJcfG2Z3000",alt:null}),(0,n.kt)("h5",{id:"13452-\u72b6\u6001\u56fe"},"1.3.4.5.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13453-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.5.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1346-\u5220\u9664\u4ee3\u7406\u7f51\u5173"},"1.3.4.6 \u5220\u9664\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13461-\u65f6\u5e8f\u56fe"},"1.3.4.6.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NPBTJi8m5CVl-nGDLthX2tXXy1byWZbgN2naxaFbRiFC60C8CWdACY48MKpuYXfK9BpCscrlOLTHs6xQq_v_v_pFQPfLDK7Hz3m6CjibKPA5WWOpkegK31HK60T9QL-M3f1oXfIj4uJmDgVYA4aTOVr2FPSqyPW3wsCIesNJ_xJ8jCIft24MYcc_V54znLpc4G1nIt1dZvl2NKXkw-7xB1pFwBG4-DscLgBt4zhfHYzb-2-kcs58EBaCRC__U2GtNTO7s13JAEqPzAaVBEh4UgMjCQaDoB1572-LiveYjh_kH0_FlmdahipMqBJzUI-eNL6dmWp17ylI-7InI_kDDYTnsvKH-MgaYejOGknL65Rr8iECh4gm687LRK9l3ict4IvTMksdQl07P9ClRT9sWtc3kWx8eaAE_O8V",alt:null}),(0,n.kt)("h5",{id:"13462-\u72b6\u6001\u56fe"},"1.3.4.6.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13463-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.6.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1347-\u6dfb\u52a0\u4ee3\u7406\u670d\u52a1"},"1.3.4.7 \u6dfb\u52a0\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"13471-\u65f6\u5e8f\u56fe"},"1.3.4.7.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NP9TJeD04CVVznIRFcbYB-23gMVm14ZNI4eH-L3x9ZKqfW75j9hQajh6gCJ4VYGQL3HUfhl0arTmMT42Jpkp_z_C_cUo5LNZ54slYq2cfy0BCYTfiAIhI2b1JeL9a9SsPM4BAGT8MQaX9AuoAedor8we7wc7WiRlCc2PvZ5Y6Oit4y-RZAfkYroZ-5wzeUwBJ6OH08abMDvWZy9rYCyleXS_clfatWJiBgiroUMCZCRnemN_nQKPYaIpax3hBLxxk3scFa16BAABu3PqMiIrAKfwK-pSuwSUThr2JJe5BI1-WDkZRDbQsBqXfuwsLqCI-0FBj8ZDbZXkNMFpBZ5jJ_1xfz2Q5mL4Tq8xdtdniH6RTlWv0UbjJXyyawlPh_xzOQLf_o4sYYtPDkaQlhfuC0o33Xcwe8AaAlqIFm00",alt:null}),(0,n.kt)("h5",{id:"13472-\u72b6\u6001\u56fe"},"1.3.4.7.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13473-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.7.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1348-\u8bbf\u95ee\u4ee3\u7406\u670d\u52a1"},"1.3.4.8 \u8bbf\u95ee\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"13481-\u65f6\u5e8f\u56fe"},"1.3.4.8.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NP7B3W4n58RtVOh6tWk8Y5SPOp192JeJB16469SW5kx4Tf3OOE5bjCPRE5CLKwkUdk_lVowDKqihMdQMe3oSfcxcjPo5GpOrYY6iKUm7AaeHkqnBfgLdXE1tLMMyMtrS6knK4wfaWcYLVwTiXHQ8m2922FdLS3WMCCKHxBdtrzHzt7RFGPFF7TRPe007jJG7wQjzveiw-YQY08Kr8BxQUuSjdnovuxBhwCz29wO1BKKmwpjiCFmKGp8B79QKDdpktPUyjt_ENBvkoMOaKrn63hkE0--LWIHLEn2Z-_vZDbjAHTp89U5htW00",alt:null}),(0,n.kt)("h5",{id:"13482-\u72b6\u6001\u56fe"},"1.3.4.8.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13483-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.8.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1349-\u542f\u7528\u4ee3\u7406\u670d\u52a1"},"1.3.4.9 \u542f\u7528\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"13491-\u65f6\u5e8f\u56fe"},"1.3.4.9.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5nS83SfwDg1RLMmKdZQF_75rkqlrcz_jh692oo6BDVqREg6PmiMlbpLem2NHBW6gEJ5XkRdKrOysJ7hQTT2e4Eua2JHbJxPlVZvXBPdStg1If_DMFzqmhAdQsSydRC2JG_K6q0DpsPlUJPj0xAsvrtRdZKqSi6K05M3VGLoQjlCfwrBGQxjNVTqrsGqCy5-1Zfs_vIdi-SztptvsRmvN0wfUId0c0C0",alt:null}),(0,n.kt)("h5",{id:"13492-\u72b6\u6001\u56fe"},"1.3.4.9.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13493-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.9.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"13410-\u7981\u7528\u4ee3\u7406\u670d\u52a1"},"1.3.4.10 \u7981\u7528\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"134101-\u65f6\u5e8f\u56fe"},"1.3.4.10.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5mW9odese4jLR1IUDe_ySNMxI_MRt-siOaBB8Oir_HiwePd2nQ-NDMZ09T4E0QevCM6vkTJLZpPCUjfrqAWExYG9D6LFjcz-Fc4jcTpUe5AdyrO_tJ2igThPpoTim9D3zGNG0tFPczvDcq3ihRdNTkUDJHomPG0LOCz1N9gsyodhKj1hkrTztJNP3GpmNu6EdR_bAUpvptVFVdPl3bS3gbvAS280m00",alt:null}),(0,n.kt)("h5",{id:"134102-\u72b6\u6001\u56fe"},"1.3.4.10.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"134103-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.10.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"13411-\u7f16\u8f91\u4ee3\u7406\u670d\u52a1"},"1.3.4.11 \u7f16\u8f91\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"134111-\u65f6\u5e8f\u56fe"},"1.3.4.11.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5mW9odese4jLR1IUDe_ySNMxI_MRt-siOaBB8Oir_HiwePd2nQ-NDMZ09T4E0QevCM6vkTJLZpPCUjfrqAWExYG9D6LFjcz-Fc4jcTpUe5AdyrO_tJ2igThPpoTim9D3zGNG0tFPczvDcq3iZOkc2HG7TWx84UspNpQkXJapjvrJtTDHZCjEISp5HWCGCFwLhniQ7pPsljyxpekg2YAFDWoYFpxFJrGxgpbBnlHZGG78D3d-wSydJtl-Ux9p-RDuN98pKi1fW80",alt:null}),(0,n.kt)("h5",{id:"134112-\u72b6\u6001\u56fe"},"1.3.4.11.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"134113-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.11.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"13412-\u5220\u9664\u4ee3\u7406\u670d\u52a1"},"1.3.4.12 \u5220\u9664\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"134121-\u65f6\u5e8f\u56fe"},"1.3.4.12.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gYejfxIYk3op93a3h031HLNshAVnoSxMfnkRmAfIad8IAz7jowqiBim1IuDPN5mW9odese4jLR1IUDe_ySNMxI_MRt-siOaBB8Oir_HiwePd2nQ-NDMZ09T4E0QevCM6vkTJLZpPCUjfrqAWExYG9D6LFjcz-Fc4jcTpUe5AdyrO_tJ2igThPpoTim9D3zGN8Eix5hoSkGHP6nTC4gWEx1sGghQPJrkNWjpPk-xfhibefYNdPAO2Wy5AuLdVYfSDZIzRUv_lNSS55KMHdxtbsRGD4FdtUtgWt5dBNpQY6maEGA3FzqzvEdlUyzsJdysRm-MGcfS2J0K0",alt:null}),(0,n.kt)("h5",{id:"134122-\u72b6\u6001\u56fe"},"1.3.4.12.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"134123-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.12.3 \u8868\u793a\u5c42\u8bbe\u8ba1"))}v.isMDXComponent=!0}}]);