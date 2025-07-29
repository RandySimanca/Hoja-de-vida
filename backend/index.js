// backend/index.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/db.js';
import usuariosRoute from './routes/usuarios.js';
import loginRoute from './routes/login.js';
import datosPersonalesRoute from './routes/datosPersonales.js';
import formacionAcademicaRoutes from './routes/formacionAcademica.js';
import cors from 'cors';



// ✅ Inicializar Express antes de usarlo
const app = express();

// 🔌 Conexión a MongoDB
connectDB();

// 🧠 Middleware para JSON
app.use(cors());   // Datos personales
app.use(express.json()); // Habilita JSON en req.body

// 🚀 Rutas
app.use('/api/usuarios', usuariosRoute); // Registro de usuarios
app.use('/api/login', loginRoute);       // Login
app.use('/api', datosPersonalesRoute);
app.use('/api/formacionAcademica', formacionAcademicaRoutes); // Formación académica


// 🎧 Inicio del servidor
app.listen(3000, () => {
  console.log('✅ Servidor corriendo en puerto 3000');
});


