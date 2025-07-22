import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexión establecida'))
.catch(err => console.error('Error de conexión:', err));
