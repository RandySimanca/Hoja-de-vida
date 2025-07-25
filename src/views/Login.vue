<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>{{ modoRegistro ? "Crear cuenta" : "Bienvenido" }}</h2>
      <p>{{ modoRegistro ? "Completa tus datos para registrarte" : "Inicia sesión para acceder a tu panel" }}</p>

      <form @submit.prevent="modoRegistro ? handleRegister() : handleLogin()">
        <!-- Email -->
        <input
          v-model="email"
          type="email"
          placeholder="Correo electrónico"
          autocomplete="email"
        />

        <!-- Password -->
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          autocomplete="current-password"
        />

        <!-- Nombre completo (solo para registro) -->
        <input
          v-if="modoRegistro"
          v-model="nombre"
          type="text"
          placeholder="Nombre completo"
          autocomplete="name"
        />

        <button type="submit" :disabled="loading">
          {{ loading ? (modoRegistro ? "Registrando..." : "Ingresando...") : (modoRegistro ? "Registrarme" : "Entrar") }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>
      </form>

      <p>
        {{ modoRegistro ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?" }}
        <button @click="modoRegistro = !modoRegistro" class="toggle-btn">
          {{ modoRegistro ? "Entrar" : "Registrarme" }}
        </button>
      </p>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const email = ref("");
const password = ref("");
const nombre = ref("");
const error = ref("");
const loading = ref(false);
const modoRegistro = ref(false);
const router = useRouter();

const handleLogin = async () => {
  error.value = "";
  if (!email.value || !password.value) {
    error.value = "Completa todos los campos";
    return;
  }

  loading.value = true;
  try {
    const res = await axios.post("/api/login", {
      email: email.value,
      password: password.value,
    });

    const { token, usuario } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    router.push(usuario.roles.includes("admin") ? "/admin" : "/panel/Hoja1");
  } catch (e) {
    error.value = e.response?.data?.mensaje || "Error de conexión: " + e.message;
  } finally {
    loading.value = false;
  }
};

const handleRegister = async () => {
  error.value = "";
  if (!email.value || !password.value || !nombre.value) {
    error.value = "Completa todos los campos para registrarte";
    return;
  }

  loading.value = true;
  try {
    await axios.post("/api/usuarios", {
      email: email.value,
      password: password.value,
      nombre: nombre.value,
      roles: ["usuario"], // puedes asignar rol predeterminado
    });

    modoRegistro.value = false;
    error.value = "Registro exitoso. Ahora puedes iniciar sesión.";
  } catch (e) {
    error.value = e.response?.data?.mensaje || "Error al registrar";
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
