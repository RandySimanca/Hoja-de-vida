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
import { reactive, computed, watch } from "vue";
import Header2Component from "../components/Header2Component.vue";
import ExperienciaTotComponent from "../components/ExperienciaTotComponent.vue";
import FirmaServidorComponent from "../components/FirmaServidorComponent.vue";
import RecursosHumComponent from "../components/RecursosHumComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { useExperienciaStore } from "../stores/experienciaStore";
import { onMounted } from "vue";
import { useHojaVidaStore } from "../stores/hojaVida";


// Store
const store = useExperienciaStore();
const experiencias = store.experiencias;
const hojaStore = useHojaVidaStore();

// Totales por tipo
const publico = reactive({ anios: 0, meses: 0 });
const privado = reactive({ anios: 0, meses: 0 });
const independiente = reactive({ anios: 0, meses: 0 });

const token = localStorage.getItem("token");

onMounted(async () => {
  if (!token) {
    console.error("❌ Token no encontrado. Redirigiendo o mostrando fallback...");
    // Redirigir si tienes router
    // router.push("/login");
  } else {
    console.log("✅ Token válido:", token);
    await hojaStore.cargarHojaDeVida();
  }
});



function calcularDuracion({ ingreso, retiro }) {
  const desde = new Date(`${ingreso.anio}-${ingreso.mes}-${ingreso.dia}`);
  const hasta = new Date(`${retiro.anio}-${retiro.mes}-${retiro.dia}`);

  if (isNaN(desde) || isNaN(hasta) || hasta < desde)
    return { anios: 0, meses: 0 };

  let anios = hasta.getFullYear() - desde.getFullYear();
  let meses = hasta.getMonth() - desde.getMonth();
  if (hasta.getDate() < desde.getDate()) meses--;
  if (meses < 0) {
    anios--;
    meses += 12;
  }

  return { anios, meses };
}

function acumularPorTipo(tipo, meses) {
  const destino = { publica: publico, privada: privado, independiente: independiente }[tipo];
  if (!destino) return;
  const total = destino.meses + meses;
  destino.anios = Math.floor((destino.anios * 12 + total) / 12);
  destino.meses = (destino.anios * 12 + total) % 12;
}

function recalcularTotales() {
  publico.anios = publico.meses = 0;
  privado.anios = privado.meses = 0;
  independiente.anios = independiente.meses = 0;

  experiencias.forEach((exp) => {
    const { anios, meses } = calcularDuracion(exp);
    const totalMeses = anios * 12 + meses;
    acumularPorTipo(exp.tipo, totalMeses);
  });
}

const totalAnios = computed(() =>
  publico.anios + privado.anios + independiente.anios +
  Math.floor((publico.meses + privado.meses + independiente.meses) / 12)
);

const totalMeses = computed(() =>
  (publico.meses + privado.meses + independiente.meses) % 12
);

watch(experiencias, recalcularTotales, { deep: true });
</script>

<style scoped>
/* Agrega estilos si es necesario */
</style>
