<template>
  <form @submit.prevent="enviarFormulario">
    <div class="section">
      <div class="section-title">
        <span class="section-number">1</span> DATOS PERSONALES
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="apellido1">PRIMER APELLIDO</label>
          <input
            v-model="apellido1"
            type="text"
            id="apellido1"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="apellido2">SEGUNDO APELLIDO (O DE CASADA)</label>
          <input
            v-model="apellido2"
            type="text"
            id="apellidos"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="nombres">NOMBRES</label>
          <input
            v-model="nombres"
            type="text"
            id="nombres"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <label>DOCUMENTO DE IDENTIFICACIÓN</label>
          <div style="display: flex; margin-top: 3px">
            <div class="checkbox-group">
              <input type="radio" id="cedula" value="cedula" v-model="cedula" />
              <label for="cedula">C.C</label>
            </div>
            <div class="checkbox-group">
              <input
                type="radio"
                id="cedulExt"
                value="cedulExt"
                v-model="cedulExt"
              />
              <label for="cedulExt">C.E</label>
            </div>
            <div class="checkbox-group">
              <input
                type="radio"
                id="pasaporte"
                value="pasaporte"
                v-model="pasaporte"
              />
              <label for="pasaporte">PAS</label>
            </div>
            <div class="form-group" style="margin-left: 5px">
              <input
                v-model="numDocumento"
                type="text"
                id="numDocumento"
                class="form-control1"
                placeholder="No."
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>SEXO</label>
          <div style="display: flex; margin-top: 3px">
            <div class="checkbox-group">
              <input type="radio" id="sexoF" value="F" v-model="sexoF" />
              <label for="sexoF">F</label>
            </div>
            <div class="checkbox-group">
              <input type="radio" id="sexoM" value="F" v-model="sexoM" />
              <label for="sexoM">M</label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>NACIONALIDAD</label>
          <div style="display: flex; margin-top: 3px">
            <div class="checkbox-group">
              <input
                type="radio"
                id="nacCol"
                name="nacionalidad"
                value="nacCol"
                v-model="nacCol"
              />
              <label for="nac-col">COL.</label>
            </div>
            <div class="checkbox-group">
              <input
                type="radio"
                id="nacExt"
                name="nacExt"
                value="nacExt"
                v-model="nacExt"
              />
              <label for="nac-ext">EXTRANJERO</label>
            </div>
          </div>
        </div>

        <div class="form-group col-4">
          <label for="pais">PAÍS</label>
          <input v-model="pais" type="text" id="pais" class="form-control" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <label>LIBRETA MILITAR</label>
          <div style="display: flex; margin-top: 3px">
            <div class="checkbox-group">
              <input
                type="radio"
                id="primera"
                value="primera"
                v-model="libretaMilitar"
              />
              <label for="primera">PRIMERA CLASE</label>
            </div>
            <div class="checkbox-group">
              <input
                type="radio"
                id="segunda"
                value="segunda"
                v-model="libretaMilitar"
              />
              <label for="segunda">SEGUNDA CLASE</label>
            </div>
          </div>
        </div>

        <div class="form-group col-2">
          <label for="numero-libreta">NÚMERO</label>
          <input
            type="text"
            id="numero-libreta"
            class="form-control2"
            placeholder="No."
            v-model="numeroLibreta"
          />
        </div>

        <div class="form-group col-4">
          <label for="dm">D.M</label>
          <input type="text" id="dm" class="form-control2" v-model="dm" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <label>FECHA Y LUGAR DE NACIMIENTO</label>
          <div style="display: flex; margin-top: 3px">
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label for="dia-nac">DÍA</label>
              <input
                type="text"
                id="dia-nac"
                class="form-control"
                v-model="diaNac"
              />
            </div>
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label for="mes-nac">MES</label>
              <input
                type="text"
                id="mes-nac"
                class="form-control"
                v-model="mesNac"
              />
            </div>
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label for="ano-nac">AÑO</label>
              <input
                type="text"
                id="ano-nac"
                class="form-control"
                v-model="anoNac"
              />
            </div>
          </div>

          <div class="form-group col-2">
            <label for="pais-nac">PAÍS</label>
            <input
              type="text"
              id="pais-nac"
              class="form-control"
              v-model="paisNac"
            />
          </div>

          <div class="form-group col-2">
            <label for="depto-nac">DEPTO</label>
            <input
              type="text"
              id="depto-nac"
              class="form-control"
              v-model="deptoNac"
            />
          </div>

          <div class="form-group col-2">
            <label for="municipio-nac">MUNICIPIO</label>
            <input
              type="text"
              id="municipio-nac"
              class="form-control"
              v-model="municipioNac"
            />
          </div>
        </div>

        <div class="form-group col-2">
          <label>DIRECCIÓN DE CORRESPONDENCIA</label>

          <div style="display: flex; margin-top: 3px">
            <div class="form-group col-2">
              <label for="pais-corr">PAÍS</label>
              <input
                type="text"
                id="pais-corr"
                class="form-control"
                v-model="paisCorr"
              />
            </div>

            <div class="form-group col-2">
              <label for="depto-corr">DEPTO</label>
              <input
                type="text"
                id="depto-corr"
                class="form-control"
                v-model="deptoCorr"
              />
            </div>

            <div class="form-group col-2">
              <label for="municipio-corr">MUNICIPIO</label>
              <input
                type="text"
                id="municipio-corr"
                class="form-control"
                v-model="municipioCorr"
              />
            </div>
          </div>

          <div class="form-group col-2">
            <label for="direccion-corr">DIRECCIÓN</label>
            <input
              type="text"
              id="direccion-corr"
              class="form-control"
              v-model="direccionCorr"
            />
          </div>

          <div class="form-group col-2">
            <label for="telefono">TELÉFONO</label>
            <input
              type="text"
              id="telefono"
              class="form-control"
              v-model="telefono"
            />
          </div>

          <div class="form-group col-2">
            <label for="email">EMAIL</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group" style="width: 100%">
          <label
            >ESPECÍFIQUE LOS IDIOMAS DIFERENTES AL ESPAÑOL QUE: HABLA, LEE,
            ESCRIBE DE FORMA, REGULAR (R), BIEN (B) O MUY BIEN (MB)</label
          >

          <table class="table">
            <thead>
              <tr>
                <th rowspan="2">IDIOMA</th>
                <th colspan="3">LO HABLA</th>
                <th colspan="3">LO LEE</th>
                <th colspan="3">LO ESCRIBE</th>
              </tr>
              <tr>
                <th>R</th>
                <th>B</th>
                <th>MB</th>
                <th>R</th>
                <th>B</th>
                <th>MB</th>
                <th>R</th>
                <th>B</th>
                <th>MB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" class="form-control" v-model="idioma1" />
                </td>
                <td><input type="radio" value="R" v-model="habla1" /></td>
                <td><input type="radio" value="B" v-model="habla1" /></td>
                <td><input type="radio" value="MB" v-model="habla1" /></td>
                <td><input type="radio" value="R" v-model="lee1" /></td>
                <td><input type="radio" value="B" v-model="lee1" /></td>
                <td><input type="radio" value="MB" v-model="lee1" /></td>
                <td><input type="radio" value="R" v-model="escribe1" /></td>
                <td><input type="radio" value="B" v-model="escribe1" /></td>
                <td><input type="radio" value="MB" v-model="escribe1" /></td>
              </tr>
              <tr>
                <td>
                  <input type="text" class="form-control" v-model="idioma2" />
                </td>
                <td><input type="radio" value="R" v-model="habla2" /></td>
                <td><input type="radio" value="B" v-model="habla2" /></td>
                <td><input type="radio" value="MB" v-model="habla2" /></td>
                <td><input type="radio" value="R" v-model="lee2" /></td>
                <td><input type="radio" value="B" v-model="lee2" /></td>
                <td><input type="radio" value="MB" v-model="lee2" /></td>
                <td><input type="radio" value="R" v-model="escribe2" /></td>
                <td><input type="radio" value="B" v-model="escribe2" /></td>
                <td><input type="radio" value="MB" v-model="escribe2" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "DatosPerComponent",
  data() {
    return {
      apellido1: "",
      apellido2: "",
      nombres: "",
      cedula: "",
      cedulExt: "",
      pasaporte: "",
      sexoF: "",
      sexoM: "",
      nacCol: "",
      nacExt: "",
      pais: "",
      libretaMilitar: "",
      numeroLibreta: "",
      numDocumento: "",
      dm: "",
      diaNac: "",
      mesNac: "",
      anoNac: "",
      paisNac: "",
      deptoNac: "",
      municipioNac: "",
      paisCorr: "",
      deptoCorr: "",
      municipioCorr: "",
      direccionCorr: "",
      telefono: "",
      email: "",
      idioma1: "",
      habla1: "",
      lee1: "",
      escribe1: "",
      idioma2: "",
      habla2: "",
      lee2: "",
      escribe2: "",
      // Fila 1
      modalidad1: "",
      semestres1: "",
      graduado1: "",
      titulo1: "",
      mes1: "",
      ano1: "",
      tarjeta1: "",
      // Fila 2
      modalidad2: "",
      semestres2: "",
      graduado2: "",
      titulo2: "",
      mes2: "",
      ano2: "",
      tarjeta2: "",
      // Fila 3
      modalidad3: "",
      semestres3: "",
      graduado3: "",
      titulo3: "",
      mes3: "",
      ano3: "",
      tarjeta3: "",
    };
  },
};
</script>

<style></style>
