import inserirProduto from "./produtos/insert-produto.js";
import buscarProdutos from "./produtos/buscar-produtos.js";
import atualizarProduto from "./produtos/atualizar-produto.js";
import deletarProduto from "./produtos/deletar-produto.js";

import inserirCliente from "./clientes/insert-cliente.js";
import buscarClientes from "./clientes/buscar-clientes.js";
import atualizarCliente from "./clientes/atualizar-cliente.js";
import deletarCliente from "./clientes/deletar-cliente.js";

import inserirPedido from "./pedidos/insert-pedido.js";
import buscarPedidos from "./pedidos/buscar-pedidos.js";
import atualizarPedido from "./pedidos/atualizar-pedido.js";
import deletarPedido from "./pedidos/deletar-pedido.js";

import { logError } from "./logger/logger.js";

async function main() {

    console.log("INICIANDO TESTES DO E-COMMERCE");

    // =====================================
    // PRODUTOS
    // =====================================

    console.log("CADASTRANDO PRODUTO");

    const produtoInserido = await inserirProduto({

        nome: "Mouse Gamer",
        descricao: "Mouse RGB",
        preco: 150,
        estoque: 10,
        categoria: "Informática"

    });

    const produtoId = produtoInserido.insertedId;

    console.log("BUSCANDO PRODUTOS");

    await buscarProdutos();

    console.log("ATUALIZANDO PRODUTO");

    await atualizarProduto(produtoId, {

        preco: 200,
        estoque: 20

    });

    // =====================================
    // CLIENTES
    // =====================================

    console.log("CADASTRANDO CLIENTE");

    const clienteInserido = await inserirCliente({

        nome: "Letícia",
        email: "leticia@email.com",
        telefone: "99999-9999",
        endereco: "Rua A"

    });

    const clienteId = clienteInserido.insertedId;

    console.log("BUSCANDO CLIENTES");

    await buscarClientes();

    console.log("ATUALIZANDO CLIENTE");

    await atualizarCliente(clienteId, {

        telefone: "98888-8888"

    });

    // =====================================
    // PEDIDOS
    // =====================================

    console.log("CADASTRANDO PEDIDO");

    const pedidoInserido = await inserirPedido({

        cliente: clienteId,

        produtos: [produtoId],

        valorTotal: 200,

        status: "Aprovado"

    });

    const pedidoId = pedidoInserido.insertedId;

    console.log("BUSCANDO PEDIDOS");

    await buscarPedidos();

    console.log("ATUALIZANDO PEDIDO");

    await atualizarPedido(pedidoId, {

        status: "Enviado"

    });

    // =====================================
    // DELETE
    // =====================================

    console.log("DELETANDO PEDIDO");

    await deletarPedido(pedidoId);

    console.log("DELETANDO CLIENTE");

    await deletarCliente(clienteId);

    console.log("DELETANDO PRODUTO");

    await deletarProduto(produtoId);

    console.log("TESTES FINALIZADOS");

}

main().catch((erro) => {

    logError(
        "main",
        "Erro fatal na execução",
        erro
    );

});