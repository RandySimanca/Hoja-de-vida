//backend/controllers/experienciaController.js
import Experiencia from '../models/Experiencia.js';

export const guardarExperiencia = async (req, res) => {
  try {
    const payload = {
      ...req.body,
      user: req.user.id
    };
    console.log('🛠 Payload a guardar:', payload);

    const experienciaGuardada = await Experiencia.create(payload);
    return res.status(201).json({
      mensaje: 'Guardado OK',
      data: experienciaGuardada
    });
   
  } catch (error) {
    console.error('❌ Error al guardar en MongoDB:', error);
    console.error('📄 Stack trace:', error.stack); // 🧠 Agrega esto
    return res
      .status(500)
      .json({ error: 'Error interno al guardar datos personales' });
  }
};

