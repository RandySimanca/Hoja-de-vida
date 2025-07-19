import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ["usuario"] },
  fechaCreacion: { type: Date, default: Date.now },
  ultimoAcceso: Date,
});

// Middleware de encriptación
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Método personalizado
usuarioSchema.methods.validarPassword = async function (pwPlano) {
  return await bcrypt.compare(pwPlano, this.password);
};

export default mongoose.model("Usuario", usuarioSchema);
