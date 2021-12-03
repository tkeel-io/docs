---
title: 订阅
sidebar_position: 7
---



# 订阅

----
每个 plugin 在注册的时候自动创建一个与 core 交互的 pubsub, 名称为 plugin 的名称。 topic 统一为 pubcore，subcore，只有 core 与该 plugin 有相关权限
比如
pluginA: pluginA。pubcore 用于向 core 发布数据，subcore 用于从 core 订阅数据
## 订阅分类

1. 实时订阅（收到消息就触发）
2. 变更订阅（属性有变更时触发）
3. 周期订阅（周期性上报所有属性）

## 订阅的实现
1. 筛选数据
2. 数据计算和变换
3. 发送数据

## 订阅的表达形式

```json
{
  "source": "pluginA",
  "filter": "/abcd/+",
  "target": "pluginB",
  "mode": "realtime"
}
```
```json
{
  "source": "pluginA",
  "filter": "* where thing_id=abcd",
  "target": "pluginA",
  "mode": "realtime"
}
```
其中 filter 可采用不同的表达形式

