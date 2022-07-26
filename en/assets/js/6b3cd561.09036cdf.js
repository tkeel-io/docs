"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8818],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>g});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function p(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var m=n.createContext({}),u=function(t){var e=n.useContext(m),l=e;return t&&(l="function"==typeof t?t(e):p(p({},e),t)),l},o=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=u(l),g=a,d=s["".concat(m,".").concat(g)]||s[g]||c[g]||r;return l?n.createElement(d,p(p({ref:e},o),{},{components:l})):n.createElement(d,p({ref:e},o))}));function g(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,p=new Array(r);p[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var u=2;u<r;u++)p[u]=l[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},9745:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=l(87462),a=(l(67294),l(3905));const r={},p=void 0,i={unversionedId:"api/appendix/plantuml/rudder",id:"api/appendix/plantuml/rudder",title:"rudder",description:"1.\u6a21\u5757\u4ecb\u7ecd",source:"@site/docs/api/appendix/plantuml/rudder.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/rudder",permalink:"/en/api/appendix/plantuml/rudder",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/rudder.md",tags:[],version:"current",lastUpdatedAt:1656377675,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"plugin-manager-tenant",permalink:"/en/api/appendix/plantuml/plugin-manager-tenant"},next:{title:"rudder_revise",permalink:"/en/api/appendix/plantuml/rudder_revise"}},m={},u=[{value:"1.\u6a21\u5757\u4ecb\u7ecd",id:"1\u6a21\u5757\u4ecb\u7ecd",level:3},{value:"1.1 keel",id:"11-keel",level:4},{value:"1.1.1 \u65f6\u5e8f",id:"111-\u65f6\u5e8f",level:5},{value:"1.2 rudder",id:"12-rudder",level:4},{value:"1.2.1 \u65f6\u5e8f",id:"121-\u65f6\u5e8f",level:5},{value:"1.2.2 plugin service",id:"122-plugin-service",level:5},{value:"1.2.3 tenant service",id:"123-tenant-service",level:5},{value:"1.2.4 rbac Service",id:"124-rbac-service",level:5}],o={toc:u};function c(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1\u6a21\u5757\u4ecb\u7ecd"},"1.\u6a21\u5757\u4ecb\u7ecd"),(0,a.kt)("h4",{id:"11-keel"},"1.1 keel"),(0,a.kt)("h5",{id:"111-\u65f6\u5e8f"},"1.1.1 \u65f6\u5e8f"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/fP51YiCm34NtFeKFC27CDf12Rr2O4mX7dPeQsoF9eJEd7pi9Jj92k-ZAMFhw_ra68u5qOYIj8f1OOoDuqLT4jwzG6eQYKaNS78gW8_n9oAB0Y1r1S1fJVQyXoKNtlIhtHNksJf0wtKAq_D6oGBRU2ieC-bpCHjkw0UUEkHV8_kMPu9Vc3DIrusUx6_KXWpWyIpT0fEOY4jM0UyILU7PHyr5DZwjX3ln26gt19wBQgulX63oZvcGCCcy1biJ7fKKAjzzrQqlAgLHFBdrR_zRJAja4zXfeWcWEvRVhS-x3_W40",alt:null}),(0,a.kt)("h4",{id:"12-rudder"},"1.2 rudder"),(0,a.kt)("h5",{id:"121-\u65f6\u5e8f"},"1.2.1 \u65f6\u5e8f"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/XLHBai8W4DtFARX0DhEQSc5vXhc0nNGwIac0QXejRpz0K8aYBa8I-l7wzOVUUPR4OTPVBhuLA2SD2-dSwf_2E2AjjaRfrXkd7xy77Jn7u9S4LcV9c9dYCspZib56iJWoE-6HpaW2h9cUp0Toy6fU16mCNegMJ3pYoi_3Qz6xl8Pjqhg9P0PX4LvxgLdAkGTHZZ8jmrq38GSo5GreXOPhcdpghPh2awEr3erqwiPXR8Hhd7YnPXyvNyL-ewXolI3ZHaF7IpXrZQhlEZZlhF4eV010xsksTe4xmJaT3gfaAhPP1BTXP4D9MXUMsNxHsGhQH9xE7OIsSXJIZE8Y6Ox28StAUsNDtYCtwJn28CNNL2oIREbT59FI-4bRoKbgFGLO5LnaCyTsIFVjJqAxNsJWu_VzU0j2AKCzG6mIkdOHHKKFaeLySfEInlQ4fYyu1ji5t5BRmoGvoID8ZhNiqsd9awLvIED57RhO6PaK-6VCCg_ow7mUHEK-xD2CSQh-0m00",alt:null}),(0,a.kt)("h5",{id:"122-plugin-service"},"1.2.2 plugin service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ServiceInit")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqWiAibCpYn8p2jHA4dD0r81EQNfcNc-YNc9wQb5N5Z4TEsm25eb5wKcbgGgPAUcviGNLnQNfEOgf1VbbnOe51JbvsGcLn9lKc9A2jGf2WLW2TADA2u1UakXEBMeB3Cv5G00",alt:null}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"InstallPlugin")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VLF1ReCm3Btp5RxjHALkEt7elQTDsnK9fS5jhOOaIaAd_lsSK5R2ibr0F3_Rpyz6o60SZ1vTPOKB9CaA7S2gyKJw4zsL96QHytXuipc2QkZacH5VgB4Y1zJyUY-59duEEJC6NF4kLmQgABdUPJeRqZu8fUwLEj97KsMCUfVaDmwjwRGOi4hVzRfGYXVJ7xCslVdIoeWUvjbpQbun9eAm1Bd6SX8h57s_70Eaa6Uij0a82e-XWUs6gtGJnNSftEhdpI9d0jSTyWMaFXDqRmVk86GqNf6ybUKrnd86po8L8ITIpqyACxlWfhT6U_pV8TOgB_jKwdXRJBhTfCWiZzqBeu-ZPl2ieTKlzq2u82guelDaTAjVC_wJdno5qfBdgsFX9_81tOyr4V-r2XReKF3NalKGk1-ime7LOJ-v3X-Hi6uQhtgnTR3e1l9HEtWCVzx9QFj5wzB6wrtyLT99ymw-0G00",alt:null}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"UpgradePlugin")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bLFBRiCW4BpxAxZrb4fzd7p8FQTKZNgpL57OE2WOjh2uojztxOIak4wgNemqEnfcXhLKv8D84KA5Cf1H1gKZWJQrncqWz4P1CTcbZpMM2DZkNUqOYJCQ4pA1u-DbReJ19u89kEyPg0P_YsLXgWxmcI1ILQ2PjCQwXMn1AAbsC2Lo48-3YZ0kahIMpwslHdZn-pBqn_bKvHA-rlxBMI-ro6NCESkARzW6gU6g_OHQ4fG9vicrHouLZL3M05TcD7yD7KxicImHlOjmsn_Vf_QhKMfxg9ndBnQsL3_SZvDiZ9kZ51ltMCBPG-EUJWFQ0rZHGuZ6kyOz5_oxU4muMt7U2pRU-VvSoOXEkSEwd7aGEXE7wqG4kg7QcaWG2jrJuKNi03yUP6HTOgywjD1nPj37tHQlL-r9hRFA7nR_iGkBvV2FdD_s6m00",alt:null}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"UninstallPlugin")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZP5TQWCn38JVznI-G2wm3xb2Gdk0uZX3Lk0VHPO3lNtjf4knCJHF1lcRqJ2oJfEOaY4BMr5on3QgOLzk53yX3tBeVhPoEN4_WGzVRgkJFF4OO4MiptdszU8_Kb6C6vuxbvRoSEoYhO9xGTQbc-xGYTSRTcFZhDim1__SSkKfi4T0L5nthRHKS-rluBNmrIhU45HM4D83RmJRpNl1rBnlTbHSh3CioPFx_g-2bmuIA6TAqTHAHidp86ixlB5CfaIAMQtt8zSkrahb53D-0000",alt:null}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"GetPlugin")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VSyn3iCW30NGtQVm1RX0XkoT8hKdGAwR84LWsT3pjwX1IbAKaV-_7k0f9yLYh21USw0WFcQKjSmXFbZVWRZJJD89xwba_ZO0rNFZ0Hb-fziJ3d5RJJBCt20aJmjZYAy4hNPdJzaaHMEqGiHcVNTxqnxN6ktnRVD_mPNlnlh9y-W3",alt:null}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"ListPlugin")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VO_B3OCm38RlcS8Bi007LiYX4rZ6IgsYn7MSFhOl2D4AX7hpu_FtoqXU35fb2uhcGgAO7NHgIVA5xI749vke8In7tR0ZU-Dxu-fXDzsWgFrQm2HV9cftb2JUOe2Ghdnk-qKcVYdS-FqiDjR_iEBSe4l9HsxvPdPfoPK_",alt:null}),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"TenantEnable")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bP0x3W8n34Jxd28Ns0kaeAAXsW8k49mHHAmSam_d9wlT81P524gFPvx6jfH3r2KXAh4nU_9YEMkPoiNp4V7X2PtDA1rHgPapx3PXiqm7fpPoSuso6ZHPka8rTVZ4H4ZWX3wbcIg1RciR3RRdwP-0Wu0Tc92-fnPokxfhDQ6oh7WTSIz8sPXJdJdlVNfhzNBtAl_wWldfRVS4",alt:null}),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"TenantDisable")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZP5D3eCW48Ntd88BU04MhjnqPPDw0OfJEuc1AGmzVzKM8fQ5Ay9xZsz-q8QTbp605wGzeq7IbYNDSK9x0_z60nMdfufOI0nsEQufBTOIJLjmrVTs6KKXfrHFQeB4bcWVJYIZEP9sGQFD4-f4vMZfYb1wU4K8h8QjoGw3li_fJGx_U6Ff7Yjx2EHi-AjOpgywc85Xs8cYJ9m6v-L46ZL3RUppjAPT_oMx7m00",alt:null}),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"ListEnabledTenants")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/RSun3i8m30NGFQV81Ng13knC6JY1PRw2fIWrZeCuFbGgHOswskz_czWNYxt1WfAvi2XLZrfwbdg3lOHniaaQmXgQBWSv6vuTpSDX-aD9vmoFLChM4eliDkaqbWsOYHyuR_wVptZh5hZUHxn-_3LDbzhm0G00",alt:null}),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"TMUpdatePluginIdentify")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZOyn3i8m34Ntd28Nw0Koi3Dru0IMQy02ESPnaBWzL4gGMZAm-h__R0DwjbWBML0mPsG5yQZtUc4vaJqPQP3CEXY6i7gcmwQSZ1wLYeVDj4CfAmaenqQbuqBYV7urVFgr5SrIQAph55u9RplL3fqrLLt0gHqV4JwjqCD_zwuVVyCt",alt:null}),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"TMRegisterPlugin")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bP9B3i8m34JtFKKkq0jaWSIILH6S84e6i6WJamyIjwUL6cXBMs1hZv_78oiTdHSfm1UiV2HDh6mKNASpsIFydJHcEXNF56TA1vSYMd7HRIWt8wpqk2M4M8ogMLInF2DZ1DcJAtAZd886Ggtq1VF4teiqg16H1tnNNHkJZc4La-ZjIhapi95EZrx_ULPWPyC2BglQVVew8IqOrXvgOlWNTiCrcfOFit_ZrZSDWbnPyvd8rfZsucak_mMJFIGstwwztWSw-8P286T5mF8lZQdhxxJWiznqJ_pgFW40",alt:null}),(0,a.kt)("h5",{id:"123-tenant-service"},"1.2.3 tenant service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CreateTenant")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZP7FIiGm48VlVOhGqmhR5-YXu74HKTGNc4q63PicSP8AVO5b4GGF7htipPDNdyZjQzZf7wI8tRs5v9llDpC16Hs9vktZiFiI44GLa18F5BNK7cmKwVdrwXRf2MbnWMZEKi7OfZrEiUPptxnk3-ylty_x1LMA1ZAYRT_Pe2Kc2YAi8Q18B-lmQ58cQ0tooYS9HsS5c_E-QAMMTpeQNDvW2RH9-2ah9i9_o0cJ5Nr2BWaXuj2HA9rgPpY596Tm5WUbX7T6ophlOOzKwX2qiqBRGJDJ2wfiiMxrnmD-OV70s-EyKqBkoLN-Jtctz527RFJm-QXhx6LQpRvnSZllwdwPC7WRSFXNTerNFm00",alt:null}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"GetTenant")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzIA2rEBU8gI2mgoKpEB4ZCAr4eISq3Ki6fHMMPoQaeCaL9YSd-1LnS82swTYZgh20ypnGk565TEuWUg_HKcC7gnGevcSKbnAWhoiz99KOTs0kewdJjG89MHQd51VbvnQa0",alt:null}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"UpdateTenant")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NOsn3SCm40DxJQ41h0LKg4yL8Ca27ud58xRqUBqzlsFOZLmH18yaPMlgrmvrGcgSMQYQDzI_lA4RPmo9VYa_nRcZ4jB0nTCzolHXundJ2mlfpmrGIET2NAMGuNhoIokORsH8nqbKT6crOmS0",alt:null}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"DeleteTenant")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bOyn3iCW34LtJi7MYGjaOE_KeITmm8gG2BOCHEhj6qWwP8dePDbwxzi6LqXqpIYAGKfmWI4LNJ3jvOso1OVAGu4PCcgPmRrOgSORUu6cetjwTHaRUpYJu4eRdi56AA9cYi5zXlY-i4kBK6LpgtgCM7xg8-lkhUHnXEzW74nkP_qbSAnBI3Vl6zioz-ypKyhu1G00",alt:null}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"CreateUser")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NOvD2i8m48NtSufSe1V8ec0jk5GG3p1D7Xe8IPnCUtwRAaYxcX--n_Ve1VOGSnQmub4XHEmqYvdRNbWqk50ugL6aTTmXIt0WpyeJLnYPs5tB_nu7efRj-bt02jupgjBks_NZO1t7Q8tR6fYjme7vAdxSoVkBvBc4zBpbk9P3FV1Tt_ohi9QSAkW3",alt:null}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"DeleteUser")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NOwn2iCm34HtVON65feVy90X63gsK3eNnHRKO6nNLWhz-ph9q2QJJfnEz-39v5dGScJbUsK18ATPS9fr8T7WGg6ag9pQkB6yWsFmf3HIPPIHtANyTZi0pDcktmICy6lYgcPv_0Z-jDfDmUQmw-rW_8A32y_ENVkCenZD7_RXB7agICdZDSVWFiTTiElduePHIqwLuGi0",alt:null}),(0,a.kt)("h5",{id:"124-rbac-service"},"1.2.4 rbac Service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CreateRoles")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/LOun3i8m34Ltdo8Nw0KoHA9KOgIY9t0JIuqKcc2xIDoU1eOsc_Nz_FrW8Gp4vig4Ie-SI03GQsQp2J4KP8q-5bpLy8n-8dv7Jn1GSKOXC_J7N85xQMv6ucSKYNcTI05gP-TEHPRfjP4edBBE3RtrFo73kr6xQnhjZVG8HjIblcdulvJrc9AzX33c5FsdGJfNjNOJANaLWYy0",alt:null}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"DeleteRole")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ROv13i8m30JlVeK_q0_qq4FL2oSau0DkiYgHIX8SjnA_fn4I5C5jvLtFBbqX7ie3PXXEQGQHE4lAIu5I5hNWGfPehAEuCtGD3kJ5P9G27lgFhe5Z9gBwsdIxVAkuBoX6krlJ3NqxmNRDN-wBrlgtVOWNn6t81hkb5PpJ7Do39NgUD2tv1-x_avkkxjie9QTOG4y0",alt:null}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"CreateRoleBinding")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ROv12i8m44NtSugvG2_GHHUnUq7n0DFa4mCbYPEfuEqrkB05Tv_vRtYVxf00vPD239UomgKSKev4ugqeRmrALTIIJrMoiIxYhz1dyg0W9eiqyEn-kGFdIjG_Xsc7Zuh7XcQqkmtJxCO8uwx-MzpwW4Fn5OmI0aSjM-LQrkHVHwZRFy9MIswWDm00",alt:null}),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"DeleteRoleBinding")),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ROvD3e8m48NtSuhPkV82B4max4cK2mpj4ngnhUtW-QKOVqZSJTvyxuT6Y4NY1XCKfp2XTjuwFn29qP1upaWK9QapBefNJhsOCzB36P0LbLuokAc_Tm7QI5IS-yCFNYNSPsIb7-q5jB4QeApmIyCkhwLbovPiwfLwFxbVbhBpb_0tS9JCtHMOkZNrQ6_EVsnRHqbSnkKOV0Oz0G00",alt:null}))}c.isMDXComponent=!0}}]);