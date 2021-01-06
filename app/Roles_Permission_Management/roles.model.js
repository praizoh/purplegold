module.exports = (sequelize, Sequelize) =>{
    const Roles = sequelize.define("Roles_table", {
        roleId: {
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
    return Roles;
}