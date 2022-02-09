---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [AddPluginWhiteList](./method_AddPluginWhiteList)|  添加 Plugin 白名单 dapr App ID 接口 |
| [IssuePluginToken](./method_IssuePluginToken)|  插件 Token 颁发接口 |
| [IssueAdminToken](./method_IssueAdminToken)|  平台管理员 Token 颁发接口 |
| [VerifyToken](./method_VerifyToken)|  Token 验证接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListenableTenants](./method_ListenableTenants)|  获取插件绑定租户接口 |
| [TenantDisable](./method_TenantDisable)|  插件租户停用接口 |
| [TenantEnable](./method_TenantEnable)|  插件租户启用接口 |
| [GetPlugin](./method_GetPlugin)|  查询插件接口 |
| [UninstallPlugin](./method_UninstallPlugin)|  卸载插件接口 |
| [InstallPlugin](./method_InstallPlugin)|  安装插件接口 |
| [ListPlugin](./method_ListPlugin)|  获取插件列表接口 |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListRepo](./method_ListRepo)|  获取仓库列表接口 |
| [DeleteRepo](./method_DeleteRepo)|  删除仓库接口 |
| [CreateRepo](./method_CreateRepo)|  创建仓库接口 |
| [ListRepoInstaller](./method_ListRepoInstaller)|  获取仓库中安装包列表接口 |
| [GetRepoInstaller](./method_GetRepoInstaller)|  获取仓库中指定安装包 |
| [ListAllRepoInstaller](./method_ListAllRepoInstaller)|  获取所有仓库的安装包列表接口 |


## [Security] EntityToken相关API

| Name |  Description | 
| ---- |  ----------- | 
| [EntityTokenInfo](./method_EntityTokenInfo)|  get a entity token info |
| [CreateEntityToken](./method_CreateEntityToken)|  create a entity token |
| [DeleteEntityToken](./method_DeleteEntityToken)|  delete a entity token |


## [Security] OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ResetPassword](./method_ResetPassword)|  oauth reset user password |
| [OauthAuthenticate](./method_OauthAuthenticate)|  oauth authenticate with header Authorization |
| [OauthToken](./method_OauthToken)|  oauth token with code or password |
| [OauthAuthorize](./method_OauthAuthorize)|  oauth authorize code with username and password |


## [Security] RBAC相关API

| Name |  Description | 
| ---- |  ----------- | 
| [DeleteRole](./method_DeleteRole)|  delete role in tenant  |
| [AddRolePermission](./method_AddRolePermission)|  add role permission  |
| [DeleteRolePermission](./method_DeleteRolePermission)|  delete role permission  |
| [AddRolePermissionList](./method_AddRolePermissionList)|  add role permission list |
| [DeleteUserRole](./method_DeleteUserRole)|  delete user role  |
| [AddUserRoles](./method_AddUserRoles)|  add user roles  |
| [ListUserPermissions](./method_ListUserPermissions)|  list user permissions  |
| [ListUserPermissions](./method_ListUserPermissions)|  list user permissions  |
| [CreateRole](./method_CreateRole)|  create role in tenant  |
| [ListRole](./method_ListRole)|  list role in tenant  |


## [Security] Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetTenant](./method_GetTenant)|  get a tenant |
| [DeleteTenant](./method_DeleteTenant)|  delete a tenant |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  delete tenant plugin |
| [ListUser](./method_ListUser)|  list users |
| [CreateUser](./method_CreateUser)|  create a  user at tenant |
| [UpdateUser](./method_UpdateUser)|  update user |
| [GetUser](./method_GetUser)|  get a  user |
| [DeleteUser](./method_DeleteUser)|  delete a user |
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  permissible tenant plugin |
| [GetResetPasswordKey](./method_GetResetPasswordKey)|  get reset user password key  |
| [ListTenant](./method_ListTenant)|  tenant list |
| [CreateTenant](./method_CreateTenant)|  create a tenant |
| [ResetPasswordKeyInfo](./method_ResetPasswordKeyInfo)|  get reset user password key info |
| [ListTenantPlugin](./method_ListTenantPlugin)|  list tenant plugin |
| [AddPlugin](./method_AddPlugin)|  add a plugin |


## authentication相关API

| Name |  Description | 
| ---- |  ----------- | 
| [Authenticate](./method_Authenticate)|  tkeel authenticate with header Authorization |


## entry相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](./method_GetEntries)|  查询 console entries 接口 |
