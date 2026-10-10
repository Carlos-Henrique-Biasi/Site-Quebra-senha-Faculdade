const express = require('express');
const router = express.Router();
const sucessoController = require('../Controllers/sucessoController');

router.get('usuario/:id', sucessoController.verificarUsuarioFuncao)

module.exports = router;