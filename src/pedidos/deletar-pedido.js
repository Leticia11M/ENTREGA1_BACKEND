import { ObjectId } from "mongodb";
import connect from "../database/connect.js";

async function deletarPedido(id) {

    if (!id) {
        throw new Error("Campo obrigatório ausente: id");
    }

    try {

        const db = await connect();

        const collection = db.collection("pedidos");

        const resultado = await collection.deleteOne({
            _id: new ObjectId(id)
        });

        console.log("Pedido deletado!");

        return resultado;

    } catch (erro) {

        console.log("Erro ao deletar pedido:", erro.message);

        throw erro;

    }

}

export default deletarPedido;