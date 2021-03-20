import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component:() =>
      import("../views/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import("../views/Signup.vue")
  },
  {
    path: "/accounts/login/auth-switcher",
    name: "Accounts",
    children:[],
    component: () =>
      import("../views/Accounts.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
