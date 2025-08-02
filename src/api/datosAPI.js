
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

  /*
  // frontend/src/api/datosAPI.js
export async function enviarDatosPersonales(payload) {
    return await fetch('/api/datos-personales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  }*/