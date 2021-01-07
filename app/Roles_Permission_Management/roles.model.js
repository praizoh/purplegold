module.exports = (sequelize, Sequelize) =>{
    const Roles = sequelize.define("Roles_table", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
        },
        roleName:{
            type: Sequelize.STRING
        }
    }) 
    return Roles;
}