  // frontend/src/api/datosAPI.js
import api from "../helpers/axiosInstance";

// POST (ya existente)
export async function enviarDatosPersonales(payload) {
  return await api.post("/datos-personales", payload);
}

// NUEVO: GET para hoja de vida
export async function obtenerHojaDeVida() {
  const response = await api.get("/hoja-de-vida");
  return response.data;
}

export async function obtenerExperiencias() {
  return await api.get('/experiencia'); // Asume que tu backend está montado en /api
}

// POST: Guardar nueva experiencia laboral
export async function guardarExperiencia(payload) {
  return await api.post('/experiencia', payload);
}

// src/api/datosAPI.js
export async function guardarFirmaServidor(payload) {
  return await api.post('/firma-servidor', payload);
}

export async function obtenerFirmaServidor() {
  return await api.get('/firma-servidor');
}
