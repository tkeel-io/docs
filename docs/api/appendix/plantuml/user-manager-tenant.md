
### 1.3.9 用户管理

#### 1.3.9.1 创建角色
##### 1.3.9.1.1 时序图
```plantuml

header CreateRole

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
database rbacOp
participant PermissionSet

user->keel:request
keel->TenantService:request
TenantService->Mysql:create role
TenantService->PermissionSet:GetPermissionPathSet
TenantService->rbacOp:call:AddPolicy
TenantService-->keel:response
keel-->user:response

```
#### 1.3.9.2 查看角色列表
##### 1.3.9.2.1 时序图

```plantuml

header ListRole

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel:request
keel->TenantService:request
TenantService->Mysql:query roles
Mysql->TenantService: response roles
TenantService-->keel:response
keel-->user:response

```
#### 1.3.9.3 编辑角色
##### 1.3.9.3.1 时序图
```plantuml

header UpdateRole

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel:request
keel->TenantService:request
TenantService->Mysql:update roles
Mysql->TenantService:  roles update response
TenantService-->keel:response
keel-->user:response

```
#### 1.3.9.4 删除角色
##### 1.3.9.4.1 时序图
```plantuml

header DeleteRole

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
database rbacOp
user->keel:request
keel->TenantService:request
TenantService->Mysql:getDeleteRole
TenantService->rbacOp:deleteRoleInTenant:remove policy and group
TenantService->Mysql:deleteRole
TenantService-->keel:response
keel-->user:response

```
#### 1.3.9.5 创建用户
##### 1.3.9.5.1 时序图
```plantuml

header CreateUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: create user
keel->TenantService: create user
TenantService->Mysql: insert user
Mysql->TenantService: insert user success
TenantService->keel:create user success
keel->user:create user success
```
#### 1.3.9.6 编辑用户信息
##### 1.3.9.6.1 时序图
```plantuml

header UpdateUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: update  user
keel->TenantService: update  user
TenantService->Mysql: update user
Mysql->TenantService: update user success
TenantService->keel:update user success
keel->user:update user success
```
#### 1.3.9.7 查看用户列表
##### 1.3.9.7.1 时序图
```plantuml

header ListUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: get user list
keel->TenantService: get user list
TenantService->Mysql: select  user
Mysql->TenantService: select user success
TenantService->user:get user list success
user->user:get user list success
```
#### 1.3.9.8 重置用户密码
##### 1.3.9.8.1 时序图
```plantuml

header ResetUserPassword

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: update  user password
keel->TenantService: update  user password
TenantService->Mysql: get user
Mysql->TenantService: get user success
TenantService->Mysql: update user password
Mysql->TenantService: update user password success
TenantService->keel:update user password success
keel->user:update user password success
```
#### 1.3.9.9 删除用户
##### 1.3.9.9.1 时序图
```plantuml

header DeleteUser

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: delete user
keel->TenantService: delete user
TenantService->Mysql: delete user
Mysql->TenantService: delete user success
TenantService->keel:delete user success
keel->user:delete user success
```
#### 1.3.9.10 登录平台
##### 1.3.9.10.1 时序图
```plantuml

header login

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: user login
keel->TenantService: user login
TenantService->Mysql: get user
Mysql->TenantService: get user success
TenantService->Mysql: valid password
Mysql->TenantService: valid password success
TenantService->keel: login success
keel->user: login success
```