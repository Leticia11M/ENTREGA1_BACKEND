import connect from "../database/connect.js";

async function buscarClientes() {

    try {

        const db = await connect();

        const collection = db.collection("clientes");

        const clientes = await collection.find().toArray();

        return clientes;

    } catch (erro) {

        console.log("Erro ao buscar clientes:", erro.message);

        throw erro;

    }

}

export default buscarClientes;