module.exports = (sequelize, Sequelize) =>{
    const Roles_Permission = sequelize.define("Roles_Permission_table", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
        },
        roleId:{
            type: Sequelize.INTEGER
        },
        permissionId:{
            type: Sequelize.INTEGER
        }
        
    }) 
    return Roles_Permission;
}