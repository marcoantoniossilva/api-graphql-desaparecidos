exports.up = function (knex) {
  return knex("ufs").insert([
    { codUf: 1, sigla: "AC" },
    { codUf: 2, sigla: "AL" },
    { codUf: 3, sigla: "AP" },
    { codUf: 4, sigla: "AM" },
    { codUf: 5, sigla: "BA" },
    { codUf: 6, sigla: "CE" },
    { codUf: 7, sigla: "DF" },
    { codUf: 8, sigla: "ES" },
    { codUf: 9, sigla: "GO" },
    { codUf: 10, sigla: "MA" },
    { codUf: 11, sigla: "MT" },
    { codUf: 12, sigla: "MS" },
    { codUf: 13, sigla: "MG" },
    { codUf: 14, sigla: "PA" },
    { codUf: 15, sigla: "PB" },
    { codUf: 16, sigla: "PR" },
    { codUf: 17, sigla: "PE" },
    { codUf: 18, sigla: "PI" },
    { codUf: 19, sigla: "RR" },
    { codUf: 20, sigla: "RO" },
    { codUf: 21, sigla: "RJ" },
    { codUf: 22, sigla: "RN" },
    { codUf: 23, sigla: "RS" },
    { codUf: 24, sigla: "SC" },
    { codUf: 25, sigla: "SP" },
    { codUf: 26, sigla: "SE" },
    { codUf: 27, sigla: "TO" },
  ]);
};

exports.down = function (knex) {
  return knex("ufs").del();
};
