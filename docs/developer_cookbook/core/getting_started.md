---
title: 快速入门
sidebar_position: 1
---
# 快速入门

> 此文档仅供用户快速上手，认识 core。

## 介绍
Core 是 tKeel 物联网平台的数据中心，高性能、可拓展的轻量级下一代数字化数据引擎。  
以 实体（entity） 为操作单元，通过简易明了的 API 对外提供读写能力（属性读写、时序查询、订阅，映射等）。




## 启动服务

> ⚠️ core 依赖于 dapr 启动， 所以我们应该先安装dapr。<br>
> ⚠️ 注意：请本地先运行一个 redis 进程，监听 6379 端口，无密码。


拉取仓库
```bash 
git clone  git@github.com:tkeel-io/core.git
cd core
```

#### Self-hosted
```bash
dapr run --app-id core --app-protocol http --app-port 6789 --dapr-http-port 3500 --dapr-grpc-port 50001 --log-level debug  --components-path ./examples/configs/core  go run cmd/core/main.go
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
2. 运行 core 程序
    ```bash
    kubectl apply -f k8s/core.yaml
    ```


## 使用 core 的 APIs

<br>

### 第 1 步： 创建实体

首先我们通过 API 创建一个实体：
```bash 
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities?id=device123" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{
    "status": "start",
    "temp": 234
    }'
```

### 第 2 步： 编辑实体

现在我们尝试使用 core 的 API 将实体的温度(`temp`) 字段更新为123：

```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
       "status": "testing",
       "temp":123
     }'
```

### 第 3 步： 查询实体

查看我们创建的实体，核对前面操作的变化：

```bash
curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123" \
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

### 第 4 步： Patch 实体属性

core 为我们提供强大 `json patch` 操作， 允许我们灵活的更新实体属性：

```bash
curl -X PATCH "http://localhost:6789/v1/plugins/dm/entities/device123" \
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


### 第 5 步： 配置实体属性配置信息

core 中的实体属性（property）是可以被配置的，配置信息作用于对实体属性的解析和使用：

```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123/configs" \
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

上面的 API 调用对设备实体（device123）的 `temp` 属性进行了配置， `type` 表示 temp 被解释为 `int` 类型， `define` 中定义了 temp 属性的约束信息，其单位 `unit` 为"°"，最大值 `max` 为500，最小值 `min` 为10。`enabled` 标识 属性 temp 是否被启用， `enabled_search` 标识属性是否被持久化到搜索引擎，[更多详细资料请查看](specs/model.md)。


### 第 6 步： 搜索实体

core 通过配置搜索为用户提供强大的索引能力：

```bash
curl -XPOST http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/search \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
        "page": {
        "limit": 200
      }
  }'
```

### 第 7 步： 为实体创建映射

core 对于实体的设计和抽象，绝不止步于 get/set， core通过 映射（mapper） 为用户提供强大而灵活的数据转换和映射，通过内置实现更加轻量级的数据流转：

1. **创建设备实体 device234：**

    ```bash
    curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities?id=device234" \
    -H "Owner: admin" \
    -H "Type: DEVICE" \
    -H "Source: dm" \
    -H "Content-Type: application/json" \
    -d '{
        "status": "start",
        "temp": 111
        }'
    ```

2. **为实体 device123 创建映射：**


    ```bash
    curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123/mappers" \
    -H "Source: dm" \
    -H "Owner: admin" \
    -H "Type: DEVICE" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "m-sync-dev234",
        "tql": "insert into device123 select device234.temp as temp"
        }'
    ```

insert into device123 select getDeviceByClass("灯").temp as temp
  

mapper 的描述信息由两部分数据组成：`name` 是映射的名称，[tql](specs/tql.md) 是映射的规则信息， `insert into device123 select device234.temp as temp` 是一条将 device234 的 temp 属性变更 同步到 device123 的 temp 属的规则。在规则生效后，我们可以通过想 device234 推送数据，查看 device123 的 temp 是否变化来校验规则是否生效。


### 第 8 步： 通过 pubsub 向实体发送消息


core 为上层应用提供两个不同场景的接口：[控制平面接口](specs/interfaces.md)，[数据平面接口](specs/interfaces.md)。控制平面的接口着眼于解决上层应用纷繁复杂的接口需求，而数据空面接口力在解决高频，大吞吐量场景下的性能问题。

```bash
curl -X POST http://localhost:3500/v1.0/publish/core-pubsub/core-pub \
  -H "Content-Type: application/json" \
  -d '{
       "entity_id": "device234",
       "owner": "admin",
       "source": "dm",
       "data": {
           "temp": 234
       }
     }'
```



### 第 9 步： 创建订阅，订阅实体数据

不同的业务场景对 订阅（[subscription](specs/subscription.md)） 的需求粒度不尽相同，core 为使用者提供内置的，高性能的，多模式的订阅功能：

```bash
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/subscriptions?id=sub123" \
    -H "Source: dm" \
    -H "Owner: admin" \
    -H "Type: SUBSCRIPTION" \
    -H "Content-Type: application/json" \
    -d '{
            "mode": "realtime",
            "filter":"insert into sub123 select device123.temp",
            "topic": "sub123",
            "pubsub_name": "core-pubsub"
        }'
```

### 10 步： 删除订阅

```bash
curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/subscriptions?id=sub123" \
    -H "Source: dm" \
    -H "Owner: admin" \
    -H "Type: SUBSCRIPTION" \
    -H "Content-Type: application/json" 
```


### 第 11 步： 删除映射

```bash
curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/test123/mappers/m-sync-dev234" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json"
```



### 第 12 步： 删除实体

```bash
curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" 
```


