import { createApp, App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AppComponent from './App.vue'
import { routes } from './router'
import { registerMicroApps, start } from 'qiankun'

const app: App = createApp(AppComponent)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app')
registerMicroApps([
    {
        name: 'react app',
        entry: './subCompiledApps/react-app/static/js/main.55167ce8.chunk.js',
        container: '#subAppContainer',
        activeRule: '/reactApp',
    },
    {
        name: 'vue app',
        entry: './subCompiledApps/vue-app/js/app.d972cee9.js',
        container: '#subAppContainer',
        activeRule: '/vueApp',
    },
])

start();
