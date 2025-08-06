//controllers/formacionAcademicaControllers.js
import FormacionAcademica from '../models/FormacionAcademica.js';

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
    const datos = await FormacionAcademica.findOne({ user: req.user.uid }); // Cambié req.usuario._id por req.user.uid
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

// Nueva función para actualizar
export const actualizarFormacionAcademica = async (req, res) => {
  try {
    const userId = req.user.uid;
    console.log('🔄 Actualizando para usuario:', userId);
    
    // Buscar el registro existente
    const formacionExistente = await FormacionAcademica.findOne({ user: userId });
    console.log('📋 Registro encontrado:', formacionExistente ? 'SÍ' : 'NO');
    
    if (!formacionExistente) {
      console.log('❌ No se encontró registro para actualizar');
      return res.status(404).json({ 
        mensaje: "No se encontró formación académica para actualizar" 
      });
    }

    // Preparar los datos para actualizar
    const datosActualizacion = {
      ...req.body,
      user: userId // Mantener la referencia al usuario
    };

    console.log('🔄 Actualizando con datos:', datosActualizacion);

    // Actualizar el documento
    const formacionActualizada = await FormacionAcademica.findOneAndUpdate(
      { user: userId },
      datosActualizacion,
      { 
        new: true, // Retorna el documento actualizado
        runValidators: true // Ejecuta las validaciones del esquema
      }
    );

    console.log('✅ Actualización exitosa, ID:', formacionActualizada._id);

    return res.status(200).json({
      mensaje: 'Formación académica actualizada correctamente',
      data: formacionActualizada
    });

  } catch (error) {
    console.error('❌ Error al actualizar formación académica:', error);
    return res.status(500).json({ 
      error: 'Error interno al actualizar la formación académica',
      detalle: error.message 
    });
  }
};