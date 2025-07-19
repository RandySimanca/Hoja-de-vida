<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

defineOptions({ name: "LoginView" });

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const router = useRouter();

const iniciarSesion = async () => {
  error.value = "";
  loading.value = true;

  // Validación local simple
  const usuariosMock = [
    { email: "demo@correo.com", password: "123456", nombre: "Demo User" },
    { email: "admin@correo.com", password: "adminpass", nombre: "Administrador" },
  ];

  const usuario = usuariosMock.find(
    (u) => u.email === email.value && u.password === password.value
  );

  if (!usuario) {
    error.value = "Credenciales inválidas";
    loading.value = false;
    return;
  }

  // Simular token JWT falso
  const fakeToken = "fake.jwt.token.local";
  localStorage.setItem("token", fakeToken);
  localStorage.setItem("usuario", JSON.stringify(usuario));
  router.push("/panel/Hoja1"); // o /panel/inicio si usas layout privado
  loading.value = false;
};

</script>

<template>
  <div class="login-container">
    <form @submit.prevent="iniciarSesion" class="login-form">
      <h2>Iniciar sesión</h2>

      <input
        type="email"
        v-model="email"
        placeholder="Correo electrónico"
        required
        :class="{ errorInput: error && !email }"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Contraseña"
        required
        :class="{ errorInput: error && !password }"
      />

      <button type="submit" :disabled="loading">
        {{ loading ? "Ingresando..." : "Ingresar" }}
      </button>

      <p v-if="error" class="error-message"> {{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #1e3c72, #2a5298);
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 320px;
  display: flex;
  flex-direction: column;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #2a5298;
}

.login-form input {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.3s;
}

.login-form input:focus {
  outline: none;
  border-color: #2a5298;
}

.errorInput {
  border-color: #e63946;
}

.login-form button {
  background-color: #2a5298;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-form button:disabled {
  background-color: #6c89b7;
  cursor: not-allowed;
}

.login-form button:hover:not(:disabled) {
  background-color: #1e3c72;
}

.error-message {
  color: #e63946;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
}
</style>
