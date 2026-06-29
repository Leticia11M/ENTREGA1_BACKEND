import { ObjectId } from "mongodb";
import conectarBanco from "../database/connect.js";

export default async function atualizarPedido(id, dadosAtualizados) {

    const db = await conectarBanco();

    const collection = db.collection("pedidos");

    return await collection.updateOne(

        {
            _id: new ObjectId(id)
        },

        {
            $set: dadosAtualizados
        }

    );

}