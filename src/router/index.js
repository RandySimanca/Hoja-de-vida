import { createRouter, createWebHistory } from "vue-router";

// Layouts
import LayoutPublico from "../layouts/LayoutPublico.vue";
import LayoutPrivado from "../layouts/LayoutPrivado.vue";

// Vistas públicas
import LoginViews from "../views/LoginViews.vue";

// Vistas privadas
import Home from "../views/Home.vue";
import Hoja1 from "../views/Hoja1.vue";
import Hoja2 from "../views/Hoja2.vue";
import Hoja2Extra from "../views/Hoja2Extra.vue";
import Hoja3 from "../views/Hoja3.vue";

// Middleware para proteger rutas
const requireAuth = (to, from, next) => {
  const token = localStorage.getItem("token");
  token ? next() : next("/login");
};


// 🚀 Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 🟦 Layout público (sin menú)
    {
      path: "/",
      component: LayoutPublico,
      children: [
        { path: "", redirect: "/Login" },
        {
          path: "login",
          name: "Login",
          component: LoginViews,
        }
      ]
    },

    {
      path: "/panel",
      component: LayoutPrivado,
      beforeEnter: requireAuth, // opcional si deseas proteger con token
      children: [
        { path: "Hoja1", component: Hoja1 },
        { path: "Hoja2", component: Hoja2 },
        { path: "Hoja2Extra", component: Hoja2Extra },
        { path: "Hoja3", component: Hoja3 }
      ]
    },

    ]
});

export default router;