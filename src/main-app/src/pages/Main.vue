<template>
    <div class="main">
        <div class="nav">
            <ul>
                <li class="nav-item"
                    v-for="(app, index) in apps"
                    :key="app.name"
                    :class="{'nav-item-active': app.active}"
                    @click="selectApp(index)"
                >{{app.name}}</li>
            </ul>
        </div>
        <div class="content">
            <h3 class="app-title">{{activeApp}}</h3>
            <div id="subAppContainer"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: "Main",
        computed: {
            activeApp(): string {
                for (const app of this.apps) {
                    if (app.active) return app.name;
                }

                return '';
            }
        },
        data() {
            return {
                apps: [
                    {name: 'vue-app', router: '/main/vueApp', active: true},
                    {name: 'react-app', router: '/main/reactApp', active: false},
                ]
            }
        },
        methods: {
            selectApp(index: number): void {
                this.apps.forEach((app, appIndex) => {
                    app.active = index === appIndex;
                    if (index === appIndex) {
                        this.$router.push(app.router);
                    }
                })
            }
        }
    })
</script>

<style scoped>
    .main {
        display: flex;
        height: 100%;
    }
    .nav {
        width: 150px;
        height: 100%;
        border-right: 1px solid #e0e0e0;
    }
    .nav-item {
        line-height: 70px;
        text-align: center;
        border-bottom: 1px solid #e0e0e0;
        cursor: pointer;
    }
    .nav-item:hover {
        color: #999;
    }
    .nav-item-active {
        color: #f60;
    }
    .content {
        width: 0;
        flex: 1;
        overflow-y: auto;
    }
    .app-title {
        line-height: 70px;
        border-bottom: 1px solid #e0e0e0;
        padding: 0 20px;
        font-size: 20px;
        font-weight: bold;
    }
</style>
