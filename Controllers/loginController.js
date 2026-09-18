const db = require('../Data/data.js');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [linhas] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (linhas.length > 0) {
            const usuarioDoBanco = linhas[0];
            if (password === usuarioDoBanco.password) {
                res.status(200).json({ message: "Senha correta! Acesso liberado." });
            } else {
                res.status(401).json({ message: "Senha incorreta." });
            }
        } else {
            res.status(401).json({ message: "Usuário não encontrado." });
        }
    } catch (erro) {
        console.error("Erro no BD:", erro);
        res.status(500).json({ message: "Erro interno no servidor." });
    }
};

module.exports = { login };