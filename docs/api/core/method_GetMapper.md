---
title: '查询实体映射'
description: "GetMapper"
sidebar_position: 40
---
## 接口说明
调用该接口查询实体映射。

## URI

```
get /entities/{entity_id}/mappers/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 

| entity_id | path | string | 实体id |  Required | 
| id | path | string | 映射id |  Required | 

| type | query | string | 实体类型 |  false |
| owner | query | string | 用户id |  false |
| source | query | string | 来源id |  false |


## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetMapperResponse](#v1GetMapperResponse)) |

#### v1GetMapperResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| entity_id | string | 实体id |
| mapper | Object | 映射信息 [ 具体参数可见下面 [v1Mapper](#v1Mapper) ]  | 
| owner | string | 用户id | 
| source | string | 来源id | 
| type | string | 实体类型 |





### v1Mapper
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 映射描述 | 
| id | string | 映射id | 
| name | string | 映射名称 | 
| tql | string | 映射tql语句 |










