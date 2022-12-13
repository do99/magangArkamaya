import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main-dashboard",
    component: () => import("../dashboard/Main.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../login/Login.vue"),
  },
  {
    path: "/TraceIn",
    name: "TraceIn",
    component: () => import("../pages/camshaft/CamshaftTraceIn.vue"),
  },
  {
    path: "/TraceInInput/:id",
    name: "TraceInInput",
    component: () => import("../pages/camshaft/CamshaftTraceInInput.vue"),
  },
  {
    path: "/TraceOut",
    name: "TraceOut",
    component: () => import("../pages/camshaft/CamshaftTraceOut.vue"),
  },
  {
    path: "/TraceOutInput/:id",
    name: "TraceOutInput",
    component: () => import("../pages/camshaft/CamshaftTraceOutInput.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  console.log({ to, from, next, isAuth });

  // if (to.path !== "/login" && isAuth === null) next({ path: "/login" });
  // if (to.path !== "/login" && isAuth === true) next({ path: to.path });
  // else next();

  next();
});

export default router;
