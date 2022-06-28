### 1.2.4 计量统计

#### 1.2.4.1 查看用户空间用量
##### 1.2.4.1.1 时序图
```plantuml
@startuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: 发起请求
keel->tkeelMmonitor: 参数校验
tkeelMmonitor<->prometheus: 用量数据查询
tkeelMmonitor-->keel: 返回空间用量数据
keel-->user: 返回结果
@enduml
```
#### 1.2.4.2 查看用户空间消息数据统计
##### 1.2.4.1.1 时序图
```plantuml
@startuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: 发起请求
keel->tkeelMmonitor: 参数校验
tkeelMmonitor<->prometheus: 查询消息数据
tkeelMmonitor-->keel: 返回消息数据
keel-->user: 返回结果
@enduml

```
#### 1.2.4.2 查看租户空间使用数据统计
##### 1.2.4.1.1 时序图
```plantuml
@startuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: get tenant data usage
keel->tkeelMmonitor: get tenant data usage
tkeelMmonitor->prometheus: query metrics data 
prometheus->tkeelMmonitor: response metrics data 
tkeelMmonitor-->keel: response tenant data usage
keel-->user: response tenant data usage
@enduml

```
#### 1.2.4.2 查看用户空间API调用统计
##### 1.2.4.1.1 时序图

```plantuml
@startuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: 发起请求
keel->tkeelMmonitor: 参数校验
tkeelMmonitor<->prometheus: 查询api调用统计数据
tkeelMmonitor-->keel: 返回API调用统计数据
keel-->user: 返回结果
@enduml

```