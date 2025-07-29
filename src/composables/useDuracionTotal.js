import { computed } from "vue";
import { useExperienciaStore } from "../stores/experienciaStore";

function calcularDuracion({ ingreso, retiro }) {
  const desde = new Date(
    `${ingreso.anio}-${String(ingreso.mes).padStart(2, "0")}-${String(ingreso.dia).padStart(2, "0")}`
  );
  const hasta = new Date(
    `${retiro.anio}-${String(retiro.mes).padStart(2, "0")}-${String(retiro.dia).padStart(2, "0")}`
  );

  if (isNaN(desde) || isNaN(hasta) || hasta < desde) {
    return { anios: 0, meses: 0 };
  }

  let anios = hasta.getFullYear() - desde.getFullYear();
  let meses = hasta.getMonth() - desde.getMonth();

  if (hasta.getDate() < desde.getDate()) meses--;
  if (meses < 0) {
    anios--;
    meses += 12;
  }

  return { anios, meses };
}

export function useDuracionTotal() {
  const store = useExperienciaStore();

  const total = computed(() => {
    let totalAnios = 0;
    let totalMeses = 0;

    store.experiencias.forEach(exp => {
      const { anios, meses } = calcularDuracion(exp);
      totalAnios += anios;
      totalMeses += meses;
    });

    // Normalizar meses si pasan de 12
    totalAnios += Math.floor(totalMeses / 12);
    totalMeses = totalMeses % 12;

    return { totalAnios, totalMeses };
  });

  return { total };
}
