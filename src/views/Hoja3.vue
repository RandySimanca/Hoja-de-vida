<!-- src/views/Hoja3.vue -->
<template>
  <div class="section">
    <Header2Component />

    <ExperienciaTotComponent
      :publico="publico"
      :privado="privado"
      :independiente="independiente"
      :totalAnios="totalAnios"
      :totalMeses="totalMeses"
    />

    <FirmaServidorComponent />

    <RecursosHumComponent />

    <FooterComponent />
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import Header2Component from "../components/Header2Component.vue";
import ExperienciaTotComponent from "../components/ExperienciaTotComponent.vue";
import FirmaServidorComponent from "../components/FirmaServidorComponent.vue";
import RecursosHumComponent from "../components/RecursosHumComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { useHojaVidaStore } from "../stores/hojaVida";
import api from "../api/axios";

// Store
const hojaStore = useHojaVidaStore();

// Experiencias cargadas desde la API
const experiencias = ref([]);

// Totales por tipo
const publico = reactive({ anios: 0, meses: 0 });
const privado = reactive({ anios: 0, meses: 0 });
const independiente = reactive({ anios: 0, meses: 0 });

const token = localStorage.getItem("token");

onMounted(async () => {
  if (!token) {
    console.error("❌ Token no encontrado. Redirigiendo o mostrando fallback...");
  } else {
    console.log("✅ Token válido:", token);
    await cargarExperiencias();
    await hojaStore.cargarHojaDeVida();
  }
});

// Función para cargar experiencias desde la API
async function cargarExperiencias() {
  try {
    const response = await api.get('/experiencia');
    experiencias.value = response.data;
    console.log('✅ Experiencias cargadas:', experiencias.value);
    recalcularTotales();
  } catch (error) {
    console.error('❌ Error al cargar experiencias:', error);
  }
}

function calcularDuracion(fechaIngreso, fechaRetiro) {
  // Convertir las fechas ISO a objetos Date
  const desde = new Date(fechaIngreso);
  const hasta = new Date(fechaRetiro);

  if (isNaN(desde) || isNaN(hasta) || hasta < desde) {
    return { anios: 0, meses: 0 };
  }

  let anios = hasta.getFullYear() - desde.getFullYear();
  let meses = hasta.getMonth() - desde.getMonth();
  
  // Ajustar si el día final es menor que el inicial
  if (hasta.getDate() < desde.getDate()) {
    meses--;
  }
  
  
  if (meses < 0) {
    anios--;
    meses += 12;
  }

   meses++;
  
  if (meses >= 12) {
    anios++;
    meses -= 12;
  }

  console.log(`📅 Calculando: ${desde.toISOString().split('T')[0]} a ${hasta.toISOString().split('T')[0]}`);
  console.log(`📊 Resultado final: ${anios} años, ${meses} meses`);

  return { anios, meses };
}

function acumularPorTipo(tipoEntidad, anios, meses) {
  let destino;
  
  // Mapear el tipo de entidad correctamente
  switch (tipoEntidad?.toLowerCase()) {
    case 'publica':
      destino = publico;
      break;
    case 'privada':
      destino = privado;
      break;
    case 'independiente':
      destino = independiente;
      break;
    default:
      console.warn(`Tipo de entidad no reconocido: ${tipoEntidad}`);
      return;
  }
  
  // Sumar los meses totales
  const totalMesesActuales = destino.anios * 12 + destino.meses;
  const mesesNuevos = anios * 12 + meses;
  const totalMesesFinal = totalMesesActuales + mesesNuevos;
  
  // Convertir de vuelta a años y meses
  destino.anios = Math.floor(totalMesesFinal / 12);
  destino.meses = totalMesesFinal % 12;
}

function recalcularTotales() {
  // Resetear totales
  publico.anios = publico.meses = 0;
  privado.anios = privado.meses = 0;
  independiente.anios = independiente.meses = 0;

  console.log('🔄 Recalculando totales con experiencias:', experiencias.value);

  experiencias.value.forEach((exp) => {
    if (!exp.fechaIngreso || !exp.fechaRetiro) {
      console.warn('⚠️ Experiencia sin fechas válidas:', exp);
      return;
    }

    const { anios, meses } = calcularDuracion(exp.fechaIngreso, exp.fechaRetiro);
    console.log(`📊 ${exp.empresa} (${exp.tipoEntidad}): ${anios} años, ${meses} meses`);
    
    acumularPorTipo(exp.tipoEntidad, anios, meses);
  });

  console.log('✅ Totales calculados:', {
    publico: publico,
    privado: privado,
    independiente: independiente
  });
}

const totalAnios = computed(() => {
  const totalMesesGeneral = publico.meses + privado.meses + independiente.meses;
  return publico.anios + privado.anios + independiente.anios + Math.floor(totalMesesGeneral / 12);
});

const totalMeses = computed(() => {
  return (publico.meses + privado.meses + independiente.meses) % 12;
});
</script>

<style scoped>
/* Agrega estilos si es necesario */
</style>