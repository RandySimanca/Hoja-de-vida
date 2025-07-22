//backend/app.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usuariosRoutes from './routes/usuarios.js';

const app = express();

app.use(cors()); // ⬅️ Aquí va CORS
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

app.use('/api/usuarios', usuariosRoutes);

export default app;