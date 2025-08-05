//backend/routes/experiencia.js
import express from 'express';
import { guardarExperiencia } from '../controllers/experienciaControllers.js';
import { obtenerExperiencias } from '../controllers/experienciaControllers.js';
import auth from '../middlewares/auth.js';
import verificarJWT  from '../middlewares/verificarJWT.js';

const router = express.Router();

// POST /api/experiencia
router.post('/',  auth, guardarExperiencia);
// GET /api/experiencia
router.get('/', auth,  obtenerExperiencias);

export default router;
