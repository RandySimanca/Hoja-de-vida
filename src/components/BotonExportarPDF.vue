<!-- src/components/BotonExportarPDF.vue -->
<template>
    <div class="export-container">
      <!-- Botón para exportar hoja individual -->
      <button 
        v-if="mostrarIndividual"
        @click="exportarIndividual" 
        :disabled="generando"
        class="btn-export individual"
        :title="`Exportar ${nombreHoja} a PDF`"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
        {{ generando ? 'Generando...' : `Exportar ${nombreHoja}` }}
      </button>
  
      <!-- Botón para exportar hoja completa -->
      <button 
        v-if="mostrarCompleta"
        @click="exportarCompleta" 
        :disabled="generando"
        class="btn-export completa"
        title="Exportar hoja de vida completa a PDF"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
        </svg>
        {{ generando ? 'Generando PDF completo...' : 'Exportar HV Completa' }}
      </button>
  
      <!-- Indicador de progreso -->
      <div v-if="generando" class="progress-indicator">
        <div class="spinner"></div>
        <span>{{ progresoTexto }}</span>
      </div>
  
      <!-- Mensajes de estado -->
      <div v-if="mensaje" :class="['mensaje', tipoMensaje]">
        {{ mensaje }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue'
  import { usePDFExport } from '../composables/usePDFExport'
  import { showSuccess, showError } from '../utils/showMessage'
  
  const props = defineProps({
    elementoId: {
      type: String,
      required: true
    },
    nombreArchivo: {
      type: String,
      default: 'hoja-de-vida'
    },
    nombreHoja: {
      type: String,
      default: 'Hoja'
    },
    mostrarIndividual: {
      type: Boolean,
      default: true
    },
    mostrarCompleta: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['export-start', 'export-complete', 'export-error'])
  
  const { exportarPDF, exportarHojaCompleta } = usePDFExport()
  
  const generando = ref(false)
  const mensaje = ref('')
  const tipoMensaje = ref('success')
  const progresoTexto = ref('')
  
  const exportarIndividual = async () => {
    generando.value = true
    mensaje.value = ''
    progresoTexto.value = 'Preparando documento...'
    
    emit('export-start', 'individual')
    
    try {
      progresoTexto.value = 'Capturando contenido...'
      await new Promise(resolve => setTimeout(resolve, 500)) // Pequeña pausa para UX
      
      progresoTexto.value = 'Generando PDF...'
      const resultado = await exportarPDF(props.elementoId, props.nombreArchivo)
      
      if (resultado.success) {
        mensaje.value = '✅ PDF generado exitosamente'
        tipoMensaje.value = 'success'
        showSuccess(`📄 ${props.nombreHoja} exportada correctamente`)
        emit('export-complete', 'individual')
      } else {
        throw new Error(resultado.error)
      }
    } catch (error) {
      mensaje.value = `❌ Error: ${error.message}`
      tipoMensaje.value = 'error'
      showError(`Error al exportar ${props.nombreHoja}: ${error.message}`)
      emit('export-error', error)
    } finally {
      generando.value = false
      progresoTexto.value = ''
      setTimeout(() => {
        mensaje.value = ''
      }, 3000)
    }
  }
  
  const exportarCompleta = async () => {
    generando.value = true
    mensaje.value = ''
    progresoTexto.value = 'Preparando hoja de vida completa...'
    
    emit('export-start', 'completa')
    
    try {
      progresoTexto.value = 'Recopilando todas las secciones...'
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      progresoTexto.value = 'Generando PDF completo...'
      const resultado = await exportarHojaCompleta()
      
      if (resultado.success) {
        mensaje.value = '✅ Hoja de vida completa generada exitosamente'
        tipoMensaje.value = 'success'
        showSuccess('📄 Hoja de vida completa exportada correctamente')
        emit('export-complete', 'completa')
      } else {
        throw new Error(resultado.error)
      }
    } catch (error) {
      mensaje.value = `❌ Error: ${error.message}`
      tipoMensaje.value = 'error'
      showError(`Error al exportar hoja completa: ${error.message}`)
      emit('export-error', error)
    } finally {
      generando.value = false
      progresoTexto.value = ''
      setTimeout(() => {
        mensaje.value = ''
      }, 5000)
    }
  }
  </script>
  
  <style scoped>
  .export-container {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  .btn-export {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .btn-export:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .btn-export:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  .btn-export.individual {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
  }
  
  .btn-export.individual:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  }
  
  .btn-export.completa {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
  }
  
  .btn-export.completa:hover:not(:disabled) {
    background: linear-gradient(135deg, #0d9488 0%, #047857 100%);
  }
  
  .progress-indicator {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    background: #f3f4f6;
    border-radius: 8px;
    font-size: 14px;
    color: #374151;
  }
  
  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #e5e7eb;
    border-top: 2px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .mensaje {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    animation: slideIn 0.3s ease;
  }
  
  .mensaje.success {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #10b981;
  }
  
  .mensaje.error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #ef4444;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .export-container {
      margin: 15px 0;
    }
    
    .btn-export {
      padding: 10px 20px;
      font-size: 13px;
    }
  }
  </style>