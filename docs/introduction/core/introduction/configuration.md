---
title: 配置
sidebar_position: 2
---


**Example:**

```yaml 
# proxy 用于配置 core 内部回调模块
proxy:
  # http_port 指定 api 回调的 http 端口，默认值为 20000
  # 该参数可以通过命令行指定，详见下文
  http_port: 20000
  # grpc_port 指定 api 回调的 grpc 端口，默认值为 20001
  # 该参数可以通过命令行指定，详见下文
  grpc_port: 20001


# server
server:
  # name 用于指定当前 core 节点名称，唯一标识 core 节点实例
  name: core
  # app_id 用于指定服务名称
  app_id: core
  # sources 指定 core::runtime 的输入数据源
  sources:
    - kafka://localhost:9092/core0/core
    - kafka://localhost:9092/core1/core
    - kafka://localhost:9092/core2/core
    - kafka://localhost:9092/core3/core


# logger 配置 服务的日志
logger:
  # level 指定日志级别
  level: debug
  # output 指定日志的文件输出路径，默认值为 DEBUG
  # output: 
  # encoding 指定日志的输出格式，默认值为 JSON
  # encoding: JSON


# discovery 指定 core 服务的服务注册、发现模块配置
discovery:
  # dial_timeout 指定 discovery 连接心跳周期， 默认值为 3s
  heart_time: 3
  # dial_timeout 指定 discovery 连接超时时间， 默认值为 3s
  dial_timeout: 3
  # endpoints 指定 discovery 集群 地址
  endpoints: 
    - http://localhost:2379


# components 用于配置 core 默认的中间件配置
components:
  # etcd 指定 core 使用的 rtcd 配置， etcd 是core 必须依赖的中间件.
  etcd: 
    # dial_timeout 指定 etcd 连接超时时间， 默认值为 3s
    dial_timeout: 3
    # endpoints 指定 etcd 集群 地址
    endpoints: 
      - http://localhost:2379
  # store 指定 core 服务默认的状态存储, 默认值定 noop 类型.
  store:
    name: noop
    properties:
      - key: name
        value: core1.noop
      - key: store_name
        value: core-state

  # time_series 指定 core 服务默认的时序存储, 默认值定 noop 类型.
  time_series:
    name: noop
    properties:
      - key: name
        value: core1.noop
  
  # search_engine 指定 core 服务的默认搜索引擎.
  search_engine: es://admin:admin@elasticsearch-master:9200




# 指定 dispatcher 模块的配置，dispatcher 存在两种启动模式：独立部署|和core集成部署
dispatcher:
  # 配置 dispatcher id.
  id: dispatcher0
  # 在 core 服务 dispatcher 模块是否启用.
  enabled: true
  # 指定 dispatcher 名称
  name: dispatcher
  # 指定 dispatcher 模块的上游消费 stream 数据源.
  upstreams:
  # 指定 dispatcher 模块的下游输出 stream 数据源，downstreams 是必须指定的，必须包含所有 core.server.sources
  downstreams:
    - kafka://localhost:9092/core0/core
    - kafka://localhost:9092/core1/core
    - kafka://localhost:9092/core2/core
    - kafka://localhost:9092/core3/core
    - kafka://localhost:9092/core4/core
    - kafka://localhost:9092/core5/core
    - kafka://localhost:9092/core6/core
    - kafka://localhost:9092/core7/core
```


### 命令行参数详解

|名称|必要|类型|位置|默认值|描述|
|---|---|----|---|---|----|
|conf|false|string| CMD | config.yml | 指定 Core 服务的配置文件路径 |
|http_addr|false|string| CMD | :6789 | 指定 Core 服务Http的地址 |
|grpc_addr|false|string| CMD | :31233 | 指定 Core 服务Grpc的地址 |
|proxy_http_port|false|string| CMD | :6789 | 指定 Core 服务 api 回调模块Http的端口 |
|proxy_grpc_port|false|string| CMD | :31233 | 指定 Core 服务 api 回调模块Grpc的端口 |
|etcd|false|string| CMD | http://localhost:2379 | 指定 Etcd 集群地址配置项 |
|search_engine|false|string| CMD | es://admin:admin@elasticsearch-master:9200 | 指定搜索引擎集群地址配置项 |









> try: https://github.com/tkeel-io/core/tree/main/examples/configs/README.md