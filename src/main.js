import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import naive from "naive-ui";
import App from "./App.vue";
// import VueCookies from 'vue3-cookies'
import Router from "./routes";

const app = createApp(App);
app.use(createPinia());
app.use(naive);
app.use(Router);
// app.use(VueCookies);
app.mount("#app");
