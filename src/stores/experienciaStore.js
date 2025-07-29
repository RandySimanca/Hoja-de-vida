// src/stores/experienciaStore.js
import { defineStore } from 'pinia';

export const useExperienciaStore = defineStore('experiencia', {
  state: () => ({
    experiencias: [],
  }),
  actions: {
    agregar(experiencia) {
      this.experiencias.push(experiencia);
    },
    actualizar(index, nuevaData) {
      this.experiencias[index] = nuevaData;
    },
    eliminar(index) {
      this.experiencias.splice(index, 1);
    },
    resetear() {
      this.experiencias = [];
    },
  },
});
