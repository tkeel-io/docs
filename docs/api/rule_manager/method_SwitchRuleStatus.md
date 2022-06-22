---
title: '切换路由状态'
description: "SwitchRuleStatus"
---
## 接口说明
调用该接口切换路由状态。

## URI

```
put /rules/{id}/running_status
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 路由id |  Required | 

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRuleStatusSwitchResp](#ruleRuleStatusSwitchResp)) |

#### ruleRuleStatusSwitchResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 路由id | 
| status | integer | 状态 1 运行中, 状态 0 停止 |







