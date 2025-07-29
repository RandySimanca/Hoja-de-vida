//controllers/formacionAcademica.js
import FormacionAcademica from '../models/FormacionAcademica.js'

export const crearFormacion = async (req, res) => {
  try {
    const nueva = new FormacionAcademica({ ...req.body, usuario: req.usuario.id })
    await nueva.save()
    res.status(201).json(nueva)
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar formación académica', detalle: err.message })
  }
}

export const obtenerFormaciones = async (req, res) => {
  try {
    const formaciones = await FormacionAcademica.find({ usuario: req.usuario.id })
    res.json(formaciones)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener formaciones' })
  }
}
