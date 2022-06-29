
### 1.2.2 租户管理

#### 1.2.2.1 创建租户空间
##### 1.2.2.1.1 时序图
```plantuml
@startuml
actor 用户 as user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)"  as tenantService
database "Mysql" as rbacOp

user->keel:发起请求
keel->tenantService:参数校验
tenantService<->rbacOp:创建租户
tenantService<->rbacOp:创建角色
tenantService<->rbacOp:添加权限
tenantService<->rbacOp:添加管理员

tenantService->keel:添加成功
keel-->user:返回结果
@enduml
```
#### 1.2.2.2 编辑租户空间
##### 1.2.2.2.1 时序图
```plantuml
@startuml
actor 用户 as user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)"  as tenantService
database "Mysql" as rbacOp

user->keel:发起请求
keel->tenantService:参数校验
tenantService<->rbacOp:更新租户数据
tenantService->keel:更新成功
keel-->user:返回结果
@enduml
```
#### 1.2.2.3 删除租户空间
##### 1.2.2.3.1 时序图

```plantuml
@startuml
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)"  as tenantService
database "Mysql" as rbacOp

user->keel: 发起请求
keel->tenantService: 参数校验
tenantService->rbacOp: 删除租户角色策略
tenantService->rbacOp: 删除租户角色及组策略
tenantService->rbacOp: 删除租户角色模型
tenantService->rbacOp: 删除租户模型
tenantService->rbacOp: 删除该租户下用户模型
tenantService->rbacOp: 删除租户的插件角色策略
tenantService->keel: 返回结果
keel-->user: 返回结果
@enduml
```
#### 1.2.2.4 查看用户列表
##### 1.2.2.4.1 时序图
```plantuml
@startuml
header ListUser
actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)"  as tenantService
database "Mysql" as DB
user->keel:发起请求
keel->tenantService:参数校验
tenantService<->DB:call: 查询用户数据
tenantService->keel:返回用户数据
keel-->user:返回结果
@enduml
```
#### 1.2.2.5 重置用户密码
##### 1.2.2.5.1 时序图

```plantuml
@startuml
header ResetUserPassword

actor user
participant "APIServer(Keel)"  as keel
participant "管理服务(rudder)"  as tenantService
database "Mysql" as DB

user->keel: 发起请求
keel->tenantService: 参数校验
tenantService->DB: 更新用户信息
DB->tenantService: 返回结果
tenantService->keel: 返回结果
keel-->user: 返回结果
@enduml
```
#### 1.2.2.6 单点登录
##### 1.2.2.6.1 时序图
```plantuml
@startuml
actor user
participant "APIServer(Keel)"  as front
participant "管理服务(rudder)"  as rudder

user->front: 登录
front->rudder: 2. 获取token
rudder->front: 3. 重定向(301)
front->user: 4. 重定向
user->ExternalIdentityProvider: 5. 登录

ExternalIdentityProvider->user: 6. 定位到(rudder)
user->rudder: 7. 用授权码调用 rudder 服务
rudder->ExternalIdentityProvider: 8. 通过授权码获取用户信息
ExternalIdentityProvider->rudder: 9. 验证用户信息
rudder->rudder: 10. 生成 token
rudder->user: 11. 返回 access token
user->front: 12. 使用 access token 调用 rudder
front->rudder: 13. 获取用户信息
rudder-> front: 返回用户信息
front-->user: 返回结果

@enduml 

```