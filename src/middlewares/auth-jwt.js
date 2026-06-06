import jwt from "jsonwebtoken";

const CHAVE_SECRETA = "gamer-store-jwt";

export function verificarToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            erro: "Token não informado"
        });
    }

    const partes = authHeader.split(" ");

    if (partes.length !== 2) {
        return res.status(401).json({
            erro: "Token inválido"
        });
    }

    const [tipo, token] = partes;

    if (tipo !== "Bearer") {
        return res.status(401).json({
            erro: "Formato do token inválido"
        });
    }

    try {
        const dados = jwt.verify(token, CHAVE_SECRETA);

        req.usuario = dados;

        next();

    } catch (erro) {
        return res.status(401).json({
            erro: "Token expirado ou inválido"
        });
    }
}