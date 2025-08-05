// backend/controllers/experienciaController.js
import Experiencia from '../models/Experiencia.js';


export const guardarExperiencia = async (req, res) => {
  try {
    const payload = {
      ...req.body,
      user: req.user.id,
      fechaIngreso: req.body.fechaIngreso ? new Date(req.body.fechaIngreso) : null,
      fechaRetiro: req.body.fechaRetiro ? new Date(req.body.fechaRetiro) : null,
    };

    console.log('🛠 Payload a guardar:', payload);

    const experienciaGuardada = await Experiencia.create(payload);
    return res.status(201).json({
      mensaje: 'Guardado OK',
      data: experienciaGuardada
    });

  } catch (error) {
    console.error('❌ Error al guardar en MongoDB:', error);
    console.error('📄 Stack trace:', error.stack);
    return res
      .status(500)
      .json({ error: 'Error interno al guardar datos de experiencia' });
  }
};
export const obtenerExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find({ user: req.user.id });
    return res.status(200).json(experiencias); // Aquí deberían venir las fechas en formato ISO
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener experiencias' });
  }
};


