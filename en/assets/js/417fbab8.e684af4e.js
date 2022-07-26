"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7648],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),i=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},o=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),u=i(a),N=n,c=u["".concat(p,".").concat(N)]||u[N]||k[N]||l;return a?r.createElement(c,d(d({ref:e},o),{},{components:a})):r.createElement(c,d({ref:e},o))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:n,d[1]=m;for(var i=2;i<l;i++)d[i]=a[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84333:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},d=void 0,m={unversionedId:"api/device/tag",id:"api/device/tag",title:"API\u5217\u8868",description:"API\u5217\u8868",source:"@site/docs/api/device/tag.md",sourceDirName:"api/device",slug:"/api/device/tag",permalink:"/en/api/device/tag",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/device/tag.md",tags:[],version:"current",lastUpdatedAt:1655369803,formattedLastUpdatedAt:"Jun 16, 2022",sidebarPosition:0,frontMatter:{title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u8ba2\u9605",permalink:"/en/api/core_broker/method_updateSubscribe"},next:{title:"AddDeviceExt",permalink:"/en/api/device/method_AddDeviceExt"}},p={},i=[{value:"device API",id:"device",level:2},{value:"group API",id:"group",level:2},{value:"template API",id:"template",level:2}],o={toc:i};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"device"},"device API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_ListDeviceDataRelation"},"ListDeviceDataRelation")),(0,n.kt)("td",{parentName:"tr",align:null},"list data relation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_CreateDeviceDataRelation"},"CreateDeviceDataRelation")),(0,n.kt)("td",{parentName:"tr",align:null},"Create data relation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateDeviceDataRelation"},"UpdateDeviceDataRelation")),(0,n.kt)("td",{parentName:"tr",align:null},"update data relation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceSysInfo"},"GetDeviceSysInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity sysInfo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_SetDeviceAttrubte"},"SetDeviceAttrubte")),(0,n.kt)("td",{parentName:"tr",align:null},"set device attribte")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceAttributeData"},"GetDeviceAttributeData")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity attributeData")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_SetDeviceCommand"},"SetDeviceCommand")),(0,n.kt)("td",{parentName:"tr",align:null},"set device command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DelDeviceExtBusiness"},"DelDeviceExtBusiness")),(0,n.kt)("td",{parentName:"tr",align:null},"delete device extensions business")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_SetDeviceRaw"},"SetDeviceRaw")),(0,n.kt)("td",{parentName:"tr",align:null},"set device raw")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceDataRelation"},"GetDeviceDataRelation")),(0,n.kt)("td",{parentName:"tr",align:null},"get single relation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_SearchEntity"},"SearchEntity")),(0,n.kt)("td",{parentName:"tr",align:null},"search entity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceRawData"},"GetDeviceRawData")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity rawData")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteDeviceDataRelation"},"DeleteDeviceDataRelation")),(0,n.kt)("td",{parentName:"tr",align:null},"delete data relation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteDevice"},"DeleteDevice")),(0,n.kt)("td",{parentName:"tr",align:null},"delete device entity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDevice"},"GetDevice")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateDevice"},"UpdateDevice")),(0,n.kt)("td",{parentName:"tr",align:null},"update device entity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceBasicInfo"},"GetDeviceBasicInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity basicInfo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceConnectInfo"},"GetDeviceConnectInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity connectInfo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DelDeviceExt"},"DelDeviceExt")),(0,n.kt)("td",{parentName:"tr",align:null},"delete device extensions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_CreateDevice"},"CreateDevice")),(0,n.kt)("td",{parentName:"tr",align:null},"create device entity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_SetDeviceConfAsOtherTemplte"},"SetDeviceConfAsOtherTemplte")),(0,n.kt)("td",{parentName:"tr",align:null},"save device confAsOtherTemplate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_SetDeviceConfAsSelfTemplte"},"SetDeviceConfAsSelfTemplte")),(0,n.kt)("td",{parentName:"tr",align:null},"save device confAsSelfTemplate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddDeviceExt"},"AddDeviceExt")),(0,n.kt)("td",{parentName:"tr",align:null},"add device extensions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateDeviceExt"},"UpdateDeviceExt")),(0,n.kt)("td",{parentName:"tr",align:null},"update device extensions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddDeviceExtBusiness"},"AddDeviceExtBusiness")),(0,n.kt)("td",{parentName:"tr",align:null},"add device extensions business")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateDeviceExtBusiness"},"UpdateDeviceExtBusiness")),(0,n.kt)("td",{parentName:"tr",align:null},"update device extensions business")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_CreateDeviceDataRelationAuto"},"CreateDeviceDataRelationAuto")),(0,n.kt)("td",{parentName:"tr",align:null},"Create data relation auto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetDeviceTelemetryData"},"GetDeviceTelemetryData")),(0,n.kt)("td",{parentName:"tr",align:null},"get device entity telemetryData")))),(0,n.kt)("h2",{id:"group"},"group API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetGroupTree"},"GetGroupTree")),(0,n.kt)("td",{parentName:"tr",align:null},"get group tree")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddGroupExt"},"AddGroupExt")),(0,n.kt)("td",{parentName:"tr",align:null},"add group extensions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateGroupExt"},"UpdateGroupExt")),(0,n.kt)("td",{parentName:"tr",align:null},"update group extensions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteGroup"},"DeleteGroup")),(0,n.kt)("td",{parentName:"tr",align:null},"delete entity group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetGroup"},"GetGroup")),(0,n.kt)("td",{parentName:"tr",align:null},"get entity group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateGroup"},"UpdateGroup")),(0,n.kt)("td",{parentName:"tr",align:null},"update entity group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DelGroupExt"},"DelGroupExt")),(0,n.kt)("td",{parentName:"tr",align:null},"delete group extensions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_CreateGroup"},"CreateGroup")),(0,n.kt)("td",{parentName:"tr",align:null},"create entity group")))),(0,n.kt)("h2",{id:"template"},"template API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_CreateTemplate"},"CreateTemplate")),(0,n.kt)("td",{parentName:"tr",align:null},"create Template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetTemplateCommand"},"GetTemplateCommand")),(0,n.kt)("td",{parentName:"tr",align:null},"get Template command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetTemplate"},"GetTemplate")),(0,n.kt)("td",{parentName:"tr",align:null},"get Template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateTemplate"},"UpdateTemplate")),(0,n.kt)("td",{parentName:"tr",align:null},"update Template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteTemplateTelemetryExt"},"DeleteTemplateTelemetryExt")),(0,n.kt)("td",{parentName:"tr",align:null},"delete template telemetry ext")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteTemplate"},"DeleteTemplate")),(0,n.kt)("td",{parentName:"tr",align:null},"delete Template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteTemplateCommand"},"DeleteTemplateCommand")),(0,n.kt)("td",{parentName:"tr",align:null},"delete template command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteTemplateTelemetry"},"DeleteTemplateTelemetry")),(0,n.kt)("td",{parentName:"tr",align:null},"delete Template telemetry")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_DeleteTemplateAttribute"},"DeleteTemplateAttribute")),(0,n.kt)("td",{parentName:"tr",align:null},"delete Template attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetTemplateTelemetry"},"GetTemplateTelemetry")),(0,n.kt)("td",{parentName:"tr",align:null},"get Template telemetry")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_ListTemplateAttribute"},"ListTemplateAttribute")),(0,n.kt)("td",{parentName:"tr",align:null},"list Template attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddTemplateAttribute"},"AddTemplateAttribute")),(0,n.kt)("td",{parentName:"tr",align:null},"add Template attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateTemplateAttribute"},"UpdateTemplateAttribute")),(0,n.kt)("td",{parentName:"tr",align:null},"update Template attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_ListTemplateCommand"},"ListTemplateCommand")),(0,n.kt)("td",{parentName:"tr",align:null},"list template command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddTemplateCommand"},"AddTemplateCommand")),(0,n.kt)("td",{parentName:"tr",align:null},"add template command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateTemplateCommand"},"UpdateTemplateCommand")),(0,n.kt)("td",{parentName:"tr",align:null},"update template command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_ListTemplateTelemetry"},"ListTemplateTelemetry")),(0,n.kt)("td",{parentName:"tr",align:null},"list Template telemetry")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddTemplateTelemetry"},"AddTemplateTelemetry")),(0,n.kt)("td",{parentName:"tr",align:null},"add Template telemetry")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateTemplateTelemetry"},"UpdateTemplateTelemetry")),(0,n.kt)("td",{parentName:"tr",align:null},"update Template telemetry")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_GetTemplateAttribute"},"GetTemplateAttribute")),(0,n.kt)("td",{parentName:"tr",align:null},"get Template attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_AddTemplateTelemetryExt"},"AddTemplateTelemetryExt")),(0,n.kt)("td",{parentName:"tr",align:null},"add template telemetry ext")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./method_UpdateTemplateTelemetryExt"},"UpdateTemplateTelemetryExt")),(0,n.kt)("td",{parentName:"tr",align:null},"update template telemetry ext")))))}k.isMDXComponent=!0}}]);