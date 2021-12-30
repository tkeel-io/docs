---
title: 配置
sidebar_position: 2
---


## Configurations


|名称|必要|类型|位置|默认值|描述|
|---|---|----|---|---|----|
|conf|true|string| CMD | config.yml | 指定 Core 服务的配置文件路径 |
|http_addr|true|string| CMD | :6789 | 指定 Core 服务Http的地址 |
|grpc_addr|true|string| CMD | :31233 | 指定 Core 服务Grpc的地址 |
|etcd_brokers|true|string| CMD | http://localhost:2379 | 指定 Etcd 集群地址配置项 |
|search_brokers|true|string| CMD | http://localhost:9200 | 指定搜索引擎集群地址配置项 |


