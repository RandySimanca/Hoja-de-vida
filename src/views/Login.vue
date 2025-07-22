<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Bienvenido</h2>
      <p>Inicia sesión para acceder a tu panel</p>

      <form @submit.prevent="handleLogin">
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Correo electrónico"
          autocomplete="email"
        />

        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          autocomplete="current-password"
        />

        <button type="submit" :disabled="loading">
          {{ loading ? "Ingresando..." : "Entrar" }}
        </button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const router = useRouter();

const handleLogin = async () => {
  error.value = "";
  if (!email.value || !password.value) {
    error.value = "Completa todos los campos";
    return;
  }

  loading.value = true;
  try {
    // Realizar la solicitud de inicio de sesión
    const res = await axios.post("/api/login", {
      email: email.value,
      password: password.value,
    });

    const { token, usuario } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    router.push(usuario.roles.includes("admin") ? "/admin" : "/panel/Hoja1");
  } catch (e) {
    if (e.response?.data?.mensaje) {
      error.value = e.response.data.mensaje;
    } else if (e.response?.data) {
      console.error("Respuesta backend:", e.response.data);
      error.value = "Error de servidor: " + JSON.stringify(e.response.data);
    } else if (e.message) {
      error.value = "Error de conexión: " + e.message;
    } else {
      error.value = "Error inesperado";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff, #fff);
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  color: #3730a3;
}

.login-card p {
  margin-bottom: 2rem;
  color: #555;
}

form input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  font-size: 1rem;
}

form button {
  width: 100%;
  padding: 0.75rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

form button:hover {
  background: #4338ca;
}

.error {
  color: red;
  margin-top: 1rem;
  font-weight: bold;
}
</style>
