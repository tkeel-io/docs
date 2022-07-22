---
title: '验证转发配置'
description: "ActionVerify"
sidebar_position: 34
---
## 接口说明
调用该接口验证转发配置。

## URI

```
post /verify/{sink_type}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| sink_type | path | string | 目标类型， clickhouse 或者 mysql |  Required | 

### 请求Body
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| meta | object | meta用于储存不同类型的特有信息，如chronus需要user，和password | 
| urls | string | 连接地址 |








## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleASVerifyResp](#ruleASVerifyResp)) |

#### ruleASVerifyResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 验证id | 
| types | Array[ string ] | 目标支持的数据类型 |










