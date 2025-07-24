//backend/server.js
// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Dependencias
import express from 'express';
import mongoose from 'mongoose';

// Inicializar app
const app = express();
app.use(express.json());

// Rutas
import datosPersonalesRoutes from './routes/datosPersonales.js';
app.use('/api', datosPersonalesRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conexión a MongoDB establecida'))
.catch(err => console.error('❌ Error de conexión a MongoDB:', err));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express corriendo en el puerto ${PORT}`);
});


