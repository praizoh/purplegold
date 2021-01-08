const  jwt =require('jsonwebtoken');
const dotenv=require('dotenv');

dotenv.config();
 
exports.signToken= (userId, userfirstname, userlastname, userEmail, isAdmin)=> {
    const key = process.env.SECRET_KEY; 
    // console.log(key)
    const token = jwt.sign({ id: userId, email: userEmail, firstname:userfirstname, lastname:userlastname, isAdmin}, key, { expiresIn: '1h' });
    return token;
  }
 
  exports.verifyToken= (req, res, next)=> { 
    const key = process.env.SECRET_KEY;
    const token = req.headers.authorization || req.params.token;
    if (!token) {
      res.status(403).json({ status: 403, error: 'No token provided' }); 
    }else{
      jwt.verify(token, key, (error, decoded) => {
        if (error) {
          console.log(error)
          res.status(401).json({message:'Unauthorised'}) 
        }else{
          req.decoded = decoded;
          next();
        } 
       
      });
    }
    
  }