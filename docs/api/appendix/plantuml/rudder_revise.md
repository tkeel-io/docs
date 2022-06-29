### 1 管理平台插件子模块

#### 1.1 插件管理
##### 1.1.1 创建插件源
```plantuml
@startuml
header create plugin-hub

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant RepoSrv
participant DaprStore

User->Keel:request:/apis/rudder/v1/repos/{hub-name}
Keel->Dapr: invoke service
Dapr->RepoSrv: invoke service
activate RepoSrv
RepoSrv->RepoSrv: check repoSet cache info
RepoSrv->RepoSrv: create repo info
RepoSrv->DaprStore: create repo cache
RepoSrv->RepoSrv: add repoSet cache info
RepoSrv-->User: response
deactivate RepoSrv
@enduml
```
##### 1.1.2 安装插件
```plantuml
@startuml
header install plugin

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant HubOp
participant Helm_charts
participant PluginOp
participant TenantPluginOp
participant Plugin
participant ProuteOp
participant KvOp

User->Keel: request: apis/rudder/v1/repos/{repoName}/\ninstallers/{pluginId}/{pluginVersion}
Keel->Dapr: invoke service
Dapr->PluginService:install plugin_info
PluginService->HubOp:repo_name
HubOp-->PluginService:repo_info
PluginService->Helm_charts:download charts
PluginService->PluginService:helm api install plugin
PluginService->PluginOp:add plugin_info cache
note left: 1.all_plugins_cache\n2.plugin_info_cache
PluginService->TenantPluginOp:add tenant plugin rbac prolicy
PluginService->Plugin:openapi client identity
Plugin-->PluginService:response
PluginService->PluginService:checkIdentify
note left:1.check plugin status\n2.check plugin identity\n3.check tkeel version\n4.check plugin's cache info
PluginService->ProuteOp:register plugin route cache
note left:1.create plugin route\n2.check ImplementedPlugin Route
PluginService->KvOp:add plugin permission set
PluginService->PluginOp:update plugin cache
PluginService-->User:reponse
@enduml
```
##### 1.1.3 卸载插件
```plantuml
@startuml
header uninstall plugin

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant HubOp
participant Helm_charts
participant PluginOp
participant TenantPluginOp
participant PluginRouteOp

User->Keel:request: apis/rudder/v1/plugins/{pluginId}
Keel->Dapr:invoke service
Dapr->PluginService:request
PluginService->PluginOp:get plugin cache
PluginService->PluginService:reset implemented plugin route
PluginService->PluginRouteOp:update plugin route
PluginService->PluginOp:remove plugin cache
PluginService->PluginRouteOp:remove plugin route
PluginService->TenantPluginOp:remove plugin rbac prolicy
PluginService->PluginService:remove permission set
PluginService->HubOp:helm api uninstall
PluginService-->User:response
@enduml
```
##### 1.1.4 查看插件详情
```plantuml
@startuml
header plugin detail

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant PluginOp
participant PluginRouteOp

User->Keel:request: apis/rudder/v1/repos/{repoName}/installers/{pluginId}/{pluginVersion}
Keel->Dapr:invoke service
Dapr->PluginService:pluginId
PluginService->PluginOp:get plugin cache info
PluginOp-->PluginService:response success
PluginService->PluginRouteOp:get plugin route info
PluginRouteOp->PluginService:reponse success
PluginService-->User:reponse success
@enduml
```
##### 1.1.5 查看启用插件列表
```plantuml
@startuml
header plugin list

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant PluginOp

User->Keel:request: /apis/rudder/v1/repos/installers?installed=true
Keel->Dapr:invoke service
Dapr->PluginService:request
PluginService->PluginOp:plugin list
PluginOp-->PluginService:get plugin cache
PluginService->PluginService:regexp keywords
PluginService->PluginService:pagination
PluginService-->User:reponse
@enduml
```

#### 1.2 租户管理

##### 1.2.1 创建租户空间
```plantuml
@startuml
header CreateTenant

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database RbacOp

User->Keel:request: /apis/security/v1/tenants
Keel->Dapr:invoke service
Dapr->TenantService:TenantId,Title,Remark
TenantService->RbacOp:create tenant model
TenantService->RbacOp:create tenant role model
TenantService->RbacOp:add policy: role permission in tenant
TenantService->RbacOp:add admin user
TenantService->RbacOp:add policy: admin user has role in tenant
TenantService->RbacOp:add group: admin user has user-sys-role in sys-tenant
TenantService->RbacOp:add policy: user-sys-role has permissin in sys-tenant
TenantService-->User:respnse
@enduml
```
##### 1.2.2 编辑租户空间
```plantuml
@startuml
header UpdateTenant

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
participant RbacOp

User->Keel:request: /apis/security/v1/tenants/{tenantId}
Keel->Dapr:invoke service
Dapr->TenantService:tenantId,Titile,Remark
TenantService->RbacOp:update tenant model
TenantService-->User:response
@enduml
```
##### 1.2.3 删除租户空间
```plantuml
@startuml
header DeleteTenant

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database RbacOp

User->Keel:request: apis/security/v1/tenants/{tenantId}
Keel->Dapr:invoke service
Dapr->TenantService:tenantId
TenantService->RbacOp:remove tenant-role policy
TenantService->RbacOp:remove tenant-user-role group-policy
TenantService->RbacOp:delete tenant's role mode
TenantService->RbacOp:delete tenant model
TenantService->RbacOp:delete tenant's user model
TenantService->RbacOp:delete tenant's plugin-role policy
TenantService-->User:response
@enduml
```
##### 1.2.4 查看用户列表
```plantuml
@startuml
header GetUserList

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database DB
database RbacOp

User->Keel:request: /apis/security/v1/tenants/{tenantID}/users
Keel->Dapr:invoke service
Dapr->TenantService:request
TenantService->DB:get user's list
TenantService->RbacOp: get user's roles
TenantService-->User:reponse
@enduml
```
##### 1.2.5 为用户重置密码
```plantuml
@startuml
header ResetPassword

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant Dapr
participant TenantService
participant DB

User->Keel:request: apis/security/v1/tenants/{tenantId}/users/{UserID}/rpk
Keel->Dapr:invoke service
Dapr->TenantService:call: GetResetPasswordKey
TenantService->DB:get ResetKey
TenantService-->Dapr:response
Dapr-->Keel:response
Keel-->User:response
@enduml
```
##### 1.2.6 单点登陆
```plantuml
@startuml
header login

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant Oauth2Service

User->Keel: request: /apis/rudder/v1/oauth2/admin params: password
Keel->Dapr: proxy
Dapr->Oauth2Service: call: IssueAdminToken
Oauth2Service-->Dapr: response Token
Dapr-->Keel: response Token
Keel-->User: response Token
User->Keel: request: /apis/rudder/v1/oauth2/authorize: token
Keel->Dapr: proxy
Dapr->Oauth2Service: call: VerifyToken
Oauth2Service-->User: response
@enduml
```


### 2 租户平台插件子模块

#### 2.1 插件管理
##### 2.1.1 查看插件列表
```plantuml
@startuml
header plugin list

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant PluginOp

User->Keel:request: /apis/rudder/v1/plugins?page_num=1&page_size=20&key_words=
Keel->Dapr:invoke service
Dapr->PluginService:request
PluginService->PluginOp:plugin list
PluginOp-->PluginService:get plugin cache
PluginService->PluginService:regexp keywords
PluginService->PluginService:pagination
PluginService-->User:reponse
@enduml
```
##### 2.1.2 启用插件
```plantuml
@startuml
header plugin enable

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant PluginOp
participant Plugin

User->Keel:request: /apis/rudder/v1/plugins/{pluginId}/tenants
Keel->Dapr:invoke service
Dapr->PluginService:pluginId
PluginService->PluginOp:plugin cache
PluginOp-->PluginService:reponse
PluginService->PluginService:check plugin enable
PluginService->PluginService:check plugin dependences
PluginService->PluginService:enable plugin
PluginService->Plugin:openapi request::TenantDisable
Plugin->Plugin:plugin enable
Plugin-->PluginService:reponse
PluginService-->User:reponse
@enduml
```
##### 2.1.3 停用插件
```plantuml
@startuml
header plugin disable

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant PluginOp
participant Plugin
participant TenantPluginOp

User->Keel:request: /apis/rudder/v1/plugins/{pluginId}/tenants
Keel->Dapr:invoke service
Dapr->PluginService:pluginId
PluginService->PluginOp:get plugin info
PluginOp-->PluginService:get plugin cache
PluginService->Plugin:openapi request:TenantDisable
Plugin->Plugin:plugin disable
Plugin-->PluginService:response
PluginService->TenantPluginOp:DeleteTenantPlugin
TenantPluginOp-->PluginService:response
PluginService->PluginOp:update plugin cache
PluginOp-->PluginService:response
PluginService-->User:response
@enduml
```
##### 2.1.4 查看插件详情
```plantuml
@startuml
header plugin detail

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant PluginService
participant PluginOp
participant PluginRouteOp

User->Keel:request: apis/rudder/v1/plugins/{pluginId}
Keel->Dapr:invoke service
Dapr->PluginService:pluginId
PluginService->PluginOp:get plugin cache info
PluginOp-->PluginService:response success
PluginService->PluginRouteOp:get plugin route info
PluginRouteOp->PluginService:reponse success
PluginService-->User:reponse success
@enduml
```


#### 2.2 用户管理

##### 2.2.1 创建角色
```plantuml
@startuml
header CreateRoles

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant RbacService
database DB
database RbacOp
participant PermissionSet

User->Keel:request: /apis/security/v1/rbac/roles
Keel->Dapr:invoke service
Dapr->RbacService:request
RbacService->DB:create role
RbacService->PermissionSet:GetPermissionPathSet
RbacService->RbacOp:call:AddPolicy
RbacService-->User:response
@enduml
```
##### 2.2.2 查看角色列表
```plantuml
@startuml
header ListRole

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant RbacService
database DB

User->Keel:request: /apis/security/v1/rbac/roles
Keel->Dapr:invoke service
Dapr->RbacService:request
RbacService->DB:get roles
RbacService-->User: response
@enduml
```
##### 2.2.3 编辑角色
```plantuml
@startuml
header UpdateRole

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant RbacService
database DB
database RbacOp

User->Keel:request: /apis/security/v1/rbac/roles/{roleId}
Keel->Dapr:invoke service
Dapr->RbacService:request
RbacService->DB:get Roles
RbacService->RbacOp:add Permission Group and Policies
RbacService->DB:update Roles
RbacService-->User:response
@enduml
```
##### 2.2.4 删除角色
```plantuml
@startuml
header DeleteRole

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant RbacService
database DB
database RbacOp

User->Keel:request: /apis/security/v1/rbac/roles/{roleId}
Keel->Dapr:invoke service
Dapr->RbacService:request
RbacService->DB:getDeleteRole
RbacService->RbacOp:deleteRoleInTenant:remove policy and group
RbacService->DB:deleteRole
RbacService-->User:response
@enduml
```
##### 2.2.5 创建用户
```plantuml
@startuml
header CreateUser

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database RbacOp
database DB

User->Keel:request: /apis/security/v1/tenants/{tenantId}/users
Keel->Dapr:invoke service
Dapr->TenantService:request
TenantService->DB:call: create User
TenantService->RbacOp:call: AddGroupingPolicies
TenantService-->User:response
@enduml
```
##### 2.2.6 编辑用户信息
```plantuml
@startuml
header UpdateUser

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database RbacOp
database DB

User->Keel:request: apis/security/v1/tenants/{tenantId}/users/{userId}
Keel->Dapr:invoke service
Dapr->TenantService:request
TenantService->RbacOp:add Perission Group and Policies
TenantService->DB:update User model
TenantService-->User:response
@enduml
```
##### 2.2.7 查看用户列表
```plantuml
@startuml
header GetUserList

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database DB
database RbacOp

User->Keel:request: /apis/security/v1/tenants/{tenantId}/users
Keel->Dapr:invoke service
Dapr->TenantService:request
TenantService->DB:get User's list
TenantService->RbacOp: get User's roles
TenantService-->User:reponse
@enduml
```
##### 2.2.8 重置密码
```plantuml
@startuml
header ResetPassword

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
participant DB

User->Keel:request: /apis/security/v1/tenants/{tenantId}/users/{userId}/rpk
Keel->Dapr:invoke service
Dapr->TenantService:request: ResetKey
TenantService->DB:update User password
TenantService-->User:response
@enduml
```
##### 2.2.9 删除用户
```plantuml
@startuml
header DeleteUser

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
database RbacOp
database DB

User->Keel:request: /apis/security/v1/tenants/{tenantId}/users/{userId}
Keel->Dapr:invoke service
Dapr->TenantService:request: user_id,tenant_id
TenantService->DB:delete User
TenantService->RbacOp:call: DeleteUser(Group and Policy)
TenantService-->User:response
@enduml
```
##### 2.2.10 登陆平台
```plantuml
@startuml
header login

actor User
participant "APIServer(Keel)"  as Keel
participant Dapr
participant TenantService
participant OauthService
participant DB

User->Keel:request: /apis/security/v1/tenants/exact?title
Keel->Dapr:proxy
Dapr->TenantService: call:TenantByExactSearch
TenantService-->User: tenant info

User->Keel:request: /apis/security/v1/oauth/{tenantId}/token
Keel->Dapr:proxy
Dapr->OauthService: call: Token
OauthService->OauthService: call: ValidationTokenRequest
OauthService->OauthService: call: model.AuthenticateUser
OauthService->DB:identity User
OauthService-->User:response
@enduml
```