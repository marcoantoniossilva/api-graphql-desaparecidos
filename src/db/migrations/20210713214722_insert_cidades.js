var faker = require("faker/locale/pt_BR");

exports.up = (knex) => {
  let cidades = [];
  let qtd = 1,
    codUf = 1;
  while (qtd <= 5600) {
    cidades.push({
      codCidade: qtd,
      codUf: codUf,
      nomeCidade: faker.address.city().replace("undefined ", ""),
    });
    qtd++;
    codUf++;
    if (codUf === 28) {
      codUf = 1;
    }
  }
  return knex("cidades").insert(cidades);
};

exports.down = function (knex) {
  return knex("cidades").del();
};
