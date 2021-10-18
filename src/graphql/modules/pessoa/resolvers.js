const db = require("../../../db");
module.exports = {
  Query: {
    pessoas: async () => await db("pessoas"),
    pessoa: async (_, { codPessoa }) =>
      await db("pessoas").where({ codPessoa }).first(),
  },
  Mutation: {
    criarPessoa: async (_, { data }) => await db("pessoas").insert(data),
    criarPessoas: async (_, { data }) =>
      await db("pessoas").insert(data).returning("*"),
    atualizarPessoa: async (_, { codPessoa, data }) =>
      await db("pessoas").where({ codPessoa }).update(data),
    deletarPessoa: async (_, { codPessoa }) => {
      await db("pessoas").where({ codPessoa: codPessoa }).delete();
    },
  },
};
