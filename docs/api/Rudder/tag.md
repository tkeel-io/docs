---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [OauthToken](docs/api/Rudder/method_OauthToken.md)|  oauth token with code or password |
| [OauthAuthorize](docs/api/Rudder/method_OauthAuthorize.md)|  oauth authorize code with username and password |
| [OauthAuthenticate](docs/api/Rudder/method_OauthAuthenticate.md)|  oauth authenticate with header Authorization |


## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [VerifyToken](docs/api/Rudder/method_VerifyToken.md)|  Token 验证接口 |
| [IssueAdminToken](docs/api/Rudder/method_IssueAdminToken.md)|  平台管理员 Token 颁发接口 |
| [IssuePluginToken](docs/api/Rudder/method_IssuePluginToken.md)|  插件 Token 颁发接口 |
| [AddPluginWhiteList](docs/api/Rudder/method_AddPluginWhiteList.md)|  添加 Plugin 白名单 dapr App ID 接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListPlugin](docs/api/Rudder/method_ListPlugin.md)|  获取插件列表接口 |
| [UnregisterPlugin](docs/api/Rudder/method_UnregisterPlugin.md)|  注销插件接口 |
| [RegisterPlugin](docs/api/Rudder/method_RegisterPlugin.md)|  注册插件接口 |
| [BindTenants](docs/api/Rudder/method_BindTenants.md)|  插件绑定租户接口 |
| [ListBindTenants](docs/api/Rudder/method_ListBindTenants.md)|  获取插件绑定租户接口 |
| [UnindTenants](docs/api/Rudder/method_UnindTenants.md)|  插件绑定租户接口 |
| [GetPlugin](docs/api/Rudder/method_GetPlugin.md)|  查询插件接口 |
| [UninstallPlugin](docs/api/Rudder/method_UninstallPlugin.md)|  卸载插件接口 |
| [InstallPlugin](docs/api/Rudder/method_InstallPlugin.md)|  安装插件接口 |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetRepoInstaller](docs/api/Rudder/method_GetRepoInstaller.md)|  获取仓库中指定安装包 |
| [ListRepo](docs/api/Rudder/method_ListRepo.md)|  获取仓库列表接口 |
| [DeleteRepo](docs/api/Rudder/method_DeleteRepo.md)|  删除仓库接口 |
| [CreateRepo](docs/api/Rudder/method_CreateRepo.md)|  创建仓库接口 |
| [ListRepoInstaller](docs/api/Rudder/method_ListRepoInstaller.md)|  获取仓库中安装包列表接口 |


## Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetUser](docs/api/Rudder/method_GetUser.md)|  get a  user |
| [DeleteUser](docs/api/Rudder/method_DeleteUser.md)|  delete a user |
| [ListTenantPlugin](docs/api/Rudder/method_ListTenantPlugin.md)|  list tenant plugin |
| [AddPlugin](docs/api/Rudder/method_AddPlugin.md)|  add a plugin |
| [DeleteTenantPlugin](docs/api/Rudder/method_DeleteTenantPlugin.md)|  delete tenant plugin |
| [PermissibleTenantPlugin](docs/api/Rudder/method_PermissibleTenantPlugin.md)|  permissible tenant plugin |
| [GetTenant](docs/api/Rudder/method_GetTenant.md)|  get a tenant |
| [DeleteTenant](docs/api/Rudder/method_DeleteTenant.md)|  delete a tenant |
| [ListTenant](docs/api/Rudder/method_ListTenant.md)|  tenant list |
| [CreateTenant](docs/api/Rudder/method_CreateTenant.md)|  create a tenant |
| [ListUser](docs/api/Rudder/method_ListUser.md)|  list users |
| [CreateUser](docs/api/Rudder/method_CreateUser.md)|  create a  user at tenant |


## entity token相关API

| Name |  Description | 
| ---- |  ----------- | 
| [EntityTokenInfo](docs/api/Rudder/method_EntityTokenInfo.md)|  get a entity token info |
| [DeleteEntityToken](docs/api/Rudder/method_DeleteEntityToken.md)|  delete a entity token |
| [CreateEntityToken](docs/api/Rudder/method_CreateEntityToken.md)|  create a entity token |


## entry相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](docs/api/Rudder/method_GetEntries.md)|  查询 console entries 接口 |


## rbac相关API

| Name |  Description | 
| ---- |  ----------- | 
| [ListRole](docs/api/Rudder/method_ListRole.md)|  list role in tenant  |
| [CreateRole](docs/api/Rudder/method_CreateRole.md)|  create role in tenant  |
| [ListUserPermissions](docs/api/Rudder/method_ListUserPermissions.md)|  list user permissions  |
| [DeleteRolePermission](docs/api/Rudder/method_DeleteRolePermission.md)|  delete role permission  |
| [AddRolePermission](docs/api/Rudder/method_AddRolePermission.md)|  add role permission  |
| [DeleteUserRole](docs/api/Rudder/method_DeleteUserRole.md)|  delete user role  |
| [DeleteRole](docs/api/Rudder/method_DeleteRole.md)|  delete role in tenant  |
| [ListUserPermissions](docs/api/Rudder/method_ListUserPermissions.md)|  list user permissions  |
| [AddUserRoles](docs/api/Rudder/method_AddUserRoles.md)|  add user roles  |
