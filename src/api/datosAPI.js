// frontend/src/api/datosAPI.js
export async function enviarDatosPersonales(payload) {
    return await fetch('/api/datos-personales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  }
  