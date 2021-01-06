const uuid = require('uuid/v4');
module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("User_management_table", {
        userId: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            
        },
        fullname:{
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
        otp:{
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
        isAdmin:{
            type: Sequelize.TEXT('tiny')
        }
    }) 
    return User;
}