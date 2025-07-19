<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="layout">
    <!-- Menú lateral -->
    <aside class="sidebar">
      <nav>
        <ul class="sidebar-menu">
          <li><router-link to="/panel/Hoja1">Datos Personales</router-link></li>
          <li><router-link to="/panel/Hoja2">Experiencia Laboral</router-link></li>
          <li><router-link to="/panel/Hoja2Extra">Experiencia Laboral2</router-link></li>
          <li><router-link to="/panel/Hoja3">Tiempo Total de Experiencia</router-link></li>
        </ul>
      </nav>
    </aside>
    <div class="main-content">
      <RouterView />
    </div>
    
  </div>
</template>


<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}

/* Layout horizontal */
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh; /* Asegura que ocupa toda la pantalla */
}

/* Menú lateral */
.sidebar {
  width: 220px;
  background-color: #1d2024;
  color: white;
  padding: 20px;
  height: 100%; /* Igual que el layout */
}

/* Contenido principal */
.main-content {
  flex-grow: 1;
  padding: 24px;
  height: 100%; /* Asegura alineación */
  overflow-y: auto;
}

/* Encabezado */
.header {
  background-color: #24292e;
  color: #fff;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 12px;
  text-align: center;
}

/* Menú */
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
</style>
