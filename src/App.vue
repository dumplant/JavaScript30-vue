<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'
export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: sans-serif,Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
