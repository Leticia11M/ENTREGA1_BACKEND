import { ObjectId } from "mongodb";
import connect from "../database/connect.js";

async function atualizarProduto(id, dadosAtualizados) {

    if (!id) {
        throw new Error("Campo obrigatório ausente: id");
    }

    try {

        const db = await connect();

        const collection = db.collection("produtos");

        const resultado = await collection.updateOne(

            { _id: new ObjectId(id) },

            {
                $set: {

                    ...dadosAtualizados,

                    atualizadoEm: new Date()

                }
            }

        );

        console.log("Produto atualizado!");

        return resultado;

    } catch (erro) {

        console.log("Erro ao atualizar produto:", erro.message);

        throw erro;

    }

}

export default atualizarProduto;