---
title: '搜索服务列表'
description: "ListProxy"
---
## 接口说明
调用该接口搜索服务列表。

## URI

```
get /proxy
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 
| query | query | string | 搜索关键字 |  false |
| order_by | query | string | 排序 |  false |
| page_num | query | integer | 页数 |  false |
| page_size | query | integer | 每页数量 |  false |
| online | query | string | 在线状态 |  false |
| status | query | string | 启用状态 |  false |
| client_id | query | string | 客户端ID |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ListProxyResponse](#v1ListProxyResponse)) |

#### v1ListProxyResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| page_num | integer | 页数 | 
| page_size | integer | 每页数量 |  
| proxy_list | Array[v1QueryProxy] | 代理服务列表 [ 具体参数可见下面 [v1QueryProxy](#v1QueryProxy) ] | 
| total | integer | 总数量 |


### v1QueryProxy

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| client_id | string | 网关ID | 
| create_at | string | 创建时间 | 
| device_id | string | 设备ID | 
| device_name | string | 设备名称 | 
| export_flow | string | 下行流量 | 
| host | string | 服务地址 | 
| id | string | 代理服务ID | 
| inlet_flow | string | 上行流量 | 
| name | string | 名称 | 
| online | string | 在线状态 | 
| port | string | 服务端口 | 
| protocol | string | 协议 | 
| remark | string | 备注 | 
| status | string | 启用状态 | 
| token | string | Token | 
| url | string | 访问地址 |







