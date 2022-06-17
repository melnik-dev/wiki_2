import { createRouter, createWebHistory } from "vue-router";
import WikiMaine from "../components/WikiMaine.vue";

const soderjanie = { template: "<h1>Содержание</h1>" };

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: WikiMaine, alias: "/" },
    { path: "/soderjanie", component: soderjanie },
  ],
});
