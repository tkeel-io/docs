
### 1.3.9 用户管理

#### 1.3.9.1 创建角色
##### 1.3.9.1.1 时序图
```plantuml
@startuml
header CreateRole
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
database rbacOp
participant PermissionSet
user->keel:发起请求
keel->TenantService:参数校验
TenantService<->Mysql:插入数据库
TenantService<->PermissionSet:获取权限
TenantService<->rbacOp:添加权限
TenantService-->keel:添加成功
keel-->user:返回结果
@enduml


```
#### 1.3.9.2 查看角色列表
##### 1.3.9.2.1 时序图

```plantuml
@startuml
header ListRole
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel:发起请求
keel->TenantService:参数校验
TenantService<->Mysql:查询角色
TenantService-->keel:返回角色
keel-->user:返回结果
@enduml
```
#### 1.3.9.3 编辑角色
##### 1.3.9.3.1 时序图
```plantuml
@startuml
header UpdateRole
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel:发起请求
keel->TenantService:参数校验
TenantService<->Mysql:更新角色数据
TenantService-->keel:更新成功
keel-->user:返回结果
@enduml


```
#### 1.3.9.4 删除角色
##### 1.3.9.4.1 时序图
```plantuml
@startuml
header DeleteRole
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
database rbacOp
user->keel:发起请求
keel->TenantService:参数校验
TenantService<->Mysql:删除角色
TenantService<->rbacOp:删除角色权限
TenantService-->keel:删除成功
keel-->user:返回结果
@enduml


```
#### 1.3.9.5 创建用户
##### 1.3.9.5.1 时序图
```plantuml
@startuml
header CreateUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: 发起请求
keel->TenantService: 参数校验
TenantService<->Mysql: 插入用户数据
TenantService-->keel:创建成功
keel-->user:返回结果
@enduml

```
#### 1.3.9.6 编辑用户信息
##### 1.3.9.6.1 时序图
```plantuml
@startuml
header UpdateUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: 发起请求
keel->TenantService: 参数校验
TenantService<->Mysql: 更新用户数据
TenantService-->keel:更新成功
keel-->user:返回结果
@enduml

```
#### 1.3.9.7 查看用户列表
##### 1.3.9.7.1 时序图
```plantuml
@startuml
header ListUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: 发起请求
keel->TenantService: 参数校验
TenantService<->Mysql: 查询用户
TenantService-->keel:返回用户数据
keel-->user:返回结果
@enduml

```
#### 1.3.9.8 重置用户密码
##### 1.3.9.8.1 时序图
```plantuml
@startuml
header ResetUserPassword
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: 发起请求
keel->TenantService: 参数校验
TenantService<->Mysql: 查询用户
TenantService<->Mysql: 更新密码
TenantService-->keel:更新成功
keel-->user:返回结果
@enduml

```
#### 1.3.9.9 删除用户
##### 1.3.9.9.1 时序图
```plantuml
@startuml
header DeleteUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: 发起请求
keel->TenantService: 参数校验
TenantService<->Mysql: 删除用户数据
TenantService-->keel:删除成功
keel-->user:返回结果
@enduml

```
#### 1.3.9.10 登录平台
##### 1.3.9.10.1 时序图
```plantuml
@startuml
header login
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)" as TenantService
database Mysql
user->keel: 发起请求
keel->TenantService: 参数校验
TenantService<->Mysql: 查询用户
TenantService<->Mysql: 验证密码
Mysql->TenantService: 密码验证成功
TenantService-->keel: 登陆成功
keel-->user: 返回结果
@enduml

```