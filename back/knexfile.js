// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "postgres",
    connection: {
      database:
       "mydatabase_4755",
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  //   production: {
  //     client: "pg",
  //     connection: {
  //       port: process.env.DB_PORT || 3000,
  //       host: process.env.DB_HOST,
  //       user: process.env.DB_USER,
  //       port: process.env.DB_PORT,
  //       database: process.env.DB_NAME,
  //     },
  //     migrations: {
  //       directory: "./data/migrations",
  //     },
  //     seeds: {
  //       directory: "./data/seeds",
  //     },
  //   },

  // staging: {
  //   client: "postgresql",

  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
};
