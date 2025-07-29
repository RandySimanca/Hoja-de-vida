//datosPersonalesControllers.js
import DatosPersonales from "../models/datosPersonales.js";


export const crearDatosPersonales = async (req, res) => {
  try {
    // 1) Fusiona req.body + req.usuario.uid
    const payload = {
      ...req.body,
      usuario: req.usuario.uid
    };
    console.log('🛠 Payload a guardar:', payload);

    // 2) Guarda en MongoDB
    const nuevoRegistro = await DatosPersonales.create(payload);

    return res.status(201).json({
      mensaje: 'Guardado OK',
      data: nuevoRegistro
    });
  } catch (error) {
    console.error('❌ Error al guardar en MongoDB:', error);
    return res
      .status(500)
      .json({ error: 'Error interno al guardar datos personales' });
  }
};


export const obtenerDatosPersonales = async (req, res) => {
  try {
    const datos = await DatosPersonales.findOne({ usuario: req.usuario._id });
    if (!datos)
      return res.status(404).json({ mensaje: "No hay datos personales" });
    res.json(datos);
  } catch (error) {
    res
      .status(500)
      .json({
        mensaje: "Error al obtener datos personales",
        detalle: error.message,
      });
  }
};





