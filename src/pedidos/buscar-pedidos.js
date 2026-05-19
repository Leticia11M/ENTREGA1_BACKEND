import connect from "../database/connect.js";

async function buscarPedidos() {

    try {

        const db = await connect();

        const collection = db.collection("pedidos");

        const pedidos = await collection.find().toArray();

        return pedidos;

    } catch (erro) {

        console.log("Erro ao buscar pedidos:", erro.message);

        throw erro;

    }

}

export default buscarPedidos;