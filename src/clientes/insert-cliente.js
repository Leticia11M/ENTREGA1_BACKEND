import connect from "../database/connect.js";

async function inserirCliente({
    nome,
    email,
    telefone,
    endereco
}) {

    if (!nome) {
        throw new Error("Campo obrigatório ausente: nome");
    }

    if (!email) {
        throw new Error("Campo obrigatório ausente: email");
    }

    try {

        const db = await connect();

        const collection = db.collection("clientes");

        const cliente = {

            nome,
            email,
            telefone,
            endereco,

            criadoEm: new Date(),
            atualizadoEm: new Date()

        };

        const resultado = await collection.insertOne(cliente);

        console.log(`Cliente inserido com id: ${resultado.insertedId}`);

        return resultado;

    } catch (erro) {

        console.log("Erro ao inserir cliente:", erro.message);

        throw erro;

    }

}

export default inserirCliente;