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

module.exports = conexao.promise();