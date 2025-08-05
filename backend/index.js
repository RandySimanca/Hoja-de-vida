// backend/index.js

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import usuariosRoute from "./routes/usuarios.js";
import loginRoute from "./routes/login.js";
import datosPersonalesRoute from "./routes/datosPersonales.js";
import formacionAcademicaRoute from "./routes/formacionAcademica.js";
import hojaVidaRoute from "./routes/hojaVidaRoutes.js"; // Asegúrate de que la ruta sea correcta
import experienciaRoutes from "./routes/experiencia.js"; // Asegúrate de que la ruta sea correcta

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Registramos rutas con guión para coincidir con el front
app.use("/api/usuarios", usuariosRoute);
app.use("/api/login", loginRoute);
app.use("/api", datosPersonalesRoute);
app.use("/api/formacion-academica", formacionAcademicaRoute);
app.use("/api", hojaVidaRoute); // Asegúrate de que la ruta sea correcta
app.use("/api/experiencia", experienciaRoutes); // Asegúrate de que la ruta sea correcta

app.listen(3000, () => {
  console.log("✅ Servidor corriendo en puerto 3000");
});

/*// backend/index.js coriendo con normailidad
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

*/
