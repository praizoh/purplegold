const db = require("../Database/sequelize");
const User = db.users;
const Op = db.Sequelize.Op;


exports.fetchUsers = async()=>{
    try{
        const allUsers = await User.findAll()
        return allUsers
    }catch(err){
        return err
    }
}

exports.fetchUserById = async(id)=>{
    try{
        const user = await User.findByPk(id)
        return user
    }catch(err){
        return err
    }
}

exports.deleteUser = async(id)=>{
    try{
        const delUser = await User.destroy({where: {id:id}})
        return delUser
    }catch(err){
        return err
    }
}

exports.findUserByEmail = async(email)=>{
    try{
        const user = await User.findAll({where: {email:email}})
        return user
    }catch(err){
        return err
    }
}

