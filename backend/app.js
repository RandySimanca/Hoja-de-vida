// backend/app.js
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

export default app;


/*

//backend/app.js
import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.js';

const app = express();

app.use(cors()); // ⬅️ Aquí va CORS
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

app.use('/api/usuarios', usuariosRoutes);

export default app;*/