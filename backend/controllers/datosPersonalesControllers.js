const DatosPersonales = require("../models/datosPersonales");

exports.crearDatos = async (req, res) => {
  try {
    const nuevoRegistro = new DatosPersonales(req.body);
    await nuevoRegistro.save();
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error al guardar datos personales",
        detalle: error.message,
      });
  }
};
