<template>
    <div>
        <div class="m-t-20">
            <span>账号：</span>
            <input type="text" v-model="account">
        </div>
        <div class="m-t-20">
            <span>密码：</span>
            <input type="text" v-model="password">
        </div>
        <button class="m-t-20" @click="login">登录</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: "Login",
        data() {
            return {
                account: '',
                password: ''
            }
        },
        methods: {
            login(): void {
                this.$router.push('/main')
            }
        }
    })
</script>

<style scoped>
    .login-container {

    }
    .m-t-20 {
        margin-top: 20px;
    }
</style>
