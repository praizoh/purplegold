const Sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../UserManagement/user.model")(sequelize, Sequelize);
db.roles = require("../Roles_Permission_Management/roles.model")(sequelize, Sequelize);
db.permissions = require("../Roles_Permission_Management/permissions.model")(sequelize, Sequelize);
db.role_permission = require("../Roles_Permission_Management/role_permission.model")(sequelize, Sequelize);

module.exports = db;