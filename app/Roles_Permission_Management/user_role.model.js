module.exports = (sequelize, Sequelize) =>{
    const User_Role = sequelize.define("User_Role_table", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
        },
        roleId:{
            type: Sequelize.STRING
        },
        userId:{
            type: Sequelize.STRING
        }
        
    }) 

    User_Role.associate = (models) => {
        User_Role.belongsTo(models.users, {foreignKey: 'userId'})
        User_Role.belongsTo(models.roles, {foreignKey: 'roleId'})
    }
    return User_Role;
}