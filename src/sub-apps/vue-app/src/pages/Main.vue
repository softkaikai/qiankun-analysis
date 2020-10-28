<template>
    <div>this is vue-app</div>
    <nav>
        <a v-for="(nav) in pages"
           :key="nav.name"
           @click="jump(nav.router)"
           class="a"
        >{{nav.name}}</a>
    </nav>
    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: "Main",
        data() {
            return {
                pages: [
                    {name: 'Product', router: '/product'},
                    {name: 'Contract', router: '/contract'},
                    {name: 'My', router: '/my'},
                ]
            }
        },
        methods: {
            jump(router: string) {
                this.$router.push(router)
            }
        }
    })
</script>

<style scoped>
    .a {
        color: #07d;
        cursor: pointer;
        margin-right: 20px;
    }
</style>
