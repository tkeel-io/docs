---
title: '从路由设备中删除设备'
description: "RemoveDevicesFromRule"
---
## 接口说明
调用该接口从路由设备中删除设备。

## URI

```
delete /rules/{id}/devices
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 路由id |  Required |  
| devices_ids | query | string | 设备id列表 |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | - |




