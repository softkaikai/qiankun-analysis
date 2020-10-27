import { RouteRecordRaw } from 'vue-router'
import MainComponent from './pages/Main.vue'
import ProductComponent from './pages/Product.vue'
import ContractComponent from './pages/Contract.vue'
import MyComponent from './pages/My.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: MainComponent,
        children: [
            {path: 'product', component: ProductComponent},
            {path: 'contract', component: ContractComponent},
            {path: 'my', component: MyComponent},
        ]
    }
]

