<template>
  <div class="layout">
    <!-- Menú lateral -->
    <aside class="lateral">
      <h1>Menú</h1>
      <nav>
        <ul class="menu">
          <li><router-link to="/Hoja1">Datos Personales</router-link></li>
          <li>
            <router-link to="/Hoja2">Experiencia Laboral</router-link>
          </li>
          <li>
            <router-link to="/Hoja2Extra">Experiencia Laboral2</router-link>
          </li>
          <li>
            <router-link to="/Hoja3">Tiempo Total de Experiencia</router-link>
          </li>
          <!-- <li>
            <router-link to="/ListaDeTareas">Lista de Tareas</router-link>
          </li> -->
          <li>
            <router-link to="/HojaDeVidaCompleta"
              >Imprimir Hoja de Vida</router-link
            >
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Contenido principal-->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style>
.lateral {
  background-color: rgb(108, 108, 109);
}
.menu {
  width: 200px;
  background-color: rgb(2, 3, 68);
  padding: 20px;
  border-radius: 20px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 10px 0;
  list-style-type: none;
  padding-left: 0;
}

.menu a {
  text-decoration: none;
  color: rgb(249, 250, 250);
  background: rgb(100, 100, 100);
  padding: 10px;
  display: block;
  border-radius: 5px;
  transition: 0.5s;
}

.menu a:hover {
  background: rgb(6, 121, 167);
}

h1 {
  color: rgb(250, 250, 249);
  text-align: center;
}
</style>
