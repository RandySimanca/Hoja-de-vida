// frontend/src/api/datosAPI.js
import api from "../helpers/axiosInstance";

export async function enviarDatosPersonales(payload) {
  return await api.post("/datos-personales", payload);
}

export async function actualizarDatosPersonales(payload) {
  return await api.put("/datos-personales", payload); // ✅ nueva función
}

export async function obtenerHojaDeVida() {
  const response = await api.get("/hoja-de-vida");
  return response.data;
}

export async function obtenerExperiencias() {
  return await api.get('/experiencia');
}

export async function guardarExperiencia(payload) {
  return await api.post('/experiencia', payload);
}

export async function guardarFirmaServidor(payload) {
  return await api.post('/firma-servidor', payload);
}

export async function obtenerFirmaServidor() {
  return await api.get('/firma-servidor');
}
