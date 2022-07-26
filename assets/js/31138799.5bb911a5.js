"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=l,s=m["".concat(p,".").concat(f)]||m[f]||d[f]||o;return r?n.createElement(s,a(a({ref:t},c),{},{components:r})):n.createElement(s,a({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const o={},a=void 0,i={unversionedId:"api/appendix/plantuml/core_broker",id:"api/appendix/plantuml/core_broker",title:"core_broker",description:"1.3.6.1 \u521b\u5efa\u8ba2\u9605",source:"@site/docs/api/appendix/plantuml/core_broker.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/core_broker",permalink:"/api/appendix/plantuml/core_broker",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/core_broker.md",tags:[],version:"current",lastUpdatedAt:1656322951,formattedLastUpdatedAt:"2022\u5e746\u670827\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6837\u4f8b",permalink:"/api/appendix/plantuml/example"},next:{title:"data_query",permalink:"/api/appendix/plantuml/data_query"}},p={},u=[{value:"1.3.6.1 \u521b\u5efa\u8ba2\u9605",id:"1361-\u521b\u5efa\u8ba2\u9605",level:5},{value:"1.3.6.2 \u4e3a\u8ba2\u9605\u6dfb\u52a0\u8bbe\u5907",id:"1362-\u4e3a\u8ba2\u9605\u6dfb\u52a0\u8bbe\u5907",level:5},{value:"1.3.6.3 \u67e5\u770b\u8ba2\u9605\u8bbe\u5907\u5217\u8868",id:"1363-\u67e5\u770b\u8ba2\u9605\u8bbe\u5907\u5217\u8868",level:5},{value:"1.3.6.4 \u79fb\u52a8\u8ba2\u9605",id:"1364-\u79fb\u52a8\u8ba2\u9605",level:5},{value:"1.3.6.5 \u4ece\u8ba2\u9605\u4e2d\u79fb\u9664\u8bbe\u5907",id:"1365-\u4ece\u8ba2\u9605\u4e2d\u79fb\u9664\u8bbe\u5907",level:5},{value:"1.3.6.6 \u7f16\u8f91\u8ba2\u9605\u4fe1\u606f",id:"1366-\u7f16\u8f91\u8ba2\u9605\u4fe1\u606f",level:5},{value:"1.3.6.7 \u5220\u9664\u8ba2\u9605",id:"1367-\u5220\u9664\u8ba2\u9605",level:5},{value:"\u6d88\u8d39\u8ba2\u9605\u6570\u636e",id:"\u6d88\u8d39\u8ba2\u9605\u6570\u636e",level:5},{value:"websocket\u8ba2\u9605",id:"websocket\u8ba2\u9605",level:5}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h5",{id:"1361-\u521b\u5efa\u8ba2\u9605"},"1.3.6.1 \u521b\u5efa\u8ba2\u9605"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYYBhuiJ5nGKoMjSEfDDAuMd_n1TRjxzOl_tPnYOka112ekdPr0tF5YnykQe7Ae5XjDNJZjbFT-zwiMxHoncjN1ZIkdOkJbOGoIVx5pvhNF-if_79pjQdFTEmgGMv2iN0vxidFvitXyiXDIy56500",alt:null}),(0,l.kt)("h5",{id:"1362-\u4e3a\u8ba2\u9605\u6dfb\u52a0\u8bbe\u5907"},"1.3.6.2 \u4e3a\u8ba2\u9605\u6dfb\u52a0\u8bbe\u5907"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYY6BJTp52PMRM50KK9fKN9h4nGLoYAuTo1uhXQVz4rzitVvY_VPd6vkuG488YQPdKpSyMx3mvQeUg0I6GwoURT_zj6l1YtNxdYvfVzgnuSMwHIzdj79Xg8DeXMbwiQ4P62eWaQSTiv_kteLBbuqkOLrF9_S-tJK5cuqkJbOG9K_sBtpMkFvPJ-EJdQrFUwQ1VGyncWY_89cFC1aUb5PWv_HFVBgZ-Tcs3g0jG7q5a42sjLLusTxxT4clWgqj6TeTKlDIW6a90000",alt:null}),(0,l.kt)("h5",{id:"1363-\u67e5\u770b\u8ba2\u9605\u8bbe\u5907\u5217\u8868"},"1.3.6.3 \u67e5\u770b\u8ba2\u9605\u8bbe\u5907\u5217\u8868"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYYBhuiJ51J9PrmwaqKhXQV_45rktlrY__Td69YwG44AYwTdK3SyMB7ovgWSgWM6orRFvIr-iN_HYtQANCrfVhDltT4dxquxfBnQkuC9GQgDhv-84LGyojtVTqrsJCPNfse4SP_LY_vIdi-T1L3_VFVdPl3bS3gbvAS3W0W00",alt:null}),(0,l.kt)("h5",{id:"1364-\u79fb\u52a8\u8ba2\u9605"},"1.3.6.4 \u79fb\u52a8\u8ba2\u9605"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYY6BJTp52PMRM50KK9fKN9h4nGLoYAuTo1uhXQVz4rzitVvY_VPd6vkuG488YQPdKpSyMx3mvQeUg0I6GwoUBz_zj6l5YtNxdYvfVzgnuMdhjYUxfxrOj-ZbZ5Ok3DKG0s1QNsne1eODIEHf_xHdspfmwRBH9QphwUJUfxkca61Zn-odktUHR2EIBjmskZXPGPGysR_mMUFwPpsDJtQsFksPnkLHKbBWd9EPcbS2iO3ea4Io2s4BF3gj884nyUcEPc1u06q4wYw0HBIjhSBBzjwdIteLR6t9qEwGcfS2JCy0",alt:null}),(0,l.kt)("h5",{id:"1365-\u4ece\u8ba2\u9605\u4e2d\u79fb\u9664\u8bbe\u5907"},"1.3.6.5 \u4ece\u8ba2\u9605\u4e2d\u79fb\u9664\u8bbe\u5907"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYY6BJTp5YOiBPAEk7SX0AuMd_HDVRDt-OltsPnkRk41228ccPrCtF5kmyEMg7gW4XerMJtRtlLYtwEMCrYSxrZvVlllbp2KlrkrxkgIT2qEfhfsBanLKxVw5pnhNF-jfVBApzMdFD6ngaLnlzM93Cp2qG29F-wSzszO1CGHJbuqkOLrF9_S-tJK5700GvQZUGLOAyj6i5eXteDeSKlDIW3490000",alt:null}),(0,l.kt)("h5",{id:"1366-\u7f16\u8f91\u8ba2\u9605\u4fe1\u606f"},"1.3.6.6 \u7f16\u8f91\u8ba2\u9605\u4fe1\u606f"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYYBhuiJ51J9PrmwaqKhXQV_45rktlrY__Td69YwG44AYwTdK3SyMB7ovgWSgWM6orVCzqrxic_XYtQANCrgVx5_uh74z5uOYNJiN9oja9Szw6f_iR7tQCmsRMf3Ri1dha9gN0Wmj0000",alt:null}),(0,l.kt)("h5",{id:"1367-\u5220\u9664\u8ba2\u9605"},"1.3.6.7 \u5220\u9664\u8ba2\u9605"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfnVbEfKb9-TMWHId9cSYYBhuiJ51J9PrmwaqKhXQV_45rktlrY__Td69YwG44AYwTdK3SyMB7ovgWSgWM6orTEE1IzdBdcnRj7B6QrS6DAwTYvELX399_iNFcjS_wodySdErgSzqx2f1RaAnS3dkoS_cpU7oo4rBmKOJW00",alt:null}),(0,l.kt)("h5",{id:"\u6d88\u8d39\u8ba2\u9605\u6570\u636e"},"\u6d88\u8d39\u8ba2\u9605\u6570\u636e"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HHvfXRM01IbfcSYYBkabXG552QL5oQn0KoMjSEIQ7LisqTBxRiVB5kqSiPhS-cRdZMkuwB2w41LIqI6wAj0ApeoOwrpsUr04MUDQxdGbAZQmUo3bdNq_w9BniQ8IgVTcm0oJZdPARcbN3PsYgyREzzkgHNmTPs8Ep74Z9FMpU_dBuM4YOGwr0Dn-6ofurpdgrTXCLzaC05sMEZYz-UfvDxd-wQmkMGcfS2J2S0",alt:null}),(0,l.kt)("h5",{id:"websocket\u8ba2\u9605"},"websocket\u8ba2\u9605"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGX5qZc_ADMfA3yxjIWujQWiCpaLHTObiQ0ee3Ifk3G9GnDCEHV8I5qx37EiobEJYlEJirDB55wit_viOnCNXXA8BfZw5nkQWGu5YJpjcFrqzwuNwnQzdD6AgSj6bx2kfvDxd-wQmeMaKDSEuHShiFB-YKztD3_Rrl6iSVtJZWq545yY567p4a84gE_5bfqGJKzsh7q-gmLY4ZPFWW88IIlGufSDZN2BatCoK_DAkBXiRHLUjlS-NTAhO6ixn1mET33XHF2qTVFBwMj9I0Jzqq1k9JKH8Ec29WAGqo3A2JZD8JKl1PXt0000",alt:null}))}d.isMDXComponent=!0}}]);