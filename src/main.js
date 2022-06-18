import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import WikiBackButton from "./components/WikiBackButton.vue";

const app = createApp(App);
app.component("WikiBackButton", WikiBackButton);
app.use(router);
app.mount("#app");
