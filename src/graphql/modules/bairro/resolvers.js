const db = require("../../../db");
module.exports = {
  Query: {
    bairros: async () => await db("bairros"),
    bairro: async (_, { codBairro }) =>
      await db("bairros").where({ codBairro }).first(),
  },
  Mutation: {
    criarBairro: async (_, { data }) => await db("bairros").insert(data),
    atualizarBairro: async (_, { codBairro, data }) =>
      await db("bairros").where({ codBairro }).update(data),
    deletarBairro: async (_, { codBairro }) => {
      await db("bairros").where({ codBairro: codBairro }).delete();
    },
  },
  Bairro: {
    cidade(bairro) {
      // bairro = objeto com atributo faltante (Bairro)
      const codCidade = bairro.codCidade;
      return db("cidades").where({ codCidade }).first();
    },
  },
};
