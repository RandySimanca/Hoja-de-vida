<template>
    <div class="section">
        <div class="section-title">
          <span class="section-number">4</span> TIEMPO TOTAL DE EXPERIENCIA
        </div>

        <div class="section">
          <p>
            INDIQUE EL TIEMPO TOTAL DE SU EXPERIENCIA LABORAL EN NÚMERO DE AÑOS
            Y MESES.
          </p>

          <table class="experience-table">
            <thead>
              <tr>
                <th>OCUPACIÓN</th>
                <th>TIEMPO DE EXPERIENCIA</th>
              </tr>
              <tr>
                <th></th>
                <th>AÑOS</th>
                <th>MESES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SERVIDOR PÚBLICO</td>
                <td>
                  <input
                    type="number"
                    v-model.number="publico.anios"
                    min="0"
                    max="99"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="publico.meses"
                    min="0"
                    max="11"
                  />
                </td>
              </tr>
              <tr>
                <td>EMPLEADO DEL SECTOR PRIVADO</td>
                <td>
                  <input
                    type="number"
                    v-model.number="privado.anios"
                    min="0"
                    max="99"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="privado.meses"
                    min="0"
                    max="11"
                  />
                </td>
              </tr>
              <tr>
                <td>TRABAJADOR INDEPENDIENTE</td>
                <td>
                  <input
                    type="number"
                    v-model.number="independiente.anios"
                    min="0"
                    max="99"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="independiente.meses"
                    min="0"
                    max="11"
                  />
                </td>
              </tr>
              <tr>
                <td><strong>TOTAL TIEMPO EXPERIENCIA</strong></td>
                <td><input type="number" :value="totalAnios" readonly /></td>
                <td><input type="number" :value="totalMeses" readonly /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Sección 5: Firma del servidor público o contratista -->
      <div class="section">
        <div class="section-title">
          <span class="section-number">5</span> FIRMA DEL SERVIDOR PÚBLICO O
          CONTRATISTA
        </div>
        <div class="declaration">
          <p>
            MANIFIESTO BAJO LA GRAVEDAD DEL JURAMENTO QUE SI NO ME ENCUENTRO
            DENTRO DE LAS CAUSALES DE INHABILIDAD E INCOMPATIBILIDAD DEL ORDEN
            CONSTITUCIONAL O LEGAL, PARA EJERCER CARGOS EMPLEOS PÚBLICOS O PARA
            CELEBRAR CONTRATOS DE PRESTACIÓN DE SERVICIOS CON LA ADMINISTRACIÓN
            PÚBLICA.
          </p>
          <p>
            PARA TODOS LOS EFECTOS LEGALES, CERTIFICO QUE LOS DATOS POR MI
            ANOTADOS EN EL PRESENTE FORMATO ÚNICO DE HOJA DE VIDA, SON VERACES,
            (ARTÍCULO 5o. DE LA LEY 190/95).
          </p>
        </div>

        <div class="form-group">
          <label for="signing-city">Ciudad:</label>
          <input type="text" id="signing-city" placeholder="Ej: Bogotá" />
        </div>

        <div class="form-group">
          <label for="signing-date">Fecha de diligenciamiento:</label>
          <input type="date" id="signing-date" />
        </div>

        <div class="signature-area">
          <input
            type="file"
            id="firma"
            accept=".jpg,.jpeg,.png"
            @change="mostrarFirma"
          />
          <div v-if="firmaUrl">
            <img
              :src="firmaUrl"
              alt="Firma cargada"
              style="margin-top: 10px; max-width: 300px; height: auto"
            />
          </div>
          <label for="firma">FIRMA DEL SERVIDOR PÚBLICO O CONTRATISTA</label
          ><br />
          
        </div>
      </div>

      <!-- Sección 6: Observaciones del jefe de recursos humanos -->
      <div class="section">
        <div class="section-title">
          <span class="section-number">6</span> OBSERVACIONES DEL JEFE DE
          RECURSOS HUMANOS Y/O CONTRATOS
        </div>

        <div class="declaration">
          <p>
            CERTIFICO QUE LA INFORMACIÓN AQUÍ SUMINISTRADA HA SIDO CONSTATADA
            FRENTE A LOS DOCUMENTOS QUE HAN SIDO PRESENTADOS COMO SOPORTE.
          </p>
        </div>

        <div class="form-group">
          <label for="observations">Observaciones:</label>
          <textarea id="observations" rows="4"></textarea>
        </div>

        <div class="form-group">
          <label for="hr-date">Ciudad y fecha:</label>
          <input
            type="text"
            id="hr-date"
            placeholder="Ej: Bogotá, 13 de Mayo de 2025"
          />
        </div>

        <div class="signature-area">
          <p>________________________________</p>
          <p>NOMBRE Y FIRMA DEL JEFE DE PERSONAL O DE CONTRATOS</p>
        </div>
      </div>

      
</template>


<script setup>

import { defineProps, defineOptions } from 'vue'

import { ref } from 'vue';





defineOptions({
  name: "ExperienciaTotComponent"
})

const props = defineProps({
  publico: Object,
  privado: Object,
  independiente: Object,
  totalAnios: Number,
  totalMeses: Number
})

const firmaUrl = ref(null);

const mostrarFirma = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 250; // ancho deseado
      canvas.height = 100; // alto deseado
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      firmaUrl.value = canvas.toDataURL("image/png"); // imagen escalada
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

</script>

<style>

</style>