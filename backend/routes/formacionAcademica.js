//routes/formacionAcademica.js
import express from 'express'
import { crearFormacion, obtenerFormaciones } from '../controllers/formacionAcademica.js'
//import verificarJWT from '../middlewares/verificarJWT.js'

const router = express.Router()

//router.post('/', verificarJWT, crearFormacion)
//router.get('/', verificarJWT, obtenerFormaciones)

export default router



