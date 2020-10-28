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


interface Props {
    container: string
}

export async function bootstrap(props: any) {
    console.log('vue app bootstrap props: ', props);
}

export async function mount(props: Props) {
    console.log('vue app mount');
    app.mount(props.container ? '#' + props.container : '#app')
}

export async function unmount(props: Props) {
    console.log('vue app unmount');
    app.unmount(props.container ? '#' + props.container : '#app')
}

export async function update(props: any) {
    console.log('vue app update props: ', props);
}
