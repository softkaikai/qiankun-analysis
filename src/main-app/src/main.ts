import { createApp, App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import AppComponent from './App.vue'
import { routes } from './router'
import { registerMicroApps, start } from 'qiankun'

const app: App = createApp(AppComponent)
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const ruler = function(app: string) {
    return (location: {href: string}) => location.href.includes(`${app}`);
}

app.use(router)
app.mount('#mainApp')
registerMicroApps(
    [
        {
            name: 'react app',
            entry: '//localhost:8092',
            container: '#subAppContainer',
            activeRule: ruler('reactApp'),
        },
        {
            name: 'vue app',
            entry: '//localhost:8091',
            container: '#subAppContainer',
            activeRule: ruler('vueApp'),
        },
    ],
    {
        async beforeLoad(app) {
            console.log('app: ', app);
        }
    })

start();
