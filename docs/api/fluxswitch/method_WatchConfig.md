---
title: '监听配置变化'
description: "WatchConfig"
---
## 接口说明
调用该接口监听配置变化。

## URI

```
get /watch/{token}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| token | path | string | Token |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1WatchConfigResponse](#v1WatchConfigResponse)) |

#### v1WatchConfigResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |







