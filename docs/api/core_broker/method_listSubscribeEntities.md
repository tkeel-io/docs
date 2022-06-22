---
title: '查询订阅的实体列表'
description: "listSubscribeEntities"
---
## 接口说明
调用该接口查询订阅的实体列表。

## URI

```
post /subscribe/{id}/entities/list
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 订阅ID |  Required | 

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ListSubscribeEntitiesResponse](#v1ListSubscribeEntitiesResponse)) |

#### v1ListSubscribeEntitiesResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| data | Array[v1Entity] | 订阅实体 [ 具体参数可见下面 [v1Entity](#v1Entity) ] | 
| last_page | string | 上一页 | 
| page_num | string | 页数 | 
| page_size | string | 每页数量 | 
| total | string | 总数 |


### v1Entity
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| ID | string | 实体id | 
| group | string | 组 | 
| name | string | 名称 | 
| status | string | 状态 | 
| template | string | 模板 | 
| updated_at | string | 更新时间 |







