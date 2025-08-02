<template>
  <form @submit.prevent="enviarFormulario">
    <div class="section">
      <div class="section-title">
        <span class="section-number">2</span> FORMACIÓN ACADÉMICA
      </div>

      <div class="form-group">
        <label>EDUCACIÓN BÁSICA Y MEDIA</label>
        <p class="p">
          MARQUE CON UNA X EL ÚLTIMO GRADO APROBADO (LOS GRADOS DE 1o. A 6o. DE
          BACHILLERATO EQUIVALEN A LOS GRADOS 6o. A 11o. DE EDUCACIÓN BÁSICA
          SECUNDARIA Y MEDIA)
        </p>
      </div>

      <div class="form-row">
        <div class="form-group col-3">
          <label>EDUCACIÓN BÁSICA</label>
          <div style="display: flex; margin-top: 5px">
            <div class="form-group col-2">
              <label for="primaria">PRIMARIA</label>
              <div style="display: flex; margin-top: 5px">
                <div class="checkbox-group" v-for="n in 5" :key="n">
                  <input
                    type="checkbox"
                    :id="`grado-${n}`"
                    name="grado"
                    :checked="selectedGrado === n"
                    @change="selectGrado(n)"
                  />
                  <label :for="`grado-${n}`">{{ n }}o.</label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group col-2">
            <label for="secundaria">SECUNDARIA</label>
          </div>
          <div style="display: flex; margin-top: 5px">
            <div class="checkbox-group" v-for="n in [6, 7, 8, 9]" :key="n">
              <input
                type="checkbox"
                :id="`grado-${n}`"
                name="grado"
                :checked="selectedGrado === n"
                @change="selectGrado(n)"
              />
              <label :for="`grado-${n}`">{{ n }}o.</label>
            </div>
          </div>

          <div class="form-group col-2">
            <label for="media">MEDIA</label>
          </div>
          <div style="display: flex; margin-top: 5px">
            <div class="checkbox-group" v-for="n in [10, 11]" :key="n">
              <input
                type="checkbox"
                :id="`grado-${n}`"
                name="grado"
                :checked="selectedGrado === n"
                @change="selectGrado(n)"
              />
              <label :for="`grado-${n}`">{{ n }}</label>
            </div>
          </div>
        </div>

        <div class="form-group col-2">
          <label for="titulo-bachiller">TÍTULO OBTENIDO:</label>
          <h2></h2>
          <input
            type="text"
            id="titulo-bachiller"
            class="form-control"
            v-model="tituloBachiller"
          />
        </div>

        <div class="form-group col-2">
          <label>FECHA DE GRADO</label>
          <div style="display: flex; margin-top: 5px">
            <div
              class="form-group col-2"
              style="width: 60px; margin-right: 5px"
            >
              <label for="mes-grado">MES</label>
              <select id="mes-grado" class="form-control" v-model="mesGrado">
                <option disabled value="">Selecciona un mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </div>
            <div class="form-group col-2" style="width: 60px">
              <label for="ano-grado">AÑO</label>
              <input
                type="text"
                id="ano-grado"
                class="form-control"
                v-model="anioGrado"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>EDUCACION SUPERIOR (PREGRADO Y POSTGRADO)</label>
        <p class="p">
          DILIGENCIE ESTE PUNTO EN ESTRICTO ORDEN CRONOLÓGICO, EN MODALIDAD
          ACADÉMICA ESCRIBA: TC (TÉCNICA), TL (TECNOLÓGICA), TE (TECNOLÓGICA
          ESPECIALIZADA), UN (UNIVERSITARIA), ES (ESPECIALIZACIÓN), MG (MAESTRÍA
          O MAGISTER), DOC (DOCTORADO O PHD), RELACIONE AL FRENTE EL NÚMERO DE
          LA TARJETA PROFESIONAL (SI ÉSTA HA SIDO PREVISTA EN UNA LEY).
        </p>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>MODALIDAD ACADÉMICA</th>
            <th>No. SEMESTRES APROBADOS</th>
            <th colspan="2">GRADUADO</th>
            <th>NOMBRE DE LOS ESTUDIOS O TÍTULO OBTENIDO</th>
            <th colspan="2">TERMINACIÓN</th>
            <th>No. DE TARJETA PROFESIONAL</th>
            <th>ACCIONES</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>SI</th>
            <th>NO</th>
            <th></th>
            <th>MES</th>
            <th>AÑO</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(formacion, index) in formacionesSuperior" :key="index">
            <td>
              <input class="form-control" v-model="formacion.modalidad" />
            </td>
            <td>
              <input class="form-control" v-model="formacion.semestres" />
            </td>
            <td>
              <input type="radio" :value="'SI'" v-model="formacion.graduado" />
            </td>
            <td>
              <input type="radio" :value="'NO'" v-model="formacion.graduado" />
            </td>
            <td><input class="form-control" v-model="formacion.titulo" /></td>
            <td>
              <input class="form-control" v-model="formacion.mesTermino" />
            </td>
            <td>
              <input class="form-control" v-model="formacion.anioTermino" />
            </td>
            <td><input class="form-control" v-model="formacion.tarjeta" /></td>
            <td>
              <button
                class="btn btn-danger btn-sm"
                v-if="formacionesSuperior.length > 1"
                @click.prevent="removeFormacion(index)"
              >
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button type="button" class="btn btn-primary mt-2" @click="addFormacion">
        ➕ Agregar otra formación
      </button>
    </div>

    <div class="form-group" style="margin-top: 20px">
      <button type="submit" class="boton-guardar">
        Guardar formacion academica
      </button>
    </div>
   
  </form>
</template>

<script>
import api from "../api/axios";
import { showSuccess, showError } from "../utils/showMessage.js";


export default {

  name: "FormacionAcadComponent",
    props: {
    formacion: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectedGrado: null,
      tituloBachiller: "",
      mesGrado: "",
      anioGrado: "",

      // Fila inicial + dinámicas
      formacionesSuperior: [
        {
          modalidad: "",
          semestres: "",
          graduado: "",
          titulo: "",
          mesTermino: "",
          anioTermino: "",
          tarjeta: "",
        },
      ],

      envioExitoso: false,
      errorEnvio: null,
      cargando: false,
    };
  },
  mounted() {
    // Cargar datos iniciales si existen
    if (this.formacion) {
      this.selectedGrado = this.formacion.gradoBasica || null;
      this.tituloBachiller = this.formacion.tituloBachiller || "";
      this.mesGrado = this.formacion.mesGrado || "";
      this.anioGrado = this.formacion.anioGrado || "";
      this.formacionesSuperior = this.formacion.formacionesSuperior || [
        {
          modalidad: "",
          semestres: "",
          graduado: "",
          titulo: "",
          mesTermino: "",
          anioTermino: "",
          tarjeta: "",
        },
      ];
    }
  },
  methods: {
    selectGrado(n) {
      this.selectedGrado = this.selectedGrado === n ? null : n;
    },
    addFormacion() {
      this.formacionesSuperior.push({
        modalidad: "",
        semestres: "",
        graduado: "",
        titulo: "",
        mesTermino: "",
        anioTermino: "",
        tarjeta: "",
      });
    },
    removeFormacion(index) {
      this.formacionesSuperior.splice(index, 1);
    },
    async enviarFormulario() {
      this.envioExitoso = false;
      this.errorEnvio = null;
      this.cargando = true;

      if (
        !this.selectedGrado ||
        !this.tituloBachiller ||
        !this.mesGrado ||
        !this.anioGrado
      ) {
        showError("❌ Faltan campos obligatorios.");
        this.cargando = false;
        return;
      }

      const formacion = {
        gradoBasica: this.selectedGrado,
        tituloBachiller: this.tituloBachiller,
        //fechaGrado: new Date(`${this.anioGrado}-${this.mesGrado}-01`),
        mesGrado: this.mesGrado,
        anioGrado: this.anioGrado,
        formacionesSuperior: this.formacionesSuperior,
      };

      try {
        const res = await api.post("/formacion-academica", formacion);
        const result = res.data;
        api.interceptors.request.use((request) => {
          console.log(
            "📡 Enviando a:",
            request.method.toUpperCase(),
            request.url
          );
          return request;
        });
        console.log("✅ Datos guardados:", result);
        this.envioExitoso = true;
        showSuccess("✅ ¡Formación académica guardada correctamente!");
      } catch (error) {
        console.error(
          "Error al enviar la formación académica:",
          error.response?.data || error.message
        );
        showError("❌ Ocurrió un error al guardar la formación académica.");
      } finally {
        this.cargando = false;
      }
    },
  },
};


</script>

<style scoped>
/* Tu estilo actual queda igual */
</style>
