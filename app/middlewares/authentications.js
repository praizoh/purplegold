const Plan = require('../PlansManagement/plan.service');

exports.planNameExists = async(req,res,next)=>{
    const { plan } = req.body
    try{
        const getPlan = await Plan.findPlanByName(plan);  
        console.log(getPlan)
        if(getPlan.length>0){
            return res.status(400).send({status:400, message:"Plan already exists"})
        }
        return next()
    }catch (err){
        return err
    }
}

exports.planNotValid = async(req,res,next)=>{
    const { id } = req.params
    try{
        const getPlan = await Plan.fetchPlanById(id);  
        if(getPlan == null){
            return res.status(404).send({status:404, message:"Plan does not exist"})
        }
        return next()
    }catch (err){
        return err
    }
}