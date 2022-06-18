import { createRouter, createWebHistory } from "vue-router";
import WikiMaine from "../components/WikiMaine.vue";
import WikiSoderjanie from "../components/WikiSoderjanie.vue";
import WikiNotFound from "../components/WikiNotFound.vue";
import WikiPost from "../components/WikiPost.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: WikiMaine, alias: "/" },
    { path: "/soderjanie", component: WikiSoderjanie },
    { path: "/post/:id", component: WikiPost },
    { path: "/:pathMatch(.*)*", component: WikiNotFound },
  ],
});
