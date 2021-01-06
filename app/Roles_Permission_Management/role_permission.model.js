module.exports = (sequelize, Sequelize) =>{
    const Roles_Permission = sequelize.define("Roles_Permission_table", {
        rolePermissionId: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.STRING,
        },
        name:{
            type: Sequelize.STRING
        },
        isActive:{
            type: Sequelize.TEXT('tiny'),
            defaultValue: false,
        }
    }) 
    return Roles_Permission;
}