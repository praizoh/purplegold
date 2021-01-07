module.exports = (sequelize, Sequelize) =>{
    const Plan = sequelize.define("Plan_management_table", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
        },
        plan:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
    }) 
    return Plan;
}