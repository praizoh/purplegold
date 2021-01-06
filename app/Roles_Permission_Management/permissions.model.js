module.exports = (sequelize, Sequelize) =>{
    const Permission = sequelize.define("Permission_table", {
        permissionId: {
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
    return Permission;
}