import connect from "../database/connect.js";
import { logError, logInfo } from "../logger/logger.js";

async function inserirProduto(produto) {

    try {

        if (!produto.nome) {
            throw new Error("Campo obrigatório ausente: nome");
        }

        if (!produto.preco) {
            throw new Error("Campo obrigatório ausente: preco");
        }

        const db = await connect();

        const collection = db.collection("produtos");

        const resultado = await collection.insertOne({

            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
            estoque: produto.estoque,
            categoria: produto.categoria,

            criadoEm: new Date(),
            atualizadoEm: new Date()

        });

        logInfo(
            "inserirProduto",
            `Produto inserido com id: ${resultado.insertedId}`
        );

        return resultado;

    } catch (erro) {

        logError(
            "inserirProduto",
            "Erro ao inserir produto",
            erro
        );

        throw erro;

    }

}

export default inserirProduto;