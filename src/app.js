import express from "express";
import session from "express-session";

import loginRoutes from "./routes/login-routes.js";
import produtoRoutes from "./routes/produto-routes.js";
import pedidoRoutes from "./routes/pedido-routes.js";
import authRoutes from "./routes/auth-routes.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("src/public"));

app.use(session({
    secret: "segredo-ecommerce",
    resave: false,
    saveUninitialized: false
}));

// Rotas
app.use(loginRoutes);
app.use(authRoutes);
app.use(produtoRoutes);
app.use(pedidoRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});