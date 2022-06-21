---
title: 'openapi identify'
description: "Identify"
---
## 接口说明
调用该接口openapi identify。

## URI

```
get /identify
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1IdentifyResponse](#v1IdentifyResponse)) |

#### v1IdentifyResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| addons_point | Array[v1AddonsPoint] |  [ 具体参数可见下面 [v1AddonsPoint](#v1AddonsPoint) ] |  
| dependence | Array[v1BriefPluginInfo] |  [ 具体参数可见下面 [v1BriefPluginInfo](#v1BriefPluginInfo) ] | 
| disable_manual_activation | boolean |  |  
| entries | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |  
| implemented_plugin | Array[v1ImplementedPlugin] |  [ 具体参数可见下面 [v1ImplementedPlugin](#v1ImplementedPlugin) ] |  
| permissions | Array[v1Permission] |  [ 具体参数可见下面 [v1Permission](#v1Permission) ] | 
| plugin_id | string |  |
| res | Object |  [ 具体参数可见下面 [v1Result](#v1Result) ]  | 
| tkeel_version | string |  | 
| version | string |  |


### v1AddonsPoint

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| desc | string |  | 
| name | string |  |


### v1BriefPluginInfo

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string |  | 
| version | string |  |


### v1ConsoleEntry

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| children | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] | 
| entry | string |  | 
| icon | string |  | 
| id | string |  | 
| name | string |  | 
| path | string |  |
| portal | Object |  [ 具体参数可见下面 [v1ConsolePortal](#v1ConsolePortal) ]  |


### v1ConsolePortal

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |


### v1ImplementedPlugin

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| addons | Array[v1ImplementedAddons] |  [ 具体参数可见下面 [v1ImplementedAddons](#v1ImplementedAddons) ] |
| plugin | Object |  [ 具体参数可见下面 [v1BriefPluginInfo](#v1BriefPluginInfo) ]  |


### v1ImplementedAddons

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| addons_point | string |  | 
| implemented_endpoint | string |  |


### v1BriefPluginInfo

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string |  | 
| version | string |  |


### v1Permission

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| children | Array[v1Permission] |  [ 具体参数可见下面 [v1Permission](#v1Permission) ] |  
| dependences | Array[PermissionDependence] |  [ 具体参数可见下面 [PermissionDependence](#PermissionDependence) ] | 
| desc | string |  | 
| id | string |  | 
| name | string |  |


### PermissionDependence

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| desc | string |  | 
| path | string |  |


### v1Result

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| msg | string |  |
| ret | Object |  [ 具体参数可见下面 [v1Retcode](#v1Retcode) ]  |


### v1Retcode

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |







