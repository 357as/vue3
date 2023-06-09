import { createApp } from "vue";
import App from "./App.vue";
// Element Plus
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
// Element Plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// store
import store from "./store";
// router
import route from "./route.js";
createApp(App).use(route).use(store).use(ElementPlus).mount("#app");
