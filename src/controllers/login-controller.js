export function telaLogin(req, res) {
    res.render("login");
}

export function fazerLogin(req, res) {
    const { email, senha } = req.body;

    if (email === "admin@email.com" && senha === "123456") {
        req.session.usuario = email;

        const paginaDestino = req.session.ultimaPagina || "/produtos";

        return res.redirect(paginaDestino);
    }

    res.send("Login inválido");
}

export function logout(req, res) {
    req.session.destroy();

    res.redirect("/login");
}