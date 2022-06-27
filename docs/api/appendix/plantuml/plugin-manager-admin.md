
### 1.1.1 插件管理

#### 1.1.1.1 创建插件源

##### 1.1.1.1.1 时序图

```plantuml
@startuml
user --> rudder : 创建插件源
rudder --> keel : 鉴权
rudder --> rudder : 校验插件源
rudder --> rudder : 拉取插件列表
rudder --> db : 更新数据库
rudder --> user : 创建成功

@enduml
```

##### 1.1.1.1.2 状态图

不涉及

##### 1.1.1.1.3 表示层设计

#### 1.1.1.2 安装插件

##### 1.1.1.2.1 时序图

```plantuml
@startuml
user --> rudder : 安装插件
rudder --> keel : 鉴权
rudder --> rudder : 下载chart包
rudder --> rudder : chart添加依赖，kustomize更新yaml
rudder --> helm : 安装应用
loop async
    rudder --> rudder : 检查是否安装完成
    rudder --> rudder : 注册插件(更新权限、菜单、路由)
end
rudder --> db : 更新数据库
rudder --> user : 安装成功

@enduml
```

##### 1.1.1.2.2 状态图

不涉及

##### 1.1.1.2.3 表示层设计

#### 1.1.1.3 卸载插件

##### 1.1.1.3.1 时序图

```plantuml
@startuml
user --> rudder : 卸载插件
rudder --> keel : 鉴权
rudder --> rudder : 检查是否有租户启用
rudder --> rudder : 注销插件(删除权限、菜单、路由)
rudder --> helm : 卸载应用
rudder --> user : 卸载成功

@enduml
```

##### 1.1.1.3.2 状态图

不涉及

##### 1.1.1.3.3 表示层设计

#### 1.1.1.4 查看插件详情

##### 1.1.1.4.1 时序图

```plantuml
@startuml
user --> rudder : 查看插件详情
rudder --> keel : 鉴权
rudder --> rudder : 检查插件是否存在
rudder --> db : 获取插件信息
rudder --> user : 插件详情

@enduml
```

##### 1.1.1.4.2 状态图

不涉及

##### 1.1.1.4.3 表示层设计

#### 1.1.1.5 查看插件启用列表

##### 1.1.1.5.1 时序图

```plantuml
@startuml
user --> rudder : 查看插件启用列表
rudder --> keel : 鉴权
rudder --> db : 获取插件列表
rudder --> rudder : 获取插件状态
rudder --> user : 插件启用列表

@enduml
```

##### 1.1.1.5.2 状态图

不涉及

##### 1.1.1.5.3 表示层设计
