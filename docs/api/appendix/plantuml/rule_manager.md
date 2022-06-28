##### 1.3.8.1 创建路由规则
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:创建数据路由
RuleManagerService->DB:路由信息持久化
RuleManagerService->user:创建订阅结果
@enduml
```
##### 1.3.8.2 查询路由规则详情
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB

user->keel: 发起请求
keel->keel: 参数校验
user->RuleManagerService:查询路由规则
RuleManagerService<->DB:从数据库中查询路由规则
RuleManagerService->user:返回路由规则详情
@enduml
```
##### 1.3.8.3 启动路由规则
```plantuml

participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB
participant ETCD
participant Metadata
participant Rulex
participant DaprPubsub
participant Targets

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:启动数据路由
RuleManagerService->DB:查询路由规则
RuleManagerService->Metadata:调用Metadata
Metadata->ETCD:路由规则写入ETCD
RuleManagerService<-Metadata:调用Metadata响应
user<-RuleManagerService:启动数据路由响应
ETCD->Metadata:订阅路由规则变化
Rulex<-Metadata:订阅路由规则变化
Rulex<-DaprPubsub:消费数据
Rulex->Targets:数据经过规则处理后写入目标
@enduml
```
##### 1.3.8.4 停止路由规则
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB
participant ETCD
participant Metadata
participant Rulex
participant DaprPubsub

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:停止数据路由
RuleManagerService->DB:查询路由规则
RuleManagerService->Metadata:调用Metadata
Metadata->ETCD:路由规则从ETCD删除
RuleManagerService<-Metadata:调用Metadata响应
user<-RuleManagerService:停止数据路由响应
ETCD->Metadata:订阅路由规则变化
Rulex<-Metadata:订阅路由规则变化
Rulex<-DaprPubsub:消费数据
Rulex<-Rulex:无命中路由，丢弃数据
@enduml
```
##### 1.3.8.5 编辑路由规则
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:编辑路由规则
RuleManagerService<->DB:路由规则持久化
RuleManagerService->user:返回路由规则详情
@enduml
```
##### 1.3.8.6 删除路由规则
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:删除数据路由
RuleManagerService->DB:路由信息持久化
RuleManagerService->user:删除订阅结果
@enduml
```
#### 添加设备到数据路由
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB
participant CoreService
participant DaprPubsub

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:添加设备到数据路由
RuleManagerService->CoreService:调用Core创建订阅
RuleManagerService<-CoreService:调用Core创建订阅响应
RuleManagerService->DB:订阅信息持久化
user<-RuleManagerService:添加设备到数据路由响应

CoreService->DaprPubsub:Core发布消息到pubsub
== 重复 ==
CoreService->DaprPubsub:Core发布消息到pubsub
@enduml
```
#### 从数据路由中删除设备
```plantuml
@startuml
participant "用户" as user
participant "APIServer(Keel)"  as keel
participant RuleManagerService
participant DB

user->keel: 发起请求
keel->keel: 参数校验
keel->RuleManagerService:从数据路由中删除设备
RuleManagerService->CoreService:调用Core取消订阅
RuleManagerService<-CoreService:调用Core取消订阅响应
RuleManagerService->DB:订阅信息持久化
user<-RuleManagerService:从数据路由中删除设备响应
@enduml
```