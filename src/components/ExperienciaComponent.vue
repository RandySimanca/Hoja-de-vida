<!-- src/componentes/ExperienciaComponent.vue -->
<template>
  <form @submit.prevent="guardarExperiencia">
    <div class="section">
      <div class="form-group">
        <label>EMPLEO ACTUAL O CONTRATO ANTERIOR</label>

        <div style="display: flex; margin-top: 3px">
          <div class="form-group col-2">
            <label>EMPRESA O ENTIDAD.</label>
            <input type="text" v-model="experiencia.empresa" class="form-control" />
          </div>

          <div class="checkbox-group">
            <label>PUBLICA</label>
            <input type="radio" value="Publica" v-model="experiencia.tipoEntidad" />
          </div>

          <div class="checkbox-group">
            <label>PRIVADA</label>
            <input type="radio" value="Privada" v-model="experiencia.tipoEntidad" />
          </div>

          <div class="form-group col-2">
            <label>PAÍS</label>
            <input type="text" v-model="experiencia.pais" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-2">
            <label>DEPARTAMENTO</label>
            <input type="text" v-model="experiencia.departamento" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>MUNICIPIO</label>
            <input type="text" v-model="experiencia.municipio" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>CORREO ELECTRÓNICO ENTIDAD</label>
            <input type="email" v-model="experiencia.correoEntidad" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-2">
            <label>TELÉFONOS</label>
            <input type="text" v-model="experiencia.telefonos" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>FECHA DE INGRESO</label>
            <div style="display: flex">
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>DÍA</label>
                <input type="text" v-model="experiencia.fechaIngreso.dia" class="form-control" placeholder="dd" />
              </div>
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>MES</label>
                <input type="text" v-model="experiencia.fechaIngreso.mes" class="form-control" placeholder="mm"/>
              </div>
              <div class="form-group" style="width: 60px">
                <label>AÑO</label>
                <input type="text" v-model="experiencia.fechaIngreso.año" class="form-control" placeholder="aaaa"/>
              </div>
            </div>
          </div>

          <div class="form-group col-2">
            <label>FECHA DE RETIRO</label>
            <div style="display: flex">
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>DÍA</label>
                <input type="text" v-model="experiencia.fechaRetiro.dia" class="form-control" placeholder="dd" />
              </div>
              <div class="form-group" style="width: 30px; margin-right: 5px">
                <label>MES</label>
                <input type="text" v-model="experiencia.fechaRetiro.mes" class="form-control" placeholder="mm"/>
              </div>
              <div class="form-group" style="width: 60px">
                <label>AÑO</label>
                <input type="text" v-model="experiencia.fechaRetiro.año" class="form-control" placeholder="aaaa" />
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-2">
            <label>CARGO O CONTRATO ACTUAL</label>
            <input type="text" v-model="experiencia.cargo" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>DEPENDENCIA</label>
            <input type="text" v-model="experiencia.dependencia" class="form-control" />
          </div>

          <div class="form-group col-2">
            <label>DIRECCIÓN</label>
            <input type="text" v-model="experiencia.direccion" class="form-control" />
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
import api from "../api/axios";
import { showSuccess, showError } from "../utils/showMessage.js";

export default {
  name: "ExperienciaComponent",
  data() {
    return {
      experiencia: {
        empresa: '',
        tipoEntidad: '',
        pais: '',
        departamento: '',
        municipio: '',
        correoEntidad: '',
        telefonos: '',
        fechaIngreso: { dia: '', mes: '', año: '' },
        fechaRetiro: { dia: '', mes: '', año: '' },
        cargo: '',
        dependencia: '',
        direccion: ''
      }
    };
  },
  methods: {
    // ✅ Convierte un objeto con dia, mes y año a un Date válido
    convertirFecha({ dia, mes, año }) {
      if (!dia || !mes || !año) return null;
      const d = parseInt(dia), m = parseInt(mes), y = parseInt(año);
      return new Date(y, m - 1, d); // El mes va de 0 a 11
    },

    async guardarExperiencia() {
      try {
        // ✅ Convertir las fechas antes de enviar
        const experienciaFormateada = {
          ...this.experiencia,
          fechaIngreso: this.convertirFecha(this.experiencia.fechaIngreso),
          fechaRetiro: this.convertirFecha(this.experiencia.fechaRetiro),
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
/* Tu CSS personalizado */
</style>
