<template>
  <div class="section">
    <form @submit.prevent="enviarFormulario">
      <!--Seccion del encabezado-->
      <div>
        <HeaderComponent />
      </div>

      <!--Seccion 1. de datos personales-->
      <div>
        <datos-per-component />
      </div>

      <!-- SECCIÓN 2: FORMACIÓN ACADÉMICA -->
      <div>
        <formacion-acad-component />
      </div>

          </form>
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script setup>
import DatosPerComponent from "../components/DatosPerComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FormacionAcadComponent from "../components/FormacionAcadComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import  api from "../api/axios.js";

import { useDatosStore } from "../stores/datos";
import { ref } from "vue";

const datosStore = useDatosStore(); //stores

import axios from "axios";

const enviarFormulario = async () => {
  const datosPersonales = {
    apellido1: apellido1.value,
    apellido2: apellido2.value,
    nombres: nombres.value,
    tipoDocumento: cedula.value
      ? "C.C"
      : cedulExt.value
      ? "C.E"
      : pasaporte.value
      ? "PAS"
      : "",
    sexo: sexoF.value ? "F" : sexoM.value ? "M" : "",
    nacionalidad: nacCol.value
      ? "Colombiana"
      : nacExt.value
      ? "Extranjera"
      : "",
    pais: pais.value,
    libretaMilitar: libretaMilitar.value,
    numeroLibreta: numeroLibreta.value,
    dm: dm.value,
    fechaNacimiento: {
      dia: diaNac.value,
      mes: mesNac.value,
      ano: anoNac.value,
    },
    lugarNacimiento: {
      pais: paisNac.value,
      depto: deptoNac.value,
      municipio: municipioNac.value,
    },
    direccion: {
      pais: paisCorr.value,
      depto: deptoCorr.value,
      municipio: municipioCorr.value,
      direccion: direccionCorr.value,
      telefono: telefono.value,
      email: email.value,
    },
    idiomas: [
      {
        idioma: idioma1.value,
        habla: habla1.value,
        lee: lee1.value,
        escribe: escribe1.value,
      },
      {
        idioma: idioma2.value,
        habla: habla2.value,
        lee: lee2.value,
        escribe: escribe2.value,
      },
    ],
    formacionAcademica: [
      {
        modalidad: modalidad1.value,
        semestres: semestres1.value,
        graduado: graduado1.value,
        titulo: titulo1.value,
        mes: mes1.value,
        ano: ano1.value,
        tarjeta: tarjeta1.value,
      },
      {
        modalidad: modalidad2.value,
        semestres: semestres2.value,
        graduado: graduado2.value,
        titulo: titulo2.value,
        mes: mes2.value,
        ano: ano2.value,
        tarjeta: tarjeta2.value,
      },
      {
        modalidad: modalidad3.value,
        semestres: semestres3.value,
        graduado: graduado3.value,
        titulo: titulo3.value,
        mes: mes3.value,
        ano: ano3.value,
        tarjeta: tarjeta3.value,
      },
    ],
  };

  try {
    const respuesta = await api.post(
      "/api/datos-personales",
      datosPersonales
    );
    console.log("✅ Datos enviados con éxito:", respuesta.data);
  } catch (error) {
    console.error(
      "❌ Error al enviar datos:",
      error.response?.data || error.message
    );
  }
};

/*
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

const modalidad1 = ref("");
const semestres1 = ref("");
const graduado1 = ref("");
const titulo1 = ref("");
const mes1 = ref("");
const ano1 = ref("");
const tarjeta1 = ref("");


const modalidad2 = ref("");
const semestres2 = ref("");
const graduado2 = ref("");
const titulo2 = ref("");
const mes2 = ref("");
const ano2 = ref("");
const tarjeta2 = ref("");


const modalidad3 = ref("");
const semestres3 = ref("");
const graduado3 = ref("");
const titulo3 = ref("");
const mes3 = ref("");
const ano3 = ref("");
const tarjeta3 = ref("");*/
</script>

<style>
.boton-guardar {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.boton-guardar:hover {
  background-color: #2980b9;
}

.h1 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #ffffff;
  letter-spacing: 1px;
}
.main-content {
  flex-grow: 1;
  overflow-y: auto;
}

.main-content {
  flex-grow: 1;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
}

.header {
  background-color: #24292e;
  color: #fff;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 12px;
  text-align: center;
}

.h1 {
  color: #f10c0c;
  text-align: center;
  margin-bottom: 24px;
}

.boton-cerrar {
  background-color: #ef4444;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.boton-cerrar:hover {
  background-color: #dc2626;
}

.saludo {
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  color: #2c3e50;
  padding: 0.75rem 1rem;
  background-color: #f8f9fa;
  border-left: 4px solid #34495e;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
}

.saludo strong {
  color: #1a1a1a;
  font-weight: 600;
}

.saludo {
  text-align: center;
  margin-bottom: 24px;
}

.saludo {
  display: block;
  margin-bottom: 24px;
}

.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 240px;
  flex-shrink: 0;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar {
  width: 240px;
  background: linear-gradient(135deg, #1d1f27, #2c2f36);
  color: #f1f1f1;
  padding: 20px;
  height: 100%;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
  font-family: "Segoe UI", sans-serif;
}

.sidebar-menu li {
  margin-bottom: 16px;
}

.sidebar-menu a {
  display: block;
  padding: 12px 16px;
  color: #e0e0e0;
  background-color: transparent;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.sidebar-menu a:hover,
.sidebar-menu a.router-link-exact-active {
  background-color: #00d8ff22;
  color: #00d8ff;
  font-weight: 600;
  border-left: 4px solid #00d8ff;
}

.sidebar {
  width: 220px;
  background-color: #1d2024;
  color: white;
  padding: 20px;
  height: 100%;
}
.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  margin-bottom: 16px;
}

.sidebar-menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.sidebar-menu a:hover {
  color: #00d8ff;
}

.section-scrol {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  scroll-behavior: smooth;
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
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 1);
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

.container1 {
  border: 5px solid rgb(0, 204, 255);
  border-radius: 18px;
  
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1px;
  border: 2px solid rgb(0, 204, 255);
  border-radius: 18px;
  flex-direction: row;
  gap: 100px;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 1);
}

.image-column,
.form-group {
  flex: 1;
}

header {
  text-align: center;
}

.main-section {
  display: flex;
}

.header h2,
.header h3,
.header p {
  margin: 5px 0;
  color: #f8f6f6;
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

form {
  margin-bottom: 40px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 11px;
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

.form-control {
  width: 70%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
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

.form-control3 {
  width: 30%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.checkbox-group {
  display: flex;
  align-items: left;
  margin-right: 5px;
}
.checkbox-group input {
  margin-left: 0px;
}
.imagen {
  width: 100px;
  height: 120px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
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

.compacto h3,
.compacto h2,
.compacto p {
  margin-top: 0;
  margin-bottom: 4px;
  text-align: center;
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

.p {
  font-size: 11px;
}

</style>
