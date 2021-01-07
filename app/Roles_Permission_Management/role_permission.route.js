module.exports = app=>{
    const rolePermission = require("../Roles_Permission_Management/role_permission.controller");
    const { createRole, createPermission, createRolePermisssion, updateRole, updatePermission, findAllRole, updateRolePermission, findAllPermission, findAllRolePermission, deleteRole, deletePermissions, deleteRolePermission } = rolePermission;

    app.post("/role", createRole); 
    app.post("/permission", createPermission); 
    app.post("/role_permission", createRolePermisssion); 
    app.get("/role", findAllRole); 
    app.get("/permission", findAllPermission); 
    app.get("/role_permission", findAllRolePermission); 
    app.put("/role", updateRole); 
    app.put("/permission", updatePermission); 
    app.put("/role_permission", updateRolePermission); 
    app.delete("/role/:roleId", deleteRole); 
    app.delete("/permission/:permissionId", deletePermissions); 
    app.delete("/role_permission/:rolePermissionId", deleteRolePermission); 
}