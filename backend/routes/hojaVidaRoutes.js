//backend/routes/hojaVidaRoutes.js

import express from "express";
import { obtenerHojaCompleta } from "../controllers/hojaVidaController.js";
import verificarToken from "../middlewares/verificarJWT.js";
//import api from "../api/axios.js"; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.get("/hoja-de-vida", verificarToken, obtenerHojaCompleta);

export default router;
