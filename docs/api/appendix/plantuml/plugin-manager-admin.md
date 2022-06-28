
### 1.1.1 插件管理

#### 1.1.1.1 创建插件源

##### 1.1.1.1.1 时序图

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
rudder -> rudder : 校验插件源
rudder -> rudder : 拉取插件列表
rudder -> dblayer : 更新数据库
rudder -> user : 返回结果

@enduml
```

##### 1.1.1.1.2 状态图

不涉及

##### 1.1.1.1.3 表示层设计

#### 1.1.1.2 安装插件

##### 1.1.1.2.1 时序图

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
rudder -> rudder : 获取chart包
rudder -> rudder : 更新插件ID
rudder -> rudder : 注入依赖
rudder -> helm : 安装应用
rudder -> dblayer : 创建插件信息
dblayer --> mysql : 写入数据库
rudder -> dblayer : 为_tKeel_system启用插件
dblayer --> mysql : 写入数据库
loop async
    rudder -> rudder : 检查是否安装完成
    rudder -> rudder : 注册插件(更新权限、菜单、路由)
end
rudder -> dblayer : 更新数据库
dblayer --> mysql : 写入数据库
rudder -> user : 返回结果

@enduml
```

##### 1.1.1.2.2 状态图

不涉及

##### 1.1.1.2.3 表示层设计

#### 1.1.1.3 卸载插件

##### 1.1.1.3.1 时序图

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
rudder -> rudder : 检查插件是否安装
rudder -> rudder : 检查插件路由是否存在
rudder -> rudder : 检查插件扩展点是否被实现
rudder -> rudder : 检查是否有租户启用插件
rudder -> rudder : 注销插件实现的扩展点
rudder -> dblayer : 删除插件
dblayer <-> mysql : 写入数据库
rudder -> dblayer : 删除插件路由
dblayer <-> mysql : 写入数据库
rudder -> dblayer : 为_tKeel_system禁用插件
dblayer <-> mysql : 写入数据库
rudder -> dblayer : 删除权限
dblayer <-> mysql : 写入数据库
rudder -> helm : 卸载插件
rudder -> user : 返回结果
@enduml
```

##### 1.1.1.3.2 状态图

不涉及

##### 1.1.1.3.3 表示层设计

#### 1.1.1.4 查看插件详情

##### 1.1.1.4.1 时序图

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
rudder -> dblayer : 获取插件路由
dblayer <-> mysql : 读取数据库
rudder -> user : 返回结果

@enduml
```

##### 1.1.1.4.2 状态图

不涉及

##### 1.1.1.4.3 表示层设计

#### 1.1.1.5 查看插件启用列表

##### 1.1.1.5.1 时序图

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
rudder -> dblayer : 获取插件的租户列表
dblayer <-> mysql : 读取数据库
rudder -> user : 返回结果

@enduml
```

##### 1.1.1.5.2 状态图

不涉及

##### 1.1.1.5.3 表示层设计
