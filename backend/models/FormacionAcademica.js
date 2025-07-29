//models/FormacionAcademica.js
import mongoose from 'mongoose'

const formacionAcademicaSchema = new mongoose.Schema({
  nivel: { type: String, required: true },          // Ej: 'Universitario', 'Técnico'
  institucion: { type: String, required: true },
  titulo: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date },                         // Opcional si sigue en curso
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
}, { timestamps: true })

export default mongoose.model('FormacionAcademica', formacionAcademicaSchema)
