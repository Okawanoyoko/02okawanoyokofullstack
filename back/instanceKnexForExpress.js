const config = require("./knexfile");
const knex = require("knex");
const db = knex(config.development);
const productionDB = knex(config.production);

module.exports = db || productionDB;
