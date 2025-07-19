import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hoja1 from "../views/Hoja1.vue";
import Hoja2 from "../views/Hoja2.vue" 
import Hoja2Extra from "../views/Hoja2Extra.vue";
import Hoja3 from "../views/Hoja3.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Hoja1",
      name: "Hoja1",
      component: Hoja1,
    },
    {
      path: "/Hoja2",
      name: "/Hoja2",
      component: Hoja2,
    },
    {
      path:"/Hoja2Extra",
      ncame: "/Hoja2Extra",
      component: Hoja2Extra,
    }, 
    {
      path: "/Hoja3",
      name: "/Hoja3",
      component: Hoja3,
    },
 
  ],
});

export default router;
