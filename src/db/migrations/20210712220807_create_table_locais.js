exports.up = function (knex) {
  return knex.schema.createTable("locais", (table) => {
    table.increments("codLocal").primary();
    table.integer("codBairro").notNullable();
    table.string("latitude");
    table.string("longitude");

    table.foreign("codBairro").references("codBairro").inTable("bairros");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("locais");
};
