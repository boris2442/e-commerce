import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import "./assets/style/style.css";
import router from "./router.js";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(router).mount("#app");
