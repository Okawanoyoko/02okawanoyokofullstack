const config = require("./knexfile");
const knex = require("knex");
const envSwitch = process.env.NODE.ENV || "development";
const db = knex(config.environment);
// const productionDB = knex(config.production);

// module.exports = db ? db : productionDB;
module.exports = db;
