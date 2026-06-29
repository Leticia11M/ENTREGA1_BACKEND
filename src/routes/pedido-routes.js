import express from "express";

import {
    listarPedidos,
    telaNovoPedido,
    cadastrarPedido,
    telaEditarPedido,
    editarPedido,
    removerPedido
} from "../controllers/pedido-controller.js";

const router = express.Router();

function verificarLogin(req, res, next) {
    if (req.session.usuario) {
        return next();
    }

    req.session.ultimaPagina = req.originalUrl;
    res.redirect("/login");
}

router.get("/pedidos", verificarLogin, listarPedidos);

router.get("/pedidos/novo", verificarLogin, telaNovoPedido);

router.post("/pedidos", verificarLogin, cadastrarPedido);

router.get("/pedidos/editar/:id", verificarLogin, telaEditarPedido);

router.post("/pedidos/editar/:id", verificarLogin, editarPedido);

router.post("/pedidos/deletar/:id", verificarLogin, removerPedido);

export default router;