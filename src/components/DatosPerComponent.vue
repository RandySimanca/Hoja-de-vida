<!--components/DatosPerComponent.vue-->
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
              <input type="radio" id="sexoF" value="Femenino" v-model="sexoF" />
              <label for="sexoF">F</label>
            </div>
            <div class="checkbox-group">
              <input type="radio" id="sexoM" value="Masculino" v-model="sexoM" />
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
                value="Colombiano"
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
    </div>
    <div class="form-group" style="margin-top: 20px">
      <button type="submit" class="boton-guardar" :disabled="cargando">
        {{ cargando ? "Guardando..." : "Guardar datos personales" }}
      </button>
    </div>

    <p v-if="envioExitoso" class="mensaje-ok"></p>
    <p v-if="errorEnvio" class="mensaje-error">
      {{ errorEnvio }}
    </p>
  </form>
</template>

<script>
import { showSuccess, showError } from "../utils/showMessage.js";
import api from "../api/axios"; // Asegúrate de que la ruta sea correcta

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

      // feedback visual
      envioExitoso: false,
      errorEnvio: null,
      cargando: false,
    };
  },
  methods: {
    async enviarFormulario() {
      this.envioExitoso = false;
      this.errorEnvio = null;
      this.cargando = true;

      const datos = {
        apellido1: this.apellido1,
        apellido2: this.apellido2,
        nombres: this.nombres,
        tipoDocumento: this.cedula || this.cedulExt || this.pasaporte,
        numDocumento: this.numDocumento,
        sexo: this.sexoF || this.sexoM,
        nacionalidad: this.nacCol || this.nacExt,
        pais: this.pais,
        libretaMilitar: this.libretaMilitar,
        numeroLibreta: this.numeroLibreta,
        dm: this.dm,
        fechaNacimiento: {
          dia: this.diaNac,
          mes: this.mesNac,
          anio: this.anoNac,
          pais: this.paisNac,
          depto: this.deptoNac,
          municipio: this.municipioNac,
        },
        direccionCorrespondencia: {
          pais: this.paisCorr,
          depto: this.deptoCorr,
          municipio: this.municipioCorr,
          direccion: this.direccionCorr,
          telefono: this.telefono,
          email: this.email,
        },
      };

      //para usar con showMessage.js
      try {
        const res = await api.post("/datos-personales", datos);
        const result = res.data;

        console.log("✅ Datos guardados:", result);
        this.envioExitoso = true;
        showSuccess("✅ ¡Datos personales guardados correctamente!");
      } catch (error) {
        console.error(
          "Error al enviar datos personales:",
          error.response?.data || error.message
        );
        showError("❌ Ocurrió un error al guardar los datos.");
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>

<style></style>
