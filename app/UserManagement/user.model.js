// const uuid = require('uuid/v4');
module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("User_management_table", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            
        },
        firstname:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        phoneNumber:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        referralCode:{
            type: Sequelize.STRING
        },
        securityQuestion:{
            type: Sequelize.STRING
        },
        securityQuestionAnswer:{
            type: Sequelize.STRING
        },
        stateOfResidence:{
            type: Sequelize.STRING
        },
        houseAddress: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        accountName: {
            type: Sequelize.STRING
        },
        bank: {
            type: Sequelize.STRING
        },
        accountNumber: {
            type: Sequelize.STRING
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        roles: {
            type: Sequelize.STRING
        },
        isActive:{
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        }
        
    }) 

    User.associate = (models) => {
        User.belongsToMany(models.roles, {through:'user_role', foreignKey: 'userId', as: 'roles', timestamps:false})
    }
    return User;
}