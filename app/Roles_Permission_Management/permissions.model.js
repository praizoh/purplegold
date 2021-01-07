module.exports = (sequelize, Sequelize) =>{
    const Permission = sequelize.define("Permission_table", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
        },
        permissionName:{
            type: Sequelize.STRING
        }
    }) 
    return Permission;
}