//routes/formacionAcademica.js
import express from 'express';
import { 
  crearFormacionAcademica, 
  obtenerFormacionAcademica,
  actualizarFormacionAcademica 
} from '../controllers/formacionAcademicaControllers.js';
import verificarJWT from '../middlewares/verificarJWT.js';

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("🚀 Ruta de formación académica activa");
});

// CRUD completo
router.post('/', verificarJWT, crearFormacionAcademica);
router.get("/", verificarJWT, obtenerFormacionAcademica); // Cambié la ruta GET
router.put('/', verificarJWT, actualizarFormacionAcademica);

export default router;