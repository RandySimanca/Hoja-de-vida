<template>
  <div class="section">
    <form @submit.prevent="enviarFormulario">
      <div class="section">
        <div class="section-title">
          <span class="section-number">3</span> EXPERIENCIA LABORAL
        </div>
        <div class="form-group">
          <p>
            RELACIONE SU EXPERIENCIA LABORAL O DE PRESTACIÓN DE SERVICIOS EN
            ESTRICTO ORDEN CRONOLÓGICO COMENZANDO POR EL ACTUAL.
          </p>
        </div>
        <label>EMPLEO ACTUAL O CONTRATO VIGENTE</label>
      </div>
      <div class="section">
        <div class="form-group">
         
          
          <div style="display: flex; margin-top: 3px">
            <div class="form-group col-2">
              <label for="cc">EMPRESA O ENTIDAD</label>
             <input type="text" id="empresa-actual" v-model="nueva.empresa" class="form-control" />

            </div>
            <div class="checkbox-group">
              <label for="cc">PUBLICA</label>
              <input type="radio" id="cc" name="tipo-documento" value="cc" />
            </div>
            <div class="checkbox-group">
              <label for="cc">PRIVADA</label>
              <input type="radio" id="cc" name="tipo-documento" value="cc" />
            </div>
            <div class="form-group col-2">
              <label for="pais-actual">PAÍS</label>
              <input type="text" id="pais-actual" class="form-control" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-2">
              <label for="depto-actual">DEPARTAMENTO</label>
              <input type="text" id="depto-actual" class="form-control" />
            </div>
            <div class="form-group col-2">
              <label for="municipio-actual">MUNICIPIO</label>
              <input type="text" id="municipio-actual" class="form-control" />
            </div>
            <div class="form-group col-2">
              <label for="email-actual">CORREO ELECTRÓNICO ENTIDAD</label>
              <input type="email" id="email-actual" class="form-control" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-2">
              <label for="telefonos-actual">TELÉFONOS</label>
              <input type="text" id="telefonos-actual" class="form-control" />
            </div>
            <div class="form-group col-2">
              <label>FECHA DE INGRESO</label>
              <div style="display: flex">
                <div class="form-group" style="width: 30px; margin-right: 5px">
                  <label for="dia-ingreso-actual">DÍA</label>
                  <input
                    type="text"
                    id="dia-ingreso-actual"
                    class="form-control"
                  />
                </div>
                <div class="form-group" style="width: 30px; margin-right: 5px">
                  <label for="mes-ingreso-actual">MES</label>
                  <input
                    type="text"
                    id="mes-ingreso-actual"
                    class="form-control"
                  />
                </div>
                <div class="form-group" style="width: 60px">
                  <label for="ano-ingreso-actual">AÑO</label>
                  <input
                    type="text"
                    id="ano-ingreso-actual"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="form-group col-2">
              <label>FECHA DE RETIRO</label>
              <div style="display: flex">
                <div class="form-group" style="width: 30px; margin-right: 5px">
                  <label for="dia-retiro-actual">DÍA</label>
                  <input
                    type="text"
                    id="dia-retiro-actual"
                    class="form-control"
                  />
                </div>
                <div class="form-group" style="width: 30px; margin-right: 5px">
                  <label for="mes-retiro-actual">MES</label>
                  <input
                    type="text"
                    id="mes-retiro-actual"
                    class="form-control"
                  />
                </div>
                <div class="form-group" style="width: 60px">
                  <label for="ano-retiro-actual">AÑO</label>
                  <input
                    type="text"
                    id="ano-retiro-actual"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-2">
              <label for="cargo-actual">CARGO O CONTRATO ACTUAL</label>
              <input type="text" id="cargo-actual" class="form-control" />
            </div>
            <div class="form-group col-2">
              <label for="dependencia-actual">DEPENDENCIA</label>
              <input type="text" id="dependencia-actual" class="form-control" />
            </div>
            <div class="form-group col-2">
              <label for="direccion-actual">DIRECCIÓN</label>
              <input type="text" id="direccion-actual" class="form-control" />
            </div>
          </div>
        </div>
        <div class="form-group" style="margin-top: 20px">
          <button type="submit" class="boton-guardar">
            Guardar Experiencia
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useExperienciaStore } from "../stores/experienciaStore";
import Header2Component from "../components/Header2Component.vue";
import FooterComponent from "../components/FooterComponent.vue";

const store = useExperienciaStore();

// 🔷 Formulario reactivo
const nueva = reactive({
  tipo: "", // "publica", "privada", "independiente"
  ingreso: { dia: "", mes: "", anio: "" },
  retiro: { dia: "", mes: "", anio: "" },
  empresa: "",
  pais: "",
  departamento: "",
  municipio: "",
  correo: "",
  telefonos: "",
  cargo: "",
  dependencia: "",
  direccion: "",
});

// 🔷 Función de guardado
function enviarFormulario() {
  store.agregar({ ...nueva });

  // Opcional: limpiar después de guardar
  Object.assign(nueva, {
    tipo: "",
    ingreso: { dia: "", mes: "", anio: "" },
    retiro: { dia: "", mes: "", anio: "" },
    empresa: "",
    pais: "",
    departamento: "",
    municipio: "",
    correo: "",
    telefonos: "",
    cargo: "",
    dependencia: "",
    direccion: "",
  });
}
</script>
