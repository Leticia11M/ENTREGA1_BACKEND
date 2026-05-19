import connect from "../database/connect.js";

async function buscarProdutos() {

    try {

        const db = await connect();

        const collection = db.collection("produtos");

        const produtos = await collection.find().toArray();

        return produtos;

    } catch (erro) {

        console.log("Erro ao buscar produtos:", erro.message);

        throw erro;

    }

}

export default buscarProdutos;