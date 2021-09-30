exports.up = function (knex) {
  return knex.schema.createTable("bairros", (table) => {
    table.increments("codBairro").primary();
    table.integer("codCidade").unsigned().notNullable();
    table.string("nomeBairro").notNull();

    table.foreign("codCidade").references("codCidade").inTable("cidades");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bairros");
};
