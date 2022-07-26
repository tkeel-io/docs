"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),s=l,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={},p=void 0,i={unversionedId:"api/appendix/plantuml/rule_manager",id:"api/appendix/plantuml/rule_manager",title:"rule_manager",description:"1.3.8.1 \u521b\u5efa\u8def\u7531\u89c4\u5219",source:"@site/docs/api/appendix/plantuml/rule_manager.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/rule_manager",permalink:"/api/appendix/plantuml/rule_manager",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/rule_manager.md",tags:[],version:"current",lastUpdatedAt:1656322951,formattedLastUpdatedAt:"2022\u5e746\u670827\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rudder_revise",permalink:"/api/appendix/plantuml/rudder_revise"},next:{title:"server-monitor",permalink:"/api/appendix/plantuml/server-monitor"}},o={},u=[{value:"1.3.8.1 \u521b\u5efa\u8def\u7531\u89c4\u5219",id:"1381-\u521b\u5efa\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.2 \u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5",id:"1382-\u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5",level:5},{value:"1.3.8.3 \u542f\u52a8\u8def\u7531\u89c4\u5219",id:"1383-\u542f\u52a8\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.4 \u505c\u6b62\u8def\u7531\u89c4\u5219",id:"1384-\u505c\u6b62\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.5 \u7f16\u8f91\u8def\u7531\u89c4\u5219",id:"1385-\u7f16\u8f91\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.6 \u5220\u9664\u8def\u7531\u89c4\u5219",id:"1386-\u5220\u9664\u8def\u7531\u89c4\u5219",level:5},{value:"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531",id:"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531",level:4},{value:"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907",id:"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h5",{id:"1381-\u521b\u5efa\u8def\u7531\u89c4\u5219"},"1.3.8.1 \u521b\u5efa\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUB4nGKoMjSEfDDAuMd_n1TRjxzOl_tPnYOka112ekdPr0tF5YnykQe7Ae5fjDNJZjbFT-y2AUnTzsBx-kTJDd9XgjArSt6oWiW-sR_mMUFwPpsDJtQsFksPXbKno7bGWr-iM_HoHklptPEVpPl3vP2Qbm8CCG00",alt:null}),(0,l.kt)("h5",{id:"1382-\u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5"},"1.3.8.2 \u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUB4nGKoMjSEfDDAuMd_n1TRjxzOl_tPnYOka112ekdPr0tF5YnykQe7gWFJQAjdyvU-MB_enVRrpwTiVB6yvMd7J2vCLJQwTYvELazszu4Cx5ttTDVa9plM4gLJrmvaizMB_LEUpfw7hFR5-cNFcbkv75BpKe212000",alt:null}),(0,l.kt)("h5",{id:"1383-\u542f\u52a8\u8def\u7531\u89c4\u5219"},"1.3.8.3 \u542f\u52a8\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZL7BJi905DtFLpIiTD4Vc9164HV6a13b1mQO428ICcqDQ-JH6B0OqK1S24GYSK4XKHjruTVCTFWB6Lg4IJMwktFFcNFFFHUK437ocNm95GqbudN6p78Z2j8LKyS4IE1kyk0OapDCjWunBcn7544xMPGIxSWiu0GgeXmcWftFO0cEnwJdVcelBZKIs41PPA2GPbcMGIMIDDEwcPRQAKHosD014EvLJPY32hMl-8lB7PVDAa2qra25tKnPVp1_QWP0s3saROTUZ0MnDU6kutLc8CnIjNWCiliHTuO-XpzMgTNxaRbQ4VBf-IBmxurNXQg9LE2c3gttQ6sq32ki65L_KQJNBVhUMMOHLV-rMV133DhqEHdEkpN9ZzsbpTkbb_Bc-3-8wwj1zchnvpT_jW-hMd0zw7Uz3vj_DWAPXwhNhjFsfH-4TpTX_GROmSMiULhu0W00",alt:null}),(0,l.kt)("h5",{id:"1384-\u505c\u6b62\u8def\u7531\u89c4\u5219"},"1.3.8.4 \u505c\u6b62\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUA4mdKDSNP14V1DBKbCIIn9n32p0jMOn8AYWDAauj8aBYwGItNjG0wnKdZQF_75rkqlrcz_jh692oI4a6XwDdN3imKBNwxgWKfWkjJgQUESPsiNWHJshdknVVtpAHkvC5NfshauMJsRl_J5-aKGDI-Mjppjc8bL9SmxLYysD0C35-ux64FN3XG2LiZcFDdT1n9xsh7WvSmbM0orqSLXwDF9lKztJG47XuqkKPw3wW1PX-pKTOjUpcX5TjBJ_XbFUwQ1tLA1R3q1XOX8idgshUF5bfqGks7IOChgsVG5JoVkVR9ZBSISztjwdknOz7HFCrIjGsfU2Z2P0W00",alt:null}),(0,l.kt)("h5",{id:"1385-\u7f16\u8f91\u8def\u7531\u89c4\u5219"},"1.3.8.5 \u7f16\u8f91\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUB4nGKoMjSEfDDAuMd_n1TRjxzOl_tPnYOka112ekdPr0tF5YnykQe7Ae5fjDNpFTDUx9luOllwvrCslbZUyhHZ9XUcAXjTEnSdAsH5pteQd-niVTep3OjgNJkG-wnUx9_oTFOyP4qlrYzxrjpAvP2Qbm8CE000",alt:null}),(0,l.kt)("h5",{id:"1386-\u5220\u9664\u8def\u7531\u89c4\u5219"},"1.3.8.6 \u5220\u9664\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUB4nGKoMjSEfDDAuMd_n1TRjxzOl_tPnYOka112ekdPr0tF5YnykQe7Ae5fjDNJZWKlPou1AUnTzsBx-kTJDd9XgjArSt6oWiW-sR_mMUFwPpsDJtQsFksPXbKno7bGWr-iM_HoHklptPEVpPl3vP2Qbm8CCG00",alt:null}),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531"},"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUA4mdNEBqh5gYone2YWDAcuD8cB2-GINJkGHLOAJ_idljYw_SNwxSysDd61X10IJS-cRdYsOE7BLJrG2KoNM3tRlljfru8Nw_OzNTB-j6C3I4VlkXVRrp-Vif4BKxck7PBph5viQ0O63qZaQSVifxjtlLYtwEMCLYpQR7G9QtiwkVVfhYbOxNHnieAeUR9_uRF6zSzw6f_iR7tQCmqS3ZQwfFaAQWyNaek0Di03rmhihlw9JtSqFzlM0RGDgBq04kosjWelstkVBkbLiBKbGxj3QbuAC7a10000",alt:null}),(0,l.kt)("h4",{id:"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907"},"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIi-dh7ZMiLr98R5OeRGujGXLqZ70CpYrg2orICCxDJL7Kqa1f2mRo4HH5bIQa-gRc9UOdbe4KfsPd8eYxUB4nGKoMjSEfDDAuMd_n1TRjxzOl_tPnYOka112ekdPr0tF5YnykQe7Ae5fjDMJtNqWLRthNcnV_tpAnYSxrZxjMF1ovf8Nw_OzNTBEXQb3ryuvloWLflt5XcQWbq4YJ_kdFTlMyMBTefSpMh5eiz4bhEtfvDwdkwPWjTF5oGgYvid-XSyQrp_hQNooi_LfppHmKDZeakmng5KEgNafm3W40000",alt:null}))}d.isMDXComponent=!0}}]);