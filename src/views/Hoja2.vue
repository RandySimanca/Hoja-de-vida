<!--src/views/Hoja2.vue-->
<template>
  <div class="section">
    <Header2Component />

    <!-- Mensaje cuando no hay experiencias -->
    <div v-if="experienciaStore.experiencias.length === 0" class="no-experiencias-container">
      <div class="no-experiencias-message">
        <i class="fas fa-briefcase icon-large"></i>
        <h3>No hay experiencias laborales registradas</h3>
        <p>Para completar tu hoja de vida, registra tu experiencia laboral en el siguiente módulo.</p>
        <button 
          @click="irARegistrarExperiencia" 
          class="btn-recordatorio"
        >
          📝 Ir a Registrar Experiencia
        </button>
      </div>
    </div>

    <!-- Lista de experiencias cuando las hay -->
    <div v-for="(exp, i) in experienciaStore.experiencias" :key="i">
      <ExperienciaComponent :experiencia="exp" />
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"; // ✅ Importar useRouter
import { obtenerExperiencias } from "../api/datosAPI.js";
import { useHojaVidaStore } from "../stores/hojaVida";
import { useDatosStore } from "../stores/datos";
import { useUsuarioStore } from "../stores/usuarios";
import { useExperienciaStore } from "../stores/experienciaStore.js";
// import { showWarning, showInfo } from "../utils/showMessage.js"; // ✅ Comentado temporalmente
import api from "../api/axios.js";

/** ─────── 🧠 Componentes ─────── **/
import Header2Component from "../components/Header2Component.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ExperienciaComponent from "../components/ExperienciaComponent.vue";

// ✅ Instancias de los stores y router
const hojaStore = useHojaVidaStore();
const datosStore = useDatosStore();
const usuarioStore = useUsuarioStore();
const experiencias = ref([]);
const experienciaStore = useExperienciaStore();
const router = useRouter(); // ✅ Instancia del router

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
    
    // ✅ Mostrar mensaje automático si no hay experiencias (temporalmente deshabilitado)
    // if (experienciaStore.experiencias.length === 0) {
    //   setTimeout(() => {
    //     mostrarMensajeRecordatorio();
    //   }, 1000);
    // }
  } 
  catch (err) {
    console.error("❌ Error al cargar experiencias:", err);
  }
});

// ✅ Función para redirigir a registrar experiencia
function irARegistrarExperiencia() {
  router.push('/panel/Hoja2Extra');
}

// ✅ Función para mostrar mensaje de recordatorio (opcional - por si la quieres usar en otro lado)
function mostrarMensajeRecordatorio() {
  // showWarning("Recuerda registrar tu experiencia laboral en el siguiente módulo para completar tu hoja de vida.");
  alert("⚠️ Recuerda registrar tu experiencia laboral en el siguiente módulo para completar tu hoja de vida.");
}

// ✅ Función adicional para mostrar información sobre cómo agregar experiencias
function mostrarInfoExperiencia() {
  // showInfo("Puedes agregar múltiples experiencias laborales. Cada una ayudará a fortalecer tu perfil profesional.");
  alert("ℹ️ Puedes agregar múltiples experiencias laborales. Cada una ayudará a fortalecer tu perfil profesional.");
}

function formatearFechaParaFormulario(fecha) {
  if (!fecha) return { dia: '', mes: '', anio: '' };
  const date = new Date(fecha);
  return {
    dia: String(date.getDate()).padStart(2, '0'),
    mes: String(date.getMonth() + 1).padStart(2, '0'),
    anio: String(date.getFullYear())
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

<style scoped>
/* Estilos para el mensaje de no experiencias */
.no-experiencias-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 2rem;
}

.no-experiencias-message {
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px dashed #dee2e6;
  border-radius: 15px;
  padding: 3rem 2rem;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon-large {
  font-size: 4rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.no-experiencias-message h3 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.no-experiencias-message p {
  color: #6c757d;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.btn-recordatorio {
  background: linear-gradient(135deg, #ffc107 0%, #ffca2c 100%);
  color: #212529;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
}

.btn-recordatorio:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.4);
  background: linear-gradient(135deg, #ffca2c 0%, #ffd60a 100%);
}

.btn-recordatorio:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .no-experiencias-message {
    padding: 2rem 1rem;
  }
  
  .icon-large {
    font-size: 3rem;
  }
  
  .no-experiencias-message h3 {
    font-size: 1.3rem;
  }
  
  .no-experiencias-message p {
    font-size: 1rem;
  }
}
</style>