const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const cadastroRoutes = require('./routes/cadastroRoutes');

const app = express();
const PORT = 3000;

// Configurações para ler JSON e exibir o Frontend
app.use(express.json());
app.use(express.static('public'));

// Engata o arquivo de rotas com o prefixo '/api'
// Substitua o app.use('/api', authRoutes) por estes dois:
app.use('/api', loginRoutes);
app.use('/api', cadastroRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse: http://localhost:${PORT}`);
});