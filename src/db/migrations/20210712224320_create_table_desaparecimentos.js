exports.up = function (knex) {
  return knex.schema.createTable("desaparecimentos", (table) => {
    table.increments("codDesaparecimento").primary();
    table.integer("codPessoa").unsigned().notNullable();
    table.integer("codLocal").unsigned().notNullable();
    table.date("dataDesaparecimento");

    table.text("informacoes");
    table.string("fonte");
    table.boolean("boletimOcorrencia");
    table.time("ultimaHoraVista");

    table.foreign("codPessoa").references("codPessoa").inTable("pessoas");
    table.foreign("codLocal").references("codLocal").inTable("locais");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("desaparecimentos");
};
