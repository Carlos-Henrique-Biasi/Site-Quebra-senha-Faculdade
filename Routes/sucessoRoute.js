const express = require('express');
const router = express.Router();
const sucessoController = require('../Controllers/sucessoController');

router.get('usuario/:id', sucessoController.usuario)

module.exports = router;