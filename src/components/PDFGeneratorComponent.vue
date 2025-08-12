<template>
  <div class="pdf-generator">
    <div class="pdf-actions">
      <button @click="generarPDF" class="boton-pdf" :disabled="generando">
        {{ generando ? 'Generando PDF...' : '📄 Descargar PDF' }}
      </button>
      <button @click="previsualizarPDF" class="boton-preview" :disabled="generando">
        👁️ Vista previa
      </button>
      <button @click="imprimirDirecto" class="boton-imprimir" :disabled="generando">
        🖨️ Imprimir
      </button>
    </div>

    <div v-if="mostrarPreview" class="modal-overlay" @click="cerrarPreview">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Vista Previa - Hoja de Vida</h3>
          <button @click="cerrarPreview" class="btn-close">✕</button>
        </div>
        <div class="modal-body">
          <iframe v-if="pdfPreviewUrl" :src="pdfPreviewUrl" width="100%" height="600px" style="border: none;"></iframe>
        </div>
      </div>
    </div>

    <div ref="contenidoPDF" class="contenido-pdf" :class="{ 'generando-pdf': generando }">
      <div class="hoja-vida-completa">
        <div class="pdf-header">
          <div class="pdf-container">
            <div class="pdf-image-column">
              <img src="/assets/Escudo.svg" alt="Logo institucional" class="pdf-imagen" />
            </div>
            <div class="pdf-compacto">
              <h3>FORMATO ÚNICO</h3>
              <h2>HOJA DE VIDA</h2>
              <p>Persona Natural</p>
              <p>(Leyes 190 de 1995, 489 y 443 de 1998)</p>
            </div>
            <div class="pdf-entidad">
              <label>Entidad Receptora:</label>
              <div class="pdf-input">{{ entidadReceptora || '____________________' }}</div>
            </div>
          </div>
        </div>

        <div class="pdf-section">
          <div class="pdf-section-title">
            <span class="pdf-section-number">1</span> DATOS PERSONALES
          </div>

          <div class="pdf-form-row">
            <div class="pdf-form-group">
              <label>PRIMER APELLIDO</label>
              <div class="pdf-input">{{ datosPersonales.apellido1 || '' }}</div>
            </div>
            <div class="pdf-form-group">
              <label>SEGUNDO APELLIDO</label>
              <div class="pdf-input">{{ datosPersonales.apellido2 || '' }}</div>
            </div>
            <div class="pdf-form-group">
              <label>NOMBRES</label>
              <div class="pdf-input">{{ datosPersonales.nombres || '' }}</div>
            </div>
          </div>

          <div class="pdf-form-row">
            <div class="pdf-form-group">
              <label>DOCUMENTO DE IDENTIFICACIÓN</label>
              <div class="pdf-checkboxes">
                <span class="pdf-checkbox" :class="{ active: datosPersonales.tipoDocumento === 'C.C' }">☑ C.C</span>
                <span class="pdf-checkbox" :class="{ active: datosPersonales.tipoDocumento === 'C.E' }">☐ C.E</span>
                <span class="pdf-checkbox" :class="{ active: datosPersonales.tipoDocumento === 'PAS' }">☐ PAS</span>
              </div>
            </div>
            <div class="pdf-form-group">
              <label>NÚMERO</label>
              <div class="pdf-input">{{ datosPersonales.numDocumento || '' }}</div>
            </div>
          </div>

          <div class="pdf-form-row">
            <div class="pdf-form-group">
              <label>SEXO</label>
              <div class="pdf-checkboxes">
                <span class="pdf-checkbox" :class="{ active: datosPersonales.sexo === 'Femenino' }">☐ F</span>
                <span class="pdf-checkbox" :class="{ active: datosPersonales.sexo === 'Masculino' }">☐ M</span>
              </div>
            </div>
            <div class="pdf-form-group">
              <label>NACIONALIDAD</label>
              <div class="pdf-checkboxes">
                <span class="pdf-checkbox" :class="{ active: datosPersonales.nacionalidad === 'Colombiano' }">☐ COL.</span>
                <span class="pdf-checkbox" :class="{ active: datosPersonales.nacionalidad === 'Extranjero' }">☐ EXT.</span>
              </div>
            </div>
            <div class="pdf-form-group">
              <label>PAÍS</label>
              <div class="pdf-input">{{ datosPersonales.pais || '' }}</div>
            </div>
          </div>

          <div class="pdf-form-row">
            <div class="pdf-form-group">
              <label>TELÉFONO</label>
              <div class="pdf-input">{{ datosPersonales.direccionCorrespondencia?.telefono || '' }}</div>
            </div>
            <div class="pdf-form-group">
              <label>EMAIL</label>
              <div class="pdf-input">{{ datosPersonales.direccionCorrespondencia?.email || '' }}</div>
            </div>
          </div>
        </div>

        <div class="pdf-section">
          <div class="pdf-section-title">
            <span class="pdf-section-number">2</span> FORMACIÓN ACADÉMICA
          </div>

          <div class="pdf-form-group">
            <label>EDUCACIÓN BÁSICA Y MEDIA</label>
            <p class="pdf-p">
              ÚLTIMO GRADO APROBADO: <strong>{{ formacionAcademica.gradoBasica || '' }}°</strong>
            </p>
            <p class="pdf-p">
              TÍTULO OBTENIDO: <strong>{{ formacionAcademica.tituloBachiller || '' }}</strong>
            </p>
            <p class="pdf-p">
              FECHA DE GRADO: {{ formacionAcademica.mesGrado || '' }}/{{ formacionAcademica.anioGrado || '' }}
            </p>
          </div>

          <div v-if="formacionAcademica.formacionesSuperior && formacionAcademica.formacionesSuperior.length > 0">
            <label>EDUCACIÓN SUPERIOR</label>
            <table class="pdf-table">
              <thead>
                <tr>
                  <th>MODALIDAD</th>
                  <th>SEMESTRES</th>
                  <th>GRADUADO</th>
                  <th>TÍTULO</th>
                  <th>AÑO TERMINACIÓN</th>
                  <th>TARJETA PROF.</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="formacion in formacionAcademica.formacionesSuperior" :key="formacion._id || Math.random()">
                  <td>{{ formacion.modalidad || '' }}</td>
                  <td>{{ formacion.semestres || '' }}</td>
                  <td>{{ formacion.graduado || '' }}</td>
                  <td>{{ formacion.titulo || '' }}</td>
                  <td>{{ formacion.anioTermino || formacion.anio || '' }}</td>
                  <td>{{ formacion.tarjeta || '' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="pdf-section">
          <div class="pdf-section-title">
            <span class="pdf-section-number">3</span> EXPERIENCIA LABORAL
          </div>

          <div v-if="experiencias && experiencias.length > 0">
            <div v-for="(exp, index) in experiencias" :key="index" class="pdf-experiencia">
              <div class="pdf-form-row">
                <div class="pdf-form-group">
                  <label>EMPRESA</label>
                  <div class="pdf-input">{{ exp.empresa || '' }}</div>
                </div>
                <div class="pdf-form-group">
                  <label>TIPO</label>
                  <div class="pdf-checkboxes">
                    <span class="pdf-checkbox" :class="{ active: (exp.tipoEntidad || '').toLowerCase() === 'publica' }">☐ PÚBLICA</span>
                    <span class="pdf-checkbox" :class="{ active: (exp.tipoEntidad || '').toLowerCase() === 'privada' }">☐ PRIVADA</span>
                  </div>
                </div>
                <div class="pdf-form-group">
                  <label>PAÍS</label>
                  <div class="pdf-input">{{ exp.pais || '' }}</div>
                </div>
              </div>

              <div class="pdf-form-row">
                <div class="pdf-form-group">
                  <label>CARGO</label>
                  <div class="pdf-input">{{ exp.cargo || '' }}</div>
                </div>
                <div class="pdf-form-group">
                  <label>FECHA INGRESO</label>
                  <div class="pdf-input">{{ formatearFecha(exp.fechaIngreso) }}</div>
                </div>
                <div class="pdf-form-group">
                  <label>FECHA RETIRO</label>
                  <div class="pdf-input">{{ formatearFecha(exp.fechaRetiro) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="pdf-no-data">No se han registrado experiencias laborales</p>
          </div>
        </div>

        <div class="pdf-section">
          <div class="pdf-section-title">
            <span class="pdf-section-number">4</span> TIEMPO TOTAL DE EXPERIENCIA
          </div>
          <table class="pdf-table">
            <thead>
              <tr>
                <th>OCUPACIÓN</th>
                <th colspan="2">TIEMPO DE EXPERIENCIA</th>
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
                <td>{{ tiempoExperiencia.publico?.anios || 0 }}</td>
                <td>{{ tiempoExperiencia.publico?.meses || 0 }}</td>
              </tr>
              <tr>
                <td>EMPLEADO DEL SECTOR PRIVADO</td>
                <td>{{ tiempoExperiencia.privado?.anios || 0 }}</td>
                <td>{{ tiempoExperiencia.privado?.meses || 0 }}</td>
              </tr>
              <tr>
                <td>TRABAJADOR INDEPENDIENTE</td>
                <td>{{ tiempoExperiencia.independiente?.anios || 0 }}</td>
                <td>{{ tiempoExperiencia.independiente?.meses || 0 }}</td>
              </tr>
              <tr style="font-weight: bold;">
                <td><strong>TOTAL TIEMPO EXPERIENCIA</strong></td>
                <td>{{ tiempoExperiencia.totalAnios || 0 }}</td>
                <td>{{ tiempoExperiencia.totalMeses || 0 }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pdf-section">
          <div class="pdf-section-title">
            <span class="pdf-section-number">5</span> FIRMA DEL SERVIDOR PÚBLICO O CONTRATISTA
          </div>

          <div class="pdf-form-row">
            <div class="pdf-form-group">
              <label>Ciudad:</label>
              <div class="pdf-input">{{ firmaServidor.ciudadDiligenciamiento || '' }}</div>
            </div>
            <div class="pdf-form-group">
              <label>Fecha:</label>
              <div class="pdf-input">{{ formatearFecha(firmaServidor.fechaDiligenciamiento) }}</div>
            </div>
          </div>

          <div class="pdf-firma">
            <div v-if="firmaServidor.firmaServidor" class="pdf-firma-imagen">
              <img :src="firmaServidor.firmaServidor" alt="Firma" style="max-width: 200px; height: auto;" />
            </div>
            <div v-else class="pdf-firma-linea">
              _________________________________
            </div>
            <p>FIRMA DEL SERVIDOR PÚBLICO O CONTRATISTA</p>
          </div>
        </div>

        <div class="pdf-footer">
          <p>LÍNEA GRATUITA NACIONAL 01800917770 - PÁGINA WEB: www.funcionpublica.gov.co</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import { showSuccess, showError } from "../utils/showMessage";

export default {
  name: 'PDFGeneratorComponent',
  props: {
    datosPersonales: { type: Object, default: () => ({}) },
    formacionAcademica: { type: Object, default: () => ({}) },
    experiencias: { type: Array, default: () => [] },
    tiempoExperiencia: { type: Object, default: () => ({}) },
    firmaServidor: { type: Object, default: () => ({}) },
    entidadReceptora: { type: String, default: '' }
  },
  data() {
    return {
      generando: false,
      mostrarPreview: false,
      pdfPreviewUrl: null
    }
  },
  methods: {
    async generarPDF() {
      this.generando = true;
      try {
        const elemento = this.$refs.contenidoPDF;
        // Hacer visible temporalmente
        const prevDisplay = elemento.style.display;
        const prevPosition = elemento.style.position;
        const prevLeft = elemento.style.left;
        elemento.style.display = 'block';
        elemento.style.position = 'absolute';
        elemento.style.left = '-9999px';

        const nombreArchivo = this.generarNombreArchivo();
        const opciones = {
          margin: 0,
          filename: nombreArchivo,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        await html2pdf().set(opciones).from(elemento).save();
        showSuccess('✅ PDF generado exitosamente!');

        // Restaurar estilos
        elemento.style.display = prevDisplay;
        elemento.style.position = prevPosition;
        elemento.style.left = prevLeft;
      } catch (error) {
        console.error('Error al generar PDF:', error);
        showError('❌ Error al generar el PDF. Intenta nuevamente.');
      } finally {
        this.generando = false;
      }
    },

    async previsualizarPDF() {
      this.generando = true;
      try {
        const elemento = this.$refs.contenidoPDF;
        const prevDisplay = elemento.style.display;
        const prevPosition = elemento.style.position;
        const prevLeft = elemento.style.left;
        elemento.style.display = 'block';
        elemento.style.position = 'absolute';
        elemento.style.left = '-9999px';

        const opciones = {
          margin: 0,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        let pdfBlob;
        await html2pdf()
          .set(opciones)
          .from(elemento)
          .toPdf()
          .get('pdf')
          .then(pdf => {
            pdfBlob = pdf.output('blob');
          });

        this.pdfPreviewUrl = URL.createObjectURL(pdfBlob);
        this.mostrarPreview = true;

        elemento.style.display = prevDisplay;
        elemento.style.position = prevPosition;
        elemento.style.left = prevLeft;
      } catch (error) {
        console.error('Error al generar preview:', error);
        showError('❌ Error al generar la vista previa.');
      } finally {
        this.generando = false;
      }
    },

    imprimirDirecto() {
      this.generarPDF();
    },

    cerrarPreview() {
      this.mostrarPreview = false;
      if (this.pdfPreviewUrl) {
        URL.revokeObjectURL(this.pdfPreviewUrl);
        this.pdfPreviewUrl = null;
      }
    },

    generarNombreArchivo() {
      const nombre = this.datosPersonales.nombres || 'HojaVida';
      const apellido = this.datosPersonales.apellido1 || '';
      const fecha = new Date().toISOString().slice(0, 10);
      return `HojaVida_${nombre}_${apellido}_${fecha}.pdf`.replace(/\s+/g, '_');
    },

    formatearFecha(fecha) {
      if (!fecha) return '';
      try {
        if (typeof fecha === 'object' && 'dia' in fecha && 'mes' in fecha && 'anio' in fecha) {
          const d = String(fecha.dia).padStart(2, '0');
          const m = String(fecha.mes).padStart(2, '0');
          const a = String(fecha.anio);
          return `${d}/${m}/${a}`;
        }
        const date = new Date(fecha);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
      } catch (error) {
        return '';
      }
    }
  },

  beforeUnmount() {
    if (this.pdfPreviewUrl) {
      URL.revokeObjectURL(this.pdfPreviewUrl);
    }
  }
}
</script>

<style scoped>
/* acciones */
.pdf-actions { display: flex; gap: 15px; margin: 20px 0; justify-content: center; flex-wrap: wrap; }
.boton-pdf, .boton-preview, .boton-imprimir { padding: 12px 24px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-size: 14px; }
.boton-pdf { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; }
.boton-preview { background: linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%); color: white; }
.boton-imprimir { background: linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%); color: white; }
.boton-pdf:hover, .boton-preview:hover, .boton-imprimir:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }
.boton-pdf:disabled, .boton-preview:disabled, .boton-imprimir:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

/* modal preview */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 9999; }
.modal-content { background: white; border-radius: 12px; width: 90%; max-width: 900px; height: 90%; display: flex; flex-direction: column; }
.modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #dee2e6; }
.btn-close { background: none; border: none; font-size: 24px; cursor: pointer; color: #666; }
.modal-body { flex: 1; padding: 20px; }

/* contenido PDF */
.contenido-pdf { display: none; }
.contenido-pdf.generando-pdf { display: block; }
.hoja-vida-completa { width: 794px; background: white; padding: 20px; font-family: Arial, sans-serif; font-size: 12px; color: #333; }
.pdf-header { border: 2px solid #0066cc; border-radius: 8px; margin-bottom: 15px; }
.pdf-container { display: flex; justify-content: space-between; align-items: flex-start; padding: 15px; gap: 20px; }
.pdf-imagen { width: 80px; height: 95px; border: 1px solid #ccc; }
.pdf-compacto { text-align: center; flex: 1; }
.pdf-compacto h2, .pdf-compacto h3 { margin: 2px 0; color: #333; }
.pdf-compacto h2 { font-size: 16px; font-weight: bold; }
.pdf-compacto h3 { font-size: 14px; }
.pdf-compacto p { margin: 1px 0; font-size: 10px; }
.pdf-entidad { text-align: right; }
.pdf-entidad label { font-size: 10px; font-weight: bold; }
.pdf-section { border: 2px solid #0066cc; border-radius: 8px; padding: 15px; margin-bottom: 15px; page-break-inside: avoid; }
.pdf-section-title { background-color: #333; color: white; padding: 5px 10px; margin: -15px -15px 15px -15px; font-weight: bold; font-size: 12px; }
.pdf-section-number { display: inline-block; width: 18px; height: 18px; background-color: #666; color: white; text-align: center; border-radius: 50%; margin-right: 8px; font-size: 10px; line-height: 18px; }
.pdf-form-row { display: flex; margin-bottom: 10px; gap: 15px; flex-wrap: wrap; }
.pdf-form-group { flex: 1; min-width: 200px; }
.pdf-form-group label { display: block; font-weight: bold; font-size: 9px; margin-bottom: 3px; color: #333; }
.pdf-input { border: 1px solid #ccc; padding: 4px 8px; min-height: 18px; font-size: 11px; background-color: #f9f9f9; }
.pdf-checkboxes { display: flex; gap: 15px; flex-wrap: wrap; }
.pdf-checkbox { font-size: 10px; }
.pdf-checkbox.active { font-weight: bold; color: #0066cc; }
.pdf-table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 10px; }
.pdf-table th, .pdf-table td { border: 1px solid #ccc; padding: 4px 6px; text-align: center; }
.pdf-table th { background-color: #f0f0f0; font-weight: bold; }
.pdf-experiencia { border: 1px solid #ddd; margin-bottom: 10px; padding: 10px; border-radius: 4px; page-break-inside: avoid; }
.pdf-declaration { font-size: 10px; line-height: 1.4; margin: 10px 0; padding: 10px; background-color: #f8f9fa; border-left: 4px solid #0066cc; }
.pdf-firma { text-align: center; margin: 20px 0; }
.pdf-firma-linea { margin: 30px auto 10px; text-align: center; font-size: 14px; }
.pdf-firma p { margin: 5px 0; font-size: 10px; font-weight: bold; }
.pdf-footer { text-align: center; padding: 15px; background-color: #f8f9fa; border-radius: 8px; margin-top: 20px; font-size: 10px; color: #666; }
</style>


