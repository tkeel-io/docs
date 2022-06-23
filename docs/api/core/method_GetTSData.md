---
title: '获取时序数据'
description: "GetTSData"
sidebar_position: 189
---
## 接口说明
调用该接口获取时序数据。

## URI

```
post /ts/{id}
```


### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetTSDataResponse](#v1GetTSDataResponse)) |

#### v1GetTSDataResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| items | Array[v1TSResponse] | 结果列表 [ 具体参数可见下面 [v1TSResponse](#v1TSResponse) ] | 
| page_num | integer | 记录开始位置 | 
| page_size | integer | 每页限制条数 | 
| total | integer | 结果总数 |





### v1TSResponse
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| time | string | 时间 | 
| value | object | 时序数据 |










