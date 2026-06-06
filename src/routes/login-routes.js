import express from "express";

import {
    telaLogin,
    fazerLogin,
    logout
} from "../controllers/login-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/login", telaLogin);

router.post("/login", fazerLogin);

router.get("/logout", logout);

export default router;