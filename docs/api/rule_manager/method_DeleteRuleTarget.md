---
title: '删除路由目标'
description: "DeleteRuleTarget"
---
## 接口说明
调用该接口删除路由目标。

## URI

```
delete /rules/{id}/target/{target_id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 路由id |  Required | 
| target_id | path | string | 路由目标id |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | - |




