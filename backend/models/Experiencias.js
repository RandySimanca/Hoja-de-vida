const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  empresa: String,
  tipoEntidad: { type: String, enum: ['Publica', 'Privada'] },
  pais: String,
  departamento: String,
  municipio: String,
  correoEntidad: String,
  telefonos: String,
  fechaIngreso: {
    dia: String,
    mes: String,
    año: String
  },
  fechaRetiro: {
    dia: String,
    mes: String,
    año: String
  },
  cargo: String,
  dependencia: String,
  direccion: String
});

module.exports = mongoose.model('Experiencia', experienciaSchema);


