// src/stores/hojaVida.js
import { defineStore } from "pinia";
import { obtenerHojaDeVida } from "../api/datosAPI";

export const useHojaVidaStore = defineStore("hojaVida", {
  state: () => ({
    datosPersonales: null,
    formacionAcademica: null,
    cargado: false, // NUEVO: control de carga
  }),
  actions: {
    async cargarHojaDeVida() {
      try {
        const data = await obtenerHojaDeVida();
        console.log("📦 Datos recibidos del backend:", data);
        this.datosPersonales = data.datosPersonales;
        this.formacionAcademica = data.formacionAcademica;
      } catch (error) {
        console.warn("⚠️ No se encontraron datos, usuario nuevo:", error?.response?.data || error.message);
        this.datosPersonales = {};  // fallback vacío
        this.formacionAcademica = {}; // fallback vacío
      } finally {
        this.cargado = true; // Siempre marcar como cargado
      }
    },
  },
});

/*
// src/stores/hojaVida.js
import { defineStore } from "pinia";
import api from "../api/axios"; // o el path real a tu instancia Axios

export const useHojaVidaStore = defineStore("hojaVida", {
  state: () => ({
    datosPersonales: null,
    formacionAcademica: null,
  }),
  actions: {
    async cargarHojaDeVida() {
      try {
        const response = await api.get("/hoja-de-vida");
        this.datosPersonales = response.data.datosPersonales;
        this.formacionAcademica = response.data.formacionAcademica;
      } catch (error) {
        console.error("❌ Error al cargar hoja de vida:", error);
      }
    }
  }
});
*/
