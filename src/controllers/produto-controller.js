import buscarProdutos from "../produtos/buscar-produtos.js";
import inserirProduto from "../produtos/insert-produto.js";
import atualizarProduto from "../produtos/atualizar-produto.js";
import deletarProduto from "../produtos/deletar-produto.js";

export async function listarProdutos(req, res) {
    try {
        const produtos = await buscarProdutos();

        res.render("produtos", {
            produtos,
            usuario: req.session.usuario
        });

    } catch (erro) {
        res.status(500).send("Erro ao buscar produtos");
    }
}

export function telaNovoProduto(req, res) {
    res.render("novo-produto");
}

export async function cadastrarProduto(req, res) {
    try {
        await inserirProduto({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: Number(req.body.preco),
            estoque: Number(req.body.estoque),
            categoria: req.body.categoria
        });

        res.redirect("/produtos");

    } catch (erro) {
        res.send(`
            <h1>Erro ao cadastrar produto</h1>
            <p>${erro.message}</p>
            <a href="/produtos/novo">Voltar</a>
        `);
    }
}

export async function removerProduto(req, res) {
    try {
        await deletarProduto(req.params.id);

        res.redirect("/produtos");

    } catch (erro) {
        res.send("Erro ao excluir produto");
    }
}

export async function telaEditarProduto(req, res) {
    try {
        const produtos = await buscarProdutos();

        const produto = produtos.find(
            item => item._id.toString() === req.params.id
        );

        if (!produto) {
            return res.send("Produto não encontrado");
        }

        res.render("editar-produto", {
            produto
        });

    } catch (erro) {
        res.send("Erro ao carregar produto");
    }
}

export async function editarProduto(req, res) {
    try {
        await atualizarProduto(req.params.id, {
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: Number(req.body.preco),
            estoque: Number(req.body.estoque),
            categoria: req.body.categoria
        });

        res.redirect("/produtos");

    } catch (erro) {
        res.send("Erro ao atualizar produto");
    }
}