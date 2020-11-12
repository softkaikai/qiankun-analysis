import { createApp, App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import AppComponent from './App.vue'
import { routes } from './router'

declare global {
    interface Window { __POWERED_BY_QIANKUN__: any; }
}
let app: App
function render() {
    app = createApp(AppComponent)
    const router = createRouter({
        history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/main/vueApp' : '/'),
        routes,
    })
    app.use(router)
    app.mount(domApp || '#app')

}
if (!window.__POWERED_BY_QIANKUN__ ) {
    render()
}


interface Props {
    container: HTMLElement
}

export async function bootstrap(props: any) {
    console.log('vue app bootstrap props: ', props);
}
let domApp: HTMLElement | null;
export async function mount(props: Props) {
    console.log('vue app mount', props);
    domApp = props.container.querySelector('#app');
    render();
}

export async function unmount(props: Props) {
    console.log('vue app unmount');
    app.unmount(domApp)
    domApp = null;
}

export async function update(props: any) {
    console.log('vue app update props: ', props);
}
