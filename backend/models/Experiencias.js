const mongoose = require('mongoose');
const experienciaSchema = new mongoose.Schema({
  fecha: Date,
  categoria: String,
  horas: Number,
  observaciones: String,
});
module.exports = mongoose.model('Experiencia', experienciaSchema);

