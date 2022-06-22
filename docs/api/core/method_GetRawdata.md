---
title: '查询实体原始数据'
description: "GetRawdata"
sidebar_position: 212
---
## 接口说明
调用该接口查询实体原始数据。

## URI

```
post /rawdata/{entity_id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| entity_id | path | string | 实体id |  Required | 

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetRawdataResponse](#v1GetRawdataResponse)) |

#### v1GetRawdataResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| items | Array[v1RawdataResponse] | 原始数据列表 [ 具体参数可见下面 [v1RawdataResponse](#v1RawdataResponse) ] | 
| page_num | integer | 记录开始位置 | 
| page_size | integer | 每页限制条数 | 
| total | integer | 实体列表数量 |


### v1RawdataResponse
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| entity_id | string |  | 
| id | string |  | 
| path | string |  | 
| timestamp | string |  | 
| values | string |  |







