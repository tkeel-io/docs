---
title: '搜索网关'
description: "ListClient"
---
## 接口说明
调用该接口搜索网关。

## URI

```
get /client
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 
| query | query | string | 搜索关键字 |  false |
| order_by | query | string | 排序字段 |  false |
| page_num | query | integer | 页码 |  false |
| page_size | query | integer | 每页数量 |  false |
| online | query | string | 在线状态 |  false |
| status | query | string | 启用状态 |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ListClientResponse](#v1ListClientResponse)) |

#### v1ListClientResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| client_list | Array[v1QueryClient] | 网关列表 [ 具体参数可见下面 [v1QueryClient](#v1QueryClient) ] | 
| page_num | integer | 页码 | 
| page_size | integer | 每页数量 | 
| total | integer | 总数量 |


### v1QueryClient

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| client_address | string | 网关地址 | 
| create_at | string | 创建时间 | 
| export_flow | string | 下行流量 | 
| id | string | 网关ID | 
| inlet_flow | string | 上行流量 | 
| name | string | 名称 | 
| online | string | 在线状态 | 
| status | string | 启用状态 | 
| token | string | Token |







