//routes/login.js

// backend/routes/login.js
import express from 'express';
import { loginUsuario } from '../controllers/authController.js';

const router = express.Router();

// Monta únicamente loginUsuario
router.post('/', loginUsuario);

export default router;


/*import express from 'express';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import { loginUsuario } from '../controllers/authController.js';


const router = express.Router();

router.post('/', loginUsuario); // ✅
 async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    const esValido = await usuario.validarPassword(password);
    if (!esValido) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

   /* const token = jwt.sign(
      { uid: usuario._id, roles: usuario.roles },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );*/

    /*usuario.ultimoAcceso = new Date();
    await usuario.save();

    res.json({
      token,
      usuario: {
        uid: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        roles: usuario.roles
      }
    });
  } catch (err) {
    console.error("Error en login:", err.message);
    res.status(500).json({ mensaje: "Error del servidor" });
  }
};

export default router;*/



