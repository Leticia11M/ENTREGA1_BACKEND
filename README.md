# 🎮 Gamer Store - Sistema de Gerenciamento de Produtos

Projeto desenvolvido para a disciplina **Programação Web Back-End** utilizando **Node.js**, **Express.js**, **MongoDB**, **EJS**, **Sessions** e **JWT**.

O sistema simula uma loja virtual com autenticação de usuários e gerenciamento de produtos através de uma interface web moderna com tema gamer.

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

# 📁 Estrutura do Projeto

```txt
src/
├── controllers/
│   ├── auth-controller.js
│   └── produto-controller.js
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
├── produtos/
│   ├── insert-produto.js
│   ├── buscar-produtos.js
│   ├── atualizar-produto.js
│   └── deletar-produto.js
│
├── public/
│   └── style.css
│
├── routes/
│   ├── auth-routes.js
│   ├── login-routes.js
│   └── produto-routes.js
│
├── views/
│   ├── login.ejs
│   ├── produtos.ejs
│   ├── novo-produto.ejs
│   └── editar-produto.ejs
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

## 📦 Produtos

- Cadastrar produto
- Listar produtos
- Editar produto
- Excluir produto

## 🎨 Interface

- Layout Gamer
- Tema Neon Verde e Roxo
- Interface Responsiva
- Formulários estilizados

---

# 🗄 Banco de Dados

Collection: produtos

| Campo | Tipo |
|---------|---------|
| nome | String |
| descricao | String |
| preco | Number |
| estoque | Number |
| categoria | String |
| criadoEm | Date |
| atualizadoEm | Date |

---

# 🔑 Usuário de Teste

```txt
Email: admin@email.com
Senha: 123456
```

---

# 🔐 JWT

Endpoint para geração de token:

```http
POST /login-api
```

Exemplo:

```json
{
  "email": "admin@email.com",
  "senha": "123456"
}
```

Endpoint protegido:

```http
GET /perfil-api
```

Necessário enviar:

```txt
Authorization: Bearer TOKEN
```

---

# ⚙️ Configuração

Criar arquivo .env:

```env
MONGO_URL=sua_url_mongodb
PORT=3000
```

---

# ▶️ Executando o Projeto

Instalar dependências:

```bash
npm install
```

Executar:

```bash
npm start
```

ou

```bash
npm run dev
```

Acessar:

```txt
http://localhost:3000
```

---

# 👩‍💻 Autora

Letícia Fernanda Maioli Santos

RA: 2525488

Curso: Engenharia de Computação

UTFPR – Universidade Tecnológica Federal do Paraná

---

# 📚 Disciplina

Programação Web Back-End