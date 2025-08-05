//controllers/formacionAcademicaControllers.js
import FormacionAcademica from '../models/FormacionAcademica.js';
//import Formacion from '../models/FormacionAcademica.js';

export const crearFormacionAcademica = async (req, res) => {

  try {
    // 1) Fusiona req.body + req.usuario.uid
    const payload = {
      ...req.body,
      user: req.user.uid
    };
    console.log('🛠 Payload a guardar:', payload);

    // 2) Guarda en MongoDB
    const nuevoRegistro = await FormacionAcademica.create(payload);

    return res.status(201).json({
      mensaje: 'Guardado OK',
      data: nuevoRegistro
    });
  } catch (error) {
    console.error('❌ Error al guardar en MongoDB:', error);
    return res
      .status(500)
      .json({ error: 'Error interno al guardar la formacion academica' });
  }
};


export const obtenerFormacionAcademica = async (req, res) => {
  try {
    const datos = await FormacionAcademica.findOne({ user: req.usuario._id });
    if (!datos)
      return res.status(404).json({ mensaje: "No hay formacion academica registrada" });
    res.json(datos);
  } catch (error) {
    res
      .status(500)
      .json({
        mensaje: "Error al obtener la formacion academica",
        detalle: error.message,
      });
  }
};



