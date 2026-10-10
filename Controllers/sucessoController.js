const db = require('../Data/data.js');

const verificarUsuarioFuncao = async (req, res) => {
    const {id} = req.params

    try{
        const [usuario] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id])

        if(usuario.length === 0){
            return res.status(404).json({erro: "Usuario não encontrado"})
        }

        res.json(usuario[0])
    }catch (erro){
        res.status(500).json({ erro: "Erro ao buscra usuário" })
    }
}

module.exports = {verificarUsuarioFuncao}