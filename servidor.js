const express = require('express');
const loginRoutes = require('./Routes/loginRoute');
const cadastroRoutes = require('./Routes/cadastroRoute');

const app = express();
// Configuração corrigida para aceitar a porta dinâmica do Render
const PORT = process.env.PORT || 3000;

// Configurações para ler JSON e exibir o Frontend
app.use(express.json());
app.use(express.static('Front-end'));

// Engata o arquivo de rotas com o prefixo '/api'
app.use('/api', loginRoutes);
app.use('/api', cadastroRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse: http://localhost:${PORT}`);
});