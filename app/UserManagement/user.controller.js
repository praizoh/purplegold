const User = require("./user.service");
const uuid = require('uuid'); 
const passwordUtils = require("../helpers/passwordUtils");
const jwtTokenUtils = require("../helpers/jwtTokenUtils")
const { signToken } = jwtTokenUtils
// user auth 
exports.signIn = async(req,res)=>{
    const { email, password } = req.body
    const { appType } = req.headers
    try{
        const checkIfUserExists = await User.findUserByEmail(email)
        if(checkIfUserExists.length>0){ 
            // check role and app type if user can login to that app
            let user = checkIfUserExists[0].dataValues
            if(user.isActive===false){
                return res.status(401).send({status:401, message:"Your account has been blocked. Contact the admin"})
            }
            checkAuthAccess = await authAccess(user.roles, appType)
            if(checkAuthAccess==="pass"){
                const { id, firstname, lastname, email, phoneNumber, referralCode, imageUrl, roles, isActive, title } = user
                // check if passwords match 
                const retrievedPassword = user.password
                const isMatch = await passwordUtils.comparePassword(password.toLowerCase(), retrievedPassword)
                if(isMatch){
                    const tokens = signToken(id, firstname, lastname, email, phoneNumber, referralCode, imageUrl, roles, isActive, title) 
                    const data = {id, firstname, lastname, email, phoneNumber, referralCode, imageUrl, roles, isActive, title, token:tokens}
                    res.status(200).send({message:'User login successfully', data:data})
                }else{
                    const message = 'Incorrect username or password'
                    res.status(400).send({message:message})
                }
            }else{
                return res.status(401).send({status:401, message:"You are not allowed to access this app. Contact admin"})
            }
        }else{
            return res.status(400).send({status: 400, message:"Incorrect username or password"})
        }
    }catch(err){
        console.log(err)
        return res.status(500).send({status:500, message:err})
    }
    
}  

async function authAccess(roles, appType) {

    if(appType===PGINVESTOR){
        
    }else if(appType===PGADMIN){

    }else if(appType===PGMKTR){

    }else{
        return "not pass"
    }
    
}

