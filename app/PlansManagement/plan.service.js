const db = require("../Database/sequelize");
const Plan = db.Plan;
const Op = db.Sequelize.Op;

exports.postPlan = async(newPlan)=>{
    try{
        const createPlan = await Plan.create(newPlan);
        return createPlan;
    }catch(err){
        console.log(err)
        return err
    }
}


exports.updatePlan = async(plan,planId)=>{
    try{
        const updatePlan = await Plan.update(plan, {where: {id : planId}})
        return updatePlan;
    }catch(err){
        return err;
    }
}


exports.fetchPlans = async()=>{
    try{
        const allPlans = await Plan.findAll()
        return allPlans
    }catch(err){
        return err
    }
}

exports.fetchPlanById = async(id)=>{
    try{
        const plan = await Plan.findByPk(id)
        return plan
    }catch(err){
        return err
    }
}

exports.deletePlan = async(id)=>{
    try{
        const delPlan = await Plan.destroy({where: {id:id}})
        return delPlan
    }catch(err){
        return err
    }
}

exports.findPlanByName = async(name)=>{
    try{
        const plan = await Plan.findAll({where: {plan:name}})
        return plan
    }catch(err){
        return err
    }
}

