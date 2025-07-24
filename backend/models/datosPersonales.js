import mongoose from 'mongoose';

const idiomaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  habla: { type: String, enum: ['R', 'B', 'MB'], default: 'R' },
  lee: { type: String, enum: ['R', 'B', 'MB'], default: 'R' },
  escribe: { type: String, enum: ['R', 'B', 'MB'], default: 'R' },
}, { _id: false });

const datosPersonalesSchema = new mongoose.Schema({
  apellido1: { type: String, required: true },
  apellido2: { type: String },
  nombres: { type: String, required: true },

  tipoDocumento: { type: String, enum: ['cedula', 'cedulExt', 'pasaporte'], required: true },
  numDocumento: { type: String, required: true },

  sexo: { type: String, enum: ['F', 'M'], required: true },
  nacionalidad: { type: String, enum: ['nacCol', 'nacExt'], required: true },
  pais: { type: String, required: true },

  libretaMilitar: { type: String, enum: ['primera', 'segunda'] },
  numeroLibreta: { type: String },
  dm: { type: String },

  nacimiento: {
    dia: { type: String },
    mes: { type: String },
    ano: { type: String },
    pais: { type: String },
    departamento: { type: String },
    municipio: { type: String },
  },

  correspondencia: {
    pais: { type: String },
    departamento: { type: String },
    municipio: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    email: { type: String, match: /^\S+@\S+\.\S+$/ },
  },

  idiomas: [idiomaSchema],
}, { timestamps: true });

export default mongoose.model('DatosPersonales', datosPersonalesSchema);
