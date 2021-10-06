const db = require("../../../db");
module.exports = {
  Query: {
    desaparecimentos: async () => await db("desaparecimentos"),
    desaparecimento: async (_, { filtro }) => {
      if (filtro.codDesaparecimento) {
        return await db("desaparecimentos")
          .where({ codDesaparecimento: filtro.codDesaparecimento })
          .first();
      }
      if (filtro.codPessoa) {
        return await db("desaparecimentos")
          .where({ codPessoa: filtro.codPessoa })
          .first();
      }
      throw new Error("Favor passar um parâmetro!");
    },
  },
  Mutation: {
    criarDesaparecimento: async (_, { data }) =>
      await (
        await db("desaparecimentos").insert(data).returning("*")
      )[0],
    criarDesaparecimentos: async (_, { data }) =>
      await db("desaparecimentos").insert(data).returning("*"),
    atualizarDesaparecimento: async (_, { codDesaparecimento, data }) =>
      await db("desaparecimentos").where({ codDesaparecimento }).update(data),
    deletarDesaparecimento: async (_, { codDesaparecimento }) => {
      await db("desaparecimentos")
        .where({ codDesaparecimento: codDesaparecimento })
        .delete();
    },
  },
  Desaparecimento: {
    pessoa(desaparecimento) {
      // desaparecimento = objeto com atributo faltante (Desaparecimento)
      const codPessoa = desaparecimento.codPessoa;
      return db("pessoas").where({ codPessoa }).first();
    },
    local(desaparecimento) {
      // desaparecimento = objeto com atributo faltante (Desaparecimento)
      const codLocal = desaparecimento.codLocal;
      return db("locais").where({ codLocal }).first();
    },
  },
};
