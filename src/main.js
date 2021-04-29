import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from './router'
import store from './store'
import AlertPopup from './components/AlertPopup.vue'
const app = createApp(App);
app.use(router)
app.use(store)
app.component('AlertPopup', AlertPopup)
app.mount("#app");
