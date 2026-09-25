const mysql = require('mysql2/promise');

// Cria um pool de conexões com o banco de dados
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Biasi.2008', 
    database: 'quebra_senha',
    waitForConnections: true,
    connectionLimit: 100, // Permite até 10 requisições simultâneas
    queueLimit: 0
});

module.exports = pool;