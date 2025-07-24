//datosPersonalesControllers.js
import DatosPersonales from './models/DatosPersonales.js';

export const crearDatosPersonales = async (req, res) => {
  try {
    const nuevoRegistro = new DatosPersonales(req.body);
    const registroGuardado = await nuevoRegistro.save();
    res.status(201).json(registroGuardado);
  } catch (error) {
    console.error('Error al guardar datos personales:', error.message);
    res.status(400).json({ mensaje: 'Error al guardar los datos', error });
  }
};




