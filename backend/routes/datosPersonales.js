//temporal borrar y descomentar cuando se haga el deploy
import express from 'express';
const router = express.Router();

router.post('/test', (req, res) => {
  console.log('📬 POST recibido en /api/test:', req.body);
  res.status(200).json({
    mensaje: 'POST exitoso',
    datos: req.body,
  });
});

export default router;




/*backend/routes/datosPersonales.js
import express from 'express';
import { crearDatosPersonales } from '../controllers/datosPersonalesController.js';
console.log('📥 Datos recibidos:', req.body);

//temporal
router.get('/test', (req, res) => {
    res.send('🚀 Ruta de datos-personales activa');
  });
  
  


const router = express.Router();

router.post('/datos-personales', crearDatosPersonales);

export default router;*/
