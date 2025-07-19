<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="layout">
    <!-- Menú lateral -->
    <aside class="sidebar">
      <h1 class="h1">Menu</h1>
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
/* Menú lateral elegante */
.sidebar {
  width: 240px;
  background: linear-gradient(135deg, #1d1f27, #2c2f36);
  color: #f1f1f1;
  padding: 20px;
  height: 100%;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
  font-family: 'Segoe UI', sans-serif;
}

/* Título del menú */
.h1 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #ffffff;
  letter-spacing: 1px;
}

/* Lista del menú */
.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Item del menú */
.sidebar-menu li {
  margin-bottom: 16px;
}

/* Enlace del menú */
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

/* Hover y selección */
.sidebar-menu a:hover,
.sidebar-menu a.router-link-exact-active {
  background-color: #00d8ff22;
  color: #00d8ff;
  font-weight: 600;
  border-left: 4px solid #00d8ff;
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

.h1 {
  color: #f10c0c;
  text-align: center;
  margin-bottom: 24px;
}
</style>
