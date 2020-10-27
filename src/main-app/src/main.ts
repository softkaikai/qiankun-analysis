import { createApp, App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AppComponent from './App.vue'
import { routes } from './router'

const app: App = createApp(AppComponent)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app')
