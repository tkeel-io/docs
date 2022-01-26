---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---




## OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [OauthToken](./method_OauthToken)|  oauth token with code or password |
| [OauthAuthenticate](./method_OauthAuthenticate)|  oauth authenticate with header Authorization |
| [OauthAuthorize](./method_OauthAuthorize)|  oauth authorize code with username and password |


## Oauth2相关API

| Name |  Description | 
| ---- |  ----------- | 
| [AddPluginWhiteList](./method_AddPluginWhiteList)|  添加 Plugin 白名单 dapr App ID 接口 |
| [VerifyToken](./method_VerifyToken)|  Token 验证接口 |
| [IssuePluginToken](./method_IssuePluginToken)|  插件 Token 颁发接口 |
| [IssueAdminToken](./method_IssueAdminToken)|  平台管理员 Token 颁发接口 |


## Plugin相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetPlugin](./method_GetPlugin)|  查询插件接口 |
| [UninstallPlugin](./method_UninstallPlugin)|  卸载插件接口 |
| [InstallPlugin](./method_InstallPlugin)|  安装插件接口 |
| [ListenableTenants](./method_ListenableTenants)|  获取插件绑定租户接口 |
| [TenantDisable](./method_TenantDisable)|  插件租户停用接口 |
| [TenantEnable](./method_TenantEnable)|  插件租户启用接口 |
| [ListPlugin](./method_ListPlugin)|  获取插件列表接口 |


## Repo相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetRepoInstaller](./method_GetRepoInstaller)|  获取仓库中指定安装包 |
| [CreateRepo](./method_CreateRepo)|  创建仓库接口 |
| [DeleteRepo](./method_DeleteRepo)|  删除仓库接口 |
| [ListRepoInstaller](./method_ListRepoInstaller)|  获取仓库中安装包列表接口 |
| [ListRepo](./method_ListRepo)|  获取仓库列表接口 |


## Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  permissible tenant plugin |
| [ListUser](./method_ListUser)|  list users |
| [CreateUser](./method_CreateUser)|  create a  user at tenant |
| [GetTenant](./method_GetTenant)|  get a tenant |
| [DeleteTenant](./method_DeleteTenant)|  delete a tenant |
| [ListTenant](./method_ListTenant)|  tenant list |
| [CreateTenant](./method_CreateTenant)|  create a tenant |
| [ListTenantPlugin](./method_ListTenantPlugin)|  list tenant plugin |
| [AddPlugin](./method_AddPlugin)|  add a plugin |
| [DeleteUser](./method_DeleteUser)|  delete a user |
| [UpdateUser](./method_UpdateUser)|  update user |
| [GetUser](./method_GetUser)|  get a  user |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  delete tenant plugin |


## entity token相关API

| Name |  Description | 
| ---- |  ----------- | 
| [DeleteEntityToken](./method_DeleteEntityToken)|  delete a entity token |
| [EntityTokenInfo](./method_EntityTokenInfo)|  get a entity token info |
| [CreateEntityToken](./method_CreateEntityToken)|  create a entity token |


## entry相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetEntries](./method_GetEntries)|  查询 console entries 接口 |


## rbac相关API

| Name |  Description | 
| ---- |  ----------- | 
| [DeleteUserRole](./method_DeleteUserRole)|  delete user role  |
| [ListRole](./method_ListRole)|  list role in tenant  |
| [CreateRole](./method_CreateRole)|  create role in tenant  |
| [DeleteRole](./method_DeleteRole)|  delete role in tenant  |
| [AddUserRoles](./method_AddUserRoles)|  add user roles  |
| [ListUserPermissions](./method_ListUserPermissions)|  list user permissions  |
| [DeleteRolePermission](./method_DeleteRolePermission)|  delete role permission  |
| [AddRolePermission](./method_AddRolePermission)|  add role permission  |
| [ListUserPermissions](./method_ListUserPermissions)|  list user permissions  |
