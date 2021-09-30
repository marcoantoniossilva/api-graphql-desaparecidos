exports.up = function (knex) {
  return knex.schema.createTable("pessoas", (table) => {
    table.increments("codPessoa").primary();
    table.string("nome").notNull();
    table.date("dataNascimento");
    table.string("imagem");
    table.enum("sexo", ["F", "M"]);
    table.string("corOlhos");
    table.string("corPele");
    table.string("corCabelo");
    table.float("pesoAproximado");
    table.float("alturaAproximada");
    table.string("tipoFisico");
    table.string("transtornoMental");
    table.string("marcaCaracteristica");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pessoas");
};
