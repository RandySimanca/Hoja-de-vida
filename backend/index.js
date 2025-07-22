// backend/index.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import usuariosRoute from './routes/usuarios.js';
import loginRoute from './routes/login.js';

connectDB(); // Conexión a MongoDB

const app = express();
app.use(express.json()); // Habilita JSON en req.body

// Rutas
app.use('/api/usuarios', usuariosRoute); // Registro de usuarios
app.use('/api', loginRoute); // Login en /api/login

// Arranque del servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
