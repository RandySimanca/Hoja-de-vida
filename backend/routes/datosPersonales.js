const router = require('express').Router();
const { crearDatos } = require('../controllers/datosPersonalesController');

router.post('/', crearDatos);

module.exports = router;

