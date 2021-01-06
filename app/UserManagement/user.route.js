module.exports = app =>{
    const user = require("../UserManagement/user.controller")

    app.get("/", (req,res)=>{
        res.status(200).send('An Investment System')
    })
    

}