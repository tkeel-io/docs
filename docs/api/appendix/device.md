1、添加设备组
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:构建设备组实体基本信息、系统信息
dev-->core:在core中创建group 类型的entity并承载设备组对象
dev-->core:根据父设备组信息构建与父设备组entity的_spacePatch mapper 实现设备组移动后动态变更
core-->dev:返回entity 信息
dev-->user:返回结果
@enduml
```
1.1 设备组对象图

```plantuml
@startuml
object basicInfo {
   name :  设备组名称
   decscription : 描述
   parentName: 父设备组名称
   parentId: 父设备组id
}
object sysField {
   _createdAt ：创建时间
   _id ：       模板id
   _owner:      用户id
   _tenantId:   租户id
   _source  ：  来源插件
   _updatedAt ：更新时间
   _spacePath:  空间路径  用于搜索和 构建空间关系树
}

map 设备组1 {
 基本信息 *-> basicInfo
 系统信息 *-> sysField
}
@enduml
```

2、 编辑设备组

```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:构建设备组实体的基本信息、系统信息的修改
dev-->core:修改coce中 设备组entity 相关信息
dev-->core:重置与父设备组entity的_spacePatch mapper 实现设备组移动后动态变更
core-->dev:返回修改后entity 信息
dev-->user:返回结果
@enduml
```

3、删除设备组
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:判断设备组中是否存在设备，存在直接返回
dev-->core:根据设备组ID 删除coce中 设备组entity
core-->dev:返回信息
dev-->user:返回结果
@enduml
```

4、获取设备组空间关系树
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev: 构建获取所有group类型的entity 搜索条件
dev-->core:搜索获取group 列表
core-->dev:返回搜索结果entity列表
dev-->dev:遍历entity列表根据_spacePatch字段 构建空间关系树结构
dev-->user:返回空间关系树结果
@enduml
```
5、 添加设备
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:构建设备实体基本信息、系统信息
dev-->core:在core中创建device 类型的entity并承载设备组对象
core->core: 如果有引用模板则将模板entity中configs 部分  拷贝至设备entity configs 
dev-->core:设备组为空则创建默认设备组
dev-->core:根据设备组信息构建与设备组entity的_spacePatch mapper 实现设备组移动后动态变更 和关联
core-->dev:返回entity 信息
dev-->user:返回结果
@enduml
```
1.1 设备对象图

```plantuml
@startuml
object basicInfo {
    name:  设备名,
    description: 描述
    parentId:  归属设备组ID
    parnetName: 设备组名称
    directConnection: 是否为直连
    templateId: 引用模板ID
    templateId: 模板名称
    selfLearn: 自学习
    ext: {}  扩展信息
    extBusiness:{} 扩展业务
    
}
object sysField {
   _createdAt ：创建时间
   _id ：       设备id
   _owner:      用户id
   —tenantId：  租户id
   _source  ：  来源插件
   _updatedAt ：更新时间
   _spacePath:  空间路径  用于搜索和 归属设备组
   _enable : 禁用Or 启用 暂未使用
   _status:预留
   _subscribeAddr:订阅地址
   _token: 用于连接认证

}

map 设备1 {
 基本信息 *-> basicInfo
 系统信息 *-> sysField
}
@enduml
```

6、删除设备
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 删除core中 相关entity
core-->dev:返回信息
dev-->user:返回结果
@enduml
```

7、修改设备信息
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:构建设备实体修改基本信息、系统信息
dev-->core:根据设备ID 修改core中相关entity 信息
dev-->core:重置与设备组entity的_spacePatch mapper 实现设备组归属移动后动态变更 和关联
core-->dev:返回entity 信息
dev-->user:返回结果
@enduml
```

8、获取设备列表
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:构建earch 设备的条件 （type= device and  设备组id等关键字）
dev-->core:根据条件获取设备列表
core-->dev:返回满足条件的设备列表
dev-->user:返回结果
@enduml
```

9、获取设备所有详情
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity
core-->dev:返回entity信息
dev-->user:返回结果
@enduml
```

9.1 设备详情对象图

```plantuml
@startuml
object basicInfo {
    name:  设备名,
    description: 描述
    parentId:  归属设备组ID
    parnetName: 设备组名称
    directConnection: 是否为直连
    templateId: 引用模板ID
    templateId: 模板名称
    selfLearn: 自学习
    ext: {}  扩展信息
    extBusiness:{} 扩展业务
    
}
object sysField {
   _createdAt ：创建时间
   _id ：       设备id
   _owner:      用户id
   —tenantId：  租户id
   _source  ：  来源插件
   _updatedAt ：更新时间
   _spacePath:  空间路径  用于搜索和 归属设备组
   _enable : 禁用Or 启用 暂未使用
   _status:预留
   _subscribeAddr:订阅地址
   _token: 用于连接认证

}
object connectInfo {
    _clientId: mqtt 用户id
    _online: 在线 、离线（连接状态）               
    _owner: 所有者
    _peerHost: 用户ip
    _protocol: 协议类型
    _sockPort: 端口
    _timestamp: 连接时间
    _userName: 设备id 
}
object rawData {
    id : 设备id
    mark: upstream 上行;downstream 下行;connecting 连接
    path: topic
    ts: 时间戳
    type: 数据分类 ：属性attribute   遥测telemetry
    values: 数据的basic64 转码
}
object attributes{
    id :value  kv结构的数据
}
object telemetry{
    id: {
        ts：时间戳
        value:值
    }     带时间戳的数据结构
}
object commands {
    input: 输入参数内容
    output：返回结果
}
object configs {
    define: 拷贝于引用模板configs 内容
}
map 设备1 {
 基本信息 *-> basicInfo
 系统信息 *-> sysField
 连接信息 *->connectInfo
 原始数据 *->rawData
 属性数据 *->attributes
 遥测数据 *->telemetry
 命令数据 *->commands
 模板定义信息 *->configs
}
@enduml
```

10、获取设备基本信息
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity basciInfo 字段内容
core-->dev:返回entity信息
dev-->user:返回结果
@enduml
```
11、 获取设备系统信息
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity sysField 字段内容
core-->dev:返回entity信息
dev-->user:返回结果
@enduml
```
12、获取设备连接信息
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity connectInfo 字段内容
core-->dev:返回entity信息
dev-->user:返回结果
user-->core: 也可通过订阅途径获取动态变更
@enduml
```

13、 获取设备原始数据
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity rawData 字段内容
core-->dev:返回entity信息
dev-->user:返回结果
user-->core: 也可通过订阅途径获取动态变更
@enduml
```
14、获取设备属性数据
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity attributes 字段内容
core-->dev:返回entity信息
dev-->user:返回结果
user-->core: 也可通过订阅途径获取动态变更
@enduml
```

15、获取设备遥测数据
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity telemetry 字段内容
core-->dev:返回entity信息
dev-->user:返回结果
user-->core: 也可通过订阅途径获取动态变更
@enduml
```
16、调用设备原始数据反控

```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
participant "iothub plugin" as hub
participant "emq plugin" as emq 
participant "物理设备or网关" as pdev 
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity 并patch replace rawDown 字段、
dev->user: 返回
hub->core: 创建订阅实体订阅设备变更
core-->hub:推送变更数据
pdev->hub: 订阅下行topic
hub->emq:推送变更数据
emq->pdev:获取数据
pdev->pdev:控制或操作设备
@enduml
```

17、调用设备属性反控  或设置属性值

```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
participant "iothub plugin" as hub
participant "emq plugin" as emq 
participant "物理设备or网关" as pdev 
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity 并根据属性id patch replace attribute内id相关字段
dev->user:返回
hub->core: 创建订阅实体订阅设备变更
core-->hub:推送需要下行的变更数据
pdev->hub: 订阅下行topic
hub->emq:推送变更数据
emq->pdev:获取数据
pdev->pdev:控制或操作设备
@enduml
```
18、调用命令

```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
participant "iothub plugin" as hub
participant "emq plugin" as emq 
participant "物理设备or网关" as pdev 
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id 获取设备entity 并patch replace commands 内相关id 中input 字段
dev->user: 返回
hub->core: 创建订阅实体订阅设备变更
core-->hub:推送变更数据
pdev->hub: 订阅下行topic
hub->emq:推送变更数据
emq->pdev:获取数据
pdev->pdev:控制或操作设备
pdev->emq:操作结果返回 如果有
hub->emq:获取结果
hub->core: 根据设备id 获取设备entity 并patch replace commands 内相关id 中output 字段
user-->core:也可通过订阅途径获取动态数据

@enduml
```
19 、创建设备映射关系
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:根据信息构建数据映射expression
dev-->core:根据expression  在core中创建两个 entity  与 entity 之间的数据映射关系
core-->dev:返回信息
dev-->user:返回结果
@enduml
```
19.1 对象图
```plantuml
@startuml
object expression {
    path: 当前设备需要映射的数据字段id
    expression: 映射对端设备id + 类型（属性or 遥测）+ 数据字段id
    decscription：说明
    name: 表达式名称
}
@enduml
```

20 、修改设备数据映射关系
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:根据修改信息构建新的数据映射expression
dev-->core:根据expression  replace 在core中创建两个 entity  与 entity 之间的数据映射关系
core-->dev:返回信息
dev-->user:返回结果
@enduml
```
21、 删除设备数据映射关系
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev->dev:根据信息构建数据映射expression 
dev-->core:根据expression remove  在core中创建两个 entity  与 entity 之间的数据映射关系
core-->dev:返回信息
dev-->user:返回结果
@enduml
```
22、 获取设备数据映射关系
```plantuml
@startuml
actor "user" as user
participant "APIServer(Keel)"  as keel
participant "设备管理 plugin"  as dev
participant "rudder plugin"  as rdr
participant "core plugin"  as core
autonumber
user->keel:发起请求
keel->keel:参数校验
keel->dev:调用设备管理服务
dev->rdr:user token校验解析
rdr->rdr:安全校验并根据用户token 解析出租户id、用户id
rdr ->dev:返回校验及解析结果
dev-->core:根据设备id  获取此设备的所有数据映射关系expression列表
core-->dev:返回信息
dev-->user:返回结果
@enduml
```

23、 设备数据上行时序图
```plantuml
@startuml
participant "设备"  as gw
participant "emq"  as emq
participant "iothub plugin"  as iothub
participant "security plugin"  as sec
participant "core plugin"  as core
participant "后端设备管理 plugin"  as bdev 
participant "前端设备管理 plugin"  as fdev
participant "第三方应用 plugin"  as tp
autonumber

fdev->bdev: 定义数字化设备
bdev->core: 创建承载数字化设备实体
bdev-->sec: 申请设备token
sec-->bdev: 颁发设备token
bdev->fdev: 返回数字化设备信息（id、token等）
gw->emq: 连接、携带在平台注册设备颁发的token
emq->iothub: iothub hook 数据包
iothub->sec: 鉴权
sec->iothub: 成功 or  失败
iothub->emq: 成功or 失败
emq->gw: 成功or 失败
gw->emq: 推送自定义、属性、遥测数据
emq->iothub: iothub hook 数据包
iothub->core: 推送数据到core 
core<->core: 承载连接信息
core<->core: 承载原始数据
core<->core: 解析属性数据
core<->core: 解析遥测数据
fdev->bdev: 查询or订阅 设备基础信息、系统信息、连接信息、原始数据、属性数据、遥测数据等各维度数据
bdev->fdev: 返回数字化设备实体各维度数据
tp-->bdev: 查询or订阅 设备基础信息、系统信息、连接信息、原始数据、属性数据、遥测数据等各维度数据
bdev-->tp:22、返回数字化设备实体各维度数据
@enduml
```