exports.up = function (knex) {
  return knex.schema.createTable("ufs", (table) => {
    table.increments("codUf").primary();
    table.string("sigla").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ufs");
};
