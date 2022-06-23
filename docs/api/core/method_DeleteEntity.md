---
title: '删除实体'
description: "DeleteEntity"
sidebar_position: 94
---
## 接口说明
调用该接口删除实体。

## URI

```
delete /entities/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 

| id | path | string | 实体id |  Required | 

| type | query | string | 实体类型 |  false |
| source | query | string | 来源id |  false |
| owner | query | string | 用户id |  false |


## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1DeleteEntityResponse](#v1DeleteEntityResponse)) |

#### v1DeleteEntityResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 实体id | 
| status | string | 操作状态 |










