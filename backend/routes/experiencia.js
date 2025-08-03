//backend/routes/experienciaRoutes.js
import express from 'express';
import { guardarExperiencia } from '../controllers/experienciaControllers.js';
import { obtenerExperiencia } from '../controllers/experienciaControllers.js';
import auth from '../middlewares/auth.js';
import verificarJWT  from '../middlewares/verificarJWT.js';

const router = express.Router();

// POST /api/experiencia
router.post('/',  auth, verificarJWT, guardarExperiencia);
// GET /api/experiencia
router.get('/', auth, verificarJWT, obtenerExperiencia);

export default router;
