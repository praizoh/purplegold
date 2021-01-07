const Plan = require("./plan.service")
const uuid = require('uuid'); 

exports.createPlan = async(req,res)=>{
    const data = req.body
    data.id = uuid.v4();
    try{
        const newPlan = await Plan.postPlan(data)
        if(newPlan.id){
            return res.status(201).send({status:201, message:"plan created successfuly", data:newPlan})
        }else{
            return res.status(500).send({status:500, message:newPlan})
        }
        
    }catch(err){
        console.log(err)
        return res.status(500).send({status:500, message:err})
    }
}

exports.updatePlan = async(req,res)=>{
    const data= req.body
    const { planId } = req.body
    try{
        const updatePlan = await Plan.updatePlan(data, planId);
        res.status(200).send({status:200, message:"Plan updated successfully", data:updatePlan})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.findAllPlans = async(req,res)=>{
    try{
        const plans = await Plan.fetchPlans();
        return res.status(200).send({status:200, message:"Plans fetched", data:plans})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}

exports.findPlanById = async(req,res)=>{
    try{
        const { planId } = req.params
        const plan = await Plan.fetchPlanById(planId);  
        if(plan===null){
            return res.status(404).send({status:404, message:"Plan does not exist"})
        }
        return res.status(200).send({status:200, message:"Plan fetched", data:plan})
    }catch(err){
        res.status(500).send({status:500, message:err})
    }
}


exports.deletePlans = async(req,res)=>{
    try{
        const { planId } = req.params
        const delPlan = await Plan.deletePlan(planId);
        return res.status(200).send({status:200, message:"Plan successfully deleted", data:delPlan})
    }catch(err){
        return res.status(500).send({status:500, message:err});
    }
}

