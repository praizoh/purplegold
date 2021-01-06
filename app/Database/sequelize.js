const Sequelize = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../UserManagement/user.model")(sequelize, Sequelize);

module.exports = db;