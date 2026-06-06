import jwt from "jsonwebtoken";

const CHAVE_SECRETA = "gamer-store-jwt";

export function loginApi(req, res) {

    const { email, senha } = req.body;

    if (
        email === "admin@email.com" &&
        senha === "123456"
    ) {

        const token = jwt.sign(
            {
                email: email
            },
            CHAVE_SECRETA,
            {
                expiresIn: "1h"
            }
        );

        return res.json({
            sucesso: true,
            token
        });

    }

    return res.status(401).json({
        sucesso: false,
        mensagem: "Credenciais inválidas"
    });

}