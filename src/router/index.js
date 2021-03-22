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
    path: "/accounts/signup",
    name: "accountsSignup",
    component: () =>
      import("../views/Signup.vue")
  },
  {
    path: "/accounts/password/reset",
    name: "passwordReset",
    component: () =>
      import("../views/PasswordReset")
  },
  {
    path: "/accounts/login/auth-switcher",
    name: "Accounts",
    component: () =>
      import("../views/Accounts.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
