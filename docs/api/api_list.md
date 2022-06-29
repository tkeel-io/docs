---
title: API 列表
sidebar_position: 30
---

API 列表中包含里管理平台和用户平台各功能模块的所有 API。

## 管理平台

管理平台包括以下 API：

### 插件管理 API

| Name                                                                | Description          |
| :------------------------------------------------------------------ | :------------------- |
| [TMRegisterPlugin](./rudder/method_TMRegisterPlugin.md)             | 手动注册插件接口     |
| [ListPlugin](./rudder/method_ListPlugin.md)                         | 获取插件列表接口     |
| [TMUpdatePluginIdentify](./rudder/method_TMUpdatePluginIdentify.md) | 获取插件绑定租户接口 |
| [GetPlugin](./rudder/method_GetPlugin.md)                           | 查询插件接口         |
| [UninstallPlugin](./rudder/method_UninstallPlugin.md)               | 卸载插件接口         |
| [InstallPlugin](./rudder/method_InstallPlugin.md)                   | 安装插件接口         |
| [UpgradePlugin](./rudder/method_UpgradePlugin.md)                   | 更新插件接口         |
| [ListenableTenants](./rudder/method_ListenableTenants.md)           | 获取插件绑定租户接口 |
| [TenantDisable](./rudder/method_TenantDisable.md)                   | 插件租户停用接口     |
| [TenantEnable](./rudder/method_TenantEnable.md)                     | 插件租户启用接口     |

### 租户管理 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

### 运维与管理 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

### 平台配置 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

## 租户平台

租户平台包括以下 API：

### 插件管理 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

### 设备管理 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

### 数据查询 API

| Name                                                    | Description        |
| :------------------------------------------------------ | :----------------- |
| [GetRawdata](./core/method_GetRawdata.md)               | 查询实体原始数据   |
| [GetLatestEntities](./core/method_GetLatestEntities.md) | 最近查询数据的实体 |
| [GetTSData](./core/method_GetTSData.md)                 | 查询时序数据       |

### 数据订阅 API

| Name                                                                           | Description              |
| :----------------------------------------------------------------------------- | :----------------------- |
| [SubscribeByDevice](./core_broker/method_SubscribeByDevice.md)                 | 添加设备订阅             |
| [listSubscribe](./core_broker/method_listSubscribe.md)                         | 查询订阅列表             |
| [unsubscribeEntitiesByIDs](./core_broker/method_unsubscribeEntitiesByIDs.md)   | 取消订阅                 |
| [subscribeEntitiesByGroups](./core_broker/method_subscribeEntitiesByGroups.md) | 通过实体组添加到订阅     |
| [subscribeEntitiesByModels](./core_broker/method_subscribeEntitiesByModels.md) | 通过模板添加到订阅       |
| [createSubscribe](./core_broker/method_createSubscribe.md)                     | 创建订阅                 |
| [updateSubscribe](./core_broker/method_updateSubscribe.md)                     | 更新订阅                 |
| [getSubscribe](./core_broker/method_getSubscribe.md)                           | 查询订阅                 |
| [deleteSubscribe](./core_broker/method_deleteSubscribe.md)                     | 删除订阅                 |
| [subscribeEntitiesByIDs](./core_broker/method_subscribeEntitiesByIDs.md)       | 通过实体id列表添加到订阅 |
| [listSubscribeEntities](./core_broker/method_listSubscribeEntities.md)         | 查询订阅的实体列表       |

### 数据路由 API

| Name                                                                    | Description          |
| :---------------------------------------------------------------------- | :------------------- |
| [GetRuleDevices](./rule_manager/method_GetRuleDevices.md)               | 查询路由的设备列表   |
| [RemoveDevicesFromRule](./rule_manager/method_RemoveDevicesFromRule.md) | 从路由设备中删除设备 |
| [AddDevicesToRule](./rule_manager/method_AddDevicesToRule.md)           | 添加设备到路由       |
| [ErrUnsubscribe](./rule_manager/method_ErrUnsubscribe.md)               | 取消错误信息订阅     |
| [ErrSubscribe](./rule_manager/method_ErrSubscribe.md)                   | 错误信息订阅         |
| [ChangeErrSubscribe](./rule_manager/method_ChangeErrSubscribe.md)       | 改变错误信息订阅     |
| [ListRuleTarget](./rule_manager/method_ListRuleTarget.md)               | 查询路由目标列表     |
| [CreateRuleTarget](./rule_manager/method_CreateRuleTarget.md)           | 创建路由转发目标     |
| [GetTableMap](./rule_manager/method_GetTableMap.md)                     | 查询数据表结构映射   |
| [UpdateTableMap](./rule_manager/method_UpdateTableMap.md)               | 更新数据表映射       |
| [GetTableDetails](./rule_manager/method_GetTableDetails.md)             | 查询数据表详情       |
| [TesyConnectToKafka](./rule_manager/method_TesyConnectToKafka.md)       | 测试kafka配置        |
| [ActionVerify](./rule_manager/method_ActionVerify.md)                   | 验证转发配置         |
| [QueryRule](./rule_manager/method_QueryRule.md)                         | 查询路由列表         |
| [CreateRule](./rule_manager/method_CreateRule.md)                       | 创建路由             |
| [DeleteRule](./rule_manager/method_DeleteRule.md)                       | 删除路由             |
| [UpdateRule](./rule_manager/method_UpdateRule.md)                       | 更新路由             |
| [GetRule](./rule_manager/method_GetRule.md)                             | 查询路由详情         |
| [GetRuleDevicesID](./rule_manager/method_GetRuleDevicesID.md)           | 查询路由的设备id列表 |
| [SwitchRuleStatus](./rule_manager/method_SwitchRuleStatus.md)           | 切换路由状态         |
| [DeleteRuleTarget](./rule_manager/method_DeleteRuleTarget.md)           | 删除路由目标         |
| [UpdateRuleTarget](./rule_manager/method_UpdateRuleTarget.md)           | 更新路由转发目标     |
| [TableList](./rule_manager/method_TableList.md)                         | 查询数据表列表       |

### 用户管理 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |

### 监控告警 API

| Name | Description |
| :--- | :---------- |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
|      |             |
