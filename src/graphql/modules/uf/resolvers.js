const db = require("../../../db");
module.exports = {
  Query: {
    ufs: async () => await db("ufs"),
    uf: async (_, { codUf }) => await db("ufs").where({ codUf }).first(),
  },
  Mutation: {
    criarUf: async (_, { data }) => await db("ufs").insert(data),
    criarUfs: async (_, { data }) =>
      await db("ufs").insert(data).returning("*"),
    atualizarUf: async (_, { codUf, data }) =>
      await db("ufs").where({ codUf }).update(data),
    deletarUf: async (_, { filtro }) => {
      if (filtro.codUf) {
        return await db("ufs").where({ codUf: filtro.codUf }).delete();
      }
      if (filtro.siglaUf) {
        return await db("ufs").where({ siglaUf: filtro.siglaUf }).delete();
      }
      throw new Error("Favor passar um parâmetro!");
    },
  },
};
