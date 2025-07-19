import Usuario from '../models/Usuario.js';

export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    const existente = await Usuario.findOne({ correo });
    if (existente)
      return res.status(400).json({ mensaje: 'El correo ya está registrado.' });

    const nuevoUsuario = new Usuario({ nombre, correo, password });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario creado correctamente.' });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ mensaje: 'Error del servidor.' });
  }
};

import jwt from 'jsonwebtoken';

export const loginUsuario = async (req, res) => {
  try {
    const { correo, password } = req.body;
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado.' });

    const validado = await usuario.validarPassword(password);
    if (!validado)
      return res.status(401).json({ mensaje: 'Contraseña incorrecta.' });

    const token = jwt.sign(
      { id: usuario._id, nombre: usuario.nombre },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token, usuario: { nombre: usuario.nombre, correo: usuario.correo } });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ mensaje: 'Error del servidor.' });
  }
};


