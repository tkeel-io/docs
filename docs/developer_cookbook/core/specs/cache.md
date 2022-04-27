---
title: Cache
sidebar_position: 32
---


Cache 是指在 Runtime 上缓存的其他 Runtime 中执行的实体的状态信息，缓存实体信息主要用于 Expression 的计算。

![runtime-cache-001](/images/core/runtime-cache-001.png)

如上图所示， Runtime1 订阅了 Runtime2 中实体 E11 的属性。如下，Runtime1 订阅了 E11 的 `properties.metrics, properties.attributes, properties.basic.name`：


![runtime-cache-002](/images/core/runtime-cache-002.png)


当 E11 的部分属性 (`properties.metrics.cpu, properties.basic.name`) 发生变更时，这时根据 [订阅 path 匹配规则](./mapper.md#path-匹配原则)，其匹配结果如下图：

![runtime-cache-003](/images/core/runtime-cache-003.png)


从上图中我们可以得知，当 E11 的 `properties.metrics.cpu, properties.basic.name` 发生变化之后，`properties.metrics 和 properties.basic.name` 会被匹配，那么会出现一个问题，Runtime2 向 Runtime1 同步的到底是什么数据？

- 同步 E11 整个实体的状态
- 同步 E11 的 properties
- 同步 properties.metrics 和 properties.basic.name
- 同步 properties.metrics.cpu, properties.basic.name

同步其实也是分为两部分的：
- 一个可以被订阅者接受并更新缓存的 Patch 操作；
- 告诉订阅者被订阅实体变更的 path。



## 同步 vs. 触发

也就是说 Runtime 之间的订阅，其实分为同步和触发两个阶段。

触发并无太多难点，直接将发生变更的 path 传递给订阅者即可。

### 同步整个实体状态

优点：
- 实现简单

缺点：
- 当 Expression 数量大时会导致 Runtime 之间同步负载增高。
- 当实体消息上报频率过高，会导致Runtime 之间同步负载增高。


### 同步合并 path 数据

```bash
# 订阅 path：
dev.attributes.metrics
dev.attributes.metrics.cpu_used
dev.attributes.temp

# 合并 订阅 path
## 1. 合并成多条
dev.attributes.metrics
dev.attributes.temp

## 2. 合并成一条 path
dev.attributes
```

优点：
- 传输的粒度更小，优化传输效率

### 按照订阅 path 同步


缺点：
- 多个path可能存在数据冗余

### 按照变更 path 同步

优点：
- 同步最少数据


缺点：
- 增量同步是需要有一个初始值的，所以实体缓存需要初始化。





