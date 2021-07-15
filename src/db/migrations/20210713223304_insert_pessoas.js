var faker = require("faker/locale/pt_BR");

exports.up = function (knex) {
  let pessoas = [];
  let qtd = 1;
  const sexo = "FM";
  const corOlhos = [
    "Azul",
    "Verde",
    "Preto",
    "Castanho",
    "Castanho Claro",
    "Castanho Claro",
  ];
  const corCabelo = ["Preto", "Castanho", "Ruivo", "Loiro", "Branco"];
  const corPele = ["Preto", "Castanho", "Ruivo", "Loiro", "Branco"];
  const tipoFisico = ["Desnutrido", "Normal", "Sobrepeso", "Obeso"];
  const transtornosMentais = [
    "Depressão",
    "Síndrome do pânico",
    "Nenhum",
    "Esquizofrenia",
  ];
  const prefMarca = ["Mancha", "Cicatriz", "Tatuagem"];
  const sufMarca = [
    "perna direita",
    "perna esqueda",
    "braço direito",
    "braço direito",
  ];

  while (qtd <= 3000) {
    pessoas.push({
      nome: faker.name.findName(),
      dataNascimento: new Date(
        faker.date.past() - faker.datatype.number(1000000000000)
      ),
      imagem: faker.image.avatar(),
      sexo: sexo.charAt(Math.floor(Math.random() * sexo.length)),
      corOlhos: corOlhos[Math.floor(Math.random() * corOlhos.length)],
      corPele: corPele[Math.floor(Math.random() * corPele.length)],
      corCabelo: corPele[Math.floor(Math.random() * corCabelo.length)],
      pesoAproximado: Math.trunc(Math.random() * (110 - 45) + 45),
      alturaAproximada: parseFloat(Math.random() * (2 - 1.5) + 1.5).toFixed(2),
      tipoFisico: tipoFisico[Math.floor(Math.random() * tipoFisico.length)],
      transtornoMental:
        transtornosMentais[
          Math.floor(Math.random() * transtornosMentais.length)
        ],
      marcaCaracteristica:
        prefMarca[Math.floor(Math.random() * prefMarca.length)] +
        " em " +
        sufMarca[Math.floor(Math.random() * sufMarca.length)],
    });
    qtd++;
  }
  return knex("pessoas").insert(pessoas);
};

exports.down = function (knex) {
  return knex("pessoas").del();
};
