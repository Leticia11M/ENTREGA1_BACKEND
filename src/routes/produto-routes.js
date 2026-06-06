import express from "express";

import {
    listarProdutos,
    telaNovoProduto,
    cadastrarProduto,
    removerProduto,
    telaEditarProduto,
    editarProduto
} from "../controllers/produto-controller.js";

const router = express.Router();

function verificarLogin(req, res, next) {

    if (req.session.usuario) {
        return next();
    }

    req.session.ultimaPagina = req.originalUrl;

    res.redirect("/login");

}

router.get(
    "/produtos",
    verificarLogin,
    listarProdutos
);

router.get(
    "/produtos/novo",
    verificarLogin,
    telaNovoProduto
);

router.post(
    "/produtos",
    verificarLogin,
    cadastrarProduto
);

router.get(
    "/produtos/editar/:id",
    verificarLogin,
    telaEditarProduto
);

router.post(
    "/produtos/editar/:id",
    verificarLogin,
    editarProduto
);

router.post(
    "/produtos/deletar/:id",
    verificarLogin,
    removerProduto
);

export default router;