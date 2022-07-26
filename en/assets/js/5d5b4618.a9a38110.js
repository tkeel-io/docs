"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9660],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(l),k=a,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||o;return l?n.createElement(m,r(r({ref:t},p),{},{components:l})):n.createElement(m,r({ref:t},p))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=l[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},40960:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=l(87462),a=(l(67294),l(3905));const o={title:"cli",sidebar_position:30},r="TKeel",i={unversionedId:"developer_cookbook/tools/tkeel",id:"developer_cookbook/tools/tkeel",title:"cli",description:"tkeel \u662f\u6211\u4eec\u4e3a\u7ba1\u7406\u5458\u5f00\u53d1\u7684\u7528\u4e8e\u5b89\u88c5\u548c\u7ba1\u7406tkeel\u5e73\u53f0\u7684 cli \u5de5\u5177\u3002",source:"@site/docs/developer_cookbook/tools/tkeel.md",sourceDirName:"developer_cookbook/tools",slug:"/developer_cookbook/tools/tkeel",permalink:"/en/developer_cookbook/tools/tkeel",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/tools/tkeel.md",tags:[],version:"current",lastUpdatedAt:1657251313,formattedLastUpdatedAt:"Jul 8, 2022",sidebarPosition:30,frontMatter:{title:"cli",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Artisan",permalink:"/en/developer_cookbook/tools/artisan"},next:{title:"IoTHub \u5feb\u901f\u5165\u95e8",permalink:"/en/developer_cookbook/iothub/getting_started"}},s={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u987b\u77e5",id:"\u5b89\u88c5\u987b\u77e5",level:3},{value:"\u5b89\u88c5 TKeel \u5e73\u53f0",id:"\u5b89\u88c5-tkeel-\u5e73\u53f0",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3},{value:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e",id:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e",level:4},{value:"\u5e73\u53f0\u7ba1\u7406\u5458",id:"\u5e73\u53f0\u7ba1\u7406\u5458",level:3},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:4},{value:"\u63d2\u4ef6\u7ba1\u7406",id:"\u63d2\u4ef6\u7ba1\u7406",level:3},{value:"\u67e5\u770b\u63d2\u4ef6\u6e90",id:"\u67e5\u770b\u63d2\u4ef6\u6e90",level:4},{value:"\u6dfb\u52a0\u63d2\u4ef6\u6e90",id:"\u6dfb\u52a0\u63d2\u4ef6\u6e90",level:4},{value:"\u5220\u9664\u63d2\u4ef6\u6e90",id:"\u5220\u9664\u63d2\u4ef6\u6e90",level:4},{value:"\u67e5\u770b\u63d2\u4ef6\u6e90\u6240\u6709\u5b89\u88c5\u5305",id:"\u67e5\u770b\u63d2\u4ef6\u6e90\u6240\u6709\u5b89\u88c5\u5305",level:4},{value:"\u67e5\u770b\u6240\u6709\u5df2\u5b89\u88c5\u63d2\u4ef6",id:"\u67e5\u770b\u6240\u6709\u5df2\u5b89\u88c5\u63d2\u4ef6",level:4},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:4},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",level:4},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",level:4},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",level:4},{value:"\u79df\u6237\u7ba1\u7406",id:"\u79df\u6237\u7ba1\u7406",level:3},{value:"\u521b\u5efa\u79df\u6237",id:"\u521b\u5efa\u79df\u6237",level:4},{value:"\u67e5\u770b\u79df\u6237\u5217\u8868",id:"\u67e5\u770b\u79df\u6237\u5217\u8868",level:4},{value:"\u5220\u9664\u79df\u6237",id:"\u5220\u9664\u79df\u6237",level:4},{value:"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3",id:"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3",level:3},{value:"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3",id:"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3-1",level:4},{value:"\u5378\u8f7d tKeel \u5e73\u53f0",id:"\u5378\u8f7d-tkeel-\u5e73\u53f0",level:3}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tkeel"},"TKeel"),(0,a.kt)("p",null,"tkeel \u662f\u6211\u4eec\u4e3a\u7ba1\u7406\u5458\u5f00\u53d1\u7684\u7528\u4e8e\u5b89\u88c5\u548c\u7ba1\u7406tkeel\u5e73\u53f0\u7684 cli \u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh -O - | /bin/bash\n")),(0,a.kt)("p",null,"\u6216\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh | /bin/bash\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5\u987b\u77e5"},"\u5b89\u88c5\u987b\u77e5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f tKeel \u73b0\u9636\u6bb5\u4f9d\u8d56\u4e8e Dapr\uff08Kubernetes mode\uff09\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-deploy/"},"Dapr on Kubernetes")),(0,a.kt)("li",{parentName:"ul"},"kubernetes worker \u8282\u70b9\u9700\u5b89\u88c5 socat")),(0,a.kt)("h3",{id:"\u5b89\u88c5-tkeel-\u5e73\u53f0"},"\u5b89\u88c5 TKeel \u5e73\u53f0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u5b98\u65b9\u4ed3\u5e93\u5b89\u88c5 tkeel \u5e73\u53f0\n> tkeel init --timeout=3600\n\n# \u4f7f\u7528\u81ea\u5b9a\u4e49\u4ed3\u5e93\u6e90\u5b89\u88c5 tkeel \u5e73\u53f0\n> tkeel init --repo-url=https://xxx.com/helm-charts --timeout=3600\n\n# \u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u5b89\u88c5 tkeel \u5e73\u53f0\n> tkeel init --config config.yaml --timeout=3600\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aLinux \u7528\u6237\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u7684 docker \u9700\u8981\u4f7f\u7528 sudo \u6743\u9650\u624d\u80fd\u4f7f\u7528\uff0c\u90a3\u4e48\u8bf7\u4f60\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo tkeel init"))),(0,a.kt)("p",null,"\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\u6240\u793a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u231b  Making the jump to hyperspace...\n(1/7) load tkeel install config.\n(2/7) install tKeel middleware begin.ur cluster... \u2139\ufe0f\n\u2190  Deploying the tKeel Platform to your cluster... \u2139\ufe0f  install tKeel middleware done.\n(3/7) install tKeel keelChart begin.\n\u2198  Deploying the tKeel Platform to your cluster... \u2139\ufe0f  install tKeel platform  done.\n(4/7) install tKeel coreChart begin.\n\u2199  Deploying the tKeel Platform to your cluster... W0706 11:22:32.565576 3733698 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionBudget\n\u2190  Deploying the tKeel Platform to your cluster... W0706 11:22:32.657250 3733698 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionBudget\n\u2190  Deploying the tKeel Platform to your cluster... \u2139\ufe0f  install tKeel component <core> done.\n(5/7) install tKeel rudderChart begin.\n\u2199  Deploying the tKeel Platform to your cluster... \u2139\ufe0f  install tKeel component <rudder> done.\n\u2705  Deploying the tKeel Platform to your cluster...\n(6/7) set tkeel default repo.\n(7/7) install tkeel preset plugins\n\u2705  Install "tkeel/console-portal-admin" success! It\'s named "console-portal-admin" in k8s\n\u2705  Install "tkeel/console-portal-tenant" success! It\'s named "console-portal-tenant" in k8s\n\u2705  Install "tkeel/console-plugin-admin-plugins" success! It\'s named "console-plugin-admin-plugins" in k8s\n\u2705  Success! tKeel Platform has been installed to namespace keel-system. To verify, run `tkeel plugin list\' in your terminal. To get started, go here: https://tkeel.io/keel-getting-started\n')),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("h4",{id:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e"},"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e"),(0,a.kt)("p",null,"tkeel \u5b89\u88c5\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel config > config.yaml\n> cat config.yaml\n\nhost:\n  admin: admin.tkeel.io # \u7ba1\u7406\u5e73\u53f0\u7684\u5165\u53e3\u5730\u5740\n  tenant: tkeel.io # \u79df\u6237\u5e73\u53f0\u7684\u5165\u53e3\u5730\u5740\nmiddleware: # \u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\n  cache: # \u7f13\u5b58\n    customized: false\n    url: redis://:Biz0P8Xoup@tkeel-middleware-redis-master:6379/0\n  database: # \u6570\u636e\u5e93\n    customized: false\n    url: mysql://root:a3fks=ixmeb82a@tkeel-middleware-mysql:3306/tkeelauth\n  queue: # \u6d88\u606f\u961f\u5217\n    customized: false\n    url: kafka://tkeel-middleware-kafka-headless:9092\n  search: # \u641c\u7d22\n    customized: false\n    url: elasticsearch://admin:admin@tkeel-middleware-elasticsearch-master:9200\n  service_registry: # \u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\n    customized: false\n    url: etcd://tkeel-middleware-etcd:2379\nport: 30080 # \u79df\u6237\u5e73\u53f0\u5165\u53e3\u548c\u7ba1\u7406\u5e73\u53f0\u5165\u53e3\u7684\u7aef\u53e3\nrepo: # \u63d2\u4ef6\u6e90\n  name: tkeel\n  url: https://tkeel-io.github.io/helm-charts\nplugins: # \u81ea\u52a8\u5b89\u88c5\u7684\u63d2\u4ef6\u5217\u8868\n  - tkeel/console-portal-admin@latest\n  - tkeel/console-portal-tenant@latest\n  - tkeel/console-plugin-admin-plugins@latest\n\n")),(0,a.kt)("h3",{id:"\u5e73\u53f0\u7ba1\u7406\u5458"},"\u5e73\u53f0\u7ba1\u7406\u5458"),(0,a.kt)("h4",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel admin login\n? Please enter your password:  ********\n\u2705  You are Login Success!\n")),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u7ba1\u7406"},"\u63d2\u4ef6\u7ba1\u7406"),(0,a.kt)("h4",{id:"\u67e5\u770b\u63d2\u4ef6\u6e90"},"\u67e5\u770b\u63d2\u4ef6\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel repo list\n  REPO NAME     REMOTE\n  tkeel-io-dev   https://harbor.wuxs.vip:30003/chartrepo/tkeel-io-dev\n")),(0,a.kt)("h4",{id:"\u6dfb\u52a0\u63d2\u4ef6\u6e90"},"\u6dfb\u52a0\u63d2\u4ef6\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel repo add <repo-name> <repo-url>\n\u2705  Successfully added!\n")),(0,a.kt)("h4",{id:"\u5220\u9664\u63d2\u4ef6\u6e90"},"\u5220\u9664\u63d2\u4ef6\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel repo delete <repo-name>\n\u2705  Successfully delete!\n")),(0,a.kt)("h4",{id:"\u67e5\u770b\u63d2\u4ef6\u6e90\u6240\u6709\u5b89\u88c5\u5305"},"\u67e5\u770b\u63d2\u4ef6\u6e90\u6240\u6709\u5b89\u88c5\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel installer list -r <repo-name>\n  NAME                                        VERSION            REPO          STATUS\n  console-plugin-admin-custom-config          0.6.0              tkeel-io-dev  UNINSTALL\n  console-plugin-admin-notification-configs   0.6.0              tkeel-io-dev  UNINSTALL\n  console-plugin-admin-plugins                0.6.0              tkeel-io-dev  SAME_NAME\n")),(0,a.kt)("h4",{id:"\u67e5\u770b\u6240\u6709\u5df2\u5b89\u88c5\u63d2\u4ef6"},"\u67e5\u770b\u6240\u6709\u5df2\u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel plugin list\n  NAME                          PLUGIN                        PLUGIN VERSION  REPO          REGISTER AT          STATE    DESCRIPTION\n  console-plugin-admin-plugins  console-plugin-admin-plugins  0.6.0           tkeel-io-dev  2022-07-04 14:40:47  RUNNING  console of plugin manager\n  console-portal-admin          console-portal-admin          0.6.0           tkeel-io-dev  2022-07-04 14:40:51  RUNNING  console manager portal\n  console-portal-tenant         console-portal-tenant         0.6.0           tkeel-io-dev  2022-07-04 14:40:54  RUNNING  console user portal\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel plugin install <repo-name>/<installer-name>[@<version>] <plugin-name>\n\u2705  Successfully added!\n")),(0,a.kt)("h4",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel plugin delete <plugin-name>\n\u2705  Successfully delete!\n")),(0,a.kt)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel plugin enable <plugin-name> -t <tenant-id>\n\u2705  Successfully enabled!\n")),(0,a.kt)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel plugin disable <plugin-name> -t <tenant-id>\n\u2705  Successfully disabled!\n")),(0,a.kt)("h3",{id:"\u79df\u6237\u7ba1\u7406"},"\u79df\u6237\u7ba1\u7406"),(0,a.kt)("h4",{id:"\u521b\u5efa\u79df\u6237"},"\u521b\u5efa\u79df\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ea4\u4e92\u5f0f\u521b\u5efa\u79df\u6237\n> tkeel tenant create\n? What the tenant space name? demo\n? What the tenant admin username? demo\n? What the tenant admin password? ****\n\u2705  Successfully created!\n\n# \u4ea4\u4e92\u5f0f\u521b\u5efa\u79df\u6237\n> tkeel tenant create <tenant-space-name> -u demo -p demo -\n\u2705  Successfully created!\n")),(0,a.kt)("h4",{id:"\u67e5\u770b\u79df\u6237\u5217\u8868"},"\u67e5\u770b\u79df\u6237\u5217\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel tenant list\n  ID        TITLE  REMARK\n  mH-Oz5pB  demo\n")),(0,a.kt)("h4",{id:"\u5220\u9664\u79df\u6237"},"\u5220\u9664\u79df\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel tenant delete <tenant-id>\n\u2705  Successfully delete!\n")),(0,a.kt)("h3",{id:"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3"},"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3"),(0,a.kt)("h4",{id:"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3-1"},"\u8c03\u7528\u63d2\u4ef6\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> tkeel invoke -v <Verb> -p <plugin-name> -m <path> [-d <json-string>]\n\n\u2705  Plugin invoked successfully\n")),(0,a.kt)("h3",{id:"\u5378\u8f7d-tkeel-\u5e73\u53f0"},"\u5378\u8f7d tKeel \u5e73\u53f0"),(0,a.kt)("p",null,"\u8981\u4ece\u4f60\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"tKeel"),"\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall"),"\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u79fb\u9664 tkeel \u5e73\u53f0\n> tkeel uninstall\n\n# \u79fb\u9664 tkeel \u5e73\u53f0\u548c\u6240\u6709\u63d2\u4ef6 \n> tkeel uninstall --all\n")))}c.isMDXComponent=!0}}]);