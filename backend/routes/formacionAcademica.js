//routes/formacionAcademica.js
import express from 'express';
import { crearFormacionAcademica } from '../controllers/formacionAcademicaControllers.js';
import verificarJWT from '../middlewares/verificarJWT.js';
import { obtenerFormacionAcademica } from '../controllers/formacionAcademicaControllers.js';


const router = express.Router();


router.get("/test", (req, res) => {
  res.send("🚀 Ruta de formación académica activa");
});

// POST principal
router.post('/', verificarJWT, crearFormacionAcademica);
router.get("/formacion-academica", verificarJWT, obtenerFormacionAcademica);

export default router;


