<template>
  <router-view></router-view>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {}
  });
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
