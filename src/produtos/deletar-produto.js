import { ObjectId } from "mongodb";
import connect from "../database/connect.js";

async function deletarProduto(id) {

    if (!id) {
        throw new Error("Campo obrigatório ausente: id");
    }

    try {

        const db = await connect();

        const collection = db.collection("produtos");

        const resultado = await collection.deleteOne({
            _id: new ObjectId(id)
        });

        console.log("Produto deletado!");

        return resultado;

    } catch (erro) {

        console.log("Erro ao deletar produto:", erro.message);

        throw erro;

    }

}

export default deletarProduto;