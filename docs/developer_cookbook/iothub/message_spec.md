---
title: 消息规范
sidebar_position: 2
---

## 消息格式
- 支持三类上行数据（原始数据， 属性， 遥测） 
- 支持三类下行数据（属性（可写）， 遥测（可写）， 命令）

### 原始数据 payload 格式
- 上行原始数据可以是任意类型的数据， 比如 json, 二进制数据等用户自定义数据.


### 属性数据 payload 格式
- 上行属性数据
KV 形式， K 是设备模板属性的 id， V 是 字典包括 时间time, 值value 两个字段， 允许有多个 KV, eg:
```json
{
   "serial": {
      "value": "sn123456",
      "time": 1641349927430079500
   },
   "brand": {
      "value": "qy",
      "time": 1641349927430079500
   }
}
```

- 下行属性数据,json 行式， K 是设备模板属性的 id， V 是 字典包括 时间time, 值value 两个字段， **只针对可写的属性**（设备模型属性里面的 `rw` 字段是 `w` or `rw`）
```json
{
   "serial": {
      "value": "sn123456",
      "time": 1641349927430079500
   },
   "brand": {
      "value": "qy",
      "time": 1641349927430079500
   }
}
```

### 遥测数据 payload 格式
- 上行遥测数据
  json 行式， K 是设备模板遥测的 id， V 是 字典包括 时间time, 值value 两个字段， 允许有多个 KV, eg:
```json
{
   "temperature": {
      "value": 30,
      "time": 1641349927430079500
   }
}
```
- 下行遥测数据，json 行式， K 是设备模板遥测的 id， V 是 字典包括 时间time, 值value 两个字段， 允许有多个 KV。 **只针对可写的遥测**（设备模型遥测里面的 `rw` 字段是 `w` or `rw`）
```json
{
   "temperature": {
      "value": 31,
      "time": 1641349927430079500
   }
}
```


### 命令数据 payload 格式
- 下行命令数据
  json 行式， id 的值是设备模板命令的 id，  paras 是设备模板命令参数, time 是平台发送命令的时间.
  命令按照是否需要回复分为两种， 单向命令（不需要回复）和双向命令（需要回复）， 目前只有单向命令 eg:
```json
{
   "id": "ota",
   "paras": {
      "firmware_address": "http://xxx.yyy.com",
      "version": "latest",
      "secret": "****",
      "http_method": "GET"
   },
   "time": 1641349927430079500
}
```
