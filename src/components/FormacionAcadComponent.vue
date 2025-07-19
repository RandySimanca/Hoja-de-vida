<template>
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
            <!--<input type="radio" id="primaria" name="educacion-basica" value="primaria">-->
            <label for="primaria">PRIMARIA</label>

            <div style="display: flex; margin-top: 5px">
              <div class="checkbox-group">
                <input type="checkbox" id="grado-1" name="grado" value="1" />
                <label for="grado-1">1o.</label>
              </div>
              <div class="checkbox-group">
                <input type="checkbox" id="grado-2" name="grado" value="2" />
                <label for="grado-2">2o.</label>
              </div>
              <div class="checkbox-group">
                <input type="checkbox" id="grado-3" name="grado" value="3" />
                <label for="grado-3">3o.</label>
              </div>
              <div class="checkbox-group">
                <input type="checkbox" id="grado-4" name="grado" value="4" />
                <label for="grado-4">4o.</label>
              </div>
              <div class="checkbox-group">
                <input type="checkbox" id="grado-5" name="grado" value="5" />
                <label for="grado-5">5o.</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group col-2">
          <!--<input type="radio" id="secundaria" name="educacion-basica" value="secundaria">-->
          <label for="secundaria">SECUNDARIA</label>
        </div>
        <div style="display: flex; margin-top: 5px">
          <div class="checkbox-group">
            <input type="checkbox" id="grado-6" name="grado" value="6" />
            <label for="grado-6">6o.</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="grado-7" name="grado" value="7" />
            <label for="grado-7">7o.</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="grado-8" name="grado" value="8" />
            <label for="grado-8">8o.</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="grado-9" name="grado" value="9" />
            <label for="grado-9">9o.</label>
          </div>
        </div>
        <div class="form-group col-2">
          <!--<input type="radio" id="media" name="educacion-basica" value="media">-->
          <label for="media">MEDIA</label>
        </div>
        <div style="display: flex; margin-top: 5px">
          <div class="checkbox-group">
            <input type="checkbox" id="grado-10" name="grado" value="10" />
            <label for="grado-10">10</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="grado-11" name="grado" value="11" />
            <label for="grado-11">11</label>
          </div>
        </div>
      </div>

      <div class="form-group col-2">
        <label for="titulo-bachiller">TÍTULO OBTENIDO:</label>
        <h2></h2>
        <input type="text" id="titulo-bachiller" class="form-control" />
      </div>

      <div class="form-group col-2">
        <label>FECHA DE GRADO</label>
        <div style="display: flex; margin-top: 5px">
          <div class="form-group col-2" style="width: 60px; margin-right: 5px">
            <label for="mes-grado">MES</label>
            <input type="text" id="mes-grado" class="form-control" />
          </div>
          <div class="form-group col-2" style="width: 60px">
            <label for="ano-grado">AÑO</label>
            <input type="text" id="ano-grado" class="form-control" />
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
            <th></th>
            <th></th>
            <th>SI</th>
            <th>NO</th>
            <th></th>
            <th>MES</th>
            <th>AÑO</th>
            <th></th>
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
</template>

<script>

export default {
  name: "FormacionAcadComponent",
  data () {
    return {
      entidad: '',
      modalidad1: '',
      semestres1: '',
      graduado1: '',
      titulo1: '',
      mes1: '',
      ano1: '',
      tarjeta1: '',
      modalidad2: '',
      semestres2: '',
      graduado2: '',
      titulo2: '',
      mes2: '',
      ano2: '',
      tarjeta2: '',
      modalidad3: '',
      semestres3: '',
      graduado3: '',
      titulo3: '',
      mes3: '',
      ano3: '',
      tarjeta3: ''
      
    }
  },  
  computed: {
    fecha() {
      return this.mes + '/' + this.ano
    }
  },
  data() {
    return {
      tarjeta3: ''
    }
  }
}
</script>


<style></style>
