---
title: '查询路由的设备列表'
description: "GetRuleDevices"
---
## 接口说明
调用该接口查询路由的设备列表。

## URI

```
get /rules/{id}/devices
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 路由id |  Required |  
| page_num | query | integer | 页码 |  true |
| page_size | query | integer | 每页数量 |  true |
| order_by | query | string | 排序字段 |  false |
| is_descending | query | boolean | 倒序 |  false |
| key_words | query | string | 关键字 |  false |
| search_key | query | string | 关键字值 |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRuleDevicesResp](#ruleRuleDevicesResp)) |

#### ruleRuleDevicesResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| data | Array[ruleDevice] | 设备列表 [ 具体参数可见下面 [ruleDevice](#ruleDevice) ] | 
| last_page | integer | 上一页 | 
| page_num | integer | 页码 | 
| page_size | integer | 每页数量 | 
| total | integer | 总数 |


### ruleDevice
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| group_name | string | 设备组 | 
| id | string | 设备id | 
| name | string | 设备名称 | 
| status | string | 设备状态 | 
| template | string | 设备模板 |







