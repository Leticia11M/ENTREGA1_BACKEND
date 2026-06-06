import express from "express";

import {
    loginApi
} from "../controllers/auth-controller.js";

import {
    verificarToken
} from "../middlewares/auth-jwt.js";

const router = express.Router();

router.post("/login-api", loginApi);

router.get("/perfil-api", verificarToken, (req, res) => {
    res.json({
        sucesso: true,
        mensagem: "Rota protegida acessada com sucesso",
        usuario: req.usuario
    });
});

export default router;