import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import "../src/assets/main.less"
import store from './store'

const app = createApp(App);
app.use(store)
app.use(router);
app.mount('#app');