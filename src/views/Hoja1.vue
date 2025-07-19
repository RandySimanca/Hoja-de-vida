<template>
  <div class="section">
    <form @submit.prevent="enviarFormulario">
      <!--Seccion del encabezado, esta dentro del form para validar el input de la entidad receptora-->
      <div>
        <Headercomponent />
      </div>

      <!--Seccion de datos personales-->
      <div>
        <datos-per-component />
      </div>

      <!-- SECCIÓN 2: FORMACIÓN ACADÉMICA -->
      <div>
        <formacion-acad-component />
      </div>
    </form>
  </div>
</template>

<script setup>
import DatosPerComponent from "../components/DatosPerComponent.vue";
import FormacionAcadComponent from "../components/FormacionAcadComponent.vue";
import Headercomponent from "../components/Headercomponent.vue";
import { useDatosStore } from "../stores/datos";
import { ref } from "vue";

const datosStore = useDatosStore(); //stores

const entidad = ref("");
const apellido1 = ref("");
const apellido2 = ref("");
const nombres = ref("");
const cedula = ref("");
const cedulExt = ref("");
const pasaporte = ref("");
const sexoF = ref("");
const sexoM = ref("");
const nacCol = ref("");
const nacExt = ref("");
const pais = ref("");
const libretaMilitar = ref("");
const numeroLibreta = ref("");
const dm = ref("");
const diaNac = ref("");
const mesNac = ref("");
const anoNac = ref("");
const paisNac = ref("");
const deptoNac = ref("");
const municipioNac = ref("");
const paisCorr = ref("");
const deptoCorr = ref("");
const municipioCorr = ref("");
const direccionCorr = ref("");
const telefono = ref("");
const email = ref("");
const idioma1 = ref("");
const habla1 = ref("");
const lee1 = ref("");
const escribe1 = ref("");
const idioma2 = ref("");
const habla2 = ref("");
const lee2 = ref("");
const escribe2 = ref("");
// Fila 1
const modalidad1 = ref("");
const semestres1 = ref("");
const graduado1 = ref("");
const titulo1 = ref("");
const mes1 = ref("");
const ano1 = ref("");
const tarjeta1 = ref("");

// Fila 2
const modalidad2 = ref("");
const semestres2 = ref("");
const graduado2 = ref("");
const titulo2 = ref("");
const mes2 = ref("");
const ano2 = ref("");
const tarjeta2 = ref("");

// Fila 3
const modalidad3 = ref("");
const semestres3 = ref("");
const graduado3 = ref("");
const titulo3 = ref("");
const mes3 = ref("");
const ano3 = ref("");
const tarjeta3 = ref("");
</script>

<style>
.container {
  display: flex;
  justify-content: space-between; /* Distribuye las columnas */
  align-items: flex-start; /* Asegura que se alineen desde arriba */
  gap: 1px; /* Espaciado uniforme entre elementos */
  border: 2px solid rgb(0, 204, 255);
  border-radius: 18px;
  flex-direction: row;
  gap: 100px;
}

.container1 {
  border: 5px solid rgb(0, 204, 255);
  border-radius: 18px;
}

.section {
  border: 2px solid rgb(0, 204, 255);
  padding: 10px;
  gap: 10px;
  display: block;
  border-radius: 18px;
  flex-direction: row;
  gap: 1px;
  align-items: flex-start;
  margin-top: 0;
}

.image-column,
.form-group {
  flex: 1; /* Asegura que cada elemento ocupe un espacio proporcional */
}

.main-section {
  display: flex;
}

.header {
  text-align: center;
}

.header h2,
.header h3,
.header p {
  margin: 5px 0;
  color: #f8f6f6;
}

.form-group label {
  margin-bottom: 4px;
}

.form-control {
  width: 70%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.form-control3 {
  width: 30%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.imagen {
  width: 100px;
  height: 120px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.section-title {
  background-color: rgb(10, 10, 10);
  padding: 2px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #ccc;
  max-width: fit-content;
  border-radius: 5px;
}
.section-number {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #b4b4b4;
  color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  outline: 2px solid #808080;
}
.form-group {
  margin-right: 5px;
  margin-bottom: 5px;
  flex: 1;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 11px;
}
.form-control {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form-control1 {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form-control2 {
  width: 50%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.checkbox-group {
  display: flex;
  align-items: left;
  margin-right: 5px;
}
.checkbox-group input {
  margin-left: 0px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}
.table th,
.table td {
  border: 1px solid #ccc;
  padding: 1px;
  text-align: center;
  font-size: 12px;
}
.table th {
  background-color: #f0f0f0;
}
.signature-box {
  border: 1px solid #ccc;
  height: 80px;
  margin-top: 10px;
}
.col-2 {
  flex: 10 0 10%;
}
.col-3 {
  flex: 0 0 31%;
}
.col-4 {
  flex: 0 0 23%;
}
.text-center {
  text-align: center;
}
.footer {
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
}

.p {
  font-size: 11px;
}

.header {
  margin-top: 0;
  align-items: center;
  background-color: #117de9;
  color: rgb(253, 252, 252);
  padding: 16px 32px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-family: "Segoe UI", sans-serif;
  padding-top: 0;
  display: flex;
  justify-content: center;
  text-align: center;
}

.tittle {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-list li a:hover {
  background-color: #00d8ff;
  color: #24292e;
  border-radius: 4px;
}

.compacto h3,
.compacto h2,
.compacto p {
  margin-top: 0;
  margin-bottom: 4px; /* puedes ajustar este valor */
}
</style>
