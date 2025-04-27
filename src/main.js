import { router } from './route/app.js'
import { createApp } from 'vue'
import App from './App.vue'
import './css/app.css'

createApp(App).use(router).mount('#app')