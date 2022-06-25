import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/router";
import WikiBackButton from "./components/WikiBackButton.vue";

const app = createApp(App);
app.component("WikiBackButton", WikiBackButton);
app.use(store);
app.use(router);
app.mount("#app");
