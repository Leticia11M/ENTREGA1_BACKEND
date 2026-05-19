import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function connect() {
    await client.connect();

    console.log("Conectado ao MongoDB!");

    return client.db("ecommerce");
}

export default connect;