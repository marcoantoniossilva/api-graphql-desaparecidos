const db = require("../../../db");
module.exports = {
  Query: {
    locais: async () => await db("locais"),
    local: async (_, { codLocal }) =>
      await db("locais").where({ codLocal }).first(),
  },
  Mutation: {
    criarLocal: async (_, { data }) => await db("locais").insert(data),
    criarLocais: async (_, { data }) =>
      await db("locais").insert(data).returning("*"),
    atualizarLocal: async (_, { codLocal, data }) =>
      await db("locais").where({ codLocal }).update(data),
    deletarLocal: async (_, { codLocal }) => {
      await db("locais").where({ codLocal: codLocal }).delete();
    },
  },
  Local: {
    bairro(local) {
      // local = objeto com atributo faltante (Local)
      const codBairro = local.codBairro;
      return db("bairros").where({ codBairro }).first();
    },
  },
};
