const express = require('express');
const loginRoutes = require('./Routes/loginRoutes');
const cadastroRoutes = require('./Routes/cadastroRoutes');

const app = express();
const PORT = 3000;

// Configurações para ler JSON e exibir o Frontend
app.use(express.json());
app.use(express.static('Front-end'));

// Engata o arquivo de rotas com o prefixo '/api'
// Substitua o app.use('/api', authRoutes) por estes dois:
app.use('/api', loginRoutes);
app.use('/api', cadastroRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse: http://localhost:${PORT}`);
});