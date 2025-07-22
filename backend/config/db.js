// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/baseDeDatosHV');
    console.log('Servidor corriendo en el puerto 3000 con exito');
    console.log('✅ MongoDB conectado');
  } catch (err) {
    console.error('❌ Error al conectar MongoDB:', err.message);
  }
};

export default connectDB;
