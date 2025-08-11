<template>

<div class="menu">
        <h2>Menú</h2>
       <ul>
        <li><router-link to="/Hoja1">Datos Personales1</router-link></li>
        <li><router-link to="/hojaDeVidaH2">Experiencia Laboral</router-link></li>
        <li><router-link to="/hojaDeVidaH3">Tiempo Total de Experiencia</router-link></li>
        <li><router-link to="/ListaDeTareas">Lista de Tareas</router-link></li>
        <li><router-link to="/HojaDeVidaCompleta">Imprimir Hoja de Vida</router-link> </li>
       </ul>
    </div>

</template>

<script setup>




import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
  localStorage.removeItem('auth')
  router.push('/login')
}


</script>

<style>
.menu{
    width: 200px;
    background-color: rgb(5, 5, 5);
    padding: 20px;
}

.menu ul {
    list-style: none;
    padding: 0;
}

.menu li {
    margin: 10px 0;
}

.menu a {
    text-decoration: none;
    color: rgb(7, 167, 241);
    background: rgb(100, 100, 100);
    padding: 10px;
    display: block;
    border-radius: 5px;
    transition: 0.5s;
}

.menu a:hover {
    background: rgb(207, 11, 11);
}

h2 {
    color:beige;
    text-align: center;
}

</style>