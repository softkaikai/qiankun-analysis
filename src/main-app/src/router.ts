import { RouteRecordRaw } from 'vue-router'
import LoginComponent from './pages/Login.vue'
import MainComponent from './pages/Main.vue'

export const routes: RouteRecordRaw[] = [
    {path: '/', component: LoginComponent},
    {path: '/main', component: MainComponent},
]

