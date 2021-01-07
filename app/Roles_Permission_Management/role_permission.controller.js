const RolePermission = require("./role_permission.service")

// CREATE A NEW ROLE
exports.createRole = async(req,res)=>{
    const { roleName } = req.body

    if(!roleName){
        return res.status(400).send({status: 400, message:"Role name cannot be empty"})
    }

    const role = {
        roleName : roleName
    }

    try{
        const newRole = await RolePermission.postRole(role)
        if(newRole.id){
            return res.status(201).send({status:201, message:"role created successfuly", data:newRole})
        }else{
            return res.status(500).send({status:500, message:newRole})
        }
        
    }catch(err){
        console.log(err)
        return res.status(500).send({status:500, message:err})
    }
}

// CREATE A NEW PERMISSION
exports.createPermission = async(req,res)=>{
    const {permissionName} = req.body

    if(!permissionName){
        return res.status(400).send({status:400, message:"Persmission name cannot be empty"})
    }

    const permission = {
        permissionName : permissionName
    }

    try{
        const newPermission = await RolePermission.postPermissions(permission)
        if(newPermission.id){
            return res.status(201).send({status:201, message:"Permission created successfully", data:newPermission})
        }else{
            return res.status(500).send({status:500, message:newPermission})
        }
    }catch(err){
        return res.status(500).send({status:500, message:err})
    }
}

// CREATE A NEW ROLE PERMISSION
exports.createRolePermisssion = async(req,res)=>{
    const {roleId, permissionId} = req.body

    const rolePermission = {
        roleId,
        permissionId
    }
    try{
        const newRolePermission = await RolePermission.postRolePermission(rolePermission)
        if(newRolePermission.id){
            return res.status(201).send({status:201, message:"Role-permission created successfully", date:newRolePermission})
        }else{
            return res.status(500).send({status:500, message:newRolePermission})
        }
    }catch(err){
        return res.status(500).send({status:500, message:err})
    }
} 

exports.updateRole = async(req,res)=>{
    const {roleName, roleId}= req.body

    try{
        const updateRole = await RolePermission.updateRole(roleName, roleId);
        res.status(200).send({status:200, message:"Role updated successfully", data:updateRole})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.updatePermission = async(req,res)=>{
    const {permissionName, permissionId}= req.body

    try{
        const updatePermission = await RolePermission.updatePermission(permissionName, permissionId);
        res.status(200).send({status:200, message:"Permission updated successfully", data:updatePermission})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.updateRolePermission = async(req,res)=>{
    const {roleId, permissionId, rolePermissionId}= req.body

    try{
        const update = await RolePermission.updateRolePermission(roleId, permissionId, rolePermissionId);
        res.status(200).send({status:200, message:"Role-Permission updated successfully", data:update})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.findAllRole = async(req,res)=>{
    try{
        const roles = await RolePermission.fetchRoles();
        return res.status(200).send({status:200, message:"Roles fetched", data:roles})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.findAllPermission = async(req,res)=>{
    try{
        const permissions =  await RolePermission.fetchPermissions();
        return res.status(200).send({status:200, message:"Permissions fetched", data:permissions})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.findAllRolePermission = async(req,res)=>{
    try{
        const rolePermissions = await RolePermission.fetchRolePermissions();
        return res.status(200).send({status:200, message:"Role-Permissions fetched", data:rolePermissions})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.deleteRole = async(req,res)=>{
    try{
        const { roleId } = req.params
        const delRole = await RolePermission.deleteRole(roleId);
        return res.status(200).send({status:200, message:"Role successfully deleted", data:delRole})
    }catch(err){
        return res.status(500).send({status:500, message:err});
    }
}

exports.deletePermissions = async(req,res)=>{
    try{
        const { permissionId } = req.params
        const delPermission = await RolePermission.deletePermissions(permissionId);
        return res.status(200).send({status:200, message:"Permission successfully deleted", data:delPermission})
    }catch(err){
        return res.status(500).send({status:500, message:err});
    }
}

exports.deleteRolePermission = async(req,res)=>{
    const { rolePermissionId } = req.params
    try{
        const delRolePermission = await RolePermission.deleteRolePermission(rolePermissionId);
        return res.status(200).send({status:200, message:"Role Permission successfully deleted", data:delRolePermission})
    }catch(err){
        return res.status(500).send({status:500, message:err});
    }
}