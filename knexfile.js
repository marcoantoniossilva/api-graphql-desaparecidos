module.exports = {
  client: "mysql",
  connection: {
    database: "relembrar",
    user: "root",
    password: "",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};
