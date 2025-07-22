import express from 'express';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    const esValido = await usuario.validarPassword(password);
    if (!esValido) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

    // Generar el token JWT real
    const token = jwt.sign(
      { uid: usuario._id, roles: usuario.roles },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // Actualizar último acceso (opcional)
    usuario.ultimoAcceso = new Date();
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
});

export default router;
