<!-- src/components/RecursosHumComponent.vue -->
<template>
    <div class="section">
      <div class="section-title">
        <span class="section-number">6</span>
        OBSERVACIONES DEL JEFE DE RECURSOS HUMANOS Y/O CONTRATOS
      </div>
  
      <div class="declaration">
        <p>
          CERTIFICO QUE LA INFORMACIÓN AQUÍ SUMINISTRADA HA SIDO CONSTATADA
          FRENTE A LOS DOCUMENTOS QUE HAN SIDO PRESENTADOS COMO SOPORTE.
        </p>
      </div>
  
      <div class="form-group">
        <label for="observations">Observaciones:</label>
        <textarea
          id="observations"
          rows="4"
          readonly
          :value="observaciones"
        ></textarea>
      </div>
  
      <div class="form-group">
        <label for="hr-date">Ciudad y fecha:</label>
        <input
          type="text"
          id="hr-date"
          :value="ciudadFecha"
          placeholder="Ej: Bogotá, 13 de Mayo de 2025"
          readonly
        />
      </div>
  
      <div class="signature-area">
        <p>________________________________</p>
        <p>NOMBRE Y FIRMA DEL JEFE DE PERSONAL O DE CONTRATOS</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // Props opcionales para mostrar contenido dinámico si se desea
  defineProps({
    observaciones: {
      type: String,
      default: ''
    },
    ciudadFecha: {
      type: String,
      default: ''
    }
  });
  </script>
  
  <style scoped>
  /* Puedes agregar estilos si lo necesitas */
  </style>
  