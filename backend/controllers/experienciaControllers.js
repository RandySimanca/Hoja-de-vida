const Experiencia = require('../models/Experiencia');

exports.crearExperiencia = async (req, res) => {
  try {
    const nuevaExp = new Experiencia(req.body);
    await nuevaExp.save();
    res.status(201).send(nuevaExp);
  } catch (err) {
    res.status(500).send({ error: 'Error al guardar experiencia', detalle: err });
  }
};

exports.obtenerExperiencias = async (req, res) => {
  try {
    const todas = await Experiencia.find();
    res.status(200).send(todas);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer experiencias', detalle: err });
  }
};



const Experiencia = require('../models/Experiencia');

// Crear nueva experiencia
exports.crearExperiencia = async (req, res) => {
  try {
    const nuevaExp = new Experiencia(req.body);
    await nuevaExp.save();
    res.status(201).json(nuevaExp);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al guardar experiencia',
      detalle: error.message,
    });
  }
};

// Obtener todas las experiencias
exports.obtenerExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find();
    res.status(200).json(experiencias);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al leer experiencias',
      detalle: error.message,
    });
  }
};


