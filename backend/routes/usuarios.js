import express from 'express';
import { registrarUsuario } from '../controllers/authController.js';
import { loginUsuario } from '../controllers/authController.js';

const router = express.Router();

router.post('/registro', registrarUsuario);

router.post('/login', loginUsuario);

router.get('/datos', verificarToken, datosPrivados);



export default router;

