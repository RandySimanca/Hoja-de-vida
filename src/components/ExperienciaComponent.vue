<template>
  <form @submit.prevent="guardarExperiencia">
    <div class="section">
      <div class="form-group">
        <label>EMPLEO ACTUAL O CONTRATO ANTERIOR</label>

        <div style="display: flex; margin-top: 3px">
          <div class="form-group col-2">
            <label>EMPRESA O ENTIDAD.</label>
            <input type="text" v-model="experienciaLocal.empresa" class="form-control" />
          </div>

          <div class="checkbox-group">
            <label>PUBLICA</label>
            <input type="radio" value="Publica" v-model="experienciaLocal.tipoEntidad" />
          </div>

          <div class="checkbox-group">
            <label>PRIVADA</label>
            <input type="radio" value="Privada" v-model="experienciaLocal.tipoEntidad" />
          </div>

          <div class="form-group col-2">
            <label>PAÍS</label>
            <input type="text" v-model="experienciaLocal.pais" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-2">
            <label>DEPARTAMENTO</label>
            <input type="text" v-model="experienciaLocal.departamento" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>MUNICIPIO</label>
            <input type="text" v-model="experienciaLocal.municipio" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>CORREO ELECTRÓNICO ENTIDAD</label>
            <input type="email" v-model="experienciaLocal.correoEntidad" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-2">
            <label>TELÉFONOS</label>
            <input type="text" v-model="experienciaLocal.telefonos" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>FECHA DE INGRESO</label>
            <div style="display: flex">
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>DÍA</label>
                <input type="text" v-model="experienciaLocal.fechaIngreso.dia" class="form-control" placeholder="dd" />
              </div>
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>MES</label>
                <input type="text" v-model="experienciaLocal.fechaIngreso.mes" class="form-control" placeholder="mm" />
              </div>
              <div class="form-group" style="width: 60px">
                <label>AÑO</label>
                <input type="text" v-model="experienciaLocal.fechaIngreso.anio" class="form-control" placeholder="aaaa" />
              </div>
            </div>
          </div>

          <div class="form-group col-2">
            <label>FECHA DE RETIRO</label>
            <div style="display: flex">
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>DÍA</label>
                <input type="text" v-model="experienciaLocal.fechaRetiro.dia" class="form-control" placeholder="dd" />
              </div>
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>MES</label>
                <input type="text" v-model="experienciaLocal.fechaRetiro.mes" class="form-control" placeholder="mm" />
              </div>
              <div class="form-group" style="width: 60px">
                <label>AÑO</label>
                <input type="text" v-model="experienciaLocal.fechaRetiro.anio" class="form-control" placeholder="aaaa" />
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-2">
            <label>CARGO O CONTRATO ACTUAL</label>
            <input type="text" v-model="experienciaLocal.cargo" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>DEPENDENCIA</label>
            <input type="text" v-model="experienciaLocal.dependencia" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>DIRECCIÓN</label>
            <input type="text" v-model="experienciaLocal.direccion" class="form-control" />
          </div>
        </div>

        <div class="form-group" style="margin-top: 20px">
          <button type="submit" class="boton-guardar">
            Guardar experiencia
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { showSuccess, showError } from "../utils/showMessage.js";
import api from "../api/axios";

export default {
  name: "ExperienciaComponent",
  props: {
    experiencia: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      experienciaLocal: {
        empresa: "",
        tipoEntidad: "",
        pais: "",
        departamento: "",
        municipio: "",
        correoEntidad: "",
        telefonos: "",
        fechaIngreso: { dia: "", mes: "", anio: "" },
        fechaRetiro: { dia: "", mes: "", anio: "" },
        cargo: "",
        dependencia: "",
        direccion: "",
        datosPrecargados: false,
        envioExitoso: false,
        errorEnvio: null,
        cargando: false,
      },
    };
  },
  mounted() {
    this.sincronizarExperiencia(this.experiencia);
  },
  watch: {
    experiencia: {
      handler(nuevaExp) {
        this.sincronizarExperiencia(nuevaExp);
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    normalizarFecha(fecha) {
      if (!fecha) return { dia: '', mes: '', anio: '' };
      if (typeof fecha === 'string' || fecha instanceof Date) {
        const f = new Date(fecha);
        return {
          dia: String(f.getDate()).padStart(2, '0'),
          mes: String(f.getMonth() + 1).padStart(2, '0'),
          anio: String(f.getFullYear())
        };
      }
      return {
        dia: fecha.dia ?? '',
        mes: fecha.mes ?? '',
        anio: fecha.anio ?? ''
      };
    },
    sincronizarExperiencia(exp) {
      if (!exp || this.experienciaLocal.datosPrecargados) return;

      this.experienciaLocal = {
        ...this.experienciaLocal,
        ...exp,
        fechaIngreso: this.normalizarFecha(exp.fechaIngreso),
        fechaRetiro: this.normalizarFecha(exp.fechaRetiro),
        datosPrecargados: true
      };
    },
    convertirFecha({ dia, mes, anio }) {
      if (!dia || !mes || !anio) return null;
      const d = parseInt(dia),
        m = parseInt(mes),
        y = parseInt(anio);
      return new Date(y, m - 1, d);
    },
    async guardarExperiencia() {
      try {
        const experienciaFormateada = {
          ...this.experienciaLocal,
          fechaIngreso: this.convertirFecha(this.experienciaLocal.fechaIngreso),
          fechaRetiro: this.convertirFecha(this.experienciaLocal.fechaRetiro),
        };

        const res = await api.post("/experiencia", experienciaFormateada);
        console.log("✅ Experiencia enviada correctamente:", res.data);
        showSuccess("✅ ¡Experiencia laboral guardada correctamente!");
      } catch (error) {
        console.error("❌ Error al guardar experiencia:", error.response?.data || error.message);
        showError("❌ Ocurrió un error al guardar los datos.");
      }
    }
  }
};
</script>

<style scoped>
/* Aquí puedes incluir tu estilo personalizado */
</style>
