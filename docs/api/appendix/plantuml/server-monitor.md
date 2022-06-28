### 1.2.3 服务监控

#### 1.2.3.1 查看组件列表
##### 1.2.3.1.1 时序图
```plantuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
participant prometheus

user->keel: get server list
keel->tkeelMmonitor: get server list
tkeelMmonitor->prometheus: get workload status
prometheus->tkeelMmonitor: response workload status
tkeelMmonitor->keel: response server list
keel->user: response server list
```
#### 1.2.3.2 查看组件运行情况
##### 1.2.3.2.1 时序图

```plantuml
actor user
participant "APIServer(Keel)"  as keel
participant “监控服务(tkeel-monitor)” as tkeelMmonitor
participant prometheus

user->keel: get  server usage 
keel->tkeelMmonitor: get  server usage 
tkeelMmonitor->prometheus: get workload status
prometheus->tkeelMmonitor: response workload status
tkeelMmonitor->keel: response server usage 
keel->user: response server usage 
```