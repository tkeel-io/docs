### 1.模块介绍

#### 1.1 keel
##### 1.1.1 时序
```plantuml
actor user 
participant keel 
participant rudder 

user->keel:request
activate keel
== auth ==
keel->keel:filter: /apis,/static
keel->keel:authenticate
keel->keel:callAuthorization
keel->rudder:/v1/authenticate
note left:dapr-http
deactivate keel

activate rudder
rudder->rudder:AuthenticationService
rudder->rudder:Authenticate
rudder-->keel:response success
deactivate rudder

activate keel
== proxy ==
keel->rudder:ProxyPlugin
note left:dapr-http
deactivate keel

activate rudder
rudder-->keel:reponse
deactivate rudder

activate keel
keel-->user:response
deactivate keel
```

#### 1.2 rudder
##### 1.2.1 时序
```plantuml
@startuml
participant app
participant rudder
participant dapr
participant k8s_cluster

activate app
app->app:init http server conf
app->app:init grpc server conf
app->rudder:new rudder app
deactivate app

activate rudder
rudder->dapr:connect dapr grpc server
deactivate rudder

activate dapr
dapr-->rudder:return dapr grpc client
deactivate dapr

activate rudder
rudder->rudder:init openapi client
note left:init dapr http client
rudder->k8s_cluster:init k8s client
deactivate rudder

activate k8s_cluster
k8s_cluster-->rudder:response success
deactivate k8s_cluster

activate rudder
rudder->rudder:init plugin dapr state 
rudder->rudder:init proute dapr state 
rudder->rudder:init pluginRepo dapr state
rudder->rudder:init kv dapr state
rudder->rudder:load and watch permission_set
rudder->rudder:init security operator
rudder->rudder:init profile dapr state
rudder->rudder:init plugin service
note left: init tenant rbac
rudder->rudder:init oauth2 service
rudder->rudder:init repo service
rudder->rudder:init entry service
rudder->rudder:init tenant service
rudder->rudder:init oauth service
rudder->rudder:init entity token service
rudder->rudder:init rbac service
rudder->rudder:init profile service
rudder->rudder:init authentication service
rudder->rudder:init platform-config service
rudder->rudder:init metrics service
rudder-->app:start app
deactivate rudder
@enduml
```
##### 1.2.2 plugin service
1. ServiceInit
```plantuml
participant tenantPluginManager
tenantPluginManager->tenantPluginManager:create keel_system group prolicy
tenantPluginManager->tenantPluginManager:add tenant plugin prolicy
tenantPluginManager->tenantPluginManager:start service
```
2. InstallPlugin
```plantuml
actor user
participant pluginService
participant hubOp
participant helm_charts
participant pluginOp
participant tenantPluginOp
participant plugin
participant prouteOp
participant kvOp

user->pluginService:install plugin_info
pluginService->hubOp:repo_name
hubOp-->pluginService:repo_info
pluginService->helm_charts:download charts
pluginService->pluginService:helm api install plugin
pluginService->pluginOp:add plugin_info cache
note left: 1.all_plugins_cache\n2.plugin_info_cache
pluginService->tenantPluginOp:add tenant plugin rbac prolicy
pluginService->plugin:openapi client identity
plugin-->pluginService:response
pluginService->pluginService:checkIdentify
note left:1.check plugin status\n2.check plugin identity\n3.check tkeel version\n4.check plugin's cache info
pluginService->prouteOp:register plugin route cache
note left:1.create plugin route\n2.check ImplementedPlugin Route
pluginService->kvOp:add plugin permission set
pluginService->pluginOp:update plugin cache
pluginService-->user:reponse
```
3. UpgradePlugin
```plantuml
actor user
participant pluginService
participant hubOp
participant helm_charts
participant pluginOp
participant tenantPluginOp
participant prouteOp
participant kvOp

user->pluginService:request
pluginService->pluginOp:get plugin cache
pluginService->hubop:req install info
hubop-->pluginService:repo info
pluginService->helm_charts:download charts
pluginService->pluginService:Upgrade
pluginService->pluginOp:update plugin cache

pluginService->plugin:openapi client identity
plugin-->pluginService:response
pluginService->pluginService:checkIdentify
note left:1.check plugin status\n2.check plugin identity\n3.check tkeel version\n4.check plugin's cache info
pluginService->prouteOp:remove plugin route
pluginService->kvOp:remove permission set
pluginService->prouteOp:register plugin route cache
note left:1.create plugin route\n2.check ImplementedPlugin Route
pluginService->kvOp:add plugin permission set
pluginService->pluginOp:update plugin cache

pluginService-->user:response
```
4. UninstallPlugin
```plantuml
actor user
participant pluginService
participant hubOp
participant helm_charts
participant pluginOp
participant tenantPluginOp
participant pluginRouteOp
participant hubOp

user->pluginService:request
pluginService->pluginOp:get plugin cache
pluginService->pluginService:reset implemented plugin route
pluginService->pluginRouteOp:update plugin route
pluginService->pluginOp:remove plugin cache
pluginService->pluginRouteOp:remove plugin route
pluginService->tenantPluginOp:remove plugin rbac prolicy
pluginService->pluginService:remove permission set
pluginService->hubOp:helm api uninstall
pluginService->user:response
```
5. GetPlugin
```plantuml
actor user
participant pluginService
participant pluginOp
participant pluginRouteOp


user->pluginService:pluginId
pluginService->pluginOp:get plugin cache info
pluginOp-->pluginService:response success
pluginService->pluginRouteOp:get plugin route info
pluginRouteOp->pluginService:reponse success
pluginService-->user:reponse success
```
6. ListPlugin
```plantuml
actor user
participant pluginService
participant pluginOp

user->pluginService:request
pluginService->pluginOp:plugin list
pluginOp-->pluginService:get plugin cache
pluginService->pluginService:regexp keywords
pluginService->pluginService:pagination
pluginService->user:reponse
```
7. TenantEnable
```plantuml
actor user
participant pluginService
participant pluginOp
participant plugin

user->pluginService:pluginId
pluginService->pluginOp:plugin cache
pluginOp-->pluginService:reponse
pluginService->pluginService:check plugin enable
pluginService->pluginService:check plugin dependences
pluginService->pluginService:enable plugin
pluginService->plugin:openapi request::TenantDisable
plugin->plugin:plugin enable
plugin-->pluginService:reponse
pluginService->user:reponse
```
8. TenantDisable
```plantuml
actor user
participant pluginService
participant pluginOp
participant plugin
participant tenantPluginOp

user->pluginService:pluginId
pluginService->pluginOp:get plugin info
pluginOp-->pluginService:get plugin cache
pluginService->plugin:openapi request:TenantDisable
plugin->plugin:plugin disable
plugin-->pluginService:response
pluginService->tenantPluginOp:DeleteTenantPlugin
tenantPluginOp-->pluginService:response
pluginService->pluginOp:update plugin cache
pluginOp-->pluginService:response
pluginService-->user:response
```
9. ListEnabledTenants
```plantuml
actor user
participant pluginService
participant pluginOp

user->pluginService:request
pluginService->pluginOp:get all plugin list
pluginOp-->pluginService:get all plugin cache
pluginService->pluginService:regexp pluginId
pluginService->user:response
```
10. TMUpdatePluginIdentify
```plantuml
actor user
participant pluginService
participant pluginOp
participant plugin

user->pluginService:request
pluginService->plugin:openapi request:Identify
plugin-->pluginService:response
pluginService->pluginService:checkIdentify
pluginService->pluginOp:update plugin cache
pluginOp->pluginService:response
pluginService->user:response
```
11. TMRegisterPlugin
```plantuml
actor user
participant pluginService
participant pluginOp
participant plugin
participant pluginRouteOp

user->pluginService:request
pluginService->pluginOp:get plugin info
pluginOp-->pluginService:get plugin cache
pluginService->pluginRouteOp:delete plugin route cache
pluginService->plugin:openapi request::Identify
plugin->pluginService:response
pluginService->pluginService:checkIdentify
pluginService->pluginRouteOp:create plugin route
pluginService->pluginService:checkImplementedPluginRoute
pluginService->pluginRouteOp:get plugin route
pluginService->plugin:openapi request::AddonsIdentify
plugin-->pluginService:response
pluginService->pluginRouteOp:update plugin route
pluginService->kvOp:update permission set
pluginService->pluginOp:update plugin info
pluginOp-->pluginService:response
pluginService-->user:response
```
##### 1.2.3 tenant service
1. CreateTenant
```plantuml
actor user
participant tenantService
database rbacOp

user->tenantService:tenantId,Title,Remark
tenantService->rbacOp:create tenant model
tenantService->rbacOp:create tenant role model
tenantService->rbacOp:add policy: role permission in tenant
tenantService->rbacOp:add admin user
tenantService->rbacOp:add policy: admin user has role in tenant
tenantService->rbacOp:add group: admin user has user-sys-role in sys-tenant
tenantService->rbacOp:add policy: user-sys-role has permissin in sys-tenant
tenantService-->user:respnse
```
2. GetTenant
```plantuml
actor user
participant tenantService
participant rbacOp

user->tenantService:tenantId
tenantService->rbacOp:get tenant's list
tenantService->rbacOp:get tenant's role
tenantService->rbacOp:get tenant's user
tenantService-->user:response
```
3. UpdateTenant
```plantuml
actor user
participant tenantService
participant rbacOp

user->tenantService:tenantId,Titile,Remark
tenantService->rbacOp:update tenant model
tenantService-->user:response
```
4. DeleteTenant
```plantuml
actor user
participant tenantService
database rbacOp

user->tenantService:tenantId
tenantService->rbacOp:remove tenant-role policy
tenantService->rbacOp:remove tenant-user-role group-policy
tenantService->rbacOp:delete tenant's role mode
tenantService->rbacOp:delete tenant model
tenantService->rbacOp:delete tenant's user model
tenantService->rbacOp:delete tenant's plugin-role policy
tenantService-->user:response
```
5. CreateUser
```plantuml

header CreateUser

actor user
participant tenantService
database rbacOp
database DB

user->tenantService:request
tenantService->DB:call: create User
tenantService->rbacOp:call: AddGroupingPolicies
tenantService-->user:response

```
6. DeleteUser
```plantuml

header DeleteUser

actor user
participant tenantService
database rbacOp
database DB

user->tenantService:request: user_id,tenant_id
tenantService->DB:delete User
tenantService->rbacOp:call: DeleteUser(Group and Policy)
tenantService-->user:response

```
##### 1.2.4 rbac Service
1. CreateRoles
```plantuml

header CreateRoles

actor user
participant rbacService
database DB
database rbacOp
participant PermissionSet

user->rbacService:request
rbacService->DB:create role
rbacService->PermissionSet:GetPermissionPathSet
rbacService->rbacOp:call:AddPolicy
rbacService-->user:response

```
2. DeleteRole
```plantuml

header DeleteRole

actor user
participant rbacService
database DB
database rbacOp


user->rbacService:request
rbacService->DB:getDeleteRole
rbacService->rbacOp:deleteRoleInTenant:remove policy and group
rbacService->DB:deleteRole
rbacService-->user:response

```
3. CreateRoleBinding
```plantuml

header CreateRoleBinding

actor user
participant rbacService
database DB
database rbacOp

user->rbacService:request
rbacService->DB:get Role
rbacService->DB:get User
rbacService->rbacOp:add group policy
rbacService->user:response

```
8. DeleteRoleBinding
```plantuml

header DeleteRoleBinding

actor user
participant rbacService
database DB
database rbacOp

user->rbacService:request
rbacService->rbacOp:get tenant's userRole
rbacService->DB:get userRole bind info
rbacService->rbacOp:has TkeelTenantAdminRole bind
rbacService->user:response

```

