var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let bairros = [];
  let qtd = 1,
    codCidade = 1;
  while (qtd <= 20000) {
    bairros.push({
      codBairro: qtd,
      codCidade: codCidade,
      nomeBairro: faker.address.city().replace("undefined ", ""),
    });
    qtd++;
    codCidade++;
    if (codCidade === 5600) {
      codCidade = 1;
    }
  }
  return knex("bairros").insert(bairros);
};

exports.down = function (knex) {
  return knex("bairros").del();
};
