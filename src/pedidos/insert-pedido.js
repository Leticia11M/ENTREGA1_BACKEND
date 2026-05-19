import connect from "../database/connect.js";

async function inserirPedido({
    cliente,
    produtos,
    valorTotal,
    status
}) {

    if (!cliente) {
        throw new Error("Campo obrigatório ausente: cliente");
    }

    if (!produtos || produtos.length === 0) {
        throw new Error("Pedido precisa ter produtos");
    }

    try {

        const db = await connect();

        const collection = db.collection("pedidos");

        const pedido = {

            cliente,
            produtos,
            valorTotal,
            status,

            criadoEm: new Date(),
            atualizadoEm: new Date()

        };

        const resultado = await collection.insertOne(pedido);

        console.log(`Pedido inserido com id: ${resultado.insertedId}`);

        return resultado;

    } catch (erro) {

        console.log("Erro ao inserir pedido:", erro.message);

        throw erro;

    }

}

export default inserirPedido;