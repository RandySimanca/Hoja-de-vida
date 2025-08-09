<template>
    <div>
      <!-- Botón para descargar (NO se imprime) -->
      <div class="" style="margin-bottom: 20px;">
        <button @click="exportarPDF" class="boton-descarga">
          Descargar PDF
        </button>
      </div>
  
      <!-- Contenedor de todas las hojas -->
      <div ref="contenidoPDF">
        <Hoja1 class="pagina carta" />
        <Hoja2 class="pagina carta" />
        <Hoja3 class="pagina carta" />
      </div>
    </div>
  </template>
  
  <script>
  import html2pdf from "html2pdf.js";
  import Hoja1 from "./Hoja1.vue";
  import Hoja2 from "./Hoja2.vue";
  import Hoja3 from "./Hoja3.vue";
  
  export default {
    components: { Hoja1, Hoja2, Hoja3 },
    methods: {
      exportarPDF() {
        // Clonamos el contenido para evitar modificar el DOM original
        const original = this.$refs.contenidoPDF.cloneNode(true);
  
        // Eliminamos todos los elementos marcados como "no-imprimir"
        original.querySelectorAll(".no-imprimir").forEach(el => el.remove());
  
        // Configuración para tamaño carta (Letter)
        const opciones = {
          margin: 0,
          filename: "hoja_de_vida_completa.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
        };
  
        // Generamos el PDF con las opciones y el contenido clonado
        html2pdf().set(opciones).from(original).save();
      }
    }
  };
  </script>
  
  <style>
  
  </style>
  