const db = require('../Data/data.js');
const criptografia = require('bcrypt')

const login = async (req, res) => {
    const { username, senha } = req.body;

    try {
        const [linhas] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (linhas.length > 0) {
            const usuarioDoBanco = linhas[0];
            const senhaCorreta = await criptografia.compare(senha, usuarioDoBanco.senha)
            if (senhaCorreta) {
                res.status(200).json({ message: "Login realizado com sucesso!" });
            } else {
                res.status(401).json({ message: "Informações de Login incorretas." });
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