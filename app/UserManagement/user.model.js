// const uuid = require('uuid/v4');
module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("User_management_table", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            
        },
        firstname:{
            type: Sequelize.STRING
        },
        lastname:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        phoneNumber:{
            type: Sequelize.STRING
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
    return User;
}