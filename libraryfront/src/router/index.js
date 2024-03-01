import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "/",
    component: () => import("../views/LandingPage.vue"),
  },

  {
    path: "*",
    name: "errorpage",
    component: () => import("../views/Error404.vue"),
  },

  {
    path: "/fun",
    name: "funcional",
    component: () => import("../views/Prinf.vue"),
  },
  {
    path: "/fun2",
    name: "funcional2",
    component: () => import("../views/Land.vue"),
  },
];

const router = new VueRouter({ routes });
export default router;
