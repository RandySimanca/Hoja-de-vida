//src/stores/useHojaStore.js
import { defineStore } from "pinia";
import api from "../api/axios";

export const useHojaStore = defineStore("hoja", {
  state: () => ({
    datosPersonales: {},
    formacionAcademica: [],
  }),
  actions: {
    async cargarHoja() {
      try {
        const { data } = await api.get("/Hoja-de-vida");
        this.datosPersonales = data.datosPersonales;
        this.formacionAcademica = data.formacionAcademica?.formacionesSuperior ?? [];
      } catch (error) {
        console.error("❌ Error al cargar hoja:", error.response?.data || error.message);
      }
    },
  },
});