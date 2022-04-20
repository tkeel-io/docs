---
title: 映射
sidebar_position: 2
---

`mapper`是 对于用于实体与实体之间数据映射的一种对象，`mapper` 使用 `TQL` 描述实体与实体之间的数据映射。



## 映射

映射就是从一个或多个实体中选取部分属性，然后将选取的部分属性经过重组或计算然后更新目标实体的状态。

![property-mapping](/images/core/property-mapping.png)


### 概念

- Actor：实体的运行时，维护实体的状态和提供的操作。
- maper: Actor 与 Actor 之间数据映射的执行实例。
- computed： mapper 内的计算模块，通过输入计算输出。
- SourceActor：在映射中提供变更数据的 Actor，如图中的 Actor1。
- TargetActor：在映射中作为映射目标的 Actor，如图中的 Actor2。


我们通过对此过程的分析，可将这一过程分为三部分：
1. 写复制传递实体属性的变更。
2. 将属性的变更作为输入计算映射结果。
3. 将映射计算结果更新到 Actor。



采用宏观的视角看来，实体与实体之间的数据映射就是从一个或多个 `SourceActor` 中选取部分属性作为输入，通过重组或计算得到输出，然后将输出更新到 `TargetActor`。而我们可以对这一过程进行概括，来自`SourceActor` 的输入组成一个 `Json` 数据，`映射` 输出是一个`JSON`，那么此时我们发现我们所做的映射其实就是从 `SourceActor` 拿到输入 `Json`，通过一定的转化 `规则` 将输入 `Json` 转化成另一个输出 `JSON`，然后在将输出的 `JSON` 更新到 `TargetActor`。

![property-mapping-outline](/images/core/mapping-outline.png))

我们通过对此过程的分析，可将这一过程分为三部分：
1. 从一个或多个 `SourceActor` 中选取部分属性，选取的数据可以构成一个 `JSON`。
2. 以选取的数据作为 `mapper` 的输入，执行 `mapper` 并输出一个 `JSON`。
3. 将 `mapper` 执行的输出作为反馈更新目标实体的状态。



## mapper 解析

我们知道`mapper`执行分为`选取输入`，`计算输出`，`更新目标Actor状态`三个阶段。为了满足这三个阶段，我们给`mapper`引入两个核心概念：`TQL`和`tentacle`，`TQL`是`mapper`的核心组件用于描述映射中json的转化规则，执行计算。`tentacle`译为`触手`，用于映射第一阶段中的属性变更的同步。

![mapper-tentacle-mql](/images/core/mapper-tentacle-mql3.png)


**mapper解析示例：**

```sql
# demo TQL Text.
insert into device123
select
device234.temp as temp,
device234.status as status,
device345.* as *
;
```


经过词法解析后：

```bash
# tentacles:
{
    "device234": ["temp", "status"],
    "device345": ["*"]
}
# runtime.mapper:
null
```


### tentacle 解析

对于 `tentacle` 在定义 `TQL` 的时候我们有时候就能够指代清楚我们定义的选取的实体或属性，我们可能需要通过结合服务节点的上下文计算解析才能得到结论。

![tentacle-tow-layer-parse](/images/core/tentacle-tow-layer-parse2.png)


**tentacle 解析示例：**

*mapper 解析后的 tentacle 如下：*

```bash
# tentacles:
{
    "device345": ["*"]
}
```

*core 当前节点的上下文，实体 device345 信息如下：*

```bash
# Core Context:
{
    "id": "device345",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {
        "status": "start",
        "temp": 20
    }
}
```

*tentacle 结合 core 的上下文：*

```bash
# Concrete tentacles：
{
    "device345": ["temp", "status"]
}
```



在结合服务节点上下文解析的时候，我们分为动态和静态两种方式。


## tentacle 分发

在完成 TQL 解析生成 `tentacles` 之后，我们将这些 `tentacles` 分发给相关的实体：

![mapper-tentacles](/images/core/mapper-data-directory2.png)




## mapper 与 tentacle 的数据流向

实体与实体之间通过 `tentacle` 触发来传递属性的变更：

![mapper-tentacles](/images/core/mapper-tentacles.png)




## Expression

对于实体之间的数据映射主要分为两步，`传递` + `计算`，使用TQL来实现不够直观，管理比较复杂。因此我们简化TQL的设计，将TQL中的 `field （eg: device234.temp as temp）`取出来以表达式的方式（`eg: temp = device234.temp`） 对实体进行配置，如此更加直观且便于管理。

> api-docs: https://docs.tkeel.io/api/Core/tag/method_AppendExpression


### Example


为实体 device123 创建表达式 `temp = device234.temp`：

```curl
curl --location --request POST 'http://192.168.100.8:31228/v1/entities/device123/expressions?type=DEVICE&owner=admin&source=dm' \
--header 'Content-Type: application/json' \
--data-raw '{
    "expressions": [
        {
            "path": "temp",
            "name": "temp eval  expression.",
            "expression": "device234.temp"
        }
    ]
}'
```

















