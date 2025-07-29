//backend/routes/Experiencias.js
const router = require('express').Router();
const {
  crearExperiencia,
  obtenerExperiencias,
} = require('../controllers/experienciaController');

router.post('/', crearExperiencia);
router.get('/', obtenerExperiencias);

module.exports = router;



const { body, validationResult } = require('express-validator');

// Middleware de validación
const validarDatos = [
  body('fecha').isISO8601().withMessage('Fecha inválida'),
  body('categoria').notEmpty().withMessage('La categoría es obligatoria'),
  body('horas').isNumeric().withMessage('Horas debe ser un número'),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

// Usarlo antes del controlador
router.post('/', validarDatos, crearExperiencia);
