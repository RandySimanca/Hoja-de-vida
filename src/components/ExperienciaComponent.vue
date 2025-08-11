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
          <button type="submit" class="boton-guardar no-imprimir" :disabled="cargando">
            {{ modoEdicion ? 'Actualizar experiencia' : 'Guardar experiencia' }}
          </button>
          
          <!-- Botón eliminar (solo se muestra si hay un ID, es decir, experiencia existente) -->
          <button 
            v-if="experienciaLocal._id" 
            type="button" 
            class="boton-guardar no-imprimir"
            style="margin-left: 10px; background-color: #dc3545;"
            @click="confirmarEliminacion"
            :disabled="cargando"
          >
            🗑️ Eliminar experiencia
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
  emits: ['experiencia-eliminada'],
  data() {
    return {
      experienciaLocal: {
        _id: null, // Agregamos el ID para saber si es nueva o existente
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
      },
      envioExitoso: false,
      errorEnvio: null,
      cargando: false,
      modoEdicion: false,
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
        _id: exp._id || null, // Guardar el ID si existe
        fechaIngreso: this.normalizarFecha(exp.fechaIngreso),
        fechaRetiro: this.normalizarFecha(exp.fechaRetiro),
        datosPrecargados: true
      };

      // Si tiene ID, es una experiencia existente (modo edición)
      this.modoEdicion = !!exp._id;
    },

    convertirFecha({ dia, mes, anio }) {
      if (!dia || !mes || !anio) return null;
      const d = parseInt(dia),
        m = parseInt(mes),
        y = parseInt(anio);
      return new Date(y, m - 1, d);
    },

    async guardarExperiencia() {
      this.cargando = true;
      try {
        const experienciaFormateada = {
          ...this.experienciaLocal,
          fechaIngreso: this.convertirFecha(this.experienciaLocal.fechaIngreso),
          fechaRetiro: this.convertirFecha(this.experienciaLocal.fechaRetiro),
        };

        let response;
        
        if (this.modoEdicion && this.experienciaLocal._id) {
          // Actualizar experiencia existente
          
          response = await api.put(`/experiencia/${this.experienciaLocal._id}`, experienciaFormateada);
          showSuccess("✅ ¡Experiencia laboral actualizada correctamente!");
        } else {
          // Crear nueva experiencia
          response = await api.post("/experiencia", experienciaFormateada);
          showSuccess("✅ ¡Experiencia laboral guardada correctamente!");
          
          // Actualizar el ID local después de crear
          this.experienciaLocal._id = response.data.data._id;
          this.modoEdicion = true;
        }

        console.log("✅ Experiencia procesada:", response.data);
        
      } catch (error) {
        console.error("❌ Error al procesar experiencia:", error.response?.data || error.message);
        showError("❌ Ocurrió un error al procesar los datos.");
      } finally {
        this.cargando = false;
      }
    },

    confirmarEliminacion() {
      const empresa = this.experienciaLocal.empresa || 'esta experiencia';
      const confirmacion = confirm(
        `¿Estás seguro de que deseas eliminar la experiencia en "${empresa}"?\n\nEsta acción no se puede deshacer.`
      );
      
      if (confirmacion) {
        this.eliminarExperiencia();
      }
    },

    async eliminarExperiencia() {
      if (!this.experienciaLocal._id) {
        showError("❌ No se puede eliminar una experiencia sin ID.");
        return;
      }

      this.cargando = true;
      try {
        await api.delete(`/experiencia/${this.experienciaLocal._id}`);
        
        showSuccess("✅ Experiencia eliminada correctamente");
        
        // Emitir evento para notificar al componente padre
        this.$emit('experiencia-eliminada', this.experienciaLocal._id);
        
        console.log("✅ Experiencia eliminada:", this.experienciaLocal._id);
        
      } catch (error) {
        console.error("❌ Error al eliminar experiencia:", error.response?.data || error.message);
        
        if (error.response?.status === 404) {
          showError("❌ La experiencia ya no existe o no tienes permisos para eliminarla.");
        } else {
          showError("❌ Ocurrió un error al eliminar la experiencia.");
        }
      } finally {
        this.cargando = false;
      }
    }
  }
};
</script>

<style scoped>
/* Aquí puedes incluir tu estilo personalizado */
</style>