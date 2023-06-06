import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'

import './styles.css'

const router = createRouter({
  history: createWebHistory(),
  routes
})



const app = createApp(App)
app.use(V3ScrollLock, {})
app.use(router)
app.mount('#app')
