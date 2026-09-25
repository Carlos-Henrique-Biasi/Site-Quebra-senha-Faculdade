require('dotenv').config();
const mysql = require('mysql2');

// Cria um pool de conexões com o banco de dados
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Biasi.2008', 
    database: 'quebra_senha',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

pool.getConnection()
    .then(() => console.log("Conectado ao MySQL com sucesso! 🐬"))
    .catch((erro) => console.log("Deu ruim na conexão:", erro));
    
module.exports = conexao.promise();