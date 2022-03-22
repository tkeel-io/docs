---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [UpdateAdminPassword](./method_UpdateAdminPassword)|  admin 重设密码接口 |
| [IssuePluginToken](./method_IssuePluginToken)|  插件 Token 颁发接口 |
| [VerifyToken](./method_VerifyToken)|  Token 验证接口 |
| [IssueAdminToken](./method_IssueAdminToken)|  平台管理员 Token 颁发接口 |
| [AddPluginWhiteList](./method_AddPluginWhiteList)|  添加 Plugin 白名单 dapr App ID 接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListenableTenants](./method_ListenableTenants)|  获取插件绑定租户接口 |
| [TenantDisable](./method_TenantDisable)|  插件租户停用接口 |
| [TenantEnable](./method_TenantEnable)|  插件租户启用接口 |
| [TMUpdatePluginIdentify](./method_TMUpdatePluginIdentify)|  获取插件绑定租户接口 |
| [TMRegisterPlugin](./method_TMRegisterPlugin)|  手动注册插件接口 |
| [ListPlugin](./method_ListPlugin)|  获取插件列表接口 |
| [GetPlugin](./method_GetPlugin)|  查询插件接口 |
| [UninstallPlugin](./method_UninstallPlugin)|  卸载插件接口 |
| [InstallPlugin](./method_InstallPlugin)|  安装插件接口 |


## RBAC相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListPermissions](./method_ListPermissions)|  list permissions  |
| [TMAddRoleBinding](./method_TMAddRoleBinding)|  TM add policy |
| [TMDeletePolicy](./method_TMDeletePolicy)|  TM delete policy |
| [UpdateUserRoleBinding](./method_UpdateUserRoleBinding)|  create binding to bind user_id with roles |
| [TMAddPolicy](./method_TMAddPolicy)|  TM add policy |
| [ListRole](./method_ListRole)|  list role in tenant  |
| [CreateRole](./method_CreateRole)|  create role in tenant  |
| [CreateRoleBinding](./method_CreateRoleBinding)|  create binding to bind role_id with user_id |
| [DeleteRoleBinding](./method_DeleteRoleBinding)|  delete binding of the bind role_name with user_id |
| [TMDeleteRoleBinding](./method_TMDeleteRoleBinding)|  TM delete policy |
| [CheckRolePermission](./method_CheckRolePermission)|  check role has the permission |
| [GetRole](./method_GetRole)|  Get role in tenant  |
| [DeleteRole](./method_DeleteRole)|  delete role in tenant  |
| [UpdateRole](./method_UpdateRole)|  update role in tenant  |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListAllRepoInstaller](./method_ListAllRepoInstaller)|  获取所有仓库的安装包列表接口 |
| [ListRepoInstaller](./method_ListRepoInstaller)|  获取仓库中安装包列表接口 |
| [ListRepo](./method_ListRepo)|  获取仓库列表接口 |
| [DeleteRepo](./method_DeleteRepo)|  删除仓库接口 |
| [CreateRepo](./method_CreateRepo)|  创建仓库接口 |
| [GetRepoInstaller](./method_GetRepoInstaller)|  获取仓库中指定安装包 |


## [Security] EntityToken相关API

| Name |  Description | 
| ---- |  ----------- | 
| [CreateEntityToken](./method_CreateEntityToken)|  create a entity token |
| [EntityTokenInfo](./method_EntityTokenInfo)|  get a entity token info |
| [DeleteEntityToken](./method_DeleteEntityToken)|  delete a entity token |


## [Security] OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [TokenRevoke](./method_TokenRevoke)|  oauth token revoke with refresh token |
| [OauthAuthorize](./method_OauthAuthorize)|  oauth authorize code with username and password |
| [OauthToken](./method_OauthToken)|  oauth token with code or password |
| [OIDCRegister](./method_OIDCRegister)|  oauth OIDC provider register |
| [ResetPassword](./method_ResetPassword)|  oauth reset user password |
| [OauthAuthenticate](./method_OauthAuthenticate)|  oauth authenticate with header Authorization |
| [UpdatePassword](./method_UpdatePassword)|  oauth update user password |


## [Security] Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ResetPasswordKeyInfo](./method_ResetPasswordKeyInfo)|  get reset user password key info |
| [AddPlugin](./method_AddPlugin)|  add a plugin |
| [ListTenantPlugin](./method_ListTenantPlugin)|  list tenant plugin |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  delete tenant plugin |
| [GetResetPasswordKey](./method_GetResetPasswordKey)|  get reset user password key  |
| [DeleteTenant](./method_DeleteTenant)|  delete a tenant |
| [UpdateTenant](./method_UpdateTenant)|  tenant update |
| [GetTenant](./method_GetTenant)|  get a tenant |
| [TenantByExactSearch](./method_TenantByExactSearch)|  tenant exact search |
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  permissible tenant plugin |
| [ListUser](./method_ListUser)|  list users |
| [CreateUser](./method_CreateUser)|  create a  user at tenant |
| [GetUser](./method_GetUser)|  get a  user |
| [DeleteUser](./method_DeleteUser)|  delete a user |
| [UpdateUser](./method_UpdateUser)|  update user |
| [ListTenant](./method_ListTenant)|  tenant list |
| [CreateTenant](./method_CreateTenant)|  create a tenant |


## authentication相关API

| Name |  Description | 
| ---- |  ----------- | 
| [Authenticate](./method_Authenticate)|  tkeel authenticate with header Authorization |


## config相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetDeploymentConfig](./method_GetDeploymentConfig)|  查询 deployment config 接口 |


## entry相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](./method_GetEntries)|  查询 console entries 接口 |
