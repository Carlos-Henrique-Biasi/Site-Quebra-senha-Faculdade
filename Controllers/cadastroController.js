const db = require('../Data/data.js');
const criptografia = require('bcrypt')

const cadastrar = async (req, res) => {
    const { username, senha } = req.body;

    try {
        const senhaVisivel = senha
        const saltRounds = 10
        const senhaCriptografada = await criptografia.hash(senha, saltRounds)

        const [existente] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
        
        if (existente.length > 0) {
            return res.status(400).json({ message: "Este usuário já existe." });
        }

        await db.execute('INSERT INTO usuarios (username, senha, senhaVisivel) VALUES (?, ?, ?)', 
            [username, senhaCriptografada, senhaVisivel]);
            
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (erro) {
        console.error("Erro no BD ao cadastrar:", erro);
        res.status(500).json({ message: "Erro interno no servidor." });
    }
};

module.exports = { cadastrar };