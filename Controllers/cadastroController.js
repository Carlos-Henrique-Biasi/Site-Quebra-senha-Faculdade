const db = require('../config/db');

const cadastrar = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [existente] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
        
        if (existente.length > 0) {
            return res.status(400).json({ message: "Este usuário já existe." });
        }

        await db.execute('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password]);
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (erro) {
        console.error("Erro no BD ao cadastrar:", erro);
        res.status(500).json({ message: "Erro interno no servidor." });
    }
};

module.exports = { cadastrar };