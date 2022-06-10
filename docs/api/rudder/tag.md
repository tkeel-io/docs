---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [VerifyToken](./method_VerifyToken)|  Token 验证接口 |
| [AddPluginWhiteList](./method_AddPluginWhiteList)|  添加 Plugin 白名单 dapr App ID 接口 |
| [IssueAdminToken](./method_IssueAdminToken)|  平台管理员 Token 颁发接口 |
| [IssuePluginToken](./method_IssuePluginToken)|  插件 Token 颁发接口 |
| [UpdateAdminPassword](./method_UpdateAdminPassword)|  admin 重设密码接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [UpgradePlugin](./method_UpgradePlugin)|  更新插件接口 |
| [GetPlugin](./method_GetPlugin)|  查询插件接口 |
| [UninstallPlugin](./method_UninstallPlugin)|  卸载插件接口 |
| [InstallPlugin](./method_InstallPlugin)|  安装插件接口 |
| [TMRegisterPlugin](./method_TMRegisterPlugin)|  手动注册插件接口 |
| [ListenableTenants](./method_ListenableTenants)|  获取插件绑定租户接口 |
| [TenantDisable](./method_TenantDisable)|  插件租户停用接口 |
| [TenantEnable](./method_TenantEnable)|  插件租户启用接口 |
| [ListPlugin](./method_ListPlugin)|  获取插件列表接口 |
| [TMUpdatePluginIdentify](./method_TMUpdatePluginIdentify)|  获取插件绑定租户接口 |


## RBAC相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListPermissions](./method_ListPermissions)|  list permissions  |
| [TMAddPolicy](./method_TMAddPolicy)|  TM add policy |
| [ListRole](./method_ListRole)|  list role in tenant  |
| [CreateRole](./method_CreateRole)|  create role in tenant  |
| [TMDeleteRoleBinding](./method_TMDeleteRoleBinding)|  TM delete policy |
| [TMAddRoleBinding](./method_TMAddRoleBinding)|  TM add policy |
| [UpdateUserRoleBinding](./method_UpdateUserRoleBinding)|  create binding to bind user_id with roles |
| [GetRole](./method_GetRole)|  Get role in tenant  |
| [DeleteRole](./method_DeleteRole)|  delete role in tenant  |
| [UpdateRole](./method_UpdateRole)|  update role in tenant  |
| [TMDeletePolicy](./method_TMDeletePolicy)|  TM delete policy |
| [CheckRolePermission](./method_CheckRolePermission)|  check role has the permission |
| [CreateRoleBinding](./method_CreateRoleBinding)|  create binding to bind role_id with user_id |
| [DeleteRoleBinding](./method_DeleteRoleBinding)|  delete binding of the bind role_name with user_id |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListRepo](./method_ListRepo)|  获取仓库列表接口 |
| [ListRepoInstaller](./method_ListRepoInstaller)|  获取仓库中安装包列表接口 |
| [ListAllRepoInstaller](./method_ListAllRepoInstaller)|  获取所有仓库的安装包列表接口 |
| [GetRepoInstaller](./method_GetRepoInstaller)|  获取仓库中指定安装包 |
| [DeleteRepo](./method_DeleteRepo)|  删除仓库接口 |
| [CreateRepo](./method_CreateRepo)|  创建仓库接口 |


## [Security] EntityToken相关API

| Name |  Description | 
| ---- |  ----------- | 
| [CreateEntityToken](./method_CreateEntityToken)|  create a entity token |
| [EntityTokenInfo](./method_EntityTokenInfo)|  get a entity token info |
| [DeleteEntityToken](./method_DeleteEntityToken)|  delete a entity token |


## [Security] OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [OauthAuthenticate](./method_OauthAuthenticate)|  oauth authenticate with header Authorization |
| [OauthAuthorize](./method_OauthAuthorize)|  oauth authorize code with username and password |
| [TokenRevoke](./method_TokenRevoke)|  oauth token revoke with refresh token |
| [IdentityProviderRegister](./method_IdentityProviderRegister)|  identity provider register |
| [GetIdentityProvider](./method_GetIdentityProvider)|  get identity provider |
| [UpdatePassword](./method_UpdatePassword)|  oauth update user password |
| [IdentityProviderTemplate](./method_IdentityProviderTemplate)|  identity provider config template |
| [OIDCRegister](./method_OIDCRegister)|  oauth OIDC provider register |
| [ResetPassword](./method_ResetPassword)|  oauth reset user password |
| [OauthToken](./method_OauthToken)|  oauth token with code or password |


## [Security] Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [TenantByExactSearch](./method_TenantByExactSearch)|  tenant exact search |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  delete tenant plugin |
| [GetTenant](./method_GetTenant)|  get a tenant |
| [DeleteTenant](./method_DeleteTenant)|  delete a tenant |
| [UpdateTenant](./method_UpdateTenant)|  tenant update |
| [ListTenantPlugin](./method_ListTenantPlugin)|  list tenant plugin |
| [AddPlugin](./method_AddPlugin)|  add a plugin |
| [ListUser](./method_ListUser)|  list users |
| [CreateUser](./method_CreateUser)|  create a  user at tenant |
| [ListTenant](./method_ListTenant)|  tenant list |
| [CreateTenant](./method_CreateTenant)|  create a tenant |
| [ResetPasswordKeyInfo](./method_ResetPasswordKeyInfo)|  get reset user password key info |
| [DeleteUser](./method_DeleteUser)|  delete a user |
| [UpdateUser](./method_UpdateUser)|  update user |
| [GetUser](./method_GetUser)|  get a  user |
| [GetResetPasswordKey](./method_GetResetPasswordKey)|  get reset user password key  |
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  permissible tenant plugin |


## authentication相关API

| Name |  Description | 
| ---- |  ----------- | 
| [Authenticate](./method_Authenticate)|  tkeel authenticate with header Authorization |


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
| [SetTenantProfile](./method_SetTenantProfile)|  set tenant profile |
| [GetTenantProfile](./method_GetTenantProfile)|  get tenant profile |
