const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// starting server
const app = express();
app.use(express.json());

//Conectando com o bando de dados Mongoose
mongoose.connect('mongodb://localhost:27017/meupedido', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Importando as models
requireDir('./src/models');

// Recebendo todas as requisições e enviando para routes.js
app.use('/api', require("./src/routes"));
app.listen(3001);
