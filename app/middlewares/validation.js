const Joi = require('@hapi/joi')
const validationRules= require('../helpers/validationRules')
const joiValidator = require('../helpers/joiValidatior')

exports.planValidation = async(req,res,next)=>{
    const planSchema = Joi.object().keys({
        plan: validationRules.plan,
        description: validationRules.description,
    });
    const errors = joiValidator(req.body, planSchema)
    if (!errors) {
        return next();
    }
    return res.status(400).send({message:'Bad Request', data:errors, status:400})
}