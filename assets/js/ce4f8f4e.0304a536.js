"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),f=l,g=c["".concat(o,".").concat(f)]||c[f]||m[f]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={},i=void 0,p={unversionedId:"api/appendix/plantuml/tenant-manager-admin",id:"api/appendix/plantuml/tenant-manager-admin",title:"tenant-manager-admin",description:"1.2.2 \u79df\u6237\u7ba1\u7406",source:"@site/docs/api/appendix/plantuml/tenant-manager-admin.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/tenant-manager-admin",permalink:"/api/appendix/plantuml/tenant-manager-admin",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/tenant-manager-admin.md",tags:[],version:"current",lastUpdatedAt:1656405736,formattedLastUpdatedAt:"2022/6/28",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"template",permalink:"/api/appendix/plantuml/template"},next:{title:"user-manager-tenant",permalink:"/api/appendix/plantuml/user-manager-tenant"}},o={},d=[{value:"1.2.2 \u79df\u6237\u7ba1\u7406",id:"122-\u79df\u6237\u7ba1\u7406",level:3},{value:"1.2.2.1 \u521b\u5efa\u79df\u6237\u7a7a\u95f4",id:"1221-\u521b\u5efa\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.1.1 \u65f6\u5e8f\u56fe",id:"12211-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.2 \u7f16\u8f91\u79df\u6237\u7a7a\u95f4",id:"1222-\u7f16\u8f91\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.2.1 \u65f6\u5e8f\u56fe",id:"12221-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.3 \u5220\u9664\u79df\u6237\u7a7a\u95f4",id:"1223-\u5220\u9664\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.3.1 \u65f6\u5e8f\u56fe",id:"12231-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.4 \u67e5\u770b\u7528\u6237\u5217\u8868",id:"1224-\u67e5\u770b\u7528\u6237\u5217\u8868",level:4},{value:"1.2.2.4.1 \u65f6\u5e8f\u56fe",id:"12241-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.5 \u91cd\u7f6e\u7528\u6237\u5bc6\u7801",id:"1225-\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",level:4},{value:"1.2.2.5.1 \u65f6\u5e8f\u56fe",id:"12251-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.6 \u5355\u70b9\u767b\u5f55",id:"1226-\u5355\u70b9\u767b\u5f55",level:4},{value:"1.2.2.6.1 \u65f6\u5e8f\u56fe",id:"12261-\u65f6\u5e8f\u56fe",level:5}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"122-\u79df\u6237\u7ba1\u7406"},"1.2.2 \u79df\u6237\u7ba1\u7406"),(0,l.kt)("h4",{id:"1221-\u521b\u5efa\u79df\u6237\u7a7a\u95f4"},"1.2.2.1 \u521b\u5efa\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12211-\u65f6\u5e8f\u56fe"},"1.2.2.1.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKdW-PSMpZkqAYSKAfSMfHLm5GCdCvCo2nBmI1IN70C_WrAAor28DxzJK74qb1P2oR20JLTdpTGkVJsXxDgVtQTT2ZQBIb9JK8gZQajGye0gG6Pd9gLmfYIM9IOd5gGfAlfN5XJbA81L5IOd9_WLSN23BTUr0PbizxP_uOkls5-ktFzlOn0KIqRL3CGUeeEdPr0tF5YnykQg72qNAHjSEOg3LquxPJtVlUhvyFj1p-DMyM3xfHUScN6gURT_zj6l1ixdDBsTEmAy64WfF9yxWGbK7zHNKe8u9JxlcGtobQmVojDMB_LEUpfxtVFVaP_FcS3cavgK0umO0",alt:null}),(0,l.kt)("h4",{id:"1222-\u7f16\u8f91\u79df\u6237\u7a7a\u95f4"},"1.2.2.2 \u7f16\u8f91\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12221-\u65f6\u5e8f\u56fe"},"1.2.2.2.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKdW-PSMpZkqAYSKAfSMfHLm5GCdCvCo2nBmI1IN70C_WrAAor28DxzJK74qb1P2oR20JLTdpTGkVJsXxDgVtQTT2ZQBIb9JK8gZQajGye0gG6Pd9gLmfYIM9IOd5gGfAlfN5XJbA81L5IOd9_WLSN23BTUr0PbizxP_uOkls5-ktFzlOn0KIqRL3CGUeeEdPr0tF5YnykQg72qNAHjSEOg3LizbRdatRy7pvVA3dG8fxrw6gXDe5KVQiOyBJhlaGktJjG4wnUh5_ojFPyvxldlnitXmkXzIy56280G00",alt:null}),(0,l.kt)("h4",{id:"1223-\u5220\u9664\u79df\u6237\u7a7a\u95f4"},"1.2.2.3 \u5220\u9664\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12231-\u65f6\u5e8f\u56fe"},"1.2.2.3.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPgCgUhrluV4BRipczJxiMQXILfgIa5a7LbgJc0LM0pCXCJkLAIIn9J4eiJbLGygqiBinH0gaeIafCzY_WuW9Phci7CjjAuMd_n1TRjxzOl_tPnYOka92k7Of181LDpwPkUBPWuSjLFLmeShfs41E1QZeMl9ovvFdo-SywjhzOFkb5vwRdQwSzdxgKUFLF-xkUxsuXLTUp5GkVpkicHZqnAb-iNmfH_6H7z_CfAuZK1T7oV5RBi_v9JtPlm-TzI92_s3_bwUnvptTFVZPl3YJ8TUr0KO8cuv2Qbm9CC000",alt:null}),(0,l.kt)("h4",{id:"1224-\u67e5\u770b\u7528\u6237\u5217\u8868"},"1.2.2.4 \u67e5\u770b\u7528\u6237\u5217\u8868"),(0,l.kt)("h5",{id:"12241-\u65f6\u5e8f\u56fe"},"1.2.2.4.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BLBmoImk2IrEBU9AJ2x9Br8e1J4BW4eoapCB4lDA59GS0po3KulAKeiql5DJSpIL51GIYnMoWKnKPS_NBNm-eUtPdDwdNGirYafJW6P3rPQavW5LWCp8J4xbIaaiIKnAB4vLKFAjB2xCKGAfS77Y0jchQmSorkff_yGNMxU_MB_zsSOcBf28hXsA4K05JS-cRdYsOE7BLJrSA58skdOkJbR9YJavLWhFvYzziNxHyoahddLi1odlNOUg5chRY_rJdiwUXw8CRAUk7SX9CEdTav_DcyFba9gN0Wmw0000",alt:null}),(0,l.kt)("h4",{id:"1225-\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"},"1.2.2.5 \u91cd\u7f6e\u7528\u6237\u5bc6\u7801"),(0,l.kt)("h5",{id:"12251-\u65f6\u5e8f\u56fe"},"1.2.2.5.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL88IYrEBGajJYqAI2mkBiylIk7YIamkoIzIA0MASHK05MScPnOavfKeA3a6U0Qd5fMb5cbufwRcQ2efA2GMAsG3cQZAdgzR-7n2sxCvlK-x5ceKbQO0RO6gBKdD0we0cP6PdCgLabYIc9HOdAgWv5jPN9YZ15BXuiJ51R9OrmvahfN2q_w9BxPkVx5--xEDJLmW8Lqx54D0AfgUJTtmRC72bwjwk53aTErSdAmKditUycpQXkTJLZphsFva_y9dZUkvN9mmJ7cnVyhJsVEUxvxyRDuST5CWBa5H0NQ9hXt8fMWo3gbvAS3G1G00",alt:null}),(0,l.kt)("h4",{id:"1226-\u5355\u70b9\u767b\u5f55"},"1.2.2.6 \u5355\u70b9\u767b\u5f55"),(0,l.kt)("h5",{id:"12261-\u65f6\u5e8f\u56fe"},"1.2.2.6.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VPBBJi9058RtynGdh611GyKh2u8B5yGDYK_Gj6FIM5io7OZk92JI646CQ28Yoiwu07Oi2EdBq8jluVGoI8suFDF_VEV_psd9f1AXjNCDIJ8r2DHCJ52LFQcoMfLq2gd3Ila4apecwMECjKmAG3BXb1WwJUgyySZhNhk3jdCpIfEQec0IYwC2eO2TBOQj1V2UvyxY4OLLjXX92h0bWD-PENTFr3Z3EegULprv0RvQRMVSTxhtwNnEpF3sW5o0xRNFyR2Z2ug9Bcbb1UjKfPSLOjJLSDAEm2sWJIBEtHM0GPUBjcDDURAOpttlCLhlm-rOxclJUs_uqoOhu-0GxMGLPhEdVHRWgk_RhHzGk8m0RSsMziXjJFvnoyqSCCpdhJzf9FhuUAuISu7dDzVgGdBPKMXHPAUmUyxB42HPngOPgn975DczbWixoBekWaJ-tpSMy_p8V_g3c1qDJqWY47SO2-OFxd20K0dh2lkD0Nq3",alt:null}))}m.isMDXComponent=!0}}]);