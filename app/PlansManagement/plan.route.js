module.exports = app=>{
    const Plan = require("./plan.controller");
    const validation = require("../middlewares/validation")
    const auth = require("../middlewares/authentications")
    const {createPlan, updatePlan, findAllPlans, findPlanById, deletePlans } = Plan;
    const { planValidation } = validation
    const { planNameExists, planNotValid } = auth

    app.post("/plan", planValidation, planNameExists, createPlan); 
    app.patch("/plan", planValidation, updatePlan); 
    app.get("/plan", findAllPlans); 
    app.get("/plan/:planId", findPlanById); 
    app.delete("/plan/:planId", planNotValid, deletePlans); 
}