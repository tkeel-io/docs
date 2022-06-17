---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## EntityToken API{#EntityToken}

| Name |  Description | 
| ---- |  ----------- | 
| [DeleteEntityToken](./method_DeleteEntityToken)|  注销实体Token |
| [EntityTokenInfo](./method_EntityTokenInfo)|  获取实体Token原信息 |
| [CreateEntityToken](./method_CreateEntityToken)|  创建实体Token |


## OAuth API{#OAuth}

| Name |  Description | 
| ---- |  ----------- | 
| [IdentityProviderRegister](./method_IdentityProviderRegister)|  外部认证注册 |
| [TokenRevoke](./method_TokenRevoke)|  注销 access_token |
| [OauthToken](./method_OauthToken)|  获取API access_token |
| [OauthAuthenticate](./method_OauthAuthenticate)|  获取 access_token 认证信息 |
| [GetIdentityProvider](./method_GetIdentityProvider)|  获取租户外部认证配置 |
| [OauthAuthorize](./method_OauthAuthorize)|  获取授权码 |
| [IdentityProviderTemplate](./method_IdentityProviderTemplate)|  获取外部身份认证配置模板 |
| [UpdatePassword](./method_UpdatePassword)|  修改密码 |
| [OIDCRegister](./method_OIDCRegister)|  注册 OIDC 外部身份认证方 |
| [ResetPassword](./method_ResetPassword)|  重置密码 |


## Oauth2 API{#Oauth2}

| Name |  Description | 
| ---- |  ----------- | 
| [UpdateAdminPassword](./method_UpdateAdminPassword)|  admin 重设密码接口 |
| [VerifyToken](./method_VerifyToken)|  Token 验证接口 |
| [IssuePluginToken](./method_IssuePluginToken)|  插件 Token 颁发接口 |
| [AddPluginWhiteList](./method_AddPluginWhiteList)|  添加 Plugin 白名单 dapr App ID 接口 |
| [IssueAdminToken](./method_IssueAdminToken)|  平台管理员 Token 颁发接口 |


## Plugin API{#Plugin}

| Name |  Description | 
| ---- |  ----------- | 
| [TMRegisterPlugin](./method_TMRegisterPlugin)|  手动注册插件接口 |
| [GetPlugin](./method_GetPlugin)|  查询插件接口 |
| [UninstallPlugin](./method_UninstallPlugin)|  卸载插件接口 |
| [InstallPlugin](./method_InstallPlugin)|  安装插件接口 |
| [UpgradePlugin](./method_UpgradePlugin)|  更新插件接口 |
| [TMUpdatePluginIdentify](./method_TMUpdatePluginIdentify)|  获取插件绑定租户接口 |
| [ListPlugin](./method_ListPlugin)|  获取插件列表接口 |
| [TenantDisable](./method_TenantDisable)|  插件租户停用接口 |
| [TenantEnable](./method_TenantEnable)|  插件租户启用接口 |
| [ListenableTenants](./method_ListenableTenants)|  获取插件绑定租户接口 |


## RBAC API{#RBAC}

| Name |  Description | 
| ---- |  ----------- | 
| [CheckRolePermission](./method_CheckRolePermission)|  权限校验 |
| [ListPermissions](./method_ListPermissions)|  权限列表 |
| [UpdateUserRoleBinding](./method_UpdateUserRoleBinding)|  全量更新用户角色 |
| [TMDeleteRoleBinding](./method_TMDeleteRoleBinding)|  TM delete policy 测试专用 |
| [CreateRoleBinding](./method_CreateRoleBinding)|  为用户添加角色 |
| [DeleteRoleBinding](./method_DeleteRoleBinding)|  删除用户角色 |
| [TMAddRoleBinding](./method_TMAddRoleBinding)|  TM add policy 测试专用 |
| [ListRole](./method_ListRole)|  角色列表 |
| [CreateRole](./method_CreateRole)|  创建角色 |
| [TMDeletePolicy](./method_TMDeletePolicy)|  TM delete policy 测试专用 |
| [GetRole](./method_GetRole)|  获取角色详情 |
| [DeleteRole](./method_DeleteRole)|  删除角色 |
| [UpdateRole](./method_UpdateRole)|  修改角色信息 |
| [TMAddPolicy](./method_TMAddPolicy)|  TM add policy 测试专用 |


## Repo API{#Repo}

| Name |  Description | 
| ---- |  ----------- | 
| [ListRepo](./method_ListRepo)|  获取仓库列表接口 |
| [ListAllRepoInstaller](./method_ListAllRepoInstaller)|  获取所有仓库的安装包列表接口 |
| [GetRepoInstaller](./method_GetRepoInstaller)|  获取仓库中指定安装包 |
| [DeleteRepo](./method_DeleteRepo)|  删除仓库接口 |
| [CreateRepo](./method_CreateRepo)|  创建仓库接口 |
| [ListRepoInstaller](./method_ListRepoInstaller)|  获取仓库中安装包列表接口 |


## Tenant API{#Tenant}

| Name |  Description | 
| ---- |  ----------- | 
| [GetResetPasswordKey](./method_GetResetPasswordKey)|  获取重置密码密钥 |
| [CreateTenant](./method_CreateTenant)|  创建租户 |
| [ListTenant](./method_ListTenant)|  获取租户列表 |
| [TenantByExactSearch](./method_TenantByExactSearch)|  租户认证方式查询 |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  停用租户插件 |
| [ResetPasswordKeyInfo](./method_ResetPasswordKeyInfo)|  获取重置密码密钥信息 |
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  租户插件权限校验 |
| [ListUser](./method_ListUser)|  查询用户列表 |
| [CreateUser](./method_CreateUser)|  创建用户 |
| [GetTenant](./method_GetTenant)|  获取租户详情 |
| [DeleteTenant](./method_DeleteTenant)|  删除租户 |
| [UpdateTenant](./method_UpdateTenant)|  修改租户信息 |
| [ListTenantPlugin](./method_ListTenantPlugin)|  租户插件列表 |
| [AddPlugin](./method_AddPlugin)|  租户启用插件 |
| [GetUser](./method_GetUser)|  获取用户信息 |
| [DeleteUser](./method_DeleteUser)|  删除用户 |
| [UpdateUser](./method_UpdateUser)|  修改用户信息 |


## authentication API{#authentication}

| Name |  Description | 
| ---- |  ----------- | 
| [Authenticate](./method_Authenticate)|  Authorization 认证 |


## config API{#config}

| Name |  Description | 
| ---- |  ----------- | 
| [GetPlatformConfig](./method_GetPlatformConfig)|  查询 platform config 接口 |
| [GetDeploymentConfig](./method_GetDeploymentConfig)|  查询 deployment config 接口 |
| [DelPlatformConfig](./method_DelPlatformConfig)|  删除 platform config 接口 |
| [SetPlatformExtraConfig](./method_SetPlatformExtraConfig)|  设置 platform config extra 数据接口 |


## entry API{#entry}

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](./method_GetEntries)|  查询 console entries 接口 |


## profile API{#profile}

| Name |  Description | 
| ---- |  ----------- | 
| [SetTenantProfile](./method_SetTenantProfile)|  设置平台租户配置 |
| [GetTenantProfile](./method_GetTenantProfile)|  获取平台租户配置 |
