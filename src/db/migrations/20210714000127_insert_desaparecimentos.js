var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let desaparecimentos = [];
  let qtd = 1;
  const fonte = ["Mãe", "Pai", "Vizinho", "Tio", "Amigo"];

  while (qtd <= 3000) {
    desaparecimentos.push({
      codDesaparecimento: qtd,
      codPessoa: qtd,
      codLocal: qtd,
      dataDesaparecimento: new Date(
        faker.date.past() - faker.datatype.number(10000000000)
      ),
      informacoes: faker.lorem.paragraph(),
      fonte: fonte[Math.floor(Math.random() * fonte.length)],
      boletimOcorrencia: faker.datatype.number(1),
      ultimaHoraVista: new Date(
        faker.date.past() - faker.datatype.number(10000000000)
      ),
    });
    qtd++;
  }
  return knex("desaparecimentos").insert(desaparecimentos);
};

exports.down = function (knex) {
  return knex("desaparecimentos").del();
};
