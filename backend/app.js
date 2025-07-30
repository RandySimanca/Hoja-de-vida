// backend/app.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import formacionAcademicaRoutes from "./routes/formacionAcademica.js"; // adapta si ya lo tenías
//import authRoutes from './middlewares/auth.js'; // Asegúrate de que esta ruta sea correcta

//import formacionRoutes from '../routes/formacionAcademica.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error en MongoDB:", err));

//app.use('/api/auth', authRoutes); // Asegúrate de que esta ruta sea correcta
app.use("api/auth");
app.use("/api/formacion-academica", formacionAcademicaRoutes);

export default app;

// manejo global de errores
/*
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Error inesperado' });
});

//const PORT = process.env.PORT || 4000;
//app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));



//codigo antiguo pero...

/*
import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.js';
import formacionAcademicaRoutes from './routes/formacionAcademica.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/formacionAcademica', formacionAcademicaRoutes);

export default app;*/
