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
            <div class="checkbox-group" v-for="n in [6,7,8,9]" :key="n">
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
            <div class="checkbox-group" v-for="n in [10,11]" :key="n">
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
            <div class="form-group col-2" style="width: 60px; margin-right: 5px">
              <label for="mes-grado">MES</label>
              <input
                type="text"
                id="mes-grado"
                class="form-control"
                v-model="mesGrado"
              />
            </div>
            <div class="form-group col-2" style="width: 60px">
              <label for="ano-grado">AÑO</label>
              <input
                type="text"
                id="ano-grado"
                class="form-control"
                v-model="anoGrado"
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
          ESPECIALIZADA), UN (UNIVERSITARIA), ES (ESPECIALIZACIÓN), MG (MAESTRÍA O
          MAGISTER), DOC (DOCTORADO O PHD), RELACIONE AL FRENTE EL NÚMERO DE LA
          TARJETA PROFESIONAL (SI ÉSTA HA SIDO PREVISTA EN UNA LEY).
        </p>

        <table class="table">
          <thead>
            <tr>
              <th>MODALIDAD ACADÉMICA</th>
              <th>No. SEMESTRES APROBADOS</th>
              <th colspan="2">GRADUADO</th>
              <th>NOMBRE DE LOS ESTUDIOS O TÍTULO OBTENIDO</th>
              <th colspan="2">TERMINACIÓN</th>
              <th>No. DE TARJETA PROFESIONAL</th>
            </tr>
            <tr>
              <th></th><th></th><th>SI</th><th>NO</th><th></th><th>MES</th><th>AÑO</th><th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="modalidad1"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="semestres1"
                />
              </td>
              <td><input type="radio" value="SI" v-model="graduado1" /></td>
              <td><input type="radio" value="NO" v-model="graduado1" /></td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="titulo1"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="mes1"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="ano1"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="tarjeta1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="modalidad2"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="semestres2"
                />
              </td>
              <td><input type="radio" value="SI" v-model="graduado2" /></td>
              <td><input type="radio" value="NO" v-model="graduado2" /></td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="titulo2"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="mes2"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="ano2"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="tarjeta2"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="modalidad3"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="semestres3"
                />
              </td>
              <td><input type="radio" value="SI" v-model="graduado3" /></td>
              <td><input type="radio" value="NO" v-model="graduado3" /></td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="titulo3"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="mes3"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="ano3"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  style="border: none"
                  v-model="tarjeta3"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="form-group" style="margin-top: 20px">
      <button type="submit" class="boton-guardar">
        Guardar formacion academica
      </button>
    </div>
  </form>
</template>

<script>
import api from '../api/axios'
import { showSuccess, showError } from "../utils/showMessage.js";
//import Swal from 'sweetalert2'

export default {
  name: 'FormacionAcadComponent',
  data() {
    return {
      selectedGrado: null,
      tituloBachiller: '',
      mesGrado: '',
      anoGrado: '',
      modalidad1: '', semestres1: '', graduado1: '', titulo1: '', mes1: '', ano1: '', tarjeta1: '',
      modalidad2: '', semestres2: '', graduado2: '', titulo2: '', mes2: '', ano2: '', tarjeta2: '',
      modalidad3: '', semestres3: '', graduado3: '', titulo3: '', mes3: '', ano3: '', tarjeta3: '',

      envioExitoso: false,
      errorEnvio: null,
      cargando: false,
     
    }
  },
  methods: {
    selectGrado(n) {
      this.selectedGrado = this.selectedGrado === n ? null : n
    },
    async enviarFormulario() {
  this.envioExitoso = false;
  this.errorEnvio = null;
  this.cargando = true;

  // Validación de campos importantes
  if (!this.selectedGrado || !this.tituloBachiller || !this.mesGrado || !this.anoGrado) {
    showError("❌ Faltan campos obligatorios.");
    this.cargando = false;
    return;
  }

  const formacion = {
    gradoBasica: this.selectedGrado,
    tituloBachiller: this.tituloBachiller,
    fechaGrado: new Date(`${this.anoGrado}-${this.mesGrado}-01`),
    formacionesSuperior: [
      {
        modalidad: this.modalidad1,
        semestres: this.semestres1,
        graduado: this.graduado1,
        titulo: this.titulo1,
        mesTermino: this.mes1,
        anioTermino: this.ano1,
        tarjeta: this.tarjeta1
      },
      {
        modalidad: this.modalidad2,
        semestres: this.semestres2,
        graduado: this.graduado2,
        titulo: this.titulo2,
        mesTermino: this.mes2,
        anioTermino: this.ano2,
        tarjeta: this.tarjeta2
      },
      {
        modalidad: this.modalidad3,
        semestres: this.semestres3,
        graduado: this.graduado3,
        titulo: this.titulo3,
        mesTermino: this.mes3,
        anioTermino: this.ano3,
        tarjeta: this.tarjeta3
      }
    ]
  };

  try {
    //const token = localStorage.getItem('token');
    const res = await api.post("/formacion-academica", formacion);
    const result = res.data;
    api.interceptors.request.use(request => {
  console.log("📡 Enviando a:", request.method.toUpperCase(), request.url);
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
}
 }
}
</script>

<style scoped>
/* Tu estilo actual queda igual */
</style>
