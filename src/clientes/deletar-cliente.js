import { ObjectId } from "mongodb";
import connect from "../database/connect.js";

async function deletarCliente(id) {

    if (!id) {
        throw new Error("Campo obrigatório ausente: id");
    }

    try {

        const db = await connect();

        const collection = db.collection("clientes");

        const resultado = await collection.deleteOne({
            _id: new ObjectId(id)
        });

        console.log("Cliente deletado!");

        return resultado;

    } catch (erro) {

        console.log("Erro ao deletar cliente:", erro.message);

        throw erro;

    }

}

export default deletarCliente;