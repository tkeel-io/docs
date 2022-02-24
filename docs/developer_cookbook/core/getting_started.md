---
title: 快速入门
sidebar_position: 1
---
- [介绍](#介绍)
- [基础概念](#基础概念)
  - [实体（Entity）](#实体entity)
  - [Actor](#actor)
  - [映射](#映射)
  - [关系](#关系)
  - [模型](#模型)
  - [订阅](#订阅)
- [启动服务](#启动服务)
    - [Self-hosted](#self-hosted)
    - [Kubernetes](#kubernetes)
    - [Core 作为 tKeel 的一个组件运行](#core-作为-tkeel-的一个组件运行)
- [使用 core 的 APIs](#使用-core-的-apis)
  - [第 1 步： 创建实体](#第-1-步-创建实体)
  - [第 2 步： 编辑实体](#第-2-步-编辑实体)
  - [第 3 步： 查询实体](#第-3-步-查询实体)
  - [第 4 步： Patch 实体属性](#第-4-步-patch-实体属性)
  - [第 5 步： 配置实体属性配置信息](#第-5-步-配置实体属性配置信息)
  - [第 6 步： 搜索实体](#第-6-步-搜索实体)
  - [第 7 步： 为实体创建映射](#第-7-步-为实体创建映射)
  - [第 8 步： 通过 pubsub 向实体发送消息](#第-8-步-通过-pubsub-向实体发送消息)
  - [第 9 步： 创建订阅，订阅实体数据](#第-9-步-创建订阅订阅实体数据)
  - [第 10 步： 删除订阅](#第-10-步-删除订阅)
  - [第 11 步： 删除映射](#第-11-步-删除映射)
  - [第 12 步： 删除实体](#第-12-步-删除实体)

> 此文档仅供用户快速上手，认识 core。

## 介绍
Core 是 tKeel 物联网平台的数据中心，高性能、可拓展的轻量级下一代数字化数据引擎。Core 可以独立运行，也可以作为tkeel的一个核心组件运行。  
以 实体（entity） 为操作单元，通过简易明了的 API 对外提供读写能力（属性读写、时序查询、订阅，映射等）。

## 基础概念
### 实体（Entity）
实体是我们在物联网世界中对 Things 的一种抽象，是 Core 操作的基础对象。包括智能灯、空调、网关，房间，楼层，甚至是通过数据聚合生成的虚拟设备等等，我们将这些 `Things` 进行抽象，
定义为实体。

*属性* 是对某种实体一部分信息的描述。一个实体包含两类属性：
1. **基础属性**: 每个实体都必备的属性，如 `id`，`owner`等用于标识实体共有特征的属性。
2. **扩展属性**: 实体除基础属性外的属性，这种属性属于某一类或某一个实体的特征描述，比如一个 **温度计** 的温度。

更多设计细节请阅读 [实体文档](./specs/entity.md)

### Actor
[Actor](./specs/actor.md) 是实体（Entity）的运行时的一种模式抽象, 用于维护实体的实时状态以及提供实体的一些具体行为。

### 映射
[映射](./specs/mapper.md) 是实体属性传播的抽象，可以实现数据的向上传递以及控制命令的向下传递。
<div align="center">

![img.png](/images/core/message_passing1207.png)

<i>映射模拟</i>
</div>

上图中红色线条代表数据的上行，如设备数据上报；黑色代表数据的下行，如指令数据的下行。



映射操作的执行包含两步:

1. 写复制: 实现实体属性变更时，将变更向下游实体传递。
2. 计算更新: 对上游实体产生的变更组合计算，然后将计算结果更新到当前实体。


<div align="center">

![img.png](/images/core/mapping1207.png)
</div>


### 关系

在物理世界中，实体与实体之间往往不是相互孤立的，它们之间往往存在各式各样的联系，如交换机，路由器，终端设备，服务器通过光纤连接，在网络拓扑图中这些设备实体有`连接关系`。这些关系将这些独立的设备实体链接在一起，组成复杂而精密的网络，向外提供稳定而高速的网络通信服务。当然实体不局限于设备实体，关系也不仅仅局限于 `连接关系`，[更多设计细节请阅读关系文档](./specs/relationship.md)。

### 模型

我们将实体属性的约束集合定义为模型。实体是属性数据的载体，但是如何解析和使用实体的属性数据，我们需要实体属性的描述信息，如类型，取值范围等，我们将这些描述信息称之为 `约束`。而模型就是一个包含`约束`集合的载体，模型也以实体的形式存在， [更多设计细节请阅读模型文档](./specs/model.md) 。

### 订阅
Core 提供了简捷方便的[订阅](./specs/subscription.md) ，供开发者实时获取自己关心的数据。

在 tKeel 平台中用于多个 plugin 之间和一个 plugin 内所有以实体为操作对象的数据交换。

底层实现逻辑是这样的：每个 plugin 在注册的时候在 Core 内部自动创建一个交互的 `pubsub`，名称统一为 pluginID-pubsub,
订阅的 `topic` 统一为 pub-core，sub-core，只有 core 与该 plugin 有相关权限
比如
iothub: iothub-pubsub

**订阅** 分为三种：
- **实时订阅**： 订阅会把实体的实时数据发送给订阅者。
- **变更订阅**： 订阅者订阅的实体属性发生变更且满足变更条件时，订阅将实体属性数据发送给订阅者。
- **周期订阅**： 订阅周期性的将实体属性数据发送给订阅者。




## 启动服务

> ⚠️ core 依赖于 dapr 启动， 所以我们应该先安装dapr。

#### Self-hosted
> ⚠️ 注意：请本地先运行一个 redis 进程，监听 6379 端口，无密码。  
> ⚠️ 注意：请本地先运行一个 elasticsearch 进程，监听 9200 端口。


拉取仓库
```bash 
git clone  https://github.com/tkeel-io/core.git
cd core
```

```bash
dapr run --app-id core --app-protocol http --app-port 6789 --dapr-http-port 3500 --log-level debug  --components-path ./examples/configs/core  go run cmd/core/main.go
```

在 core 启动后，core 通过 sidecar 代理的 http 端口（默认3500）向外提供服务。
```bash
tomas@trace:~/projects/qingcloud/paas/tkeel/core$ dapr run --app-id core --app-protocol http --app-port 6789 --dapr-http-port 3500 --dapr-grpc-port 50001 --log-level debug  --components-path ./examples/configs/core  go run cmd/core/main.go 
ℹ️  Starting Dapr with id core. HTTP Port: 3500. gRPC Port: 50001
INFO[0000] starting Dapr Runtime -- version 1.2.2 -- commit 8aabc2c  app_id=core instance=trace scope=dapr.runtime type=log ver=1.2.2
...
== APP == time="2021-12-01T15:03:57.99399354+08:00" level=info msg="Elasticsearch returned with code<200>, version<7.14.2>\n" dapr_ver=unknown instance=trace scope=core.search.es type=log
== APP == dapr client initializing for: 127.0.0.1:50001
INFO[0004] dapr initialized. Status: Running. Init Elapsed 4356.403146ms  app_id=core instance=trace scope=dapr.runtime type=log ver=1.2.2
DEBU[0004] established connection to placement service at dns:///localhost:50005  app_id=core instance=trace scope=dapr.runtime.actor.internal.placement type=log ver=1.2.2
...
```


#### Kubernetes
1. 部署 reids 服务
    ```bash
    helm install redis bitnami/redis
    ```
2. 部署 elasticsearch 服务
    ```bash
    helm install elasticsearch elastic/elasticsearch
    ```
3. 运行 core 程序
    ```bash
    kubectl apply -f k8s/core.yaml
    ```

#### Core 作为 tKeel 的一个组件运行

  参见 [tKeel 新手引导 ](../../getting_started/guide.md)

## 使用 core 的 APIs

- 我们可以直接通过http请求使用core的API。
- self-hosted 模式下也可以通过 dapr invoke 命令执行。
- Kubernetes​ 和 tKeel模式下可以通过 keel invoke 命令执行，参数一致。


### 第 1 步： 创建实体

**首先我们通过 API 创建一个实体：**
```bash 
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device123" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{
      "status": "start",
      "temp": 2344,
      "object": {
          "field1": "value1",
          "field2": 123,
          "field3": {
              "ffff": "vvv"
          },
          "field4": [
              {
                  "age":21,
                  "name": "tom"
              },
              {
                  "age":22,
                  "name": "tomas"
              }
          ]
      }
    }'
```


**通过指定`from`参数创建实体：**
```bash
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device234&from=device123" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{
      "mem_size": "10Gib"
    }'
```


**通过 invoke 调用：**
```bash
$tkeel invoke --plugin-id core --method "v1/entities?id=device123&source=dm&owner=admin&type=DEVICE" -v POST -d '{"status":"start", "temp":234}'
{"id":"device123","source":"dm","owner":"admin","type":"DEVICE","configs":{},"properties":{"status":"start","temp":234}}
✅  Plugin invoked successfully
```




### 第 2 步： 编辑实体

现在我们尝试使用 core 的 API 将实体的温度(`temp`) 字段更新为123，状态(`status`)更新为testing：

```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
       "status": "testing",
       "temp":123
     }'
```


**通过 invoke 调用：**
```bash
$tkeel invoke --plugin-id core --method "v1/entities/device123?source=dm&owner=admin&type=DEVICE" -v PUT -d '{"status":"testing", "temp":123}'
{"id":"device123","source":"dm","owner":"admin","type":"DEVICE","configs":{},"properties":{"status":"testing","temp":123}}
✅  Plugin invoked successfully
```

### 第 3 步： 查询实体

查看我们创建的实体，核对前面操作的变化：

```bash
curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin"  \
  -H "Type: DEVICE"
```

**API response:**

```json
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {},
    "properties": {
        "status": "testing",
        "temp": 123
    }
}
```
**通过 invoke 调用：**
```bash
tkeel invoke --plugin-id core --method "v1/entities/device123?source=dm&owner=admin&type=DEVICE" -v GET
{"id":"device123","source":"dm","owner":"admin","type":"DEVICE","configs":{},"properties":{"status":"testing","temp":123}}
✅  Plugin invoked successfully
```

### 3.2 步： 通过指定实体属性来查询实体属性


```bash
# 指定属性ID，查询实体属性.
curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/properties?pids=temp,object.field1" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" 
```



### 第 4 步： Patch 实体属性

core 为我们提供强大 `json patch` 操作， 允许我们灵活的更新实体属性：

```bash
curl -X PATCH "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '[
    {
      "path": "temp",
      "operator": "replace",
      "value": 20
    }
  ]'

# 如果不支持 PATCH方法，代替：
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/patch" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '[
    {
      "path": "temp",
      "operator": "replace",
      "value": 20
    }
  ]'
```

通过 invoke 调用
```bash
$tkeel invoke --plugin-id core --method "v1/entities/device123?source=dm&owner=admin&type=DEVICE" -v PATCH -d '[{"path":"temp", "operator":"replace", "value":20}]'
{"id":"device123","source":"dm","owner":"admin","type":"DEVICE","configs":{},"properties":{"status":"testing","temp":20}}
✅  Plugin invoked successfully
```

### 第 5 步： 配置实体属性配置信息

core 中的实体属性（property）是可以被配置的，配置信息作用于对实体属性的解析和使用：


```bash
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
            "id": "temp",
            "type": "int",
            "define": {
                "unit": "°",
                "max": 500,
                "min": 10
            },
            "enabled": true,
            "enabled_search": true
          }
    ]'
```



**给实体增添属性配置：**
```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
            "id": "temp2",
            "type": "int",
            "define": {
                "unit": "°",
                "max": 500,
                "min": 10
            },
            "enabled": true,
            "enabled_search": true
          }
    ]'
```

**指定属性id获取实体属性配置：**
```bash
curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm&property_ids=temp2" -H "Content-Type: application/json" 
```


**指定属性id删除实体属性配置：**
```bash
curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm&property_ids=temp" \
  -H "Content-Type: application/json" 
```







**通过 invoke 调用：**
```bash
$tkeel invoke --plugin-id core --method "v1/entities/device123/configs" -v PUT -d '[{"id":"temp","type":"int","define":{"unit":"°","max":500,"min":10},"enabled":true,"enabled_search":true}]'
{"id":"device123","source":"dm","owner":"admin","type":"DEVICE","configs":{"temp":{"define":{"max":500,"min":10,"unit":"°"},"description":"","enabled":true,"enabled_search":true,"enabled_time_series":false,"id":"temp","last_time":0,"type":"int","weight":0}},"properties":{"status":"testing","temp":20}}
✅  Plugin invoked successfully
```

上面的 API 调用对设备实体（device123）的 `temp` 属性进行了配置， `type` 表示 temp 被解释为 `int` 类型， `define` 中定义了 temp 属性的约束信息，其单位 `unit` 为"°"，最大值 `max` 为500，最小值 `min` 为10。`enabled` 标识 属性 temp 是否被启用， `enabled_search` 标识属性是否被持久化到搜索引擎，[更多详细资料请查看](specs/model.md)。


### 第 6 步： 搜索实体

core 通过配置搜索为用户提供强大的索引能力：

```bash
curl -XPOST http://localhost:3500/v1.0/invoke/core/method/v1/entities/search \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
        "query": "device"
  }'
```

通过 invoke 调用
```bash
$tkeel invoke --plugin-id core --method "v1/entities/search?source=dm&owner=admin&type=DEVICE" -v POST -d '{"query": "testing"}'
{"total":1,"limit":10,"items":[{"id":"device123","plugin":"dm","properties":{"id":"device123","last_time":1638500632053,"owner":"admin","source":"dm","status":"testing","temp":"20","type":"DEVICE","version":3}}]}
✅  Plugin invoked successfully
```

### 第 7 步： 为实体创建映射

core 对于实体的设计和抽象，绝不止步于 get/set， core通过 映射（mapper） 为用户提供强大而灵活的数据转换和映射，通过内置实现更加轻量级的数据流转：

1. **创建设备实体 device234：**


```bash
  curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device234" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Source: dm" \
  -H "Content-Type: application/json" \
  -d '{
      "status": "start",
      "temp": 111
    }'
```

通过 invoke 调用
```bash
$tkeel invoke --plugin-id core --method "v1/entities?id=device234&source=dm&owner=admin&type=DEVICE" -v POST -d '{"status":"start", "temp":111}'
{"id":"device234","source":"dm","owner":"admin","type":"DEVICE","configs":{},"properties":{"status":"start","temp":111}}
✅  Plugin invoked successfully
```

2. **为实体 device123 创建映射：**


```bash
  curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/mappers" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "m-sync-dev234",
      "tql": "insert into device123 select device234.temp1 + device234.temp2 as temp"
    }'
```

通过 invoke 调用
```bash
tkeel invoke --plugin-id core --method "v1/entities/device234/mappers?source=dm&owner=admin&type=DEVICE" -v POST -d '{"name":"m-sync-dev234","tql":"insert into device123 select device234.temp as temp"}'
{"id":"device234","source":"dm","owner":"admin","type":"DEVICE","configs":{},"properties":{"status":"start","temp":111}}
✅  Plugin invoked successfully
```

mapper 的描述信息由两部分数据组成： `name` 是映射的名称，[tql](specs/tql.md) 是映射的规则信息， `insert into device123 select device234.temp as temp` 是一条将 device234 的 temp 属性变更 同步到 device123 的 temp 属的规则。在规则生效后，我们可以通过想 device234 推送数据，查看 device123 的 temp 是否变化来校验规则是否生效。

### 第 8 步： 通过 pubsub 向实体发送消息

core 为上层应用提供两个不同场景的接口：[控制平面接口](specs/interfaces.md)，[数据平面接口](specs/interfaces.md)。控制平面的接口着眼于解决上层应用纷繁复杂的接口需求，而数据空面接口力在解决高频，大吞吐量场景下的性能问题。

```bash
curl -X POST http://localhost:3500/v1.0/publish/core-pubsub/core-pub \
  -H "Content-Type: application/json" \
  -d '{
       "id": "device234",
       "owner": "admin",
       "source": "dm",
       "data": {
           "temp": 234,
           "temp1": "'devi123'",
           "temp2": "'111'"
        }
     }'
```



### 第 9 步： 创建订阅，订阅实体数据

不同的业务场景对 订阅（[subscription](specs/subscription.md)） 的需求粒度不尽相同，core 为使用者提供内置的，高性能的，多模式的订阅功能：

```bash
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/subscriptions?id=sub123" \
    -H "Source: dm" \
    -H "Owner: admin" \
    -H "Type: SUBSCRIPTION" \
    -H "Content-Type: application/json" \
    -d '{ 
            "mode": "realtime",
            "filter":"insert into sub123 select device123.*",
            "topic": "sub123",
            "pubsub_name": "core-pubsub"
        }'
```

### 第 10 步： 删除订阅

```bash
curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/subscriptions/sub123" \
    -H "Source: dm" \
    -H "Owner: admin" \
    -H "Type: SUBSCRIPTION" \
    -H "Content-Type: application/json" 
```


### 第 11 步： 删除映射 

```bash
curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/test123/mappers/m-sync-dev234" \
  -H "Source: dm"   \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json"
```



### 第 12 步： 删除实体

```bash
curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" 
```

