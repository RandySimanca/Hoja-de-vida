<!--src/views/Hoja2.vue-->
<template>
  <div class="section">
    <Header2Component />

    <div v-if="experienciaStore.experiencias.length === 0">
  <p>No hay experiencias laborales registradas.</p>
</div>


    <div v-for="(exp, i) in experienciaStore.experiencias" :key="i">
      <ExperienciaComponent :experiencia="exp" />
    </div>

    <FooterComponent />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { obtenerExperiencias } from "../api/datosAPI.js";
import { useHojaVidaStore } from "../stores/hojaVida";
import { useDatosStore } from "../stores/datos";
import { useUsuarioStore } from "../stores/usuarios";
import { useExperienciaStore } from "../stores/experienciaStore.js";
import api from "../api/axios.js";

/** ─────── 🧠 Componentes ─────── **/
import Header2Component from "../components/Header2Component.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ExperienciaComponent from "../components/ExperienciaComponent.vue";

// ✅ Instancias de los stores
const hojaStore = useHojaVidaStore();
const datosStore = useDatosStore();
const usuarioStore = useUsuarioStore();
const experiencias = ref([]);
const experienciaStore = useExperienciaStore();

const token = localStorage.getItem("token");
 

onMounted(async () => {
  if (!token) {
    console.error("❌ Token no encontrado. Redirigiendo o mostrando fallback...");
  } else {
    hojaStore.cargarHojaDeVida();
    console.log("✅ Token válido:", token);
  }

  try {
    await experienciaStore.cargarExperiencia();
     console.log("✅ Experiencias cargadas:", experienciaStore.experiencias);   
  } 
  catch (err) {
    console.error("❌ Error al cargar experiencias:", err);
  }
});


function formatearFechaParaFormulario(fecha) {
  if (!fecha) return { dia: '', mes: '', anio: '' };
  const date = new Date(fecha);
  return {
    dia: String(date.getDate()).padStart(2, '0'),
    mes: String(date.getMonth() + 1).padStart(2, '0'),
    anio: String(date.getFullYear()) // ← corregido aquí también
  };
}


function agregarExperiencia() {
  hojaStore.experiencia.push({
    tipo: "",
    ingreso: { dia: "", mes: "", anio: "" },
    retiro: { dia: "", mes: "", anio: "" },
    empresa: "",
    pais: "",
    departamento: "",
    municipio: "",
    correo: "",
    telefonos: "",
    cargo: "",
    dependencia: "",
    direccion: "",
  });
}
</script>


<style>

</style>
