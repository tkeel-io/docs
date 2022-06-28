### 1.3.4 网络服务

#### 1.3.4.1 添加代理网关

##### 1.3.4.1.1 时序图

```plantuml
@startuml

participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql


user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch: 检查是否存在
fluxswitch -> fluxswitch: 创建代理网关，生成token
fluxswitch -> dblayer : 调用DB层
dblayer -> mysql : 写入数据库
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.1.2 状态图

不涉及

##### 1.3.4.1.3 表示层设计

#### 1.3.4.2 批量导入代理网关

##### 1.3.4.2.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql


user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 解析上传的文件
fluxswitch -> fluxswitch : 创建网关和关联的代理服务
fluxswitch -> dblayer : 调用DB层
dblayer -> mysql : 写入数据库
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.2.2 状态图

不涉及

##### 1.3.4.2.3 表示层设计

#### 1.3.4.3 启用代理网关

##### 1.3.4.3.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql


user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 检查网关是否存在
fluxswitch -> dblayer : 更新代理网关和关联的代理服务状态
dblayer -> mysql : 写入数据库
fluxswitch -> user : 返回结果

@enduml
```

##### 1.3.4.3.2 状态图

不涉及

##### 1.3.4.3.3 表示层设计

#### 1.3.4.4 禁用代理网关

##### 1.3.4.4.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 检查网关是否存在
fluxswitch -> dblayer : 更新代理网关和关联的代理服务状态
dblayer --> mysql : 写入数据库
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.4.2 状态图

不涉及

##### 1.3.4.4.3 表示层设计

#### 1.3.4.5 编辑代理网关

##### 1.3.4.5.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 检查网关是否存在
fluxswitch -> dblayer : 更新网关信息
dblayer -> mysql : 写入数据库
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.5.2 状态图

不涉及

##### 1.3.4.5.3 表示层设计

#### 1.3.4.6 删除代理网关

##### 1.3.4.6.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 检查网关是否存在
fluxswitch -> dblayer : 删除网关和关联代理服务
dblayer -> mysql : 更新数据库
fluxswitch -> client : 推送配置
client -> client : 断开连接
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.6.2 状态图

不涉及

##### 1.3.4.6.3 表示层设计

#### 1.3.4.7 添加代理服务

##### 1.3.4.7.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 代理服务是否存在
fluxswitch -> dblayer : 添加代理服务,生成token
dblayer --> mysql : 写入数据库
fluxswitch -> client : 推送配置
client -> client : 更新配置，更新隧道
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.7.2 状态图

不涉及

##### 1.3.4.7.3 表示层设计

#### 1.3.4.8 访问代理服务

##### 1.3.4.8.1 时序图

```plantuml
@startuml
participant "user" as user
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql


user -> fluxswitch : 访问代理服务
fluxswitch -> dblayer : 鉴权
dblayer <-> mysql : 查询数据库
fluxswitch -> client : 反向代理
client -> target : 连接目标服务
target -> client : 响应
client -> fluxswitch : 响应
fluxswitch -> user : 返回响应
@enduml
```

##### 1.3.4.8.2 状态图

不涉及

##### 1.3.4.8.3 表示层设计

#### 1.3.4.9 启用代理服务

##### 1.3.4.9.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql


user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 代理服务是否存在
fluxswitch -> dblayer : 更新代理服务状态
dblayer -> mysql : 写入数据库
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.9.2 状态图

不涉及

##### 1.3.4.9.3 表示层设计

#### 1.3.4.10 禁用代理服务

##### 1.3.4.10.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 代理服务是否存在
fluxswitch -> dblayer : 更新代理服务状态
dblayer -> mysql : 写入数据库
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.10.2 状态图

不涉及

##### 1.3.4.10.3 表示层设计

#### 1.3.4.11 编辑代理服务

##### 1.3.4.11.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 代理服务是否存在
fluxswitch -> dblayer : 更新代理服务
dblayer -> mysql : 写入数据库
fluxswitch -> client : 推送配置
client -> client : 更新配置，更新隧道
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.11.2 状态图

不涉及

##### 1.3.4.11.3 表示层设计

#### 1.3.4.12 删除代理服务

##### 1.3.4.12.1 时序图

```plantuml
@startuml
participant "user" as user
participant "ApiServer(keel)" as keel
participant "fluxswitch" as fluxswitch
participant "持久层" as dblayer
participant "mysql" as mysql

user -> keel : 发起请求
keel -> keel : 参数校验 
keel -> fluxswitch : 调用业务层
fluxswitch -> fluxswitch : 代理服务是否存在
fluxswitch -> dblayer : 删除代理服务
dblayer -> mysql : 写入数据库
fluxswitch -> client : 推送配置
client -> client : 更新配置，更新隧道
fluxswitch -> user : 返回结果
@enduml
```

##### 1.3.4.12.2 状态图

不涉及

##### 1.3.4.12.3 表示层设计
