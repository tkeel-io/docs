
### 1.3.1 插件管理

#### 1.3.1.1 查看插件列表

##### 1.3.1.1.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "rudder" as rudder
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> rudder : 调用业务层
rudder -> dblayer : 获取插件列表
dblayer <-> mysql : 读取数据库
rudder -> rudder : 获取插件状态
dblayer <-> mysql : 读取数据库
rudder -> user : 返回结果

@enduml
```

##### 1.3.1.1.2 状态图

不涉及

##### 1.3.1.1.3 表示层设计

#### 1.3.1.2 启用插件

##### 1.3.1.2.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "rudder" as rudder
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> rudder : 调用业务层
rudder -> rudder : 检查插件是否存在
rudder -> rudder : 检查插件是否启用
rudder -> rudder : 递归启用插件依赖
rudder -> keel : 调用插件enable接口
rudder -> dblayer : 启用插件
dblayer <-> mysql : 写入数据库
rudder -> dblayer : 更新插件的租户信息
dblayer <-> mysql : 写入数据库
rudder -> user : 返回结果

@enduml
```

##### 1.3.1.2.2 状态图

不涉及

##### 1.3.1.2.3 表示层设计

#### 1.3.1.3 停用用插件

##### 1.3.1.3.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "rudder" as rudder
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> rudder : 调用业务层
rudder -> rudder : 检查插件是否存在
rudder -> keel : 调用插件disable接口
rudder -> dblayer : 删除租户的插件信息
dblayer <-> mysql : 写入数据库
rudder -> dblayer : 删除插件的租户信息
dblayer <-> mysql : 写入数据库
rudder -> db : 更新数据库
rudder -> user : 返回结果
@enduml
```

##### 1.3.1.3.2 状态图

不涉及

##### 1.3.1.3.3 表示层设计

#### 1.3.1.4 查看插件详情

##### 1.3.1.4.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "rudder" as rudder
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> rudder : 调用业务层
rudder -> rudder : 检查插件是否存在
rudder -> dblayer : 获取插件信息
dblayer <-> mysql : 读取数据库
rudder -> user : 返回结果
@enduml
```

##### 1.3.1.4.2 状态图

不涉及

##### 1.3.1.4.3 表示层设计
