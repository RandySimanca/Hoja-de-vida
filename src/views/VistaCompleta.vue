<template>
    <div ref="documento">
      <Hoja1 />
      <Hoja2 />
      <Hoja3 />
    </div>
    <button @click="generarPDF">Generar PDF</button>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import html2pdf from "html2pdf.js";
  import Hoja1 from "./Hoja1.vue";
  import Hoja2 from "./Hoja2.vue";
  import Hoja3 from "./Hoja3.vue";
  
  const documento = ref(null);
  
  function generarPDF() {
    const opciones = {
      margin: 0,
      filename: "hoja-de-vida.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] }
    };
    html2pdf().set(opciones).from(documento.value).save();
  }
  </script>
  
  <style></style>