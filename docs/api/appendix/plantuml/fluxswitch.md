### 1.3.4 网络服务

#### 1.3.4.1 添加代理网关

##### 1.3.4.1.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 添加代理网关
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 检查网关是否存在
fluxswitch --> db : 更新数据库
fluxswitch --> user : 添加成功

```

##### 1.3.4.1.2 状态图

不涉及

##### 1.3.4.1.3 表示层设计

#### 1.3.4.2 批量导入代理网关

##### 1.3.4.2.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 批量导入代理网关
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 解析上传的文件
fluxswitch --> fluxswitch : 创建网关和代理服务
fluxswitch --> db : 更新数据库
fluxswitch --> fluxswitch : 生成启动命令
fluxswitch --> user : 导入成功

```

##### 1.3.4.2.2 状态图

不涉及

##### 1.3.4.2.3 表示层设计

#### 1.3.4.3 启用代理网关

##### 1.3.4.3.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 启用代理网关
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查网关是否存在
fluxswitch --> db : 更新代理网关和关联的代理服务状态
fluxswitch --> user : 启用成功

```

##### 1.3.4.3.2 状态图

不涉及

##### 1.3.4.3.3 表示层设计

#### 1.3.4.4 禁用代理网关

##### 1.3.4.4.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 禁用代理网关
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查网关是否存在
fluxswitch --> db : 更新代理网关和关联的代理服务状态
fluxswitch --> user : 禁用成功

```

##### 1.3.4.4.2 状态图

不涉及

##### 1.3.4.4.3 表示层设计
<!-- ------------------------------------- -->

#### 1.3.4.5 编辑代理网关

##### 1.3.4.5.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 更新代理网关
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 检查网关是否存在
fluxswitch --> db : 更新数据库
fluxswitch --> user : 更新成功

```

##### 1.3.4.5.2 状态图

不涉及

##### 1.3.4.5.3 表示层设计

#### 1.3.4.6 删除代理网关

##### 1.3.4.6.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 删除代理网关
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 检查网关是否存在
fluxswitch --> db : 删除网关和关联代理服务
fluxswitch --> user : 删除成功

```

##### 1.3.4.6.2 状态图

不涉及

##### 1.3.4.6.3 表示层设计

#### 1.3.4.7 添加代理服务

##### 1.3.4.7.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 添加代理服务
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 代理服务是否存在
fluxswitch --> db : 添加代理服务
fluxswitch --> client : 推送配置
client --> client : 更新配置，更新隧道
fluxswitch --> user : 创建成功

```

##### 1.3.4.7.2 状态图

不涉及

##### 1.3.4.7.3 表示层设计

#### 1.3.4.8 访问代理服务

##### 1.3.4.8.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "代理网关"  as client
participant "内网目标服务"  as target

user --> fluxswitch : 访问代理服务
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> client : 反向代理
client --> target : 鉴权
target --> client : 响应
client --> fluxswitch : 响应
fluxswitch --> user : 目标服务响应内容

```

##### 1.3.4.8.2 状态图

不涉及

##### 1.3.4.8.3 表示层设计

#### 1.3.4.9 启用代理服务

##### 1.3.4.9.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 启用代理服务
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 代理服务是否存在
fluxswitch --> db : 更新代理服务状态
fluxswitch --> user : 启用成功

```

##### 1.3.4.9.2 状态图

不涉及

##### 1.3.4.9.3 表示层设计

#### 1.3.4.10 禁用代理服务

##### 1.3.4.10.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 禁用代理服务
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 代理服务是否存在
fluxswitch --> db : 更新代理服务状态
fluxswitch --> user : 禁用成功

```

##### 1.3.4.10.2 状态图

不涉及

##### 1.3.4.10.3 表示层设计

#### 1.3.4.11 编辑代理服务

##### 1.3.4.11.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 更新代理服务
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 代理服务是否存在
fluxswitch --> db : 更新代理服务
fluxswitch --> client : 推送配置
client --> client : 更新配置，更新隧道
fluxswitch --> user : 更新成功

```

##### 1.3.4.11.2 状态图

不涉及

##### 1.3.4.11.3 表示层设计

#### 1.3.4.12 删除代理服务

##### 1.3.4.12.1 时序图

```plantuml

participant "用户" as user
participant "网络服务" as fluxswitch
participant "数据库"  as db

user --> fluxswitch : 删除代理服务
fluxswitch --> fluxswitch : 鉴权
fluxswitch --> fluxswitch : 检查参数是否合法
fluxswitch --> fluxswitch : 代理服务是否存在
fluxswitch --> db : 删除代理服务
fluxswitch --> client : 推送配置
client --> client : 更新配置，更新隧道
fluxswitch --> user : 删除成功

```

##### 1.3.4.12.2 状态图

不涉及

##### 1.3.4.12.3 表示层设计
