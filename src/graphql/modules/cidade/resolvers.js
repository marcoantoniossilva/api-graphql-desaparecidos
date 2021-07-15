const db = require("../../../db");
module.exports = {
  Query: {
    cidades: async () => await db("cidades"),
    cidade: async (_, { codCidade }) =>
      await db("cidades").where({ codCidade }).first(),
  },
  Mutation: {
    criarCidade: async (_, { data }) => await db("cidades").insert(data),
    atualizarCidade: async (_, { codCidade, data }) =>
      await db("cidades").where({ codCidade }).update(data),
    deletarCidade: async (_, { codCidade }) => {
      await db("cidades").where({ codCidade: codCidade }).delete();
    },
  },
  Cidade: {
    uf(cidade) {
      // cidade = objeto com atributo faltante (Cidade)
      const codUf = cidade.codUf;
      return db("ufs").where({ codUf }).first();
    },
  },
};
