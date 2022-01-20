---
title: tentacle 一致性
sidebar_position: 13
---



在 core 中 Entity，Actor，Tentacle 是三个非常重要，且关系紧密的概念，Actor 和Entity 是运行时和非运行时关系，Tentacle 是 Actor 在被消息触发后，为 Actor 的下一步行为提供指导，建立 Actor 与 Actor 信息交互的桥梁。如此看来， Tantacle 其实可以看做 Actor 运行的运行环境（上下文）中的部分信息。


![tentacle-consistency](/images/core/tentacle-consistency.png)


1. 通过 API 调用，创建，更新，或删除实体中中的 Mapper，引起 TQL 的变更，变更被同步到 ETCD 中。
2. Core 服务节点监听 ETCD 中的 TQL 的变更，感知变更。
3. Core 服务节点将 变更的 TQL 在本地重新生成 Tentacle，并更新本地 Actor 运行环境中的 `tentacles`。
4. 运行时环境的变更触发部分 Actor 被 `reload`，完成对 TQL 变更响应。


## TQL 中的通配符

```bash
# 所有实体
*.x
# a 实体的所有属性
a.*
# 所有实体的所有属性
*.*
```

TQL 中的通配符存在上述三种情况，实体或者属性的通配符我们都保存在 Tentacle 中，然后当 Actor 被触发拉取 `tentacles` 时进行匹配实体通配符。对于属性位置的通配符，在 Actor 执行完消息，然后进行下一步行动时解析。




## Feature
1. 对于 TQL 中的函数在什么时候被执行？

    对于函数，在功能上和通配符是相同的，不同在于其执行过程需要通过特定的回调函数，并结合 Core 集群的状态。我们可以在 Environment 中定时执行。