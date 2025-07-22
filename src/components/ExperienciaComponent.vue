<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const experiencia = reactive({
  empresa: '',
  tipoEntidad: '',
  pais: '',
  departamento: '',
  municipio: '',
  correoEntidad: '',
  telefonos: '',
  fechaIngreso: { dia: '', mes: '', año: '' },
  fechaRetiro: { dia: '', mes: '', año: '' },
  cargo: '',
  dependencia: '',
  direccion: ''
});

const guardarExperiencia = async () => {
  try {
    await axios.post('/api/experiencia', experiencia);
    console.log('Experiencia enviada correctamente');
  } catch (error) {
    console.error('Error al guardar:', error);
  }
};
</script>

<template>
  <div class="section">
    <div class="form-group">
      <label>EMPLEO ACTUAL O CONTRATO ANTERIOR</label>

      <div style="display: flex; margin-top: 3px">
        <div class="form-group col-2">
          <label>EMPRESA O ENTIDAD.</label>
          <input type="text" v-model="experiencia.empresa" class="form-control" />
        </div>

        <div class="checkbox-group">
          <label>PUBLICA</label>
          <input type="radio" value="Publica" v-model="experiencia.tipoEntidad" />
        </div>

        <div class="checkbox-group">
          <label>PRIVADA</label>
          <input type="radio" value="Privada" v-model="experiencia.tipoEntidad" />
        </div>

        <div class="form-group col-2">
          <label>PAÍS</label>
          <input type="text" v-model="experiencia.pais" class="form-control" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <label>DEPARTAMENTO</label>
          <input type="text" v-model="experiencia.departamento" class="form-control" />
        </div>

        <div class="form-group col-2">
          <label>MUNICIPIO</label>
          <input type="text" v-model="experiencia.municipio" class="form-control" />
        </div>

        <div class="form-group col-2">
          <label>CORREO ELECTRÓNICO ENTIDAD</label>
          <input type="email" v-model="experiencia.correoEntidad" class="form-control" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <label>TELÉFONOS</label>
          <input type="text" v-model="experiencia.telefonos" class="form-control" />
        </div>

        <div class="form-group col-2">
          <label>FECHA DE INGRESO</label>
          <div style="display: flex">
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label>DÍA</label>
              <input type="text" v-model="experiencia.fechaIngreso.dia" class="form-control" />
            </div>
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label>MES</label>
              <input type="text" v-model="experiencia.fechaIngreso.mes" class="form-control" />
            </div>
            <div class="form-group" style="width: 60px">
              <label>AÑO</label>
              <input type="text" v-model="experiencia.fechaIngreso.año" class="form-control" />
            </div>
          </div>
        </div>

        <div class="form-group col-2">
          <label>FECHA DE RETIRO</label>
          <div style="display: flex">
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label>DÍA</label>
              <input type="text" v-model="experiencia.fechaRetiro.dia" class="form-control" />
            </div>
            <div class="form-group" style="width: 30px; margin-right: 5px">
              <label>MES</label>
              <input type="text" v-model="experiencia.fechaRetiro.mes" class="form-control" />
            </div>
            <div class="form-group" style="width: 60px">
              <label>AÑO</label>
              <input type="text" v-model="experiencia.fechaRetiro.año" class="form-control" />
            </div>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <label>CARGO O CONTRATO ACTUAL</label>
          <input type="text" v-model="experiencia.cargo" class="form-control" />
        </div>

        <div class="form-group col-2">
          <label>DEPENDENCIA</label>
          <input type="text" v-model="experiencia.dependencia" class="form-control" />
        </div>

        <div class="form-group col-2">
          <label>DIRECCIÓN</label>
          <input type="text" v-model="experiencia.direccion" class="form-control" />
        </div>
      </div>

      <div class="form-group" style="margin-top: 20px">
        <button class="btn btn-primary" @click="guardarExperiencia">Guardar experiencia</button>
      </div>
    </div>
  </div>
</template>


<style>
.section {
  border: 2px solid rgb(0, 204, 255);
  padding: 10px;
  gap: 10px;
  display: block;
  border-radius: 18px;
  flex-direction: row;
  gap: 1px;
  align-items: flex-start;
  margin-top: 0;
}

.image-column,
.form-group {
  flex: 1; /* Asegura que cada elemento ocupe un espacio proporcional */
}

.main-section {
  display: flex;
}

.header {
  text-align: center;
}

.header h2,
.header h3,
.header p {
  margin: 5px 0;
  color: #f8f6f6;
}

.form-group label {
  margin-bottom: 4px;
}

.form-control {
  width: 70%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.form-control3 {
  width: 30%;
  padding: 4px;
  box-sizing: border-box;
  height: 28px;
}

.imagen {
  width: 100px;
  height: 120px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.section-title {
  background-color: rgb(10, 10, 10);
  padding: 2px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #ccc;
  max-width: fit-content;
  border-radius: 5px;
}
.section-number {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #b4b4b4;
  color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  outline: 2px solid #808080;
}
.form-group {
  margin-right: 5px;
  margin-bottom: 5px;
  flex: 1;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 11px;
}
.form-control {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form-control1 {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form-control2 {
  width: 50%;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.checkbox-group {
  display: flex;
  align-items: left;
  margin-right: 5px;
}
.checkbox-group input {
  margin-left: 0px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}
.table th,
.table td {
  border: 1px solid #ccc;
  padding: 1px;
  text-align: center;
  font-size: 12px;
}
.table th {
  background-color: #f0f0f0;
}
.signature-box {
  border: 1px solid #ccc;
  height: 80px;
  margin-top: 10px;
}
.col-2 {
  flex: 10 0 10%;
}
.col-3 {
  flex: 0 0 31%;
}
.col-4 {
  flex: 0 0 23%;
}
.text-center {
  text-align: center;
}
.footer {
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
}

.p {
  font-size: 11px;
}

.header {
  margin-top: 0;
  align-items: center;
  background-color: #117de9;
  color: rgb(253, 252, 252);
  padding: 16px 32px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-family: "Segoe UI", sans-serif;
  padding-top: 0;
  display: flex;
  justify-content: center;
  text-align: center;
}

.tittle {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-list li a:hover {
  background-color: #00d8ff;
  color: #24292e;
  border-radius: 4px;
}

.compacto h3,
.compacto h2,
.compacto p {
  margin-top: 0;
  margin-bottom: 4px; /* puedes ajustar este valor */
  text-align: center;
}
</style>
