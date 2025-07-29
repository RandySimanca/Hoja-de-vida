<template>
  <div class="section">
    <div>
      <Header2Component />
    </div>

    <div class="" v-for="(exp, index) in experiencias" :key="index">
      <ExperienciaComponent />
    </div>
    <div class="form-group" style="margin-top: 20px">
      <button type="submit" class="boton-guardar" @click="agregarExperiencia">Agregar experiencia</button>
  </div>

  <div>
  <FooterComponent/>
 </div>

  </div>

</template>

<script setup>
import { useDatosStore } from "../stores/datos";
import { ref } from "vue";
import ExperienciaComponent from "../components/ExperienciaComponent.vue";
import Header2Component from "../components/Header2Component.vue";
import Footer from "../components/FooterComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

// Lista reactiva de experiencias
const experiencias = ref([{}]);

// Función para agregar una nueva experiencia
function agregarExperiencia() {
  experiencias.value.push({});
}
const datosStore = useDatosStore(); //stores
</script>

<style>
/*

  .contenido{
    border-color: rgb(233, 9, 9);
    background-color: rgb(214, 245, 164);
    padding: 10px;
    width: auto;
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

.sidebar {
  width: 240px;
  background: linear-gradient(135deg, #1d1f27, #2c2f36);
  color: #f1f1f1;
  padding: 20px;
  height: 100%;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
  font-family: "Segoe UI", sans-serif;
}


.h1 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #ffffff;
  letter-spacing: 1px;
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

.main-content {
  flex-grow: 1;
  overflow-y: auto;
}
  */
</style>
