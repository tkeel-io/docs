---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## EntityToken相关API

| Name |  Description | 
| ---- |  ----------- | 
| [EntityTokenInfo](../security/method_EntityTokenInfo.md)|  获取实体Token原信息 |
| [CreateEntityToken](../security/method_CreateEntityToken.md)|  创建实体Token |
| [DeleteEntityToken](../security/method_DeleteEntityToken.md)|  注销实体Token |


## OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ResetPassword](../security/method_ResetPassword.md)|  重置密码 |
| [OauthToken](../security/method_OauthToken.md)|  获取API access_token |
| [OauthAuthenticate](../security/method_OauthAuthenticate.md)|  获取 access_token 认证信息 |
| [OIDCRegister](../security/method_OIDCRegister.md)|  注册 OIDC 外部身份认证方 |
| [OauthAuthorize](../security/method_OauthAuthorize.md)|  获取授权码 |
| [IdentityProviderRegister](../security/method_IdentityProviderRegister.md)|  外部认证注册 |
| [UpdatePassword](../security/method_UpdatePassword.md)|  修改密码 |
| [GetIdentityProvider](../security/method_GetIdentityProvider.md)|  获取租户外部认证配置 |
| [TokenRevoke](../security/method_TokenRevoke.md)|  注销 access_token |
| [IdentityProviderTemplate](../security/method_IdentityProviderTemplate.md)|  获取外部身份认证配置模板 |


## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [IssueAdminToken](./method_IssueAdminToken)|  平台管理员 Token 颁发接口 |
| [AddPluginWhiteList](./method_AddPluginWhiteList)|  添加 Plugin 白名单 dapr App ID 接口 |
| [VerifyToken](../security/method_VerifyToken.md)|  Token 验证接口 |
| [UpdateAdminPassword](./method_UpdateAdminPassword)|  admin 重设密码接口 |
| [IssuePluginToken](./method_IssuePluginToken)|  插件 Token 颁发接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [TMUpdatePluginIdentify](./method_TMUpdatePluginIdentify)|  获取插件绑定租户接口 |
| [TenantDisable](./method_TenantDisable)|  插件租户停用接口 |
| [TenantEnable](./method_TenantEnable)|  插件租户启用接口 |
| [ListenableTenants](./method_ListenableTenants)|  获取插件绑定租户接口 |
| [GetPlugin](./method_GetPlugin)|  查询插件接口 |
| [UninstallPlugin](./method_UninstallPlugin)|  卸载插件接口 |
| [InstallPlugin](./method_InstallPlugin)|  安装插件接口 |
| [UpgradePlugin](./method_UpgradePlugin)|  更新插件接口 |
| [TMRegisterPlugin](./method_TMRegisterPlugin)|  手动注册插件接口 |
| [ListPlugin](./method_ListPlugin)|  获取插件列表接口 |


## RBAC相关API

| Name |  Description | 
| ---- |  ----------- | 
| [UpdateUserRoleBinding](./method_UpdateUserRoleBinding)|  全量更新用户角色 |
| [ListRole](./method_ListRole)|  角色列表 |
| [CreateRole](./method_CreateRole)|  创建角色 |
| [TMAddPolicy](./method_TMAddPolicy)|  TM add policy 测试专用 |
| [CreateRoleBinding](./method_CreateRoleBinding)|  为用户添加角色 |
| [CheckRolePermission](./method_CheckRolePermission)|  权限校验 |
| [GetRole](./method_GetRole)|  获取角色详情 |
| [DeleteRole](./method_DeleteRole)|  删除角色 |
| [UpdateRole](./method_UpdateRole)|  修改角色信息 |
| [DeleteRoleBinding](./method_DeleteRoleBinding)|  删除用户角色 |
| [TMDeletePolicy](./method_TMDeletePolicy)|  TM delete policy 测试专用 |
| [ListPermissions](./method_ListPermissions)|  权限列表 |
| [TMAddRoleBinding](./method_TMAddRoleBinding)|  TM add policy 测试专用 |
| [TMDeleteRoleBinding](./method_TMDeleteRoleBinding)|  TM delete policy 测试专用 |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListRepoInstaller](./method_ListRepoInstaller)|  获取仓库中安装包列表接口 |
| [GetRepoInstaller](./method_GetRepoInstaller)|  获取仓库中指定安装包 |
| [ListAllRepoInstaller](./method_ListAllRepoInstaller)|  获取所有仓库的安装包列表接口 |
| [DeleteRepo](./method_DeleteRepo)|  删除仓库接口 |
| [CreateRepo](./method_CreateRepo)|  创建仓库接口 |
| [ListRepo](./method_ListRepo)|  获取仓库列表接口 |


## Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  租户插件权限校验 |
| [ResetPasswordKeyInfo](../security/method_ResetPasswordKeyInfo.md)|  获取重置密码密钥信息 |
| [GetUser](../security/method_GetUser.md)|  获取用户信息 |
| [DeleteUser](../security/method_DeleteUser.md)|  删除用户 |
| [UpdateUser](../security/method_UpdateUser.md)|  修改用户信息 |
| [GetResetPasswordKey](../security/method_GetResetPasswordKey.md)|  获取重置密码密钥 |
| [ListUser](../security/method_ListUser.md)|  查询用户列表 |
| [CreateUser](../security/method_CreateUser.md)|  创建用户 |
| [ListTenant](../security/method_ListTenant.md)|  获取租户列表 |
| [CreateTenant](../security/method_CreateTenant.md)|  创建租户 |
| [GetTenant](../security/method_GetTenant.md)|  获取租户详情 |
| [DeleteTenant](../security/method_DeleteTenant.md)|  删除租户 |
| [UpdateTenant](../security/method_UpdateTenant.md)|  修改租户信息 |
| [TenantByExactSearch](../security/method_TenantByExactSearch.md)|  租户认证方式查询 |
| [ListTenantPlugin](./method_ListTenantPlugin)|  租户插件列表 |
| [AddPlugin](./method_AddPlugin)|  租户启用插件 |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  停用租户插件 |


## authentication相关API

| Name |  Description | 
| ---- |  ----------- | 
| [Authenticate](./method_Authenticate)|  Authorization 认证 |


## config相关API

| Name |  Description | 
| ---- |  ----------- | 
| [DelPlatformConfig](./method_DelPlatformConfig)|  删除 platform config 接口 |
| [SetPlatformExtraConfig](./method_SetPlatformExtraConfig)|  设置 platform config extra 数据接口 |
| [GetDeploymentConfig](./method_GetDeploymentConfig)|  查询 deployment config 接口 |
| [GetPlatformConfig](./method_GetPlatformConfig)|  查询 platform config 接口 |


## entry相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](./method_GetEntries)|  查询 console entries 接口 |


## profile相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetTenantProfile](../security/method_GetTenantProfile.md)|  获取平台租户配置 |
| [SetTenantProfile](../security/method_SetTenantProfile.md)|  设置平台租户配置 |
