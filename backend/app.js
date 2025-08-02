// backend/app.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import formacionAcademicaRoutes from "./routes/formacionAcademica.js"; 

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


app.use("/api/formacion-academica", formacionAcademicaRoutes);


import hojaRoutes from "../routes/hojaVidaRoutes.js"; 
app.use('/api', hojaRoutes); 

export default app;