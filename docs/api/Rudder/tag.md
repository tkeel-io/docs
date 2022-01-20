---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## security OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [OauthToken](/api/Rudder/method_OauthToken.md)|  oauth token with code or password |
| [OauthAuthorize](/api/Rudder/method_OauthAuthorize.md)|  oauth authorize code with username and password |
| [OauthAuthenticate](/api/Rudder/method_OauthAuthenticate.md)|  oauth authenticate with header Authorization |


## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [VerifyToken](/api/Rudder/method_VerifyToken.md)|  Token 验证接口 |
| [IssueAdminToken](/api/Rudder/method_IssueAdminToken.md)|  平台管理员 Token 颁发接口 |
| [IssuePluginToken](/api/Rudder/method_IssuePluginToken.md)|  插件 Token 颁发接口 |
| [AddPluginWhiteList](/api/Rudder/method_AddPluginWhiteList.md)|  添加 Plugin 白名单 dapr App ID 接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListPlugin](/api/Rudder/method_ListPlugin.md)|  获取插件列表接口 |
| [UnregisterPlugin](/api/Rudder/method_UnregisterPlugin.md)|  注销插件接口 |
| [RegisterPlugin](/api/Rudder/method_RegisterPlugin.md)|  注册插件接口 |
| [BindTenants](/api/Rudder/method_BindTenants.md)|  插件绑定租户接口 |
| [ListBindTenants](/api/Rudder/method_ListBindTenants.md)|  获取插件绑定租户接口 |
| [UnindTenants](/api/Rudder/method_UnindTenants.md)|  插件绑定租户接口 |
| [GetPlugin](/api/Rudder/method_GetPlugin.md)|  查询插件接口 |
| [UninstallPlugin](/api/Rudder/method_UninstallPlugin.md)|  卸载插件接口 |
| [InstallPlugin](/api/Rudder/method_InstallPlugin.md)|  安装插件接口 |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetRepoInstaller](/api/Rudder/method_GetRepoInstaller.md)|  获取仓库中指定安装包 |
| [ListRepo](/api/Rudder/method_ListRepo.md)|  获取仓库列表接口 |
| [DeleteRepo](/api/Rudder/method_DeleteRepo.md)|  删除仓库接口 |
| [CreateRepo](/api/Rudder/method_CreateRepo.md)|  创建仓库接口 |
| [ListRepoInstaller](/api/Rudder/method_ListRepoInstaller.md)|  获取仓库中安装包列表接口 |


## security Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetUser](/api/Rudder/method_GetUser.md)|  get a  user |
| [DeleteUser](/api/Rudder/method_DeleteUser.md)|  delete a user |
| [ListTenantPlugin](/api/Rudder/method_ListTenantPlugin.md)|  list tenant plugin |
| [AddPlugin](/api/Rudder/method_AddPlugin.md)|  add a plugin |
| [DeleteTenantPlugin](/api/Rudder/method_DeleteTenantPlugin.md)|  delete tenant plugin |
| [PermissibleTenantPlugin](/api/Rudder/method_PermissibleTenantPlugin.md)|  permissible tenant plugin |
| [GetTenant](/api/Rudder/method_GetTenant.md)|  get a tenant |
| [DeleteTenant](/api/Rudder/method_DeleteTenant.md)|  delete a tenant |
| [ListTenant](/api/Rudder/method_ListTenant.md)|  tenant list |
| [CreateTenant](/api/Rudder/method_CreateTenant.md)|  create a tenant |
| [ListUser](/api/Rudder/method_ListUser.md)|  list users |
| [CreateUser](/api/Rudder/method_CreateUser.md)|  create a  user at tenant |


## security entity token相关API

| Name |  Description | 
| ---- |  ----------- | 
| [EntityTokenInfo](/api/Rudder/method_EntityTokenInfo.md)|  get a entity token info |
| [DeleteEntityToken](/api/Rudder/method_DeleteEntityToken.md)|  delete a entity token |
| [CreateEntityToken](/api/Rudder/method_CreateEntityToken.md)|  create a entity token |


## entry相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](/api/Rudder/method_GetEntries.md)|  查询 console entries 接口 |


## security rbac相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListRole](/api/Rudder/method_ListRole.md)|  list role in tenant  |
| [CreateRole](/api/Rudder/method_CreateRole.md)|  create role in tenant  |
| [ListUserPermissions](/api/Rudder/method_ListUserPermissions.md)|  list user permissions  |
| [DeleteRolePermission](/api/Rudder/method_DeleteRolePermission.md)|  delete role permission  |
| [AddRolePermission](/api/Rudder/method_AddRolePermission.md)|  add role permission  |
| [DeleteUserRole](/api/Rudder/method_DeleteUserRole.md)|  delete user role  |
| [DeleteRole](/api/Rudder/method_DeleteRole.md)|  delete role in tenant  |
| [ListUserPermissions](/api/Rudder/method_ListUserPermissions.md)|  list user permissions  |
| [AddUserRoles](/api/Rudder/method_AddUserRoles.md)|  add user roles  |
