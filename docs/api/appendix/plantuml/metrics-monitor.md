### 1.2.4 计量统计

#### 1.2.4.1 查看用户空间用量
##### 1.2.4.1.1 时序图
```plantuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: get tenant usage overview
keel->tkeelMmonitor: get tenant usage overview
tkeelMmonitor->prometheus: query metrics data 
prometheus->tkeelMmonitor: response metrics data 
tkeelMmonitor->keel: response tenant usage overview
keel->user: response tenant usage overview
```
#### 1.2.4.2 查看用户空间消息数据统计
##### 1.2.4.1.1 时序图
```plantuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: get tenant massage usage
keel->tkeelMmonitor: get tenant massage usage
tkeelMmonitor->prometheus: query metrics data 
prometheus->tkeelMmonitor: response metrics data 
tkeelMmonitor->keel: response tenant massage usage
keel->user: response tenant massage usage
```
#### 1.2.4.2 查看租户空间使用数据统计
##### 1.2.4.1.1 时序图
```plantuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: get tenant data usage
keel->tkeelMmonitor: get tenant data usage
tkeelMmonitor->prometheus: query metrics data 
prometheus->tkeelMmonitor: response metrics data 
tkeelMmonitor->keel: response tenant data usage
keel->user: response tenant data usage
```
#### 1.2.4.2 查看用户空间API调用统计
##### 1.2.4.1.1 时序图

```plantuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
database prometheus

user->keel: get tenant data usage
keel->tkeelMmonitor: get tenant data usage
tkeelMmonitor->prometheus: query metrics data 
prometheus->tkeelMmonitor: response metrics data 
tkeelMmonitor->keel: response tenant data usage
keel->user: response tenant data usage
```