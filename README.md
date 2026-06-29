# 🎮 Gamer Store

Sistema Web de gerenciamento de uma loja virtual desenvolvido para a disciplina **Programação Web Back-End** utilizando **Node.js**, **Express.js**, **MongoDB**, **EJS**, **Express Session** e **JWT**.

O sistema possui autenticação de usuários e permite o gerenciamento completo de produtos e pedidos através de uma interface web moderna.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- EJS
- Express Session
- JSON Web Token (JWT)
- Dotenv
- JavaScript
- HTML5
- CSS3

---

# 📂 Estrutura do Projeto

```txt
src/
├── controllers/
│   ├── auth-controller.js
│   ├── login-controller.js
│   ├── produto-controller.js
│   └── pedido-controller.js
│
├── database/
│   └── connect.js
│
├── logger/
│   └── logger.js
│
├── middlewares/
│   └── auth-jwt.js
│
├── pedidos/
│   ├── buscar-pedidos.js
│   ├── insert-pedido.js
│   ├── atualizar-pedido.js
│   └── deletar-pedido.js
│
├── produtos/
│   ├── buscar-produtos.js
│   ├── insert-produto.js
│   ├── atualizar-produto.js
│   └── deletar-produto.js
│
├── public/
│   └── style.css
│
├── routes/
│   ├── auth-routes.js
│   ├── login-routes.js
│   ├── produto-routes.js
│   └── pedido-routes.js
│
├── views/
│   ├── login.ejs
│   ├── produtos.ejs
│   ├── novo-produto.ejs
│   ├── editar-produto.ejs
│   ├── pedidos.ejs
│   ├── novo-pedido.ejs
│   └── editar-pedido.ejs
│
├── app.js
└── index.js
```

---

# ✨ Funcionalidades

## 🔐 Autenticação

- Login de usuário
- Logout
- Controle de sessão
- Rotas protegidas
- Autenticação JWT

---

## 📦 Produtos

- Cadastrar produto
- Listar produtos
- Editar produto
- Excluir produto

---

## 📋 Pedidos

- Cadastrar pedido
- Listar pedidos
- Editar pedido
- Excluir pedido
- Seleção de produtos cadastrados
- Cálculo automático do valor total

---

## 🎨 Interface

- Layout Gamer
- Tema Neon Verde e Roxo
- Interface Responsiva
- Interface desenvolvida em EJS

---

# 🗄 Banco de Dados

## Collection: produtos

| Campo | Tipo |
|--------|------|
| nome | String |
| descricao | String |
| preco | Number |
| estoque | Number |
| categoria | String |

---

## Collection: pedidos

| Campo | Tipo |
|--------|------|
| cliente | String |
| produtos | Array |
| valorTotal | Number |
| status | String |

---

# 🔑 Usuário de Teste

```txt
Email: admin@email.com
Senha: 123456
```

---

# 🔐 JWT

## Gerar Token

```http
POST /login-api
```

Body:

```json
{
    "email":"admin@email.com",
    "senha":"123456"
}
```

---

## Endpoint protegido

```http
GET /perfil-api
```

Enviar:

```txt
Authorization: Bearer TOKEN
```

---

# ⚙️ Configuração

Criar o arquivo `.env`

```env
MONGO_URL=sua_url_do_mongodb
PORT=3000
```

---

# ▶️ Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

ou

```bash
npm start
```

Acesse:

```txt
http://localhost:3000
```

---

# 📸 Funcionalidades do Sistema

- Login de usuários
- CRUD completo de Produtos
- CRUD completo de Pedidos
- Seleção de produtos no cadastro de pedidos
- Cálculo automático do valor total do pedido
- Interface moderna utilizando EJS e CSS
- Sessões de usuário
- API protegida com JWT

---

# 👩‍💻 Autora

**Letícia Fernanda Maioli Santos**

**RA:** 2525488

**Curso:** Engenharia de Computação

**Universidade Tecnológica Federal do Paraná - UTFPR**

---

# 📚 Disciplina

Programação Web Back-End