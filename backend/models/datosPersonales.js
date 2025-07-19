const mongoose = require('mongoose');

const datosPersonalesSchema = new mongoose.Schema({
  apellido1: String,
  apellido2: String,
  nombres: String,
  tipoDocumento: String,
  numDocumento: String,
  sexo: String,
  nacionalidad: String,
  pais: String,
  libretaMilitar: String,
  numeroLibreta: String,
  dm: String,
  fechaNacimiento: {
    dia: String,
    mes: String,
    ano: String
  },
  lugarNacimiento: {
    pais: String,
    depto: String,
    municipio: String
  },
  direccion: {
    pais: String,
    depto: String,
    municipio: String,
    direccion: String,
    telefono: String,
    email: String
  },
  idiomas: [
    {
      idioma: String,
      habla: String,
      lee: String,
      escribe: String
    }
  ]
});

module.exports = mongoose.model('DatosPersonales', datosPersonalesSchema);

