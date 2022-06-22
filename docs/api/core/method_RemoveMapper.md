---
title: '移除实体映射'
description: "RemoveMapper"
sidebar_position: 223
---
## 接口说明
调用该接口移除实体映射。

## URI

```
delete /entities/{entity_id}/mappers
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| entity_id | path | string | 实体id |  Required |  
| id | query | string | 映射id |  false |
| type | query | string | 实体类型 |  false |
| owner | query | string | 用户id |  false |
| source | query | string | 来源id |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1RemoveMapperResponse](#v1RemoveMapperResponse)) |

#### v1RemoveMapperResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| entity_id | string | 实体id | 
| id | string | 映射id | 
| owner | string | 用户id | 
| source | string | 来源id | 
| type | string | 实体类型 |







