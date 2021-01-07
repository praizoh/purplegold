const db = require("../Database/sequelize");
const roles = db.roles;
const permissions = db.permissions;
const role_permission = db.role_permission;
const Op = db.Sequelize.Op;

exports.postRole = async(newRole)=>{
    try{
        const createRole = await roles.create(newRole);
        return createRole;
    }catch(err){
        console.log(err)
        return err
    }
}

exports.postPermissions = async(permission)=>{
    try{
        const createPermissions = await permissions.create(permission);
        return createPermissions;
    }catch(err){
        console.log(err)
        return err
    }
} 

exports.postRolePermission = async(rolePermission)=>{
    try{
        const createRolePermission = await role_permission.create(rolePermission);
        return createRolePermission;
    }catch(err){
        console.log(err)
        return err
    }
}

exports.updateRole = async(roleName,roleId)=>{
    try{
        let name = { roleName }
        const updateRole = await roles.update(name, {where: {id : roleId}})
        return updateRole;
    }catch(err){
        return err;
    }
}

exports.updatePermission = async(permissionName, permissionId)=>{
    try{
        let name = { permissionName }
        const updatePermission = await permissions.update(name, {where: {id : permissionId}})
        return updatePermission;
    }catch(err){
        return err;
    }
}


exports.updateRolePermission = async(roleId, permissionId, rolePermissionId)=>{
    const rolePermission = {
        roleId, 
        permissionId
    }
    try{
        const updatePermission = await role_permission.update(rolePermission, {where: {id : rolePermissionId}})
        return updatePermission;
    }catch(err){
        return err;
    }
}

exports.fetchRoles = async()=>{
    try{
        const allRoles = await roles.findAll()
        return allRoles
    }catch(err){
        return err
    }
}

exports.fetchPermissions = async()=>{
    try{
        const allPermissions = await permissions.findAll()
        return allPermissions 
    }catch(err){
        return err 
    }
}

exports.fetchRolePermissions = async()=>{
    try{
        const rolepermissions = await role_permission.findAll()
        return rolepermissions
    }catch(err){
        return err
    }
}

exports.deleteRole = async(id)=>{
    try{
        const delRole = await roles.destroy({where: {id:id}})
        return delRole
    }catch(err){
        return err
    }
}

exports.deletePermissions = async(id)=>{
    try{
        const delPermission = await permissions.destroy({where: {id:id}})
        return delPermission
    }catch(err){
        return err
    }
}

exports.deleteRolePermission = async(id)=>{
    try{
        const delRolePermission = await role_permission.destroy({where: {id:id}})
        return delRolePermission
    }catch(err){
        return err
    }
}
