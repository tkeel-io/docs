
### 1.3.1 插件管理

#### 1.3.1.1 查看插件列表

##### 1.3.1.1.1 时序图

```plantuml
@startuml
user --> rudder : 查看插件列表
rudder --> keel : 鉴权
rudder --> db : 获取插件列表
rudder --> rudder : 获取插件状态
rudder --> user : 查看插件列表

@enduml
```

##### 1.3.1.1.2 状态图

不涉及

##### 1.3.1.1.3 表示层设计

#### 1.3.1.2 启用插件

##### 1.3.1.2.1 时序图

```plantuml
@startuml
user --> rudder : 启用插件
rudder --> keel : 鉴权
rudder --> rudder : 检查插件是否存在
rudder --> rudder : 检查插件是否启用
rudder --> rudder : 启用插件及依赖
rudder --> db : 更新数据库
rudder --> user : 启用成功

@enduml
```

##### 1.3.1.2.2 状态图

不涉及

##### 1.3.1.2.3 表示层设计

#### 1.3.1.3 停用用插件

##### 1.3.1.3.1 时序图

```plantuml
@startuml
user --> rudder : 停用插件
rudder --> keel : 鉴权
rudder --> rudder : 检查插件是否存在
rudder --> rudder : 检查插件是否启用
rudder --> rudder : 停用插件及依赖
rudder --> db : 更新数据库
rudder --> user : 停用成功

@enduml
```

##### 1.3.1.3.2 状态图

不涉及

##### 1.3.1.3.3 表示层设计

#### 1.3.1.4 查看插件详情

##### 1.3.1.4.1 时序图

```plantuml
@startuml
user --> rudder : 查看插件详情
rudder --> keel : 鉴权
rudder --> rudder : 检查插件是否存在
rudder --> db : 获取插件信息
rudder --> user : 插件详情

@enduml
```

##### 1.3.1.4.2 状态图

不涉及

##### 1.3.1.4.3 表示层设计
