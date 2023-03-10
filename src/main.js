import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import DrumKit from "./components/01/DrumKit.vue";
import TheClock from "./components/02/TheClock.vue";
import CSSVariable from "./components/03/CSSVariable.vue";
import HTMLCanvas from "./components/08/HTMLCanvas.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/01", component: DrumKit },
    { path: "/02", component: TheClock },
    { path: "/03", component: CSSVariable },
    { path: "/08", component: HTMLCanvas },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
