import buscarPedidos from "../pedidos/buscar-pedidos.js";
import inserirPedido from "../pedidos/insert-pedido.js";
import deletarPedido from "../pedidos/deletar-pedido.js";
import atualizarPedido from "../pedidos/atualizar-pedido.js";
import buscarProdutos from "../produtos/buscar-produtos.js";

export async function listarPedidos(req, res) {
    try {
        const pedidos = await buscarPedidos();

        const pedidosFormatados = pedidos.map((pedido) => {
            return {
                id: pedido._id,
                cliente: pedido.cliente,
                produtos: Array.isArray(pedido.produtos)
                    ? pedido.produtos.join(", ")
                    : pedido.produtos,
                valorTotal: pedido.valorTotal,
                status: pedido.status
            };
        });

        res.render("pedidos", {
            pedidos: pedidosFormatados,
            usuario: req.session.usuario
        });

    } catch (erro) {
        console.log("Erro ao listar pedidos:", erro.message);
        res.status(500).send("Erro ao buscar pedidos");
    }
}

export async function telaNovoPedido(req, res) {
    try {
        const produtos = await buscarProdutos();

        res.render("novo-pedido", {
            produtos
        });

    } catch (erro) {
        res.status(500).send("Erro ao carregar produtos");
    }
}

export async function cadastrarPedido(req, res) {
    try {
        const produtosSelecionados = Array.isArray(req.body.produtos)
            ? req.body.produtos
            : [req.body.produtos];

        await inserirPedido({
            cliente: req.body.cliente,
            produtos: produtosSelecionados,
            valorTotal: Number(req.body.valorTotal),
            status: req.body.status
        });

        res.redirect("/pedidos");

    } catch (erro) {
        console.log("Erro ao cadastrar pedido:", erro.message);
        res.status(500).send("Erro ao cadastrar pedido");
    }
}

export async function telaEditarPedido(req, res) {
    try {
        const pedidos = await buscarPedidos();
        const produtos = await buscarProdutos();

        const pedido = pedidos.find(
            item => item._id.toString() === req.params.id
        );

        if (!pedido) {
            return res.send("Pedido não encontrado");
        }

        res.render("editar-pedido", {
            pedido,
            produtos
        });

    } catch (erro) {
        console.log("Erro ao carregar pedido:", erro.message);
        res.status(500).send("Erro ao carregar pedido");
    }
}

export async function editarPedido(req, res) {
    try {
        const produtosSelecionados = Array.isArray(req.body.produtos)
            ? req.body.produtos
            : [req.body.produtos];

        await atualizarPedido(req.params.id, {
            cliente: req.body.cliente,
            produtos: produtosSelecionados,
            valorTotal: Number(req.body.valorTotal),
            status: req.body.status
        });

        res.redirect("/pedidos");

    } catch (erro) {
        console.log("Erro ao atualizar pedido:", erro.message);
        res.status(500).send("Erro ao atualizar pedido");
    }
}

export async function removerPedido(req, res) {
    try {
        await deletarPedido(req.params.id);

        res.redirect("/pedidos");

    } catch (erro) {
        console.log("Erro ao remover pedido:", erro.message);
        res.status(500).send("Erro ao remover pedido");
    }
}