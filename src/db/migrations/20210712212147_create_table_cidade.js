exports.up = function (knex) {
  return knex.schema.createTable("cidades", (table) => {
    table.increments("codCidade").primary();
    table.integer("codUf").notNullable();
    table.string("nomeCidade").notNull();

    table.foreign("codUf").references("codUf").inTable("ufs");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cidades");
};
