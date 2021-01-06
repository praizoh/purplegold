const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const cors = require("cors");
app.use(cors()); 


require("./app/UserManagement/user.route")(app) 

const db = require("./app/Database/sequelize");
db.sequelize.sync();


// Connect to port
const port = process.env.PORT || 3000     

app.listen(port, ()=> console.log(`listening on port ${port}...`));    