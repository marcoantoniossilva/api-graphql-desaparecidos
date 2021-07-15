var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let locais = [];
  let qtd = 1,
    codBairro = 1;
  while (qtd <= 20000) {
    locais.push({
      codLocal: qtd,
      codBairro: codBairro,
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    });
    qtd++;
    codBairro++;
    if (codBairro === 20000) {
      codBairro = 1;
    }
  }
  return knex("locais").insert(locais);
};

exports.down = function (knex) {
  return knex("locais").del();
};
