
1. 创建一个数据路由

```plantuml
@startuml
header createRule

actor HttpClient
participant RuleManagerService
participant DB

HttpClient->CoreBrokerService:创建数据路由
CoreBrokerService->DB:路由信息持久化
CoreBrokerService->HttpClient:创建订阅结果
@enduml
```
2. 删除一个数据路由
```plantuml
@startuml
header deleteRule

actor HttpClient
participant RuleManagerService
participant DB

HttpClient->CoreBrokerService:删除数据路由
CoreBrokerService->DB:路由信息持久化
CoreBrokerService->HttpClient:删除订阅结果
@enduml
```
3. 添加设备到某个数据路由
```plantuml
@startuml
header addDeviceToRule

actor HttpClient
participant RuleManagerService
participant DB
participant CoreService
participant DaprPubsub

HttpClient->RuleManagerService:添加设备到数据路由
RuleManagerService->CoreService:调用Core创建订阅
RuleManagerService<-CoreService:调用Core创建订阅响应
RuleManagerService->DB:订阅信息持久化
HttpClient<-RuleManagerService:添加设备到数据路由响应


CoreService->DaprPubsub:Core发布消息到pubsub
== 重复 ==
CoreService->DaprPubsub:Core发布消息到pubsub
@enduml
```
4. 从某个数据路由中删除设备
```plantuml
@startuml
header deleteDeviceFromRule

actor HttpClient
participant RuleManagerService
participant DB

HttpClient->RuleManagerService:从数据路由中删除设备
RuleManagerService->CoreService:调用Core取消订阅
RuleManagerService<-CoreService:调用Core取消订阅响应
RuleManagerService->DB:订阅信息持久化
HttpClient<-RuleManagerService:从数据路由中删除设备响应
@enduml
```
5. 启动某个数据路由
```plantuml
@startuml
header startRule

actor HttpClient
participant RuleManagerService
participant DB
participant ETCD
participant Metadata
participant Rulex
participant DaprPubsub
participant Targets

HttpClient->RuleManagerService:启动数据路由
RuleManagerService->DB:查询路由规则
RuleManagerService->Metadata:调用Metadata
Metadata->ETCD:路由规则写入ETCD
RuleManagerService<-Metadata:调用Metadata响应
HttpClient<-RuleManagerService:启动数据路由响应
ETCD->Metadata:订阅路由规则变化
Rulex<-Metadata:订阅路由规则变化
Rulex<-DaprPubsub:消费数据
Rulex->Targets:数据经过规则处理后写入目标
@enduml
```
6. 停止某个数据路由
```plantuml
@startuml
header stopRule

actor HttpClient
participant RuleManagerService
participant DB
participant ETCD
participant Metadata
participant Rulex
participant DaprPubsub

HttpClient->RuleManagerService:停止数据路由
RuleManagerService->DB:查询路由规则
RuleManagerService->Metadata:调用Metadata
Metadata->ETCD:路由规则从ETCD删除
RuleManagerService<-Metadata:调用Metadata响应
HttpClient<-RuleManagerService:停止数据路由响应
ETCD->Metadata:订阅路由规则变化
Rulex<-Metadata:订阅路由规则变化
Rulex<-DaprPubsub:消费数据
Rulex<-Rulex:无命中路由，丢弃数据
@enduml
```