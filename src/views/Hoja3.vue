<template>
  <div class="section">
    <div>
      <Header2Component />
    </div>

    <div>
      <ExperienciaTotComponent
        :publico="publico"
        :privado="privado"
        :independiente="independiente"
        :totalAnios="totalAnios"
        :totalMeses="totalMeses"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";
import Header2Component from "../components/Header2Component.vue";
import ExperienciaTotComponent from "../components/ExperienciaTotComponent.vue";

// 🔷 1. Modelo de experiencia laboral
const experiencias = reactive([
  {
    tipo: ref(""), // 'publica', 'privada', 'independiente'
    ingreso: { dia: "", mes: "", anio: "" },
    retiro: { dia: "", mes: "", anio: "" },
  },
  {
    tipo: ref(""),
    ingreso: { dia: "", mes: "", anio: "" },
    retiro: { dia: "", mes: "", anio: "" },
  },
  {
    tipo: ref(""),
    ingreso: { dia: "", mes: "", anio: "" },
    retiro: { dia: "", mes: "", anio: "" },
  },
  {
    tipo: ref(""),
    ingreso: { dia: "", mes: "", anio: "" },
    retiro: { dia: "", mes: "", anio: "" },
  },
]);

// 🔷 2. Totales por categoría
const publico = reactive({ anios: 0, meses: 0 });
const privado = reactive({ anios: 0, meses: 0 });
const independiente = reactive({ anios: 0, meses: 0 });

// 🔷 3. Función para calcular duración
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

// 🔷 4. Calcular y actualizar totales
function recalcularTotales() {
  // Reiniciar acumuladores
  publico.anios = publico.meses = 0;
  privado.anios = privado.meses = 0;
  independiente.anios = independiente.meses = 0;

  experiencias.forEach((exp) => {
    const { anios, meses } = calcularDuracion(exp);
    const totalMeses = anios * 12 + meses;

    switch (exp.tipo.value) {
      case "publica":
        const sumaPub = publico.meses + totalMeses;
        publico.anios = Math.floor(sumaPub / 12);
        publico.meses = sumaPub % 12;
        break;
      case "privada":
        const sumaPriv = privado.meses + totalMeses;
        privado.anios = Math.floor(sumaPriv / 12);
        privado.meses = sumaPriv % 12;
        break;
      case "independiente":
        const sumaInd = independiente.meses + totalMeses;
        independiente.anios = Math.floor(sumaInd / 12);
        independiente.meses = sumaInd % 12;
        break;
    }
  });
}

// 🔷 5. Calcular total global
const totalAnios = computed(
  () =>
    publico.anios +
    privado.anios +
    independiente.anios +
    Math.floor((publico.meses + privado.meses + independiente.meses) / 12)
);

const totalMeses = computed(
  () => (publico.meses + privado.meses + independiente.meses) % 12
);

// 🔷 6. Reaccionar a cambios
watch(experiencias, recalcularTotales, { deep: true }); /*hasta aqui el script*/
</script>

<style>
.container {
  display: flex;
  justify-content: space-between; /* Distribuye las columnas */
  align-items: flex-start; /* Asegura que se alineen desde arriba */
  gap: 1px; /* Espaciado uniforme entre elementos */
  border: 2px solid rgb(0, 204, 255);
  border-radius: 18px;
  flex-direction: row;
  gap: 100px;
}

.container1 {
  border: 5px solid rgb(0, 204, 255);
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

.image-column,
.form-group {
  flex: 1; /* Asegura que cada elemento ocupe un espacio proporcional */
}

.main-section {
  display: flex;
}

.header {
  text-align: center;
}

.header h2,
.header h3,
.header p {
  margin: 5px 0;
  color: #f8f6f6;
}

.form-group label {
  margin-bottom: 4px;
}

.form-control {
  width: 70%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.form-control3 {
  width: 30%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.imagen {
  width: 100px;
  height: 120px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
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
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 11px;
}
.form-control {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
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
.checkbox-group {
  display: flex;
  align-items: left;
  margin-right: 5px;
}
.checkbox-group input {
  margin-left: 0px;
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
.signature-box {
  border: 1px solid #ccc;
  height: 80px;
  margin-top: 10px;
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
.text-center {
  text-align: center;
}
.footer {
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
}

.p {
  font-size: 11px;
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

.tittle {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-list li a:hover {
  background-color: #00d8ff;
  color: #24292e;
  border-radius: 4px;
}

.compacto h3,
.compacto h2,
.compacto p {
  margin-top: 0;
  margin-bottom: 4px; /* puedes ajustar este valor */
  text-align: center;
}
</style>
